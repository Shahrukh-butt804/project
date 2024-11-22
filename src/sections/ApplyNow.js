import { useState } from 'react'
import Swal from 'sweetalert2';


const ApplyNow = ({ setShowPage }) => {

    const [merchantFullName, setMerchantFullName] = useState("")
    const [businessLegalName, setBusinessLegalName] = useState("")
    const [amountRequested, setAmountRequested] = useState("")
    const [email, setEmail] = useState("")
    const [businessStartDate, setBusinessStartDate] = useState("")
    const [industry, setIndustry] = useState("")
    const [buisnessAddress, setBuisnessAddress] = useState("")
    const [EIN, setEIN] = useState("")
    const [socialSec, setSocialSec] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [purposeOfFunds, setPurposeOfFunds] = useState("")
    const [homeAddress, setHomeAddress] = useState("")
    const [ownerShip, setOwnerShip] = useState("")
    const [contactNo, setContactNo] = useState("")
    const [altContactNo, setAltContactNo] = useState("")

    const [loader, setLoader] = useState(false)


    // Success Alert
    const showAlert = () => {
        Swal.fire({
            title: 'Thank You!',
            text: 'Your form Has Been Sent Successfully',
            icon: 'success',
            confirmButtonText: 'Okay',
            customClass: {
                // icon:"text-blue-400",
                popup: 'bg-white rounded-lg shadow-lg p-4',
                title: 'text-xl font-bold text-gray-800',
                content: 'text-gray-700',
                confirmButton: 'px-12 py-2 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500 hover:text-outline hover:outline-white '
            }
        });
    };

    // Error Alert
    const showErrorAlert = () => {
        Swal.fire({
            title: 'Error!',
            text: 'Something went wrong.',
            icon: 'error',
            confirmButtonText: 'Try Again',
            customClass: {
                popup: 'bg-white rounded-lg shadow-lg p-4',
                title: 'text-xl font-bold text-red-600',
                content: 'text-gray-700',
                confirmButton: 'px-12 py-2 bg-red-500 text-white rounded hover:bg-red-600'
            }
        });
    };


    // Empty Fields 
    function emptyFields() {

        setMerchantFullName("");
        setBusinessLegalName("");
        setAmountRequested("");
        setEmail("");
        setBusinessStartDate("");
        setIndustry("");
        setBuisnessAddress("");
        setEIN("");
        setSocialSec("");
        setDateOfBirth("");
        setPurposeOfFunds("");
        setHomeAddress("");
        setOwnerShip("");
        setContactNo("");
        setAltContactNo("");
        setLoader(false)

    }


    // FUNCTION to send mail 
    const sendEmail = (e) => {
        e.preventDefault()
        setLoader(true)

        const body = `
    <h3>Merchant Details</h3>
    <p><strong>Merchant Full Name:</strong> ${merchantFullName}</p>
    <p><strong>Business Legal Name:</strong> ${businessLegalName}</p>
    <p><strong>Amount Requested:</strong> ${amountRequested}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Business Start Date:</strong> ${businessStartDate}</p>
    <p><strong>Industry:</strong> ${industry}</p>
    <p><strong>Business Address:</strong> ${buisnessAddress}</p>
    <p><strong>EIN:</strong> ${EIN}</p>
    <p><strong>Social Security:</strong> ${socialSec}</p>
    <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
    <p><strong>Purpose of Funds:</strong> ${purposeOfFunds}</p>
    <p><strong>Home Address:</strong> ${homeAddress}</p>
    <p><strong>Ownership:</strong> ${ownerShip}</p>
    <p><strong>Contact No:</strong> ${contactNo}</p>
    <p><strong>Alternate Contact No:</strong> ${altContactNo}</p>
`;

        showAlert();
        // console.log(merchantFullName,
        //     businessLegalName,
        //     amountRequested,
        //     email,
        //     businessStartDate,
        //     industry,
        //     buisnessAddress,
        //     EIN,
        //     socialSec,
        //     dateOfBirth,
        //     purposeOfFunds,
        //     homeAddress,
        //     ownerShip,
        //     contactNo,
        //     altContactNo)

        // CONFIG for smtp-JS  with secure Token
       
       
        const config = {
            SecureToken: "b4f2ab17-40a5-4e52-8658-e2ee8e629dcb",
            To: 'outows50@gmail.com',
            From: "outows50@gmail.com",
            Subject: "Cloud Funding Solution",
            Body: body,
            isHtml: true
        }

        // Sending Mail
        if (window.Email) {
            window.Email.send(config)
                .then((res) => {
                    // console.log("submitted Successfully!", res)
                    emptyFields();
                    showAlert();

                })
                .catch((err) => {
                    console.error('Error sending email:', err);
                    showErrorAlert();
                    setLoader(false);
                })
        }
    };


    return (

        <div className='h-full lg:h-screen'>

            <div className="max-w-6xl mx-auto p-6  mb-5 lg:mb-0">
                <h2 className="text-4xl font-bold mb-5 text-center underline-thick">Apply Now</h2>
                <p className="mb-2 text-gray-700 text-center">
                    We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to share your feedback,
                    feel free to reach out to us using the form below.
                </p>

                {/* FORM */}
                <form onSubmit={sendEmail} className="bg-white shadow-lg rounded-lg px-6 py-3 text-2xl">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6 ">
                        {/* Merchant Full Name */}
                        <div className="sm:col-span-3">
                            <label for="merchantFullName" className="block text-lg font-medium leading-6 text-gray-900">Merchant FullName</label>
                            <div className="mt-2">
                                <input
                                    value={merchantFullName}
                                    onChange={(e) => setMerchantFullName(e.target.value)}
                                    type="text" name="merchantFullName" id="merchantFullName" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FB7A41] sm:text-lg sm:leading-6 ps-2"
                                    required />
                            </div>
                        </div>


                        {/* Business Legal Name */}
                        <div className="sm:col-span-3">
                            <label for="businessLegalName" className="block text-lg font-medium leading-6 text-gray-900">Business Legal Name</label>
                            <div className="mt-2">
                                <input
                                    value={businessLegalName}
                                    onChange={(e) => setBusinessLegalName(e.target.value)}
                                    type="text" name="businessLegalName" id="businessLegalName" autocomplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FB7A41] sm:text-lg sm:leading-6 ps-2"
                                    required />
                            </div>
                        </div>

                        {/* Amount Requested */}
                        <div className="sm:col-span-2 sm:col-start-1">
                            <label for="amountRequested" className="block text-lg font-medium leading-6 text-gray-900">Amount Requested</label>
                            <div className="mt-2">
                                <input
                                    value={amountRequested}
                                    onChange={(e) => setAmountRequested(e.target.value)}
                                    id="amountRequested" name="amountRequested" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FB7A41] sm:text-lg sm:leading-6 ps-2"
                                    required />
                            </div>
                        </div>
                        {/* Email*/}
                        <div className="sm:col-span-2">
                            <label for="email" className="block text-lg font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email" name="email" id="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FB7A41] sm:text-lg sm:leading-6 ps-2"
                                    required />
                            </div>
                        </div>

                        {/* Industry */}
                        <div className="sm:col-span-2">
                            <label for="industry" className="block text-lg font-medium leading-6 text-gray-900">
                                Industry</label>
                            <div className="mt-2">
                                <input
                                    value={industry}
                                    onChange={(e) => setIndustry(e.target.value)}
                                    type="text" name="industry" id="industry" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FB7A41] sm:text-lg sm:leading-6 ps-2" required />
                            </div>
                        </div>
                        {/* Business start date */}
                        <div className="sm:col-span-2">
                            <label for="businessStartDate" className="block text-lg font-medium leading-6 text-gray-900">
                                Busines Start Date</label>
                            <div className="mt-2">
                                <input
                                    value={businessStartDate}
                                    onChange={(e) => setBusinessStartDate(e.target.value)}
                                    type="date" name="businessStartDate" id="businessStartDate" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FB7A41] sm:text-lg sm:leading-6 ps-2" required />
                            </div>
                        </div>
                        {/* Date of birth */}
                        <div className="sm:col-span-2">
                            <label for="dateOfBirth" className="block text-lg font-medium leading-6 text-gray-900">
                                Date Of Birth</label>
                            <div className="mt-2">
                                <input
                                    value={dateOfBirth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                    type="date" name="dateOfBirth" id="dateOfBirth" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FB7A41] sm:text-lg sm:leading-6 ps-2" required />
                            </div>
                        </div>

                        {/* EIN */}
                        <div className="sm:col-span-2">
                            <label for="EIN" className="block text-lg font-medium leading-6 text-gray-900">
                                EIN</label>
                            <div className="mt-2">
                                <input
                                    value={EIN}
                                    onChange={(e) => setEIN(e.target.value)}
                                    type="text" name="EIN" id="EIN" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FB7A41] sm:text-lg sm:leading-6 ps-2"
                                    required />
                            </div>
                        </div>

                        {/* Business Address */}
                        <div className="sm:col-span-4">
                            <label for="buisnessAddress" className="block text-lg font-medium leading-6 text-gray-900">Buisness Address</label>
                            <div className="mt-2">
                                <input
                                    value={buisnessAddress}
                                    onChange={(e) => setBuisnessAddress(e.target.value)}
                                    id="buisnessAddress" name="buisnessAddress" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FB7A41] sm:text-lg sm:leading-6 ps-2"
                                    required />
                            </div>
                        </div>

                        {/* Social Sec# */}
                        <div className="sm:col-span-2">
                            <label for="socialSec" className="block text-lg font-medium leading-6 text-gray-900">
                                Social Sec#</label>
                            <div className="mt-2">
                                <input
                                    value={socialSec}
                                    onChange={(e) => setSocialSec(e.target.value)}
                                    type="text" name="socialSec" id="socialSec" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FB7A41] sm:text-lg sm:leading-6 ps-2" required />
                            </div>
                        </div>



                        {/* Purpose of Fund */}
                        <div className="sm:col-span-3">
                            <label for="purposeOfFunds" className="block text-lg font-medium leading-6 text-gray-900">Purpose Of Funds</label>
                            <div className="mt-2">
                                <input
                                    value={purposeOfFunds}
                                    onChange={(e) => setPurposeOfFunds(e.target.value)}
                                    type="text" name="purposeOfFunds" id="purposeOfFunds" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FB7A41] sm:text-lg sm:leading-6 ps-2"
                                    required />
                            </div>
                        </div>

                        {/* Home Address */}
                        <div className="sm:col-span-3">
                            <label for="homeAddress" className="block text-lg font-medium leading-6 text-gray-900">Home Address</label>
                            <div className="mt-2">
                                <input
                                    value={homeAddress}
                                    onChange={(e) => setHomeAddress(e.target.value)}
                                    type="text" name="homeAddress" id="homeAddress" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FB7A41] sm:text-lg sm:leading-6 ps-2"
                                    required />
                            </div>
                        </div>

                        {/* OwnerShip */}
                        <div className="sm:col-span-2 sm:col-start-1">
                            <label for="ownerShip" className="block text-lg font-medium leading-6 text-gray-900">OwnerShip</label>
                            <div className="mt-2">
                                <input
                                    value={ownerShip}
                                    onChange={(e) => setOwnerShip(e.target.value)}
                                    type="text" name="ownerShip" id="ownerShip" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FB7A41] sm:text-lg sm:leading-6 ps-2" required />
                            </div>
                        </div>
                        {/* Contact NO */}
                        <div className="sm:col-span-2">
                            <label for="contactNo" className="block text-lg font-medium leading-6 text-gray-900">Contact No</label>
                            <div className="mt-2">
                                <input
                                    value={contactNo}
                                    onChange={(e) => setContactNo(e.target.value)}
                                    type="text" name="contactNo" id="contactNo" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FB7A41] sm:text-lg sm:leading-6 ps-2" required />
                            </div>
                        </div>
                        {/* alternate Contact No */}
                        <div className="sm:col-span-2">
                            <label for="altContactNo" className="block text-lg font-medium leading-6 text-gray-900">Alt Contact No</label>
                            <div className="mt-2">
                                <input
                                    value={altContactNo}
                                    onChange={(e) => setAltContactNo(e.target.value)}
                                    type="text" name="altContactNo" id="altContactNo" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FB7A41] sm:text-lg sm:leading-6 ps-2"
                                    required />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full  rounded-md p-2 bg-[#FB7A41] text-white  hover:outline hover:outline-[#FB7A41] hover:text-black hover:bg-transparent  font-bold transition duration-300 mt-5"
                    >
                        {loader ?
                            <div className="loader border-t-4 border-b-4 border-white rounded-full w-7 h-8 animate-spin relative left-[46%]"></div>
                            : <> Submit</>}
                    </button>
                </form >

                <button
                    type="submit"
                    className="bg-[#FB7A41] text-white hover:outline hover:outline-[#FB7A41] hover:text-black hover:bg-transparent  font-bold py-3 px-6 rounded transition duration-300 mt-4 lg:absolute top-1 left-5"
                    onClick={() => setShowPage(false)}
                >
                    Go Back
                </button>
            </div >
        </div >
    );
};

export default ApplyNow;

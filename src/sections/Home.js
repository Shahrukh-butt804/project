import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"

export default function Home({ setShowPage }) {
    return (
        <>
            <div id="home" className="h-full lg:h-screen pt-16 md:pt-16 lg:pt-36">
                <main className="py-6 px-6 sm:p-6 md:py-10 md:px-8">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-7xl lg:gap-x-16 lg:grid-cols-2 ">
                        {/* Images */}
                        <motion.div
                            style={{ zIndex: 0 }}
                            animate={{ x: 0 }}
                            initial={{ x: 500 }}
                            transition={{ ease: "easeOut", duration: 1 }}
                            className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0 z-0">
                            <img src="https://c8.alamy.com/comp/E6PKKB/successful-business-deal-with-handshake-E6PKKB.jpg" alt="deal" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full hover:scale-110 transition-transform duration-300" loading="lazy" />
                            <img src="https://media.istockphoto.com/id/1008861200/photo/stack-of-one-hundred-dollars-notes.jpg?s=612x612&w=0&k=20&c=Q5Dl6Giw7iWOSWgjy5fnkEyRCTgxT8cJyFIAbOMo7TA=" alt="offer" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-36 hover:scale-110 transition-transform duration-300" loading="lazy" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJAgw8aDXEZwxqCtT7szQvNOc3h38iEkR7g&s" alt="dollar" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-36 hover:scale-110 transition-transform duration-300" loading="lazy" />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            style={{ zIndex: 0 }}
                            animate={{ x: 0 }}
                            initial={{ x: -500 }}
                            transition={{ ease: "easeOut", duration: 1 }}
                            className='text-2xl mt-2 col-start-1 sm:col-span-2 lg:mt-0 ms-0 md:mx-1 lg:mx-10 lg:row-start-1 lg:col-span-1 w-full md:w-[600px] h-full p-0 md:p-0 '>
                            <h1 className='text-5xl md:text-6xl text-[#FB7A41] font-bold mb-2'>Get Your Loan Approved Fast!</h1>
                            <p className="mt-8 text-2xl leading-[1.5] ">
                                At <span className='italic font-semibold font-serif'>this APP Name </span>,Our vision is to be your partner in realizing your business dreams, whether that means expanding your beauty salon, strengthening your attorney firm, or growing your convenience store
                            </p>
                            <motion.div
                                initial={{x:-400}}
                                animate={{x:0}}
                                transition={{type:"spring",stiffness:1800,duration:1,delay:0.6}}
                                className='flex gap-4 mt-10 '>
                                <button className="bg-[#FB7A41] text-white hover:outline hover:outline-[#FB7A41] hover:text-black hover:bg-transparent  font-bold py-2 px-4 rounded transition duration-300"
                                    onClick={() => setShowPage(true)}
                                >
                                    Apply Now</button>
                            </motion.div>
                            <div className='flex items-center gap-3 mt-5 text-[#FB7A41]'>
                                <p className='text-black font-semibold'>Follow us</p>
                                <span className='hover:text-black'>
                                    <FaFacebook />
                                </span>
                                <span className='hover:text-black'>
                                    <FaTwitter />
                                </span>
                                <span className='hover:text-black'>
                                    <FaLinkedin />
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </main>
            </div>

        </>
    )
}
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMoneyCheck } from 'react-icons/fa';
import { TbLicense } from 'react-icons/tb';
import { FaSheetPlastic } from 'react-icons/fa6';

const Requirements = () => {
    const requirements = [
        {
            title: "Business Statement",
            description: "4 Months Business Bank Statement",
            icon: <FaSheetPlastic className="text-4xl mb-2" />
        },
        {
            title: "Check",
            description: "A Void Check",
            icon: <FaMoneyCheck className="text-4xl mb-2" />
        },
        {
            title: "Driving License",
            description: "A Driving License",
            icon: <TbLicense className="text-4xl mb-2" />
        },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    // Observer 
    useEffect(() => {
        const currentNode = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once visible
                }
            },
            { threshold: 0.1 }
        );

        if (currentNode) {
            observer.observe(currentNode);
        }

        return () => {
            if (currentNode) {
                observer.unobserve(currentNode);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            id="requirement"
            className="h-screen pt-10  md:pt-28 md:mt-32 w-full bg-slate-100 p-6 overflow-auto"
        >
            <h2 className="text-2xl md:text-4xl mt-16 md:mt-0 font-bold mb-8 text-center underline-thick">
                A FASTER WAY TO FUND YOUR DREAMS
            </h2>

            <div className='ms-1 md:ms-5 lg:ms-52 text-xl'>
                <h1 className='text-2xl mb-7 uppercase'>Requirement</h1>
                <p>Please send us a signed "Skylight Funding Loan Application"</p>
                <p>with the following documents to e-mail: apps@skylightfunding.com</p>
            </div>

            <div className="max-w-2xl ms-1 md:ms-5 lg:ms-52 mt-10">
                {requirements.map((req, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 100 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.5 }}
                        whileHover={{ paddingLeft:20, transition: { duration: 0.1, }, }}
                        className="flex items-center my-10 w-full md:w-fit"
                    >
                        <div className="mr-4 text-[#FB7A41]">{req.icon}</div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-1">{req.title}</h3>
                            <p className="text-gray-600">{req.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Requirements;

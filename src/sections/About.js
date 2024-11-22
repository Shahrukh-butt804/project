import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Observer for component
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
    <div id="about" className='h-full md:h-screens bg-slate-100  py-2 pb-8 pt-0  mt:6 md:mt-24 z-0 md:pt-24'>
      <div ref={ref} className="flex flex-col md:flex-row items-start justify-between max-w-7xl md:mx-auto gap-0 md:gap-20 px-4 md:px-2 lg:px-4 overflow-auto z-0">
        
        {/* Content  */}
        <motion.div
          ref={ref}
          style={{ zIndex: 0 }}
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: isVisible ? 0 : -500, opacity: isVisible ? 1 : 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="flex-1 min-w-[200px] lg:min-w-[300px] px-1 lg:px-4 mt-16 md:mt-0 ms-0 md:ms-3 lg:ms-0"
        >
          <h2 className="text-4xl underline-thick font-bold mb-5 uppercase">About Us</h2>
          <p className="mb-2">
            We are dedicated to providing fast and reliable loan services. Our mission is to empower individuals with the financial resources they need to achieve their goals.
          </p>
          <p>
          The way we work is vastly different than how you may have obtained funding from your bank in the past. A perfect credit score or history is not required to gain funding, and zero collateral is requested. We will also set up a repayment plan tailored to you specifically, making the payments not only flexible but also affordable. The most important reason why people have chosen us at skylight funding in the past is simply because businesses are more likely to get approved for cash advances than bank loans. 
          </p>
          <h2 className="text-xl font-bold mb-2 mt-2">Our Commitment</h2>
          <p>
            At This App Name, we are committed to your success. We strive to provide exceptional service, competitive rates, and a hassle-free experience. Your financial well-being is our priority, and we take pride in helping you navigate your financial journey.
          </p>

          <h2 className="text-xl font-bold mt-5 mb-2">Why Choose Us?</h2>
          <ul className='flex flex-col gap-2'>
            <li>Fast and Easy Applications: Our online application process is designed for speed and simplicity, ensuring you can access the funds you need without unnecessary delays.</li>
            <li>Dedicated Support: Our team of financial experts is here to guide you through every step of the application process.</li>
            <li>Transparent Terms: We believe in honesty and clarity. You'll always know what to expect, with no hidden fees or surprises.</li>
          </ul>
        </motion.div>


        {/* Image  */}
        <motion.div
          style={{ zIndex: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0, duration: isVisible ? 2 : 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="flex-1 min-w-[350px] md:min-w-[380px] lg:min-w-[550px] px-1 lg:px-4 mt-10 md:mt-0">
          <img
            src="https://images.pexels.com/photos/7682351/pexels-photo-7682351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About Us"
            className="w-screen md:w-full h-[700px] rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </div>
  );
}

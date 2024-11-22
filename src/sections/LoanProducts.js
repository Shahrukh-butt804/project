import { useState, useEffect, useRef } from 'react';
import { FaBriefcase, FaMoneyBillWave, FaCreditCard, FaCashRegister, FaBuilding, FaWarehouse, FaHammer } from 'react-icons/fa';
import { motion } from 'framer-motion';

const LoanProductsData = [
  {
    id: 1,
    title: 'Small Business Loans',
    description: 'Flexible financing options to support growth and operational needs.',
    icon: <FaBriefcase className="text-4xl mb-4" />,
  },
  {
    id: 2,
    title: 'Working Capital Advances',
    description: 'Quick funds to cover operational expenses and boost cash flow.',
    icon: <FaMoneyBillWave className="text-4xl mb-4" />,
  },
  {
    id: 3,
    title: 'Business Line Of Credit',
    description: 'Flexible credit access for managing cash flow and business expenses.',
    icon: <FaCreditCard className="text-4xl mb-4" />,
  },
  {
    id: 4,
    title: 'ACH Cash Flow Loans',
    description: 'Short-term loans utilizing ACH for quick cash flow solutions.',
    icon: <FaCashRegister className="text-4xl mb-4" />,
  },
  {
    id: 5,
    title: 'Term Loans',
    description: 'Fixed loans for long-term financing needs and capital projects.',
    icon: <FaBuilding className="text-4xl mb-4" />,
  },
  {
    id: 6,
    title: 'SBA Loans',
    description: 'Government-backed loans designed to help small businesses grow.',
    icon: <FaBuilding className="text-4xl mb-4" />,
  },
  {
    id: 7,
    title: 'Asset Based Loans (ABL)',
    description: 'Loans secured by business assets to enhance liquidity and financing.',
    icon: <FaWarehouse className="text-4xl mb-4" />,
  },
  {
    id: 8,
    title: 'Construction Loans',
    description: 'Short-term financing for building homes or other projects.',
    icon: <FaHammer className="text-4xl mb-4" />,
  },
];

const LoanProducts = () => {
  const [flippedCards, setFlippedCards] = useState(Array(LoanProductsData.length).fill(false));
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const handleCardHover = (index) => {
    setIsHovering(true);
    const updatedFlippedCards = [...flippedCards];
    updatedFlippedCards[index] = !updatedFlippedCards[index];
    setFlippedCards(updatedFlippedCards);
    setIsHovering(false);
  };

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
    <div id='loanProducts' className='h-full md:h-screen mb-24 md:mb-12 mt-24 md:mt-12 lg:mt-28'>
      <div className="max-w-6xl mx-auto p-6 pt-8 md:pt-36">
        <h2 ref={ref} className="text-3xl font-bold mb-6 text-center underline-thick uppercase mt-12 md:mt-0">Loan products</h2>
        <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LoanProductsData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ y: 150, opacity: 0 }} 
              onHoverStart={() => !isHovering ? handleCardHover(index) : {}}
              animate={isVisible ? { rotateY: flippedCards[index] ? 360 : 0, y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white shadow-xl rounded-lg p-6 text-center text-[#FB7A41] hover:scale-105 hover:bg-[#FB7A41] hover:text-white perspective"
            >
              <div className='flex justify-center items-center'>{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanProducts;

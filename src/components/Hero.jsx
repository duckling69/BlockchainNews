import React from 'react';
import heroImage from '../assets/hero.svg'
import { motion } from 'framer-motion';


const Component = () => {
    return (
        <div className=" font-mono px-4 py-2 mt-[12vh] flex items-center lg:flex-row flex-col-reverse">
            {/* Text and input */}
            <div className="text-gray-500 leading-tight pl-[5vw] w-2/5 lg:ml-0 lg:mr-auto lg:mx-0 ">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount: 0.5}}
                    transition={{ delay: 0.0, duration: 0.5}}
                    variants={{
                        hidden: {opacity:0, x: -50},
                        visible: {opacity:1, x: 0}
                    }}
                >
                    <h1 className="text-5xl font-semibold mb-3"> Let the Truth Reach <span className='hero-text z-50 bg-gray-700 text-gray-50 mt-3'>Everyone</span></h1>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount: 0.5}}
                    transition={{ delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity:0, x: -50},
                        visible: {opacity:1, x: 0}
                    }}
                >
                    <p className="mt-2"> Post anonymous bits that are useful for the community. </p>
                </motion.div>

                <div className="mt-6 lg:flex flex flex-col lg:justify-between">
                    <p className="mt-2"></p>
                    <motion.div className='flex flex-row mt-2'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true, amount: 0.5}}
                        transition={{ delay: 0.3, duration: 0.5}}
                        variants={{
                            hidden: {opacity:0, x: -50},
                            visible: {opacity:1, x: 0}
                        }}
                    >
                        
                        {/* {"Icons for social"} */}
                        <div className='text-center flex gap-5 w-full'>

                        <button className='inline-block text-xl px-4 py-2 leading-none border bg-purple-500 text-white rounded-md   hover:bg-purple-700 mt-4 lg:mt-0 transition duration-150 ease-in-out'>
                            Login
                        </button>
                        <button className='inline-block text-xl px-4 py-2 leading-none border bg-purple-500 text-white rounded-md   hover:bg-purple-700 mt-4 lg:mt-0 transition duration-150 ease-in-out'>
                            Signup
                        </button>
                        </div>
                    </motion.div>

                </div>
            </div>
            {/* Image */}
            <img src={heroImage} alt="Image" className="h-full w-fit object-cover" />
        </div>
    );
};

export default Component;

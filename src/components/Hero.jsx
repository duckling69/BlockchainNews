import React from 'react';
import image from './image.jpg'
import {socialIcons} from '../constants/'


const Component = () => {
    return (
        <div className=" font-mono px-4 py-2 mt-[12vh] flex items-center lg:flex-row flex-col-reverse">
            {/* Text and input */}
            <div className="text-gray-500 leading-tight pl-[5vw] max-w-fit lg:ml-0 lg:mr-auto lg:mx-0 ">
                <h1 className="text-5xl font-semibold"> Let the Truth Reach Everyone</h1>
                <p className="mt-2"> Post anonymous bits that are useful for the community. </p>
                <div className="mt-6 lg:flex flex flex-col lg:justify-between">
                    <p className="mt-2"></p>
                    <div className='flex flex-row mt-2'>
                        <div className="relative rounded-md shadow-sm mt-4 lg:mt-0">
                            <input type="text" className="form-input py-3 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="Enter Email" />
                        </div>
                        {/* {"Icons for social"} */}
                    </div>

                </div>
            </div>
            {/* Image */}
            <img src={image} alt="Image" className="h-full w-2/4 object-cover" />
        </div>
    );
};

export default Component;

import { Chart } from '../components/Chart';
import React from 'react'
import HorizontalScrollMenu from '../components/HorizontalScrollMenu';
import { Chart2 } from '../components/Chart2';


const FactCheckerPortal = () => {
  return (
    <div className='mt-[12vh] mx-20'>
        <div className='text-center'>
            <h1 className='text-gray-500 text-5xl font-bold font-mono'>
                Welcome, to 'Factchecker'
            </h1>
        </div>

        <div className='flex flex-col h-[80vh]'>
            <div className='flex m-20 h-[40%] justify-between'>
                <div className='bg-black  text-white grid place-items-center rounded-lg w-[50%] h-[100%]'>
                    <Chart/>
                </div>
                <div className='bg-black  text-white grid place-items-center rounded-lg w-[50%] h-[100%]'>
                    <Chart2/>
                </div>
            </div>

            <div className='h-[60%]'>
                <HorizontalScrollMenu/>
            </div>
        </div>
    </div>
  )
}

export default FactCheckerPortal
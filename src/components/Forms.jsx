import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Forms = () => {
    // const [data, setData] = useState({title:'',subtitle})
    const handleSubmit=(event)=>{
        // console.log(event.target.title.value);
        let data={
            title: event.target.title.value,
            subtitle: event.target.subtitle.value,
            url: event.target.image.value,
            date: JSON.stringify(currentDate),
             
        }
        console.log(data);

    }

    const [currentDate, setCurrentDate] = useState(new Date())
    
  return (
    
    <div className='flex flex-col mt-[12vh] ' method="POST" onSubmit={(e)=>{e.preventDefault() ;handleSubmit(e)}}>
        <form className='my-10 w-[100%] text-xl'>
        <div className='flex flex-col gap-10 text-center w-[50%] m-auto'>
            <div><input type="text" className='w-[100%]  border-0 border-b-2 border-purple-200  active:border-purple-500 active:ring-transparent active:border-transparent py-3 px-2' name="title"   placeholder='Title'/></div>
            <div><input type="text" className='w-[100%]  border-0 border-b-2 border-purple-200  active:border-purple-500 active:ring-0 py-3 px-2' name="subtitle" placeholder='Description' /></div>
            <div className='flex justify-between'>
                <div>
                <input type="url" className='border-0 border-b-2 border-purple-200  active:border-purple-500 active:ring-0 py-3 px-2'  name="image" placeholder='fileURL'/>
                </div>

                <div>
                <DatePicker className='  border-0 border-b-2 border-purple-200  active:border-purple-500 active:ring-0 py-3 px-2' selected={currentDate} onChange={(date) => setCurrentDate(date)} maxDate={new Date()} placeholder='Date cannot exceed today ' />

                </div>
            </div>
            
        </div>
            <div className='text-center my-5'>

        <button className='px-2 py-3 bg-purple-500 hover:bg-purple-700 rounded-lg text-white' type='submit' > Submit this News </button>

            </div>
        </form>
    </div>
  )
}

export default Forms
import React, { useState } from 'react'
import client from '../assets/api/Ipfs'; 
import DatePicker from "react-datepicker";
import social from '../assets/articles.svg'
import "react-datepicker/dist/react-datepicker.css";

const Forms = () => {
    // const [data, setData] = useState({title:'',subtitle})
    const [currentDate, setCurrentDate] = useState(new Date())
    const data={title: "",
             subtitle:"",
             imgUrl:"",
             description:"",
             date:JSON.stringify(currentDate)
             }
    const [urlArr, setUrlArr] = useState([]);
    // const [data, setData] = useState({title:'',subtitle})
    const handleSubmit= async (event)=>{
        event.preventDefault();
        data.title = document.getElementById('title').value
        data.subtitle = document.getElementById('subtitle').value
        data.description = document.getElementById('description').value
        data.imgUrl = document.getElementById('imgUrl').value
        
        try {
            let created = await client.add(JSON.stringify(data));
            const url = `https://ipfs.io/ipfs/${created.path}`;
            setUrlArr((prev) => [...prev, url]);
            console.log(urlArr)
          } catch (error) {
            console.log(error.message);
        }
        data.title = ""
        data.subtitle = ""
        data.imgUrl =""
    }

    
    
  return (
    <div className='flex flex-col mt-[12vh] ' method="POST" onSubmit={(e)=>{e.preventDefault() ;handleSubmit(e)}}>
        <h1 className='text-gray-500 font-bold text-4xl text-center m-auto '>Share your News</h1>
        <div className=' w-[100%] flex flex-row' >
        <img src={social} className='w-[40vw] md:w-[30%] mt-10 my-5 ml-4' alt="" />
        <form className='my-10 w-[100%] text-xl'>
        <div className='flex flex-col gap-10 text-center w-[50%] m-auto'>
            <div><input type="text" className='w-[100%]  border-0 border-b-2 border-purple-200  active:border-purple-500 active:ring-transparent active:border-transparent py-3 px-2' name="title" id='title'   placeholder='Title'/></div>
            <div><input type="text" className='w-[100%]  border-0 border-b-2 border-purple-200  active:border-purple-500 active:ring-0 py-3 px-2' name="subtitle" placeholder='Category' id='subtitle' /></div>
            <div><textarea rows={4} className='w-[100%] text-xl h-[300px] border-2 border-b-2 border-purple-200  active:border-purple-500 active:ring-0 px-2' name="subtitle" placeholder='Description' id='description' /></div>
            <div className='flex justify-between'>
                <div>
                <input type="url" className='border-0 border-b-2 border-purple-200  active:border-purple-500 active:ring-0 py-3 px-2'  name="image" id='imgUrl' placeholder='fileURL'/>
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
    </div>
  )
}

export default Forms
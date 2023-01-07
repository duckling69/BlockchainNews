import React, { useState } from 'react'
import client from '../assets/api/Ipfs';
const Forms = () => {
    const data={title: "",
             subtitle:"",
             imgUrl:"",
             }
    const [urlArr, setUrlArr] = useState([]);
    // const [data, setData] = useState({title:'',subtitle})
    const handleSubmit= async (event)=>{
        event.preventDefault();
        data.title = document.getElementById('title').value
        data.subtitle = document.getElementById('subtitle').value
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
    <div className='flex flex-col mt-[12vh]' >
        <form className='my-10 w-[50%] text-xl' method='POST'>
        <div className='flex flex-col gap-10 text-center w-[100%]'>
            <div><input id='title' type="text" className='w-[100%] border-2 active:border-purple-500 rounded-xl active:ring-purple-500 py-3 px-2' name="title"  placeholder='Title'/></div>
            <div><input id='subtitle' type="text" className='w-[100%] border-2 active:border-purple-500 rounded-xl active:ring-purple-500 py-3 px-2' name="subtitle" placeholder='Description' /></div>
            <div><input id='imgUrl' type="url" className='w-[100%] border-2 active:border-purple-500 rounded-xl active:ring-purple-500 py-3 px-2' name="image" placeholder='fileURL'/></div>
            
        </div>
            <div className='text-center my-5'>

        <button className='px-2 py-3 bg-purple-500 hover:bg-purple-700 rounded-lg text-white' onClick={handleSubmit}>Add This Item</button>

            </div>
        </form>
    </div>
  )
}

export default Forms
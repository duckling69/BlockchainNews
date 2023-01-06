import React, { useState } from 'react'

const Forms = () => {
    // const [data, setData] = useState({title:'',subtitle})
    const handleSubmit=(event)=>{
        console.log(event.target);
        let data={title: event.target.title.value,
             subtitle:event.target.title.value,
             url:event.target.title.url,
             }

        console.log(data);

    }
    
  return (
    <div className='flex flex-col mt-[12vh]' >
        <form className='my-10 w-[50%] text-xl' method='POST'>
        <div className='flex flex-col gap-10 text-center w-[100%]'>
            <div><input type="text" className='w-[100%] border-2 active:border-purple-500 rounded-xl active:ring-purple-500 py-3 px-2' name="title"   placeholder='Title'/></div>
            <div><input type="text" className='w-[100%] border-2 active:border-purple-500 rounded-xl active:ring-purple-500 py-3 px-2' name="subtitle" placeholder='Description' /></div>
            <div><input type="url" className='w-[100%] border-2 active:border-purple-500 rounded-xl active:ring-purple-500 py-3 px-2' name="image" placeholder='fileURL'/></div>
            
        </div>
            <div className='text-center my-5'>

        <button className='px-2 py-3 bg-purple-500 hover:bg-purple-700 rounded-lg text-white' onClick={handleSubmit}>Add This Item</button>

            </div>
        </form>
    </div>
  )
}

export default Forms
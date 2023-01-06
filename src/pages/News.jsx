import React from 'react'
import bgimage from '../components/image.jpg'
import {sampleDataNews} from '../constants'

const NewsCard=({item})=>(
    <div className='w-[30%] rounded-lg flex flex-col bg-gray-800 aspect-video '>
        <div className='p-1 h-[80%]'>
            {item.image}
        </div>

        <div className=''>

                    <div className='text-3xl text-white font-semibold'>
                   {item.title}
                    </div>

                    <div className='text-3xl text-white/80 font-semibold '>
                        {item.subtitle}
                    </div>
        </div>

    </div>
)

const News = () => {
  return (
    <div className='text-md text-gray-500 text-mono leading-5'>
        <div className='text-center w-100 mt-[12vh] mx-20'>
            <h1 className='text-5xl font-mono font-bold mb-10 '>
                Latest in Leaks:
            </h1>

            <div className=' flex flex-col h-[88vh]  '>
                <div className='bg-red-500 p-1 rounded-xl flex flex-col h-[30vh] '>
                    <div className='bg-black h-[24vh]'>
                        image
                    </div>
                    <div className=''>

                    <div className='text-3xl text-white font-semibold'>
                    Shirsho ki gand moti hai
                    </div>

                    <div className='text-3xl text-white/80 font-semibold '>
                    Moti gand ki exclusive photos....
                    </div>
                    </div>

                </div>
            <div className='p-20 flex flex-row flex-wrap gap-10'>
                {sampleDataNews.map((item,i)=>(<NewsCard key={i} item={item}/>))}
            </div>
            </div>



        </div>
    </div>
  )
}

export default News
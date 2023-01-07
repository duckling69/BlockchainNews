import React from 'react'
// import bgimage from '../components/image.jpg'
import {sampleDataNews} from '../constants'
import {BsFileArrowUp} from 'react-icons/bs'
import {BsFileArrowUpFill} from 'react-icons/bs'
import Card from '../components/Card'

const NewsCard=({item})=>(

    <div className='w-[30%] rounded-lg flex flex-col bg-gray-800 aspect-video pb-5 '>

        
        <div className='p-1 h-[80%]'>
            {item.image}
        </div>

        <div className='bg-red-500 p-0'>

                    <div className='text-3xl text-white font-semibold'>
                   {item.title }
                    </div>

                    <div className='text-3xl text-white/80 font-semibold '>
                        {item.subtitle}
                    </div>
        </div>
        {item.liked===true && <div className='text-end ml-[90%] text-white hover:text-red-500 ease-in-out duration-150'>
        <BsFileArrowUpFill className='text-3xl' />
        </div>
        }
        {!item.liked===true && <div className='text-end ml-[90%] text-white hover:text-red-500 ease-in-out duration-150'>
        <BsFileArrowUp className='text-3xl' />
        </div>

        }
        
    </div>

)

const News = () => {
  return (
    <>
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
                    Headline
                    </div>

                    <div className='text-3xl text-white/80 font-semibold '>
                    Lorem ipsum....
                    </div>
                    </div>
                    <div className='text-end ml-[90%] py-5 '>
        <BsFileArrowUp className='text-3xl text-white hover:fill-black ease-in-out duration-150 ' />
        </div>
        
            </div>
                <div className='p-20 flex flex-row flex-wrap gap-10'>
            
                    {sampleDataNews.map((item,i)=>(<Card key={i} item={item}/>))}
                    
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default News
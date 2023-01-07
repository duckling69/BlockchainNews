import React from 'react'
// import bgimage from '../components/image.jpg'
import {sampleDataNews} from '../constants'
import {BsFileArrowUp} from 'react-icons/bs'
import {BsFileArrowUpFill} from 'react-icons/bs'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Search from '../components/Search'



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
                    <div className='text-end p-2'>
                    <button className='inline-block text-xs px-4 py-2 leading-none border bg-purple-500 text-white rounded-md   hover:bg-purple-700 mt-4 lg:mt-0 transition duration-150 ease-in-out'>
                            Read More
                        </button>
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
            <Search/>
            <Carousel/>
            <div className=' flex flex-col h-[88vh]  '>
            <div id="animation-carousel" className="relative" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Item 1 */}
          {sampleDataNews.map((item,i)=>(<div>{<img src={item.image} alt="" />}</div>))}
        </div>
        {/* Slider controls */}
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
                <div className='p-20 flex flex-row flex-wrap justify-evenly gap-10'>
            
                    {sampleDataNews.map((item,i)=>(<Card key={i} item={item}/>))}
                    
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default News
import React, { useEffect, useState } from 'react'
// import bgimage from '../components/image.jpg'
import {sampleDataNews} from '../constants'
import {BsFileArrowUp} from 'react-icons/bs'
import {BsFileArrowUpFill} from 'react-icons/bs'
import Button from '../components/Button';
import { Client, Account, Databases, ID } from 'appwrite'
import user from '../assets/api/Api';
const databases = new Databases(user)
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
    const [news,setNews] =useState();
    useEffect(() => {
        const getItems = databases.listDocuments("63b97ccece09e401adea", "63b97cd6e28eaf952fe6")
    
        getItems.then(
          function (response) {
            setNews(response.documents)
          },
          function (error) {
            console.log(error);
          }
        )
      }, [])
  return (
    <>
    <div className='text-md text-gray-500 text-mono leading-5'>
        <div className='text-center w-100 mt-[12vh] mx-20'>
            <h1 className='text-5xl font-mono font-bold mb-10 '>
                Latest in Leaks:
            </h1>
            <Search/>

            {/* Carousel */}
            
            <Carousel
                timer
                fullscreen
                arrows
                dots
                data={[
                    {
                    element: (
                        <img
                        className="w-full object-cover"
                        src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        />
                    ),
                    },
                    {
                    element: (
                        <img
                        className="w-full object-cover"
                        src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        />
                    ),
                    },
                ]}
            />
            
            {/* Horizontal line */}
            <div className="bg-gradient-to-br from-green-400 to-cyan-500 w-full h-1 mb-3"></div>

            <div className=' flex flex-col h-[88vh]  '>
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
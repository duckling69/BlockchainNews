import React from 'react'
import {useParams} from 'react-router-dom'
import image from '../assets/hero.svg'
import { sampleComments } from '../constants';

import {BsFileArrowUp} from 'react-icons/bs'

const NewsDetails = () => {
    const {id}=useParams();
  return (
    <div className='w-[80vw] mx-20 mb-20'>
        <div className='mt-[12vh] text-5xl text-center text-gray-500 '>
            <h1 className='mb-10'>
                Title- {id}
            </h1>


        </div>
        <div className=' flex flex-col min-h-[88vh] bg-gray-500 '>
            <div className='bg-black object-cover p-5 grid place-items-center rounded-lg'>
                <img src={'https://www.siasat.com/wp-content/uploads/2022/12/Jal.jpg'} alt="" className='p-2 w-[30%]' />
            </div>

            <div className='grid place-items-end mt-5 mr-5 mb-0 text-3xl text-white hover:text-black'>
                <BsFileArrowUp/>
            </div>

            <div className='text-container text-white font-semibold leading-loose  p-10 py-20 text-2xl '>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, consequuntur. Nam officia necessitatibus amet doloribus iusto, natus facere voluptates ipsam. Delectus adipisci amet, hic nihil fugit rem, perferendis alias ad placeat, aut labore commodi atque at soluta quaerat veritatis? Adipisci exercitationem maiores veritatis ratione incidunt reiciendis, eum vero facere beatae quis earum repudiandae quaerat iusto, ab sed optio quia harum labore. Incidunt fuga veritatis neque. Placeat illum, explicabo quisquam commodi accusamus consequuntur sequi voluptate aspernatur harum. Similique eum neque voluptate explicabo voluptates dolores dicta aliquam, voluptas rerum, non quidem! Quidem tenetur officia quisquam corrupti rerum ab neque iste laudantium accusantium nostrum. Accusantium, iure? Nulla fugit, pariatur doloremque magni rerum placeat eius quasi delectus ipsam repellat, voluptatem, laboriosam esse nihil! Veritatis, eaque voluptates fugiat temporibus recusandae quisquam libero cupiditate officia, numquam saepe quae cum. Neque natus velit nulla rem ducimus necessitatibus fuga similique, laudantium debitis, reprehenderit, dolores animi. Assumenda fugit, dicta animi exercitationem ex quo optio cupiditate iure? Consequuntur et, id minima non dicta at ad ullam fuga itaque labore cupiditate vitae vero odit nobis necessitatibus reiciendis laboriosam animi distinctio, nemo ipsam repellat impedit. Perspiciatis nesciunt eligendi ducimus, ipsam incidunt consectetur commodi fugiat ipsa odit! Quia, omnis libero tempore enim aspernatur cupiditate error, perspiciatis quasi dignissimos facilis beatae! Libero perferendis, dicta ipsum ducimus aspernatur itaque cupiditate inventore modi harum, asperiores odit, officiis deserunt earum quas. Blanditiis, magni alias error recusandae aperiam odio a labore aliquam est excepturi nobis quo? Ipsa exercitationem pariatur alias. Quae perferendis explicabo modi! Error quam doloremque inventore repellat odio nisi cumque ea mollitia, ipsum cupiditate, illum a et quidem, tempora dicta? Corporis eveniet corrupti voluptates vitae quaerat. Debitis eum ipsum voluptate voluptatem facere similique quo perspiciatis quaerat, quam alias, eveniet optio excepturi deleniti incidunt sunt molestiae, doloribus reiciendis magnam. Nemo unde sapiente debitis, illum nisi quibusdam voluptatibus provident dolor, magnam, qui deserunt eius quis incidunt non praesentium molestiae fuga possimus commodi! Iure laboriosam possimus, eveniet repellat culpa, esse ea soluta non in itaque eius? Natus, cumque. Aperiam omnis ratione facere, nemo vero molestias. Sed esse consequatur aliquid optio illum porro sint aliquam quis adipisci est atque repudiandae error et, vitae natus incidunt velit recusandae debitis corrupti sunt praesentium at eaque eligendi? Maiores a pariatur ex laborum id ipsum asperiores, et iure excepturi. Blanditiis deleniti alias odit placeat, quis maiores laborum possimus. Eum facere expedita explicabo beatae dolores nulla accusantium nostrum aliquam voluptates, illum cupiditate sunt quidem error.
            </div>
        </div>


        <div className='mt-20'>
            <h1 className='text-purple-500 font-bold text-4xl'>
            Comments:
            </h1>

            <form onSubmit={(e)=>{ e.preventDefault(); }} className='mt-10 text-end'>
                <input type="text" name='comment' placeholder='Add Your Comment' className=' font-bold border-2 border-black/50 py-2 px-5 w-[100%] rounded-xl' />
                <button className='bg-purple-500 py-2 px-5 rounded-lg text-white mt-2 mr-5 hover:bg-purple-700 ease-in-out duration-150' type='submit'>Add</button>
            </form>

            <div className='flex flex-col gap-16 mt-10'>
                {sampleComments.map((item,i)=>(
                    <div key={i}>
                        <h1 className='text-black text-2xl font-bold'>
                            {item.user}
                        </h1>

                        <h2 className='text-black/75 text-lg mt-5 font-semibold'>
                            {item.comment}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
        


    </div>
  )
}

export default NewsDetails
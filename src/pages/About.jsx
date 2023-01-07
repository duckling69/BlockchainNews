import React from 'react'
import aboutimg from '../assets/undraw_news_re_6uub.svg'
import social from '../assets/undraw_landscape_photographer_156c.svg'
import team from '../assets/team.svg'
import Footer1 from '../components/Footer1'
import CtaAboutUs from '../components/CtaAboutUs'

const About = () => {
    return (
        <div>
        <div className=" font-mono px-4 py-2 mt-[15vh] flex items-center flex-col ">
            <div className="text-gray-500 leading-tight pl-[5vw] max-w-md lg:ml-0 ">
                <h1 className='font-bold text-5xl text-center m-auto '>
                    About us
                </h1>
                <p className='text-gray-700 text-start mt-4 italic'> Reveal Truth,not Your Identity</p>
                <p className='text-gray-700 text-start mt-4 italic'>Stay Anonymous</p>

            </div>
            <div className='flex flex-col md:flex-row my-10'>
                {/* Big Img depicting sharing */}
                <div className='my-4'>
                    <img src={aboutimg} className='w-[80vw] md:w-[40vw] ' alt="" />

                    {/* <div className='my-4'>
                        <p>
                            We are here to simplify the lending process for everyone. <br />
                            Helping the community share resources manage it with ease.
                        </p>
                    </div> */}
                </div>

                <div className="text-gray-500 leading-tight pl-[5vw] max-w-lg lg:ml-0 my-5">

            
                    {/* <img src={social} className='w-[60vw] md:w-[50%] mt-10 my-5' alt="" /> */}
                    <h1 className='font-extrabold text-3xl text-center m-auto '>
                        Why Us?
                    </h1>
                    <p className='text-gray-700 text-start mt-4'>
                    Protecting independence of News Media is of utmost importance to uphold Nation's Democracy. 
                    Our App exists as a system where any Reporter can report news anonymously and it can not be taken down by any organization/government. 
                    </p>
                <img src={team} className='w-[60vw] md:w-[80%] mt-10 my-5' alt="" />
                    <h1 className='font-extrabold text-3xl text-center mt-8'>
                        What we do?
                    </h1>
                    <p className='text-gray-700 text-start mt-4'> Phantom News is a Web-App which shows the news reported by reporters anonymously. They can check the info reported and see the proof. Reporters can report at any time by signing transaction into Blockchain without revealing their identity. </p>
                   
                </div>
            </div>
            <CtaAboutUs/>
        </div>
        <Footer1 className = 'fixed bottom-0'/>
        </div>
    )
}

export default About
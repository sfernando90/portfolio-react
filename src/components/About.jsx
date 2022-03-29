import React from 'react'
import AboutMeImg from '../assets/about_me_img.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8' >
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div >
                    <img src={AboutMeImg} alt="about me img" className='' />
                </div>
                <div>
                    <p className=' text-4xl font-bold'>Hi. I'm Fernando</p>
                    <p className='py-2'>
                        I am a software developer living in Miami FL. I was born in Buenos Aires, Argentina and
                        I've had a passion for technology for as long as I can remember.  
                    </p>
                    <p className='py-2'>
                        I enjoy building websites and learning the latest technologies. I love that
                        feeling of finding a faster, more efficient way of doing something or learning techniques to make a 
                        website look and feel better for the user.
                    </p>
                    <p className='py-2'>
                        My favorites passtimes are playing soccer, traveling and barbecues with friends. I like to 
                        live life to the fullest and learn something new every day, my dream is to visit every country in the world.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
        {/* container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-pink-600'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Fernando Serrano</h1>
            <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0]'>I'm a full stack developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I'm a developer specialized in building web applications utilizing Angular TypeScript/JavaScript Node.js Bootstrap HTML/CSS
            </p>
            <div>
                <form action="/projects/">
                    <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' type='submit' >
                        View Projects 
                        <span>    
                            <HiArrowNarrowRight className='ml-3'/>
                        </span>
                    </button>
                </form>
            </div>
        </div>


    </div>
  )
}

export default Home
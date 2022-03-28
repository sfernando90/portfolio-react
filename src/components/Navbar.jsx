import React, {useState} from 'react'
import ProfilePic from '../assets/headshot_photo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Fernando_Serrano_Resume from '../assets/Fernando_Serrano_Resume.pdf'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div style={{position: 'sticky'}} className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={ProfilePic} alt='logo' style={{width: '50px'}} />
            </div>
            {/* menu */}
        
            <ul className='hidden md:flex'>
                <li><a href='/'>Home</a> </li>
                <li><a href='/about'>About</a></li>
                <li><a href='/skills'>Skills</a> </li>
                <li><a href='/projects'>Projects</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
            {/* hamburger */}
            
            <div className='md:hidden z-10' onClick={handleClick}>
                {nav? <FaTimes></FaTimes> :<FaBars></FaBars>}
            </div>

            {/* mobile menu */}
            <ul className={ !nav? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <a href='/'>Home</a> 
                </li>
                <li className='py-6 text-4xl'>
                    <a href='/about'>About</a> 
                </li>
                <li className='py-6 text-4xl'>
                    <a href='/skills'>Skills</a> 
                </li>
                <li className='py-6 text-4xl'>
                    <a href='/projects'>Projects</a> 
                </li>
                <li className='py-6 text-4xl'> 
                    <a href='/contact'>Contact</a>
                </li>
            </ul>

            {/* social icons */}
            <div className={'hidden lg:flex fixed flex-col top-[35%] left-0'}>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href="https://www.linkedin.com/in/fernando-serrano-a02a64156/" target="_blank" className='flex justify-between items-center w-full text-gray-300' rel="noreferrer">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href="https://www.linkedin.com/in/fernando-serrano-a02a64156/" target="_blank" className='flex justify-between items-center w-full text-gray-300' rel="noreferrer">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a href="/contact" className='flex justify-between items-center w-full text-gray-300'>
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a href={Fernando_Serrano_Resume} target="_blank" rel="noreferrer" className='flex justify-between items-center w-full text-gray-300' >
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
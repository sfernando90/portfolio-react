import React from 'react'
import BlogImg from '../assets/blog_page_img.jpg'
import CocktailImg from '../assets/cocktail.jpg'
import CartImg from '../assets/cart.jpg'
import GroceryImg from '../assets/grocery_list.jpg'
import MenuImg from '../assets/menu.jpg'
import ReviewsImg from '../assets/reviews.jpg'

const Projects = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 pt-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
                <p className='py-6'>Some of my projects</p>
            </div>
            {/* card container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* cards */}
                <div style={{backgroundImage:`url(${BlogImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Mean Stack Blog page
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='http://mean-angular-node-messaging.s3-website.us-east-2.amazonaws.com/' target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/sfernando90/blog-page' target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${CocktailImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Cocktail Finder
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://keen-elf-46e4d5.netlify.app/' target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/sfernando90/react-projects/tree/master/15-cocktails/setup' target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${CartImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Cart
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://glittering-kangaroo-803c1a.netlify.app/' target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/sfernando90/react-projects/tree/master/14-cart/setup' target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${GroceryImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Grocery List
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://rococo-pony-1c610c.netlify.app/' target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/sfernando90/react-projects/tree/master/10-grocery-bud/setup' target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${MenuImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Restaurant Menu
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://sparkly-chimera-d0a9b1.netlify.app/' target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/sfernando90/react-projects/tree/master/05-menu/setup' target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${ReviewsImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Reviews Page
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://polite-fudge-aafbe4.netlify.app/' target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/sfernando90/react-projects/tree/master/03-reviews/setup' target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
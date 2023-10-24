import React from 'react';
import HeroImage from '../assets/experience/Aimable.png';
import { Link } from 'react-scroll';


const Home = () => {
    return (
        <div 
            name='home' 
            className='flex justify-center h-full w-full bg-gradient-to-b from-black via-black to-gray-800 overflow-hidden'
        >
            <div className='max-w-screen-lg max-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col mt-20 justify-center h-full'>
                    <div>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        Hi, I'm Aimable BANCUNGUYE
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                    I’m a software developer with background in developing efficient software applications in a global market. More than 1300+ hours of experience, Strong skills include React, Redux, JavaScript, Ruby on Rails, Figma, and Animation Libraries!
                    </p>
                    <div className='my-5'>
                            
                        <Link to='contact' smooth='500' className='text-white bg-gradient-to-b from-cyan-500 to-blue-500
                        mx-auto px-6 py-3 my-8 flex-start
                        items-start rounded-md  
                        group-hover:scale-110 duration-300'
                        >
                            Let's talk
                        </Link>
                    </div>

                    </div>
                  
                </div>
                <div>
                    <img 
                        src={HeroImage} 
                        alt='my profile'
                        className='rounded-2xl mx-auto w-2/3 mt-20'
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
import React from 'react';
import About from '../components/About'; // Import your About component
import Experience from '../components/Experience'; // Import your Experience component

const AboutMe = () => {
    return (
        <div className='bg-gradient-to-b from-black to-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-20 md:gap-0 w-full h-full
          overflow-hidden'>
            <About />
            <Experience />
        </div>
    );
}

export default AboutMe;
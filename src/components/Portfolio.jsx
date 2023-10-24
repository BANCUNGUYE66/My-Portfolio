import React from 'react';
import budgetBuddy from '../assets/portfolio/budgetBuddy.png';
import eduPlanner from '../assets/portfolio/eduPlanner.png';
import weatherApp from '../assets/portfolio/weatherApp.png';
import math from '../assets/portfolio/math.png';
import festival from '../assets/portfolio/festival.png';
import { FaEye } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Portfolio = () => {
  const portfolio = [
    { id: 1, 
        src: budgetBuddy,
        text: 'Budget app is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what',
        title: 'Budge Buddy',
        link1: 'https://budget-app-zj69.onrender.com/',
        link2: 'https://github.com/BANCUNGUYE66/budget-app',
        stack: 'Ruby, Ruby on Rails, RSpec, PostgreSQL'
       },
    { id: 2, 
        src: eduPlanner,
        text: 'This project involves the development of an application where online courses with teachers can be reserved by students. It is built with React as the frontend and Ruby on Rails as the backend, enabling students to easily book courses with their preferred teachers among the available options.',
        title: 'eduPlanner',
        link1: 'https://edu-planner.onrender.com',
        link2: 'https://github.com/BANCUNGUYE66/EduPlanner-Frontend',
        stack: 'Ruby, Ruby on Rails, RSpec, PostgreSQL'
     },
    { id: 4, 
      src: weatherApp, 
      text: ' A weather App  using  API to display cities weather and give detail data for every city.',
      title: 'weather App',
      link1: 'https://weather-project-app.onrender.com/',
      link2: 'https://github.com/BANCUNGUYE66/Weather-capstone',
      stack: 'Javascript, CSS, HTML'
    },
    { id: 5, 
        src: math, 
        text: 'A website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
        title: 'Math magician',
        link1: 'https://bancunguyeaimable-calculator.onrender.com',
        link2: 'https://github.com/BANCUNGUYE66/Math-magician',
        stack: 'JavaScript, HTML, CSS, Webpack'
      },
      { id: 6, 
        src: festival, 
        text: 'This project is for selling ticket and show the location of concert.',
        title: 'Festival',
        link1: 'https://bancunguye66.github.io/Festival/',
        link2: 'https://github.com/BANCUNGUYE66/Festival',
        stack: 'JavaScript, HTML, CSS'
      },
  ];

  const goToLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div name='portfolio' className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-full'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full'>
        <div className='pb-8 flex flex-col items-center'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 mt-10'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-4 sm:px-0 overflow-hidden'>
          {portfolio.map(({ id, src, title, text, stack, link1, link2 }) => (
            <div key={id} className='relative shadow-md shadow-gray-600 rounded-lg animate-scale-up'>
              <div className='image-container' style={{ aspectRatio: '16/9' }}>
                <img src={src} alt='Project Screenshot' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className=" flex flex-col justify-center absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-90 text-white p-4 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                <p className="text-xl font-semibold mb-2">{title}</p>
                <p className="text-sm">{text}</p>
                <p>Stack: {stack}</p>
                <div className="flex justify-center font-bold mt-4 space-x-2">
                  <button className="flex items-center gap-2 px-4 py-2 text-white rounded hover:text-blue-600 transition duration-300" onClick={() => goToLink(link1)}>
                    Demo<FaEye />
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-white rounded hover:text-blue-600 transition duration-300" onClick={() => goToLink(link2)}>
                    Source<BsGithub />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
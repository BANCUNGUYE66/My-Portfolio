import React from 'react'
import html from '../assets/experience/html.png'
import css from '../assets/experience/css.png'
import reactImage from '../assets/experience/reactImage.png'
import javascript from '../assets/experience/javascript.png'
import tailwind from '../assets/experience/tailwind.png'
import github from '../assets/experience/github.png'
import ruby from '../assets/experience/ruby.png'
import rails from '../assets/experience/rails.png'
import git from '../assets/experience/git.svg'
import postgresql from '../assets/experience/postgresql.png'
import redux from '../assets/experience/redux.png'
import bootstrap from '../assets/experience/bootstrap.png'

const Experience = () => {

    const experience = [
        {
            id:1,
            src:html,
            title:'Html',
            style:'shadow-orange-500'

        },
        {
            id:2,
            src:css,
            title:'Css',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:reactImage,
            title:'React',
            style:'shadow-sky-400'
        },
        {
            id:4,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-400'
        },
        {
            id:5,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:github,
            title:'Github',
            style:'shadow-gray-400'
        },
        {
            id:7,
            src:ruby,
            title:'Ruby',
            style:'shadow-red-800'
        },
        {
            id:8,
            src:rails,
            title:'Rails',
            style:'shadow-red-600'
        },
        {
            id:9,
            src:git,
            title:'Git',
            style:'shadow-orange-800'
        },
        {
            id:10,
            src:postgresql,
            title:'postgreSQL',
            style:'shadow-blue-100'
        },
        {
            id:11,
            src:redux,
            title:'Redux',
            style:'shadow-purple-900'
        },
        {
            id:12,
            src:bootstrap,
            title:'Bootstrap',
            style:'shadow-purple-800'
        },
        
    ]
  return (
    <div name='experience'
    className=' w-full h-screen'>
        <div className='max-w-screen-lg max-auto px-5 md:px-20 flex flex-col 
        md:mt-20 w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Experience
                </p>
                <p className='py-6'>
                    These are the technologies i have worked with
                </p>
            </div>

            <div  className='w-full grid grid-cols-3 sm:grid-cols-4
                     gap-8 text-center py-8 px-1 sm:p-0'>
                {experience.map(({id, src, title, style}) => (
                     
                    <div key={id} className={`shadow-md hover:scale-105 duration-500
                       py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                 ))}
            </div>
                
                
            
        </div>

    </div>
  )
}

export default Experience
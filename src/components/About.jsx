import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen text-white overflow-hidden'>
      <div className='max-w-screen-lg px-10 md:px-20 md:py-10 mx-auto flex flex-col mt-[3.5rem] itmes-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>

          <div className='scrollable-content' style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <p className='text-xl mt-4'>
              My expertise in programming languages such as JavaScript, Ruby, and Ruby on Rails has been substantiated by a history of notable achievements. I have consistently demonstrated my ability to deliver exceptional results and have a proven track record to support this claim.
            </p>

            <p className='text-xl mt-4'>
              I have embraced the challenges and opportunities of remote work by actively engaging with individuals spanning multiple time zones. Over the past several months, I have adeptly navigated the complexities of asynchronous collaboration, seamlessly interacting with team members located in three distinct time zones: UTC-6, UTC+1, and UTC+5. This unique experience sets me apart and underscores my adaptability as a fullstack developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

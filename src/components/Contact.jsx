import React from 'react'

const Contact = () => {
  return (
    <div name='contact'
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black
    p-4 text-white'>
        <div className='flex flex-col p-4 justify-center
        max-w-screen-lg mx-auto h-full'>
            <div className='pb-8  flex flex-col items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500v'>
                    contact
                </p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/cbe04aeb-fc04-46db-a721-0c9ea8f65801" method="POST"
                 className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='Name' placeholder='Enter Your name'
                    className='p-2 bg-transparent border-2 rounded-md 
                    text-white focus:outline-none' />

                    <input type="text" name='Email' placeholder='Enter Your Email'
                    className=' my-4 p-2 bg-transparent border-2 rounded-md 
                    text-white focus:outline-none' />

                    <textarea name="Message" placeholder='Enter your message'
                    rows="10"
                    className='p-2 bg-transparent border-2 rounded-md 
                    text-white focus:outline-none'
                    ></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500
                    mx-auto px-6 py-3 my-8 flex 
                    items-center rounded-md  
                    hover:scale-110 duration-300'
                    >Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
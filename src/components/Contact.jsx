import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className="pt-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
        <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center"> 
            <form action="https://getform.io/f/4b5a66b4-3e8a-4fa3-8a0d-60da92a75d04"method="POST" className="flex flex-col w-full md:w-1/2">
                <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outlined-none"/>
                <input type="text" name="email" placeholder="Enter your e-mail" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outlined-none"/>
                <textarea name="message" placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outlined-none"></textarea>
                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's Talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

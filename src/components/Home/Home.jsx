import React from 'react'
import profile1 from "../../assets/profile1.jpeg"
import './Home.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div name="home" 
    className="min-h-screen sm:min-h-[120vh] pt-20 md:pt-15 w-full bg-gradient-to-b 
    from-gray-900 via-gray-800 to-gray-700 flex items-center">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4 ">
            Hi, I'm <span className="text-cyan-400">Ankit Abhishek</span>
            </h2>
              <p className="text-gray-400 max-w-md text-lg">
             Frontend developer skilled in React, HTML, CSS, and JavaScript. 
             Currently expanding into backend development with Node.js,Spring boot and exploring deployment.
             I build clean, scalable interfaces and work toward mastering the full web stack.
          </p>
          <div className="mt-6">
            <a
              href="/resume.pdf" // Update with your resume path
              target="_blank"
              rel="noopener noreferrer"
            >
           
                <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Resume
                    <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                    </span>
                </button>
                </a>
            </div>
        </div>
             <div className="mb-8  md:mb-0">
            <img src={profile1} alt="my profile" href="" className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-500 shadow-lg"/>
        </div>
      </div>  
    </div>
  )
}

export default Home

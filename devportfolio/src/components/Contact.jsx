import React from 'react'
import {FaLinkedin,FaGithub,FaTwitter,FaDiscord} from 'react-icons/fa'
import Contactcss from './Contact.css'


export default function Contact() {
  return (
    <div>
        <>
  {/* component */}
  <div className="relative  flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0" id="getintouch">
    <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
      <div className="mt-60 sm:mt-8 overflow-hidden ">
        <div className="grid ">
          <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
            <h1 className="flex items-center justify-center text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
              Get in touch
            </h1>
            <p className="text-normal flex items-center justify-center text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2 pr-2">
              Connect with me on
            </p>
            {/* <div className="icons flex items-center mt-8 text-gray-600 dark:text-gray-400 justify-between"> */}
            <div className="icons">
                
                 <a href="https://www.linkedin.com/in/paras-bharde-a748a0179/" target="_blank" 
                 className="icon icon--linkedin text-5xl">
                <div className="i"> <FaLinkedin /> </div> 
                 </a>
                
                
                 <a href="https://github.com/ParasBharde" target="_blank" 
                 className="icon icon--github text-5xl">
                 <div className="i"> <FaGithub /> </div> 
               
               </a>
              
               <a href="https://twitter.com/paras162000" target="_blank" 
               className="icon icon--twitter text-5xl">
                <div className="i">  <FaTwitter /> </div> 
              
               </a>
              
               <a href="https://discord.com/channels/ParasBharde#2547" target="_blank" 
               className="icon icon--discord text-5xl">
                <div className="i">  <FaDiscord /> </div> 

               
               </a>
                 

            </div>

          </div>
         
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

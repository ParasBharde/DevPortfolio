import React from 'react'
import {FaLinkedin,FaGithub,FaTwitter,FaDiscord} from 'react-icons/fa'


export default function Contact() {
  return (
    <div>
        <>
  {/* component */}
  <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0" id="getintouch">
    <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
      <div className="mt-8 overflow-hidden">
        <div className="grid ">
          <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
            <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
              Get in touch
            </h1>
            <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2 pl-8">
              Connect with me on
            </p>
            <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400 justify-between">
                
                 <a href="#">
                 <FaLinkedin className="text-5xl"/>
                 </a>
                 <a href="#">
               <FaGithub className="text-5xl"/>
               </a>
               <a href="#">
               <FaTwitter className="text-5xl"/>
               </a>
               <a href="#">
               <FaDiscord className="text-5xl"/>
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

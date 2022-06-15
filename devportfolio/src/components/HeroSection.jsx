/* This example requires Tailwind CSS v2.0+ */
import React,{ Fragment } from 'react'
import { BsLinkedin} from "react-icons/bs"
import { ImGithub} from "react-icons/im"
import HeroSectioncss from './HeroSection.css'


// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

export default function HeroSection() {
  return (
    <div className="relative bg-white overflow-hidden" id="hero-section">
      <div className="max-w-7xl mx-auto">
        <div className="relative  pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
         
       

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Hi, i am Paraskumar</span>{' '}
                <span className="block text-indigo-600 xl:inline">Full Stack Developer</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  self-starter Programmer with proficiency in MERN stack development as well as strong ability to communicate and work in a team effictively. My 
                  Primarily focus is to write clean elegant, and efficient code.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://www.linkedin.com/in/paras-bharde-a748a0179/"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                  < BsLinkedin className="mr-1"/>  Connect on LinkedIn
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://github.com/ParasBharde"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    <ImGithub className="mr-1"/>Check out Github Profile
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center px-1 py-1 ">
        <img
          className="view-img h-85 w-90 rounded-full object-cover mb-2"
          src="https://res.cloudinary.com/dixj17hz9/image/upload/v1655187024/img1_znjexr.jpg"
          alt=""
        />
      </div>
    </div>
  )
}

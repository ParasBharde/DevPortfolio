import React from 'react'
import Header from './Header';
import Skillscss from './Skills.css'

export default function Skills() {
  return (
    
 
  <div className="down-containt " id="skills">
    <section className="text-gray-200 bg-gray-900">
      <div className="max-w-4xl mx-auto px-5 py-24 ">
        <div className="text-center mb-20">
          <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
            Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          IT is vast and languages ​​are born almost at everything
            moment, I do everything possible to be up to the task in order to
            meet the needs of my clients and provide assistance to
            new developers.
          </p>
          <div className="flex mt-6 justify-center item-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex mr-4" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-12 -mb-10 -mt-4 ">
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div>
              <div className="rounded bg-gray-800 p-4 transform">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>{" "}
                </div>
                <div className="flex-grow ">
                  <h2 className=" text-xl title-font font-medium mb-3">
                    Frontend Development
                  </h2>
                  <p className="leading-relaxed text-sm text-justify">
                  Well versed with frontend development using HTML, CSS, Javascript and React.js 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div>
              <div className="rounded bg-gray-800 p-4 transform ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className=" text-xl title-font font-medium mb-3">
                  Back-end Development
                  </h2>
                  <p className="leading-relaxed text-sm text-justify">
                  Well versed with back-end development using Node.js, MongoDB and Firebase.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div>
              <div className="rounded bg-gray-800 p-4 transform ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className=" text-xl title-font font-medium mb-3">
                  Deployment and Git
                  </h2>
                  <p className="leading-relaxed text-sm text-justify">
                  Familiar with using Git for version control, deployment of frontend project using Netify, and back-end project deployment using Heroku.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>


    
  )
}

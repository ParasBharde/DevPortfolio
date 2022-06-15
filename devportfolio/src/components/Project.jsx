import React from 'react'

export default function Projects() {
  function renderProjectCards() {
    const projectsArray = [
      {
        name: 'Id Card Generator',
        description: ' ID Card Generator Software is comprehensive solution to design and print different types of identity cards for students, employees, faculty and other users.',
        image: "https://res.cloudinary.com/dixj17hz9/image/upload/v1655202782/IdCardGenerator_aekuvc.png",
        skills: "Javascript",
        demoURL: "https://id-card-generator-2022.netlify.app",
        "github": "https://github.com/ParasBharde/ID-card-generator"
      },
      {
        name: 'Digital Clock',
        description: 'A digital clock is a type of clock that displays the time digitally (i.e. in numerals or other symbols), as opposed to an analog clock, where the time is indicated by the positions of rotating hands.',
        image: "https://res.cloudinary.com/dixj17hz9/image/upload/v1655202782/Digital_Clock_zxzo8x.png",
        skills: "HTML and CSS3",
        demoURL: "#",
        "github": "#"
      },
      {
        name: 'CryptoCurruncy Price Listing ',
        description: 'A cryptocurrency is a tradable digital asset or digital form of money, built on blockchain technology that only exists online.',
        image: "https://res.cloudinary.com/dixj17hz9/image/upload/v1655202782/cryptoListing_eglnpu.png",
        skills: "JavaScript",
        demoURL: "#",
        "github": "#"
      },

      {
        name: 'Food Items Listing ',
        description: 'Food items Listing App',
        image: "https://res.cloudinary.com/dixj17hz9/image/upload/v1655202783/FavFoodItems_j6hyg9.png",
        skills: "React.js",
        demoURL: "#",
        "github": "#"
      },
      {
        name: 'Group Chat Landing Page ',
        description: 'Web Page to show product landing page for group chat app',
        image: "https://res.cloudinary.com/dixj17hz9/image/upload/v1655226580/Group_Chat_Landing_Page_vbv9xt.png",
        skills: "HTML and CSS3",
        demoURL: "#",
        "github": "https://github.com/ParasBharde/chat-app"
      }
    ];
    return projectsArray.map((projectItem) => {
      return (
        
          <div className="max-w-sm bg-white px-6 pt-6 pb-2  rounded-xl shadow-lg 
           transform hover:scale-105 transition duration-500" id="projects" key={projectItem.name}>
            <div className="relative">
              <img
                className="w-full rounded-xl"
                src={projectItem.image}
                alt="Colors"
              />

            </div>
            <h2 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              {projectItem.name}
            </h2>
            <div className="my-4">

              <div className="flex space-x-1 items-center ">

                <p>{projectItem.description}</p>
              </div>


              <br />

              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
                <p>{projectItem.skills}</p>
              </div>

              <div>

                <div className="flex">
                  <a href={projectItem.demoURL} target="_blank" className="w-1/2 mr-2">
                    <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg mr-2" >
                      Demo
                    </button>
                  </a>

                  <a href={projectItem.github} target="_blank" className="w-1/2">
                    <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg" >
                      Github Demo
                    </button>
                  </a>

                </div>

              </div>

            </div>
          </div>
       

      )
    })
  }
  return (
    <div className="mt-14">
      <h2 className="flex items-center justify-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Projects</span>{' '}
      </h2>
      <div className="w-full justify-items-center md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 mt-10">
        {renderProjectCards()}
      </div>

    </div>
  )
}

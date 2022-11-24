/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { BsLinkedin } from "react-icons/bs"
import { ImGithub } from "react-icons/im"
import HeroSectioncss from "./HeroSection.css";
import Header from "./Header";


// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

export default function HeroSection() {

  const onButtonClick = () => {

    fetch('Paraskumar.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Paraskumar Bharde Resume.pdf';
        alink.click();
      })
    })
  }
  return (


    <div className="hero relative flex justify-content item-center  bg-white overflow-hidden" id="hero-section">

      <div className=" max-w-7xl mx-auto ">
        <div className="herosection relative bg-opacity-0  pb-8 mr-80 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">



          <main className="mt-10  mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-38">
            <div className="sm:text-center lg:text-left ">
              <h1 className="blockcontent  tracking-tight font-extrabold ">
                <div className="heading_1 text-4xl sm:text-5xl md:text-6xl">
                  {/* <span className="heading_1 block xl:inline">Hi, i am Paraskumar</span>{' '} */}


                  <span className="firstcontent ">Hi,</span>

                  <span className="contentfirst">I am Paraskumar</span>

                </div>

                <div >
                  <span className="secondcontent text-3xl sm:text-5xl text-indigo-900">Full Stack Developer</span>
                  {/* <span className="heading_2 block text-indigo-600 xl:inline">Full Stack Developer</span> */}
                </div>
              </h1>
              <br>

              </br>
              <p className="content pr-16 mt-3 text-base font-semibold font-serif text-white">
                self-starter Programmer with proficiency in MERN stack development as well as strong ability to communicate and work in a team effictively. My
                Primarily focus is to write clean elegant, and efficient code.
              </p>
              <div className="buttons cursor-pointer">
                {/* <div className="mt-12 px-6 mr-6 sm:flex sm:justify-center lg:justify-start"> */}
                <div className=" mt-6 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                  {/* <div className=" mt-6  sm:mt-10 sm:flex sm:justify-center lg:justify-start"> */}
                  <div className="rounded-md shadow ">
                    <a
                      href="https://www.linkedin.com/in/paras-bharde-a748a0179/"
                      target="_blank"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      < BsLinkedin className="mr-1 " />  Connect on LinkedIn
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3 ">
                    <a
                      href="https://github.com/ParasBharde"
                      target="_blank"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      <ImGithub className="mr-1" />Check out Github Profile
                    </a>
                  </div>

                </div>
                <div style={{ marginTop: '5rem' }}>
                  {/* <h3 style={{ marginLeft: '3rem' }}>Brochure</h3> */}
                  <button
                    // onClick={onButtonClick}
                    style={{
                      borderRadius: "45px", alignItems: "center", padding: "20px",
                      borderColor: "white",
                      width: "300px",
                      borderWidth: "1px",
                      marginLeft: "6rem",
                      backgroundColor: "#BCCEF8",
                      marginBottom: "5%",
                      fontWeight: "bold"
                    }}><a href="../../Paraskumar.pdf">Resume</a></button>
                </div>
              </div>
              <div className="bubbles flex justify-content item-center space-x-56">
                <img src="src/img/bubble.png" />
                <img src="src/img/bubble.png" />
                <img src="src/img/bubble.png" />
                <img src="src/img/bubble.png" />
                <img src="src/img/bubble.png" />
                <img src="src/img/bubble.png" />

              </div>
            </div>
          </main>
        </div>
      </div>

      <article className="card mt-32 mr-24 ">
        <div className="card_content ">
          <h3 className="card_title flex justify-center item-center  font-bold">Experiences</h3>
          <br />
          <p className="card_description ml-4 whitespace-pre-line bg-opacity-0 ">
            <h2 className="flex justify-center font-bold">ShubhChintak Technology Private Limited</h2>
            <h4 className="flex justify-center">(21/07/2022 to 20/10/2022) – Web Developer</h4>
            <h3 className='mt-4'>Key responsibilities:</h3>
            <ol>
              <li>Designed, coded and modified 2 enterprise web applications and 1 Android App from layout to function, according to the
                client's specification.</li>
              <br />
              <li>Developed user interfaces and Mobile Responsive User Experience with modern Javascript frameworks, HTML5 and CSS3,
                SCSS, which improved user satisfaction.
              </li>
              <li></li>

            </ol>
          </p>
        </div>
      </article>

    </div>

  )
}

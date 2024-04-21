import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className={`eduSec flex flex-col items-center p-5 text-${props.mode === "light" ? "black" : "white"} scroll-mt-[1500px]`} id="myEducation">
        <h1 className='text-2xl md:text-4xl font-bold m-4'>My Projects</h1>
        <p className='text-center m-1 lg:w-[80%]'>Welcome to the heart of my portfolio, I invite you to explore the diverse facets of my skills, passion, and dedication. Each project is a testament to my unwavering commitment to pushing boundaries, solving problems, and translating ideas into tangible realities.</p>
        {/* <p className='text-center m-1'>Currently pursuing B.Sc.(Hons.) Computer Science from University Of Delhi</p> */}

        <section className="grades flex flex-wrap items-center justify-center p-2 m-4">
          <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
            <div className="schLogo flex justify-center">
              <img src="https://myjewelshop.netlify.app/static/media/favicon-310x310.842bf0fe7d631bae52a5.png" alt="" className='object-contain w-16' />
              {/* <i className="fa fa-cutlery fa-3x" aria-hidden="true"></i> */}
            </div>
            <h3 className='font-bold text-[17px] my-2'>My Jewel Shop</h3>
            <p className='m-1'>React JS, Node JS</p>
            <p className='m-1'>Express, MongoDB</p>
            <p className='m-1'>Full Stack(MERN) Project</p>
            <div className="gradeLink mt-7 text-blue-700 underline hover:scale-110 transition-all duration-200">
              <Link to="https://myjewelshop.netlify.app" target='_blank'>Visit</Link>
            </div>
          </div>

          <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
            <div className="schLogo flex justify-center">
              <img src="https://myveggiesshop.netlify.app/static/media/logo.66b1baedbf4e98b4c2be.png" alt="" className='object-contain w-20 h-12' />
              {/* <i className="fa fa-cutlery fa-3x" aria-hidden="true"></i> */}
            </div>
            <h3 className='font-bold text-[17px] my-2'>My Vegies</h3>
            <p className='m-1'>React JS, Node JS</p>
            <p className='m-1'>Express, MongoDB</p>
            <p className='m-1'>Full Stack(MERN) Project</p>
            <div className="gradeLink mt-7 text-blue-700 underline hover:scale-110 transition-all duration-200">
              <Link to="https://myveggiesshop.netlify.app" target='_blank'>Visit</Link>
            </div>
          </div>

          <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
            <div className="schLogo flex justify-center">
              <img src="https://i.pinimg.com/originals/9a/f8/a5/9af8a55b384c6648ad8020760902fb12.png" alt="" className='object-contain w-12 rounded-full' />
              {/* <i className="fa fa-cutlery fa-3x" aria-hidden="true"></i> */}
            </div>
            <h3 className='font-bold text-[17px] my-2'>Shiv Battery Works</h3>
            <p className='m-1'>React JS</p>
            <p className='m-1'>Tailwind CSS</p>
            <p className='m-1'>Frontend Project</p>
            {/* <p className='m-1'>(MERN Project)</p> */}
            <div className="gradeLink mt-7 text-blue-700 underline hover:scale-110 transition-all duration-200">
              <Link to="https://shivbatteryworks.netlify.app" target='_blank'>Visit</Link>
            </div>
          </div>

          <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
            <div className="schLogo">
              <i className="fa fa-file-text-o fa-3x" aria-hidden="true"></i>
            </div>
            <h3 className='font-bold text-[17px] my-2'>Text Editor</h3>
            <p className='m-1'>React JS</p>
            <p className='m-1'>Tailwind CSS</p>
            <p className='m-1'>Basic Text Manipulation</p>
            <div className="gradeLink mt-7 text-blue-700 underline hover:scale-110 transition-all duration-200">
              <Link to="https://texteditoraman.netlify.app" target='_blank'>Visit</Link>
            </div>
          </div>
          
          <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
            <div className="schLogo flex justify-center">
              <img src="https://s3.amazonaws.com/eventtia/event_logos/18916/medium/expvqmxqaej8ib3copy15942077171594207717.png?1594207717" alt="Net..." className='w-20' />
            </div>
            <h3 className='font-bold text-[17px] my-2'>Mind Maze Quiz</h3>
            <p className='m-1'>HTML, CSS</p>
            <p className='m-1'>JavaScript</p>
            <p className='m-1'>Biginner Level Project</p>
            <div className="gradeLink mt-7 text-blue-700 underline hover:scale-110 transition-all duration-200">
              <Link to="https://mindmazequiz.netlify.app" target='_blank'>Visit</Link>
            </div>
          </div>
          
          <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
            <div className="schLogo flex justify-center">
              <i class="fa fa-sliders fa-3x" aria-hidden="true"></i>
            </div>
            <h3 className='font-bold text-[17px] my-2'>Testimonial Slider</h3>
            <p className='m-1'>HTML, CSS</p>
            <p className='m-1'>JavaScript</p>
            <p className='m-1'>Biginner Level Project</p>
            <div className="gradeLink mt-7 text-blue-700 underline hover:scale-110 transition-all duration-200">
              <Link to="https://testimonialsliderdemo.netlify.app" target='_parent'>Visit</Link>
            </div>
          </div>

          <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
            <div className="schLogo">
              <i className="fa fa-cutlery fa-3x" aria-hidden="true"></i>
            </div>
            <h3 className='font-bold text-[17px] my-2'>Food Ordering</h3>
            <p className='m-1'>HTML, CSS</p>
            <p className='m-1'>JavaScript</p>
            <p className='m-1'>Biginner Level Project</p>
            <div className="gradeLink mt-7 text-blue-700 underline hover:scale-110 transition-all duration-200">
              <Link to="https://mymealorder.netlify.app" target='_blank'>Visit</Link>
            </div>
          </div>

          <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
            <div className="schLogo">
              <i className="fa fa-fort-awesome fa-3x" aria-hidden="true"></i>
            </div>
            <h3 className='font-bold text-[17px] my-2'>My Portfolio</h3>
            <p className='m-1'>HTML, CSS</p>
            <p className='m-1'>JavaScript</p>
            <p className='m-1'>Out-Dated & don't mantained anymore</p>
            <div className="gradeLink mt-7 text-blue-700 underline hover:scale-110 transition-all duration-200">
              <Link to="https://portfolioamanverma.netlify.app" target='_blank'>Visit</Link>
            </div>
          </div>

        </section>
      </section>
    </>
  )
}

export default Project
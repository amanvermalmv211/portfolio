import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import mongo from '../Images/mongo.png';

import '../App.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import skill from '../Images/skill.png';
import cpp from '../Images/cpp.png';
import python from '../Images/python.png';
import js from '../Images/js.png';
import webDev from '../Images/webDev.png';
import reactjsicon from '../Images/reacticon.png';
import tailwindicon from '../Images/tailwindicon.png';
import java from '../Images/java.png';

const Skills = (props) => {

  const skillData = [
    { name: "JavaScript", img: js, disc: "Strong grip on JavaScript to build dynamic web pages, manage events & enhance user experience." },
    { name: "React JS", img: reactjsicon, disc: "Proficient in React, using components, hooks, and props to develop fast, scalable  web app." },
    { name: "Node JS", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png", disc: "Used Node.js to create backend services, build REST APIs, and connect servers with databases." },
    { name: "MongoDB", img: mongo, disc: "Worked with MongoDB for managing NoSQL data and performing CRUD operations in projects." },
    { name: "Tailwind CSS", img: tailwindicon, disc: "Designed responsive and modern UI layouts using Tailwind’s utility classes for fast and clean styling." },
    { name: "Bootstrap", img: "https://icons.getbootstrap.com/assets/img/icons-hero.png", disc: "Built responsive websites using Bootstrap and ready-made components to speed up development." },
    { name: "Web Development", img: webDev, disc: "Build full-stack web apps with modern tools, focusing on performance, design & user experience." },
    { name: "C++", img: cpp, disc: "Applied C++ to learn OOP concepts, write clean logic, solve programming problems effectively." },
    { name: "Python", img: python, disc: "Used Python for scripting, problem-solving, & writing clean, readable code for small tasks and utilities." },
    { name: "Java", img: java, disc: "Practiced Java concepts like classes, objects, loops, and exceptions to build programs." }
  ]

  return (
    <section className={`skills flex items-center flex-col p-4 md:px-10 justify-around text-center font-bold ${props.mode === "light" ? "text-gray-700" : "bg-gray-900"} scroll-mt-12`} id="mySkills">
      <div className="skillImg flex w-40 h-20 justify-center items-center">
        <h1 className='text-3xl md:text-4xl font-bold m-2'>Skills</h1>
        <img src={skill} alt="" className='w-20 h-20 aspect-[2/3] object-contain scale-150' />
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-[100%] md:w-[60%] py-5 mb-4"
      >
        <SwiperSlide className={`bg-center bg-cover ${props.mode === "light" ? "bg-orange-300" : "bg-blue-300"} rounded-xl`}>
          <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src={js} alt='JavaScript' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[1.5px_1.5px_1.5px_rgba(0,0,0,0.6)]'>JavaScript</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`bg-center bg-cover ${props.mode === "light" ? "bg-orange-300" : "bg-blue-300"} rounded-xl`}>
          <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src={reactjsicon} alt='React JS' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[1.5px_1.5px_1.5px_rgba(0,0,0,0.6)]'>React JS</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`bg-center bg-cover ${props.mode === "light" ? "bg-orange-300" : "bg-blue-300"} rounded-xl`}>
          <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt='Node JS' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[1.5px_1.5px_1.5px_rgba(0,0,0,0.6)]'>Node JS</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`bg-center bg-cover ${props.mode === "light" ? "bg-orange-300" : "bg-blue-300"} rounded-xl`}>
          <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src={tailwindicon} alt='Tailwind CSS' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[1.5px_1.5px_1.5px_rgba(0,0,0,0.6)]'>Tailwind CSS</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`bg-center bg-cover ${props.mode === "light" ? "bg-orange-300" : "bg-blue-300"} rounded-xl`}>
          <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src={mongo} alt='MongoDB' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[1.5px_1.5px_1.5px_rgba(0,0,0,0.6)]'>MongoDB</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`bg-center bg-cover ${props.mode === "light" ? "bg-orange-300" : "bg-blue-300"} rounded-xl`}>
          <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src="https://icons.getbootstrap.com/assets/img/icons-hero.png" alt='Bootstrap' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[1.5px_1.5px_1.5px_rgba(0,0,0,0.6)]'>Bootstrap</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`bg-center bg-cover ${props.mode === "light" ? "bg-orange-300" : "bg-blue-300"} rounded-xl`}>
          <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src={webDev} alt='Web Development' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[1.5px_1.5px_1.5px_rgba(0,0,0,0.6)]'>Web Development</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`bg-center bg-cover ${props.mode === "light" ? "bg-orange-300" : "bg-blue-300"} rounded-xl`}>
          <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src={cpp} alt='CPP' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[1.5px_1.5px_1.5px_rgba(0,0,0,0.6)]'>C++</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`bg-center bg-cover ${props.mode === "light" ? "bg-orange-300" : "bg-blue-300"} rounded-xl`}>
          <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src={python} alt='Python' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[1.5px_1.5px_1.5px_rgba(0,0,0,0.6)]'>Python</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`bg-center bg-cover ${props.mode === "light" ? "bg-orange-300" : "bg-blue-300"} rounded-xl`}>
          <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src={java} alt='Java' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[1.5px_1.5px_1.5px_rgba(0,0,0,0.6)]'>Java</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className={`grid lg:grid-cols-2 gap-8 my-8 ${props.mode === "light" ? "text-gray-700" : "text-gray-700"} select-none overflow-hidden`}>
        {
          skillData.map((data, idx) => {
            return <div key={idx} className={`w-full flex items-center justify-center rounded-xl overflow-hidden p-2 space-x-1 ${idx % 2 !== 0 && "max-lg:flex-row-reverse"} ${props.mode === "light" ? "bg-orange-200" : "bg-blue-200"}`} data-aos={`${idx % 2 !== 0 ? "fade-left" : "fade-right"}`} data-aos-duration="800">
              <div className={`w-2/6 lg:w-1/5 h-28 p-2`}>
                <img src={data.img} alt={data.name} className='w-full h-full object-contain drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)]' />
              </div>
              <div className={`w-3/5 lg:w-4/5`}>
                <p className='text-justify font-medium'>{data.disc}</p>
              </div>
            </div>
          })
        }
      </div>


    </section>
  )
}

export default Skills
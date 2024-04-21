import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

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

const Skills = (props) => {
  return (
    <>
      <section className={`skills flex items-center flex-col p-2 h-80 justify-around text-center font-bold text-${props.mode === "light" ? "black" : "white"} scroll-mt-12`} id="mySkills">
        <div className="skillImg flex w-40 h-20 justify-cente">
          <h1 className='text-2xl mt-6'>Skills</h1>
          <img src={skill} alt="" className='w-20 h-20 aspect-[2/3] object-contain' />
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
          className="mySwiper w-[100%] md:w-[60%] py-5"
        >
          <SwiperSlide className='bg-center bg-cover navBar1 rounded-xl'>
            <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src={js} alt='JavaScript' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[2px_3px_3px_rgba(0,0,0,0.8)]'>JavaScript</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-center bg-cover navBar1 rounded-xl'>
            <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src={reactjsicon} alt='React JS' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[2px_3px_3px_rgba(0,0,0,0.8)]'>React JS</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-center bg-cover navBar1 rounded-xl'>
            <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt='Node JS' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[2px_3px_3px_rgba(0,0,0,0.8)]'>Node JS</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-center bg-cover navBar1 rounded-xl'>
            <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src={tailwindicon} alt='Tailwind CSS' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[2px_3px_3px_rgba(0,0,0,0.8)]'>Tailwind CSS</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-center bg-cover navBar1 rounded-xl'>
            <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src="https://viget.imgix.net/mongo-logo.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=1280&ixlib=php-2.1.1&q=90&w=1280&s=a153c7c80f42ab1e7db7fd2b6a27ab3b" alt='MongoDB' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[2px_3px_3px_rgba(0,0,0,0.8)]'>MongoDB</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-center bg-cover navBar1 rounded-xl'>
            <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src="https://icons.getbootstrap.com/assets/img/icons-hero.png" alt='Bootstrap' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[2px_3px_3px_rgba(0,0,0,0.8)]'>Bootstrap</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-center bg-cover navBar1 rounded-xl'>
            <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src={webDev} alt='Web Development' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[2px_3px_3px_rgba(0,0,0,0.8)]'>Web Development</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-center bg-cover navBar1 rounded-xl'>
            <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src={cpp} alt='CPP' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[2px_3px_3px_rgba(0,0,0,0.8)]'>C++</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-center bg-cover navBar1 rounded-xl'>
            <div className="makeCenter flex flex-col justify-start mt-2 space-y-2 items-center">
            <img src={python} alt='Python' className='flex w-20 h-20 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] object-contain aspect-[3/2]' />
            <p className='drop-shadow-[2px_3px_3px_rgba(0,0,0,0.8)]'>Python</p>
            </div>
          </SwiperSlide>



        </Swiper>


      </section>

    </>
  )
}

export default Skills
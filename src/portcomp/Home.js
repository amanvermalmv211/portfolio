import React, { useEffect } from 'react'
import avtar from '../Images/avtar.png'
import myImg from '../Images/myImg.png'
import Typed from 'typed.js'
import { Link, useLocation } from 'react-router-dom';
import myResume from '../pdfs/AmanVerma(Resume).pdf';
import XII from '../Images/XRes.jpg'
import X from '../Images/XIIRes.jpg'
import clgRes from '../Images/CollegeRes.png'
import Skills from './Skills';
import { FaSchoolFlag } from 'react-icons/fa6';
import { FaSchool } from "react-icons/fa";
import { IoIosSchool } from 'react-icons/io';
import { TiDocumentText } from 'react-icons/ti';
import { RiWhatsappFill } from 'react-icons/ri';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet-async';
import TwinklingStars, { TwinklingOrange } from './TwinklingStars';
import { TbBrandGithubFilled } from 'react-icons/tb';

const Home = (props) => {

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    const typed = new Typed(el.current, {
      stringsElement: '#typed-strings',
      typeSpeed: 30,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className={`${props.mode === "light" ? "text-gray-700" : "text-white"}`}>
      {/* greeting Section */}
      <section className='scroll-mt-[1500px]' id='homesec'>

        <Helmet>
          <title>Aman's Portfolio 24x7</title>
          <meta name="description" content="Aman Verma's personal portfolio built with React. Showcasing modern web development projects using React, MERN stack, Tailwind CSS, and TypeScript with a focus on responsive design and clean UI." />
        </Helmet>

        <div className={`flex items-center justify-center flex-col md:flex-row relative overflow-hidden md:h-[420px]`}>

          {
            props.mode === "light" ? <TwinklingOrange /> : <TwinklingStars />
          }

          <div className={`h-[650px] md:h-[450px] w-[650px] md:w-[450px] ${props.mode === "light" ? "bg-orange-300/40" : "bgC2"} absolute -top-1/2 -right-10 md:right-0 rounded-3xl rotate-45`}></div>

          <div className="w-full md:w-2/5 p-8 relative h-72 lg:h-full">
            <img src={avtar} alt="My Avtar" className='object-contain mx-auto w-60 md:w-80' data-aos="zoom-in-down" data-aos-duration="800" />
          </div>

          <div className="w-full md:w-3/5 xl:w-3/6 p-4 relative">
            <div className={`text-${props.mode === "light" ? "black" : "white"} h-48 lg:h-40`}>
              <div id="typed-strings">
                <p><strong className='text-3xl md:text-4xl'>Unveiling Creativity :  A journey through my Portfolio.</strong> <br /> <span className='text-xl md:text-2xl'>Hi, I'm <span className={`font-bold ${props.mode === "light" ? "text-orange-500" : "text-blue-500"}`}>Aman Verma</span> and I find joy in every aspect of <span className={`font-bold ${props.mode === "light" ? "text-orange-500" : "text-blue-500"}`}>web development.</span></span> </p>
              </div>
              <span id="typed" ref={el}></span>
            </div>

            <div className="home-btn flex justify-center items-center my-5">
              <Link to={myResume} className={`shadow-md font-semibold w-36 text-center rounded-md ${props.mode === "light" ? "bg-orange-300 hover:bg-orange-400" : "bg-blue-700 hover:bg-blue-800"} mx-2 text-lg py-1`} target="_blank" data-aos="zoom-in-up" data-aos-duration="800">Resume <TiDocumentText size={23} className='inline-block mb-0.5' /> </Link>
              <Link to="https://wa.me/916306805527" target="_blank" className={`shadow-md font-semibold w-36 text-center rounded-md ${props.mode === "light" ? "bg-orange-300 hover:bg-orange-400" : "bg-blue-700 hover:bg-blue-800"} mx-2 text-lg py-1`} data-aos="zoom-in-up" data-aos-duration="800">WhatsApp <RiWhatsappFill size={23} className='inline-block text-green-500 mb-0.5' /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className={`p-4 pb-10 ${props.mode !== "light" && "bg-gray-900"} scroll-mt-10 lg:scroll-mt-20`} id="myEducation">

        <h1 className='text-3xl md:text-4xl font-bold text-center m-4'>Education</h1>

        <p className='text-justify md:text-center text-lg md:text-xl lg:w-5/6 mx-auto pb-4'>Completed my schooling from <Link to="https://navodaya.gov.in/nvs/nvs-school/GHAZIPUR/en/about_us/About-JNV" target='_blank' className={`${props.mode === "light" ? "text-orange-500" : "text-blue-500"} font-semibold`}>Jawahar Navodaya Vidyalaya</Link> Ghazipur ( U.P. ), followed by a Bachelor's degree (Honours) in Computer Science from <Link to="https://www.du.ac.in/index.php?page=About-DU" target='_blank' className={`${props.mode === "light" ? "text-orange-500" : "text-blue-500"} font-semibold`}>Delhi University.</Link> Currently pursuing an MCA in Information Technology from  <Link to="https://www.jainuniversity.ac.in" target='_blank' className={`${props.mode === "light" ? "text-orange-500" : "text-blue-500"} font-semibold`}>Jain University.</Link></p>

        <div className="flex flex-wrap items-center justify-center gap-16 p-2 m-4">

          <div className={`border-t-4 border-b-4 rounded-xl border-double flex flex-col p-2 h-72 shadow-lg hover:scale-[1.03] text-center w-60 ${props.mode === "light" ? "border-orange-500 bg-gray-50 hover:shadow-gray-400" : "border-blue-600 bg-blue-950 hover:shadow-blue-900"} relative`} data-aos="flip-left" data-aos-duration="800">
            <FaSchool className='mx-auto' size={50} />
            <h3 className='font-bold text-[17px] my-2'>Secondary (10th)</h3>
            <p className='m-1'>94.2%</p>
            <p className='m-1'>Year: 2018-2019</p>
            <div className={`absolute w-full bottom-6 left-0 ${props.mode === "light" ? "text-orange-500" : "text-blue-500"} underline`}>
              <Link to={X} target='_parent'>Result</Link>
            </div>
          </div>

          <div className={`border-t-4 border-b-4 rounded-xl border-double flex flex-col p-2 h-72 shadow-lg hover:scale-[1.03] text-center w-60 ${props.mode === "light" ? "border-orange-500 bg-gray-50 hover:shadow-gray-400" : "border-blue-600 bg-blue-950 hover:shadow-blue-900"} relative`} data-aos="flip-left" data-aos-duration="800">
            <FaSchoolFlag className='mx-auto' size={50} />

            <h3 className='font-bold text-[17px] my-2'>Senior Secondary (12th)</h3>
            <p className='m-1'>(PCM)</p>
            <p className='m-1'>89.2%</p>
            <p className='m-1'>Year: 2020-2021</p>
            <div className={`absolute w-full bottom-6 left-0 ${props.mode === "light" ? "text-orange-500" : "text-blue-500"} underline`}>
              <Link to={XII} target='_parent'>Result</Link>
            </div>
          </div>

          <div className={`border-t-4 border-b-4 rounded-xl border-double flex flex-col p-2 h-72 shadow-lg hover:scale-[1.03] text-center w-60 ${props.mode === "light" ? "border-orange-500 bg-gray-50 hover:shadow-gray-400" : "border-blue-600 bg-blue-950 hover:shadow-blue-900"} relative`} data-aos="flip-left" data-aos-duration="800">
            <IoIosSchool className='mx-auto' size={50} />

            <h3 className='font-bold text-[17px] my-2'>B.Sc.(Hons.) CS</h3>
            <p className='m-1'>7.91 CGPA</p>
            <p className='m-1'>Year: 2021-2024</p>
            <div className={`absolute w-full bottom-6 left-0 ${props.mode === "light" ? "text-orange-500" : "text-blue-500"} underline`}>
              <Link to={clgRes} target='_parent'>Marksheet</Link>
            </div>
          </div>

          <div className={`border-t-4 border-b-4 rounded-xl border-double flex flex-col p-2 h-72 shadow-lg hover:scale-[1.03] text-center w-60 ${props.mode === "light" ? "border-orange-500 bg-gray-50 hover:shadow-gray-400" : "border-blue-600 bg-blue-950 hover:shadow-blue-900"}`} data-aos="flip-left" data-aos-duration="800">
            <IoIosSchool className='mx-auto' size={50} />

            <h3 className='font-bold text-[17px] my-2'>Masters In Computer Aplication</h3>
            <p className='m-1'>Currently pursuing MCA from Jain University.</p>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className={`${props.mode !== "light" && "bg-gray-900"} p-4 md:p-8 lg:px-12 max-md:pb-16 scroll-mt-12 lg:scroll-mt-20`} id="allAboutMe">

        <h1 className='text-3xl md:text-4xl font-bold text-center'>About Me</h1>

        <div className="flex lg:flex-row flex-col-reverse items-center justify-center">
          <div className="abtLeftSec flex justify-between items-center flex-col lg:w-4/6">
            <div className='mb-2'>
              <h1 className='text-2xl font-bold'>Hello there! 👋</h1>
              <p className='text-justify text-lg'>I'm <span className={`${props.mode === "light" ? "text-orange-500" : "text-blue-500"} font-semibold`}>Aman Verma</span>, a passionate and innovative developer. My journey in the world of programming has been an exciting one,
                constantly filled with opportunities to learn and grow. My expertise lies in web
                development, and I am constantly exploring new technologies and frameworks. From programming languages to cutting-edge frameworks, I am always eager to explore the latest innovations and trends. When I'm not busy coding, you can find me reading books or playing games. I'm proud of the work I've put into each of my <Link className={`${props.mode === "light" ? "text-orange-500" : "text-blue-500"} font-semibold underline`} to="/project">projects</Link> , and they represent the culmination of my skills and dedication to web development. Web development is my creative playground,
                where I breathe life into ideas, I find joy in every aspect of web development - from
                conceptualizing intuitive designs to implementing robust back-end functionality. Feel free to explore my portfolio to discover some of the exciting projects I've made. I'm always excited to connect with like-minded individuals, so don't hesitate to reach out if you want to collaborate or discuss technology.</p>
            </div>
            <div className='flex items-center justify-center gap-4'>
              <Link to={myResume} className={`shadow-md font-semibold w-32 text-center rounded-md ${props.mode === "light" ? "bg-orange-300 hover:bg-orange-400" : "bg-blue-700 hover:bg-blue-800"} mt-2 text-lg py-1`} target="_blank" data-aos="fade-right" data-aos-duration="1000">Resume <TiDocumentText size={23} className='inline-block mb-0.5' /> </Link>

              <Link to="https://github.com/amanvermalmv211" className={`shadow-md font-semibold w-32 text-center rounded-md ${props.mode === "light" ? "bg-orange-300 hover:bg-orange-400" : "bg-blue-700 hover:bg-blue-800"} mt-2 text-lg py-1`} target="_blank" data-aos="fade-right" data-aos-duration="800">GitHub <TbBrandGithubFilled size={23} className='inline-block mb-0.5 text-gray-700 bg-white rounded-full pt-1' /> </Link>
            </div>
          </div>

          <div className="lg:w-2/6 w-full mb-8 lg:mb-36 overflow-hidden">
            <img src={myImg} alt="Aman Verma" className='w-full h-80 lg:h-96 object-contain mx-auto drop-shadow-[1px_2px_3px_rgba(0,0,0,0.4)]' data-aos="fade-left" data-aos-duration="800" />
          </div>
        </div>
      </section>

      <Skills mode={props.mode} />

    </div>
  )
}

export default Home
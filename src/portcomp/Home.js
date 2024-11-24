import React from 'react'
import avtar from '../Images/avtar.png'
import myImg from '../Images/myImg.png'
import Typed from 'typed.js'
import { Link } from 'react-router-dom';
import myResume from '../pdfs/AmanVerma(Resume).pdf';
import XII from '../Images/XRes.jpg'
import X from '../Images/XIIRes.jpg'
import clgRes from '../Images/CollegeRes.png'
import Skills from './Skills';


const Home = (props) => {

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

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

  return (
    // className={`text-${props.mode === "light" ? "black" : "white"}`}
    <>
      {/* greeting Section */}
      <section className={`homeSec flex items-center justify-center ${props.mode === "light" ? "bgC1" : "bgC2"} p-2 h-96 md:rounded-bl-full md:rounded-tr-full scroll-mt-[1500px]`} id='homesec' >

        <section className="righthomeSec flex items-center justify-start max-w-[40%] md:max-w-[20%]">
          <img src={avtar} alt="My Avtar" className='md:w-60 object-contain aspect-[2/3]' />
        </section>

        <section className="lefthomeSec max-w-[65%] md:max-w-[50%] flex flex-col justify-center items-center md:text-center text-start p-5">
          <div className={`text-${props.mode === "light" ? "black" : "white"}`}>
            <div id="typed-strings">
              <p><strong className='md:text-3xl'>Unveiling Creativity :  A journey through my Portfolio.</strong> <br /> <span className='md:text-xl'>Hi, I'm <span className={`font-bold text-[#e36ac5]`}>Aman Verma</span> and I find joy in every aspect of <span className='font-bold text-[#e36ac5]'>web development.</span></span> </p>
            </div>
            <span id="typed" ref={el}></span>
          </div>

          <div className="home-btn flex justify-center items-center my-5">
            <Link to={myResume} className={`btn navBar1 text-black `} target="_blank">Resume</Link>
            <Link to="https://wa.me/916306805527" target="_blank" className={`btn navBar1 text-black`}>WhatsApp</Link>
          </div>
        </section>
      </section>

      {/* Education Section */}
      <section className={`eduSec flex flex-col items-center p-5 text-${props.mode === "light" ? "black" : "white"} scroll-mt-10 lg:scroll-mt-20`} id="myEducation">
        <h1 className='text-2xl md:text-4xl font-bold m-4'>Education</h1>
        <p className='text-center m-1'>Did schooling from <Link to="https://navodaya.gov.in/nvs/nvs-school/GHAZIPUR/en/about_us/About-JNV" target='_blank' className='text-blue-600'>Jawahar Navodaya Vidyalaya</Link> Ghazipur U.P.</p>
        <p className='text-center m-1'>Currently pursuing B.Sc.(Hons.) Computer Science from <Link to="https://www.du.ac.in/index.php?page=About-DU" target='_blank' className='text-blue-600'>Delhi University</Link></p>

        <section className="grades flex flex-wrap items-center justify-center p-2 m-4">
          <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
            <div className="schLogo">
              <i className="fa fa-building fa-3x" aria-hidden="true"></i>
            </div>
            <h3 className='font-bold text-[17px] my-2'>Secondary(10th)</h3>
            <p className='m-1'>94.2%</p>
            <p className='m-1'>Year: 2018-2019</p>
            <div className="gradeLink mt-14 text-blue-700 underline">
              <Link to={X} target='_parent'>Visit</Link>
            </div>
          </div>

          <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
            <div className="schLogo">
              <i className="fa fa-building fa-3x" aria-hidden="true"></i>
            </div>
            <h3 className='font-bold text-[17px] my-2'>Senior Secondary(12th)</h3>
            <p className='m-1'>(PCM)</p>
            <p className='m-1'>89.2%</p>
            <p className='m-1'>Year: 2020-2021</p>
            <div className="gradeLink mt-7 text-blue-700 underline">
              <Link to={XII} target='_parent'>Visit</Link>
            </div>
          </div>

          <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
            <div className="schLogo">
              <i className="fa fa-graduation-cap fa-3x" aria-hidden="true"></i>
            </div>
            <h3 className='font-bold text-[17px] my-2'>B.Sc.(Hons.) CS</h3>
            <p className='m-1'>1st Year: 8.5CGPA</p>
            <p className='m-1'>2nd Year: 7.71CGPA</p>
            <p className='m-1'>Year: 2021-2024</p>
            <div className="gradeLink mt-7 text-blue-700 underline">
              <Link to={clgRes} target='_parent'>Visit</Link>
            </div>
          </div>

        </section>
      </section>

      {/* About Section */}
      <section className={`setHeading text-${props.mode === "light" ? "black bgC1" : "white bgC2"} flex items-center justify-center flex-col p-2 scroll-mt-12 lg:scroll-mt-20`} id="allAboutMe">
        <div>
          <h1 className='text-2xl md:text-4xl font-bold mt-4 max-lg:-mb-6'>About Me</h1>
        </div>
        <section className="abtContainer flex lg:flex-row flex-col-reverse items-center justify-center p-2">
          <section className="abtLeftSec flex justify-center items-center flex-col max-w-[700px]">
            <div className='mb-2'>
              <h1 className='text-xl font-bold'>Hello there! 👋</h1>
              <p className='text-justify'>I'm <span className='font-bold text-[#e36ac5]'>Aman Verma</span>, a passionate and innovative developer with a love
                for all things tech. My journey in the world of programming has been an exciting one,
                constantly filled with opportunities to learn and grow. My expertise lies in web
                development, and I am constantly exploring new technologies and frameworks. From programming languages to
                cutting-edge frameworks, I am always eager to explore the latest innovations and trends.
                When I'm not busy coding, you can find me reading books or playing games. I'm proud of the
                work I've put into each of my <Link className='font-bold text-[#e36ac5]' to="/project">projects</Link> , and they represent the culmination of
                my skills and dedication to web development. Web development is my creative playground,
                where I breathe life into ideas, I find joy in every aspect of web development - from
                conceptualizing intuitive designs to implementing robust back-end functionality.. If you
                have any questions, feedback, or opportunities for collaboration related to these projects,
                don't hesitate to reach out. Feel free to explore my portfolio to discover some of the
                exciting projects I've made. I'm always excited to connect with like-minded individuals, so
                don't hesitate to reach out if you want to collaborate or discuss technology.</p>
            </div>
            <Link to={myResume} className={`btn navBar1 text-black`} target="_blank">Resume</Link>
          </section>

          <section className="abtRightSec flex max-w-[350px] lg:ml-10 lg:-mt-10">
            <img src={myImg} alt="Unable to render" className='w-44 lg:w-72 lg:h-auto h-52 lg:mb-14 aspect-[2/3] object-contain' />
          </section>
        </section>
      </section>

      <Skills mode={props.mode}/>

    </>
  )
}

export default Home
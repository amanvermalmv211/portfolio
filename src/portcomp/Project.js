import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import sbw from '../Images/sbw.png';
import texteditor from '../Images/texteditor.png';
import itutorsimg from '../Images/itutorsimg.png';
import shutterpics from '../Images/shutterpics.png';
import testimonial from '../Images/testimonial.png';
import myLiblogo from '../Images/myLiblogo.svg';
import sehat from '../Images/sehat.png';
import todo from '../Images/todo.png';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet-async';

const Project = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
    AOS.refresh();
  }, []);

  const projects = [
    { img: myLiblogo, name: "meriLibrary", heading: "Full Stack (MERN) Project", disc: "A library management platform connecting students with local libraries. Implemented real-time subscription tracking, automated subscription expiry alerts by emails, and search functionality based on locality.", link: "https://merilibrary.in" },
    { img: itutorsimg, name: "iTutors", heading: "TypeScript (MERN) Project", disc: "Built a full-stack TypeScript MERN application for iTutors enabling admin to manage student records, track fee payments, update subscription status, and send notifications with role-based access and a clean, responsive UI.", link: "https://itutors.netlify.app" },
    { img: shutterpics, name: "Shutter Pics", heading: "Full Stack (MERN) Project", disc: "Developed a portfolio and service booking website for a studio person to showcase his services and streamline client booking. Allowing clients to view photographer availability. Designed a feedback system too.", link: "https://shutterpics.in" },
    { img: "https://myjewelshop.netlify.app/static/media/favicon-310x310.842bf0fe7d631bae52a5.png", name: "My Jewel Shop", heading: "Full Stack (MERN) Project", disc: "Developed an e-commerce website using the MERN stack which has responsive, user-friendly interface with reusable React components for code efficiency and consistency across the website and created API’s for product management.", link: "https://myjewelshop.netlify.app" },
    { img: todo, name: "Todo List", heading: "TypeScript Front-end Project", disc: "Developed a responsive ToDo List application using React, TypeScript, and Tailwind CSS, featuring task management, state handling, and modern UI design to enhance user experience & demonstrate frontend development proficiency.", link: "https://mytodolist24x7.netlify.app" },
    { img: sehat, name: "Sehat", heading: "React Front-end Project", disc: "Created Sehat, a frontend project built with React and Tailwind CSS. It serves as a visual prototype for an AI-powered health assistance platform, highlighting key features such as health report uploads, smart suggestions etc.", link: "https://sehathealth.netlify.app" },
    { img: "https://myveggiesshop.netlify.app/static/media/logo.66b1baedbf4e98b4c2be.png", name: "My Vegies", heading: "React Front-end Project", disc: "Developed a vegetable listing app using React and Tailwind CSS to practice prop drilling and useContext API, improving state handling and understanding of component communication in React applications.", link: "https://myveggiesshop.netlify.app" },
    { img: sbw, name: "Shiv Battery Works", heading: "React Front-end Project", disc: "Built a responsive electronic shop web app to explore React Router for seamless navigation. Gained hands on experience in component-based architecture and client-side routing, enhancing skills in modern frontend development.", link: "https://shivbatteryworks.netlify.app" },
    { img: texteditor, name: "Text Editor", heading: "React Front-end Project", disc: "A text utility web app using React and Tailwind CSS. Features include removing extra spaces, converting text to uppercase/lowercase, word and character count, and clipboard copy functionality. Developed during initial React learning phase.", link: "https://texteditoraman.netlify.app" },
    { img: "https://s3.amazonaws.com/eventtia/event_logos/18916/medium/expvqmxqaej8ib3copy15942077171594207717.png?1594207717", name: "Mind Maze Quiz", heading: "HTML, CSS and JavaScript", disc: "Focused on dynamic content rendering and user interaction without using any frameworks. Users can select their age group and preferred subject to attempt quizzes. Displays results at the end of the quiz.", link: "https://mindmazequiz.netlify.app" },
    { img: testimonial, name: "Testimonial Slider", heading: "HTML, CSS and JavaScript", disc: "Created a testimonial to showcase information about various IIT colleges in India. Focused on responsive design and dynamic testimonial sections to highlight college details, enhancing content presentation and user engagement.", link: "https://testimonialsliderdemo.netlify.app" },
  ]

  return (
    <>
      <section className={`flex flex-col items-center p-4 ${props.mode === "light" ? "text-gray-700 bg-gray-100" : "text-white bg-gray-900"} scroll-mt-[1500px]`} id="myEducation">
        <Helmet>
          <title>Projects | Aman's Portfolio</title>
          <meta name="description" content="Explore featured web development projects by Aman Verma, built using React, TypeScript, MERN stack, and Tailwind CSS. Real-world apps with clean design and responsive UI." />
        </Helmet>
        <h1 className='text-3xl md:text-4xl font-bold m-4'>My Projects</h1>
        <p className='text-justify md:text-center lg:w-4/5 pb-8 text-lg'>Welcome to the heart of my portfolio, I invite you to explore the diverse facets of my skills, passion, and dedication. Each project is a testament to my unwavering commitment to pushing boundaries, solving problems, and translating ideas into tangible realities.</p>


        <div className="grades flex flex-wrap items-center justify-center gap-16 p-2 m-4">

          {
            projects.map((project, idx) => {
              return <div key={idx} className={`border-t-4 border-b-4 rounded-xl border-double p-2 h-80 shadow-md hover:scale-[1.03] text-center w-60 ${props.mode === "light" ? "border-orange-500 bg-white" : "border-blue-600 bg-blue-950"} select-none`} data-aos={`${idx % 2 !== 0 ? "flip-left" : "flip-right"}`} data-aos-duration="800">
                <div className="h-16 w-20 mx-auto">
                  <img src={project.img} alt="" className={`object-contain w-full h-full ${idx === 0 && "scale-[2.3]"} ${idx === 5 && "scale-[1.8]"} ${idx === 7 && "scale-[1.6]"} ${idx === 9 && "scale-[1.5]"}`} />
                </div>
                <h3 className='font-bold text-lg -mb-1'>{project.name}</h3>
                <p className='mb-1'>{project.heading}</p>
                <p className='text-justify text-sm'>{project.disc}</p>
                <div className={`mt-2 ${props.mode === "light" ? "text-orange-500" : "text-blue-500"} underline`}>
                  <Link to={project.link} target='_blank'>Visit</Link>
                </div>
              </div>
            })
          }

        </div>
      </section>
    </>
  )
}

export default Project
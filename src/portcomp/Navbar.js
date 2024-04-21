import React, { useState } from 'react'
import logo from '../Images/logo.jpg'
import { HashLink } from 'react-router-hash-link';  // npm i react-router-hash-link
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  // const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={`navBar ${props.mode === "light" ? 'navBar1 shadow-[0_0_10px_black]' : 'navBar2 shadow-[0_0_10px_white]'} flex items-center lg:flex-row flex-col px-4 py-3 transition-all duration-100 ease-out sticky top-0 text-${props.mode === "light" ? "black" : "white"} z-20 transition-all lg:transition-none duration-500 ease-out ${open ? 'h-36 lg:h-auto' : 'h-auto'}`}>

        <div className="myIcon flex justify-center items-center space-x-1 lg:hidden absolute left-3 top-2 font-bold">
          <img src={logo} alt="Portfolio" className={`rounded-full w-6 h-6 ${props.mode === "light" ? "invert-0" : "invert"}`} />
          <Link to="/" id="spanHeading">Aman's Portfolio</Link>
        </div>

        <div className="log flex items-center justify-center space-x-2 lg:my-0 my-2 font-bold">
          <img src={logo} alt="Portfolio" className={`hidden lg:block rounded-full w-10 h-10 lg:my-0 mt-7 ${props.mode === "light" ? "invert-0" : "invert"}`} />
          <Link to="/" id="spanHeading" className='hidden lg:block'>Aman's Portfolio</Link>
        </div>

        {/* className="nav-list v-class flex justify-center items-center flex-col lg:flex-row w-[80%] font-bold text-xl" */}

        <ul className={`lg:flex grid grid-cols-3 text-center w-full lg:w-auto lg:pb-0 pt-3 pb-3 lg:pt-0 absolute lg:static lg:z-auto -z-50 left-0 transition-all lg:transition-none duration-75 ease-out ${open ? 'top-10' : 'top-[-1000px]'} font-semibold lg:ml-12`}>
          <li className='py-1 px-5 hover:scale-110 hover:not-blur-lg' onClick={() => { setOpen(!open) }}><HashLink to={"/#homesec"}>Home</HashLink></li>
          <li className='py-1 px-5 hover:scale-110 hover:not-blur-lg' onClick={() => { setOpen(!open) }}><HashLink to={"/#mySkills"}>Skills</HashLink></li>
          <li className='py-1 px-5 hover:scale-110 hover:not-blur-lg' onClick={() => { setOpen(!open) }}><HashLink to={"/project#myEducation"}>Projects</HashLink></li>
          <li className='py-1 px-5 hover:scale-110 hover:not-blur-lg' onClick={() => { setOpen(!open) }}><HashLink to={"/cppnotes#myEducation"}>Notes</HashLink></li>
          <li className='py-1 px-5 hover:scale-110 hover:not-blur-lg' onClick={() => { setOpen(!open) }}><HashLink to={"/contact#contact"}>Contact</HashLink></li>
        </ul>

        <div className="absolute top-2 lg:top-5 right-16 lg:right-28 lg:items-center lg:cursor-pointer" onClick={props.toggleMode}>
          <i className={`setMode fa ${props.mode === "light" ? 'fa-moon-o' : 'fa-sun-o'} scale-125 md:scale-150 -rotate-[37deg]`} aria-hidden="true" onClick={()=>{if(open){setOpen(false)}}}></i>
        </div>

        <div onClick={() => { setOpen(!open) }} className='burger lg:hidden absolute right-5 top-2' >
          <i className="setCross fa fa-bars fa-lg" aria-hidden="true"></i>
        </div>
      </nav>
    </>
  )
}

export default Navbar
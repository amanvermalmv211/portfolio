import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa6";
import { FaHome } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { GoProjectSymlink } from 'react-icons/go';
import { CgNotes } from 'react-icons/cg';
import { MdContactPhone, MdDarkMode, MdLightMode } from 'react-icons/md';
import logo from '../Images/logo.png'
import { FcAbout } from 'react-icons/fc';

function NavLink({ to, mode, children }) {
  const location = useLocation();
  const isActive = location.pathname + location.hash === to;

  return (
    <Link
      to={to}
      className={`transition-colors ${isActive
        ? `${mode === "light" ? "text-blue-600" : "text-yellow-500"} underline`
        : `${mode === "light" ? "hover:text-blue-600" : "hover:text-yellow-500"}`
        }`}
    >
      {children}
    </Link>
  );
}

const Navbar = (props) => {

  const [open, setOpen] = useState(false);

  const allLinks = [
    { name: "Home", link: "/#homesec", icon: FaHome, iconTheme: "text-orange-400" },
    { name: "About", link: "/#allAboutMe", icon: FcAbout, iconTheme: "text-orange-400" },
    { name: "Skills", link: "/#mySkills", icon: GiSkills, iconTheme: "text-green-600" },
    { name: "Projects", link: "/project#myEducation", icon: GoProjectSymlink, iconTheme: "text-purple-600" },
    { name: "Notes", link: "/cppnotes#myEducation", icon: CgNotes, iconTheme: "text-gray-500" },
    { name: "Contact", link: "/contact#contact", icon: MdContactPhone, iconTheme: "text-blue-600" },
  ]

  useEffect(() => {
    if (open) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };

  }, [open]);

  const getClose = () => {
    if (open) {
      setOpen(false);
    }
  }

  return (
    <nav className={`sticky top-0 left-0 ${props.mode === "light" ? "bg-orange-300 text-gray-700" : "bg-blue-950 text-white"} bg z-50 overflow-hidden shadow-md`}>
      <div className='flex items-center justify-between px-2'>
        <div className='flex items-center space-x-1 p-1.5 md:p-3'>
          <Link to="/#homesec" className={`flex items-center justify-center lg:border-r-2 ${props.mode === "light" ? "border-blue-600" : "border-yellow-600"} pr-4`}>
            <img src={logo} alt="portfolio" className={`object-contain w-4 h-4 scale-[6] mx-2 ${props.mode === "light" ? "invert" : "invert-0"}`} />
            <span className={`ml-1 font-semibold text-lg pt-1 ${props.mode === "light" ? "text-blue-600" : "text-yellow-500"}`}> - Portfolio</span>
          </Link>

          <ul className='hidden lg:flex pl-4 space-x-10 font-semibold text-lg'>
            {
              allLinks.map((data, idx) => {
                return <NavLink key={idx} to={data.link} mode={props.mode}>{data.name}</NavLink>
              })
            }
          </ul>
        </div>

        <div className='flex items-center justify-center gap-4 md:gap-8'>
          <div className={`flex items-center w-14 h-7 p-1 ${props.mode === "light" ? "bg-blue-950" : "bg-orange-300"} rounded-full lg:cursor-pointer transition-all duration-300 lg:mr-20`} onClick={props.toggleMode}>
            <span className={`h-5 w-5 bg-white rounded-full transition-all ${props.mode === "dark" && "ml-7"} flex items-center justify-center duration-300`}>
              {
                props.mode === "light" ? <MdLightMode className='text-yellow-500' /> : <MdDarkMode className='scale-110 text-blue-900' />
              }
            </span>
          </div>

          <div className='lg:hidden flex items-center justify-center space-x-8 px-2'>
            <HiMiniBars3CenterLeft onClick={() => { setOpen(!open) }} size={26} className={`${props.mode === "light" ? "" : "text-yellow-500"}`} />
          </div>
        </div>

      </div>

      <div className={`fixed top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${open ? "bg-black/50 pointer-events-auto" : "bg-transparent pointer-events-none"} overflow-y-auto`} onClick={getClose}>

        <div className={`w-full bg-gradient-to-b ${props.mode === "light" ? "from-amber-50 to-orange-50" : "from-sky-900 to-blue-900"} shadow-lg z-50 transform transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-full"}`}
        >

          <div onClick={(e) => { e.stopPropagation() }} className={`flex items-center justify-between ${props.mode === "light" ? "bg-orange-300" : "bg-blue-950"} p-5 sticky top-0 left-0`}>
            <Link to="/#homesec" onClick={() => { setOpen(!open) }} className='flex items-center justify-center'>
              <img src={logo} alt="portfolio" className={`object-contain w-4 h-4 scale-[7] mx-4 ${props.mode === "light" ? "invert" : "invert-0"}`} />
              <span className={`ml-1 font-semibold text-lg pt-1 font-serif ${props.mode === "light" ? "text-blue-600" : "text-yellow-500"}`}> - Portfolio</span>
            </Link>
            <RxCross2 onClick={() => { setOpen(!open) }} size={26} className={`border-2 ${props.mode === "light" ? "border-gray-700" : "border-yellow-500 text-yellow-500"} rounded-md shadow-lg`} />
          </div>

          <ul onClick={getClose} className='font-medium'>
            {
              allLinks.map((data, idx) => {
                return <Link to={data.link} key={idx} className={`p-4 border-b ${props.mode === "light" ? "border-orange-300" : "border-yellow-400"} flex items-center justify-between`}>
                  <div className='flex items-center space-x-2'>
                    <data.icon size={20} className={`${data.iconTheme}`} />
                    <span>{data.name}</span>
                  </div>
                  <FaAngleRight className={`place-items-end ${props.mode === "light" ? "text-orange-400" : "text-yellow-400"}`} />
                </Link>
              })
            }
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar;
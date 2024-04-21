import React from 'react'
import { Link } from 'react-router-dom'
import myResume from '../pdfs/AmanVerma(Resume).pdf';
import { HashLink } from 'react-router-hash-link';

const Footer = (props) => {
    return (
        <>
            <footer className={`footer flex flex-col items-center justify-center pt-5 text-${props.mode === "light" ? "black bgC1" : "white bgC2"}`}>
                <section className="twoCont flex lg:flex-row flex-col items-center justify-around w-[100%]">
                    <section className="socialContact flex flex-wrap items-center justify-center p-2">
                        <div>
                            <h1 className='font-bold text-xl'>Get In Touch :</h1>
                        </div>

                        <Link to="https://www.linkedin.com/in/aman-verma-770ab5252" target="_blank"><i className="fa fa-linkedin-square touchLink my-2 mx-3 cursor-pointer text-blue-600 hover:scale-150" aria-hidden="true"></i></Link>
                        <Link to="mailto:amanvermalmv211@gmail.com" target="_blank"><i className="fa fa-envelope touchLink my-2 mx-3 cursor-pointer text-yellow-500 hover:scale-150" aria-hidden="true"></i></Link>
                        <Link to="https://wa.me/916306805527" target="_blank"><i className="fa fa-whatsapp touchLink my-2 mx-3 cursor-pointer text-green-500 hover:scale-150" aria-hidden="true"></i></Link>
                        <Link to="https://www.instagram.com/invites/contact/?i=1ele9i6x7lf2r&utm_content=40gsjzh" target="_blank"><i className="fa fa-instagram touchLink my-2 mx-3 cursor-pointer text-[#e36ac5] hover:scale-150" aria-hidden="true"></i></Link>
                        <Link to="https://www.facebook.com/profile.php?id=100011377276805" target="_blank"><i className="fa fa-facebook-official touchLink my-2 mx-3 cursor-pointer text-blue-700 hover:scale-150" aria-hidden="true"></i></Link>

                    </section>

                    <section className="quickLinks flex flex-wrap items-center justify-center my-2">
                        <div>
                            <h1 className='font-bold text-xl'>Quick Links :</h1>
                        </div>
                        <ul className='flex justify-center items-center flex-wrap'>
                            <li className='my-1 mx-3 hover:text-[#e36ac5] hover:scale-110'><HashLink to={"/#homesec"}>Home</HashLink></li>
                            <li className='my-1 mx-3 hover:text-[#e36ac5] hover:scale-110'><Link to={myResume} target="_blank">Resume</Link></li>
                            <li className='my-1 mx-3 hover:text-[#e36ac5] hover:scale-110'><HashLink to={"/#allAboutMe"}>About</HashLink></li>
                            <li className='my-1 mx-3 hover:text-[#e36ac5] hover:scale-110'><HashLink to={"/#myEducation"}>Education</HashLink></li>
                            <li className='my-1 mx-3 hover:text-[#e36ac5] hover:scale-110'><HashLink to={"/#mySkills"}>Skills</HashLink></li>
                            <li className='my-1 mx-3 hover:text-[#e36ac5] hover:scale-110'><HashLink to={"/project#myEducation"}>Projects</HashLink></li>
                            <li className='my-1 mx-3 hover:text-[#e36ac5] hover:scale-110'><HashLink to={"/contact#contact"}>Contact</HashLink></li>
                        </ul>
                    </section>
                </section>

                <section className="copyRights m-1 text-sm text-center">2023 &copy; Aman's Protfolio All rights reserved</section>
            </footer>
        </>
    )
}

export default Footer
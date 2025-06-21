import logo from "../Images/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaMobileAlt } from "react-icons/fa";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';

const FooterLinks = [
    { name: "Home", link: "/#homesec" },
    { name: "About", link: "/#allAboutMe" },
    { name: "Skills", link: "/#mySkills" },
    { name: "Projects", link: "/project#myEducation" },
    { name: "Contact", link: "/contact#contact" }
]

const noteLinks = [
    {
        title: "CPP",
        link: "/cppnotes",
    },
    {
        title: "Java",
        link: "/javanotes",
    },
    {
        title: "Kotlin",
        link: "/kotlinnotes",
    },
    {
        title: "Python",
        link: "/pythonnotes",
    },
    {
        title: "MySQL",
        link: "/mysqlotes",
    }
];

const Footer = (props) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="text-white bgC1 select-none">
            <Helmet>
                <meta name="description" content="Get in touch with Aman Verma. Contact via phone or visit the address mentioned in the footer. Available for web development projects and collaborations." />
            </Helmet>
            {/* company details */}
            <div className="py-8">
                <div className={`flex items-center justify-center w-60 mx-auto`} data-aos="zoom-in" data-aos-duration="800">
                    <img src={logo} alt="portfolio" className={`object-contain w-8 h-8 scale-[6] mx-2 ${props.mode === "light" ? "invert" : "invert-0"}`} />
                    <span className={`ml-4 font-semibold text-3xl pt-1 font-serif ${props.mode === "light" ? "text-blue-600" : "text-yellow-500"}`}> - Portfolio</span>
                </div>
            </div>

            {/* Footer Links */}
            <div className="flex flex-col md:flex-row max-md:items-center justify-around pb-6">
                <div className="flex items-start justify-between md:justify-around w-2/3">
                    <div className="">
                        <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                            Important Links
                        </h1>
                        <ul className="flex flex-col gap-3">
                            {FooterLinks.map((link, idx) => (
                                <Link to={link.link} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={idx} >
                                    <span>{link.name}</span>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                            Notes
                        </h1>
                        <ul className="flex flex-col gap-3">
                            {noteLinks.map((link, idx) => (
                                <Link to={link.link} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={idx} >
                                    <span>{link.title}</span>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* social links */}

                <div className="flex flex-col items-start md:items-center md:w-1/3 w-full max-md:p-4 relative">
                    <div className="flex items-center gap-6 overflow-hidden">
                        <Link to="https://www.linkedin.com/in/aman-verma-770ab5252" target="_blank" data-aos="zoom-in" data-aos-duration="1000">
                            <FaLinkedin size={25} className="text-blue-600" />
                        </Link>
                        <Link to="mailto:amanvermalmv211@gmail.com" target="_blank" data-aos="zoom-in" data-aos-duration="1000">
                            <IoIosMail size={35} className="text-yellow-400" />
                        </Link>
                        <Link to="https://wa.me/916306805527" target="_blank" data-aos="zoom-in" data-aos-duration="1000">
                            <FaWhatsapp size={30} className="text-green-400" />
                        </Link>
                        <Link to="https://www.instagram.com/invites/contact/?i=1ele9i6x7lf2r&utm_content=40gsjzh" target="_blank" data-aos="zoom-in" data-aos-duration="1000">
                            <FaInstagram size={30} className="text-pink-400" />
                        </Link>
                        <Link to="https://www.facebook.com/profile.php?id=100011377276805" target="_blank" data-aos="zoom-in" data-aos-duration="1000">
                            <FaFacebook size={28} className="bg-blue-700 rounded-full" />
                        </Link>
                    </div>
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mt-3">
                            <FaMobileAlt />
                            <Link to="tel:6306805527">6306805527</Link>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaLocationDot />
                            <p>BTM Layout, Bangalore 560076</p>
                        </div>
                    </div>

                    <div className="text-sm absolute bottom-0 text-center">&copy; {new Date().getFullYear()} - Aman's - Portfolio All rights reserved.</div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
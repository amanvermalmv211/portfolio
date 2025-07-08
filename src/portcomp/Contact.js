import { useEffect } from "react"
import { FaMobileAlt } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoIosSend } from "react-icons/io";
import AOS from 'aos';
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet-async';

const Contact = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <section className="contact bg-blend-darken h-fit flex flex-col items-center justify-center md:py-28 py-12 px-4 scroll-mt-[1500px]" id='contact' >
                <Helmet>
                    <title>Contact Page | Aman's Portfolio</title>
                    <meta name="description" content="Fill out the contact form to reach Aman Verma for web development projects, collaborations, or inquiries. I'm just a message away!" />
                </Helmet>
                <h1 className={`text-5xl my-4 mb-12 font-bold text-gray-300 drop-shadow-[1px_2px_2px_rgb(0,0,0)] font-serif`} data-aos="zoom-in" data-aos-duration="1000">Get in touch</h1>
                <form action="https://formspree.io/f/mpzgqqkz" method="post" className="container flex flex-col items-center justify-center max-w-sm rounded-xl p-6 border-2 border-white/20 bg-black bg-opacity-25 text-white shadow-md" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="box border-b-2 border-white my-4 w-full">
                        <FaPerson size={25} className="inline-block mr-1 text-blue-500" />
                        <input className='border-none outline-none placeholder:text-gray-300' type="text" name="username" id="email" placeholder="Enter your Name" required />
                    </div>

                    <div className="box border-b-2 border-white my-4 w-full">
                        <IoIosMail size={25} className="inline-block mr-1 text-yellow-500" />
                        <input className='border-none outline-none placeholder:text-gray-300' type="email" name="email" id="password" placeholder="Enter your Email" required />
                    </div>

                    <div className="box border-b-2 border-white my-4 w-full">
                        <FaMobileAlt size={25} className="inline-block mr-1 text-green-400" />
                        <input className='border-none outline-none placeholder:text-gray-300' type="text" name="subject" id="contact" placeholder="Enter your Phone No." required />
                    </div>

                    <div className="box border-b-2 border-white my-4 w-full relative">
                        <LuMessageSquareMore size={25} className="absolute inset-0 mr-1 text-purple-500" />
                        <textarea className='border-none outline-none w-full pl-8 placeholder:text-gray-300' name="textarea" rows="1" placeholder="Write Message"></textarea>
                    </div>
                    <button className={`shadow-md font-semibold w-36 text-center rounded-md ${props.mode === "light" ? "bg-orange-300 hover:bg-orange-400 text-gray-700" : "bg-blue-700 hover:bg-blue-800"} mx-2 text-lg py-1 mt-4`} type="submit" id="submit">Submit <IoIosSend className="inline-block" size={20} /></button>
                </form>
            </section>
        </>
    )
}

export default Contact
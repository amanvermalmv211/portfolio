import NotesNav from './NotesNav'
import java from '../Images/java.png'
import javaImg from '../Images/basicsofjava.png'
import javaclasses from '../Images/classinjava.jpg'
import polymorphism from '../Images/polymorphism.jpg'
import execeptionHand from '../Images/execeptionHandlingJava.jpg'
import fileHand from '../Images/fileHandlinginJava.png'
import BasicsOfJavaLiterals from '../pdfs/BasicsOfJavaLiteralsStringArray_AmanVerma.pdf'
import customClass from '../pdfs/customClassinjava_AmanVerma.pdf'
import Interface from '../pdfs/InterfaceAndPolymorphism_AmanVerma.pdf'
import execeptionHandling from '../pdfs/execeptionHandlinginJava_AmanVerma.pdf'
import filehandlingAWT from '../pdfs/filehandlingAWTinJava_AmanVerma.pdf'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet-async';

const JavaNotes = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
        AOS.refresh();
    }, []);

    const javaData = [
        { img: javaImg, disc: "Basics of Java, Literals, Strings, Conditionals, Array and Methods", content: BasicsOfJavaLiterals },
        { img: javaclasses, disc: "Custom Class, Constructor, Inheritance and Dynamic Method", content: customClass },
        { img: polymorphism, disc: "Interface, Default Method, Polymorphism and Access Modifier", content: Interface },
        { img: execeptionHand, disc: "Exceeption Handling, Try & Catch, throw & throws and finally block", content: execeptionHandling },
        { img: fileHand, disc: "File Handling, Copy File from Command-line and A.W.T.", content: filehandlingAWT }
    ]

    return (
        <>
            <NotesNav setImg={java} mode={props.mode} />
            <section className={`myNotes ${props.mode === "light" ? "text-gray-700 bg-gray-100" : "text-white bg-gray-900"} flex flex-col items-center justify-center p-4 md:p-10 pb-16`}>
                <Helmet>
                    <title>Java Notes | Aman's Portfolio</title>
                    <meta name="description" content="Download free, high-quality PDF notes for Java. Curated by Aman Verma to help students and developers learn and revise key programming concepts easily." />
                </Helmet>
                <h1 className='font-semibold text-3xl md:text-4xl text-center my-2'>Java Notes</h1>
                <p className='text-justify md:text-lg'>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere meaning that compiled Java code can run on all platforms that support Java without the need to recompile. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. Java was originally developed by James Gosling at Sun Microsystems. It was released in May 1995 as a core component of Sun Microsystems' Java platform.</p>

                <div className="notes flex items-center justify-center flex-wrap gap-16 mt-8">
                    {
                        javaData.map((data, idx) => {
                            return <div key={idx} className={`border-t-4 border-b-4 rounded-xl border-double overflow-hidden h-72 shadow-md hover:scale-[1.03] text-center w-60 ${props.mode === "light" ? "border-orange-500 bg-white" : "border-blue-600 bg-blue-950"} select-none`} data-aos={`${idx % 2 !== 0 ? "flip-left" : "flip-right"}`} data-aos-duration="800">
                                <div className="w-full h-32 mb-2">
                                    <img src={data.img} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className='px-2'>
                                    <h1 className='text-lg mb-4'>{data.disc}</h1>
                                    <Link to={data.content} target="_blank" className={`${props.mode === "light" ? "text-orange-500" : "text-blue-500"} underline`}>Download</Link>
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default JavaNotes

import React from 'react'
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

const JavaNotes = (props) => {

    return (
        <>
            <NotesNav setImg={java} mode={props.mode} />
            <section className={`myNotes text-${props.mode === "light" ? "black" : "white"} flex flex-col items-center justify-center p-5 md:p-10`}>
                <h1 className='font-semibold text-2xl text-center my-2'>Java Notes</h1>
                <p className='text-justify'>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere meaning that compiled Java code can run on all platforms that support Java without the need to recompile. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. Java was originally developed by James Gosling at Sun Microsystems. It was released in May 1995 as a core component of Sun Microsystems' Java platform. The original and reference implementation Java compilers, virtual machines, and class libraries were originally released by Sun under proprietary licenses.</p>

                <section className="notes flex items-center justify-center flex-wrap">
                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={javaImg} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Basics of Java <br />Literals<br />Strings, Conditionals <br />Array, Methods</h3>
                        <div className="gradeLink mt-2">
                            <Link to={BasicsOfJavaLiterals} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={javaclasses} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Custom Class <br />Constructor Inheritance <br />Dynamic Method</h3>
                        <div className="gradeLink mt-9">
                            <Link to={customClass} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={polymorphism} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Interface <br />Default Method <br />Polymorphism <br />Access Modifier</h3>
                        <div className="gradeLink mt-2">
                            <Link to={Interface} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={execeptionHand} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Exceeption Handling <br />Try & Catch<br />throw & throws<br />finally block</h3>
                        <div className="gradeLink mt-2">
                            <Link to={execeptionHandling} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={fileHand} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>File Handling <br />Copy File from Command-line<br />A.W.T.</h3>
                        <div className="gradeLink mt-2">
                            <Link to={filehandlingAWT} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                </section>
            </section>
        </>
    )
}

export default JavaNotes

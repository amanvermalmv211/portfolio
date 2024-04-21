import React from 'react'
import NotesNav from './NotesNav'
import cpp from '../Images/cpp.png'
import basiccpp from '../Images/basicCpp.png'
import classcpp from '../Images/classesCpp.png'
import conscpp from '../Images/constructorCpp.jpg'
import inhericpp from '../Images/inheritanceCpp.png'
import newDelcpp from '../Images/newDeleteCpp.jpg'
import fileIocpp from '../Images/fileIO.jpg'
import tempcpp from '../Images/standardTemplate.png'
import basicOfCpp from '../pdfs/BasicsOfCpp_AmanVerma.pdf'
import structureClasses from '../pdfs/SturctureAndClass_AmanVerma.pdf'
import ConstructorDestructor from '../pdfs/ConstructorDestructor_AmanVerma.pdf'
import Inheritance from '../pdfs/Inheritance_AmanVerma.pdf'
import newDeleteAbstractClass from '../pdfs/newDeleteAbstractClass_AmanVerma.pdf'
import FileIOandTemplates from '../pdfs/FileIOandTemplates.pdf'
import StandardTemplates from '../pdfs/StandardTemplatesFuntionObjects_AmanVerma.pdf'
import { Link } from 'react-router-dom'

const CppNotes = (props) => {

    return (
        <>
            <NotesNav setImg={cpp} mode={props.mode} />
            <section className={`myNotes text-${props.mode === "light" ? "black" : "white"} flex flex-col items-center justify-center p-5 md:p-10 scroll-mt-[1500px]`} id='myEducation'>
                <h1 className='font-semibold text-2xl text-center my-2'>C++ Notes</h1>
                <h1 className='font-semibold text-2xl text-center my-2'>Empowering Beginners : Fundamentals of Programming Languages</h1>
                <p className='text-justify'>Welcome to the Notes Section : "Its a little initiative for the beginners" Unlock the Magic of Programming Languages! 🚀</p>
                <p className='text-justify'>Hello there, aspiring programmers and curious minds! 👋 In this "Notes" section, I've curated a collection of beginner-friendly resources that cover the essentials of different programming languages. Getting Started : To embark on your learning journey, simply click on the programming language you're interested in exploring. You'll be taken to a dedicated page where you can dive into the notes and start your adventure into the world of coding. Coding is about creativity and problem-solving. If you have any questions feel free to reach out. Wishing you an incredible learning experience and a future filled with endless possibilities!</p>

                <p className='text-justify mt-5'>C++ (pronounced "C plus plus" and sometimes abbreviated as CPP) is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup. First released in 1985 as an extension of the C programming language, it has since expanded significantly over time; modern C++ currently has object-oriented, generic, and functional features, in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Embarcadero, Oracle, and IBM.</p>

                <section className="notes flex items-center justify-center flex-wrap">
                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={basiccpp} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Basics of C++ <br />Operators <br />Reference Variables <br />Pointer, Array</h3>
                        <div className="gradeLink mt-2">
                            <Link to={basicOfCpp} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={classcpp} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Structure, Class <br />Nesting Member functions <br />Friend Function etc</h3>
                        <div className="gradeLink mt-2">
                            <Link to={structureClasses} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={conscpp} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Constructor <br />Copy Constructor <br />Overloading Destructor</h3>
                        <div className="gradeLink mt-9">
                            <Link to={ConstructorDestructor} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={inhericpp} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Inheritance <br />Multiple Inheritance <br />Access Modifier <br />Virtual Base Class</h3>
                        <div className="gradeLink mt-2">
                            <Link to={Inheritance} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={newDelcpp} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>New & Delete <br />Arrow Operators <br />Virtula Function <br />Abstract Class</h3>
                        <div className="gradeLink mt-2">
                            <Link to={newDeleteAbstractClass} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={fileIocpp} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>File Input Output <br />Read & Write Operations <br />Templates <br /></h3>
                        <div className="gradeLink mt-2">
                            <Link to={FileIOandTemplates} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={tempcpp} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Standard Templates Library <br />Vector, List, Map <br />Function Object <br /></h3>
                        <div className="gradeLink mt-2">
                            <Link to={StandardTemplates} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                </section>
            </section>
        </>
    )
}

export default CppNotes
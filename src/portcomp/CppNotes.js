import { useEffect } from 'react'
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
import AOS from 'aos';
import "aos/dist/aos.css";

const CppNotes = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "CPP Notes | Aman's Portfolio";
        AOS.init();
        AOS.refresh();
    }, []);

    const cppData = [
        { img: basiccpp, disc: "Basics of C++, Operators, Reference Variables, Pointer and Array", content: basicOfCpp },
        { img: classcpp, disc: "Structure, Class, Nesting Member functions and Friend Function etc.", content: structureClasses },
        { img: conscpp, disc: "Constructor, Copy Constructor and Overloading Destructor", content: ConstructorDestructor },
        { img: inhericpp, disc: "Inheritance, Multiple Inher., Access Modifier and Virtual Base Class", content: Inheritance },
        { img: newDelcpp, disc: "New & Delete, Arrow Operators, Virtula Function and Abstract Class", content: newDeleteAbstractClass },
        { img: fileIocpp, disc: "File Input Output, Read & Write Operations and Templates", content: FileIOandTemplates },
        { img: tempcpp, disc: "Standard Templates Library, Vector, List, Map and Function Object", content: StandardTemplates }
    ]

    return (
        <>
            <NotesNav setImg={cpp} mode={props.mode} />
            <section className={`myNotes ${props.mode === "light" ? "text-gray-700 bg-gray-100" : "text-white bg-gray-900"} flex flex-col items-center justify-center p-4 md:p-10 pb-16 scroll-mt-[1500px]`} id='myEducation'>
                <h1 className='font-semibold text-3xl md:text-4xl text-center my-2'>C++ Notes</h1>
                <p className='text-justify md:text-lg'>Hello there, aspiring programmers and curious minds! 👋 In this "Notes" section, I've curated a collection of beginner-friendly resources that cover the essentials of different programming languages. Coding is about creativity and problem-solving. If you have any questions feel free to reach out. Wishing you an incredible learning experience and a future filled with endless possibilities!</p>

                <p className='text-justify md:text-lg mt-2'>C++ (pronounced "C plus plus" and sometimes abbreviated as CPP) is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup. First released in 1985 as an extension of the C programming language, it has since expanded significantly over time; modern C++ currently has object-oriented, generic, and functional features, in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language.</p>

                <div className="notes flex items-center justify-center flex-wrap gap-16 mt-8">
                    {
                        cppData.map((data, idx) => {
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

export default CppNotes
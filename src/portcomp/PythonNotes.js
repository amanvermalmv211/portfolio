import NotesNav from './NotesNav'
import python from '../Images/python.png'
import basicpython from '../Images/basicPython.png'
import classpython from '../Images/classPython.jpg'
import filterpython from '../Images/mapFilterPython.png'
import BasicOfPython from '../pdfs/BasicOfPythonStringListTuplesSetFunctionFileIO_AmanVerma.pdf'
import classproperty from '../pdfs/classpropertyDecoderTryCatchPython_AmanVerma.pdf'
import EnumratorLambda from '../pdfs/EnumratorLambdaJoinMapFileter_AmanVerma.pdf'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const PythonNotes = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Python Notes | Aman's Portfolio";
        AOS.init();
        AOS.refresh();
    }, []);

    const PythonData = [
        { img: basicpython, disc: "Basics of Python, Variables, String slicing, List, Tuples and Function File IO", content: BasicOfPython },
        { img: classpython, disc: "Class, Constructor, Inheritance, classmethod, Try, Except and Finally", content: classproperty },
        { img: filterpython, disc: "Enumrator & Lambda Function, Join, Format, Map, Filter and Reduce", content: EnumratorLambda }
    ]

    return (
        <>
            <NotesNav setImg={python} mode={props.mode} />
            <section className={`myNotes ${props.mode === "light" ? "text-gray-700 bg-gray-100" : "text-white bg-gray-900"} flex flex-col items-center justify-center p-4 md:p-10 pb-16`}>
                <h1 className='font-semibold text-3xl md:text-4xl text-center my-2'>Python Notes</h1>
                <p className='text-justify md:text-lg'>Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library. Python was conceived in the late 1980s by Guido van Rossum at Centrum Wiskunde & Informatica (CWI) in the Netherlands as a successor to the ABC programming language, which was inspired by SETL, capable of exception handling and interfacing with the Amoeba operating system. Its implementation began in December 1989.</p>

                <div className="flex items-center justify-center flex-wrap gap-16 mt-8">
                    {
                        PythonData.map((data, idx) => {
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

export default PythonNotes
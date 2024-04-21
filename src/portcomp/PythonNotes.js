import React from 'react'
import NotesNav from './NotesNav'
import python from '../Images/python.png'
import basicpython from '../Images/basicPython.png'
import classpython from '../Images/classPython.jpg'
import filterpython from '../Images/mapFilterPython.png'
import BasicOfPython from '../pdfs/BasicOfPythonStringListTuplesSetFunctionFileIO_AmanVerma.pdf'
import classproperty from '../pdfs/classpropertyDecoderTryCatchPython_AmanVerma.pdf'
import EnumratorLambda from '../pdfs/EnumratorLambdaJoinMapFileter_AmanVerma.pdf'
import { Link } from 'react-router-dom'

const PythonNotes = (props) => {

    return (
        <>
            <NotesNav setImg={python} mode={props.mode} />
            <section className={`myNotes text-${props.mode === "light" ? "black" : "white"} flex flex-col items-center justify-center p-5 md:p-10`}>
                <h1 className='font-semibold text-2xl text-center my-2'>Python Notes</h1>
                <p className='text-justify'>Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library. Python was conceived in the late 1980s by Guido van Rossum at Centrum Wiskunde & Informatica (CWI) in the Netherlands as a successor to the ABC programming language, which was inspired by SETL, capable of exception handling and interfacing with the Amoeba operating system. Its implementation began in December 1989.</p>

                <section className="notes flex items-center justify-center flex-wrap">
                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={basicpython} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Basics of Python <br />Variables, String slicing, List, Tuples<br />Function File IO</h3>
                        <div className="gradeLink mt-2">
                            <Link to={BasicOfPython} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={classpython} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Class, Constructor <br />Inheritance, classmethod <br />Try, Except, Finally</h3>
                        <div className="gradeLink mt-2">
                            <Link to={classproperty} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={filterpython} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Enumrator & Lambda Function <br /> Join, Format <br />Map, Filter & Reduce</h3>
                        <div className="gradeLink mt-2">
                            <Link to={EnumratorLambda} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default PythonNotes
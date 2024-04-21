import React from 'react'
import NotesNav from './NotesNav'
import kotlin from '../Images/kotlin.png'
import kotlinImg from '../Images/basicKotlin.png'
import arrayKotl from '../Images/arrayKotlin.jpg'
import classKot from '../Images/classKotlin.png'
import kotlinAbstract from '../Images/kotlinAbstractClasses.png'
import basicsofKotlin from '../pdfs/basicsofKotlin_AmanVerma.pdf'
import FunctionArray from '../pdfs/FunctionArrayListMap_AmanVerma.pdf'
import ClassoObjectInheritance from '../pdfs/ClassoObjectInheritance_AmanVerma.pdf'
import AbastractClass from '../pdfs/AbastractClassInterfaceExceptionHandling_AmanVerma.pdf'
import { Link } from 'react-router-dom'

const KotlinNotes = (props) => {

    return (
        <>
            <NotesNav setImg={kotlin} mode={props.mode} />
            <section className={`myNotes text-${props.mode === "light" ? "black" : "white"} flex flex-col items-center justify-center p-5 md:p-10`}>
                <h1 className='font-semibold text-2xl text-center my-2'>Kotlin Notes</h1>
                <p className='text-justify'>Kotlin is a statically-typed programming language made by Czech company JetBrains. It has been known for being used in making Android applications. On 7 May 2019, Google announced that the Kotlin programming language was now its preferred language for Android app developers. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, but type inference allows its syntax to be more concise. Kotlin mainly targets the JVM, but also compiles to JavaScript (e.g., for frontend web applications using React) or native code via LLVM (e.g., for native iOS apps sharing business logic with Android apps).</p>

                <section className="notes flex items-center justify-center flex-wrap">
                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={kotlinImg} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Basics of Kotlin <br />Operators, String <br />When Expression<br />Loops</h3>
                        <div className="gradeLink mt-2">
                            <Link to={basicsofKotlin} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={arrayKotl} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Function <br />Lambda Expression <br />Null Safety, Array <br />List, Set, Map</h3>
                        <div className="gradeLink mt-2">
                            <Link to={FunctionArray} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={classKot} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Class and Object <br />Prim. & Sec. Constructor<br />Inheritance</h3>
                        <div className="gradeLink mt-2">
                            <Link to={ClassoObjectInheritance} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={kotlinAbstract} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Access Modifier <br />Abstract Class And Function <br />Interface, Exception</h3>
                        <div className="gradeLink mt-2">
                            <Link to={AbastractClass} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                </section>
            </section>
        </>
    )
}

export default KotlinNotes
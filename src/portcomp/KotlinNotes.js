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
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const KotlinNotes = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Kotlin Notes | Aman's Portfolio";
        AOS.init();
        AOS.refresh();
    }, []);

    const kotlinData = [
        { img: kotlinImg, disc: "Basics of Kotlin, Operators, String, When Expression and Loops", content: basicsofKotlin },
        { img: arrayKotl, disc: "Function, Lambda Expression, Null Safety, Array, List, Set and Map", content: FunctionArray },
        { img: classKot, disc: "Class and Object, Prim. & Sec., Constructor and Inheritance", content: ClassoObjectInheritance },
        { img: kotlinAbstract, disc: "Access Modifier, Abstract Class & Function, Interface and  Exception", content: AbastractClass }
    ]

    return (
        <>
            <NotesNav setImg={kotlin} mode={props.mode} />
            <section className={`myNotes ${props.mode === "light" ? "text-gray-700 bg-gray-100" : "text-white bg-gray-900"} flex flex-col items-center justify-center p-4 md:p-10 pb-16`}>
                <h1 className='font-semibold text-3xl md:text-4xl text-center my-2'>Kotlin Notes</h1>
                <p className='text-justify md:text-lg'>Kotlin is a statically-typed programming language made by Czech company JetBrains. It has been known for being used in making Android applications. On 7 May 2019, Google announced that the Kotlin programming language was now its preferred language for Android app developers. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, but type inference allows its syntax to be more concise. Kotlin mainly targets the JVM, but also compiles to JavaScript (e.g., for frontend web applications using React) or native code via LLVM (e.g., for native iOS apps sharing business logic with Android apps).</p>

                <div className="notes flex items-center justify-center flex-wrap gap-16 mt-8">
                    {
                        kotlinData.map((data, idx) => {
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

export default KotlinNotes
import { useEffect } from 'react'
import NotesNav from './NotesNav'
import sql from '../Images/mySQL.png'
import basicsql from '../Images/basicMySql.png'
import commit from '../Images/commit.jpg'
import union from '../Images/unionMysql.jpg'
import datetime from '../Images/dateTime.jpg'
import BasicsOfMySQL from '../pdfs/BasicsOfMySQL_AmanVerma.pdf'
import CommitKeyJoin from '../pdfs/CommitKeyJoin_AmanVerma.pdf'
import UnionIfArit from '../pdfs/UnionIfArithmeticStringFuntion_AmanVerma.pdf'
import DateTimeAlterDrop from '../pdfs/DateTimeAlterDropTruncateViewIndex_AmanVerma.pdf'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet-async';

const MySQL = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
        AOS.refresh();
    }, []);

    const sqlData = [
        { img: basicsql, disc: "Basics of MySQL, Constraints, And, In, Or, Not & Regular Expression", content: BasicsOfMySQL },
        { img: commit, disc: "Commit & Rollback, Primary & Foreign Key, Join and Sub-query", content: CommitKeyJoin },
        { img: union, disc: "Union & Union All, If and Case Statement, Arithmetic & String Function", content: UnionIfArit },
        { img: datetime, disc: "Date Function, Time Function, Alter, Drop, Trucate, View and Index", content: DateTimeAlterDrop }
    ]

    return (
        <>
            <NotesNav setImg={sql} mode={props.mode} />
            <section className={`myNotes ${props.mode === "light" ? "text-gray-700 bg-gray-100" : "text-white bg-gray-900"} flex flex-col items-center justify-center p-4 md:p-10 pb-16`}>
                <Helmet>
                    <title>MySQL Notes | Aman's Portfolio</title>
                    <meta name="description" content="Download free, high-quality PDF notes for SQL. Curated by Aman Verma to help students and developers learn and revise key programming concepts easily." />
                </Helmet>
                <h1 className='font-semibold text-3xl md:text-4xl text-center my-2'>MySQL Notes</h1>
                <p className='text-justify md:text-lg'>MySQL is an open-source relational database management system (RDBMS). Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My, and "SQL", the acronym for Structured Query Language. A relational database organizes data into one or more data tables in which data may be related to each other; these relations help structure the data. SQL is a language that programmers use to create, modify and extract data from the relational database, as well as control user access to the database. In addition to relational databases and SQL, an RDBMS like MySQL works with an operating system to implement a relational database in a computer's storage system, manages users, allows for network access and facilitates testing database integrity and creation of backups.</p>

                <div className="notes flex items-center justify-center flex-wrap gap-16 mt-8">
                    {
                        sqlData.map((data, idx) => {
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

export default MySQL
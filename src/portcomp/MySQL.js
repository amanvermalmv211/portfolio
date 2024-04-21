import React from 'react'
import NotesNav from './NotesNav'
import sql from '../Images/mySQL.jpg'
import basicsql from '../Images/basicMySql.png'
import commit from '../Images/commit.jpg'
import union from '../Images/unionMysql.jpg'
import datetime from '../Images/dateTime.jpg'
import BasicsOfMySQL from '../pdfs/BasicsOfMySQL_AmanVerma.pdf'
import CommitKeyJoin from '../pdfs/CommitKeyJoin_AmanVerma.pdf'
import UnionIfArit from '../pdfs/UnionIfArithmeticStringFuntion_AmanVerma.pdf'
import DateTimeAlterDrop from '../pdfs/DateTimeAlterDropTruncateViewIndex_AmanVerma.pdf'
import { Link } from 'react-router-dom'

const MySQL = (props) => {

    return (
        <>
            <NotesNav setImg={sql} mode={props.mode} />
            <section className={`myNotes text-${props.mode === "light" ? "black" : "white"} flex flex-col items-center justify-center p-5 md:p-10`}>
                <h1 className='font-semibold text-2xl text-center my-2'>MySQL Notes</h1>
                <p className='text-justify'>MySQL is an open-source relational database management system (RDBMS). Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My, and "SQL", the acronym for Structured Query Language. A relational database organizes data into one or more data tables in which data may be related to each other; these relations help structure the data. SQL is a language that programmers use to create, modify and extract data from the relational database, as well as control user access to the database. In addition to relational databases and SQL, an RDBMS like MySQL works with an operating system to implement a relational database in a computer's storage system, manages users, allows for network access and facilitates testing database integrity and creation of backups.</p>

                <section className="notes flex items-center justify-center flex-wrap">
                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={basicsql} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Basics of MySQL <br />Constraints<br />And, In, Or, Not <br />Regular Expression</h3>
                        <div className="gradeLink mt-2">
                            <Link to={BasicsOfMySQL} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={commit} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Commit & Rollback <br />Primary & Foreign Key <br />Join, Sub-query</h3>
                        <div className="gradeLink mt-9">
                            <Link to={CommitKeyJoin} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={union} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Union & Union All <br />If and Case Statement <br />Arithmetic & String Function</h3>
                        <div className="gradeLink mt-2">
                            <Link to={UnionIfArit} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                    <div className={`cards ${props.mode === "light" ? "hover:shadow-2xl" : "hover:shadow-lg hover:shadow-gray-500"}`}>
                        <div className="notesImg">
                            <img src={datetime} alt="" className='w-[100%] h-24 aspect-[3/2]' />
                        </div>
                        <h3 className='text-lg'>Date Function <br />Time Function<br />Alter, Drop, Trucate, View, Index</h3>
                        <div className="gradeLink mt-2">
                            <Link to={DateTimeAlterDrop} className="text-[#e36ac5] underline" target="_blank">Download</Link>
                        </div>
                    </div>

                </section>
            </section>
        </>
    )
}

export default MySQL
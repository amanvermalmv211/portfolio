import React from 'react'
import { Link } from 'react-router-dom'

const NotesNav = (props) => {
    return (
        <>
        <nav className={`secNav flex items-center justify-center p-2 md:p-3 font-semibold text-xl text-${props.mode === "light" ? "black" : "white"} ${props.mode === "light" ? 'shadow-[0_0_10px_black]' : 'shadow-[0_0_10px_cyan]'}`}>
            <div className="secLogo flex items-center justify-center w-32 md:w-[4%]">
                <img src={props.setImg} alt="Portfolio" className='h-10 w-10' />
            </div>

            <ul className="secNav-list flex items-center justify-center flex-wrap w-96 md:w-[35%]">
                <li className='px-5'><Link to="/cppnotes">CPP</Link></li>
                <li className='px-5'><Link to="/javanotes">Java</Link></li>
                <li className='px-5'><Link to="/kotlinnotes">Kotlin</Link></li>
                <li className='px-5'><Link to="/pythonnotes">Python</Link></li>
                <li className='px-5'><Link to="/mysqlotes">MySQL</Link></li>
            </ul>
        </nav>

        </>
    )
}

export default NotesNav

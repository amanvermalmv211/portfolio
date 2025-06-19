import { Link, useLocation } from 'react-router-dom';

function NavLink({ to, mode, children }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`transition-colors px-4 ${isActive
                ? `${mode === "light" ? "text-blue-600" : "text-yellow-500"} underline`
                : `${mode === "light" ? "hover:text-blue-600" : "hover:text-yellow-500"}`
                }`}
        >
            {children}
        </Link>
    );
}

const NotesNav = (props) => {
    return (
        <>
            <nav className={`flex items-center justify-center p-2 md:p-3 font-semibold shadow-md text-xl ${props.mode === "light" ? "text-gray-700 bg-gray-200" : "text-white bg-gray-950"}`}>
                <div className="secLogo flex items-center justify-center w-20">
                    <img src={props.setImg} alt="Portfolio" className='h-10 w-full object-contain' />
                </div>

                <ul className="secNav-list flex items-center justify-center flex-wrap w-96 md:w-[35%]">
                    <NavLink to="/cppnotes" mode={props.mode}>CPP</NavLink>
                    <NavLink to="/javanotes" mode={props.mode}>Java</NavLink>
                    <NavLink to="/kotlinnotes" mode={props.mode}>Kotlin</NavLink>
                    <NavLink to="/pythonnotes" mode={props.mode}>Python</NavLink>
                    <NavLink to="/mysqlotes" mode={props.mode}>MySQL</NavLink>
                </ul>
            </nav>

        </>
    )
}

export default NotesNav

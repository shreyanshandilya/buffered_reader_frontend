import React from 'react'
import { useNavigate , Link } from 'react-router-dom'

export default function Navbar(props) {

    const navigate = useNavigate()

    return (
        <>
            <header ref={props.navbar} className={`transition-all duration-1000 w-full z-20 absolute top-0 left-0 text-black ${props.isBlack ? "bg-black" : ''} `} >
                <div className=" w-full flex items-center justify-between px-3 py-3 ">
                    <div>
                        <a className=" flex font-medium items-center " onClick={() => { navigate("/") }}>
                            <img className='pl-2 h-10 rounded-lg' src="/logo.jpg" alt="oops" />
                        </a>
                    </div>

                    <nav className=" sm:flex flex-wrap text-white items-center text-base justify-between me-8 ms-4 hidden">
                        <Link className="  hover:underline underline-offset-8 mx-3 cursor-pointer">Blogs</Link>
                        <Link className="  hover:underline underline-offset-8 mx-3 cursor-pointer">Articles</Link>
                        <Link className="  hover:underline underline-offset-8 mx-3 cursor-pointer">Old_Versions</Link>
                        <Link to="/about" className="  hover:underline underline-offset-8 mx-3 cursor-pointer">Abouts Us</Link>
                        
                    </nav>
                </div>
            </header>

        </>
    )
}
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

    const navigate = useNavigate()
    return (
        <>
            <header className="w-full fixed top-0 text-blue-600 pt-3 text-black">
                <div className=" w-full flex flex-wrap flex-col md:flex-row items-center md:justify-between ">
                    <div>
                        <a className=" flex font-medium items-center  mb-4 md:mb-0 mx-3" onClick={() => { navigate("/") }}>
                            <img className='pl-2 h-10 rounded-lg' src="/logo.jpg" alt="oops" />
                            <span className="ml-3 text-2xl">Buffered Reader</span>
                        </a>
                    </div>

                    <nav className=" flex flex-wrap items-center text-base justify-between me-8 ms-4">
                        <a className="  hover:underline underline-offset-8 mx-3 cursor-pointer">Blogs</a>
                        <a className="  hover:underline underline-offset-8 mx-3 cursor-pointer">Articles</a>
                        <a className="  hover:underline underline-offset-8 mx-3 cursor-pointer">Old_Versions</a>
                        <a className="  hover:underline underline-offset-8 mx-3 cursor-pointer">Abouts Us</a>
                        {/* <svg className="  dark:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg> */}
                    </nav>
                </div>
            </header>

        </>
    )
}
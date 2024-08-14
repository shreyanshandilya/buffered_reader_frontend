import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import cseSocityIcon from '/logo.png'

export default function Navbar(props) {

    const navigate = useNavigate()

    const [isNavbarCollapse, setisnavbarCollapse] = useState(false)

    window.addEventListener('resize', () => {
        const bar = document.querySelector("#navbar .bar")
        const cross = document.querySelector("#navbar .cross")
        const navbar = document.querySelector("#navbar")
        const sideNavbar = document.querySelector("#sideNavbar")
        const slideBtns = document.querySelector("#hero .SlideBtns")
        window.innerWidth < 768 ? setisnavbarCollapse(true) : setisnavbarCollapse(false)
        window.innerWidth > 768 || window.innerWidth === 768 ?
            (() => {
                bar.classList.remove("hidden")
                cross.classList.add("hidden")
                navbar.classList.remove("bg-neutral-900")
                sideNavbar.style.height = 0
                slideBtns ? slideBtns.classList.remove('hidden') : ''
            })() : ''

            sideNavbar.style.width = `${window.innerWidth}px`
    })

    useEffect(() => {
        const bar = document.querySelector("#navbar .bar")
        const cross = document.querySelector("#navbar .cross")
        const sideNavbar = document.querySelector("#sideNavbar")
        const slideBtns = document.querySelector("#hero .SlideBtns")
        const navbar = document.querySelector("#navbar")
        bar.addEventListener('click', () => {
            bar.classList.add("hidden")
            cross.classList.remove("hidden")
            sideNavbar.style.height = `calc(${window.innerHeight}px - 3.5rem)`
            slideBtns ? slideBtns.classList.add('hidden') : ''
            navbar.classList.add("bg-neutral-900")
        })
        cross.addEventListener('click', () => {
            bar.classList.remove("hidden")
            cross.classList.add("hidden")
            sideNavbar.style.height = 0
            slideBtns ? slideBtns.classList.remove('hidden') : ''
            navbar.classList.remove("bg-neutral-900")
        })

    }, [])

    useEffect(() => {
        const bar = document.querySelector("#navbar .bar")
        const cross = document.querySelector("#navbar .cross")
        const navbar = document.querySelector("#navbar")
        const sideNavbar = document.querySelector("#sideNavbar")
        const slideBtns = document.querySelector("#hero .SlideBtns")
        window.innerWidth < 768 ? setisnavbarCollapse(true) : setisnavbarCollapse(false)
        window.innerWidth > 768 || window.innerWidth === 768 ?
            (() => {
                bar.classList.remove("hidden")
                cross.classList.add("hidden")
                navbar.classList.remove("bg-neutral-900")
                sideNavbar.style.height = 0
                slideBtns ? slideBtns.classList.remove('hidden') : ''
            })() : ''
    }, [])


    return (
        <>
            <header id="navbar" ref={props.navbar} className={`transition-all duration-700 w-full z-20 absolute top-0 left-0 text-black py-3`} >
                <div className=' relative w-full h-14'>
                    <div className={`relative transition-all px-3 h-full duration-1000 mx-auto rounded-full border-2 border-slate-400 flex items-center justify-between text-white w-11/12 py-2 ${props.isBlack ? "bg-black" : ''}`} style={{ backgroundColor: "rgba(23, 23, 23, 0.6 )" }}>

                        <Link className=" flex font-medium items-center h-full" onClick={() => { navigate("/") }}>
                            <img className=' rounded-lg h-full' src={cseSocityIcon} alt="oops" />
                        </Link>


                        <Link className=" md:block hidden hover:underline underline-offset-8 mx-3 cursor-pointer">Blogs</Link>
                        <Link to ="/teams" className=" md:block hidden hover:underline underline-offset-8 mx-3 cursor-pointer">Teams</Link>
                        <Link className=" md:block hidden hover:underline underline-offset-8 mx-3 cursor-pointer">Old_Versions</Link>
                        <Link to="/about" className=" md:block hidden hover:underline underline-offset-8 mx-3 cursor-pointer">Abouts Us</Link>
                        <div className={`cursor-pointer block sm:me-4 me-2 md:hidden h-4/5`} >
                            <svg className='bar h-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                            </svg>
                            <svg className='cross h-full hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </svg>
                        </div>
                    </div>
                    <div id="sideNavbar" className={`${!isNavbarCollapse ? 'hidden' : ''} transition-all duration-500 z-30 overflow-hidden flex flex-col justify-evenly items-center absolute bg-neutral-900 text-white text-2xl font-[400] top-full left-0 `} style={{ width: `${window.innerWidth}px`, height: 0 }}>
                        <Link className="py-3 hover:underline underline-offset-8 mx-3 cursor-pointer">Blogs</Link>
                        <Link to="/teams" className="py-3 hover:underline underline-offset-8 mx-3 cursor-pointer">Teams</Link>
                        <Link className="py-3 hover:underline underline-offset-8 mx-3 cursor-pointer">Old_Versions</Link>
                        <Link to="/about" className="py-3 hover:underline underline-offset-8 mx-3 cursor-pointer">Abouts Us</Link>

                    </div>
                </div>



            </header>


        </>
    )
}
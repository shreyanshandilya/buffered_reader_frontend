import React from 'react'
import Navbar from '../navbar'
import Footer from '../Footer'
import waveImg from '/wave.png'
import pastEditions from './pastEditions.json';

const editions = () => {
    const data = pastEditions;
    return (
        <>
            <div className=' absolute top-0 left-0 w-full'>
                <Navbar />
            </div>
            <div id="editions">
                <div 
          className={`introduction relative  pb-20 ${window.innerWidth >=768 ? "px-10 pt-24" : "px-3 pt-24 " } flex flex-col justify-center overflow-hidden`}
          style={{  backgroundImage: "linear-gradient(to right ,#508c84 , #47e88a" }}
                >

                    <div className="heading capitalize text-4xl font-sans font-[700] text-teal-950  ">BUFFERED READER</div>
                    <div className="content md:w-10/12 w-full  py-4">
                        Welcome to the archives of the CSE Society, where we proudly present the digital versions of our previous editions of <i>Buffered Reader</i>. These past publications reflect the journey of our society, showcasing the creativity, insights, and technological explorations of our members over the years. Each edition captures the evolving landscape of computer science, featuring articles, project highlights, interviews, and more. Explore these archives to witness the rich history of our society, and gain inspiration from the achievements and ideas that have shaped our community.
                    </div>
                    <div className="wave absolute w-full h-2/6  -bottom-4 left-0" style={{ backgroundImage: `url(${waveImg})`, backgroundSize: '150% 100%' }}>
                    </div>
                </div>
                <div className="alleditons">
                    <div className={`w-full ${window.innerWidth>500 ? "px-6" : "px-2"}  py-6`}>
                        {data.map((edition) => {
                            return <div className=' border-b-2 '>
                                <div className="year text-xl font-[600] px-4 mt-4">{edition.year} </div>
                                <div className={edition.sem === "Winter-Edition" ? "bg-gradient-to-r from-[#62eddb] via-[#ffdd93] to-[#7fe9ff]" : "bg-gradient-to-r from-[#f9ff91] via-[#ffdd93] to-[#7fe9ff]"}>
                                    <div className={`magazines shadow-lg shadow-slate-800 ${window.innerWidth>500 ? "px-4" : "px-3"} py-3 my-4 rounded-lg`}>
                                        <div className="title text-3xl font-serif my-8 text-slate-800 font-[600]">{edition.sem}</div>
                                        <div className=' flex md:flex-row flex-col justify-center items-center gap-5'>
                                            <div className="image md:w-4/12 w-full md:h-4/6 ">
                                                <img src={edition.bg_url} className="w-full h-full object-cover"></img>
                                                <div className="releaseDate text-sm text-gray-500 pb-2" style={{ borderBottom: "1px solid grey" }}>{edition.month}</div>
                                            </div>
                                            <div className=' md:w-7/12 w-full'>
                                                <div className="content py-2 text-base font-sans ">
                                                    <b><i>{edition.catch}</i></b>
                                                </div>
                                                <div className="content py-2 text-base font-sans ">
                                                    {edition.des}
                                                </div>
                                                <a href={edition.link} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" target="blank">Read More
                                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default editions
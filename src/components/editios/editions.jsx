import React from 'react'
import Navbar from '../navbar'
import Footer from '../Footer'
import waveImg from '/wave.png'

const editions = () => {
    return (
        <>
            <div className=' absolute top-0 left-0 w-full'>
                <Navbar />
            </div>
            <div id="editions">
                <div className="introduction relative px-10 flex flex-col justify-center " style={{ height: `${window.innerHeight * 0.7}px`, backgroundImage: "linear-gradient(to right ,#508c84 , #47e88a" }}>

                    <div className="heading capitalize text-4xl font-sans font-[700] text-teal-950  ">Buffer reader</div>
                    <div className="content w-10/12 pr-7 py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem adipisci nam ducimus reiciendis quam. At consequatur laboriosam assumenda ut eaque pariatur, dolorem, rerum repellendus eius sequi deserunt quas cupiditate et.
                    </div>
                    <div className="wave absolute w-full h-2/6  bottom-0 left-0" style={{ backgroundImage: `url(${waveImg})`, backgroundSize: '100% 100%' }}>
                    </div>
                </div>
                <div className="alleditons">

                    <div className='w-full px-6 py-6'>
                        {[1, 2, 3, 4, 5].map(() => {
                            return <div className=' border-b-2 '>
                                <div className="year text-xl font-[600] px-4 mt-4">2020-2021 </div>
                                <div>
                                    <div className="magazines shadow-lg shadow-slate-800 px-4 py-3 my-4 rounded-lg">
                                        <div className="title text-3xl font-serif text-slate-800 font-[600]">2nd Edition</div>
                                        <div className="releaseDate text-sm text-gray-500 pb-2" style={{ borderBottom: "1px solid grey" }}>16-03-2020</div>
                                        <div className="content py-2 text-base font-sans ">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, impedit animi! Debitis ducimus, sit ex vitae voluptatum quia ratione est quis! Mollitia tempora reiciendis dolorem ducimus architecto perspiciatis illum voluptatem.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, impedit animi! Debitis ducimus, sit ex vitae voluptatum quia ratione est quis! Mollitia tempora reiciendis dolorem ducimus architecto perspiciatis illum voluptatem.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, impedit animi! Debitis ducimus, sit ex vitae voluptatum quia ratione est quis! Mollitia tempora reiciendis dolorem ducimus architecto perspiciatis illum voluptatem.
                                        </div>
                                    </div>
                                    <div className="magazines shadow-lg shadow-slate-800 px-4 py-3 my-4 rounded-lg">
                                        <div className="title text-3xl font-serif text-slate-800 font-[600]">2nd Edition</div>
                                        <div className="releaseDate text-sm text-gray-500 pb-2" style={{ borderBottom: "1px solid grey" }}>16-03-2020</div>
                                        <div className="content py-2 text-base font-sans ">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, impedit animi! Debitis ducimus, sit ex vitae voluptatum quia ratione est quis! Mollitia tempora reiciendis dolorem ducimus architecto perspiciatis illum voluptatem.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, impedit animi! Debitis ducimus, sit ex vitae voluptatum quia ratione est quis! Mollitia tempora reiciendis dolorem ducimus architecto perspiciatis illum voluptatem.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, impedit animi! Debitis ducimus, sit ex vitae voluptatum quia ratione est quis! Mollitia tempora reiciendis dolorem ducimus architecto perspiciatis illum voluptatem.
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
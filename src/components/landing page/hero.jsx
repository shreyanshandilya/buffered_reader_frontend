import React from 'react'
import Navbar from '../navbar'
import bgImg from "/backgrounds/pattern.svg"

import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = (props) => {
  const [text] = useTypewriter({
    words: ['BUFFERED READER'],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 80,

  })

  return (
    <div ref={props.homeRef}>

      <section className="relative ">
        <Navbar />
        {/* <img className=' transition-all duration-1000 ease-in w-full h-full object-cover' src="/pattern.svg" /> */}
        <div className=" pt-24 py-7 flex items-center justify-center" style={{backgroundImage:`linear-gradient(to bottom, rgba(225, 225, 225, 0), rgba(225, 225, 225, 0)), url(${bgImg})` , backgroundSize : "cover" , backgroundPosition:"right"}}>
          <div className="text-center text-white px-6 md:px-12">
            <div className='md:pt-14 md:pb-5 '>
              <a href='https://www.iitism.ac.in/'>
                <img className=' h-40 w-40 object-cover inline-block object-center' src="/backgrounds/logo2.png" alt="" />
              </a>
            </div>
            <h2 className="text-3xl text-gray-800 md:text-3xl font-bold mb=3 pt-2">COMPUTER SCIENCE & ENGINEERING SOCIETY</h2>
            <h1 className="text-3xl text-gray-800 md:text-4xl font-bold mb-3 pt-2">INDIAN INSTITUTE OF TECHNOLOGY (ISM) DHANBAD</h1>
            {/* <div classNameName='font-extrabold text-gray-900 tracking-widest mb-3'>Cse Society</div> */}
            <div className='text-xl text-gray-800 pt-1 '>
              <div className='text-lg italic tracking-widest'>
                <span className='text-orange-800 font-bold md:text-3xl'> PRESENTS ITS BIANNUAL MAGAZINE ,</span>
              </div>
              <br />
              <div className='pt-3 font-bold'>
                <span className='text-black text-2xl pt-4 tracking-wide underline'>
                  {text}

                </span>
                <span className='text-orange-700 text-4xl'>
                  <Cursor className='text-2xl' cursorBlinking={false} cursorStyle='..' />
                </span>
              </div>
              <a href="/earlier editions/V6.1.pdf" target="blank">
                <div className='mt-9 mb-0'>
                  <button type="button" className=" text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-3 py-2.5 text-center ">
                    Latest Edition
                  </button>
                </div>
              </a>
            </div>


          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;

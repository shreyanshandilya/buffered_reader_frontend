import React from 'react'
import Navbar from '../navbar'

import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = (props) => {
  const [text] = useTypewriter({
    words: ['CSE SOCIETY', 'BUFFERED READER'],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 80,
    
  })

  return (
    <div ref={props.homeRef}>
   
    <section className="relative bg-cover bg-center h-screen">
    <Navbar/>   
    <img className=' transition-all duration-1000 ease-in w-full h-full object-cover' src="/pattern (4).svg" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6 md:px-12">
                    <div className=''>
                      <a href='https://www.iitism.ac.in/'>  
                      <img className=' h-40 w-40 object-cover inline-block object-center' src="/logo2.png" alt="" /> 
                      </a>   
                    </div>
                    <h1 className="text-3xl text-gray-800 md:text-4xl font-bold mb-3 pt-2">INDIAN INSTITUTE OF TECHNOLOGY (ISM) DHANBAD</h1>
                    {/* <div classNameName='font-extrabold text-gray-900 tracking-widest mb-3'>Cse Society</div> */}
                    <div className='text-xl text-gray-800 pt-1 '>
                      <div className='text-lg italic tracking-widest'>
                          <span className=' text-lg font-bold'>" DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</span><span className='text-orange-500 font-bold'> PRESENTS" ,</span>
                      </div>
                     <br/>
                     <div className='pt-3 font-bold'> 
                        <span className='text-black text-3xl pt-4 tracking-wide underline'>
                            {text}
                            
                          </span>
                          <span className='text-orange-700 text-4xl'>
                            <Cursor className='text-4xl' cursorBlinking={false} cursorStyle='..'/>
                          </span>
                      </div>
                      <a href="https://drive.google.com/file/d/19Js8ByMzdl9scU3ACAEHHcEIpRsi2BTE/view?usp=drive_link">
                      <div className='z-50 top-20 right-7  fixed'><button type="button" class="sticky text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Latest Edition</button></div>
                      </a>
                      </div>
                    {/* <div className='text-2xl text-gray-800 '>CSE Society</div>
                    <div className='text-2xl text-gray-800 '>Buffered Reader</div> */}

                    
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;

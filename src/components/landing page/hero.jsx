import React from 'react'
import Navbar from '../navbar'

import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['CSE-Society', 'Buffered Reader'],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 80,
    
  })

  return (
    <div>
    <Navbar/>
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/eth.jpg)' }}>   {/* //https://images.unsplash.com/photo-1519621464183-ef6c4b683e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTI3NTZ8MHwxfGFsbHwxfHx8fHx8fDE2NjE0ODI4Nw&ixlib=rb-1.2.1&q=80&w=1080 */}
    <img className=' transition-all duration-1000 ease-in w-full h-full object-cover' src="/pattern (4).svg" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6 md:px-12">
                    <div className=''>
                      <a href='https://www.iitism.ac.in/'>  
                      <img className=' h-40 w-40 object-cover inline-block object-center' src="/logo2.png" alt="" /> 
                      </a>   
                    </div>
                    <h1 className="text-3xl text-gray-800 md:text-4xl font-bold mb-3 pt-2">IIT (ISM) DHANBAD</h1>
                    {/* <div classNameName='font-extrabold text-gray-900 tracking-widest mb-3'>Cse Society</div> */}
                    <div className='text-xl text-gray-800 pt-1 '>
                      <div className='text-lg italic tracking-widest'>
                          <span className=' text-lg '>" Dept. Of Computer Science & Eng.</span><span className='text-orange-500 '> presents" ,</span>
                      </div>
                     <br/>
                     <div className='font-mono pt-3'> 
                        <span className='text-black text-3xl pt-4 tracking-wide underline'>
                            {text}
                            
                          </span>
                          <span className='text-orange-700 text-4xl'>
                            <Cursor className='text-4xl' cursorBlinking={false} cursorStyle='..'/>
                          </span>
                      </div>
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

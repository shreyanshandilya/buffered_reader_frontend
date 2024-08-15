import React, { useRef, useState, useEffect } from 'react'
import bgImg from '/download (2).jpeg'
import Navbar from '../navbar'

export default function Hero(props) {

  const [Height, setHeight] = useState(window.innerHeight * 0.9)

  const navbar = useRef()

  const animation = () => {
    const bgSlide = document.querySelector("#hero .bgSlide")
    const images = Array.from(bgSlide.querySelectorAll('img'))
    const contents = Array.from(document.querySelectorAll("#hero #content .content"))
    let index = 1;
    setInterval(() => {
      console.log(index)
      for (let i = 0; i < images.length; i++) {
        i === index ? (() => {
          images[i].classList.remove("h-0")
          images[i].classList.add("h-full")
          contents[i].classList.remove("h-0")
          contents[i].classList.add("h-full")
        })() : (() => {
          images[i].classList.add("h-0")
          images[i].classList.remove("h-full")
          contents[i].classList.add("h-0")
          contents[i].classList.remove("h-full")
        })()
      }
      index === images.length - 1 ? index = 0 : index++;
    }, 5000)
  }

  useEffect(() => {
    animation()
  }, [])


  window.addEventListener('resize', () => {
    const hero = document.querySelector("#hero")
    hero ? hero.style.height = `${Math.max(window.innerHeight, Height)}px` : ''
  })

  return (
    <>

      <div id="hero" className=' overflow-hidden' ref={props.homeRef} style={{ height: `${window.innerHeight}px` }}>
          
          <div className=' absolute w-full top-0  left-0'><Navbar navbar={navbar} isBlack ={false}/></div>
        <div className=' relative w-full h-full flex sm:items-center items-end justify-end ' >

          <div className="bgAnimation absolute w-full h-full overflow-auto">
            <div className="bgSlide w-full h-full relative">
              <img className=' transition-all duration-1000 ease-in w-full h-full object-cover' src="/download (5).jpeg" />
              <img className=' transition-all duration-1000 ease-in w-full h-0 object-cover' src="/download (4).jpeg" />
              <img className=' transition-all duration-1000 ease-in w-full h-0 object-cover' src="/download (3).jpeg" />
              <img className=' transition-all duration-1000 ease-in w-full h-0 object-cover' src="/download (2).jpeg" />
            </div>
          </div>

          <div id="content" className=" text-white z-10 w-full h-full">
            <div className="content md:mx-10 sm:mx-6 mx-4 md:px-16 sm:px-10 h-full overflow-hidden transition-all duration-1000 ease-in flex items-center">
              <div>
                <div className="title sm:text-5xl text-3xl font-[700] my-4  ">Indian Institute of technology Dhanbad</div>
                <div className=' sm:w-9/12 w-full sm:text-lg text-base '>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. IstLorem ipsum dolor sit amet consectetur, adipisicing elit. IsteLorem ipsum dolor sit amet consectetur, adipisicing elit. Ist at nihil saepe quas quos dicta error modi, sint natus. Eaque
                </div>
              </div>
            </div>
            <div className="content md:mx-10 sm:mx-6 mx-4 md:px-16 sm:px-10 h-0 overflow-hidden transition-all duration-1000 ease-in flex items-center">
              <div>
                <div className="title sm:text-5xl text-3xl font-[700] my-4  ">Buffer Reader</div>
                <div className=' sm:w-9/12 w-full sm:text-lg text-base '>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. IstLorem ipsum dolor sit amet consectetur, adipisicing elit. IsteLorem ipsum dolor sit amet consectetur, adipisicing elit. Ist at nihil saepe quas quos dicta error modi, sint natus. Eaque
                </div>
              </div>
            </div>
            <div className="content md:mx-10 sm:mx-6 mx-4 md:px-16 sm:px-10 h-0 overflow-hidden transition-all duration-1000 ease-in flex items-center">
              <div>
                <div className="title sm:text-5xl text-3xl font-[700] my-4  ">Cse Socity </div>
                <div className='sm:w-9/12 w-full sm:text-lg text-base '>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. IstLorem ipsum dolor sit amet consectetur, adipisicing elit. IsteLorem ipsum dolor sit amet consectetur, adipisicing elit. Ist at nihil saepe quas quos dicta error modi, sint natus. Eaque
                </div>
              </div>
            </div>
            <div className="content md:mx-10 sm:mx-6 mx-4 md:px-16 sm:px-10 h-0 overflow-hidden transition-all duration-1000 ease-in flex items-center">
              <div>
                <div className="title sm:text-5xl text-3xl font-[700] my-4  ">Computer Science And Engineering</div>
                <div className=' sm:w-9/12 w-full sm:text-lg text-base '>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. IstLorem ipsum dolor sit amet consectetur, adipisicing elit. IsteLorem ipsum dolor sit amet consectetur, adipisicing elit. Ist at nihil saepe quas quos dicta error modi, sint natus. Eaque
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
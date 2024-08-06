import React, { useRef } from 'react'
import bgImg from '/svgviewer-png-output-removebg-preview.png'
import Navbar from '../navbar'

export default function Hero(props) {


  const navbar = useRef()

  window.addEventListener('resize', () => {
    const hero = document.querySelector("#hero")
    hero ? hero.style.height = `${window.innerHeight * 0.9}px` : ''
  })

  return (
    <>

      <div id="hero" className=' overflow-hidden' ref={props.homeRef} style={{ height: `${window.innerHeight * 0.9}px` }}>
        <div className=' relative w-full h-full flex sm:items-center items-end justify-end bg-orange-100' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}>
          <Navbar navbar={navbar} />
          <div className=' box-border md:w-2/4 sm:w-4/5 w-full sm:pe-24 px-4 py-4 sm:mb-0 mb-12 text-black font-sans'>
            <div className='font-extrabold text-base tracking-widest'>Cse Society</div>
            <div className='font-extrabold text-5xl py-3'>Buffered Reader</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vel id minima earum dolorum. Qui beatae maxime enim illum molestiae animi, eveniet nemo vel,
              recusandae quos neque quas similique fugiat!</div>
          </div>
        </div>
      </div>
    </>
  )
}
import React, { useRef , useState } from 'react'
import bgImg from '/svgviewer-png-output-removebg-preview.png'
import Navbar from '../navbar'

export default function Hero(props) {

  const [Height, setHeight] = useState(window.innerHeight * 0.9)

  const navbar = useRef()

  window.addEventListener('resize', () => {
    const hero = document.querySelector("#hero")
    hero ? hero.style.height = `${Math.max(window.innerHeight * 0.9 , Height)}px` : ''
  })

  return (
    <>

      <div id="hero" className=' overflow-hidden' ref={props.homeRef} style={{ height: `${window.innerHeight * 0.9}px` }}>
        <div className=' relative w-full h-full flex sm:items-center items-end justify-end ' >
          <Navbar navbar={navbar} />
          <div className="SlideBtns absolute w-full  bottom-0 py-4">
            <div className=' mx-auto justify-between flex items-center h-auto' style={{width:"200px"}}>
              <div className='controlBtn rounded-full cursor-pointer bg-red-800' style={{width:"20px" , height:"20px"}}></div>
              <div className='controlBtn rounded-full cursor-pointer bg-red-800' style={{width:"20px" , height:"20px"}}></div>
              <div className='controlBtn rounded-full cursor-pointer bg-red-800' style={{width:"20px" , height:"20px"}}></div>
              <div className='controlBtn rounded-full cursor-pointer bg-red-800' style={{width:"20px" , height:"20px"}}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
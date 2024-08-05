import React from 'react'
import bgImg from '/svgviewer-png-output.png'

export default function Hero(props) {

  window.addEventListener('resize', () => {
    const hero = document.querySelector("#hero")
    hero ? hero.style.minHeight = `${window.innerHeight}px` : ''
  })

  return (
    
     <div id="hero"  className='w-screen h-screen -mt-20 overflow-hidden' ref={props.homeRef}>
     <div className='w-screen h-screen -mt-20'>
         <img className='w-full' src="/eth.jpeg" alt="" />
         <div className='absolute box-border top-1/3 w-2/4 left-16 pl-24 text-white font-sans'>
             <div className='font-extrabold text-base tracking-widest mb-3'>Cse Society</div>
             <div className='font-extrabold text-5xl mb-5'>Buffered Reader</div>
             <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vel id minima earum dolorum. Qui beatae maxime enim illum molestiae animi, eveniet nemo vel, 
                 recusandae quos neque quas similique fugiat!</div>
             </div>
         </div>
 </div>
  )
}
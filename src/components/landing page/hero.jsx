import React from 'react'
import bgImg from '/svgviewer-png-output-removebg-preview.png'

export default function Hero(props) {

  window.addEventListener('resize', () => {
    const hero = document.querySelector("#hero")
    hero ? hero.style.height = `${window.innerHeight * 0.9}px` : ''
  })

  return (
    
     <div id="hero"  className=' overflow-hidden' ref={props.homeRef} style={{height:`${window.innerHeight*0.9}px`}}>
     <div className=' w-full h-full flex items-center justify-end bg-orange-100' style={{backgroundImage:`url(${bgImg})` , backgroundSize:"cover"}}>
         <div className=' box-border w-2/4 pe-24 text-black font-sans'>
             <div className='font-extrabold text-base tracking-widest mb-3'>Cse Society</div>
             <div className='font-extrabold text-5xl mb-5'>Buffered Reader</div>
             <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vel id minima earum dolorum. Qui beatae maxime enim illum molestiae animi, eveniet nemo vel, 
                 recusandae quos neque quas similique fugiat!</div>
             </div>
         </div>
 </div>
  )
}
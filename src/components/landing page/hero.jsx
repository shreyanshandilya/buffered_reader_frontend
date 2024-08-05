import React from 'react'
import bgImg from '/svgviewer-png-output.png'

export default function Hero(props) {

  window.addEventListener('resize', () => {
    const hero = document.querySelector("#hero")
    hero ? hero.style.minHeight = `${window.innerHeight}px` : ''
  })

  return (
    <div id="hero" className=" text-gray-600 body-font md:overflow-hidden w-full h-auto" ref={props.homeRef} style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "120% 120%", minHeight: `${window.innerHeight}px` }}>
      <div className="container flex items-center justify-center flex-col">

        <div className=" text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl  font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
          <p className=" leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-yellow-500 border-0 focus:outline-none hover:bg-yellow-600 rounded text-lg">Sign Up</button>
            <button className=" inline-flex text-gray-700 bg-gray-100 border-0   focus:outline-none hover:bg-gray-200 rounded text-lg">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}
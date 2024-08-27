import React, { useEffect, useRef, useState } from 'react'
// import Achievements from './landing page/achievements'
// import Hero from './landing page/Hero'
import Purpose from './landing page/purpose'
import Footer from './Footer'
import Hero from './landing page/hero'
import Quote from './landing page/Quote'

const home = () => {

  // const achievementRef = useRef()  
  // const navbar = useRef()
  const purposeRef = useRef()
  const quoteRef = useRef()
  const homeRef = useRef()

  // const [isAchieveVisible, setisAchieveVisible] = useState(false)
  const [isPurposeVisible, setisPurposeVisible] = useState(false)

  const scrollAnimation = () => {
    purposeRef.current ? (() => {
      const scrollY = window.scrollY
      const h1 = homeRef.current.clientHeight
      const h2 = quoteRef.current.clientHeight
      // const h3 = achievementRef.current.clientHeight
      scrollY >= h1 + h2 * 0.4 ? setisPurposeVisible(true) : ''
      // scrollY >= h1 + h2 * 0.3 ? setisAchieveVisible(true) : ''
    })() : ""
  }

  useEffect(() => {
    scrollAnimation()
  }, [])


  window.addEventListener("scroll", () => {
    scrollAnimation()
  })

  return (
    <>
      <Hero homeRef= {homeRef}/>
      <Quote quoteRef={quoteRef}/>
      <Purpose purposeRef={purposeRef} isPurposeVisible={isPurposeVisible} />
      
      {/* <Achievements achievementRef={achievementRef} isAchieveVisible={isAchieveVisible} /> */}
      <Footer/>
    </>
  )
}

export default home
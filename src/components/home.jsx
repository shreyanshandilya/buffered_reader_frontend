import React, { useEffect, useRef, useState } from 'react'
import Achievements from './landing page/achievements'
import Hero from './landing page/hero'
import Purpose from './landing page/purpose'
import Footer from './Footer'

const home = () => {

  const achievementRef = useRef()
  const purposeRef = useRef()
  const homeRef = useRef()
  const navbar = useRef()

  const [isAchieveVisible, setisAchieveVisible] = useState(false)
  const [isPurposeVisible, setisPurposeVisible] = useState(false)

  const scrollAnimation = () => {
    achievementRef.current ? (() => {
      const scrollY = window.scrollY
      const h1 = homeRef.current.clientHeight
      const h2 = purposeRef.current.clientHeight
      const h3 = achievementRef.current.clientHeight
      scrollY >= h1 * 0.4 ? setisPurposeVisible(true) : ''
      scrollY >= h1 + h2 * 0.3 ? setisAchieveVisible(true) : ''
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
       <Hero homeRef={homeRef} />
      <Purpose purposeRef={purposeRef} isPurposeVisible={isPurposeVisible} />
      <Achievements achievementRef={achievementRef} isAchieveVisible={isAchieveVisible} />
      {/* <Footer/> */}
    </>
  )
}

export default home
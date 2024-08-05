import React, { useEffect, useRef, useState } from 'react'
import Achievements from './achievements'
import Hero from './hero'
import Purpose from './purpose'

const home = () => {

  const achievementRef = useRef()
  const purposeRef = useRef()
  const homeRef = useRef()

  const [isAchieveVisible, setisAchieveVisible] = useState(false)
  const [isPurposeVisible, setisPurposeVisible] = useState(false)

  const scrollAnimation = () => {
    achievementRef.current ? (() => {
      const scrollY = window.scrollY
      const h1 = homeRef.current.clientHeight
      const h2 = purposeRef.current.clientHeight
      const h3 = achievementRef.current.clientHeight
      scrollY >= h1*0.6 ? setisPurposeVisible(true) : ''
      scrollY >= h1 + h2*0.4 ? setisAchieveVisible(true) : ''
    })() : ""
  }

  useEffect(() => {
    scrollAnimation()
  }, [])


  window.addEventListener("scroll", () => { scrollAnimation() })

  return (
    <>
      <Hero homeRef={homeRef} />
      <Purpose purposeRef={purposeRef} isPurposeVisible={isPurposeVisible}/>
      <Achievements achievementRef={achievementRef} isAchieveVisible={isAchieveVisible} />
    </>
  )
}

export default home

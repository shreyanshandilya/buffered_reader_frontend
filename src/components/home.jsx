import React, { useEffect, useRef, useState } from 'react'
import Achievements from './landing page/achievements'
import Hero from './landing page/hero'
import Navbar from './navbar'

const home = () => {

  const achievementRef = useRef()

  const [isAchieveVisible, setisAchieveVisible] = useState(false)

  const scrollAnimation = () => {
    achievementRef.current ? (() => {
      const scrollY = window.scrollY
      const h2 = achievementRef.current.clientHeight
      scrollY === 0 ? setisAchieveVisible(true) : ''
    })() : ""
  }

  useEffect(() => {
    scrollAnimation()
  }, [])


  window.addEventListener("scroll", () => { scrollAnimation() })

  return (
    <>
      <Hero />
      <Achievements achievementRef={achievementRef} isAchieveVisible={isAchieveVisible} />
    </>
  )
}

export default home
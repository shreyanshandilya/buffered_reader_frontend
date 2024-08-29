import React, { useEffect, useRef, useState } from 'react'
import UpcomingEvents from './landing page/upcomingEvents'
// import Hero from './landing page/Hero'
import Purpose from './landing page/purpose'
import Footer from './Footer'
import Hero from './landing page/hero'
import Quote from './landing page/Quote'

const home = () => {

  const eventsRef = useRef()  
  // const navbar = useRef()
  const purposeRef = useRef()
  const quoteRef = useRef()
  const homeRef = useRef()

  const [isEventVisible, setisEventVisible] = useState(false)
  const [isPurposeVisible, setisPurposeVisible] = useState(false)

  const scrollAnimation = () => {
    purposeRef.current ? (() => {
      const scrollY = window.scrollY
      const h1 = homeRef.current.clientHeight
      const h2 = quoteRef.current.clientHeight
      const h3 = purposeRef.current.clientHeight
      scrollY >= h1 + h2 * 0.4 ? setisPurposeVisible(true) : ''
      scrollY >= h1 + h2 + h3* 0.3 ? setisEventVisible(true) : ''
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
      <UpcomingEvents eventsRef={eventsRef} isEventVisible={isEventVisible} />
      <Footer/>
    </>
  )
}

export default home
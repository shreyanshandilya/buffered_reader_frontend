import React, { useEffect, useRef, useState } from 'react'
import UpcomingEvents from './landing page/upcomingEvents'
// import Hero from './landing page/Hero'
import Purpose from './landing page/purpose'
import Footer from './Footer'
import Hero from './landing page/hero'
import Quote from './landing page/Quote'

const home = () => {
  const purposeRef = useRef()
  const quoteRef = useRef()
  const homeRef = useRef()

  const [isPurposeVisible, setisPurposeVisible] = useState(true)
  const [isQuoteVisible, setisQuoteVisible] = useState(true)

  const scrollAnimation = () => {
    purposeRef.current ? (() => {
      const scrollY = window.scrollY
      const h1 = homeRef.current.clientHeight
      const h2 = quoteRef.current.clientHeight
      scrollY >= h1 * 0.4 ? setisQuoteVisible(true) : ''
      scrollY >= h1 + h2 * 0.3 ? setisPurposeVisible(true) : ''
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
      <Quote quoteRef={quoteRef} isQuoteVisible={isQuoteVisible}/>
      <Purpose purposeRef={purposeRef} isPurposeVisible={isPurposeVisible} />
      <UpcomingEvents eventsRef={eventsRef} isEventVisible={isEventVisible} />
      <Footer/>
    </>
  )
}

export default home
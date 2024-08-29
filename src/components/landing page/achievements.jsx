import React, { useEffect } from 'react'
import '../../css/landingPage.css'
import demoImg from '/demoImg.jpeg'

const achievements = (props) => {

    //function to run when window is loaded or window in resized
    const commonFunc = () => {
        const windowWidth = window.innerWidth
        //set the width of classname achieve
        const achieves = document.querySelector("#achievements .someAchieve .mainContent .achieves")
        windowWidth >= 730 ?
            achieves ? achieves.style.setProperty("--childWidth", `${(window.innerWidth - 150) * 0.5}px`) : '' : ''
        730 > windowWidth && windowWidth >= 450 ?
            achieves ? (() => {
                achieves.style.setProperty("--childWidth", `95%`)
            })() : '' : ''
        450 > windowWidth && windowWidth >= 330 ?
            achieves ? (() => {
                achieves.style.setProperty("--childWidth", `100%`)
            })() : '' : ''
    }

    useEffect(() => {
        commonFunc()
    }, [])

    window.addEventListener('resize', () => {
        commonFunc()
    })


    return (
        <>
            
        </>
    )
}

export default achievements
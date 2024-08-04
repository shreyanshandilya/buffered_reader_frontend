import React, { useEffect } from 'react'
import demoImg from '/demoImg.jpeg'
import '../css/about.css'

const about = () => {

    const scrollAnimation = () => {
        const elem1 = document.querySelector("#about .introduction")
        const elem2 = document.querySelector("#about .aboutContent .WhatWeDid")
        const elem3 = document.querySelector("#about .aboutContent .ourProgress")
        const elem4 = document.querySelector("#about .aboutContent .hod")
        const elem5 = document.querySelector("#about .aboutContent .members")

        elem1, elem2, elem3, elem4, elem5 ?
            (() => {
                const h1 = elem1.clientHeight
                const h2 = elem2.clientHeight
                const h3 = elem3.clientHeight
                const h4 = elem4.clientHeight
                const h5 = elem5.clientHeight

                const height = window.scrollY

                height === 0 ? elem1.style.opacity = 1 : ''
                height >= h1 * 0.5 ? elem2.style.opacity = 1 : ''
                height >= h1 + h2 * 0.7 ? elem3.style.opacity = 1 : ''
                height >= h1 + h2 + h3 * 0.7 ? elem4.style.opacity = 1 : ''
                height >= h1 + h2 + h3 + h4 * 0.7 ? elem5.style.opacity = 1 : ''

            })() : ''
    }

    useEffect(() => {
        scrollAnimation()
    }, [])

    window.addEventListener('scroll', () => {
        scrollAnimation()
    })

    window.addEventListener('resize', () => {
        const elem1 = document.querySelector("#about .introduction")
        elem1.style.minHeight = `${window.innerHeight * 0.8}px`
    })


    return (
        <div id='about'>
            <div className="introduction transition-opacity duration-1000 ease shadow-2xl shadow-slate-800 rounded-md overflow-hidden position-relative flex items-center mx-6 my-4 py-4 justify-content-between" style={{ opacity: "0", minHeight: `${window.innerHeight * 0.8}px` }}>
                <div className="slideBg absolute w-full top-0 left-0 z-0">
                    <div className="bg1 h-1/4 w-full"></div>
                    <div className="bg2 h-1/4 w-full"></div>
                    <div className="bg3 h-1/4 w-full"></div>
                    <div className="bg4 h-1/4 w-full"></div>
                </div>
                <div className="content w-full z-2 py-4 px-32 text-white">
                    <div className="title uppercase text-3xl text-center font-[800] my-3 pb-10">About Us</div>
                    <div className="introContent text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta odio ex in dolores explicabo accusantium mollitia fuga cumque. Delectus laborum repellat saepe totam non! Repudiandae eius numquam reiciendis illo.
                        Ducimus blanditiis facilis debitis quia at dignissimos fugitLorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta odio ex in dolores explicabo accusantium mollitia fuga cumque. Delectus laborum repellat saepe totam non! Repudiandae eius numquam reiciendis illo.
                        Ducimus blanditiis facilis debitis quia at dignissimos fugit. Qui vitae commodi eum earum fugit id est, impedit nostrum iure? Mollitia dolorum quae ipsum doloremque laboriosam natus corporis enim. Sapiente, sed.
                    </div>
                </div>
            </div>
            
            <hr />

            <div className="aboutContent px-5 py-4">

                <div className="WhatWeDid position-relative transition-opacity duration-1000 ease  my-20 flex items-center justify-content-between" style={{ opacity: "0" }}>
                    <div className="img w-2/5 shadow-2xl shadow-slate-800"><img className=' w-100 object-fit-cover' src={demoImg} /></div>
                    <div className="content w-3/5 p-4 bg-transparent">
                        <div className="headinguppercase uppercase text-3xl text-center font-[800] my-3"> what we do ?</div>
                        <div className="whatWeDoContent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad provident quaerat nisi, harum voluptates nam est laudantium error et fuga eligendi dolorum aliquam deserunt quasi, omnis recusandae nobis rem inventore!
                            At quos aspernatur unde repellendus quod sapiente tempora consectetur veniam nesciunt commodi atque nisi mollitia, nobis reiciendis cum minima fugiat! Ipsa ut excepturi doloremque itaque fuga deserunt sunt incidunt natus.
                            Optio eligendi doloribus vitae sequi, provident quibusdam modi iusto fugit est quod excepturi odio magni eaque tempore architecto nisi beatae, aspernatur eos fuga doloremque minima itaque. Unde iusto illo fuga?
                        </div>
                    </div>
                </div>

                <hr />

                <div className="ourProgress transition-opacity duration-1000 ease  my-20 flex items-center justify-content-between" style={{ opacity: "0" }}>
                    <div className="content w-3/5 p-4">
                        <div className="heading d-flex content-center items-center">
                            <p className=' uppercase text-3xl text-center font-[800]  my-3'>our progress</p>
                        </div>
                        <div className="whatWeDoContent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad provident quaerat nisi, harum voluptates nam est laudantium error et fuga eligendi dolorum aliquam deserunt quasi, omnis recusandae nobis rem inventore!
                            At quos aspernatur unde repellendus quod sapiente tempora consectetur veniam nesciunt commodi atque nisi mollitia, nobis reiciendis cum minima fugiat! Ipsa ut excepturi doloremque itaque fuga deserunt sunt incidunt natus.
                            Optio eligendi doloribus vitae sequi, provident quibusdam modi iusto fugit est quod excepturi odio magni eaque tempore architecto nisi beatae, aspernatur eos fuga doloremque minima itaque. Unde iusto illo fuga?
                        </div>
                    </div>
                    <div className="img w-2/5  shadow-2xl shadow-slate-800"><img className=' w-100 object-fit-cover' src={demoImg} /></div>
                </div>

                <hr />

                <div className="hod transition-opacity duration-1000 ease  flex justify-content-between items-center" style={{ opacity: "0" }}>
                    <div className="hodImg w-3/12 shadow-2xl shadow-slate-800">
                        <img src={demoImg} />
                    </div>
                    <div className="hodTalk w-9/12 px-6 py-4">
                        <div className="heading uppercase text-xl font-[700] my-3">our hod sir</div>
                        <div className="hodContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repudiandae aliquid modi error eligendi magni sequi veritatis ad inventore nesciunt sint repellat optio, nam tempore porro quo ipsum nihil ex.
                            Corporis aut a labore ab iure vel voluptatem enim cum, non quod, esse incidunt sunt temporibus nihil tenetur dolores reprehenderit numquam dolore, et praesentium iusto quis. Rerum animi repudiandae deleniti?
                            Illo, quibusdam iste! Asperiores obcaecati repudiandae dolores unde sunt repellendus sapiente aut non eius sit, ab deserunt ut ducimus impedit. Perspiciatis, laboriosam dolor quos expedita ut molestias magnam minima sint?
                            Ipsa tempore eius aperiam obcaecati! Et minima molestias est ex laborum exercitationem dignissimos repellendus molestiae nostrum perspiciatis iste illum, aliquid sapiente veniam maxime quis omnis rem quaerat suscipit voluptatibus temporibus.
                        </div>
                    </div>
                </div>

                <div className="members transition-opacity duration-1000 ease  carousol w-full overflow-auto" style={{ opacity: "0" }}>
                    <div className="allmembers w-auto flex justify-between">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
                            return <div className="singlemember mx-2 my-3" style={{ minWidth: "200px" }}>
                                <div className="memberimg "><img src={demoImg} /></div>
                                <div className="brifeContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptas corrupti! Sit ut neque ullam corporis consequuntur ratione fugit eveniet expedita </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
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
                height >= h1 + h2 + h3 ? elem4.style.opacity = 1 : ''
                height >= h1 + h2 + h3 + h4*0.6 ? elem5.style.opacity = 1 : ''

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
        elem1.style.minHeight = `${window.innerHeight * 0.9}px`
    })


    return (
        <div id='about'>
            <div className="introduction transition-opacity duration-1000 ease shadow-2xl shadow-slate-800 sm:rounded-md rounded-none overflow-hidden position-relative flex items-center md:mx-6 sm:mx-1  sm:my-1 md:my-4 py-4 justify-content-between" style={{ opacity: "0", minHeight: `${window.innerHeight * 0.9}px` }}>
                <div className="slideBg absolute w-full top-0 left-0 z-0">
                    <div className="bg1 h-1/4 w-full"></div>
                    <div className="bg2 h-1/4 w-full"></div>
                    <div className="bg3 h-1/4 w-full"></div>
                    <div className="bg4 h-1/4 w-full"></div>
                </div>
                <div className="content w-full z-2 py-4 lg:px-32 md:px-20 sm:px-10 text-white">
                    <div className="title uppercase text-3xl text-center font-[800] my-3 pb-10">About Us</div>
                    <div className="introContent text-base px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta odio ex in dolores explicabo accusantium mollitia fuga cumque. Delectus laborum repellat saepe totam non! Repudiandae eius numquam reiciendis illo.
                        Ducimus blanditiis facilis debitis quia at dignissimos fugitLorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta odio ex in dolores explicabo accusantium mollitia fuga cumque. Delectus laborum repellat saepe totam non! Repudiandae eius numquam reiciendis illo.
                        Ducimus blanditiis facilis debitis quia at dignissimos fugit. Qui vitae commodi eum earum fugit id est, impedit nostrum iure? Mollitia dolorum quae ipsum doloremque laboriosam natus corporis enim. Sapiente, sed.
                    </div>
                </div>
            </div>

            <hr />

            <div className="aboutContent md:px-5 sm:px-2.5  py-4">

                <div className="WhatWeDid position-relative transition-opacity duration-1000 ease  my-20 flex md:flex-row flex-col items-center md:justify-content-between" style={{ opacity: "0" }}>
                    <div className="img md:w-2/5 w-4/5 shadow-2xl shadow-slate-800 rounded-md overflow-hidden">
                        <img className=' w-100 object-fit-cover' src={demoImg} />
                    </div>
                    <div className="content md:w-3/5 w-full sm:p-4 bg-transparent sm:my-0 my-4">
                        <div className="headinguppercase uppercase sm:text-3xl text-2xl text-center font-[800] my-3"> what we do ?</div>
                        <div className="whatWeDoContent px-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad provident quaerat nisi, harum voluptates nam est laudantium error et fuga eligendi dolorum aliquam deserunt quasi, omnis recusandae nobis rem inventore!
                            At quos aspernatur unde repellendus quod sapiente tempora consectetur veniam nesciunt commodi atque nisi mollitia, nobis reiciendis cum minima fugiat! Ipsa ut excepturi doloremque itaque fuga deserunt sunt incidunt natus.
                            Optio eligendi doloribus vitae sequi, provident quibusdam modi iusto fugit est quod excepturi odio magni eaque tempore architecto nisi beatae, aspernatur eos fuga doloremque minima itaque. Unde iusto illo fuga?
                        </div>
                    </div>
                </div>

                <hr />

                <div className="ourProgress transition-opacity duration-1000 ease  my-20 flex md:flex-row flex-col-reverse items-center md:justify-content-between" style={{ opacity: "0" }}>
                    <div className="content md:w-3/5 w-full sm:p-4 sm:my-0 my-4">
                        <div className=' uppercase sm:text-3xl text-2xl font-[800] md:text-start text-center my-3'>our progress</div>
                        <div className="ourProgressContent px-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad provident quaerat nisi, harum voluptates nam est laudantium error et fuga eligendi dolorum aliquam deserunt quasi, omnis recusandae nobis rem inventore!
                            At quos aspernatur unde repellendus quod sapiente tempora consectetur veniam nesciunt commodi atque nisi mollitia, nobis reiciendis cum minima fugiat! Ipsa ut excepturi doloremque itaque fuga deserunt sunt incidunt natus.
                            Optio eligendi doloribus vitae sequi, provident quibusdam modi iusto fugit est quod excepturi odio magni eaque tempore architecto nisi beatae, aspernatur eos fuga doloremque minima itaque. Unde iusto illo fuga?
                        </div>
                    </div>
                    <div className="img md:w-2/5 w-4/5 shadow-2xl shadow-slate-800"><img className=' rounded-md overflow-hidden w-100 object-fit-cover' src={demoImg} /></div>
                </div>

                <hr />

                <div className="hod transition-opacity duration-1000 ease flex md:flex-row flex-col md:justify-between md:items-start items-center my-10" style={{ opacity: "0" }}>
                    <div className="hodImg mx-2 md:w-3/12 w-9/12 md:block flex justify-center items-center">
                        <img className=' md:w-full w-7/12 rounded-md shadow-2xl shadow-slate-800' src={demoImg} />
                        <div className="HodName bg-transparent py-6 sm:text-2xl text-xl font-[600] font-serif mx-4">Anirban</div>
                    </div>
                    <div className="hodTalk md:w-9/12 m-2">
                        <div className="heading uppercase text-xl font-[700] text-center my-3">our hod sir</div>
                        <div className="hodContent h-fit ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repudiandae aliquid modi error eligendi magni sequi veritatis ad inventore nesciunt sint repellat optio, nam tempore porro quo ipsum nihil ex.
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
                                <div className="name text-base font-[700] font-serif">Anirban</div>
                                <div className="brifeContent text-sm">  corporis consequuntur ratione fugit eveniet expedita </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
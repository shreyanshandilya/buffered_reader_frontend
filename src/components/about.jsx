import React from 'react'
import demoImg from '/demoImg.jpeg'

const about = () => {
    return (
        <div id='about'>
            <div className="introduction flex items-center mx-6 my-4 justify-content-between">
                <div className="content w-3/5 p-4">
                    <div className="title uppercase text-3xl text-center font-[800] my-3">About Us</div>
                    <div className="introduction">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta odio ex in dolores explicabo accusantium mollitia fuga cumque. Delectus laborum repellat saepe totam non! Repudiandae eius numquam reiciendis illo.
                        Ducimus blanditiis facilis debitis quia at dignissimos fugit. Qui vitae commodi eum earum fugit id est, impedit nostrum iure? Mollitia dolorum quae ipsum doloremque laboriosam natus corporis enim. Sapiente, sed.
                    </div>
                </div>
                <div className="img w-2/5"><img className=' w-100 object-fit-cover' src={demoImg} /></div>
            </div>
            <div className="aboutContent px-5 py-4">

                <div className="WhatWeDid my-6 flex items-center justify-content-between">
                    <div className="img w-2/5"><img className=' w-100 object-fit-cover' src={demoImg} /></div>
                    <div className="content w-3/5 p-4">
                        <div className="headinguppercase uppercase text-3xl text-center font-[800] my-3"> what we do ?</div>
                        <div className="whatWeDoContent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad provident quaerat nisi, harum voluptates nam est laudantium error et fuga eligendi dolorum aliquam deserunt quasi, omnis recusandae nobis rem inventore!
                            At quos aspernatur unde repellendus quod sapiente tempora consectetur veniam nesciunt commodi atque nisi mollitia, nobis reiciendis cum minima fugiat! Ipsa ut excepturi doloremque itaque fuga deserunt sunt incidunt natus.
                            Optio eligendi doloribus vitae sequi, provident quibusdam modi iusto fugit est quod excepturi odio magni eaque tempore architecto nisi beatae, aspernatur eos fuga doloremque minima itaque. Unde iusto illo fuga?
                        </div>
                    </div>

                </div>

                <div className="ourProgress my-6 flex items-center justify-content-between">
                    <div className="content w-3/5 p-4">
                        <div className="heading d-flex content-center items-center">
                            <p className=' uppercase text-3xl text-center font-[800]  my-3'>our progress</p>
                        </div>
                        <div className="whatWeDoContent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad provident quaerat nisi, harum voluptates nam est laudantium error et fuga eligendi dolorum aliquam deserunt quasi, omnis recusandae nobis rem inventore!
                            At quos aspernatur unde repellendus quod sapiente tempora consectetur veniam nesciunt commodi atque nisi mollitia, nobis reiciendis cum minima fugiat! Ipsa ut excepturi doloremque itaque fuga deserunt sunt incidunt natus.
                            Optio eligendi doloribus vitae sequi, provident quibusdam modi iusto fugit est quod excepturi odio magni eaque tempore architecto nisi beatae, aspernatur eos fuga doloremque minima itaque. Unde iusto illo fuga?
                        </div>
                    </div>
                    <div className="img w-2/5"><img className=' w-100 object-fit-cover' src={demoImg} /></div>
                </div>

                <div className="hod flex justify-content-between items-center">
                    <div className="hodImg w-3/12">
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

                <div className="members carousol w-full overflow-auto">
                    <div className="allmembers w-auto flex justify-between">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
                            return <div className="singlemember mx-2 my-3" style={{minWidth:"200px"}}>
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
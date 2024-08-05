import React from 'react'
import wave from '/wave (5).png'

const purpose = (props) => {
    return (
        <>
            <div className={`p-3 position-relative transition-all duration-700  ${props.isPurposeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} `} id="purpose" ref={props.purposeRef}>
                {/* <div className="wave position-absolute w-full h-auto left-0" style={{top:"-160px"}}>
                    <img className=' w-full h-auto' src={wave} />
                </div> */}
                <div className=" py-24 shadow-2xl rounded-xl bg-slate-200 shadow-slate-500 flex md:flex-row flex-col md:justify-center items-center px-3">
                    <div className="heading sm:w-4/12 w-full text-3xl font-[800] uppercase sm:my-6 text-center">Purpose</div>
                    <div className=" md:w-5/12 sm:w-9/12 w-full mx-6 my-4 overflow-hidden">
                        <div className='slide flex justify-between items-center' style={{width:"400%"}}>
                            {[1, 2, 3, 4].map(() => {
                                return <div className=" w-1/4 mx-4">
                                    <div className="title text-xl font-[700] my-6">Heading Card</div>
                                    <div className="content text-base font-[400] ">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique deleniti voluptates tempore voluptas fuga neque, cupiditate id laboriosam quo quisquam esse ea illum delectus culpa corrupti recusandae ipsa amet.
                                    </div>
                                </div>
                            })}
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default purpose
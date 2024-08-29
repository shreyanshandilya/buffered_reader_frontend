import React , {useEffect} from 'react';
import purposeData from './purposeData.json';
import '../../css/landingPage.css';

const purpose = (props) => {

    const slide = ()=>{
        const slides = Array.from(document.querySelectorAll(".single-slide"))
        let index = 1;
        setInterval(() => {
            slides.forEach((item , i)=>{
                i!== index ? (()=>{
                    item.classList.add("")
                })() : (()=>{
                })()
            })
            index === 2 ? index = 0 : index++;
        }, 3000);
    }

    useEffect(() => {
        // slide()
    }, [])
    

    return (
        <>
            <div className={`p-3 position-relative transition-all duration-700  ${props.isPurposeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"} `} id="purpose" ref={props.purposeRef}>

                <div className=" py-8 shadow-2xl rounded-xl  shadow-[#918b7c] flex md:flex-row flex-col md:justify-center items-center px-3"
                style={{backgroundImage:"linear-gradient(to right, #2bc0e4, #eaecc6)"}}>
                    <div className="heading sm:w-4/12 w-full text-3xl font-[800] uppercase sm:my-6 text-center">Purpose</div>
                    <div className=" md:w-5/12 sm:w-9/12 w-full mx-6 my-4 overflow-hidden">
                        <div className='slide flex justify-between items-center' style={{width:"400%"}}>
                            {purposeData.map((elem) => {
                                return <div className=" w-1/2 mx-4" key={elem.id}>
                                    <div className="title text-xl font-[700] my-6">{elem.head}</div>
                                    <div className="content text-base font-[400] ">
                                      {elem.data}
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
import React, { useEffect } from 'react'
import '../../css/landingPage.css'
import demoImg from '/demoImg.jpeg'

const achievements = () => {

    //function to run when window is loaded or window in resized
    const commonFunc = () => {
        const windowWidth = window.innerWidth
        //set the width of classname achieve
        const achieves = document.querySelector("#achievements .someAchieve .mainContent .achieves")
        windowWidth >= 730 ?
            achieves ? achieves.style.setProperty("--childWidth", `${(window.innerWidth - 150) * 0.5}px`) : '' : ''
        730 > windowWidth && windowWidth >= 350 ?
            achieves ? (() => {
                achieves.style.setProperty("--childWidth", `${(window.innerWidth - 100)}px`)
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
            <div className="w-100 h-auto" id="achievements">
                <div className="someAchieve p-2 w-100 bg-slate-100 rounded-2xl position-relative overflow-hidden">
                    {/* backgroun designing  */}
                    <div className="geometryTopLeft position-absolute w-44 " style={{ top: "-50px", left: "-50px" }}>
                        <svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#4c3f96" d="M951.0703027063655,551.9999999999999C959.4314194189803,677.9242688816948,887.1054505511026,850.2156096366729,798,913.8341815871725C708.8945494488974,977.452753537672,531.4375993997494,991.1837953008595,416.43759939974933,933.7114317029974C301.43759939974933,876.2390681051353,105.29620719784869,696.5704772343324,108,569C110.70379280215131,441.42952276566757,326.02147292527206,236.74047358083564,432.6603562126572,168.2885682970027C539.2992395000423,99.83666301316978,661.4316419753594,94.33666301316956,747.8332997243108,158.28856829700243C834.2349574732622,222.2404735808353,942.7091859937507,426.0757311183049,951.0703027063655,551.9999999999999C959.4314194189803,677.9242688816948,887.1054505511026,850.2156096366729,798,913.8341815871725" />
                        </svg>
                    </div>

                    <div className="geometryTopRight position-absolute w-44 " style={{ top: "-50px", right: "-50px" }}>
                        <svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#F6B17A" d="M1002,553.9999999999999C994.5554657660351,681.3893755155068,834.7961102401738,864.1334507448405,735.3327945962105,926.6248213900437C635.8694789522473,989.116192035247,505.77557190225576,984.7190274362267,405.2201061362207,928.9482238712194C304.6646403701856,873.1774203062121,127.99345709666618,719.6099425957028,132,592C136.00654290333384,464.39005740429724,321.2593635562237,234.9071402475023,429.25936355622366,163.2885682970027C537.2593635562237,91.66999634650311,684.5432272593703,97.1699963465029,779.9999999999997,162.28856829700243C875.456772740629,227.40714024750196,1009.4445342339649,426.61062448449303,1002,553.9999999999999C994.5554657660351,681.3893755155068,834.7961102401738,864.1334507448405,735.3327945962105,926.6248213900437" />
                        </svg>
                    </div>

                    <div className="geometryBottomLeft position-absolute w-44 " style={{ bottom: "-50px", left: "-50px" }}>
                        <svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#4c8f76" d="M1016,573.9999999999999C1016.6433703902287,692.6989668918825,872.299829643116,884.9261930858311,778.8994709486884,949.7114317029973C685.4991122542608,1014.4966703201635,553.6260063968413,1026.6633369868302,455.5978478334343,962.7114317029974C357.5696892700273,898.7595264191646,204.12440837211065,696.5704772343324,190.7305195682464,566C177.33663076438214,435.42952276566757,277.8497268370704,234.03562990505242,375.2345150102487,179.2885682970027C472.61930318342695,124.541506688953,668.2450011090242,171.7323917345355,775.039248607316,237.5176303517017C881.8334961056079,303.3028689688679,1015.3566296097713,455.3010331081173,1016,573.9999999999999C1016.6433703902287,692.6989668918825,872.299829643116,884.9261930858311,778.8994709486884,949.7114317029973" />
                        </svg>
                    </div>

                    <div className="geometryBottomRight position-absolute w-44 " style={{ bottom: "-50px", right: "-50px" }}>
                        <svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#641f82" d="M900.0471727173737,551.9999999999999C901.3127568312232,681.7371439009991,889.9347001359924,869.9261930858311,797.5935046830969,937.7114317029973C705.2523092302013,1005.4966703201635,463.59891744718294,1015.1633369868302,346.0000000000001,958.7114317029974C228.4010825528173,902.2595264191646,87.02170289194468,727.4038105676658,92,599C96.97829710805532,470.5961894323342,259.5364493149988,261.573806914169,375.86978264833203,188.2885682970027C492.2031159816653,115.00332967983645,702.6371016551594,98.6699963465029,789.9999999999997,159.28856829700243C877.3628983448399,219.90714024750196,898.7815886035241,422.2628560990007,900.0471727173737,551.9999999999999C901.3127568312232,681.7371439009991,889.9347001359924,869.9261930858311,797.5935046830969,937.7114317029973" />
                        </svg>
                    </div>

                    {/* main content of acheievements  */}
                    <div className="mainContent mt-10 w-100">
                        <div className="heading  font-[800] text-3xl uppercase ">achievements</div>
                        <div className="achieves my-8">
                            {[1, 2, 3, 4].map((_, index) => {
                                return <div className="achieve position-relative my-3 mx-1">
                                    <div className="img position-absolute top-3 left-0" >
                                        <img className='object-cover w-10 h-10 rounded-circle' src={demoImg} />
                                    </div>
                                    <div className={`content ms-14 p-3 rounded-2xl ${index === 0 ? 'bg-indigo-100' : ''} ${index === 1 ? 'bg-orange-100' : ''} ${index === 2 ? ' bg-emerald-100' : ''} ${index === 3 ? ' bg-violet-100' : ''} `} >
                                        <p className=' text-2xl font-[700]'>Demo Achievement</p>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam ab, eos deleniti minus officiis fuga doloremque ullam iure nihil</p>
                                    </div>

                                </div>
                            })}
                        </div>
                        <div className="exploreAchievements flex justify-center ">
                            <button className='checkOut border-none outline-none py-2 px-3 text-base rounded-lg mx-auto bg-indigo-600 fw-semibold text-white hover:bg-indigo-900 transition-all duration-400'>Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default achievements
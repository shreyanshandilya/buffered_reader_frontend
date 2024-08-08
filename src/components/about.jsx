import React, { useEffect } from 'react'
import demoImg from '/demoImg.jpeg'

const about = () => {

    window.addEventListener('resize', () => {
        const elem1 = document.querySelector("#about .introduction")
        elem1.style.minHeight = `${window.innerHeight * 0.9}px`
    })


    return (
        <div>
        
        <div className={`w-100 md:-mt-8 h-auto transition-all duration-700 ${true ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"}`} id="achievements"  >
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
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="xl:w-3/4 lg:w-3/4 w-full mx-auto text-center">
                                <img alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/eth.jpeg"/>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                <p className="text-gray-500">HOD: Dept. Of Computer Science</p>
                                
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                                <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid 
                                    fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. 
                                    Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block mt-3 w-5 h-5 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                                
                            </div>
                        </div>
                    </section>

                    
                </div>
            </div>
    </div>

    )
}

export default about
import React from 'react'
import Navbar from '../navbar'

export default function Hero() {
  return (
    // <div classNameName='w-screen h-screen -mt-20 overflow-hidden'>
    //     <div classNameName='w-screen h-screen -mt-20'>
    //         <img classNameName='w-full' src="..\public\eth.jpeg" alt="" />
    //         <div classNameName='absolute box-border top-1/3 w-2/4 left-16 pl-24 text-white font-sans'>
    //             <div classNameName='font-extrabold text-base tracking-widest mb-3'>Cse Society</div>
    //             <div classNameName='font-extrabold text-5xl mb-5'>Buffered Reader</div>
    //             <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vel id minima earum dolorum. Qui beatae maxime enim illum molestiae animi, eveniet nemo vel, 
    //                 recusandae quos neque quas similique fugiat!</div>
    //             </div>
                 
                
                
    //         </div>
           
           
            
    // </div>
    <section className="text-gray-600 body-font -mt-24 md:overflow-hidden">
      <Navbar/>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* <img className="-z-10  lg:w-screen md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/pattern(4).svg"/> */}
        <svg className='top-0 w-screen h-full object-cover' width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg"><rect width="1920" height="1080" fill="#f2f1e3"/>
          <path d="M2544.0228107201683,1093.9999999999998C2536.5193827151693,1173.8898792000355,2586.501001193793,1368.0506337519143,2572.1385252019554,1429.0524823068502C2557.776049210118,
                1490.054330861786,2533.777952597068,1390.9711071771958,2457.8479547691436,1460.0110913296148C2381.917956941219,1529.0510754820339,2211.432588604388,1775.4789988552666,2116.5585382344075,
                1843.292387221365C2021.684487864427,1911.1057755874635,1970.9787654909278,1876.8536439233776,1888.60365254926,1866.891421526205C1806.2285396075922,1856.9291991290324,1708.7022603061462,1863.6040296041047,
                1622.3078605844012,1783.5190528383291C1535.9134608626562,1703.4340760725536,1442.3903477412487,1473.1457750523873,1370.2372542187895,1386.3815609315525C1298.0841606963304,1299.6173468107177,1163.8244141058783,
                1330.819656287465,1189.389299449646,1262.9337681133197C1214.9541847934136,1195.0478799391744,1498.4852404865376,1058.3175831466526,1523.6265662813948,979.0662318866807C1548.767892076252,899.8148806267087,1316.7594577900206,
                868.1585284556811,1340.2372542187893,787.4256605534879C1363.715050647558,706.6927926512947,1568.1330313027413,569.7218714868033,1664.4933448540069,494.66902447352106C1760.8536584052724,419.61617746023893,1848.1900282501117,
                307.0470501776824,1918.3991355263825,337.108578473795C1988.6082428026532,367.17010676990753,1996.6731853045046,614.5234297206028,2085.7479885116313,675.0381942501963C2174.8227917187583,735.5529587797897,2364.2794373157567,
                654.4179968419487,2452.847954769143,700.1971656513554C2541.4164722225296,745.976334460762,2601.9632839067795,884.0794013818621,2617.1590932319505,949.7132071066362C2632.3549025571215,1015.3470128314103,2551.5262387251673,
                1014.1101207999641,2544.0228107201683,1093.9999999999998C2536.5193827151693,1173.8898792000355,2586.501001193793,1368.0506337519143,2572.1385252019554,1429.0524823068502" fill="#f9b41f"/>
        </svg>
        <div className="absolute text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
          <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
          </div>
        </div>
      </div>
    </section>
  )
}

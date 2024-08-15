import React from 'react'
import Footer from './Footer'
import Navbar from './navbar'
import waveImg from '/wave.png'

const About = () => {
  return (
    <>
            <div className=' absolute top-0 left-0 w-full'>
                <Navbar />
            </div>
            <div >
                <div className="introduction relative px-10 flex flex-col justify-center " style={{ height: `${window.innerHeight * 0.7}px`, backgroundImage: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(228,218,137,1) 28%, rgba(0,212,255,1) 100%)" }}>

                    <div className="heading capitalize text-4xl font-sans font-[700] text-teal-950  ">Our Aim ?</div>
                    <div className="content w-10/12 pr-7 py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem adipisci nam ducimus reiciendis quam. At consequatur laboriosam assumenda ut eaque pariatur, dolorem, rerum repellendus eius sequi deserunt quas cupiditate et.
                    </div>
                    <div className="wave absolute w-full h-1/6  bottom-0 left-0" style={{ backgroundImage: `url(${waveImg})`, backgroundSize: '100% 100%' }}>
                    </div>
                </div>
                <div className="alleditons">
                     <section className="text-gray-600 body-font">
                         <div className="container px-5 py-20 mx-auto">
                             <div className="xl:w-3/4 lg:w-3/4 w-full mx-auto text-center">
                                 <img alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/eth.jpeg" />
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
            <Footer />
    </>
  )
}

export default About
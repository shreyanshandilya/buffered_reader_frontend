import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import waveImg from '/wave.png'

const Teams = () => {
  return (
    // <div>
    //   <Navbar/>
    //   <section className="text-gray-600 body-font">
    //     {/* <div className='h-1/3'>
    //     <img src="/eth.jpeg" alt="bg-img" className='h-64 w-screen md: ' />
    //     </div> */}
    //     <div className=" pt-14 mt-5 pb-5 shadow-2xl rounded-xl  bg-gradient-to-br from-[#a4fbea] to-[#56b1d9] shadow-slate-500 flex md:flex-row flex-col md:justify-center items-center px-3">
    //                 <img src='/team.jpg' className=" rounded heading sm:w-4/12 w-full sm:my-6 h-1/4"/>
    //                 <div className=" md:w-5/12 sm:w-9/12 w-full mx-6 my-4 overflow-hidden">
    //                     <div className='slide flex justify-between items-center' style={{width:"400%"}}>
    //                          <div className=" w-1/4 mx-4">
    //                                 <div className="title text-xl font-[700] my-6">Meet Our Amazing Team</div>
    //                                 <div className="content text-base font-[400] ">
    //                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique deleniti voluptates tempore voluptas fuga neque, cupiditate id laboriosam quo quisquam esse ea illum delectus culpa corrupti recusandae ipsa amet.
    //                                 </div>
    //                          </div>

    //                     </div>

    //                 </div>
    //     </div>

    //   </section>
    //   <Footer/>
    // </div>
    <>
      <div className=" absolute top-0 left-0 w-full">
        <Navbar />
      </div>
      <div>
        <div
          className="introduction relative px-10 flex flex-col justify-center "
          style={{
            height: `${window.innerHeight * 0.7}px`,
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(228,218,137,1) 28%, rgba(0,212,255,1) 100%)",
          }}
        >
          <div className="heading capitalize text-4xl font-sans font-[700] text-teal-950  ">
            Who Are We ?
          </div>
          <div className="content w-10/12 pr-7 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            adipisci nam ducimus reiciendis quam. At consequatur laboriosam
            assumenda ut eaque pariatur, dolorem, rerum repellendus eius sequi
            deserunt quas cupiditate et.
          </div>
          <div
            className="wave absolute w-full h-1/6  bottom-0 left-0"
            style={{
              backgroundImage: `url(${waveImg})`,
              backgroundSize: "100% 100%",
            }}
          ></div>
        </div>
        <div className="alleditons">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-8 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-60 md:h-36 w-full object-cover object-center"
                    src="/eth.jpeg"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs text-center title-font font-medium text-gray-400 mb-3">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-2xl font-medium text-gray-900 mb-1">
                      The Catalyzer
                    </h1>
                    <h2 className="tracking-widest text-lg title-font font-medium text-gray-400 mb-1">
                      Work Done
                    </h2>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Linked In
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-60 md:h-36 w-full object-cover object-center"
                    src="/eth.jpeg"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs text-center title-font font-medium text-gray-400 mb-3">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-2xl font-medium text-gray-900 mb-1">
                      The Catalyzer
                    </h1>
                    <h2 className="tracking-widest text-lg title-font font-medium text-gray-400 mb-1">
                      Work Done
                    </h2>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Linked In
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-60 md:h-36 w-full object-cover object-center"
                    src="/eth.jpeg"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs text-center title-font font-medium text-gray-400 mb-3">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-2xl font-medium text-gray-900 mb-1">
                      The Catalyzer
                    </h1>
                    <h2 className="tracking-widest text-lg title-font font-medium text-gray-400 mb-1">
                      Work Done
                    </h2>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Linked In
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Teams;

import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import waveImg from "/wave.png";

const Teams = () => {



  return (
    <>
      <div className=" absolute top-0 left-0 w-full">
        <Navbar />
      </div>
      <div>
        <div
          className={`introduction relative  pb-24 ${window.innerWidth >= 768 ? "px-10 pt-24" : "px-3 pt-24 "} flex flex-col justify-center overflow-hidden`}
          style={{
            backgroundImage:
              "linear-gradient(to right, #00c9ff, #92fe9d)",
          }}
        >
          <div className="heading capitalize text-4xl font-sans font-[700] text-teal-950  ">
            Who Are We ?
          </div>
          <div className="content md:w-10/12 w-full  py-4">
            Buffered Reader is the biannual magazine of the CSE Society, serving as a vibrant reflection of our thriving community. Each meticulously crafted issue highlights the energy and innovation seen in our workshops, hackathons, and guest lectures. Beyond campus events, Buffered Reader also delves into the latest global software advancements from the past six months, offering a blend of academic and industry insights. This publication aims to inform, inspire, and prepare our readers for the dynamic challenges of the ever-evolving tech landscape.
          </div>
            <div
            className="wave absolute w-full h-2/6  -bottom-3 left-0"
            style={{
              backgroundImage: `url(${waveImg})`,
              backgroundSize: "150% 100%",
            }}
          ></div>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font  text-gray-900">
                OUR TEAM
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                "Individually, we are one drop. Together, we are an ocean."
              </p>
            </div>
            <div className="flex flex-wrap -m-4 justify-center">


              <p className="font-bold text-2xl text-black bg-gradient-to-r from-[ #00c9ff] to-[#92fe9d] rounded-lg px-5 py-3 font-serif">BufferedAdmin</p><br></br><br></br>
              <div className="flex flex-wrap -m-4 mb-12 justify-center pt-3">
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl   shadow-stone-400 mb-4  h-60  rounded-lg w-10/12   object-center "
                      src="/ck_sir.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        Prof. Chiranjeev Kumar
                      </h2>
                      {/* <p className="">
                        DIY tote bag drinking vinegar cronut adaptogen squid fanny
                        pack vaporware.
                      </p> */}
                      <span className="inline-flex">
                        <a href="https://www.linkedin.com/in/ck31101974/" className="text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" width="35px" height="35px"><g><path fill="#000000" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25   C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M8.039,22.069H4L3.977,9.977h4.039L8.039,22.069z M5.918,8.394   H5.893c-1.318,0-2.171-0.908-2.171-2.042c0-1.159,0.879-2.041,2.222-2.041c1.344,0,2.171,0.882,2.196,2.041   C8.14,7.485,7.287,8.394,5.918,8.394z M22.042,22.07h-4.075v-6.571c0-1.588-0.421-2.671-1.842-2.671   c-1.084,0-1.671,0.731-1.955,1.437c-0.104,0.253-0.13,0.604-0.13,0.957v6.849H9.945L9.922,9.977h4.095l0.023,1.705   c0.521-0.806,1.394-1.953,3.48-1.953c2.584,0,4.521,1.688,4.521,5.317V22.07z" /></g></svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl   shadow-stone-400 mb-4  h-60  rounded-lg w-10/12   object-center "
                      src="/sb_sir.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        Prof. Soumen Bag
                      </h2>
                      {/* <p className="">
                        DIY tote bag drinking vinegar cronut adaptogen squid fanny
                        pack vaporware.
                      </p> */}
                      <span className="inline-flex">
                        <a href="#" className="text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" width="35px" height="35px"><g><path fill="#000000" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25   C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M8.039,22.069H4L3.977,9.977h4.039L8.039,22.069z M5.918,8.394   H5.893c-1.318,0-2.171-0.908-2.171-2.042c0-1.159,0.879-2.041,2.222-2.041c1.344,0,2.171,0.882,2.196,2.041   C8.14,7.485,7.287,8.394,5.918,8.394z M22.042,22.07h-4.075v-6.571c0-1.588-0.421-2.671-1.842-2.671   c-1.084,0-1.671,0.731-1.955,1.437c-0.104,0.253-0.13,0.604-0.13,0.957v6.849H9.945L9.922,9.977h4.095l0.023,1.705   c0.521-0.806,1.394-1.953,3.48-1.953c2.584,0,4.521,1.688,4.521,5.317V22.07z" /></g></svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl     shadow-stone-400 mb-4  h-60  h-60    rounded-lg w-10/12   object-center "
                      src="/pb_coFIC.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        Prof. Pranav Bisht
                      </h2>
                      {/* <p className="">
                        DIY tote bag drinking vinegar cronut adaptogen squid fanny
                        pack vaporware.
                      </p> */}
                      <span className="inline-flex">
                        <a href="https://www.linkedin.com/in/pranav-bisht-99157492/" className="text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" width="35px" height="35px"><g><path fill="#000000" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25   C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M8.039,22.069H4L3.977,9.977h4.039L8.039,22.069z M5.918,8.394   H5.893c-1.318,0-2.171-0.908-2.171-2.042c0-1.159,0.879-2.041,2.222-2.041c1.344,0,2.171,0.882,2.196,2.041   C8.14,7.485,7.287,8.394,5.918,8.394z M22.042,22.07h-4.075v-6.571c0-1.588-0.421-2.671-1.842-2.671   c-1.084,0-1.671,0.731-1.955,1.437c-0.104,0.253-0.13,0.604-0.13,0.957v6.849H9.945L9.922,9.977h4.095l0.023,1.705   c0.521-0.806,1.394-1.953,3.48-1.953c2.584,0,4.521,1.688,4.521,5.317V22.07z" /></g></svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-bold text-2xl  text-black  font-serif bg-gradient-to-r from-[ #00c9ff] to-[#92fe9d] rounded-lg px-5 py-3">BufferedWriters</p><br></br><br></br>
              <div className="flex flex-wrap -m-4 justify-center pt-3">
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full  text-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl     shadow-stone-400 mb-4  h-60 rounded-lg w-10/12    object-center "
                      src="/sharthak.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        Sarthak Saumya
                      </h2>
                      <h3 className="text-gray-500 mb-3"> (Lead Editor)  </h3>

                    </div>
                  </div>
                </div>
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl     shadow-stone-400 mb-4  h-60    rounded-lg w-10/12   object-center "
                      src="/deepika.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="capitalize title-font font-medium text-lg text-gray-900">
                        deepika tanuvi
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl   shadow-stone-400 mb-4  h-60    rounded-lg w-10/12    object-center "
                      src="/eshita.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        eshita paliwal
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl     shadow-stone-400 mb-4  h-60     rounded-lg w-10/12    object-center "
                      src="/saksham.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="capitalize title-font font-medium text-lg text-gray-900">
                        saksham jha
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl   shadow-stone-400 mb-4  h-60    rounded-lg w-10/12    object-center "
                      src="/Riya.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="capitalize title-font font-medium text-lg text-gray-900">
                        riya kumari
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl   shadow-stone-400 mb-4  h-60  rounded-lg w-10/12   object-center "
                      src="/pragna.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        bitra sri pragna
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl     shadow-stone-400 mb-4  h-60    rounded-lg  w-10/12  object-center "
                      src="/Kshitiz.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        kshitiz pratap singh
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl     shadow-stone-400 mb-4 rounded-lg h-60  w-10/12   object-center "
                      src="/Naga Chaitanya.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        nanneboina naga chaitanya
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl      shadow-stone-400 mb-4  h-60   rounded-lg   w-10/12   object-center "
                      src="/shyam.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        Shyam Sunder
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl   shadow-stone-400 mb-4  h-60  rounded-lg w-10/12   object-center "
                      src="/shacin.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        sachin rajguru
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl      shadow-stone-400 mb-4  h-60    rounded-lg w-10/12  object-center "
                      src="/Rohan.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        rohan garg
                      </h2>

                    </div>
                  </div>
                </div>
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl      shadow-stone-400 mb-4  h-60   rounded-lg w-10/12   object-center "
                      src="/sumit.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        sumit kumar
                      </h2>


                    </div>
                  </div>
                </div>
              </div>

              <p className="font-bold text-2xl text-black font-serif bg-gradient-to-r from-[ #00c9ff] to-[#92fe9d] rounded-lg px-5 py-3">BufferedDesigners</p><br></br><br></br>
              <div className="flex flex-wrap -m-4 mb-12 justify-center pt-3">
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl     shadow-stone-400 mb-4  h-60   flended-lg w-10/12 object-center "
                      src="/AbhishekDas.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                      Abhishek Prasad Das
                      </h2>
                      <h3 className="text-gray-500 mb-3"> (Lead Designer)  </h3>
                    </div>
                  </div>
                </div>

                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl     shadow-stone-400 mb-4  h-60     rounded-lg w-10/12  object-center "
                      src="/Supreeth.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                      Ketham Reddy Supreeth 
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl      shadow-stone-400 mb-4  h-60        rounded-lg w-10/12  object-center "
                      src="/Daksh.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        Daksh Mor
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl     shadow-stone-400 mb-4  h-60     rounded-lg w-10/12  object-center "
                      src="/Divyanshu.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                       Divyanshu Singh
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl      shadow-stone-400 mb-4  h-60  rounded-lg w-10/12   object-center "
                      src="/Kasam.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                       Kasam Pramodha
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl     shadow-stone-400 mb-4  h-60    rounded-lg w-10/12   object-center "
                      src="/Samarth.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                       Samarth Jindal
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl      shadow-stone-400 mb-4  h-60   rounded-lg w-10/12   object-center "
                      src="/Jatin.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                       Jatin Kumar
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl      shadow-stone-400 mb-4  h-60    rounded-lg w-10/12   object-center "
                      src="/Monil.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                       Monil Chandgdhiya
                      </h2>
                    </div>
                  </div>
                </div>


                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl      shadow-stone-400 mb-4  h-60    rounded-lg w-10/12   object-center "
                      src="/Robin.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                       Robin Kumar
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="font-bold text-2xl  text-black bg-gradient-to-r from-[ #00c9ff] to-[#92fe9d]rounded-lg px-5 py-3 font-serif">BufferedDevelopers</p><br></br><br></br>
              <div className="flex flex-wrap -m-4 mb-12 justify-center pt-3">
                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl     shadow-stone-400 mb-4  h-60    rounded-lg w-10/12   object-center "
                      src="/shreyansh.jpeg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                      Shreyansh Shandilya
                      </h2>
                      <h3 className="text-gray-500 mb-3"> (Lead Developer)  </h3>
                    </div>
                  </div>
                </div>

                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl     shadow-stone-400 mb-4  h-60   rounded-lg w-10/12   object-center "
                      src="/anirban.jpeg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        Anirban Das
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 mb-10 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center flex flex-col items-center">
                      <img
                      alt="team"
                      className=" object-cover shadow-xl     shadow-stone-400 mb-4  h-60    rounded-lg w-10/12   object-center "
                      src="/Shashwat.jpg"
                    />
                    <div className="py-2 w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                      Shashwat Nautiyal
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Teams;

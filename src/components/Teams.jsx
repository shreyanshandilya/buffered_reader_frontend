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
            The Computer Science and Engineering (CSE) Society is a vibrant community of students and faculty dedicated to fostering innovation, learning, and collaboration in the field of computer science. Our society provides a platform for students to engage in various technical and non-technical activities, including workshops, hackathons, guest lectures, and the publication of our annual magazine, 'Buffered Reader.' We strive to bridge the gap between academia and industry, preparing our members for the challenges of the ever-evolving tech world.
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
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
                OUR TEAM
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                "Individually, we are one drop. Together, we are an ocean."
              </p>
            </div>
            <div className="flex flex-wrap -m-4 justify-center">


              <p className="font-bold text-2xl text-black bg-gradient-to-r from-[ #00c9ff] to-[#92fe9d] rounded-lg px-5 py-3 font-serif">Executive Committee</p><br></br><br></br>
              <div className="flex flex-wrap -m-4 mb-12 justify-center pt-3">
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/ck_sir.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        Prof. Chiranjeev Kumar
                      </h2>
                      <h3 className="text-gray-500 mb-3">President</h3>
                      {/* <p className="mb-4">
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
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/dr.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        Prof. Dharavath Ramesh
                      </h2>
                      <h3 className="text-gray-500 mb-3">Faculty Incharge </h3>
                      {/* <p className="mb-4">
                        DIY tote bag drinking vinegar cronut adaptogen squid fanny
                        pack vaporware.
                      </p> */}
                      <span className="inline-flex">
                        <a href="https://www.linkedin.com/in/dr-ramesh-dharavath-173572a4/" className="text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" width="35px" height="35px"><g><path fill="#000000" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25   C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M8.039,22.069H4L3.977,9.977h4.039L8.039,22.069z M5.918,8.394   H5.893c-1.318,0-2.171-0.908-2.171-2.042c0-1.159,0.879-2.041,2.222-2.041c1.344,0,2.171,0.882,2.196,2.041   C8.14,7.485,7.287,8.394,5.918,8.394z M22.042,22.07h-4.075v-6.571c0-1.588-0.421-2.671-1.842-2.671   c-1.084,0-1.671,0.731-1.955,1.437c-0.104,0.253-0.13,0.604-0.13,0.957v6.849H9.945L9.922,9.977h4.095l0.023,1.705   c0.521-0.806,1.394-1.953,3.48-1.953c2.584,0,4.521,1.688,4.521,5.317V22.07z" /></g></svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/ps.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        Prof. Pranay Kumar Saha
                      </h2>
                      <h3 className="text-gray-500 mb-3">Treasurer</h3>
                      {/* <p className="mb-4">
                        DIY tote bag drinking vinegar cronut adaptogen squid fanny
                        pack vaporware.
                      </p> */}
                      <span className="inline-flex">
                        <a href="https://www.linkedin.com/in/pranay-kumar-saha/" className="text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" width="35px" height="35px"><g><path fill="#000000" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25   C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M8.039,22.069H4L3.977,9.977h4.039L8.039,22.069z M5.918,8.394   H5.893c-1.318,0-2.171-0.908-2.171-2.042c0-1.159,0.879-2.041,2.222-2.041c1.344,0,2.171,0.882,2.196,2.041   C8.14,7.485,7.287,8.394,5.918,8.394z M22.042,22.07h-4.075v-6.571c0-1.588-0.421-2.671-1.842-2.671   c-1.084,0-1.671,0.731-1.955,1.437c-0.104,0.253-0.13,0.604-0.13,0.957v6.849H9.945L9.922,9.977h4.095l0.023,1.705   c0.521-0.806,1.394-1.953,3.48-1.953c2.584,0,4.521,1.688,4.521,5.317V22.07z" /></g></svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-bold text-2xl text-black bg-gradient-to-r from-[ #00c9ff] to-[#92fe9d] rounded-lg px-5 py-3 font-serif">Buffered Editors</p><br></br><br></br>
              <div className="flex flex-wrap -m-4 mb-12 justify-center pt-3">
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="sv.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        Shubham Varshney
                      </h2>
                      <h3 className="text-gray-500 mb-3">Vice-President  </h3>
                      {/* <p className="mb-4">
                        DIY tote bag drinking vinegar cronut adaptogen squid fanny
                        pack vaporware.
                      </p> */}
                      <span className="inline-flex">
                        <a href="https://www.linkedin.com/in/shubham0920/" className="text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" width="35px" height="35px"><g><path fill="#000000" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25   C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M8.039,22.069H4L3.977,9.977h4.039L8.039,22.069z M5.918,8.394   H5.893c-1.318,0-2.171-0.908-2.171-2.042c0-1.159,0.879-2.041,2.222-2.041c1.344,0,2.171,0.882,2.196,2.041   C8.14,7.485,7.287,8.394,5.918,8.394z M22.042,22.07h-4.075v-6.571c0-1.588-0.421-2.671-1.842-2.671   c-1.084,0-1.671,0.731-1.955,1.437c-0.104,0.253-0.13,0.604-0.13,0.957v6.849H9.945L9.922,9.977h4.095l0.023,1.705   c0.521-0.806,1.394-1.953,3.48-1.953c2.584,0,4.521,1.688,4.521,5.317V22.07z" /></g></svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/sk.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        Spandan Kundu
                      </h2>
                      <h3 className="text-gray-500 mb-3">Secretary </h3>
                      {/* <p className="mb-4">
                        DIY tote bag drinking vinegar cronut adaptogen squid fanny
                        pack vaporware.
                      </p> */}
                      <span className="inline-flex">
                        <a href="https://www.linkedin.com/in/spandan-kundu-22582822b/" className="text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" width="35px" height="35px"><g><path fill="#000000" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25   C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M8.039,22.069H4L3.977,9.977h4.039L8.039,22.069z M5.918,8.394   H5.893c-1.318,0-2.171-0.908-2.171-2.042c0-1.159,0.879-2.041,2.222-2.041c1.344,0,2.171,0.882,2.196,2.041   C8.14,7.485,7.287,8.394,5.918,8.394z M22.042,22.07h-4.075v-6.571c0-1.588-0.421-2.671-1.842-2.671   c-1.084,0-1.671,0.731-1.955,1.437c-0.104,0.253-0.13,0.604-0.13,0.957v6.849H9.945L9.922,9.977h4.095l0.023,1.705   c0.521-0.806,1.394-1.953,3.48-1.953c2.584,0,4.521,1.688,4.521,5.317V22.07z" /></g></svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/rk.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        Ram Krishna
                      </h2>
                      <h3 className="text-gray-500 mb-3">Joint-Secretary  </h3>
                      {/* <p className="mb-4">
                        DIY tote bag drinking vinegar cronut adaptogen squid fanny
                        pack vaporware.
                      </p> */}
                      <span className="inline-flex">
                        <a href="https://www.linkedin.com/in/ram-krishna-bbba8626a/" className="text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" width="35px" height="35px"><g><path fill="#000000" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25   C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M8.039,22.069H4L3.977,9.977h4.039L8.039,22.069z M5.918,8.394   H5.893c-1.318,0-2.171-0.908-2.171-2.042c0-1.159,0.879-2.041,2.222-2.041c1.344,0,2.171,0.882,2.196,2.041   C8.14,7.485,7.287,8.394,5.918,8.394z M22.042,22.07h-4.075v-6.571c0-1.588-0.421-2.671-1.842-2.671   c-1.084,0-1.671,0.731-1.955,1.437c-0.104,0.253-0.13,0.604-0.13,0.957v6.849H9.945L9.922,9.977h4.095l0.023,1.705   c0.521-0.806,1.394-1.953,3.48-1.953c2.584,0,4.521,1.688,4.521,5.317V22.07z" /></g></svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-bold text-2xl  text-black bg-gradient-to-r from-[ #00c9ff] to-[#92fe9d]rounded-lg px-5 py-3 font-serif">Buffered Developers</p><br></br><br></br>
              <div className="flex flex-wrap -m-4 mb-12 justify-center pt-3">
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/shreyansh.jpeg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                      Shreyansh Shandilya
                      </h2>
                      <h3 className="text-gray-500 mb-3"> (Lead Developer)  </h3>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/anirban.jpeg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        Anirban Das
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/Shashwat.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                      Shashwat Nautiyal
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-bold text-2xl  text-black  font-serif bg-gradient-to-r from-[ #00c9ff] to-[#92fe9d] rounded-lg px-5 py-3">Buffered Writers</p><br></br><br></br>
              <div className="flex flex-wrap -m-4 justify-center pt-3">
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/sharthak.jpg"
                    />
                    <div className="w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        Sarthak Saumya
                      </h2>
                      <h3 className="text-gray-500 mb-3"> (Lead Editor)  </h3>

                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/deepika.jpg"
                    />
                    <div className="w-full">
                      <h2 className="capitalize title-font font-medium text-lg text-gray-900">
                        deepika tanuvi
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/eshita.jpg"
                    />
                    <div className="w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        eshita paliwal
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/saksham.jpg"
                    />
                    <div className="w-full">
                      <h2 className="capitalize title-font font-medium text-lg text-gray-900">
                        saksham jha
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/Riya.jpg"
                    />
                    <div className="w-full">
                      <h2 className="capitalize title-font font-medium text-lg text-gray-900">
                        riya kumari
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/pragna.jpg"
                    />
                    <div className="w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        bitra sri pragna
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/Kshitiz.jpg"
                    />
                    <div className="w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        kshitiz pratap singh
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/Naga Chaitanya.jpg"
                    />
                    <div className="w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        nanneboina naga chaitanya
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/shyam.jpg"
                    />
                    <div className="w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        Shyam Sunder
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/shacin.jpg"
                    />
                    <div className="w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        sachin rajguru
                      </h2>


                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/Rohan.jpg"
                    />
                    <div className="w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        rohan garg
                      </h2>

                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/sumit.jpg"
                    />
                    <div className="w-full">
                      <h2 className=" capitalize title-font font-medium text-lg text-gray-900">
                        sumit kumar
                      </h2>


                    </div>
                  </div>
                </div>
              </div>

              <p className="font-bold text-2xl text-black font-serif bg-gradient-to-r from-[ #00c9ff] to-[#92fe9d] rounded-lg px-5 py-3">Buffered Designers</p><br></br><br></br>
              <div className="flex flex-wrap -m-4 mb-12 justify-center pt-3">
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/AbhishekDas.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                      Abhishek Prasad Das
                      </h2>
                      <h3 className="text-gray-500 mb-3"> (Lead Designer)  </h3>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/Supreeth.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                      Ketham Reddy Supreeth 
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/Daksh.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        Daksh Mor
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/Divyanshu.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                       Divyanshu Singh
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/Kasam.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                       Kasam Pramodha
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/Samarth.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                       Samarth Jindal
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/Jatin.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                       Jatin Kumar
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/Monil.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                       Monil Chandgdhiya
                      </h2>
                    </div>
                  </div>
                </div>


                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full text-center">
                    <img
                      alt="team"
                      className=" object-cover shadow-xl shadow-stone-400 flex-shrink-0 rounded-lg w-full h-4/6 object-center mb-4"
                      src="/Robin.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                       Robin Kumar
                      </h2>
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

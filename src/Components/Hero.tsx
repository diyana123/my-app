import React from "react";
import Book from "../assets/Book_open_light.png";
import code from "../assets/Subttasks_light.png";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="md:w-3/5">
            <div className="ml-10">
            <h1 className="flex sm:text-5xl text-2xl text-[#393F48] font-medium font-main-font title-font mb-2 ">
            Let's learn{" "}
            <span>
              <img className="ml-2" src={Book} />
            </span>
          </h1>

          <h1 className="flex sm:text-5xl text-2xl text-[#393F48] font-medium font-main-font title-font mb-2 ">
            to code{" "}
            <span>
              <img className="ml-2" src={code} />
            </span>
          </h1>

          <h1 className="flex sm:text-5xl text-2xl text-[#393F48] font-medium font-main-font title-font mb-2 ">
            an application{" "}
          </h1>
            </div>
          
        </div>

        <div className="md:w-2/5 md:pl-6">
          <p className="leading-relaxed text-base font-main-font">
            with me <span className="text-btn-pink ">arif iskandar</span>,a
            software developer who loves to share how to code in many programing
            languages and multi platforms.
          </p>
          <div className="flex md:mt-4 mt-6">
            <button className="inline-flex text-white bg-btn-pink border-0 py-2 px-6 focus:outline-none rounded-3xl">
              Start learn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

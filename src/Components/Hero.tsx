import React from "react";
import Book from "../assets/Book_open_light.png";
import code from "../assets/Subttasks_light.png";
import github from "../../src/assets/github.png";
import instagram from "../../src/assets/instagram.png";
import tiktok from "../../src/assets/tiktok.png";
import youtube from "../../src/assets/youtube.png";

const Hero = () => {

  const socialItems = [
    { img: github, link: "#", alt: "github" },
    { img: instagram, link: "#", alt: "instagram" },
    { img: tiktok, link: "#", alt: "tiktok" },
    { img: youtube, link: "#", alt: "youtube" },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="md:w-3/5">
            <div className="-mt-16 md:mt-0 -ml-5 md:ml-10">
            <div className="flex sm:text-7xl text-4xl text-[#393F48] font-medium font-main-font title-font mb-2 ">
            Let's learn{" "}
            <span className="mt-0 md:mt-3">
              <img className="w-9 md:w-14  ml-2" src={Book} />
            </span>
          </div>

          <div className="flex sm:text-7xl text-4xl text-[#393F48] font-medium font-main-font title-font mb-2 ">
            to code{" "}
            <span className="mt-0 md:mt-4">
              <img className="w-9 md:w-14  ml-2" src={code} />
            </span>
          </div>

          <h1 className="flex sm:text-7xl text-4xl text-[#393F48] font-medium font-main-font title-font mb-2 ">
            an application{" "}
          </h1>
            </div>
          
        </div>

        <div className="md:w-2/5 md:pl-6">
          <p className="leading-relaxed text-base font-main-font mt-9 md:mt-0 -ml-5 md:ml-0">
            with me <span className="text-btn-pink ">arif iskandar</span>,a
            software developer who loves to share how to code in many programing
            languages and multi platforms.
          </p>
          <div className="flex md:mt-4 mt-6 -ml-5 md:ml-0">
            <button className="flex items-center justify-center w-[121px] inline-flex text-white bg-btn-pink border-0 py-2  focus:outline-none rounded-3xl">
              Start learn
            </button>

            {socialItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block rounded ml-6 mt-[2px] lg:mt-0"
            >
              <img
                className="3xs:flex lg:hidden"
                src={item.img}
                alt={item.alt}
              />
            </a>
          ))}




          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

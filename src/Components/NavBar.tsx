import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import navbarImg from "../../src/assets/navbarImg.png";
import github from "../../src/assets/github.png";
import instagram from "../../src/assets/instagram.png";
import tiktok from "../../src/assets/tiktok.png";
import youtube from "../../src/assets/youtube.png";
import menu from "../assets/Menu@2x.png";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuButtonClass = isMobileMenuOpen
    ? "block lg:hidden"
    : "block lg:hidden";

  const mobileMenuClass = isMobileMenuOpen ? "block" : "hidden";

  const menuItems = [
    { text: "home", link: "#" },
    { text: "about", link: "#" },
    { text: "contact", link: "#" },
  ];
  const socialItems = [
    { img: github, link: "#", alt: "github" },
    { img: instagram, link: "#", alt: "instagram" },
    { img: tiktok, link: "#", alt: "tiktok" },
    { img: youtube, link: "#", alt: "youtube" },
  ];

  return (
    <nav className="container flex items-center justify-between flex-wrap bg-white py-4 lg:px-12">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2  pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <img className="w-[40px] h-[40px]" src={navbarImg} alt="navbar-img" />
          <span className="font-semibold ml-5 text-xl tracking-tight">
            It's me
          </span>
        </div>

      
          
        <button className="3xs:flex lg:hidden items-center justify-center bg-transparent hover:bg-btn-pink hover:text-white py-2 px-6 h-[40px] w-[150px] text-[12px] border border-btn-pink hover:border-transparent rounded-3xl">
          Download CV
        </button>

        <div className={menuButtonClass}>
          <button
            id="nav"
            className="flex py-2 px-3 w-[50px]"
            onClick={toggleMobileMenu}
          >
            <img src={menu} alt="menu" />
          </button>
        </div>


      </div>
      

      <div
        className={`menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${mobileMenuClass}`}
      >
        <div className="text-md lg:flex-grow">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block mt-4 lg:inline-block lg:mt-0 px-4 py-2 rounded mr-2"
            >
              {item.text}
            </a>
          ))}
        </div>

        <div className="flex">
          {socialItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block text-md px-4 py-2 rounded ml-2 font-bold hover:text-white mt-4 lg:mt-0"
            >
              <img
                className="3xs:hidden lg:flex"
                src={item.img}
                alt={item.alt}
              />
            </a>
          ))}

          <button className="3xs:hidden lg:flex bg-transparent hover:bg-btn-pink hover:text-white py-2 px-6 border border-btn-pink hover:border-transparent rounded-3xl">
            Download CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

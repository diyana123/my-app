import React from "react";
import navbarImg from "../../src/assets/navbarImg.png";

const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Sidebar content */}
      <div className="p-4">
        <div className="flex items-center flex-shrink-0 text-gray-800 mb-[30px]">
          <img className="w-[40px] h-[40px]" src={navbarImg} alt="navbar-img" />
          <span className="font-semibold ml-5 text-xl tracking-tight">
            It's me
          </span>
        </div>
        <ul>
          <li className="mb-[30px]">
            <a
              href="#"
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800"
            >
              Home
            </a>
          </li>
          <li className="mb-[30px]">
            <a
              href="#"
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800"
            >
              About
            </a>
          </li>
          <li className="mb-[30px]">
            <a
              href="#"
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800"
            >
              Contact
            </a>
          </li>
        </ul>
        <button onClick={onClose} className="flex bg-btn-pink text-white py-2 px-6 border border-btn-pink  rounded-3xl">
            Download CV
          </button>
      </div>


      
    </div>
  );
};

export default MobileSidebar;

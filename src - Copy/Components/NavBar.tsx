import React from "react";
import navbarImg from '../../src/assets/navbarImg.png';
import github from '../../src/assets/github.png';
import instagram from '../../src/assets/instagram.png';
import tiktok from '../../src/assets/tiktok.png';
import youtube from '../../src/assets/youtube.png';


const NavBar = () => {
    const menuItems = [
        {text:"home" , link:"#"},
        {text:"about" , link:"#"},
        {text:"contact" , link:"#"},


    ];
    const socialItems = [
        {img:github , link:"#",alt:"github"},
        {img:instagram , link:"#",alt:"instagram"},
        {img:tiktok , link:"#",alt:"tiktok"},
        {img:youtube , link:"#",alt:"youtube"},

    ];

    return(
        <nav
        className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                <img className="w-[40px] h-[40px]" src={navbarImg} alt='navbar-img'/>
                <span className="font-semibold ml-5 text-xl tracking-tight">It's me</span>
            </div>
            <div className="block lg:hidden ">
                <button
                    id="nav"
                    className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
        </div>
    
        <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div className="text-md  lg:flex-grow">
              {menuItems.map((item,index) => (
                <a key = {index} href={item.link} className='block mt-4 lg:inline-block lg:mt-0  px-4 py-2 rounded  mr-2'>
                    {item.text}
                </a>
              ))}
            </div>
           
         
            <div className="flex ">
                {socialItems.map((item,index) => (
                    <a key = {index} href={item.link} className=" block text-md px-4 py-2 rounded ml-2 font-bold hover:text-white mt-4 lg:mt-0">
                        <img className = "3xs:hidden lg:flex" src = {item.img} alt={item.alt}/>
                    </a>
                ))}

                <button className="bg-transparent hover:bg-btn-pink  hover:text-white py-2 px-5 border border-btn-pink hover:border-transparent rounded-[23px]">Download CV</button>
              
            </div>
        </div>
    
    </nav>
    ) 
}
export default NavBar;

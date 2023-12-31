import React from "react";
import navbarImg from "../../src/assets/navbarImg.png";


const AboutSection = () => {
    return (


        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="md:w-3/5">
              <div className="ml-10">
                       <div className="flex sm:text-7xl text-4xl text-[#393F48] font-medium font-main-font title-font mb-2 -ml-10 md:ml-0">
      It's me
             <span className="ml-[117px] md:ml-5 mt-0 md:mt-2">
                <img className=" w-[56px]" src={navbarImg} />
              </span>
            </div>
  
                <div className="flex sm:text-7xl text-4xl text-[#393F48] font-medium font-main-font title-font mb-2 -ml-10 md:ml-0">
             Arif Iskandar
           <span>
               
              </span>
        </div>
              </div>
            
          </div>
  
          <div className="mt-8 md:mt-0 md:w-2/5 md:pl-6">
            <p className="text-base font-main-font leading-8">
            I like to code and keep it simple, try something new, and learn more. I think sharing knowledge is the best practice to improve my skills, and I try to do it.
            </p>
            <p className="leading-8 text-base font-main-font mt-2">
            I am currently the Chief Technology Officer at dSociety, a startup to help students prepare for their exams.
            </p>
          
          </div>
        </div>
      </section>

   
    )
}

export default AboutSection
import React from "react";

import ReveiwItems from "./ReveiwItems";
import '../styles/reveiws.scss'

type ReveiwProps = {
  data: {
    title: string;
    subTitle: string;
    text: string;
    image: string;
  }[];
};

const Reveiws = ({ data }: ReveiwProps) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map((item, index) => (
            <ReveiwItems
              key={index}
              title={item.title}
              subTitle={item.subTitle}
              text={item.text}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className=""></div>

      <div className="inset-x-0 flex justify-center background"></div>
      <div className="text-center ">
        <div className="text-[24px] leading-3 font-normal mb-7 text-black">
          What are you waiting for ?{" "}
        </div>
        <button className="bg-btn-pink text-white py-3 px-6 mb-20 border border-btn-pink rounded-3xl">
          Load More
        </button>
      </div>
    </section>
  );
};

export default Reveiws;

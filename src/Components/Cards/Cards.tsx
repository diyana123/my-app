// Cards.tsx
import React from "react";

import CardItems from "./CardItems";

type CardProps = {
    data: {  image: string;
        title: string;
        subTitle: string;
        img1: string;
        img2: string; }[];
  }

const Cards = ({ data }: CardProps) => {



  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {data.map((item, index) => (
          <CardItems
            key={index}
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
            img1={item.img1}
            img2={item.img2}
          />
        ))}
       
      </div>
      <div className="flex justify-center items-center my-8">
      <button className=" bg-transparent hover:bg-btn-pink hover:text-white py-2 px-6 border border-btn-pink hover:border-transparent rounded-3xl">
            Load More
          </button>
      </div>

     
    </div>
  );
};

export default Cards;

















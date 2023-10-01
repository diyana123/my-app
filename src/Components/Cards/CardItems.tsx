import React from "react";
import circlePics from "../../assets/cards/circlepics.png";

type cardItemsProps = {
  image: string;
  title: string;
  subTitle: string;
  img1: string;
  img2: string;
};

const CardItems = ({ image, title, subTitle, img1, img2 }: cardItemsProps) => {
  return (
    <>
      <div className="p-4 lg:w-1/3">
        <div className="border-dashed border-2 mx-auto p-2 bg-white relative max-w-sm rounded-2xl max-w-xs transition duration-2000 ease-in-out hover:scale-105">
            <div className="">
            <img className="rounded-xl  " src={image} alt={title} />
            </div>
          
          <div className="flex justify-between items-center">
            <div>
              <h1 className="mt-5 text-2xl font-semibold">{title}</h1>
              <p className="mt-2">{subTitle}</p>
            </div>
            <div>
              <img src={circlePics} alt="circlePics" />
            </div>
            <div className="flex absolute top-2 right-2 py-2 px-4 gap-2">
              <span className="text-md">
                <img src={img1} alt="Android Studio" />
              </span>
              <span className="text-md">
                <img src={img2} alt="Android Studio" />
              </span>
            </div>
          </div>
        </div>
      </div>
     
     
    </>

    
  );
};

export default CardItems;

import React from "react";


type reveiwItemsProps = {
    title: string;
    subTitle: string;
    text: string;
    image: string;
}


const ReveiwItems = ({title,subTitle,text,image}:reveiwItemsProps) => {
    return(
      
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <figure className="relative flex flex-col-reverse border-solid border-2 border-[#E5E5E5] rounded-3xl p-6 dark:bg-slate-800 dark:highlight-white/5">
              <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
                <p>
               {text}

                </p>
              </blockquote>
             <figcaption className="flex items-center space-x-4">
               <img
                  src={image}
                  alt={title}
                  className="flex-none w-14 h-14 rounded-full object-cover"
                ></img>
                <div className="flex-auto">
                  <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
                    <span className="inset-0 font-normal text-sm leading-3">{title}</span>
                    <div className="mt-0.5 text-btn-pink text-sm leading-3">{subTitle}</div>
                  </div>
                </div>
              </figcaption>
            </figure>
        </div>
        
    )

}

export default ReveiwItems;
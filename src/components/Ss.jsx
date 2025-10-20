import React from "react";

export const Ss = ({ title, imagify, description, pone, ptwo, pthree, pfour }) => {
    return (
        <div className="flex flex-col bg-white w-full h-auto md:h-[700px] items-start rounded-3xl overflow-hidden justify-between"
             style={{
                 boxShadow: `
                     0  10px 30px rgba(37, 99, 235, 0.2),
                     0 20px 60px rgba(37, 99, 235, 0.15),
                     0 30px 90px rgba(37, 99, 235, 0.1),
                     0 -5px 20px rgba(37, 99, 235, 0.05)
                 `
             }}>
            <div className="flex flex-col w-full">
                <img src={imagify} alt={title} className="w-full h-48 md:h-64 object-cover"/>
                <h3 className="text-start text-xl md:text-3xl text-black p-4 md:p-5 font-semibold">{title}</h3>
                <p className="px-4 md:pl-5 pt-2 text-sm md:text-lg text-start text-gray-500 line-clamp-3">{description}</p>
            </div>  
            
            <div className="w-full">
                <div className="flex flex-wrap p-4 md:p-5 gap-2 md:gap-4">
                    <p className="font-semibold text-xs md:text-base text-blue-800 bg-blue-300 px-3 md:px-4 py-1 text-center rounded-full">{pone}</p>
                    <p className="font-semibold text-xs md:text-base text-blue-800 bg-blue-300 px-3 md:px-4 py-1 text-center rounded-full">{ptwo}</p>
                    <p className="font-semibold text-xs md:text-base text-blue-800 bg-blue-300 px-3 md:px-4 py-1 text-center rounded-full">{pthree}</p>
                    <p className="font-semibold text-xs md:text-base text-blue-800 bg-blue-300 px-3 md:px-4 py-1 text-center rounded-full">{pfour}</p>
                </div>

                <div className="p-4 md:p-5 flex gap-3 md:gap-4">
                    <button className="text-white bg-blue-500 rounded-md flex-1 h-10 md:h-12 text-sm md:text-base hover:bg-blue-600 transition-colors">Live Demo</button>
                    <button className="text-black bg-gray-200 rounded-md flex-1 h-10 md:h-12 text-sm md:text-base hover:bg-gray-300 transition-colors">View Code</button>
                </div>
            </div>
        </div>
    );
};

export default Ss;
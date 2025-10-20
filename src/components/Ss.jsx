import React from "react";

export const Ss = ({ title, imagify, description, pone, ptwo, pthree, pfour }) => {
    return (
        <div className="flex flex-col bg-white w-1/2 h-[700px] items-start rounded-3xl overflow-hidden justify-between"
             style={{
                 boxShadow: `
                     0  10px 30px rgba(37, 99, 235, 0.2),
                     0 20px 60px rgba(37, 99, 235, 0.15),
                     0 30px 90px rgba(37, 99, 235, 0.1),
                     0 -5px 20px rgba(37, 99, 235, 0.05)
                 `
             }}>
            <div className="flex flex-col">
                <img src={imagify} alt={title} className="w-full h-64 object-cover"/>
                <h3 className="text-start text-3xl text-black p-5 font-semibold">{title}</h3>
                <p className="pl-5 pt-2 text-lg text-start text-gray-500 line-clamp-3">{description}</p>
            </div>  
            
            <div className="w-full">
                <div className="flex flex-wrap p-5 gap-4">
                    <p className="font-semibold text-blue-800 bg-blue-300 px-4 py-1 text-center rounded-full">{pone}</p>
                    <p className="font-semibold text-blue-800 bg-blue-300 px-4 py-1 text-center rounded-full">{ptwo}</p>
                    <p className="font-semibold text-blue-800 bg-blue-300 px-4 py-1 text-center rounded-full">{pthree}</p>
                    <p className="font-semibold text-blue-800 bg-blue-300 px-4 py-1 text-center rounded-full">{pfour}</p>
                </div>

                <div className="p-5 flex gap-4">
                    <button className="text-white bg-blue-500 rounded-md flex-1 h-10 hover:bg-blue-600 transition-colors">Live Demo</button>
                    <button className="text-black bg-gray-200 rounded-md flex-1 h-10 hover:bg-gray-300 transition-colors">View Code</button>
                </div>
            </div>
        </div>
    );
}

export default Ss;
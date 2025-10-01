import React from "react";

export const Card = ({ icon, title }) => {
    return (
        <div className="flex items-center justify-center flex-row gap-2 rounded-lg bg-gray-100 w-80 h-30">
            <img src={icon} alt=""  className="items-center w-8 h-8"/>
            <h3 className="font-semibold text-[#2563eb] text-center text-xl">{title}</h3>
        </div>
    );
}

export default Card;
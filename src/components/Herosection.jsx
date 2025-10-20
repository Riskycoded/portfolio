import React, { useState, useEffect } from "react";
import Headboy from '../assets/headboy.jpg'

function HeroSection() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div id="herosection" className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 bg-blue-800 min-h-[400px] animate-pulse">
                {/* Left Column - Text Content Skeleton */}
                <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                    <div className="h-8 md:h-12 bg-gray-300 rounded w-1/2 md:w-1/3"></div>
                    <div className="h-8 md:h-12 bg-gray-300 rounded w-full md:w-2/3"></div>
                    <div className="space-y-2">
                        <div className="h-3 md:h-4 bg-gray-300 rounded w-full"></div>
                        <div className="h-3 md:h-4 bg-gray-300 rounded w-5/6"></div>
                    </div>
                    <div className="flex gap-3 md:gap-4">
                        <div className="h-10 bg-gray-300 rounded w-24 md:w-28"></div>
                        <div className="h-10 bg-gray-300 rounded w-28 md:w-32"></div>
                    </div>
                </div>

                {/* Right Column - Image Skeleton */}
                <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center md:justify-end">
                    <div className="w-40 h-40 md:w-full md:h-64 bg-gray-300 rounded-full md:rounded-lg"></div>
                </div>
            </div>
        );
    }

    return (
        <div id="herosection" className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 pt-12 md:pt-20 bg-blue-800 text-white min-h-[500px] md:min-h-[400px]">
            {/* Left Column - Text Content */}
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold">Hello!</h1>
                <h1 className="text-4xl md:text-6xl font-bold">
                    I'm Adebanjo <span className="text-yellow-300">Michael</span> Adetunji
                </h1>
                <p className="text-base md:text-xl text-gray-300 md:text-gray-400">
                    Frontend Developer & Digital Creative<br />
                    Building modern web applications with React and JavaScript | University of Ilorin graduate with 20+ successful Fiverr projects
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                    <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=adebanjom16@gmail.com&su=Hello, Michael!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-600 cursor-pointer text-white px-6 py-3 rounded-md text-base md:text-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
                    >
                        Email me
                    </a>
                    <button className="bg-transparent text-white border cursor-pointer border-white px-6 py-3 rounded-md text-base md:text-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                        Download CV
                    </button>
                </div>
            </div>

            {/* Right Column - Image */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center md:justify-end animate-mobile-fade md:animate-flip-in-right">
                <img 
                    src={Headboy} 
                    alt="Profile" 
                    className="w-40 h-40 md:w-full md:h-auto rounded-full md:rounded-lg object-cover shadow-2xl"
                />
            </div>

            <style jsx>{`
                @keyframes mobile-fade {
                    0% {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                @keyframes flip-in-right {
                    0% {
                        transform: perspective(1000px) rotateY(90deg);
                        opacity: 0;
                    }
                    100% {
                        transform: perspective(1000px) rotateY(0deg);
                        opacity: 1;
                    }
                }
                
                .animate-mobile-fade {
                    animation: mobile-fade 0.6s ease-out forwards;
                }
                
                @media (min-width: 768px) {
                    .animate-flip-in-right {
                        animation: flip-in-right 0.6s ease-out 0.2s forwards;
                    }
                }
            `}</style>
        </div>
    );
}

export default HeroSection;
import React, { useState, useEffect } from "react";

function HeroSection() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 1 second delay
        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-between p-12 bg-blue-800 min-h-[400px] animate-pulse">
                {/* Left Column - Text Content Skeleton */}
                <div className="w-1/2 space-y-6">
                    <div className="h-12 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-12 bg-gray-300 rounded w-2/3"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-full"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    </div>
                    <div className="space-x-4">
                        <div className="h-10 bg-gray-300 rounded w-24 inline-block"></div>
                        <div className="h-10 bg-gray-300 rounded w-32 inline-block"></div>
                    </div>
                </div>

                {/* Right Column - Image Skeleton */}
                <div className="w-1/2">
                    <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-between p-12 pt-20 bg-blue-800 text-white min-h-[400px]">
            {/* Left Column - Text Content */}
            <div className="w-1/2 space-y-6">
                <h1 className="text-6xl font-extrabold">Hello!</h1>
                <h1 className="text-6xl font-bold">I'm Adebanjo <span className="text-yellow-300">Michael</span> Adetunji</h1>
                <p className="text-xl text-gray-400">
                    Frontend Developer & Digital Creative<br />
                    Building modern web applications with React and JavaScript | University of Ilorin graduate with 20+ successful Fiverr projects
                </p>
                <div className="space-x-4">
                    <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=adebanjom16@gmail.com&su=Hello, Michael!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-600 cursor-pointer text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700"
                    >
                        Email me
                    </a>
                    <button className="bg-transparent text-white border cursor-pointer border-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-800">
                        Download CV
                    </button>
                </div>
            </div>

            {/* Right Column - Image */}
            <div className="w-1/2 animate-slide-in-right">
                <img 
                    src="./src/assets/headboy.jpg" 
                    alt="Profile" 
                    className="w-full h-auto rounded-lg animate-flip-in-right"
                />
            </div>

            <style jsx>{`
                @keyframes slide-in-left {
                    0% {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                .animate-slide-in-left {
                    animation: slide-in-left 0.5s ease-out forwards;
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
                .animate-flip-in-right {
                    animation: fade-in-right 0.6s ease-out 0.2s forwards;
                }
            `}</style>
        </div>
    );
}

export default HeroSection;
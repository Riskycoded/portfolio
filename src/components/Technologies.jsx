import React, { useState, useEffect } from "react";
import Card from "./Cards";
import Reacty from '../assets/react.svg'
import Javascriptimage from '../assets/javascriptimage.jfif'
import Typescriptimage from '../assets/typescriptimage.png'
import TailwindImage from '../assets/tailwindimage.png'
import Htmlimage from '../assets/htmlimage.png'
import Cssimage from '../assets/cssimage.png'
import Gitimage from '../assets/gitimage.png'
import Githubimage from '../assets/githubimage.png'
import Seoimage from '../assets/seoimage.png'
import Viteimage from '../assets/viteimage.jfif'

function Technologies() {
    const [isLoading, setIsLoading] = useState(true);
    
    const technologies = [
        { icon: {Reacty}, title: "React" },
        { icon: {Javascriptimage}, title: "JavaScript" },
        { icon: {Typescriptimage}, title: "TypeScript" },
        { icon: {TailwindImage}, title: "Tailwind CSS" },
        { icon: {Htmlimage}, title: "HTML5" },
        { icon: {Cssimage}, title: "CSS3" },
        { icon: {Gitimage}, title: "Git" },
        { icon: {Githubimage}, title: "GitHub" },
        { icon: {Seoimage}, title: "Seo Optimization" },
        { icon: {Viteimage}, title: "Vite" }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-white p-10">
            <div className="text-center pt-20"> 
                <strong className="pt-20 text-center text-4xl">Technologies & Skills</strong>
            </div>

            <div className="rounded-md flex flex-wrap justify-center items-center gap-8 p-5">
                {isLoading ? (
                    Array(10).fill(0).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))
                ) : (
                    technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="animate-slide-in-right"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <Card {...tech} />
                        </div>
                    ))
                )}
            </div>

            <style jsx>{`
                @keyframes slide-in-right {
                    0% {
                        transform: translateX(100%) scale(0.95);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0) scale(1);
                        opacity: 1;
                    }
                }
                .animate-slide-in-right {
                    animation: slide-in-right 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
}

// Skeleton component
function SkeletonCard() {
    return (
        <div className="w-40 h-40 bg-gray-200 rounded-lg animate-pulse flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div className="w-24 h-4 bg-gray-300 rounded"></div>
        </div>
    );
}

export default Technologies;
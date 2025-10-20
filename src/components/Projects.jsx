import React from "react";
import Ss from "./Ss";
import Busii from '../assets/busii.jpg'
import Agency from '../assets/agency.jpg'
import Photoo from '../assets/photoo.jpg'
import Dashyy from '../assets/dashyy.jpg'

function Projects() {
    const Busii = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800";
    const Agency = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800";
    const Photoo = "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800";
    const Dashyy = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800";

    const projects = [
        { title: "Business Landing Page with Auth", imagify: Busii, description: "Modern business website featuring user authentication, responsive design, and professional UI built for client acquisition and lead generation.", pone: "React", ptwo: "Tailwind CSS", pthree: "Javascript", pfour: "Authentication" },
        { title: "Digital Marketing Portfolio Site", imagify: Agency, description: "Professional portfolio website showcasing digital marketing services with client testimonials, service packages, and contact forms built from Fiverr experience.", pone: "React", ptwo: "Vite", pthree: "Tailwind CSS", pfour: "Responsive Design" },
        { title: "Photography Showcase App", imagify: Photoo, description: "Interactive web application displaying photography work with image galleries, filtering capabilities, and user interaction features combining my passion for photography with web development.", pone: "React", ptwo: "Javascript", pthree: "CSS 3", pfour: "Image Optimization" },
        { title: "Network Dashboard", imagify: Dashyy, description: "Personal dashboard for tracking network marketing activities, team performance, and goal achievement with data visualization and progress tracking.", pone: "React", ptwo: "Charts.js", pthree: "Tailwind CSS", pfour: "App Integration" }
    ];

    return (
        <div id="projects" className="bg-gray-100 pb-16">
            <div className="text-center pt-12 md:pt-20 pb-8 md:pb-10 px-4">
                <strong className="text-2xl md:text-3xl lg:text-4xl">Featured Projects</strong>
            </div>

            {/* Mobile: Horizontal scroll, Desktop: Grid */}
            <div className="md:hidden overflow-x-auto scrollbar-hide px-4 pb-4">
                <div className="flex gap-6 snap-x snap-mandatory">
                    {projects.map((project, index) => (
                        <div key={index} className="min-w-[85vw] snap-center">
                            <Ss {...project} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 lg:px-10 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <Ss key={index} {...project} />
                ))}
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}

export default Projects;
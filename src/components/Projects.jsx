import React from "react";
import Ss from "./ss";

function Projects() {
  const projects = [
    { title: "Business Landing Page with Auth", imagify: "./src/assets/busii.jpg", description: "Modern business website featuring user authentication, responsive design, and professional UI built for client acquisition and lead generation.", pone: "React", ptwo: "Tailwind CSS", pthree: "Javascript", pfour: "Authentication" },
    { title: "Digital Marketing Portfolio Site", imagify: "./src/assets/agency.jpg", description: "Professional portfolio website showcasing digital marketing services with client testimonials, service packages, and contact forms built from Fiverr experience.", pone: "React", ptwo: "Vite", pthree: "Tailwind CSS", pfour: "Responsive Design" },
    { title: "Photography Showcase App", imagify: "./src/assets/photoo.jpg", description: "Interactive web application displaying photography work with image galleries, filtering capabilities, and user interaction features combining my passion for photography with web development.", pone: "React", ptwo: "Javascript", pthree: "CSS 3", pfour: "Image Optimization" },
    { title: "Network Marketing Dashboard", imagify: "./src/assets/dashyy.jpg", description: "Personal dashboard for tracking network marketing activities, team performance, and goal achievement with data visualization and progress tracking.", pone: "React", ptwo: "Charts.js", pthree: "Tailwind CSS", pfour: "App Integration" }
];

    return (
        <div id="projects" className="bg-gray-100">
            <div className="text-center pt-20">
                <strong className="text-center text-3xl">Featured Projects</strong>
            </div>

            <div className="flex flex-row justify-center items-start gap-10 p-5">
            
            {projects.map((project, index) => (
                <Ss key={index} {...project} />
            ))}
                </div>
        </div>
    );
}

export default Projects;
import React from "react";
import Profile from '../assets/profilee.jpg'

function Aboutme() {
    return (
        <div id="aboutme" className="bg-blue-100 pt-10">
            <div>
                <h1 className="text-center text-3xl md:text-5xl font-bold">About Me</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-center p-6 md:p-10">
                <div className="flex justify-center">
                    <img src={Profile} alt="Profile" className="w-40 h-40 md:w-full md:h-full object-cover rounded-full md:rounded-sm " />
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-base md:text-2xl leading-6 md:leading-8">
                        I'm a passionate frontend developer who recently completed an intensive web development course. I love creating clean, responsive websites that provide excellent user experiences.
                        <br /> <br />
                        Before diving into development, I gained valuable experience working with clients on Fiverr, which taught me how to understand requirements, meet deadlines, and deliver quality work that exceeds expectations.
                        <br /> <br />
                        I'm proficient in HTML, CSS, JavaScript, and modern frameworks like React. I have experience building authentication systems, responsive designs, and interactive web applications.
                        <br /> <br />
                        I'm actively seeking opportunities to join a dynamic team where I can contribute my skills and continue growing as a developer.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;
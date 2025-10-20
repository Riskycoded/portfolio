import React from "react";
import Profile from '../assets/profilee.jpg'

function Aboutme() {
    return (
        <div id="aboutme" className="bg-blue-100 pt-30">
            <div>
                <h1 className="text-center text-5xl font-bold">About Me</h1>
            </div>

            <div className="flex flex-row gap-10 justify-center p-10">
            <div>
                <img src={Profile} alt="" />
            </div>
             <div className="flex items-center justify-center min-h-screen">
                <p className="text-2xl">I'm a passionate frontend developer who recently completed an intensive web development course. I love creating clean, responsive websites that provide excellent user experiences.

                        Before diving into development, I gained valuable experience working with clients on Fiverr, which taught me how to understand requirements, meet deadlines, and deliver quality work that exceeds expectations.
                        <br /> <br /> <br />

I'm proficient in HTML, CSS, JavaScript, and modern frameworks like React. I have experience building authentication systems, responsive designs, and interactive web applications.

                        I'm actively seeking opportunities to join a dynamic team where I can contribute my skills and continue growing as a developer.</p></div>
                </div>

            
        </div>
    );
}

export default Aboutme;
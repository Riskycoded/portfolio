import React from "react";

function Work() {
    
    return (
        <div id="worky" className="flex justify-between bg-blue-800">

            <div>
                <div className="p-10 w-2/3 items-center">
                    <h1 className="text-8xl font-bold text-white pt-10">Let's Work Together</h1>
                    <p className="pt-20 text-2xl text-blue-50">I'm always interested in new opportunities and exciting projects</p>
                </div>

                <div className="p-10 space-x-10 text-xl text-yellow-300 ">
                    <a href="#" className="cursor-pointer hover:text-white" >Email</a>
                    <a href="#" className="cursor-pointer hover:text-white ">Linkedin</a>
                    <a href="#" className="cursor-pointer hover:text-white ">Twitter</a>
                    <a href="#" className="cursor-pointer hover:text-white ">Github</a>
                </div>
            </div>
            
            <div className="p-10 w-1/3">
                <form action="" className="flex flex-col gap-10 text-xl items-start text-start text-white">
                    <input type="text" name="Name" id="" placeholder="Your Name:" className="bg-transparent border-b border-white outline-none pb-2" />
                    <input type="email" name="Email" id="" placeholder="Your email address:" className="bg-transparent border-b border-white outline-none pb-2" />
                    <input type="text" name="Project" id="" placeholder="Tell about the project:" className="bg-transparent border-b border-white outline-none pb-2" />
                    <button className="bg-white text-blue-800 px-2 py-3 w-25 flex rounded hover:bg-yellow-300">Send <span className=" pt-1"><img src="./src/assets/arrow-right.png" alt="" /></span></button>
                </form>
            </div>
        </div>
    )
}

export default Work;

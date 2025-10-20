import React from "react";

function Work() {
    
    return (
        <div id="worky" className="flex flex-col md:flex-row justify-between bg-blue-800">

            <div className="w-full md:w-2/3">
                <div className="p-6 md:p-10 items-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white pt-6 md:pt-10">Let's Work Together</h1>
                    <p className="pt-8 md:pt-20 text-lg sm:text-xl md:text-2xl text-blue-50">I'm always interested in new opportunities and exciting projects</p>
                </div>

                <div className="p-6 md:p-10 flex flex-wrap gap-4 md:space-x-10 md:gap-0 text-base sm:text-lg md:text-xl text-yellow-300">
                    <a href="#" className="cursor-pointer hover:text-white">Email</a>
                    <a href="#" className="cursor-pointer hover:text-white">Linkedin</a>
                    <a href="#" className="cursor-pointer hover:text-white">Twitter</a>
                    <a href="#" className="cursor-pointer hover:text-white">Github</a>
                </div>
            </div>
            
            <div className="p-6 md:p-10 w-full md:w-1/3">
                <div className="flex flex-col gap-6 md:gap-10 text-lg md:text-xl items-start text-start text-white">
                    <input 
                        type="text" 
                        name="Name" 
                        placeholder="Your Name:" 
                        className="w-full bg-transparent border-b border-white outline-none pb-2 placeholder-blue-100" 
                    />
                    <input 
                        type="email" 
                        name="Email" 
                        placeholder="Your email address:" 
                        className="w-full bg-transparent border-b border-white outline-none pb-2 placeholder-blue-100" 
                    />
                    <input 
                        type="text" 
                        name="Project" 
                        placeholder="Tell about the project:" 
                        className="w-full bg-transparent border-b border-white outline-none pb-2 placeholder-blue-100" 
                    />
                    <button className="bg-white text-blue-800 px-4 md:px-2 py-3 w-auto md:w-25 flex items-center gap-2 rounded hover:bg-yellow-300 transition-colors">
                        Send 
                        <span>
                            <img src="./src/assets/arrow-right.png" alt="" className="w-5 h-5" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Work;
import React, { useState, useEffect, useRef } from "react";

function Years() {
    const [counts, setCounts] = useState({ experience: 0, projects: 0, satisfaction: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            const duration = 2000;
            const steps = 100;
            const incrementTime = duration / steps;

            const targetCounts = { experience: 5, projects: 20, satisfaction: 100 };
            const increments = {
                experience: targetCounts.experience / steps,
                projects: targetCounts.projects / steps,
                satisfaction: targetCounts.satisfaction / steps,
            };

            let currentStep = 0;
            const timer = setInterval(() => {
                if (currentStep >= steps) {
                    setCounts(targetCounts);
                    clearInterval(timer);
                    return;
                }
                setCounts((prev) => ({
                    experience: Math.min(Math.round(prev.experience + increments.experience), targetCounts.experience),
                    projects: Math.min(Math.round(prev.projects + increments.projects), targetCounts.projects),
                    satisfaction: Math.min(Math.round(prev.satisfaction + increments.satisfaction), targetCounts.satisfaction),
                }));
                currentStep++;
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isVisible]);

    return (
        <div className="bg-blue-800 py-10 px-4" ref={sectionRef}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-center max-w-6xl mx-auto">
                <div className="text-center">
                    <h1 className="text-2xl md:text-3xl text-white">
                        <span className="text-4xl md:text-5xl font-extrabold">{counts.experience}</span> <span>+</span>
                        <br />
                        Years Experience
                    </h1>
                </div>

                <div className="text-center">
                    <h1 className="text-2xl md:text-3xl text-white">
                        <span className="text-4xl md:text-5xl font-extrabold">{counts.projects}</span> <span>+</span>
                        <br />
                        Projects Done
                    </h1>
                </div>

                <div className="text-center">
                    <h1 className="text-2xl md:text-3xl text-white">
                        <span className="text-4xl md:text-5xl font-extrabold">{counts.satisfaction}</span> <span>%</span>
                        <br />
                        Client Satisfaction
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Years;
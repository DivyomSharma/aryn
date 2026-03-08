"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProcessSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const steps = [
        { title: "Discovery", desc: "Understanding the brand, its goals, and audience." },
        { title: "Concept", desc: "Formulating paths and visual concepts." },
        { title: "Design", desc: "Crafting the visual language and systems." },
        { title: "Development", desc: "Bringing designs to life with code and motion." },
        { title: "Launch", desc: "Deploying and scaling the final experience." },
    ];

    return (
        <section className="py-32 px-6 max-w-5xl mx-auto relative" id="process" ref={containerRef}>
            <div className="text-center mb-24">
                <p className="text-accent uppercase tracking-widest font-semibold text-sm mb-4">
                    How We Work
                </p>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                    Our Process
                </h2>
            </div>

            <div className="relative">
                {/* The Animated Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
                    <motion.div
                        className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent to-[#b895ff]"
                        style={{ height: "100%", scaleY: pathLength, originY: 0 }}
                    />
                </div>

                {/* The Steps */}
                <div className="relative z-10 space-y-24">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Text Content */}
                                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                                    <h3 className="text-2xl md:text-4xl font-bold mb-4 flex items-center gap-4 justify-start md:justify-end">
                                        {/* Node Dot for Mobile */}
                                        <div className="w-4 h-4 rounded-full bg-black border-2 border-accent md:hidden absolute left-4 -translate-x-1/2 z-20"></div>
                                        <span className="text-white/20 text-6xl font-black absolute opacity-20 -z-10 -translate-y-4 right-8">{`0${index + 1}`}</span>
                                        {step.title}
                                    </h3>
                                    <p className="text-white/60 text-lg">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Node for Desktop */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-accent z-20">
                                    <div className="w-full h-full bg-accent/50 rounded-full animate-ping"></div>
                                </div>

                                {/* Empty Spacer */}
                                <div className="hidden md:block w-1/2"></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

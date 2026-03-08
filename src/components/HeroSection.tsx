"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center p-6 pt-32 text-center" id="home">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8 relative"
            >
                {/* Subtle floating animation to the logo */}
                <motion.h1
                    className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-none"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    ARYN<sup className="text-accent text-5xl md:text-7xl top-[-0.5em] md:top-[-0.6em]">e</sup>
                </motion.h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <h2 className="text-2xl md:text-4xl font-semibold mb-6 max-w-2xl text-white/90">
                    Designing the Visual Language of the Future.
                </h2>

                <p className="text-white/60 text-lg md:text-xl md:tracking-wide uppercase font-medium max-w-xl mx-auto flex flex-wrap justify-center gap-x-4 gap-y-2 mb-12">
                    <span>Creative Systems</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Digital Experiences</span>
                    <span className="hidden sm:inline">•</span>
                    <span>AI Visuals</span>
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#work" data-cursorable>
                        <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
                            <span className="relative z-10">View Work</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </a>
                    <a href="#contact" data-cursorable>
                        <button className="group relative px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full overflow-hidden transition-all hover:border-white/50 hover:bg-white/5 active:scale-95">
                            Start a Project
                        </button>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

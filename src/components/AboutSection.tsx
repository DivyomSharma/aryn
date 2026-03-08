"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    const text = "ARYN is a creative design studio focused on building visual systems, digital experiences, and AI-powered creative workflows. As part of Plot Armour Studio, we explore the intersection of design, technology, and storytelling.";
    const words = text.split(" ");

    return (
        <section className="py-40 px-6 bg-black relative overflow-hidden" id="about">
            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.p
                    className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-snug lg:leading-tight"
                >
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0.1, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.05,
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="inline-block mr-[0.25em]"
                        >
                            {word === "Plot" || word === "Armour" || word === "Studio," ? (
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">{word}</span>
                            ) : word === "design," || word === "technology," || word === "storytelling." ? (
                                <span className="text-accent">{word}</span>
                            ) : (
                                word
                            )}
                        </motion.span>
                    ))}
                </motion.p>
            </div>
        </section>
    );
}

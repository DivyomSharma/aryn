"use client";

import { motion } from "framer-motion";
import { Mail, Calendar } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="py-40 px-6 bg-[#050505] border-t border-white/5 relative overflow-hidden" id="contact">
            {/* Grid Pattern Background */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }}
            />

            {/* Glow */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter mb-6">
                        Start a <br className="md:hidden" />Project
                    </h2>
                    <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto">
                        Ready to build the future? Let&apos;s talk about your next big idea.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <button
                        className="group relative px-8 py-5 w-full sm:w-auto bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] active:scale-95 flex items-center justify-center gap-3 text-lg"
                        data-cursorable
                    >
                        <Mail className="w-5 h-5" />
                        <span className="relative z-10">Email Us</span>
                    </button>

                    <button
                        className="group relative px-8 py-5 w-full sm:w-auto bg-black border border-white/20 text-white font-semibold rounded-full overflow-hidden transition-all hover:border-accent hover:bg-accent/10 active:scale-95 flex items-center justify-center gap-3 text-lg"
                        data-cursorable
                    >
                        <Calendar className="w-5 h-5" />
                        <span className="relative z-10">Schedule Call</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

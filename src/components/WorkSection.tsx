"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function WorkSection() {
    const projects = [
        {
            title: "Neon Echo",
            category: "Creative Web Experiences",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
            colSpan: "col-span-1 md:col-span-2",
            aspect: "aspect-[16/9] md:aspect-[21/9]",
        },
        {
            title: "Synthetica",
            category: "AI Generated Visual Campaigns",
            image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop",
            colSpan: "col-span-1 md:col-span-1",
            aspect: "aspect-square",
        },
        {
            title: "Oasis",
            category: "Visual Systems",
            image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2670&auto=format&fit=crop",
            colSpan: "col-span-1 md:col-span-1",
            aspect: "aspect-square",
        },
        {
            title: "Aura",
            category: "Brand Identity",
            image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop",
            colSpan: "col-span-1 md:col-span-2",
            aspect: "aspect-[16/9] md:aspect-[21/9]",
        },
        {
            title: "Flux",
            category: "Product Design",
            image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2670&auto=format&fit=crop",
            colSpan: "col-span-1 md:col-span-3",
            aspect: "aspect-[16/9] md:aspect-[21/9]",
        },
    ];

    return (
        <section className="py-32 px-6 max-w-7xl mx-auto" id="work">
            <div className="mb-20">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-accent uppercase tracking-widest font-semibold text-sm mb-4"
                >
                    Selected Work
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold tracking-tighter"
                >
                    Featured Projects
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.colSpan} ${project.aspect}`}
                        data-cursorable
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500 rounded-2xl z-10 mix-blend-overlay"></div>

                        {/* Image Zoom */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                            style={{ backgroundImage: `url(${project.image})` }}
                        ></div>

                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>

                        {/* Text Content */}
                        <div className="absolute bottom-0 left-0 p-8 z-20 w-full flex justify-between items-end">
                            <div>
                                <p className="text-white/70 text-sm font-medium uppercase tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    {project.category}
                                </p>
                                <h3 className="text-2xl md:text-4xl font-semibold text-white transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                                    {project.title}
                                </h3>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                <ArrowUpRight className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

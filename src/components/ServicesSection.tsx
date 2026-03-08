"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Palette,
    Compass,
    Smartphone,
    Sparkles,
    MousePointer2
} from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only apply horizontal scroll on desktop
        const ctx = gsap.context(() => {
            const isDesktop = window.matchMedia("(min-width: 768px)").matches;

            if (isDesktop && scrollWrapperRef.current && containerRef.current) {
                const wrapperWidth = scrollWrapperRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;

                gsap.to(scrollWrapperRef.current, {
                    x: -(wrapperWidth - viewportWidth + 100), // scroll enough to see the last card
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: () => `+=${wrapperWidth}`,
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                    }
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const services = [
        {
            icon: <Palette className="w-10 h-10 mb-6 text-accent" />,
            title: "Brand Design",
            description: "Crafting iconic visual identities that resonate and stand the test of time."
        },
        {
            icon: <Compass className="w-10 h-10 mb-6 text-accent" />,
            title: "Creative Direction",
            description: "Guiding the creative vision to ensure cohesive and impactful storytelling."
        },
        {
            icon: <Smartphone className="w-10 h-10 mb-6 text-accent" />,
            title: "Digital Product Design",
            description: "Designing intuitive and engaging interfaces for web and mobile applications."
        },
        {
            icon: <Sparkles className="w-10 h-10 mb-6 text-accent" />,
            title: "AI Visual Systems",
            description: "Leveraging artificial intelligence to generate unique, scalable visual assets."
        },
        {
            icon: <MousePointer2 className="w-10 h-10 mb-6 text-accent" />,
            title: "Interactive Web Design",
            description: "Building immersive web experiences with advanced motion and interactivity."
        }
    ];

    return (
        <section
            ref={containerRef}
            className="md:h-screen w-full flex flex-col md:flex-row items-center bg-[#0a0514] overflow-hidden py-24 md:py-0 relative z-20"
            id="services"
        >
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

            {/* Title Block - Absolute on desktop to act as a mask over scrolling cards */}
            <div className="md:absolute top-0 left-0 bottom-0 md:w-[35vw] lg:w-[30vw] bg-[#0a0514] z-20 flex flex-col justify-center px-6 md:pl-24 md:pr-12 mb-12 md:mb-0 w-full relative">
                <p className="text-accent uppercase tracking-widest font-semibold text-sm mb-4">
                    Our Expertise
                </p>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 relative z-10">
                    Services
                </h2>
                <p className="text-white/60 text-lg max-w-sm relative z-10">
                    We operate at the intersection of design, technology, and storytelling to build the future.
                </p>

                {/* Subtle right edge gradient for blending on desktop */}
                <div className="hidden md:block absolute top-0 bottom-0 right-[-100px] w-[100px] bg-gradient-to-r from-[#0a0514] to-transparent pointer-events-none"></div>
            </div>

            {/* Scroll Wrapper */}
            <div className="w-full relative z-10 flex items-center h-full">
                <div
                    ref={scrollWrapperRef}
                    className="flex flex-col md:flex-row gap-6 md:gap-8 w-full md:w-auto px-6 md:pl-[40vw] lg:pl-[35vw] md:pr-24"
                >
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group w-full md:w-[400px] shrink-0 bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:border-accent/50 transition-all duration-500 cursor-pointer overflow-hidden relative"
                            data-cursorable
                        >
                            {/* Subtle hover background glow */}
                            <div className="absolute top-0 right-0 -m-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 origin-bottom-left">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-white/50 text-lg leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

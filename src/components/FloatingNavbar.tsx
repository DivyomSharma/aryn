"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

export default function FloatingNavbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const links = [
        { name: "Work", href: "#work" },
        { name: "Services", href: "#services" },
        { name: "Process", href: "#process" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-150%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-6 inset-x-0 mx-auto max-w-5xl z-50 flex items-center justify-between px-6 py-4 rounded-full border transition-colors duration-500 ${isScrolled
                    ? "bg-black/40 border-white/10 backdrop-blur-md"
                    : "bg-transparent border-transparent"
                }`}
        >
            <Link href="/" className="text-xl font-bold tracking-tighter" data-cursorable>
                ARYN<sup className="text-accent ml-0.5 text-xs">e</sup>
            </Link>

            <div className="hidden md:flex items-center gap-8">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                        data-cursorable
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button - simple version for now */}
            <button className="md:hidden flex flex-col gap-1.5" data-cursorable>
                <span className="w-6 h-0.5 bg-white block rounded-full"></span>
                <span className="w-4 h-0.5 bg-white block rounded-full ml-auto"></span>
            </button>
        </motion.nav>
    );
}

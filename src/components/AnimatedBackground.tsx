"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-[#110826]"></div>

            {/* Animated Capsules */}
            <motion.div
                className="absolute left-[10%] top-[-20%] w-[120px] h-[60vh] rounded-full bg-white/5 blur-xl backdrop-blur-3xl border border-white/10"
                animate={{
                    y: ["0%", "20%", "0%"],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    boxShadow: "0 0 120px rgba(123, 62, 255, 0.15)",
                }}
            />

            <motion.div
                className="absolute right-[20%] top-[30%] w-[180px] h-[50vh] rounded-full bg-white/5 blur-2xl backdrop-blur-md border border-white/5"
                animate={{
                    y: ["0%", "-15%", "0%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                style={{
                    boxShadow: "0 0 100px rgba(123, 62, 255, 0.1)",
                }}
            />

            <motion.div
                className="absolute left-[40%] top-[60%] w-[140px] h-[40vh] rounded-full bg-[#7B3EFF]/10 blur-3xl backdrop-blur-lg"
                animate={{
                    y: ["0%", "25%", "0%"],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            {/* Extra subtle grid overlay to add texture */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }}
            ></div>
        </div>
    );
}

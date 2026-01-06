"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1"
                >
                    <h2 className="text-cyan-400 text-xl font-medium mb-4">
                        Frontend Developer
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Building Digital <span className="text-gradient">Experiences</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg">
                        I craft accessible, pixel-perfect, and performant web experiences
                        that are visually stunning and user-friendly.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 rounded-lg transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 md:order-2 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-75 animate-pulse" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 glass">
                            <Image
                                src="/san2.jpg"
                                alt="Profile"
                                fill
                                className="object-cover object-[center_65%] md:object-center"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

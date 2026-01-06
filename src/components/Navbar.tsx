"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="glass-nav rounded-full px-6 py-3 flex items-center justify-between md:gap-8 min-w-[300px] md:min-w-fit"
            >
                {/* Logo Bulatan dengan Foto */}
                <Link href="/" className="relative group mr-4 md:mr-0">
                    <div className="relative w-12 h-12 md:w-14 md:h-14">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Photo Container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-all duration-300 group-hover:scale-110">
                            <Image
                                src="/san.jpg"
                                alt="Logo"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Contact Button Desktop */}
                <Link
                    href="#contact"
                    className="hidden md:block px-4 py-1.5 text-sm font-semibold bg-cyan-500 text-black rounded-full hover:bg-cyan-400 transition-transform hover:scale-105"
                >
                    Hire Me
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 focus:outline-none ml-auto"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </motion.nav>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute top-20 right-4 w-48 p-2 rounded-xl glass bg-[#0a0a0a]/95 border border-white/10 flex flex-col space-y-2 md:hidden"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 rounded-lg hover:text-cyan-400"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="block px-4 py-2 text-sm text-center font-semibold bg-cyan-500/10 text-cyan-400 rounded-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        Hire Me
                    </Link>
                </motion.div>
            )}
        </div>
    );
}

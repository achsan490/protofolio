"use client";

import { motion, Variants } from "framer-motion";

const skills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Framer Motion",
    "Node.js",
    "Git",
    "Figma",
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        About <span className="text-cyan-400">Me</span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-12">
                        I am a passionate frontend developer with experience in React,
                        Next.js, and responsive design. I love creating websites with elegant
                        UI, smooth animations, and excellent user experience. Driven by creativity
                        and code, I transform ideas into seamless digital solutions.
                    </p>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {skills.map((skill) => (
                            <motion.div
                                key={skill}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                className="p-4 rounded-xl glass flex items-center justify-center cursor-default transition-colors duration-300"
                            >
                                <span className="text-cyan-400 font-semibold">{skill}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

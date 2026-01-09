"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Reward System",
        category: "Web Application",
        description: "A comprehensive reward management system with member tracking, transaction monitoring, and analytics dashboard.",
        color: "from-cyan-500 to-blue-500",
        link: "https://reward-system-two.vercel.app/",
        image: "/reward-system.png",
    },
    {
        id: 2,
        title: "Sabana POS",
        category: "Point of Sale",
        description: "Modern POS system for Sabana Fried Chicken restaurant with real-time order management and payment processing.",
        color: "from-orange-500 to-red-500",
        link: "https://sabana-pos.vercel.app/",
        image: "/sabana-pos.png",
    },
    {
        id: 3,
        title: "Portfolio Website",
        category: "Design & Dev",
        description: "A modern, dark-themed portfolio website with smooth animations and glassmorphism effects.",
        color: "from-purple-500 to-pink-500",
        link: "#",
        image: "/portfolio.png",
    },
    {
        id: 4,
        title: "Merah Putih Admin",
        category: "Web Application",
        description: "A comprehensive admin dashboard template featuring data visualization, project management, and analytics tools.",
        color: "from-red-600 to-rose-500",
        link: "https://sann.my.id/merahputih/admin/index.php",
        image: "/merah-putih.png",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", damping: 25, stiffness: 100 }
    },
};

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16"
                >
                    Featured <span className="text-cyan-400">Projects</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="group relative rounded-2xl overflow-hidden glass hover:border-cyan-500/50 transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-10 transition-opacity duration-300`} />
                            </div>

                            <div className="p-6">
                                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 line-clamp-2">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                                >
                                    View Project <span className="ml-2">→</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

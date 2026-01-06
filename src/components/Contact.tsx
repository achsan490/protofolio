"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Ganti dengan nomor WhatsApp Anda (format: 628xxx)
        const phoneNumber = "6282337722490";

        const text = `Halo, saya ${formData.name} (${formData.email}).\n\n${formData.message}`;
        const encodedText = encodeURIComponent(text);

        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
    };
    return (
        <section id="contact" className="py-20 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto glass p-6 md:p-12 rounded-3xl"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8">
                        Let&apos;s <span className="text-cyan-400">Connect</span>
                    </h2>
                    <p className="text-center text-gray-400 mb-10">
                        Have a project in mind or just want to say hi? Fill out the form below.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all text-white placeholder-gray-500"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all text-white placeholder-gray-500"
                            />
                        </div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows={5}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all text-white placeholder-gray-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Send Message via WhatsApp
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

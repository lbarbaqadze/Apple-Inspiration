"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
    {
        title: "Power",
        description: "Built for speed.",
        details: "Engineered with a unified memory architecture for instantaneous response. Every process happens in real-time, designed for professionals who demand zero compromises.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
        ),
    },
    {
        title: "Flow",
        description: "Seamless by design.",
        details: "Your workflow, synchronized. Seamlessly move between devices, apps, and ideas without breaking your stride. Consistency is at the core of every interaction.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" /></svg>
        ),
    },
    {
        title: "Focus",
        description: "Crafted for clarity.",
        details: "Minimalist design philosophy that removes the clutter. We focus on the essential, ensuring that nothing stands between you and your creative output.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></svg>
        ),
    },
];

export default function ModernFeatures() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="lg:py-20 py-10">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            onMouseDown={(e) => {
                                if (e.detail > 1) {
                                    e.preventDefault();
                                }
                            }}
                            className="cursor-pointer group p-10 rounded-[32px] 
                                       bg-linear-to-br from-neutral-600 to-black/90
                                       backdrop-blur-2xl border border-white/10 
                                       shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_24px_rgba(0,0,0,0.5)]
                                       hover:from-neutral-700 hover:to-neutral-800 
                                       transition-all duration-500 
                                       flex flex-col justify-between min-h-[320px]"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-8 transition-transform group-hover:scale-110">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 font-light mb-4">
                                    {feature.description}
                                </p>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="overflow-hidden border-t border-white/10 pt-4"
                                        >
                                            <p className="text-white/70 text-sm leading-relaxed">
                                                {feature.details}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white overflow-hidden w-fit">
                                <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                                    {activeIndex === index ? "Show less" : "Explore"}
                                </span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
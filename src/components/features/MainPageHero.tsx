"use client";
import { useState } from "react";
import Image from "next/image";
import ProjectModal from "@/components/ui/ProjectModal";

export default function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="w-full md:py-10 py-5 text-[#1b1b1b] overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="max-w-2xl order-2 lg:order-1">
                        <p className="text-sm font-semibold tracking-widest text-[#a1a1a6] uppercase mb-6">
                            Product Evolution / 2026
                        </p>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-tight mb-8">
                            Designed for you <br />
                            Perfected by you
                        </h1>
                        <p className="text-lg md:text-xl text-[#a1a1a6] leading-relaxed mb-10 font-normal">
                            We believe in constant iteration. Help us shape the future of our product line by sharing your insights on what to refine next.
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="cursor-pointer text-black text-lg font-medium hover:text-[#7f7f7f] transition-colors border-b border-black hover:border-[#7f7f7f] pb-1"
                        >
                            Share your feedback
                        </button>
                    </div>

                    <div className="relative h-[500px] w-full lg:order-2">
                        <Image
                            src="/mainimages/image3.jpg"
                            alt="Design Preview"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover rounded-[32px] shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
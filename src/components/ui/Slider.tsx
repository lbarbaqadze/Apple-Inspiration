"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import LearnMoreModal from '@/components/ui/LearnMoreModal'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

type Slide = {
    label: string;
    title: string;
    image: string;
    learnHref: string;
    buyHref: string;
};

const slides: Slide[] = [
    {
        label: "iPhone 17 Pro Max",
        title: "Titanium. So strong.",
        image: "/slider-images/images2.jpg",
        learnHref: "/iphone-17-pro-max",
        buyHref: "/products/iphone-17-promax-white-titanium-512gb"
    },
    {
        label: "MacBook Air",
        title: "Lightness strikes.",
        image: "/slider-images/images3.jpg",
        learnHref: "/macbook-air",
        buyHref: "/products/macbook-air-13-space-gray-256gb"
    },
];

export default function Slider() {

    const [activeProduct, setActiveProduct] = useState<Slide | null>(null);

    return (
        <div className="bg-transparent relative group w-[calc(100%-32px)] mx-auto max-w-[1550px] overflow-hidden rounded-[24px] my-4 shadow-xl">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                loop
                autoplay={{ delay: 5000 }}
                navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
                pagination={{ clickable: true, el: ".hero-dots" }}
                className="w-full h-[500px] md:h-[80vh]"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i} className="relative w-full h-full bg-black">
                        <div className="absolute inset-0 z-0">
                            <Image src={slide.image} alt={slide.label} fill className="object-cover opacity-80" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                            <p className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-[0.2em] mb-2">{slide.label}</p>
                            <h1 className="text-white text-3xl md:text-6xl font-bold mb-6 leading-tight max-w-[90%]">{slide.title}</h1>

                            <div className="flex flex-wrap justify-center gap-3">
                                <button onClick={() => setActiveProduct(slide)} className="cursor-pointer bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
                                    Learn more
                                </button>
                                <Link href={slide.buyHref} className="cursor-pointer text-white border border-white/30 px-5 py-2 rounded-full text-sm hover:bg-white/10 transition">
                                    Buy
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <LearnMoreModal
                isOpen={!!activeProduct}
                onClose={() => setActiveProduct(null)}
                product={activeProduct || { label: "" }}
            />

            <button className="cursor-pointer hero-prev absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition border border-white/10">❮</button>
            <button className="cursor-pointer hero-next absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition border border-white/10">❯</button>

            <div className="hero-dots absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2" />

            <style jsx global>{`
        .hero-dots .swiper-pagination-bullet { 
          width: 8px; height: 8px; background: rgba(255,255,255,0.4) !important; 
        }
        .hero-dots .swiper-pagination-bullet-active { 
          width: 20px; border-radius: 4px; background: white !important; 
        }
      `}</style>
        </div>
    );
}
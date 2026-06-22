"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function IpadEssentials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 5);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", checkScrollPosition);
            checkScrollPosition();
        }
        return () => scrollContainer?.removeEventListener("scroll", checkScrollPosition);
    }, []);

    const handleScroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth * 0.82 : clientWidth * 0.82;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-8 md:py-12 w-full overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">

                <div className="flex justify-between items-center mb-8 md:mb-12 pl-2">
                    <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight">
                        iPad essentials
                    </h2>

                    <div className="flex md:hidden items-center gap-3 pr-2">
                        <button
                            onClick={() => handleScroll("left")}
                            disabled={!canScrollLeft}
                            className="w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer text-neutral-800 flex items-center justify-center transition-all"
                            aria-label="Previous slide"
                        >
                            ←

                        </button>
                        <button
                            onClick={() => handleScroll("right")}
                            disabled={!canScrollRight}
                            className="w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer text-neutral-800 flex items-center justify-center transition-all"
                            aria-label="Next slide"
                        >

                            →
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex md:grid md:grid-cols-2 gap-5 md:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0"
                >

                    <Link href={"/ipad/apple-pencil"} className="bg-[#f5f5f7] rounded-[2.2rem] pt-10 pb-0 flex flex-col justify-between overflow-hidden h-[390px] sm:h-[440px] md:h-[460px] lg:h-[560px] xl:h-[640px] w-[82vw] sm:w-[360px] md:w-full shrink-0 snap-center">
                        <div className="space-y-1 text-center shrink-0 px-6">
                            <h3 className="text-2xl lg:text-3xl font-semibold text-neutral-900 tracking-tight">
                                Apple Pencil
                            </h3>
                            <p className="text-neutral-500 text-sm lg:text-base font-normal">
                                Dream it up. Jot it down.
                            </p>
                            <span
                                className="text-blue-500 hover:text-blue-700 transition inline-flex items-center gap-1 text-sm lg:text-base font-medium mt-0.5"
                            >
                                Learn more <span className="text-[10px] font-bold">&gt;</span>
                            </span>
                        </div>

                        <div className="relative w-full h-[220px] sm:h-[250px] md:h-[260px] lg:h-auto lg:flex-1 mt-4">
                            <Image
                                src="/iPad/essential1.png"
                                alt="Apple Pencil Experience"
                                fill
                                className="object-cover md:object-cover lg:object-contain object-bottom"
                                priority
                            />
                        </div>
                    </Link>

                    <Link href={"/ipad/keyboards"} className="bg-[#f5f5f7] rounded-[2.2rem] pt-0 pb-10 flex flex-col justify-between overflow-hidden h-[390px] sm:h-[440px] md:h-[460px] lg:h-[560px] xl:h-[640px] w-[82vw] sm:w-[360px] md:w-full shrink-0 snap-center">
                        <div className="relative w-full h-[220px] sm:h-[250px] md:h-[260px] lg:h-auto lg:flex-1 mb-4">
                            <Image
                                src="/iPad/essential2.png"
                                alt="Keyboards for iPad"
                                fill
                                className="object-cover md:object-cover lg:object-contain object-top"
                                priority
                            />
                        </div>

                        <div className="space-y-1 text-center shrink-0 px-6">
                            <h3 className="text-2xl lg:text-3xl font-semibold text-neutral-900 tracking-tight">
                                Keyboards for iPad
                            </h3>
                            <p className="text-neutral-500 text-sm lg:text-base font-normal">
                                Type it out. Take it with you.
                            </p>
                            <span
                                className="text-blue-500 hover:text-blue-700 transition inline-flex items-center gap-1 text-sm lg:text-base font-medium mt-0.5"
                            >
                                Learn more <span className="text-[10px] font-bold">&gt;</span>
                            </span>
                        </div>
                    </Link>

                </div>

            </div>
        </section>
    );
}
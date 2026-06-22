"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const items = [
  { title: "iPhone and Mac", description: "With iPhone Mirroring, you can view your iPhone screen on your Mac and control it without picking up your phone.", img: "/iphonepages-images/img1.png" },
  { title: "iPhone and Apple Watch", description: "Unlock your Mac automatically, ping your iPhone from your watch.", img: "/iphonepages-images/img2.png" },
  { title: "iPhone and AirPods", description: "Set up AirPods on iPhone with just a tap.", img: "/iphonepages-images/img3.png" },
];

export default function SignificantOthers() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="w-full md:py-10">
      <div className="max-w-[1600px] mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 tracking-tight text-black">Significant others</h2>
        
        <div className="w-full bg-[#f5f5f7] rounded-[40px] px-5 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between">

          <div className="w-full md:w-[40%]">
            {items.map((item, index) => (
              <div key={index} className="cursor-pointer border-b border-black/10 last:border-0">
                <button
                  onClick={() => setActiveIndex(index)}
                  className="w-full py-8 text-left"
                >
                  <span className={`cursor-pointer text-[28px] font-medium transition-colors ${activeIndex === index ? 'text-black' : 'text-gray-400'}`}>
                    {item.title}
                  </span>
                </button>

                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-[18px] text-gray-600 leading-relaxed max-w-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="w-full md:w-[50%] h-[500px] relative flex justify-end overflow-visible">
              <Image
                src={items[activeIndex].img}
                alt="Feature"
                fill
                className="object-contain object-right"
                priority
              />
          </div>
        </div>
      </div>
    </section>
  );
}
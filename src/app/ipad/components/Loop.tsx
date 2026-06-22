"use client";

import { motion } from "framer-motion";

const features = [
  "Liquid Retina XDR Display",
  "M4 Chip Power",
  "12MP Ultra Wide Camera",
  "All-Day Battery Life",
  "ProMotion Technology",
  "Apple Pencil Pro Support",
  "Supercharged Performance",
  "Ultra-thin Design",
];

export default function iPadFeatures() {
  const duplicatedFeatures = [...features, ...features];

  return (
    <section className="md:py-5 overflow-hidden md:mb-0 mb-6">      
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 50, ease: "linear" },
          }}
        >
          {duplicatedFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center whitespace-nowrap bg-white px-10 py-3 rounded-full border border-zinc-200 shadow-sm"
            >
              <span className="md:text-2xl text-lg font-medium text-zinc-800 italic uppercase">
                {feature}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
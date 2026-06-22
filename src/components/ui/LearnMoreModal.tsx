"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: { label: string; title?: string };
}

export default function LearnMoreModal({ isOpen, onClose, product }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-md"
            aria-hidden="true" 
          />
          
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg bg-white p-10 rounded-[32px] z-50 shadow-2xl text-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <h2 id="modal-title" className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">
                {product.label}
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">
                {product.title}
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Experience the pinnacle of innovation. Engineered with precision and designed to seamlessly integrate into your life, this device redefines what's possible. Discover the perfect balance of power and elegance.
            </p>
            <button 
              onClick={onClose} 
              className="cursor-pointer w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-700 transition-all active:scale-95"
              aria-label="Close modal"
            >
              Done
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
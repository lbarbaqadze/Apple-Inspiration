'use client';
import Link from "next/link";
import { motion } from "framer-motion";

export default function SuccessPage() {
    return (
            <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-md"
                >
                    <div className="text-6xl mb-6">✅</div>
                    <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
                    <p className="text-gray-600 mb-8">Your order has been placed successfully. You will receive an email shortly.</p>

                    <Link href="/" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all">
                        Continue Shopping
                    </Link>
                </motion.div>
            </main>
    );
}
"use client";

import { useCartItem } from "@/store/useCartStore";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BasketPage() {
    const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCartItem();
    const [mounted, setMounted] = useState(false);
    const [isExpressLoading, setIsExpressLoading] = useState(false);
    const router = useRouter();

    const handleExpressPay = async () => {
        setIsExpressLoading(true);

        console.log("Processing Express Payment...");

        setTimeout(() => {
            clearCart();
            router.push('/success');
            setIsExpressLoading(false);
        }, 2000);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f5f5f7]">
                <p className="text-[#86868b] text-sm">Loading your bag...</p>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-3 bg-[#f5f5f7]">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#86868b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <h2 className="text-xl font-semibold text-[#1d1d1f]">Your Bag is empty.</h2>
                <p className="text-sm text-[#86868b]">Add something you love.</p>
            </div>
        );
    }

    const formatPrice = (num: number) =>
        "$" + Math.round(num).toLocaleString("en-US");

    const subtotal = getTotalPrice();
    const tax = Math.round(subtotal * 0.09);
    const total = subtotal + tax;

    return (
        <>
            <div className="px-4 sm:px-8 md:px-14 pt-15 lg:mb-18">
                <div className="max-w-7xl mx-auto">

                    <p className="text-[11px] font-medium tracking-widest uppercase text-[#86868b] mb-6 pl-1">
                        Shopping Bag
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">

                        <div className="bg-[#f1f1f1] rounded-[18px] p-6">
                            <div className="flex justify-between items-center mb-5">
                                <span className="text-[17px] font-semibold text-[#1d1d1f] tracking-[-0.3px]">
                                    {cart.length} {cart.length === 1 ? "Item" : "Items"}
                                </span>
                                <button
                                    onClick={clearCart}
                                    className="text-xs text-[#86868b] hover:text-[#ff3b30] transition-colors cursor-pointer"
                                >
                                    Clear All
                                </button>
                            </div>

                            <div className="flex flex-col">
                                {cart.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`flex items-center gap-4 py-4 ${index !== cart.length - 1 ? "border-b border-[#f0f0f0]" : ""
                                            } ${index === 0 ? "pt-0" : ""}`}
                                    >
                                        <div className="w-[72px] h-[72px] bg-[#f5f5f7] rounded-xl flex items-center justify-center p-2 shrink-0 relative">
                                            <Image
                                                src={item.img}
                                                alt={item.name}
                                                fill
                                                sizes="72px"
                                                className="object-contain mix-blend-multiply"
                                            />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <p className="text-[14px] font-semibold text-[#1d1d1f] truncate">
                                                {item.name}
                                            </p>
                                            <p className="text-xs text-[#86868b] mt-0.5">
                                                {item.color}
                                            </p>
                                            <div className="flex items-center gap-3 mt-2.5">
                                                <div className="flex items-center bg-[#f5f5f7] rounded-full">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="w-7 h-7 flex items-center justify-center text-[15px] text-[#1d1d1f] hover:bg-[#e8e8ed] rounded-full transition-colors cursor-pointer"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="text-[13px] font-medium text-[#1d1d1f] min-w-[20px] text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-7 h-7 flex items-center justify-center text-[15px] text-[#1d1d1f] hover:bg-[#e8e8ed] rounded-full transition-colors cursor-pointer"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-xs text-[#ff3b30] hover:opacity-70 transition-opacity cursor-pointer"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>

                                        <span className="text-[15px] font-semibold text-[#1d1d1f] shrink-0">
                                            {formatPrice(Number(item.price) * item.quantity)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#f1f1f1] rounded-[18px] p-6 lg:sticky lg:top-8">
                            <p className="text-[11px] font-medium tracking-widest uppercase text-[#86868b] mb-4">
                                Order Summary
                            </p>

                            <div className="space-y-0">
                                <div className="flex justify-between items-center py-2.5 text-[13px] text-[#86868b] border-b border-[#f5f5f7]">
                                    <span>Subtotal ({cart.length} {cart.length === 1 ? "item" : "items"})</span>
                                    <span>{formatPrice(subtotal)}</span>
                                </div>
                                <div className="flex justify-between items-center py-2.5 text-[13px] text-[#86868b] border-b border-[#f5f5f7]">
                                    <span>Delivery</span>
                                    <span className="text-[#86868b] font-medium">Free</span>
                                </div>
                                <div className="flex justify-between items-center py-2.5 text-[13px] text-[#86868b]">
                                    <span>Tax estimated</span>
                                    <span>{formatPrice(tax)}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-baseline pt-4 mt-1 border-t border-[#e8e8ed]">
                                <span className="text-[15px] font-semibold text-[#1d1d1f]">Total</span>
                                <span className="text-[20px] font-semibold text-[#1d1d1f] tracking-[-0.5px]">
                                    {formatPrice(total)}
                                </span>
                            </div>

                            <Link href={"/checkout"}>
                                <button className="w-full mt-4 py-3 bg-[#0071e3] hover:bg-[#0077ed] active:scale-[0.98] text-white text-[14px] font-medium rounded-full transition-all cursor-pointer">
                                    Check Out
                                </button>
                            </Link>

                            <div className="flex items-center gap-2 my-3">
                                <div className="flex-1 h-px bg-[#e8e8ed]" />
                                <span className="text-[11px] text-[#86868b]">or</span>
                                <div className="flex-1 h-px bg-[#e8e8ed]" />
                            </div>

                            <Link href={"/"}>
                                <button
                                    className="w-full py-3 bg-black hover:bg-[#1d1d1f] text-white text-[14px] font-medium rounded-full transition-colors cursor-pointer disabled:bg-gray-500"
                                >
                                    Back
                                </button>
                            </Link>

                            <div className="flex items-center gap-2 bg-[#f0faf4] rounded-xl px-3 py-2.5 mt-3">
                                <span className="text-[11px] text-[#1d1d1f]">
                                    Free delivery on all orders over $50
                                </span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
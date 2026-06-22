'use client';

import { useCartItem } from "@/store/useCartStore";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkoutSchema } from "@/lib/checkoutSchema";
import Image from "next/image";

export default function CheckoutPage() {
    const cart = useCartItem((state) => state.cart);
    const cartTotal = useCartItem((state) => state.getTotalPrice());
    const router = useRouter();
    const [isHydrated, setIsHydrated] = useState(false);
    const [deliveryMethod, setDeliveryMethod] = useState<'standard' | 'express'>('standard');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState({ fullName: '', address: '', city: '', zipCode: '' });    
    
    useEffect(() => {
        setIsHydrated(true);
    }, []);

    useEffect(() => {
        if (isHydrated && cart.length === 0) {
            router.replace('/basket');
        }
    }, [isHydrated, cart, router]);


    const handlePay = async () => {
        
        const { error } = checkoutSchema.validate(formData, { abortEarly: false });

        if (error) {
            const validationErrors: Record<string, string> = {};
            error.details.forEach((err) => { validationErrors[err.path[0] as string] = err.message; });            
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsLoading(true);

        try {            
            const response = await fetch('/api/checkout_sessions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ items: cart, shippingInfo: formData }),
            });

            const session = await response.json();

            window.location.href = session.url;

        }  catch (err) {
            console.error("Payment failed:", err);
            setIsLoading(false);
        }
    };

    if (!isHydrated) return null;

    const shippingCost = deliveryMethod === 'express' ? 15 : 0;
    const finalTotal = cartTotal + shippingCost;

    return (
        <main className="bg-white text-[#1d1d1f] pt-15 md:pb-18 pb-10">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Checkout</h1>
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-7 space-y-8">

                        <section className="bg-[#f5f5f7] p-8 rounded-3xl">
                            <h2 className="text-xl font-semibold mb-6 flex items-center">
                                <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3">1</span>
                                Shipping Information
                            </h2>
                            <div className="grid gap-4">
                                {Object.keys(formData).map((field) => (
                                    <div key={field}>
                                        <input
                                            className={`w-full p-4 rounded-xl border-0 bg-white shadow-sm focus:ring-2 outline-none ${errors[field] ? 'ring-2 ring-red-500' : 'focus:ring-black'}`}
                                            placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                                            value={formData[field as keyof typeof formData]}
                                            onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                                        />
                                        {errors[field] && <p className="text-red-500 text-xs mt-1 ml-2">{errors[field]}</p>}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-[#f5f5f7] p-8 rounded-3xl">
                            <h2 className="text-xl font-semibold mb-6 flex items-center">
                                <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3">2</span>
                                Delivery Method
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {(['standard', 'express'] as const).map((method) => (
                                    <div key={method} onClick={() => setDeliveryMethod(method)} className={`p-4 rounded-2xl cursor-pointer transition-all ${deliveryMethod === method ? 'bg-white border-2 border-black' : 'bg-white border border-gray-200'}`}>
                                        <p className="font-bold capitalize">{method}</p>
                                        <p className="text-sm text-gray-500">{method === 'standard' ? 'Free (3-5 days)' : '$15 (1-2 days)'}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="sticky top-24 bg-[#f5f5f7] p-8 rounded-3xl shadow-sm">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                            <div className="space-y-4 mb-6">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex items-center gap-4">
                                        <div className="w-16 h-16 relative bg-white rounded-lg p-1"><Image src={item.img} alt={item.name} fill sizes="64px" className="object-contain" /></div>
                                        <div className="flex-1"><p className="text-sm font-medium">{item.name}</p></div>
                                        <span className="font-semibold text-sm">${(Number(item.price) * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-200 pt-6 space-y-3">
                                <div className="flex justify-between text-sm"><span className="text-gray-500">Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
                                <div className="flex justify-between text-sm"><span className="text-gray-500">Shipping</span><span>{shippingCost === 0 ? 'Free' : `$15.00`}</span></div>
                                <div className="flex justify-between font-bold text-lg pt-2"><span>Total</span><span>${finalTotal.toFixed(2)}</span></div>
                            </div>
                            <button disabled={isLoading} onClick={handlePay} className="w-full bg-black cursor-pointer text-white py-4 rounded-full font-bold hover:bg-gray-800 transition-all mt-8 disabled:bg-gray-400">
                                {isLoading ? "Redirecting..." : "Confirm & Pay"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
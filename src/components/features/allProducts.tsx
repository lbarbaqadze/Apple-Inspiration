'use client';

import { useState, useMemo } from "react";
import Link from "next/link";
import { useCartItem } from "@/store/useCartStore";
import { useFlyToCart } from "@/hooks/useFlyToCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export type productsItem = {
    id: string;
    name: string;
    specs: string;
    price: string;
    img: string;
    colors?: { name: string; hex: string; images: string[] }[];
    storageOptions?: { size: string; priceModifier: number }[];
};

interface ProductsProps {
    products: productsItem[];
    categoryPath: "iPhone" | "MacBook" | "iPad" | "iWatch";
}

export default function Products({ products, categoryPath }: ProductsProps) {
    const { flyToCart } = useFlyToCart();
    const addToCart = useCartItem((state) => state.addToCart);

    const [activeFilter, setActiveFilter] = useState<"all" | "pro" | "base">("all");
    const [sortBy, setSortBy] = useState<"default" | "lowToHigh" | "highToLow">("default");

    const processedProducts = useMemo(() => {
        let result = [...products];

        if (activeFilter === "pro") {
            result = result.filter(p =>
                p.name.toLowerCase().includes("pro") || p.name.toLowerCase().includes("ultra")
            );
        } else if (activeFilter === "base") {
            result = result.filter(p =>
                !p.name.toLowerCase().includes("pro") && !p.name.toLowerCase().includes("ultra")
            );
        }

        if (sortBy === "lowToHigh") {
            result.sort((a, b) => {
                const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
                const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
                return priceA - priceB;
            });
        } else if (sortBy === "highToLow") {
            result.sort((a, b) => {
                const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
                const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
                return priceB - priceA;
            });
        }

        return result;
    }, [products, activeFilter, sortBy]);

    const generateProductSlug = (product: productsItem) => {
        const baseId = (product.id || "").toLowerCase().trim().replace(/\s+/g, "-");
        let colorName = product.colors?.[0]?.name || "";
        let storageSize = product.storageOptions?.[0]?.size || "";
        const cleanColor = colorName.toLowerCase().trim().replace(/\s+/g, "-");
        const cleanStorage = storageSize.toLowerCase().trim().replace(/\s+/g, "-");

        const segments = [baseId];
        if (cleanColor) segments.push(cleanColor);
        if (cleanStorage) segments.push(cleanStorage);
        return segments.join("-").replace(/-+/g, "-");
    };

    return (
        <section className="w-full min-h-screen py-10 text-[#1d1d1f]">
            <div className="max-w-[1600px] mx-auto px-1 md:px-4 relative">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8 pl-2">
                    {categoryPath}
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-6 mb-8 gap-4 pl-2">
                    <div className="flex bg-[#f5f5f7] p-1 rounded-xl border border-gray-200/50 w-fit">
                        <button onClick={() => setActiveFilter("all")} className={`cursor-pointer px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all ${activeFilter === "all" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"}`}>All Models</button>
                        <button onClick={() => setActiveFilter("pro")} className={`cursor-pointer px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all ${activeFilter === "pro" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"}`}>Pro Series</button>
                        <button onClick={() => setActiveFilter("base")} className={`cursor-pointer px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all ${activeFilter === "base" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"}`}>Standard / Air</button>
                    </div>

                    <div className="flex items-center gap-2 bg-[#f5f5f7] border border-gray-200/60 px-3 py-2 rounded-xl w-fit mr-2">
                        <FontAwesomeIcon icon={faArrowsUpDown} className="text-gray-400 text-xs" />
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} className="bg-transparent text-black text-xs md:text-sm font-medium focus:outline-none cursor-pointer pr-2">
                            <option value="default">Featured</option>
                            <option value="lowToHigh">Price: Low to High</option>
                            <option value="highToLow">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="relative">
                    {processedProducts.length === 0 ? (
                        <div className="text-center text-gray-400 py-20 text-lg">No models found in this category.</div>
                    ) : (
                        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 pb-10">
                            {processedProducts.map((product) => {
                                const productSlug = generateProductSlug(product);
                                return (
                                    <div key={product.id} className="w-full h-full bg-[#f5f5f7] rounded-[1.2rem] md:rounded-[1.8rem] p-3 md:p-5 flex flex-col items-center text-center transition-all md:hover:bg-[#f0f0f2]">
                                        <Link href={`/products/${productSlug}`} className="group h-20 sm:h-28 md:h-36 w-full flex items-center justify-center mb-3 md:mb-5 cursor-pointer relative">
                                            <Image
                                                src={product.img}
                                                alt={product.name}
                                                fill
                                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                                className="object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </Link>

                                        <div className="flex-1 flex flex-col justify-between w-full">
                                            <div className="mb-2 md:mb-4">
                                                <h3 className="text-[13px] sm:text-base md:text-lg font-bold leading-tight mb-1 tracking-tight text-black line-clamp-2 px-0.5">{product.name}</h3>
                                                <p className="text-[8px] md:text-[10px] text-gray-400 font-bold uppercase tracking-wider line-clamp-1">{product.specs}</p>
                                            </div>

                                            <div>
                                                <p className="text-[13px] sm:text-sm md:text-base font-bold mb-3 md:mb-4 text-black">{product.price}</p>
                                                <div className="flex flex-row items-center justify-between gap-1.5 w-full mt-2 px-0.5 sm:px-0 sm:gap-2 sm:justify-center">
                                                    <Link href={`/products/${productSlug}`} className="flex-1 h-7 sm:h-9 md:h-9 bg-black text-center text-white rounded-full flex items-center justify-center text-[11px] sm:text-xs md:text-xs font-medium hover:bg-black/80 transition-all duration-300">Buy</Link>
                                                    <button onClick={(e) => {
                                                        flyToCart(e, product.img);
                                                        setTimeout(() => {
                                                            addToCart({
                                                                id: product.id, name: product.name, price: product.price.replace(/[^0-9.]/g, ''), img: product.img, number: product.specs || "1", color: product.colors?.[0]?.name || "Standard"
                                                            });
                                                        }, 1000);
                                                    }} className="w-7 h-7 sm:w-9 sm:h-9 md:w-9 md:h-9 border border-gray-200 text-gray-500 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all shrink-0 text-[11px] sm:text-xs">
                                                        <FontAwesomeIcon icon={faPlus} className="text-xs cursor-pointer" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
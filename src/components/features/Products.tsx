"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faChevronLeft, faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useCartItem } from "@/store/useCartStore";
import { useFlyToCart } from "@/hooks/useFlyToCart";

export type ProductItem = {
  id: string;
  name: string;
  specs: string;
  price: string;
  img: string;
  colors?: any[];
  storageOptions?: any[];
  category?: string;
}

type CompactFloatingStoreProps = {
  products: ProductItem[],
  title?: string
}

export default function CompactFloatingStore({ products, title }: CompactFloatingStoreProps) {

  const addToCart = useCartItem((state) => state.addToCart)

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const move = direction === "left" ? -clientWidth * 0.4 : clientWidth * 0.4;
      scrollRef.current.scrollTo({ left: scrollLeft + move, behavior: "smooth" });
    }
  };

  if (!products || products.length === 0) return null;

  const { flyToCart } = useFlyToCart()

  return (
    <section className="w-full bg-[#fbfbfb] text-[#1d1d1f]">
      <div className="max-w-[1600px] mx-auto px-6 relative">

        <h2 className="text-4xl font-bold mb-10 tracking-tight pl-2">{title}</h2>

        <div className="relative group">

          <button
            onClick={() => scroll("left")}
            className="cursor-pointer hover:bg-black absolute left-0 top-[40%] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center -ml-2 md:group-hover:flex transition-all active:scale-90"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-gray-400 text-sm" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-10 scroll-smooth"
          >
            {products.map((item) => {
              const colorSlug = item.colors && item.colors.length > 0
                ? `-${item.colors[0].name.replace(/\s+/g, '-')}`
                : '';
              const storageSlug = item.storageOptions && item.storageOptions.length > 0
                ? `-${item.storageOptions[0].size}`
                : '';

              const productUrl = `/products/${item.id}${colorSlug}${storageSlug}`;

              return (
                <div
                  key={item.id}
                  className="min-w-70 md:min-w-75 bg-white rounded-4xl p-6 flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-gray-50 snap-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Link href={productUrl} className="h-40 w-full flex items-center justify-center mb-6 cursor-pointer relative">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-contain mix-blend-multiply"
                      priority={true} 
                    />
                  </Link>

                  <div className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <Link href={productUrl} className="cursor-pointer hover:opacity-80 block">
                        <h3 className="text-lg font-bold leading-tight mb-1">{item.name}</h3>
                      </Link>
                      <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">{item.specs}</p>
                    </div>

                    <div className="mt-auto">
                      <p className="text-lg font-bold mb-5">{item.price}</p>

                      <div className="flex items-center gap-2">
                        <Link
                          href={productUrl}
                          className="flex-1 h-9 bg-black text-white rounded-full text-xs font-bold hover:bg-gray-800 transition-colors flex items-center justify-center text-center cursor-pointer"
                        >
                          Buy Now
                        </Link>
                        <button onClick={(e) => {
                          flyToCart(e, item.img)
                          addToCart({
                            id: item.id,
                            name: item.name,
                            price: item.price.replace(/[^0-9.]/g, ''),
                            img: item.img,
                            number: item.specs || "1",
                            color: item.colors?.[0]?.name || "Standard"
                          })
                        }}
                          className="cursor-pointer w-9 h-9 border border-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all">
                          <FontAwesomeIcon icon={faPlus} size="xs" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => scroll("right")}
            className="cursor-pointer hover:bg-black absolute right-0 top-[40%] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center -mr-2 md:group-hover:flex transition-all active:scale-90"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 text-sm" />
          </button>

        </div>
      </div>
    </section>
  );
}
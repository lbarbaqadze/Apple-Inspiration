'use client'

import { useState, use } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; 
import allProductsData from "@/data/allproducts.json";
import { useCartItem } from '@/store/useCartStore';
import { useFlyToCart } from "@/hooks/useFlyToCart";

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const addToCart = useCartItem((state) => state.addToCart);
    const { flyToCart } = useFlyToCart();

    const { id } = use(params);
    const decodedSlug = decodeURIComponent(id).toLowerCase().trim();

    let baseProduct: any = null;
    Object.values(allProductsData).flat().forEach((p: any) => {
        const cleanId = p.id.toLowerCase().trim().replace(/\s+/g, '-');
        if (decodedSlug.startsWith(cleanId)) {
            baseProduct = p;
        }
    });

    if (!baseProduct) {
        return (
            <div className="flex h-screen items-center justify-center flex-col bg-white text-black pt-28">
                <h1 className="text-2xl font-bold text-red-500">Products not founds!</h1>
                <p className="text-gray-400 mt-2 text-sm">ID: {decodedSlug}</p>
            </div>
        );
    }

    const urlColor = searchParams.get('color');
    const urlStorage = searchParams.get('storage');

    const initialColor = baseProduct.colors?.find((c: any) =>
        urlColor ? c.name.toLowerCase().trim().replace(/\s+/g, '-') === urlColor : false
    ) || baseProduct.colors?.find((c: any) =>
        decodedSlug.includes(c.name.toLowerCase().trim().replace(/\s+/g, '-'))
    ) || baseProduct.colors?.[0] || { name: "Default", hex: "#ccc", images: [baseProduct.img] };

    const initialStorage = baseProduct.storageOptions?.find((s: any) =>
        urlStorage ? s.size.toLowerCase().trim().replace(/\s+/g, '') === urlStorage : false
    ) || baseProduct.storageOptions?.find((s: any) =>
        decodedSlug.includes(s.size.toLowerCase().trim().replace(/\s+/g, '-'))
    ) || baseProduct.storageOptions?.[0] || { size: "Standard", priceModifier: 0 };

    const [selectedColor, setSelectedColor] = useState(initialColor);
    const [selectedStorage, setSelectedStorage] = useState(initialStorage);
    const [currentImage, setCurrentImage] = useState(0);

    const updateUrl = (colorName: string, storageSize: string) => {
        const cleanColor = colorName.toLowerCase().trim().replace(/\s+/g, '-');
        const cleanStorage = storageSize.toLowerCase().trim().replace(/\s+/g, '');
        
        const params = new URLSearchParams(searchParams.toString());
        params.set('color', cleanColor);
        params.set('storage', cleanStorage);
        
        router.replace(`?${params.toString()}`, { scroll: false });
    };

    const basePrice = parseInt(baseProduct.price.replace(/[^0-9]/g, '')) || 0;
    const totalPrice = basePrice + (selectedStorage?.priceModifier || 0);

    const imagesArray = selectedColor?.images || [baseProduct.img];
    const displayImage = imagesArray[currentImage] || baseProduct.img;

    return (
        <>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 md:pt-28 pb-16 text-black min-h-screen animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

                    <div className="flex flex-col gap-6 md:sticky md:top-28 h-fit">
                        <div className="bg-[#f5f5f7] rounded-4xl p-6 md:p-12 flex items-center justify-center min-h-[350px] sm:min-h-[400px] md:min-h-[500px]">
                            <img
                                src={displayImage}
                                alt={baseProduct.name}
                                className="w-full max-w-[280px] sm:max-w-sm object-contain mix-blend-multiply transform md:hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {imagesArray.length > 1 && (
                            <div className="flex gap-2.5 justify-center overflow-x-auto py-1">
                                {imagesArray.map((img: string, idx: number) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImage(idx)}
                                        className={`cursor-pointer w-14 h-14 md:w-20 md:h-20 p-2 shrink-0 rounded-2xl border-2 bg-[#f5f5f7] transition-all duration-200 ${currentImage === idx ? 'border-black scale-105' : 'border-gray-200 opacity-70'}`}
                                    >
                                        <img src={img} className="w-full h-full object-contain mix-blend-multiply" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-6 md:gap-8">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{baseProduct.specs}</span>
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-1 text-[#1d1d1f]">{baseProduct.name}</h1>
                        </div>

                        <div className="text-2xl md:text-4xl font-semibold text-[#1d1d1f]">
                            ${totalPrice.toLocaleString()}
                        </div>

                        <hr className="border-gray-200" />

                        {baseProduct.colors && baseProduct.colors.length > 0 && (
                            <div className="flex flex-col gap-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                    Color: <span className="text-black normal-case font-semibold ml-1">{selectedColor.name}</span>
                                </span>
                                <div className="flex gap-3 items-center flex-wrap">
                                    {baseProduct.colors.map((color: any) => (
                                        <button
                                            key={color.name}
                                            onClick={() => {
                                                setSelectedColor(color);
                                                setCurrentImage(0);
                                                updateUrl(color.name, selectedStorage.size); 
                                            }}
                                            style={{ backgroundColor: color.hex }}
                                            className={`cursor-pointer w-6 h-6 rounded-full transition-all duration-300 relative ${selectedColor.name === color.name ? 'ring-4 ring-offset-2 ring-black scale-105' : 'hover:scale-105'}`}
                                            title={color.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {baseProduct.storageOptions && baseProduct.storageOptions.length > 0 && (
                            <div className="flex flex-col gap-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Storage</span>
                                <div className="grid grid-cols-2 gap-3">
                                    {baseProduct.storageOptions.map((storage: any) => (
                                        <button
                                            key={storage.size}
                                            onClick={() => {
                                                setSelectedStorage(storage);
                                                updateUrl(selectedColor.name, storage.size); 
                                            }}
                                            className={`cursor-pointer p-4 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col justify-between ${selectedStorage.size === storage.size ? 'border-black bg-[#f5f5f7]' : 'border-gray-200 hover:border-gray-400'}`}
                                        >
                                            <span className="font-bold text-base md:text-lg">{storage.size}</span>
                                            <span className="text-xs text-gray-500 mt-1">
                                                {storage.priceModifier === 0 ? "Base Price" : `+$${storage.priceModifier}`}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <hr className="border-gray-200" />

                        <div className="bg-[#f5f5f7] rounded-2xl p-4 md:p-5 flex flex-col gap-3 text-sm">
                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                <span className="text-gray-500">Model</span>
                                <span className="font-semibold">{baseProduct.name}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                <span className="text-gray-500">Color</span>
                                <span className="font-semibold">{selectedColor.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Storage</span>
                                <span className="font-semibold">{selectedStorage.size}</span>
                            </div>
                        </div>

                        <button
                            onClick={(e) => {
                                flyToCart(e, displayImage)
                                addToCart({
                                    id: `${baseProduct.id}-${selectedColor.name}-${selectedStorage.size}`.toLowerCase().replace(/\s+/g, '-'),
                                    name: baseProduct.name,
                                    price: String(totalPrice),
                                    img: displayImage,
                                    number: selectedStorage.size,
                                    color: selectedColor.name
                                })
                            }}
                            className="w-full bg-black cursor-pointer text-white py-3.5 md:py-4 rounded-full font-semibold hover:bg-gray-600 transition-all text-base md:text-lg shadow-sm active:scale-[0.99]"
                        >
                            Add to Bag
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}
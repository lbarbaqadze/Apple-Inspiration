"use client";
import { useRef, useState } from 'react';
import Image from 'next/image';
import CardModal from '@/components/ui/CardModal';
import { productDetails, ProductCategories } from '@/data/productDetails';

interface CardData {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    color?: string;
}

interface ProductCardsProps {
    sectionTitle: string;
    cards: CardData[];
    category: ProductCategories;
}

interface DetailsData {
    description: string;
    image: string;
}

export default function ProductCards({ sectionTitle, cards, category }: ProductCardsProps) {
    const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (offset: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    const details = selectedCard
        ? (productDetails[category] as any)[selectedCard.id] as DetailsData
        : null;

    return (
        
        <section className="w-full md:py-7 pb-10 px-6">
            <div className="max-w-[1550px] mx-auto">
                <div className="flex justify-between items-center mb-12 md:px-0">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black">
                        {sectionTitle}
                    </h2>

                    <div className="flex gap-2">
                        <button onClick={() => scroll(-400)} className="p-4 w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition">←</button>
                        <button onClick={() => scroll(400)} className="p-4 w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition">→</button>
                    </div>
                </div>

                <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedCard(card)}
                            className="cursor-pointer relative aspect-[2.8/5] min-w-[280px] md:min-w-[350px] bg-black rounded-[30px] overflow-hidden p-8 flex flex-col justify-start shrink-0"
                        >
                            <div className="z-10">
                                <h3 className={`${card.color || "text-gray-400"} font-medium mb-2`}>{card.title}</h3>
                                <p className={`${card.color || "text-white"} text-2xl md:text-3xl font-bold leading-tight max-w-[200px]`}>
                                    {card.subtitle}
                                </p>
                            </div>
                            <Image src={card.image} alt={card.title} fill className="object-cover object-center" />
                        </div>
                    ))}
                </div>

                <CardModal isOpen={!!selectedCard} onClose={() => setSelectedCard(null)}>
                    {selectedCard && details && (
                        <div className="text-black space-y-6">
                            <div>
                                <h2 className="text-xl font-thin text-gray-500">{selectedCard.title}</h2>
                                <p className="mt-2 text-4xl font-bold leading-tight">{selectedCard.subtitle}</p>
                            </div>

                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden">
                                <Image
                                    src={details.image}
                                    alt={selectedCard.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                {details.description}
                            </p>
                        </div>
                    )}
                </CardModal>
            </div>
        </section>
    );
}
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocalStorage } from '@/hooks/useLocalStorage' 

export type HeroTitlePart = {
    text: string
    bold?: boolean
}

export type ProductVariant = {
    image: string
    thumbnail: string
    color: string
    name?: string
    slug?: string
}

export type ProductHeroProps = {
    title: HeroTitlePart[][]
    ctaText?: string
    ctaHref?: string
    variants: ProductVariant[]
    defaultVariant?: number
    sectionTitle?: string
}

export default function ProductHero({
    title,
    ctaText = 'Buy Now',    
    variants,
    defaultVariant = 0,
}: ProductHeroProps) {
    const productBase = variants[0]?.slug?.split('-')[0] || 'generic'
    const storageKey = `hero_variant_${productBase}`

    const [activeIndex, setActiveIndex, mounted] = useLocalStorage<number>(storageKey, defaultVariant)

    const active = variants[activeIndex]
    if (!active) return null

    const dynamicCtaHref = `/products/${active.slug}`

    return (
        <section className="w-full bg-black text-white lg:pt-0">
            <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 px-5 py-12 sm:py-14 lg:grid-cols-[1fr_1.15fr] lg:gap-4 lg:py-16">

                <div className="flex flex-col items-center text-center lg:items-start lg:text-left justify-center lg:pl-2">
                    <h1 className="max-w-lg text-[2.35rem] font-bold leading-[1.08] tracking-tight sm:text-[2.75rem] lg:text-[3.15rem]">
                        {title.map((line, lineIndex) => (
                            <span key={lineIndex} className="block">
                                {line.map((part, partIndex) => (
                                    <span
                                        key={partIndex}
                                        className={part.bold !== false ? 'font-bold' : 'font-normal'}
                                    >
                                        {part.text}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <Link
                        href={dynamicCtaHref}
                        className="mt-9 rounded-full border border-white px-9 py-2.5 text-[15px] font-medium
                            transition-all duration-300 hover:bg-white hover:text-black"
                    >
                        {ctaText}
                    </Link>
                </div>

                <div className="relative flex w-full flex-col items-center lg:items-center">
                    <div className="relative flex w-full max-w-[520px] items-center justify-end">
                        <div className="relative h-[240px] w-full sm:h-[280px] lg:h-[300px]">
                            {variants.map((variant, index) => {
                                const isVisible = mounted ? index === activeIndex : index === defaultVariant

                                return (
                                    <Image
                                        key={variant.image}
                                        src={variant.image}
                                        alt={variant.name ?? `Product variant ${index + 1}`}
                                        fill
                                        priority={index === defaultVariant}
                                        sizes="(max-width: 768px) 100vw, 520px"
                                        className={`object-contain object-center transition-all duration-500 ease-out
                                                ${!mounted 
                                                    ? 'opacity-0 scale-95' 
                                                    : isVisible
                                                        ? 'scale-100 opacity-100'
                                                        : 'pointer-events-none scale-[0.97] opacity-0'}`}
                                    />
                                )
                            })}
                        </div>

                        <div className="ml-4 flex flex-col gap-3 sm:ml-5">
                            {variants.map((variant, index) => {
                                const isActive = mounted ? index === activeIndex : index === defaultVariant

                                return (
                                    <button
                                        key={`${variant.color}-${index}`}
                                        type="button"
                                        aria-label={variant.name ?? `Select variant ${index + 1}`}
                                        onClick={() => setActiveIndex(index)} 
                                        className={`h-3.5 w-3.5 rounded-full transition-all duration-300
                                            ${isActive
                                                ? 'scale-110 ring-2 ring-white ring-offset-2 ring-offset-black'
                                                : 'opacity-70 hover:opacity-100'}`}
                                        style={{ backgroundColor: variant.color }}
                                    />
                                )
                            })}
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center gap-2.5 sm:gap-4 px-2">
                        {variants.map((variant, index) => {
                            const isActive = mounted ? index === activeIndex : index === defaultVariant

                            return (
                                <button
                                    key={`${variant.thumbnail}-${index}`}
                                    type="button"
                                    aria-label={variant.name ?? `View variant ${index + 1}`}
                                    onClick={() => setActiveIndex(index)} 
                                    className={`cursor-pointer relative h-[60px] w-[95px] sm:h-[72px] sm:w-[125px] overflow-visible rounded-[22px] sm:rounded-[26px] transition-all duration-300 shrink-0
                                        ${isActive
                                            ? 'shadow-[0_0_25px_rgba(255,255,255,0.2)] ring-2 ring-white/90 scale-105'
                                            : 'opacity-60 hover:opacity-100 hover:scale-102'}`}
                                    style={{ backgroundColor: variant.color }}
                                >
                                    <div className="absolute -top-7 left-0 right-0 h-[85px] sm:-top-10 sm:h-[100px] w-full flex justify-center">
                                        <Image
                                            src={variant.thumbnail}
                                            alt=""
                                            width={80}
                                            height={80}
                                            priority
                                            className="object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.45)] sm:w-[95px] sm:h-[95px]"
                                        />
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
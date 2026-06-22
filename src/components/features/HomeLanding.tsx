import Image from 'next/image'
import Link from 'next/link'

const categories = [
    {
        href: '/iphone',
        label: 'iPhone',
        description: 'Experience the future.',
        image: '/productHero-png/iphone2.png',
        glow: 'from-blue-500/20',
    },
    {
        href: '/macbook',
        label: 'MacBook',
        description: 'Power meets portability.',
        image: '/productHero-png/macbook2.png',
        glow: 'from-indigo-500/20',
    },
    {
        href: '/ipad',
        label: 'iPad',
        description: 'The ultimate device.',
        image: '/productHero-png/ipad2.png',
        glow: 'from-purple-500/20',
    },
    {
        href: '/iwatch',
        label: 'iWatch',
        description: 'Health on your wrist.',
        image: '/productHero-png/iwatch2.png',
        glow: 'from-zinc-500/20',
    },
] as const

export default function HomeLanding() {
    return (
        <section className="relative flex-1 overflow-hidden bg-black text-white mb-10">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/4 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 lg:px-10 lg:pb-20 lg:pt-18">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/45">
                        Apple
                    </p>
                    <h1 className="mt-6 text-[2.5rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                        The best way to buy the products.
                    </h1>
                    <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
                        Explore our curated lineup of iPhone, Mac, iPad, and Apple Watch designed for every moment.
                    </p>
                </div>

                <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
                    {categories.map(({ href, label, description, image, glow }) => (
                        <Link
                            key={href}
                            href={href}
                            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/3
                                p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/6"
                        >
                            <div className={`pointer-events-none absolute inset-0 bg-linear-to-b ${glow} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                            <div className="relative mx-auto h-36 w-full">
                                <Image
                                    src={image}
                                    alt={label}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="relative mt-4">
                                <h2 className="text-xl font-bold tracking-[-0.02em]">{label}</h2>
                                <p className="mt-1 text-sm text-white/50">{description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

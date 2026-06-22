'use client'
import Link from "next/link";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faBasketShopping, faBars, faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import allProductsData from '@/data/allproducts.json';
import { useCartItem } from "@/store/useCartStore";
const navItems = [
    { name: "Home", href: "/" },
    { name: "iPhone", href: "/iphone" },
    { name: "MacBook", href: "/macbook" },
    { name: "iPad", href: "/ipad" },
    { name: "iWatch", href: "/iwatch" },
    { name: "Support", href: "/support" }
]
type ProductColor = {
    name: string;
    hex: string;
    images: string[];
};
type StorageOption = {
    size: string;
    priceModifier: number;
};
type ProductItem = {
    id: string;
    name: string;
    specs: string;
    price: string;
    img: string;
    colors?: ProductColor[];
    storageOptions?: StorageOption[];
};
type AllProductsData = {
    iphone: ProductItem[];
    macbook: ProductItem[];
    ipad: ProductItem[];
    iwatch: ProductItem[];
};
export default function Navbar() {
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [isSearchFocused, setIsSearchFocused] = useState(false)
    const searchRef = useRef<HTMLInputElement>(null)
    const searchContainerRef = useRef<HTMLDivElement>(null)
    const [mounted, setMounted] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    const cart = useCartItem((state) => state.cart)
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if (isSidebarOpen) {
            const scrollY = window.scrollY
            document.body.style.overflow = 'hidden'
            document.body.style.position = 'fixed'
            document.body.style.top = `-${scrollY}px`
            document.body.style.width = '100%'
        } else {
            const scrollY = document.body.style.top
            document.body.style.overflow = ''
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.width = ''
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1)
            }
        }
        return () => {
            document.body.style.overflow = ''
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.width = ''
        }
    }, [isSidebarOpen])

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setIsSearchFocused(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const closeSidebar = () => {
        setIsSidebarOpen(false)
        setIsSearchFocused(false)
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur()
        }
    }

    const typedProductsData = allProductsData as AllProductsData;
    const flatProducts = Object.entries(typedProductsData).flatMap(([category, products]) =>
        products.map((product) => ({
            ...product,
            category: category
        }))
    );
    const filteredProducts = searchQuery.trim() === ""
        ? []
        : flatProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.specs.toLowerCase().includes(searchQuery.toLowerCase())
        );
    return (
        <>
            <nav className={`sticky top-0 left-0 w-full flex items-center justify-between lg:px-24 md:px-12 px-5 z-50 gap-4 transition-all duration-300 border-b
                pt-[env(safe-area-inset-top)] h-[calc(60px+env(safe-area-inset-top))]
                    ${isScrolled
                    ? 'bg-black/75 backdrop-blur-md border-white/10 shadow-md'
                    : 'bg-black border-transparent'}`}>
                <div className="shrink-0 flex items-center">
                    <Link href={"/"} className="opacity-90 hover:opacity-100 transition-opacity">
                        <FontAwesomeIcon icon={faApple} className='md:text-3xl text-2xl text-white' />
                    </Link>
                </div>
                <div className="hidden lg:block">
                    <ul className='flex space-x-1 font-sans'>
                        {navItems.map(item => {
                            const isActive = pathname === item.href
                            return (
                                <li key={item.name}>
                                    <Link href={item.href} className={`text-[14px] font-medium tracking-tight px-4 py-1.5 rounded-full transition-all duration-200
                                            ${isActive
                                            ? 'text-white font-semibold bg-white/15'
                                            : 'text-zinc-400 hover:text-zinc-100'}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex items-center gap-4 flex-1 lg:flex-none justify-end relative" ref={searchContainerRef}>
                    <div className="relative w-full max-w-[130px] sm:max-w-[160px] md:max-w-[190px]">
                        <input
                            ref={searchRef}
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                            className="w-full bg-zinc-900/60 text-white pl-8 pr-3 py-1.5 rounded-full text-xs focus:outline-none focus:ring-1 focus:ring-white/20 border border-zinc-800/80 placeholder-zinc-500 transition-all"
                        />
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-xs pointer-events-none"
                        />
                    </div>
                    {isSearchFocused && searchQuery.trim() !== "" && (
                        <div className="absolute top-full right-0 w-[280px] sm:w-[350px] md:w-[400px] bg-zinc-950/95 backdrop-blur-md border border-zinc-800 mt-2 rounded-2xl shadow-2xl max-h-72 overflow-y-auto z-50">
                            {filteredProducts.length > 0 ? (
                                <ul className="py-2 divide-y divide-zinc-900">
                                    {filteredProducts.map(product => {
                                        const colorSlug = product.colors && product.colors.length > 0 ? `-${product.colors[0].name.replace(/\s+/g, '-')}` : '';
                                        const storageSlug = product.storageOptions && product.storageOptions.length > 0 ? `-${product.storageOptions[0].size}` : '';
                                        const productUrl = `/products/${product.id}${colorSlug}${storageSlug}`;
                                        return (
                                            <li key={`${product.category}-${product.id}`}>
                                                <Link
                                                    href={productUrl}
                                                    onClick={() => {
                                                        setIsSearchFocused(false);
                                                        setSearchQuery("");
                                                        if (searchRef.current) searchRef.current.blur();
                                                    }}
                                                    className="flex items-center gap-3 px-4 py-2.5 text-xs text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors"
                                                >
                                                    <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center p-1 shrink-0">
                                                        <img src={product.img} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="font-medium truncate text-white">{product.name}</div>
                                                        <div className="text-[10px] text-zinc-500 truncate">{product.specs}</div>
                                                    </div>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            ) : (
                                <div className="px-4 py-4 text-center text-zinc-500 text-sm">
                                    <p>No products found for "{searchQuery}"</p>
                                </div>
                            )}
                        </div>
                    )}
                    <div id="cart-icon" className='relative shrink-0 flex items-center opacity-90 hover:opacity-100 transition-opacity'>
                        <Link href={"/basket"}>
                            <FontAwesomeIcon icon={faBasketShopping} className='text-lg text-white' />
                        </Link>
                        {mounted && totalItems > 0 && (
                            <div className='bg-white text-black font-bold w-4 h-4 rounded-full
                                flex items-center justify-center text-[10px] absolute
                                -top-1.5 -right-1.5 animate-in fade-in zoom-in duration-150'>
                                {totalItems}
                            </div>
                        )}
                    </div>
                    <div className='lg:hidden block shrink-0 opacity-90 hover:opacity-100 transition-opacity'>
                        <button
                            type="button"
                            aria-label="Open menu"
                            onClick={() => setIsSidebarOpen(true)}
                            className='text-white cursor-pointer text-lg'
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>
            </nav>
            <div
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden
                ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={closeSidebar}
                aria-hidden={!isSidebarOpen}
            />
            <aside
                className={`fixed inset-y-0 right-0 z-50 w-[min(300px,80vw)] bg-zinc-950 border-l border-white/5
                    shadow-2xl flex flex-col lg:hidden transition-all duration-300 ease-out
                ${isSidebarOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'}`}
                aria-hidden={!isSidebarOpen}
            >
                <div className='flex items-center justify-between px-6 py-5 border-b border-white/5'>
                    <span className='text-zinc-400 font-medium text-sm tracking-wide'>Menu</span>
                    <button
                        type="button"
                        aria-label="Close menu"
                        onClick={closeSidebar}
                        className='w-8 h-8 rounded-full bg-white/5 text-white flex items-center justify-center
                            hover:bg-white/10 transition-all duration-200'
                    >
                        <FontAwesomeIcon icon={faXmark} className='text-base' />
                    </button>
                </div>
                <nav className='flex-1 overflow-y-auto px-4 py-4'>
                    <ul className='space-y-0.5'>
                        {navItems.map(item => {
                            const isActive = pathname === item.href
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={closeSidebar}
                                        className={`block px-4 py-3 rounded-xl text-[16px] font-medium transition-all duration-200
                                                ${isActive
                                                ? 'bg-white/10 text-white font-semibold'
                                                : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div className='px-5 py-4 border-t border-white/5'>
                    <Link
                        href="/basket"
                        onClick={closeSidebar}
                        className='flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-200 font-medium text-sm
                            bg-white/5 hover:bg-white/10 transition-all duration-200'
                    >
                        <FontAwesomeIcon icon={faBasketShopping} className='text-lg' />
                        <span>Basket</span>
                        {mounted && totalItems > 0 && (
                            <span className='ml-auto bg-white text-black font-bold text-[10px] w-4.5 h-4.5 rounded-full
                            flex items-center justify-center'>{totalItems}</span>
                        )}
                    </Link>
                </div>
            </aside>
        </>
    )
}
"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function KeyboardsPage() {
  return (
    <div className="min-h-screen text-neutral-900 font-sans antialiased pt-7">     

      <section className="pt-10 pb-4 md:pt-16 md:pb-8 overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-4 text-center flex flex-col items-center">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[#bf4800] mb-1.5">
            Best Seller
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900">
            Magic Keyboard
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-500 font-normal max-w-xl mt-2 mb-6 md:mb-8 leading-tight">
            Amazing typing experience. Built for iPad.
          </p>
          
          <div className="relative w-full h-[180px] sm:h-[300px] md:h-[380px] max-w-[700px]">
            <Image 
              src="/iPad/essential2.png" 
              alt="Magic Keyboard for iPad"
              fill
              className="object-contain object-top"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 max-w-[1200px] mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-center mb-6 md:mb-10">
          Designed for comfort and precision.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[1.8rem] flex flex-col justify-between min-h-[240px] sm:min-h-[280px] md:h-[320px] shadow-sm">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-1.5 text-neutral-900">Built‑in Trackpad</h3>
              <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
                The built-in trackpad opens up new ways to work with iPadOS. It delivers incredible responsiveness and precision for editing docs or navigating apps.
              </p>
            </div>
            <div className="text-neutral-200 font-bold text-3xl md:text-4xl text-right mt-4">01</div>
          </div>

          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[1.8rem] flex flex-col justify-between min-h-[240px] sm:min-h-[280px] md:h-[320px] shadow-sm">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-1.5 text-neutral-900">Pass‑through Charging</h3>
              <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
                Features an integrated USB-C port for pass-through charging. This allows you to charge your iPad directly through the keyboard, keeping its own port free.
              </p>
            </div>
            <div className="text-neutral-200 font-bold text-3xl md:text-4xl text-right mt-4">02</div>
          </div>

        </div>
      </section>

      <section className="py-10 md:py-12 border-t border-neutral-200/60">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6">
          <h3 className="text-lg font-semibold mb-4 border-b border-neutral-200 pb-2 text-neutral-800">
            Compatibility
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs md:text-sm text-neutral-600">
            <div>
              <h4 className="font-semibold text-neutral-900 mb-1">iPad Pro Models</h4>
              <ul className="space-y-1 list-disc pl-4 text-neutral-500">
                <li>iPad Pro 13-inch (M4)</li>
                <li>iPad Pro 11-inch (M4)</li>
                <li>iPad Pro 12.9-inch (3rd, 4th, 5th, and 6th generation)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-1">iPad Air Models</h4>
              <ul className="space-y-1 list-disc pl-4 text-neutral-500">
                <li>iPad Air 13-inch (M2)</li>
                <li>iPad Air 11-inch (M2)</li>
                <li>iPad Air 10.9-inch (4th and 5th generation)</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              href="/ipad" 
              className="text-[#0066cc] hover:underline text-xs md:text-sm font-medium inline-flex items-center gap-1.5 group"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-2.5 h-2.5 transition-transform group-hover:-translate-x-0.5" />
              Back to iPad Essentials
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
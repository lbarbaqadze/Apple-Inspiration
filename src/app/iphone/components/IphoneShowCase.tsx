"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faMicrochip, faBolt } from "@fortawesome/free-solid-svg-icons";

export default function IPhoneBentoGrid() {
  return (
    <section className="pt-8 mb-15 w-full overflow-hidden bg-transparent">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">

        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
            Smarter Faster<br />Harder to put down
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[240px]">

          <div className="lg:col-span-7 row-span-2 bg-black text-white rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative group border border-neutral-900">
            <div className="max-w-xs z-10">
              <div className="flex items-center gap-2 mb-3 text-neutral-400">
                <FontAwesomeIcon icon={faCamera} className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase tracking-wider">Pro Camera</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 text-white">
                48MP Main Camera. Details matter.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                An advanced quad-pixel sensor adapts to what you’re shooting for unbelievable resolution.
              </p>
            </div>

            <div className="absolute right-0 bottom-0 w-full sm:w-[60%] h-[55%] sm:h-[65%] transition-transform duration-500 group-hover:scale-102">
              <Image
                src="/knowiphone/camera.png"
                alt="Camera system"
                fill
                className="object-contain object-bottom-right"
              />
            </div>
          </div>

          <div className="lg:col-span-5 row-span-1 bg-black text-white rounded-[2.5rem] p-8 sm:p-10 border border-neutral-900 flex flex-col justify-between overflow-hidden relative group">
            <div className="max-w-[55%] z-10">
              <div className="flex items-center gap-2 mb-2 text-neutral-400">
                <FontAwesomeIcon icon={faMicrochip} className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Silicon</span>
              </div>
              <h4 className="text-xl font-bold tracking-tight text-white">A18 Pro Chip.</h4>
              <p className="text-xs text-neutral-400 mt-1">Built specifically for high-end mobile gaming.</p>
            </div>

            <div className="absolute right-0 bottom-0 md:w-[45%] md:h-[85%] w-[40%] h-[80%] transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/knowiphone/a18.jpg"
                alt="A18 Chip"
                fill
                className="object-contain object-bottom-right"
              />
            </div>
          </div>

          <div className="lg:col-span-5 row-span-1 bg-black text-white rounded-[2.5rem] p-8 border border-neutral-900 flex flex-col justify-between overflow-hidden relative group">
            <div className="max-w-[60%] z-10">
              <div className="flex items-center gap-2 mb-2 text-neutral-400">
                <FontAwesomeIcon icon={faBolt} className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Premium Build</span>
              </div>
              <h4 className="text-xl font-bold tracking-tight text-white">Grade 5 Titanium.</h4>
              <p className="text-xs text-neutral-400 mt-1">Incredibly strong. Remarkably light.</p>
            </div>

            <div className="absolute right-0 bottom-0 w-[55%] h-[85%] transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/knowiphone/titanium.webp"
                alt="Titanium edge"
                fill
                className="object-contain object-bottom-right"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
import Image from "next/image";

export default function DisplayPage() {
  return (
    <main className="min-h-screen text-neutral-900 pb-20">
      <section className="max-w-[1400px] mx-auto pt-18 px-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Brilliant display
        </h1>
        <p className="text-xl text-neutral-500 font-light max-w-2xl">
          Liquid Retina XDR. Extreme dynamic range and incredible contrast ratios.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-8 my-16">
        <div className="relative w-full h-[350px] md:h-[500px]">
          <Image 
            src="/macbook-image/mac.png" 
            alt="Display" 
            fill 
            className="object-contain" 
          />
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-8 grid md:grid-cols-3 gap-8">
        
        <div className="border-t border-neutral-100 pt-8">
          <h2 className="text-xl font-semibold mb-3">Liquid Retina XDR</h2>
          <p className="text-neutral-600 text-sm leading-relaxed">
            Extreme dynamic range and a million-to-one contrast ratio. Photos and videos come to life with incredible detail in shadows.
          </p>
        </div>

        <div className="border-t border-neutral-100 pt-8">
          <h2 className="text-xl font-semibold mb-3">ProMotion</h2>
          <p className="text-neutral-600 text-sm leading-relaxed">
            Adaptive refresh rates up to 120Hz. Everything feels fluid, immediate, and natural, from scrolling to gaming.
          </p>
        </div>

        <div className="border-t border-neutral-100 pt-8">
          <h2 className="text-xl font-semibold mb-3">P3 Wide Color</h2>
          <p className="text-neutral-600 text-sm leading-relaxed">
            A spectrum of color that is deeper and more precise. What you see on screen is exactly what you get for professional work.
          </p>
        </div>

      </section>
    </main>
  );
}
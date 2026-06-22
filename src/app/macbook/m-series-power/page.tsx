import Image from "next/image";

export default function MSeriesPowerPage() {
  return (
    <main className="min-h-screen text-neutral-900 md:mb-0 mb-15">
      <section className="max-w-[1400px] mx-auto pt-18 px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
          M-series Power
        </h1>
        <p className="text-xl md:text-2xl text-neutral-500 font-light max-w-3xl">
          The most advanced chips ever built for a personal computer. Blistering performance, industry-leading efficiency, and unmatched graphics power.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 mt-12 md:mt-15">
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative">
            <Image src="/macbook-image/mac11.png" alt="MacBook Pro" fill className="object-contain"/>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8">Unified Memory Architecture</h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-neutral-600 leading-relaxed">
              <p>By bringing memory and processor closer together, M-series chips allow your Mac to access data in an instant. Everything feels immediate, fluid, and incredibly responsive, no matter how complex the task.</p>
              <p>The high-bandwidth, low-latency memory ensures that your pro apps have instant access to data, allowing for seamless multitasking between heavy creative software. You no longer have to wait for your machine to catch up with your ideas.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative">
            <Image src="/macbook-image/mac2.webp" alt="MacBook Air" fill className="object-contain"/>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8">Pro Efficiency</h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-neutral-600 leading-relaxed">
              <p>Apple silicon is designed to deliver industry-leading performance per watt. You get more power while using less energy, resulting in cool temperatures and exceptional battery life, even during your most demanding workflows.</p>
              <p>Because the chip is so power-efficient, your MacBook stays quiet and cool even when rendering complex 3D scenes or exporting high-resolution videos. It’s power that doesn’t compromise on portability or silence.</p>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
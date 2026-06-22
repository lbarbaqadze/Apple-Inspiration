import Image from "next/image";

export default function BatteryPage() {
  return (
    <main className="text-neutral-900 pb-15">

      <section className="max-w-[1400px] mx-auto pt-18 px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Power that lasts
        </h1>
        <p className="text-xl text-neutral-500 font-light max-w-2xl mx-auto">
          The perfect balance of efficiency and performance.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-8 my-10 grid md:grid-cols-3 items-center gap-10">
        
        <div className="space-y-12">
          <div>
            <h3 className="text-4xl font-bold text-neutral-900">22 hrs</h3>
            <p className="text-neutral-500">Video playback on a single charge.</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-neutral-900">Fast</h3>
            <p className="text-neutral-500">Charge 50% in just 30 minutes.</p>
          </div>
        </div>

        <div className="relative h-[400px] w-full">
          <Image 
            src="/macbook-image/mac11.png" 
            alt="Battery Performance" 
            fill 
            className="object-contain" 
          />
        </div>

        <div className="space-y-12 md:text-right">
          <div>
            <h3 className="text-4xl font-bold text-neutral-900">Silent</h3>
            <p className="text-neutral-500">Cooler operation, zero noise.</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-neutral-900">Pro</h3>
            <p className="text-neutral-500">Built for all-day performance.</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-8 text-center border-t border-neutral-200 pt-16">
        <p className="text-lg text-neutral-600">
          Advanced power management keeps your MacBook running efficiently for years. Its not just a battery, its a standard of reliability.
        </p>
      </section>
    </main>
  );
}
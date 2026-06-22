"use client";
import Link from "next/link";

const features = [
  {
    title: "M-series Power",
    description: "The Apple silicon architecture delivers blistering performance and incredible power efficiency for your most demanding tasks.",
    href: "/macbook/m-series-power",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20" /><circle cx="12" cy="12" r="10" /></svg>
    ),
  },
  {
    title: "Liquid Retina XDR",
    description: "Experience extreme dynamic range and incredible contrast ratios with our most advanced display technology.",
    href: "/macbook/display",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
    ),
  },
  {
    title: "All-day Battery",
    description: "Go further than ever with up to 22 hours of battery life, optimized for macOS efficiency.",
    href: "/macbook/battery",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="18" height="12" rx="2" ry="2" /><line x1="23" y1="13" x2="23" y2="11" /></svg>
    ),
  },
];

export default function ModernFeatures() {
  return (
    <section className="md:py-10 md:mb-0 mb-10">
      <div className="max-w-[1600px] mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-16 tracking-tight">
          Pro performance, Pro potential
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Link
              href={feature.href}
              key={index}
              className="group p-10 md:p-12 rounded-[2.5rem] bg-[#f5f5f7] transition-all duration-500 flex flex-col justify-between min-h-[350px]"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-neutral-900 shadow-sm mb-10 transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-base leading-relaxed font-light max-w-[280px]">
                  {feature.description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-neutral-900 cursor-pointer overflow-hidden">
                <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-neutral-900 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                  Learn more
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";
import Link from "next/link";

export default function ProfessionalFooter() {
  return (
    <footer className="bg-white border-t border-neutral-100 lg:pt-20 pt-10 pb-12">
      <div className="max-w-362.5 mx-auto px-6">

        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-10">

          <div className="max-w-sm">
            <h3 className="text-xl font-bold tracking-tighter text-neutral-900 mb-6 uppercase">
              APPLE<span className="text-neutral-400 font-serif italic">.</span>
            </h3>
            <p className="text-[13px] text-neutral-500 leading-relaxed font-light mb-8">
              Authorized premium reseller. Delivering original Apple devices, official international
              warranty, and a seamless digital ecosystem to your hands.
            </p>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Inquiries</span>
              <a href="mailto:support@ispace.ge" className="text-sm text-neutral-900 font-medium hover:text-neutral-500 transition-colors">
                support@ispace.ge
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 lg:gap-24">

            <div className="flex flex-col gap-5">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900">Shop</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { name: "iPhone", href: "/iphone" },
                  { name: "MacBook", href: "/macbook" },
                  { name: "iPad", href: "/ipad" },
                  { name: "Watch & Audio", href: "/iwatch" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li> 
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900">Services</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { name: "Apple Care", href: "/" },
                  { name: "Trade-In", href: "/" },
                  { name: "Corporate Sales", href: "/" },
                  { name: "Gift Cards", href: "/support/gift-card" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900">Support</h4>
              <ul className="flex flex-col gap-3">
                {["Store Locator", "Order Tracking", "Warranty Check", "FAQs"].map((item) => (
                  <li key={item}>
                    <Link href={"/support"} className="text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900">Connect</h4>
              <ul className="flex flex-col gap-3">
                {["Instagram", "Facebook", "YouTube", "LinkedIn"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className="pt-5 border-t border-neutral-100 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <p className="text-[11px] text-neutral-400 font-medium uppercase tracking-wider">
              © 2026 iSpace Premium Reseller. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[11px] text-neutral-400 hover:text-neutral-900 transition-colors uppercase tracking-wider">Privacy Policy</a>
              <a href="#" className="text-[11px] text-neutral-400 hover:text-neutral-900 transition-colors uppercase tracking-wider">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
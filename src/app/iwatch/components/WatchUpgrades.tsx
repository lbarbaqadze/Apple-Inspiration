"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCheck, 
  faBatteryFull, 
  faPersonRunning, 
  faDisplay, 
  faDroplet, 
  faHeartPulse 
} from "@fortawesome/free-solid-svg-icons";

export default function WatchUpgrades() {
  return (
    <section className="md:py-10 w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[#bf4800]">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
                A Closer Look at <br className="hidden md:inline" /> the Upgrades
              </h2>
            </div>
            
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-xl">
              Apple Watch offers a range of features that make them versatile and convenient. 
              This can be particularly useful when you're on the go or in situations where 
              reaching for a phone may not be convenient.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                "75+ New Watch Faces",
                "24x7 Heart Rate Monitor",
                "Go Higher with SpO2 Measurement",
                "Compatible with iOS Ecosystem",
                "Advanced Sleep Tracking & Stages",
                "1 Year Manufacturer Warranty"
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-3 text-sm md:text-base font-medium text-neutral-800">
                  <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-neutral-800" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 bg-[#f5f5f7] rounded-4xl p-6 sm:p-10 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-5 flex justify-center relative w-full h-[240px] sm:h-[280px] md:h-[320px]">
              <Image 
                src="/iWatch/details1.png" 
                alt="Apple Watch Close Look"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 300px"
              />
            </div>

            <div className="md:col-span-7 space-y-5 md:space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0 text-white shadow-sm">
                  <FontAwesomeIcon icon={faBatteryFull} className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm md:text-base">Quick Charge 2.5</h4>
                  <p className="text-xs md:text-sm text-neutral-500">Up to 80% in about 45 minutes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0 text-white shadow-sm">
                  <FontAwesomeIcon icon={faPersonRunning} className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm md:text-base">40+ Built-in Sports Modes</h4>
                  <p className="text-xs md:text-sm text-neutral-500">Track every way you move and train.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0 text-white shadow-sm">
                  <FontAwesomeIcon icon={faDisplay} className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm md:text-base">Always-On Retina Display</h4>
                  <p className="text-xs md:text-sm text-neutral-500">Amoled screen that never sleeps.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0 text-white shadow-sm">
                  <FontAwesomeIcon icon={faDroplet} className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm md:text-base">IP68 Water Resistant</h4>
                  <p className="text-xs md:text-sm text-neutral-500">Swimproof design up to 50 meters.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0 text-white shadow-sm">
                  <FontAwesomeIcon icon={faHeartPulse} className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm md:text-base">Advanced Health Monitoring</h4>
                  <p className="text-xs md:text-sm text-neutral-500">ECG, Heart rate, and stress tracking.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
"use client";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faDumbbell, faMessage, faMoon } from "@fortawesome/free-solid-svg-icons";

const timelineSteps = [
  {
    id: "morning",
    time: "08:00 AM",
    title: "Start your morning right.",
    description: "Check your calendar, get a quick weather update, and see your daily goals directly on your wrist as you step out.",
    icon: faSun,
    theme: "bg-[#f5f5f7] text-neutral-900 border-neutral-200/50",
    watchImage: "/iWatch/morning.jpg",
    iconColor: "text-amber-500"
  },
  {
    id: "workout",
    time: "01:30 PM",
    title: "Push your limits.",
    description: "Track your heart rate zones, active calories, and performance with advanced metrics tailored for every way you move.",
    icon: faDumbbell,
    theme: "bg-[#f5f5f7] text-neutral-900 border-neutral-200/50",
    watchImage: "/iWatch/workout.jpg",
    iconColor: "text-emerald-500"
  },
  {
    id: "evening",
    time: "06:45 PM",
    title: "Stay on top of it all.",
    description: "Reply to messages on the go, take urgent phone calls, or complete a fast purchase securely using Apple Pay.",
    icon: faMessage,
    theme: "bg-[#f5f5f7] text-neutral-900 border-neutral-200/50",
    watchImage: "/iWatch/evening.png",
    iconColor: "text-blue-500"
  },
  {
    id: "sleep",
    time: "11:00 PM",
    title: "Wind down and recover.",
    description: "Track your sleep stages through the night. See exactly how much time you spent in REM, Core, or Deep sleep.",
    icon: faMoon,
    theme: "bg-[#1d1d1f] text-white border-neutral-800 shadow-xl",
    watchImage: "/iWatch/sleep1.png",
    iconColor: "text-indigo-400"
  }
];

export default function WatchTimeline() {
  const [activeStep, setActiveStep] = useState(timelineSteps[0]);
  const isDarkMode = activeStep.id === "sleep";

  return (
    <section className="py-10 md:py-14 w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        
        <div className="max-w-xl mb-8 md:mb-10">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
            Day-to-day Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            A perfect day, from wrist to pillow
          </h2>
        </div>

        <div className={`rounded-[2.5rem] p-6 sm:p-10 md:p-12 border transition-all duration-500 ${activeStep.theme}`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 xl:col-span-6 space-y-6 md:space-y-8 order-2 lg:order-1">
              
              <div className={`flex flex-wrap gap-1.5 sm:gap-2 lg:gap-1 xl:gap-2 p-1.5 rounded-2xl max-w-max transition-colors duration-500 ${isDarkMode ? "bg-neutral-800" : "bg-neutral-200/50"}`}>
                {timelineSteps.map((step) => {
                  const isActive = activeStep.id === step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step)}
                      className={`flex cursor-pointer items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-4 sm:py-2 lg:px-2.5 lg:py-1.5 xl:px-4 xl:py-2 text-xs sm:text-sm lg:text-xs xl:text-sm font-medium rounded-xl transition-all duration-300 active:scale-95 ${
                        isActive 
                          ? isDarkMode
                            ? "bg-white text-neutral-900 shadow-sm"
                            : "bg-neutral-900 text-white shadow-sm"
                          : isDarkMode 
                            ? "text-neutral-400 hover:text-white" 
                            : "text-neutral-500 hover:text-neutral-900"
                      }`}
                    >
                      <FontAwesomeIcon icon={step.icon} className="w-4 h-4 sm:w-3.5 sm:h-3.5 shrink-0" />
                      <span className="hidden sm:inline">{step.time}</span>
                    </button>
                  );
                })}
              </div>

              <div key={activeStep.id} className="animate-fadeIn space-y-2">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={activeStep.icon} className={`w-4 h-4 ${activeStep.iconColor}`} />
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                    {activeStep.time}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  {activeStep.title}
                </h3>
                <p className={`text-sm md:text-base leading-relaxed max-w-xl transition-colors duration-500 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                  {activeStep.description}
                </p>
              </div>

            </div>

            <div className="lg:col-span-5 xl:col-span-6 flex justify-center items-center order-1 lg:order-2 w-full">
              <div key={activeStep.id} className="relative w-full h-[240px] sm:h-[300px] md:h-[340px] lg:h-[380px] xl:h-[480px] animate-scaleUp transition-transform duration-500 hover:scale-[1.02]">
                <Image 
                  src={activeStep.watchImage}
                  alt={activeStep.title}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 600px"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
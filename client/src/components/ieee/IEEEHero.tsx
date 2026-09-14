import React from "react";
import { ArrowRight, Award } from "lucide-react";

const IEEEHero: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-[420px] overflow-hidden bg-primary text-white">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/ieee/hero.jpg"
          alt="IEEE at PIET"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="max-w-7xl">

          <p className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-white/80">
            IEEE @ PIET
          </p>

          <h1 className="mt-5 text-5xl md:text-6xl font-bold leading-tight">
            Where Ideas
            Become <span className="text-secondary">Innovation.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            A platform where students learn, build, lead and connect
            through technology, research and professional engagement.
          </p>

          {/* Award */}
          <div className="mt-8 inline-flex items-center gap-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-5 py-4">
            <div className="w-11 h-11 rounded-full bg-secondary/20 flex items-center justify-center">
              <Award size={22} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-white/60">
                National Recognition
              </p>

              <p className="font-semibold">
                Outstanding Emerging Student Branch — 2025
              </p>

              <p className="text-sm text-white/60">
                IEEE India Council
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <button
              onClick={() => scrollToSection("ieee-societies")}
              className="
                inline-flex items-center gap-2
                px-6 py-3
                rounded-lg
                bg-secondary
                text-white
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Explore IEEE
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => scrollToSection("join-ieee")}
              className="
                px-6 py-3
                rounded-lg
                border border-white/40
                text-white
                font-semibold
                hover:bg-white hover:text-primary
                transition
              "
            >
              Join IEEE
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default IEEEHero;
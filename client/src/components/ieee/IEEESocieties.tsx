import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ieeeSocieties } from "@/data/ieee";

const IEEESocieties: React.FC = () => {
  return (
    <section id="ieee-societies" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-secondary">
            Our Community
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
            IEEE Societies & Chapters
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Specialized IEEE communities give students opportunities to
            explore emerging technologies, develop technical skills and
            take part in professional activities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {ieeeSocieties.map((society) => (
            <div
              key={society.id}
              className="
                group relative
                rounded-2xl
                border border-gray-200
                bg-white
                p-7
                hover:border-primary/30
                hover:shadow-xl
                transition-all duration-300
              "
            >

              {/* Logo */}
              <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                <img
                  src={society.logo}
                  alt={society.shortName}
                  className="max-w-12 max-h-12 object-contain"
                />
              </div>

              {/* Short name */}
              <p className="text-sm font-bold text-secondary tracking-widest">
                IEEE {society.shortName}
              </p>

              {/* Name */}
              <h3 className="text-xl font-bold text-primary mt-2">
                {society.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                {society.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-primary font-semibold text-sm">
                Explore Chapter
                <ArrowUpRight
                  size={17}
                  className="
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-transform
                  "
                />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default IEEESocieties;
import React, { useState } from "react";
import {
  Building2,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export interface Alumni {
  name: string;
  batch: string;
  program: string;
  designation: string;
  organization: string;
  description?: string;
  image: string;
}

interface Props {
  alumni: Alumni[];
}

const TopAlumniSection: React.FC<Props> = ({ alumni }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!alumni.length) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % alumni.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + alumni.length) % alumni.length
    );
  };

  // Show maximum 3 cards and continue cyclically
  const visibleAlumni = Array.from(
    { length: Math.min(3, alumni.length) },
    (_, index) => alumni[(currentIndex + index) % alumni.length]
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-[0.2em] text-secondary uppercase">
            Our Alumni
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Top Alumni
          </h2>

          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />

          <p className="text-gray-600 max-w-2xl mx-auto mt-5">
            Our alumni are making their mark across leading organizations
            and diverse professional fields.
          </p>
        </div>

        {/* Alumni Carousel */}
        <div className="relative">

          {/* Previous Button */}
          {alumni.length > 3 && (
            <button
              onClick={prevSlide}
              aria-label="Previous alumni"
              className="
                absolute left-0 top-1/2
                -translate-y-1/2 -translate-x-1/2
                z-10
                w-11 h-11
                rounded-full
                bg-white
                border border-gray-200
                shadow-lg
                flex items-center justify-center
                text-primary
                hover:bg-primary hover:text-white
                transition-all duration-300
              "
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleAlumni.map((alumnus) => (
              <div
                key={`${alumnus.name}-${alumnus.batch}`}
                className="
                  bg-white
                  border border-gray-200
                  rounded-2xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-lg
                  transition-all duration-300
                "
              >
                {/* Photo */}
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={alumnus.image}
                    alt={alumnus.name}
                    className="
                      w-full h-full
                      object-cover
                      hover:scale-105
                      transition-transform duration-500
                    "
                  />
                </div>

                {/* Details */}
                <div className="p-6">

                  <h3 className="text-xl font-bold text-primary">
                    {alumnus.name}
                  </h3>

                  {/* Program + Batch */}
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    <GraduationCap size={16} />

                    <span>
                      {alumnus.program} · {alumnus.batch}
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">

                    {/* Designation */}
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-400">
                        Designation
                      </p>

                      <p className="font-medium text-gray-800">
                        {alumnus.designation}
                      </p>
                    </div>

                    {/* Organization */}
                    <div className="flex items-start gap-2">
                      <Building2
                        size={17}
                        className="text-secondary mt-0.5"
                      />

                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-400">
                          Organization
                        </p>

                        <p className="font-semibold text-gray-800">
                          {alumnus.organization}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    {alumnus.description && (
                      <div className="pt-3 border-t border-gray-100">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {alumnus.description}
                        </p>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          {alumni.length > 3 && (
            <button
              onClick={nextSlide}
              aria-label="Next alumni"
              className="
                absolute right-0 top-1/2
                -translate-y-1/2 translate-x-1/2
                z-10
                w-11 h-11
                rounded-full
                bg-white
                border border-gray-200
                shadow-lg
                flex items-center justify-center
                text-primary
                hover:bg-primary hover:text-white
                transition-all duration-300
              "
            >
              <ChevronRight size={22} />
            </button>
          )}

        </div>

        {/* Carousel Indicator */}
        {alumni.length > 3 && (
          <div className="flex justify-center gap-2 mt-8">
            {alumni.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to alumni ${index + 1}`}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${
                    currentIndex === index
                      ? "w-6 bg-primary"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }
                `}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default TopAlumniSection;
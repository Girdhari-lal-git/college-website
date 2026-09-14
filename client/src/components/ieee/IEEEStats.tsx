import React from "react";
import { ieeeStats } from "@/data/ieee";

const IEEEStats: React.FC = () => {
  return (
    <section className="relative -mt-10 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

          {ieeeStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                text-center px-5 py-7 md:py-9
                ${
                  index !== ieeeStats.length - 1
                    ? "border-r border-gray-100"
                    : ""
                }
              `}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </div>

              <div className="mt-2 text-sm text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default IEEEStats;
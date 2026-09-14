import React, { useState } from "react";
import { CalendarDays } from "lucide-react";
import { ieeeActivities } from "@/data/ieee";

const IEEEActivities: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...Array.from(
      new Set(ieeeActivities.map((activity) => activity.category))
    ),
  ];

  const filteredActivities =
    filter === "All"
      ? ieeeActivities
      : ieeeActivities.filter(
          (activity) => activity.category === filter
        );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-secondary">
            IEEE in Action
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
            Major Activities
          </h2>

          <p className="mt-5 text-gray-600">
            Technical sessions, competitions, leadership activities
            and professional engagement led by the IEEE community.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition
                ${
                  filter === category
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-primary"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">

          {filteredActivities.map((activity) => (
            <article
              key={`${activity.title}-${activity.date}`}
              className="
                bg-white rounded-2xl overflow-hidden
                border border-gray-200
                shadow-sm
                hover:shadow-xl
                transition-all duration-300
              "
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="
                    w-full h-full object-cover
                    hover:scale-105
                    transition-transform duration-500
                  "
                />
              </div>

              <div className="p-6">

                <span className="inline-block text-xs font-semibold uppercase tracking-wide text-secondary">
                  {activity.category}
                </span>

                <h3 className="text-xl font-bold text-primary mt-2">
                  {activity.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                  <CalendarDays size={16} />
                  {activity.date}
                </div>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default IEEEActivities;
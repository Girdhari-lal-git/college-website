import { alumniEvents } from "../../data/alumni/events";
import SectionHeading from "./SectionHeading";

const AlumniTimeline = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="container mx-auto px-6">

        <SectionHeading
          title="Annual Alumni Activities"
          subtitle="Highlights of alumni engagement sessions, events and celebrations during 2025-26."
        />

        <div className="relative border-l-4 border-blue-900 ml-4">

          {alumniEvents.map((event) => (
            <div key={event.id} className="mb-16 ml-10 relative">

              <div className="absolute -left-[52px] top-2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg" />

              <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition">

                <span className="text-sm text-orange-500 font-semibold uppercase">
                  {event.category}
                </span>

                <h3 className="text-2xl font-bold mt-2 text-slate-800">
                  {event.title}
                </h3>

                {event.speaker && (
                  <p className="mt-2 text-blue-900 font-medium">
                    Speaker: {event.speaker}
                  </p>
                )}

                <p className="mt-2 text-sm text-slate-500">
                  {event.date}
                </p>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {event.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniTimeline;
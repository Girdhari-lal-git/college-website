import { alumniStats } from "../../data/alumni/stats";

const AlumniStats = () => {
  return (
    <section className="py-20 bg-white">

      <div className="container mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {alumniStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-50 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-4xl font-bold text-blue-900">
                {stat.value}
              </h3>

              <p className="mt-3 text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniStats;
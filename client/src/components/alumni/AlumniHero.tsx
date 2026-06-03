const AlumniHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white">

      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/alumni/hero.jpg"
          alt="Alumni"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-6 py-32">

        <div className="max-w-4xl">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            PIET Alumni Association
          </h1>

          <p className="mt-6 text-xl text-slate-200 leading-relaxed">
            Connecting generations of innovators, leaders and changemakers.
            Building lifelong relationships beyond classrooms.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold">
              Join Alumni Network
            </button>

            <button className="border border-white hover:bg-white hover:text-slate-900 transition px-8 py-4 rounded-xl font-semibold">
              Explore Events
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniHero;
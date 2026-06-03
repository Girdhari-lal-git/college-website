import { galleryImages } from "../../data/alumni/gallery";
import SectionHeading from "./SectionHeading";

const AlumniGallery = () => {
  return (
    <section className="py-24 bg-white">

      <div className="container mx-auto px-6">

        <SectionHeading
          title="Gallery"
          subtitle="Capturing memories, celebrations and alumni connections."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-4 bg-white">
                <h3 className="font-semibold text-slate-700">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniGallery;
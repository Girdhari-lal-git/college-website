import React, { useEffect, useState } from "react";
import LazyImage from "@/components/LazyImage";

type TeamImage = {
  id: number;
  title: string;
  src: string;
};

const teamImages: TeamImage[] = [
  {
    id: 1,
    title: "Co-ordinators",
    src: "images/chapters/nss/teams/NSS_CLUB-Coordinators.jpg",
  },
  {
    id: 2,
    title: "Management Team",
    src: "images/chapters/nss/teams/NSS_CLUB-Management.jpg",
  },
  {
    id: 3,
    title: "Content Team",
    src: "images/chapters/nss/teams/NSS_CLUB-Content.jpg",
  },
  {
    id: 4,
    title: "Photography Team",
    src: "images/chapters/nss/teams/NSS_CLUB-Photography.jpg",
  },
  {
    id: 5,
    title: "Graphics Team",
    src: "images/chapters/nss/teams/NSS_CLUB-Graphics.jpg",
  },
  {
    id: 6,
    title: "Cultural Team",
    src: "images/chapters/nss/teams/NSS_CLUB-Cultural.jpg",
  },
];

export default function NssCoreTeamsSection() {
  const [selectedImage, setSelectedImage] = useState<TeamImage | null>(null);

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = "hidden"; // prevent background scroll
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [selectedImage]);

  return (
    <section className="container py-12 mx-auto px-4 lg:px-0">
      <h2 className="text-3xl text-primary font-bold mb-2 text-center">
        PIET-NSS Volunteers Core Team
      </h2>
      <div className="w-24 h-1 bg-secondary mb-10 mx-auto"></div>

      {/* 3x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamImages.map((image) => (
          <div
            key={image.id}
            className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg border border-primary bg-white"
            onClick={() => setSelectedImage(image)}
          >
            <LazyImage
              src={image.src}
              alt={image.title}
              className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay title */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
              <div className="w-full bg-black/50 text-white text-center py-3 text-lg font-semibold">
                {image.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 py-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-2 md:-top-6 md:-right-6 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-110 transition"
              aria-label="Close image"
            >
              ✕
            </button>

            {/* Zoomed Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[85vh] w-auto max-w-full rounded-2xl shadow-2xl border border-white"
            />

            {/* Caption */}
            <p className="text-white text-lg md:text-xl font-semibold mt-4">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
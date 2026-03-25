import React, { useEffect, useMemo, useRef, useState } from "react";

type TestimonialProps = {
  quote: string;
  initials: string;
  name: string;
  designation: string;
  image?: string;
};

const Testimonial = ({
  quote,
  initials,
  name,
  designation,
  image,
}: TestimonialProps) => (
  <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm h-full flex flex-col justify-between">
    <div>
      <div className="text-accent text-2xl mb-4">
        <i className="fas fa-quote-left"></i>
      </div>
      <p className="mb-6 italic text-sm md:text-base leading-relaxed">
        {quote}
      </p>
    </div>

    <div className="flex items-center mt-auto">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-accent"
        />
      ) : (
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold mr-4">
          {initials}
        </div>
      )}
      <div>
        <h4 className="font-heading font-semibold">{name}</h4>
        <p className="text-sm opacity-80">{designation}</p>
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  const testimonials: TestimonialProps[] = [
    {
      quote:
        "Studying at PIET helped me gain real practical knowledge along with strong technical fundamentals. The learning environment and guidance from faculty prepared me to confidently step into the professional world. After graduating from PIET, one truly feels ready to call themselves an engineer.",
      initials: "SP",
      name: "Somesh Parmar",
      designation: "B.Tech CE, Batch of 2017",
      image: "/images/testimonials/test_Somesh_Parmar.jpeg",
    },
    {
      quote:
        "My time at PIET helped me grow in many ways beyond academics. The institute provided a vibrant environment where I got the chance to participate, interact, and learn through various experiences. These opportunities helped me build confidence, improve my communication, and develop leadership qualities.",
      initials: "NM",
      name: "Nikunj Maheshwari",
      designation: "B.Tech CSE, Batch of 2022",
      image: "/images/testimonials/test_nikunj_maheshwari.png",
    },
    {
      quote:
        "My experience at PIET was truly enriching and memorable. The institute focused not only on academics but also on overall personality development. The encouragement and mentorship I received helped me think independently and face challenges with confidence. The learning and experiences from my time here have played an important role in shaping my career and future.",
      initials: "DRK",
      name: "Divya R Khandelwal",
      designation: "B.Tech CSE, Batch of 2021",
      image: "/images/testimonials/test_Divya_Khandelwal.jpg",
    },
    {
      quote:
        "PIET gave me right platform to discover my strengths and work on my goals. The positive environment and constant support from faculty helped me improve my skills and gain confidence. Along with academics, I also learned important life lessons like teamwork, responsibility, and dedication. I will always be grateful for the opportunities and learning I received here.",
      initials: "AA",
      name: "Ashutosh Atreya",
      designation: "B.Tech CSE, Batch of 2012",
      image: "/images/testimonials/test_Ashutosh_Atreya.jpg",
    },
    {
      quote:
        "The time I spent at PIET was very valuable for my personal and professional growth. The institute provided excellent learning opportunities and always motivated us to do better. The knowledge, guidance, and exposure I received helped me build a strong foundation for my career. It is inspiring to see how the institute continues to shape the future of its students.",
      initials: "VM",
      name: "Vishal Mathur",
      designation: "B.Tech CSE, Batch of 2019",
      image: "/images/testimonials/test_Vishal_Mathur.jpg",
    },
    {
      quote:
        "PIET provided an environment where learning was encouraged and growth was constant. The faculty members were supportive and always ready to guide us. The institute helped me develop technical knowledge as well as confidence in my abilities. The experience and learning from here have been very helpful in my professional journey.",
      initials: "IS",
      name: "Ishita Singh",
      designation: "B.Tech CSE, Batch of 2011",
      image: "/images/testimonials/test_Ishita_Singh.jpg",
    },
    {
      quote:
        "Living in the PIET hostel was a wonderful experience that contributed greatly to my overall growth. The hostel provided a safe, comfortable, and disciplined environment that helped me focus on my studies. The facilities were well maintained, and the support from wardens made it easy to adjust. ",
      initials: "HA",
      name: "Hina Azad",
      designation: "B.Tech CSE, Batch of 2015",
      image: "/images/testimonials/test_Hina_Azad.jpg",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const startXRef = useRef<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive visible cards
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) setVisibleCount(1);      // mobile
      else if (window.innerWidth < 1024) setVisibleCount(2); // tablet
      else setVisibleCount(3);                               // desktop
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Build infinite-loop track:
  // [last N clones] + originals + [first N clones]
  const extendedTestimonials = useMemo(() => {
    const head = testimonials.slice(0, visibleCount);
    const tail = testimonials.slice(-visibleCount);
    return [...tail, ...testimonials, ...head];
  }, [testimonials, visibleCount]);

  // Start at the first "real" item
  useEffect(() => {
    setCurrentIndex(visibleCount);
    setIsTransitioning(false);

    // next tick -> re-enable transitions
    const t = setTimeout(() => setIsTransitioning(true), 30);
    return () => clearTimeout(t);
  }, [visibleCount]);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Autoplay
  useEffect(() => {
    if (testimonials.length <= visibleCount || isPaused) return;

    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [visibleCount, testimonials.length, isPaused]);

  // Infinite loop correction
  const handleTransitionEnd = () => {
    // If moved past last real item -> jump back to first real item
    if (currentIndex >= testimonials.length + visibleCount) {
      setIsTransitioning(false);
      setCurrentIndex(visibleCount);

      setTimeout(() => setIsTransitioning(true), 30);
    }

    // If moved before first real item -> jump to last real item
    if (currentIndex < visibleCount) {
      setIsTransitioning(false);
      setCurrentIndex(testimonials.length + visibleCount - 1);

      setTimeout(() => setIsTransitioning(true), 30);
    }
  };

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startXRef.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startXRef.current - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide(); // swipe left
      else prevSlide();          // swipe right
    }

    startXRef.current = null;
  };

  return (
    <section className="py-16 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Student Testimonials
          </h2>
          <p className="max-w-3xl mx-auto opacity-80">
            Hear what our students and alumni have to say about their experience
            at Poornima Institute of Engineering & Technology.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Window */}
          <div className="overflow-hidden">
            <div
              className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className={`flex-shrink-0 px-3 ${
                    visibleCount === 1
                      ? "w-full"
                      : visibleCount === 2
                      ? "w-1/2"
                      : "w-1/3"
                  }`}
                >
                  <div className="h-full text-justify">
                    <Testimonial {...testimonial} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          {testimonials.length > visibleCount && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center shadow z-10"
                aria-label="Previous testimonials"
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              <button
                onClick={nextSlide}
                className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center shadow z-10"
                aria-label="Next testimonials"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
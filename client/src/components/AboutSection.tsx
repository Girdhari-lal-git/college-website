import { Link } from "wouter";
import LazyImage from "./LazyImage";
import { Award } from "lucide-react";
import { useState, useEffect } from "react";


type StatProps = {
  number: string;
  label: string;
};

//Upcoming event details

const events = [
  {
    id: 1,
    image:
      "/images/UpcomingEvents/IIT-G-spoc.jpg",
    title: "PIET has recognized among india's top 50 institutes along with IITs and NITs",
    description: "We will mentor tier-2 and tier-3 colleges nationwide to enhance critical thinking, industry connect and employbility in engineering colleges",
    link: "/events/kalanidhi",
  },
  {
    id: 2,
    image:
      "/images/UpcomingEvents/SIH-2025-Nodel-Center.jpg",
    title: "Smart India Hackathon 2025-Software Edition",
    description: "8-9 December 2025-A national-level innovation event for students to develop software solutions for real-world problems",
    link: "/events/hackathon",
  },
  {
    id: 3,
    image:
      "/images/UpcomingEvents/PIET-campus_cornor.jpg",
    title: "FDP on Agentic Ai",
    description: "Expert talks and workshops on AI advancements.",
    link: "/events/ai-conclave",
  },
];


// Event Carousel Component, with auto-slide and marquee effect

const EventCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      {/* Image Slider */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <img
                src={events[index].image}
                alt={events[index].title}
                className="w-full aspect-[3/2] object-cover transition-all duration-700"
                />


        {/* Floating Badge - NAAC */}
        <div className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-lg border border-neutral-200">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
              <Award className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-primary text-sm">Grade 'A'</p>
              <p className="text-[11px] text-neutral-600">NAAC Accredited</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Running Info Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white py-5 overflow-hidden rounded-b-2xl">
        <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white py-4 overflow-hidden rounded-b-2xl marquee-container">
  <div className="whitespace-nowrap animate-marquee px-4 text-sm flex items-center gap-4">

          <span className="font-semibold">{events[index].title}</span> —{" "}
          {events[index].description}
          <a
            href={events[index].link}
            className="underline text-blue-300 hover:text-blue-400 ml-3"
          >
            Know More →
          </a>
        </div>
        </div>
      </div>

      {/* Dots for manual control */}
      <div className="flex justify-center mt-5 gap-2">
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full ${
              i === index ? "bg-primary" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      {/* Marquee animation */}
                <style>
            {`
                .animate-marquee {
                display: inline-block;
                animation: marquee 10s linear infinite;
                }

                /* Pause animation on hover */
                .marquee-container:hover .animate-marquee {
                animation-play-state: paused;
                }

                @keyframes marquee {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
                }
            `}
</style>
    </div>
  );
};

const Stat = ({ number, label }: StatProps) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-neutral-200 hover:shadow-lg hover:border-primary transition-all duration-300 hover:-translate-y-1">
    <span className="text-primary font-bold text-4xl mb-2">{number}</span>
    <span className="text-neutral-700 text-center font-medium">{label}</span>
  </div>
);

export default function AboutSection() {
  const stats: StatProps[] = [
    { number: "15+", label: "Years of Excellence" },
    { number: "90+", label: "Faculty Members" },
    { number: "1800+", label: "Students" },
    { number: "75%", label: "Placement Rate" },
  ];

  return (
    <section className="py-20 bg-neutral-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 lg:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slideInLeft">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 leading-tight">
                About Poornima Institute
              </h2>
              <div className="w-24 h-1 bg-secondary mb-6"></div>
            </div>

            <p className="text-neutral-700 mb-6 leading-relaxed text-lg text-justify">
              Poornima Institute of Engineering & Technology (PIET) was
              established in 2007 with the goal of providing quality technical
              education and creating skilled professionals. Located in Jaipur,
              Rajasthan, PIET has state-of-the-art infrastructure and is
              affiliated with Rajasthan Technical University.
            </p>
            <p className="text-neutral-700 mb-8 leading-relaxed text-lg text-justify">
              Our institute is known for its excellence in academics, research,
              and placements. We focus on holistic development of students
              through various co-curricular and extracurricular activities
              alongside rigorous academic programs.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => (
                <Stat key={index} {...stat} />
              ))}
            </div>

            <Link
              href="/about"
              className="btn-primary rounded-lg shadow-md hover-lift"
            >
              Discover More About Us <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>

          {/* Upcoming Event Section  */}
                    <div className="relative">
                            <EventCarousel />

                            {/* Background Decorations (you can keep them for design) */}
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10"></div>
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl -z-10"></div>
                            </div>
        </div>
      </div>

      {/* vision and missoin */}


    </section>
  );
}

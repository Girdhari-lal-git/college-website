import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";

type ProgramProps = {
  image: string;
  title: string;
  description: string;
  href: string;
};

const Program = ({ image, title, description, href }: ProgramProps) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-neutral-200 hover:shadow-xl hover:border-primary transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full">
    {/* Header Section with Image */}
    <div className="h-48 bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute w-32 h-32 bg-white/10 rounded-full -top-10 -right-10"></div>
      <div className="absolute w-24 h-24 bg-white/10 rounded-full -bottom-8 -left-8"></div>

      <img
        src={image}
        alt={title}
        className="z-10 h-42 w-88 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
      />
    </div>

    {/* Body Section */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-heading font-bold text-xl mb-3 text-primary group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <p className="text-neutral-600 mb-5 flex-grow">{description}</p>
      <Link href={href}>
        <a className="text-secondary hover:text-secondary-dark font-semibold flex items-center mt-auto group-hover:translate-x-1 transition-transform">
          Learn More{" "}
          <i className="fas fa-arrow-right ml-2 group-hover:ml-3 transition-all"></i>
        </a>
      </Link>
    </div>
  </div>
);

export default function AcademicPrograms() {
  // No more need to load Lordicon script
  useEffect(() => {}, []);

  const programs: ProgramProps[] = [
    {
      image: "/images/programs/cse.jpg",
      title: "Computer Engineering",
      description:
        "Comprehensive computer engineering program covering hardware-software integration, system design, programming, and modern computing technologies.",
      href: "/computer-science",
    },
    {
      image: "/images/programs/cs & tech.jpg",
      title: "Artificial Intelligence & Data Science",
      description:
        "Interdisciplinary program combining AI techniques with data science methodologies for intelligent data analysis and automated systems.",
      href: "/artificial-intelligence",
    },
    {
      image: "/images/programs/CS(AI).jpg",
      title: "Computer Science & Engineering (AI)",
      description:
        "Advanced computer science program with specialized focus on artificial intelligence, machine learning algorithms, neural networks, and intelligent system design.",
      href: "/artificial-intelligence",
    },
    {
      image: "/images/programs/csds.jpg",
      title: "Computer Science & Engineering (Data Science)",
      description:
        "Computer engineering with emphasis on data analytics, big data processing, statistical modeling, and data-driven decision making.",
      href: "/artificial-intelligence",
    },
    {
      image: "/images/programs/IoT.jpg",
      title: "Computer Science & Engineering (IoT)",
      description:
        "Specialized program focusing on Internet of Things technologies, connected devices, smart systems, and embedded computing solutions.",
      href: "/dep-iot",
    },
    {
      image: "/images/programs/electronics.jpg",
      title: "Electronics and Communication Engineering",
      description:
        "Focus on electronic circuits, communication systems, signal processing, wireless technologies, and modern telecommunication networks.",
      href: "/programs/ece",
    },
    {
      image: "/images/programs/electrical.jpg",
      title: "Electrical Engineering",
      description:
        "Study of electrical systems, power generation, renewable energy, control systems, and electrical machine design and analysis.",
      href: "/programs/electrical",
    },
    {
      image: "/images/programs/mach-learn.jpg",
      title: "Computer Science & Engineering (Indian Language)",
      description:
        "Computer engineering program designed to promote indigenous language computing, localization technologies, and regional software development.",
      href: "/computer-science",
    },
  ];

  return (
    <section className="py-20 bg-neutral-50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50"></div>

      <div className="container mx-auto px-4 lg:px-0 relative z-10">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Academic Programs
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-neutral-700 max-w-3xl mx-auto text-lg">
            Explore our diverse range of undergraduate and postgraduate programs
            designed to prepare students for successful careers in engineering
            and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="animate-scaleUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Program {...program} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

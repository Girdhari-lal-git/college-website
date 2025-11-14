// src/pages/ELibrary.tsx
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";
import LazyImage from "@/components/LazyImage";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

/**
 * Redesigned E-Library Page (TypeScript + Tailwind + Framer Motion)
 * Theme: Poornima (navy blue & gold accents)
 *
 * Replace your existing ELibrary.tsx with this file.
 * Example images are from Unsplash — replace with actual library images when ready.
 */

type LinkItem = {
  title: string;
  href: string;
  subtitle?: string;
};

const PRIMARY = "bg-gradient-to-br from-[#072055] to-[#0a2a66]"; // Poornima navy gradient
const ACCENT = "text-[#fcbf49]"; // gold

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const ELibrary: React.FC = () => {
  const quickAccess: LinkItem[] = [
    { title: "Web OPAC", href: "#opac", subtitle: "Search the catalog" },
    { title: "KOHA - LMS", href: "#koha", subtitle: "Library Management" },
    { title: "E-Resources", href: "#eresources", subtitle: "Journals & DBs" },
    { title: "E-Books", href: "#ebooks", subtitle: "Downloadable books" },
  ];

  const eResources: LinkItem[] = [
    { title: "IEEE Xplore", href: "https://ieeexplore.ieee.org/" },
    { title: "ScienceDirect", href: "https://www.sciencedirect.com/" },
    { title: "SpringerLink", href: "https://link.springer.com/" },
    { title: "J-Gate", href: "https://jgateplus.com/" },
    { title: "SAGE Journals", href: "https://journals.sagepub.com/" },
    { title: "NDL India", href: "https://ndl.iitkgp.ac.in/" },
  ];

  const ejournals: LinkItem[] = [
    { title: "Subscription Journals (List)", href: "#" },
    { title: "Open Access Journals", href: "https://doaj.org/" },
    { title: "ArXiv (Preprints)", href: "https://arxiv.org/" },
  ];

  const ebooks: LinkItem[] = [
    { title: "PIET E-Books (Drive)", href: "https://drive.google.com/" },
    { title: "DOAB (Directory of Open Access Books)", href: "https://www.doabooks.org/" },
    { title: "Project Gutenberg", href: "https://www.gutenberg.org/" },
    { title: "Open Textbook Library", href: "https://open.umn.edu/opentextbooks/" },
  ];

  const rules = [
    "Maintain silence and avoid disturbing other readers.",
    "Carry a valid college ID card while entering the library.",
    "Mobile phones should be kept on silent mode; no calls in reading areas.",
    "Do not damage books, journals or library property. Report any damage immediately.",
    "Return borrowed materials by the due date. Renewals available via OPAC if eligible.",
    "Food and beverages are not allowed inside the reading rooms.",
  ];

  const services = [
    { title: "Book Lending", desc: "Issue / Return services with digital records." },
    { title: "OPAC", desc: "Online Public Access Catalog for quick search." },
    { title: "Reference Support", desc: "Research assistance & bibliographic help." },
    { title: "Digital Repository", desc: "Institutional publications & dissertations." },
    { title: "E-Resources Access", desc: "Subscribed journals and databases." },
    { title: "Reading Rooms", desc: "Quiet and group study areas with Wi-Fi." },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-gray-800">
      <AccessibilityFeatures />
      <Header />

      <BreadCrumb
        title="Central Library (E-Library)"
        description="Digital resources, journals, e-books and more — supporting learning & research"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "E-Library", isCurrent: true },
        ]}
      />

      {/* HERO */}
      <header className={`relative ${PRIMARY} text-white py-20`}>
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Central Library
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              A modern knowledge hub for students and faculty — access print and electronic
              resources, research support, and a digital repository.
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="#opac"
                className="inline-block bg-white/10 hover:bg-white/20 px-5 py-3 rounded-full border border-white/20 backdrop-blur-sm transition"
              >
                Explore OPAC
              </a>
              <a
                href="#eresources"
                className="inline-block bg-[#fcbf49] text-[#072055] px-5 py-3 rounded-full font-semibold shadow-sm hover:brightness-95 transition"
              >
                E-Resources
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero Accent Images */}
        <div className="absolute right-8 bottom-0 hidden lg:block">
          <div className="w-64 h-44 rounded-xl overflow-hidden shadow-lg">
            <LazyImage
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=example"
              alt="Library interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 -mt-12">
        {/* About + Gallery */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <motion.div {...fadeUp} className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#072055] mb-3">
                About Central Library
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Central Library at Poornima is the academic heart of the campus. It
                houses an extensive collection of textbooks, reference works, journals,
                project reports, and a growing digital collection of e-books and
                databases. Our trained staff supports students and faculty in literature
                search, reference queries, and research data management.
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#fcbf49]/10 flex items-center justify-center text-[#fcbf49]">
                    📚
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#072055]">Collections</h3>
                    <p className="text-gray-600 text-sm">Textbooks, reference books, journals, and project reports</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#072055]/5 flex items-center justify-center text-[#072055]">
                    🖥️
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#072055]">Digital Access</h3>
                    <p className="text-gray-600 text-sm">Remote access to subscribed e-journals and e-books</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="order-first lg:order-last"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden shadow-sm">
                  <LazyImage
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=example"
                    alt="Reading room"
                    className="w-full h-44 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm">
                  <LazyImage
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=example"
                    alt="Bookshelf"
                    className="w-full h-44 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm">
                  <LazyImage
                    src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=example"
                    alt="Students studying"
                    className="w-full h-44 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm">
                  <LazyImage
                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=example"
                    alt="Library desk"
                    className="w-full h-44 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-8">
          <motion.div {...fadeUp} className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#072055]">Library Services</h2>
            <div className="hidden md:flex items-center gap-4">
              <span className={`${ACCENT} font-semibold`}>Open to all students</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <motion.article
                key={s.title}
                {...fadeUp}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#072055]/5 text-[#072055] text-xl">
                    📘
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#072055]">{s.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* OPAC / Quick Access */}
        <section id="opac" className="mb-8">
          <motion.div {...fadeUp} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#072055]">OPAC & Quick Access</h2>
              <a
                href="#"
                className="px-3 py-2 rounded-full border border-[#072055] text-[#072055] text-sm hover:bg-[#072055] hover:text-white transition"
              >
                Open OPAC
              </a>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {quickAccess.map((q) => (
                <motion.a
                  key={q.title}
                  {...fadeUp}
                  href={q.href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:shadow-md transition bg-white"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#fcbf49]/10 flex items-center justify-center text-[#fcbf49]">
                    🔎
                  </div>
                  <div>
                    <h4 className="font-medium text-[#072055]">{q.title}</h4>
                    {q.subtitle && <p className="text-sm text-gray-500">{q.subtitle}</p>}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* E-Resources */}
        <section id="eresources" className="mb-8">
          <motion.div {...fadeUp} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#072055]">E-Resources</h2>
              <p className="text-sm text-gray-500">Subscribed databases & open platforms</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {eResources.map((r) => (
                <motion.a
                  key={r.title}
                  {...fadeUp}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg border border-gray-100 hover:bg-[#072055]/5 transition"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-[#072055]">{r.title}</h4>
                      {r.subtitle && <p className="text-sm text-gray-500">{r.subtitle}</p>}
                    </div>
                    <div className="text-sm text-gray-400">↗</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* E-Journals */}
        <section id="ejournals" className="mb-8">
          <motion.div {...fadeUp} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#072055]">E-Journals</h2>
              <p className="text-sm text-gray-500">Access journal titles & article lists</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {ejournals.map((j) => (
                <motion.a
                  key={j.title}
                  {...fadeUp}
                  href={j.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg border border-gray-100 hover:bg-[#fcbf49]/5 transition"
                >
                  <h4 className="font-semibold text-[#072055]">{j.title}</h4>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* E-Books */}
        <section id="ebooks" className="mb-8">
          <motion.div {...fadeUp} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#072055]">E-Books Collection</h2>
              <p className="text-sm text-gray-500">Categorized & cross-discipline collections</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {ebooks.map((e) => (
                <motion.a
                  key={e.title}
                  {...fadeUp}
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg border border-gray-100 hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-semibold text-[#072055]">{e.title}</h4>
                    {e.subtitle && <p className="text-sm text-gray-500">{e.subtitle}</p>}
                  </div>
                  <div className="text-sm text-gray-400 mt-4">Explore ↗</div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Rules */}
        <section className="mb-8">
          <motion.div {...fadeUp} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#072055]">Library Rules</h2>
              <p className="text-sm text-gray-500">Please follow these guidelines</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-3 list-disc list-inside text-gray-700">
                {rules.map((r) => (
                  <li key={r} className="leading-relaxed">{r}</li>
                ))}
              </ul>

              <div className="p-4 bg-[#072055]/5 rounded-lg">
                <h4 className="font-semibold text-[#072055] mb-2">Fines & Renewals</h4>
                <p className="text-sm text-gray-600">
                  Books can be renewed twice if not reserved by other users. Late returns may
                  attract fines as per institutional policy. For assistance, contact library staff.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Timings */}
        <section className="mb-8">
          <motion.div {...fadeUp} className="rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 bg-gradient-to-br from-[#072055] to-[#0a2a66] text-white">
                <h3 className="text-xl font-bold mb-3">Library Timings</h3>
                <div className="space-y-3">
                  <div className="flex justify-between bg-white/10 rounded-lg p-3">
                    <span>Monday – Saturday</span>
                    <span className="font-semibold">8:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between bg-white/10 rounded-lg p-3">
                    <span>Sunday & Holidays</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>

                <p className="text-sm opacity-90 mt-4">
                  Special hours may apply during examination periods. For circulation desk
                  timings, check the circulation section.
                </p>
              </div>

              <div className="p-6 bg-white border border-gray-100">
                <h3 className="text-xl font-bold text-[#072055] mb-3">Circulation Desk</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Issue / Return</span>
                    <span className="font-semibold">9:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Reference Help Desk</span>
                    <span className="font-semibold">10:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Digital Access Support</span>
                    <span className="font-semibold">10:00 AM – 4:30 PM</span>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 rounded-md bg-[#fcbf49] text-[#072055] font-semibold"
                  >
                    Contact Library
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <div className="container mx-auto px-4">
        <Cta />
      </div>

      <Footer />
    </div>
  );
};

export default ELibrary;

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ExternalLink,
  FlaskConical,
  Globe2,
  GraduationCap,
  MapPin,
  Plane,
  Search,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Users,
  X,
} from "lucide-react";

import {
  GLOBAL_PARTNERS,
  PROGRAM_TYPES,
  MobilityType,
  RegionType,
  regionLabels,
  UniversityPartner,
} from "../data/globalCareer";
import { AccessibilityFeatures } from "../components/AccessibilityFeatures";
import Header from "../components/Header";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";


const programIcons: Record<MobilityType, typeof Globe2> = {
  all: Globe2,
  semester_exchange: Plane,
  higher_studies: GraduationCap,
  internship: BriefcaseBusiness,
  summer_school: Sun,
  joint_research: FlaskConical,
};

const programOptions: MobilityType[] = ["all", "semester_exchange", "higher_studies", "internship", "summer_school", "joint_research"];

const GlobalCareerPathways = () => {
  const [selectedProgram, setSelectedProgram] = useState<MobilityType>("all");
  const [selectedRegion, setSelectedRegion] = useState<RegionType>("all");
  const [selectedPartner, setSelectedPartner] = useState<UniversityPartner | null>(null);
  const [cgpa, setCgpa] = useState(7.8);
  const [year, setYear] = useState("3rd Year B.Tech");
  const [goal, setGoal] = useState("Semester exchange");

  const activeProgram = PROGRAM_TYPES[selectedProgram];
  const ActiveIcon = programIcons[selectedProgram];
  const filteredPartners = useMemo(
    () => GLOBAL_PARTNERS.filter((partner) => (selectedRegion === "all" || partner.region === selectedRegion) && (selectedProgram === "all" || partner.programs.includes(selectedProgram))),
    [selectedProgram, selectedRegion],
  );
  const assessment = cgpa >= 8 ? {
    label: "Strong starting profile",
    tone: "border-green-200 bg-green-50 text-green-800",
    message: "Explore exchange, research and higher-study options while checking the current partner requirements.",
  } : cgpa >= 7 ? {
    label: "Good profile to develop",
    tone: "border-blue-200 bg-blue-50 text-blue-800",
    message: "You can begin shortlisting pathways. Keep building projects, communication skills and academic consistency.",
  } : {
    label: "Build your foundation",
    tone: "border-amber-200 bg-amber-50 text-amber-800",
    message: "Short programmes and early exploration can be useful while you strengthen your academic profile.",
  };

  const roadmap = [
    ["01", "First year", "Build academic foundations, join student communities and attend global orientation sessions."],
    ["02", "Second year", "Try a summer school or internship and begin comparing destinations and costs."],
    ["03", "Third year", "Map courses, prepare tests and documents, and speak with your department about nominations."],
    ["04", "Final year", "Complete applications, recommendations, transcripts, visa planning and pre-departure preparation."],
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <AccessibilityFeatures />
      <Header />
      <BreadCrumb title="Global Career Pathways" description="International study, internship and research guidance for PIET students." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Global Career Pathways", isCurrent: true }]} />

      <header className="relative overflow-hidden bg-[#172554] text-white">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[#b91c1c] [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[.2em] text-red-200"><Globe2 size={18} /> Office of global opportunities</p>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[.98] tracking-tight sm:text-6xl lg:text-8xl">Your gateway to<br /><span className="text-red-200">global mobility.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100">Compare pathways, explore partner universities and understand the preparation steps before you speak with PIET about a current opportunity.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#pathways" className="inline-flex items-center gap-2 bg-[#b91c1c] px-5 py-3 font-bold transition hover:bg-red-700">Choose a pathway <ArrowRight size={17} /></a><a href="#eligibility" className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 font-semibold transition hover:bg-white/10">Check your profile <Sparkles size={17} /></a></div>
          </div>
          <div className="relative z-10 self-end border-l border-white/40 pl-6 lg:mb-2 lg:pl-10"><p className="text-7xl font-extrabold">30</p><p className="max-w-xs text-lg font-semibold">AIESEC outgoing internships reported by Poornima Group</p><div className="mt-8 grid grid-cols-2 gap-5 border-t border-white/30 pt-5"><div><strong className="block text-3xl">4,000+</strong><span className="text-sm text-blue-100">alumni globally</span></div><div><strong className="block text-3xl">100+</strong><span className="text-sm text-blue-100">incoming internships</span></div></div></div>
        </div>
      </header>

      <main>
        <section id="pathways" className="scroll-mt-20 border-b border-slate-200 bg-white py-16 lg:py-20"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-extrabold uppercase tracking-[.2em] text-red-700">Mobility frameworks</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Choose your international path</h2><p className="mt-4 leading-7 text-slate-600">Select a goal to see the typical student profile, benefits, process and partner destinations to investigate.</p></div><div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">{programOptions.map((program) => { const Icon = programIcons[program]; const item = PROGRAM_TYPES[program]; const active = selectedProgram === program; return <button key={program} onClick={() => setSelectedProgram(program)} className={`border p-4 text-left transition ${active ? "border-[#1d4ed8] bg-[#1e3a8a] text-white shadow-lg" : "border-slate-200 bg-slate-50 hover:border-red-300 hover:bg-red-50"}`}><Icon size={23} className={active ? "text-red-200" : "text-red-700"} /><span className="mt-5 block text-sm font-bold">{item.title}</span><span className={`mt-1 block text-xs ${active ? "text-blue-100" : "text-slate-500"}`}>{item.badge}</span></button>; })}</div></div></section>
+
+        <section className="bg-blue-50 py-14 lg:py-18"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="overflow-hidden border border-blue-100 bg-[#172554] text-white shadow-xl"><div className="flex flex-col gap-6 border-b border-white/15 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between"><div><div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 text-xs font-bold text-red-200"><ActiveIcon size={15} /> {activeProgram.badge}</div><h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{activeProgram.title}</h2><p className="mt-2 max-w-2xl text-blue-100">{activeProgram.subtitle}</p></div><div className="max-w-sm border-l border-red-300/50 pl-4"><p className="text-xs font-bold uppercase tracking-wider text-red-200">Who should explore this?</p><p className="mt-2 text-sm leading-6 text-blue-100">{activeProgram.whoIsEligible}</p></div></div><div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2"><div><h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-200"><Check size={17} /> What you can gain</h3><p className="mt-4 text-sm leading-7 text-blue-100">{activeProgram.description}</p><ul className="mt-5 space-y-3">{activeProgram.keyBenefits.map((benefit) => <li key={benefit} className="flex gap-3 text-sm text-white"><Check size={17} className="mt-0.5 shrink-0 text-red-200" />{benefit}</li>)}</ul></div><div><h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-200"><ArrowRight size={17} /> A practical process</h3><ol className="mt-4 space-y-3">{activeProgram.processSteps.map((step, index) => <li key={step} className="flex gap-3 border border-white/10 bg-white/5 p-3 text-sm text-blue-100"><span className="font-bold text-red-200">0{index + 1}</span>{step}</li>)}</ol></div></div><div className="flex flex-wrap items-center gap-2 border-t border-white/15 p-6 sm:px-8"><span className="mr-2 text-xs font-bold text-blue-200">Explore with this pathway:</span>{activeProgram.featuredPartners.map((partner) => <span key={partner} className="bg-white/10 px-3 py-1 text-xs font-semibold text-white">{partner}</span>)}</div></div></div></section>
+
+        <section id="partners" className="scroll-mt-20 py-16 lg:py-20"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-sm font-extrabold uppercase tracking-[.2em] text-red-700">University MoUs directory</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Partner universities worldwide</h2><p className="mt-3 max-w-2xl text-slate-600">Filter the listed destinations by region and the pathway you selected. Open the official site, then confirm the active PIET process.</p></div><div className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a8a]"><SlidersHorizontal size={17} /> {filteredPartners.length} destinations shown</div></div><div className="mt-8 flex flex-wrap gap-2">{regionLabels.map((region) => <button key={region.id} onClick={() => setSelectedRegion(region.id)} className={`px-4 py-2 text-xs font-bold transition ${selectedRegion === region.id ? "bg-[#1e3a8a] text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-red-300 hover:text-red-700"}`}>{region.label}</button>)}</div><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filteredPartners.map((partner) => <button key={partner.id} onClick={() => setSelectedPartner(partner)} className="group flex flex-col justify-between border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"><div><div className="flex items-start justify-between gap-3"><div className="flex h-14 w-16 items-center justify-center bg-slate-50 p-2">{partner.logo ? <img src={partner.logo} alt={`${partner.name} logo`} className="max-h-full max-w-full object-contain" /> : <span className="text-xl font-black text-[#1e3a8a]">{partner.flag}</span>}</div><span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-red-700"><MapPin size={12} /> {partner.country}</span></div><h3 className="mt-5 text-lg font-bold group-hover:text-[#1e3a8a]">{partner.name}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{partner.description}</p><div className="mt-4 flex flex-wrap gap-1.5">{partner.highlights.map((highlight) => <span key={highlight} className="bg-blue-50 px-2 py-1 text-[11px] font-semibold text-[#1e3a8a]">{highlight}</span>)}</div></div><div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4"><span className="text-xs font-semibold text-slate-500">{partner.keyDisciplines.slice(0, 2).join(" · ")}</span><span className="text-xs font-bold text-red-700">View support <ArrowRight size={14} className="inline" /></span></div></button>)}</div>{filteredPartners.length === 0 && <div className="mt-8 border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">No partner is currently mapped to this filter. Try another region or pathway.</div>}</div></section>
+
+        {selectedPartner && <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/60 p-4 sm:items-center" role="dialog" aria-modal="true" aria-label={`${selectedPartner.name} details`}><div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-blue-200 bg-white shadow-2xl"><div className="flex items-start justify-between bg-[#172554] p-6 text-white"><div><p className="text-xs font-bold uppercase tracking-wider text-red-200">Partner detail</p><h2 className="mt-2 text-2xl font-extrabold">{selectedPartner.name}</h2><p className="mt-1 text-sm text-blue-100">{selectedPartner.country}</p></div><button onClick={() => setSelectedPartner(null)} aria-label="Close partner details" className="p-2 text-blue-100 hover:text-white"><X size={22} /></button></div><div className="grid gap-8 p-6 sm:p-8 md:grid-cols-2"><div><p className="leading-7 text-slate-600">{selectedPartner.description}</p><a href={selectedPartner.officialLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold text-red-700 hover:underline">Open official university site <ExternalLink size={16} /></a></div><div><h3 className="text-sm font-bold uppercase tracking-wider text-[#1e3a8a]">How PIET can help you prepare</h3><p className="mt-3 bg-blue-50 p-4 text-sm leading-6 text-slate-700">{selectedPartner.pietSupport}</p><h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-[#1e3a8a]">Key disciplines</h3><div className="mt-3 flex flex-wrap gap-2">{selectedPartner.keyDisciplines.map((discipline) => <span key={discipline} className="border border-blue-100 bg-white px-3 py-1 text-xs font-semibold text-[#1e3a8a]">{discipline}</span>)}</div></div></div></div></div>}
+
+        <section id="eligibility" className="scroll-mt-20 bg-slate-900 py-16 text-white lg:py-20"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-sm font-extrabold uppercase tracking-[.2em] text-red-300">Interactive profile check</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">What should you prepare next?</h2><p className="mt-3 max-w-2xl text-slate-300">This is a planning guide, not an admissions decision. Final eligibility depends on the current opportunity and PIET approval process.</p></div><Sparkles className="hidden text-red-300 lg:block" size={42} /></div><div className="mt-10 grid gap-6 lg:grid-cols-[.85fr_1.15fr]"><div className="border border-slate-700 bg-slate-950 p-6"><label className="block text-sm font-bold text-slate-200">Current CGPA <span className="text-red-300">{cgpa.toFixed(1)}</span></label><input type="range" min="5" max="10" step="0.1" value={cgpa} onChange={(event) => setCgpa(Number(event.target.value))} className="mt-5 w-full accent-red-600" /><div className="mt-1 flex justify-between text-xs text-slate-500"><span>5.0</span><span>7.0</span><span>8.5</span><span>10.0</span></div><label className="mt-6 block text-sm font-bold text-slate-200">Academic year<select value={year} onChange={(event) => setYear(event.target.value)} className="mt-2 block w-full border border-slate-700 bg-slate-900 p-3 text-sm text-white focus:border-red-500 focus:outline-none"><option>1st Year B.Tech</option><option>2nd Year B.Tech</option><option>3rd Year B.Tech</option><option>4th Year B.Tech</option></select></label><label className="mt-5 block text-sm font-bold text-slate-200">Your current goal<select value={goal} onChange={(event) => setGoal(event.target.value)} className="mt-2 block w-full border border-slate-700 bg-slate-900 p-3 text-sm text-white focus:border-red-500 focus:outline-none"><option>Semester exchange</option><option>Overseas Masters</option><option>Global internship</option><option>Summer school</option><option>Joint research</option></select></label></div><div className="border border-slate-700 bg-slate-950 p-6"><div className={`border p-5 ${assessment.tone}`}><p className="text-xs font-extrabold uppercase tracking-wider">{assessment.label}</p><p className="mt-3 text-sm font-semibold leading-6">{assessment.message}</p></div><div className="mt-6"><h3 className="text-sm font-bold uppercase tracking-wider text-red-300">Recommended next steps for {year}</h3><ul className="mt-4 space-y-3 text-sm text-slate-300"><li className="flex gap-3"><Check className="shrink-0 text-red-300" size={17} />Shortlist options related to <strong className="text-white">{goal.toLowerCase()}</strong>.</li><li className="flex gap-3"><Check className="shrink-0 text-red-300" size={17} />Ask your department about academic fit, timelines and current notices.</li><li className="flex gap-3"><Check className="shrink-0 text-red-300" size={17} />Build evidence through projects, research, communication and documented work.</li></ul></div></div></div></div></section>
+
  <section className="py-16 lg:py-20"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-extrabold uppercase tracking-[.2em] text-red-700">Four-year global timeline</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">When to plan your international steps</h2><p className="mt-3 text-slate-600">A steady runway gives you time to compare, prepare and make informed decisions.</p></div><div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{roadmap.map(([number, title, description]) => <div key={number} className="border-t-4 border-[#1e3a8a] bg-white p-6 shadow-sm"><span className="text-sm font-extrabold text-red-700">{number}</span><h3 className="mt-3 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{description}</p></div>)}</div></div></section>
  </main>
+
  <footer className="bg-[#172554] py-14 text-white"><div className="mx-auto max-w-6xl px-6 lg:px-8"><div className="text-center"><p className="text-sm font-bold uppercase tracking-[.2em] text-red-200">Start your global journey</p><h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Bring your questions to Poornima.</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">Review the official collaboration directory, discuss your academic fit with your department and verify every current requirement before applying.</p></div></div><div className="mt-10 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-sm md:grid-cols-[auto_1fr_auto] md:items-center"><div className="flex justify-center md:justify-start"><img src="/images/council/graduateGateway.jpg" alt="Graduate Gateway logo" className="h-20 w-20 rounded-2xl border border-white/10 bg-white object-cover shadow-lg" /></div><div className="text-center md:text-left"><p className="text-xs font-bold uppercase tracking-[.25em] text-red-200">Student club</p><h3 className="mt-2 text-2xl font-extrabold text-white">Graduate Gateway</h3><p className="mt-2 text-sm leading-6 text-blue-100">Guiding students with career awareness, skill-building support, and mentorship for future opportunities.</p><a href="mailto:graduate@poornima.org" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-red-200 transition hover:text-red-100"><span>graduate@poornima.org</span></a></div><div className="flex flex-wrap justify-center gap-3 md:justify-end"><a href="https://www.poornimainstitute.edu.in/collbration" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#b91c1c] px-5 py-3 font-bold hover:bg-red-700">PIET collaboration directory <ExternalLink size={17} /></a><a href="https://poornima.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">Poornima Group <ExternalLink size={17} /></a></div></div></footer>
     <Cta />
            <Footer />
    </div>
  );
};

export default GlobalCareerPathways;

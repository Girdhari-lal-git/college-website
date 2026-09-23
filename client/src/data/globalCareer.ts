export type RegionType = "all" | "usa" | "europe" | "asia_middle_east" | "australia";
export type MobilityType = "all" | "twinning_program" | "semester_exchange" | "higher_studies" | "internship" | "summer_school" | "joint_research";

export interface UniversityPartner {
  id: string;
  name: string;
  country: string;
  flag: string;
  region: Exclude<RegionType, "all">;
  programs: MobilityType[];
  description: string;
  highlights: string[];
  keyDisciplines: string[];
  pietSupport: string;
  officialLink: string;
  logo?: string;
}

export interface ProgramDetail {
  id: MobilityType;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  description: string;
  whoIsEligible: string;
  keyBenefits: string[];
  processSteps: string[];
  featuredPartners: string[];
}

export const GLOBAL_PARTNERS: UniversityPartner[] = [
  {
    id: "vcu",
    name: "Virginia Commonwealth University",
    country: "USA",
    flag: "US",
    region: "usa",
    programs: ["twinning_program", "higher_studies", "semester_exchange", "joint_research"],
    description: "PIET lists VCU among its international university partners. Explore postgraduate study and research options through the current PIET notice.",
    highlights: ["Postgraduate study research", "Engineering and computing", "Research-led university"],
    keyDisciplines: ["Computer Science", "Artificial Intelligence", "Information Systems", "Engineering"],
    pietSupport: "Ask PIET about current pathway notices, transcript requirements and the appropriate academic contact.",
    officialLink: "https://www.vcu.edu/",
    logo: "/images/cmp/vcu_logo.png",
  },
  {
    id: "schiller",
    name: "Schiller International University",
    country: "USA / Europe",
    flag: "US / EU",
    region: "usa",
    programs: ["higher_studies", "semester_exchange", "summer_school"],
    description: "A multi-campus international university to investigate for global study, mobility and technology-management interests.",
    highlights: ["Multi-campus study", "USA and European locations", "Global learning environment"],
    keyDisciplines: ["Data Analytics", "Global Technology", "Business", "Entrepreneurship"],
    pietSupport: "Ask PIET to verify whether a current pathway, credit arrangement or nomination opportunity is available.",
    officialLink: "https://www.schiller.edu/",
  },
  {
    id: "minnesota",
    name: "University of Minnesota",
    country: "USA",
    flag: "US",
    region: "usa",
    programs: ["joint_research", "higher_studies"],
    description: "A research-intensive US university to explore for advanced engineering, computing and technology research interests.",
    highlights: ["Research-intensive university", "Engineering and computing", "Faculty-led research exploration"],
    keyDisciplines: ["Computer Science", "Robotics", "Electrical Engineering", "Technology"],
    pietSupport: "Discuss research fit, faculty introductions and recommendation requirements with the PIET R&D Cell.",
    officialLink: "https://twin-cities.umn.edu/",
  },
  {
    id: "james-cook",
    name: "James Cook University",
    country: "Australia",
    flag: "AU",
    region: "australia",
    programs: ["higher_studies", "semester_exchange", "joint_research"],
    description: "An Australian university to investigate for technology, engineering, research and international study options.",
    highlights: ["Australian higher study", "Research pathways", "International campus experience"],
    keyDisciplines: ["Information Technology", "Engineering", "Data Science", "Environmental Technology"],
    pietSupport: "Confirm current programme fit, academic requirements and application timelines with PIET before applying.",
    officialLink: "https://www.jcu.edu.au/",
  },
  {
    id: "hanyang",
    name: "Hanyang University",
    country: "South Korea",
    flag: "KR",
    region: "asia_middle_east",
    programs: ["higher_studies", "semester_exchange", "joint_research"],
    description: "A South Korean university to explore for engineering, computing, innovation and research-led international study.",
    highlights: ["Technology and engineering", "South Korean innovation ecosystem", "Research exploration"],
    keyDisciplines: ["Computer Science", "Engineering", "Robotics", "Electronics"],
    pietSupport: "Ask your department about any active nomination, exchange or research route before planning an application.",
    officialLink: "https://www.hanyang.ac.kr/",
  },
  {
    id: "michigan",
    name: "University of Michigan",
    country: "USA",
    flag: "US",
    region: "usa",
    programs: ["higher_studies", "joint_research"],
    description: "A US research university to use as a benchmark while comparing advanced engineering, computing and research programmes.",
    highlights: ["Research-intensive environment", "Engineering and computing", "Graduate study research"],
    keyDisciplines: ["Computer Science", "Electrical Engineering", "Robotics", "Data Science"],
    pietSupport: "Use PIET faculty and the R&D Cell to assess academic fit; verify all admission requirements on the official site.",
    officialLink: "https://umich.edu/",
  },
  {
    id: "duke",
    name: "Duke University",
    country: "USA",
    flag: "US",
    region: "usa",
    programs: ["higher_studies", "joint_research"],
    description: "A US university to research for advanced study, interdisciplinary technology and global research interests.",
    highlights: ["Interdisciplinary research", "Technology and innovation", "Graduate programme research"],
    keyDisciplines: ["Computer Science", "Engineering", "Artificial Intelligence", "Innovation"],
    pietSupport: "Treat this as a research destination to investigate and confirm programme fit, costs and requirements independently.",
    officialLink: "https://duke.edu/",
  },
  {
    id: "washington",
    name: "University of Washington",
    country: "USA",
    flag: "US",
    region: "usa",
    programs: ["higher_studies", "joint_research"],
    description: "A US research university to explore for computing, engineering, data and technology-led postgraduate study.",
    highlights: ["Computing and engineering", "Research ecosystem", "Graduate study research"],
    keyDisciplines: ["Computer Science", "Data Science", "Electrical Engineering", "AI"],
    pietSupport: "Discuss preparation and research fit with PIET faculty, then use the university's official admissions information.",
    officialLink: "https://www.washington.edu/",
  },
  {
    id: "manchester",
    name: "University of Manchester",
    country: "United Kingdom",
    flag: "GB",
    region: "europe",
    programs: ["higher_studies", "joint_research"],
    description: "A UK research university to investigate for engineering, computing, data and interdisciplinary postgraduate options.",
    highlights: ["UK research university", "Engineering and computing", "Interdisciplinary study"],
    keyDisciplines: ["Computer Science", "Engineering", "Data Science", "Materials Technology"],
    pietSupport: "Use PIET support for profile planning while verifying current courses, fees and entry requirements on the official site.",
    officialLink: "https://www.manchester.ac.uk/",
  },
  {
    id: "asia-university",
    name: "Asia University",
    country: "Taiwan",
    flag: "TW",
    region: "asia_middle_east",
    programs: ["twinning_program", "semester_exchange", "summer_school", "internship", "joint_research"],
    description: "PIET lists Asia University as an international partner for academic and research exposure.",
    highlights: ["Academic collaboration", "AI and technology exposure", "Research conversations"],
    keyDisciplines: ["Artificial Intelligence", "Semiconductors", "Cybersecurity", "Software Engineering"],
    pietSupport: "Speak with your department about current nominations, exchange calls and research opportunities.",
    officialLink: "https://www.asia.edu.tw/",
    logo: "/images/cmp/asiauniversity.PNG",
  },
  {
    id: "muscat",
    name: "Muscat University",
    country: "Oman",
    flag: "OM",
    region: "asia_middle_east",
    programs: ["twinning_program", "semester_exchange", "summer_school", "joint_research"],
    description: "PIET lists Muscat University as an international academic partner in its collaborations directory.",
    highlights: ["Cross-cultural exposure", "Technology and innovation", "Academic collaboration"],
    keyDisciplines: ["Cloud Computing", "Cybersecurity", "Engineering Management", "Software"],
    pietSupport: "Confirm credit mapping, nomination requirements and current availability with PIET before planning.",
    officialLink: "https://muscatuniversity.edu.om/",
    logo: "/images/cmp/muscat.PNG",
  },
  {
    id: "jan-wyzykowski",
    name: "Jan Wyzykowski University",
    country: "Poland",
    flag: "PL",
    region: "europe",
    programs: ["twinning_program", "semester_exchange", "summer_school", "internship"],
    description: "PIET lists Jan Wyzykowski University, Poland, as an international collaboration partner.",
    highlights: ["European mobility research", "Industrial technology", "Central European exposure"],
    keyDisciplines: ["Software Engineering", "Automation", "Mechatronics", "Information Systems"],
    pietSupport: "Ask PIET about the current mobility call, credit alignment and travel documentation.",
    officialLink: "https://ans.glogow.pl/",
    logo: "/images/cmp/poland_University.jpg",
  },
  {
    id: "oth-regensburg",
    name: "OTH Regensburg",
    country: "Germany",
    flag: "DE",
    region: "europe",
    programs: ["twinning_program", "semester_exchange", "higher_studies", "joint_research"],
    description: "Use Germany as a higher-study and applied-research destination to investigate alongside PIET faculty guidance.",
    highlights: ["Applied engineering", "Embedded systems", "Industrial technology"],
    keyDisciplines: ["Embedded Systems", "Automotive Software", "Automation", "AI"],
    pietSupport: "Research course fit, language expectations and application requirements before applying.",
    officialLink: "https://www.oth-regensburg.de/",
  },
  {
    id: "sunderland",
    name: "University of Sunderland",
    country: "United Kingdom",
    flag: "GB",
    region: "europe",
    programs: ["higher_studies", "semester_exchange"],
    description: "A UK option to research for computing, cybersecurity, data and software-related postgraduate study.",
    highlights: ["UK postgraduate research", "Computing pathways", "Employer-facing study"],
    keyDisciplines: ["Cybersecurity", "Networks", "Data Science", "Software"],
    pietSupport: "Use PIET for academic document guidance, then verify current admission and visa rules with the university.",
    officialLink: "https://www.sunderland.ac.uk/",
  },
  {
    id: "southern-cross",
    name: "Southern Cross University",
    country: "Australia",
    flag: "AU",
    region: "australia",
    programs: ["higher_studies", "semester_exchange"],
    description: "An Australian destination to compare for technology, data and software-related study options.",
    highlights: ["Australian study research", "Information technology", "International campus life"],
    keyDisciplines: ["Information Technology", "Software Engineering", "Data Analytics"],
    pietSupport: "Confirm course equivalence, English-language requirements and current application routes.",
    officialLink: "https://www.scu.edu.au/",
  },
  {
    id: "ait",
    name: "Asian Institute of Technology",
    country: "Thailand",
    flag: "TH",
    region: "asia_middle_east",
    programs: ["higher_studies", "joint_research", "summer_school"],
    description: "A postgraduate-focused technology and sustainability institution to explore for research and advanced study.",
    highlights: ["AI and robotics", "Sustainable technology", "International research"],
    keyDisciplines: ["AI", "Robotics", "GIS", "Computer Science"],
    pietSupport: "Discuss research fit and recommendations with the PIET R&D Cell before contacting the institute.",
    officialLink: "https://ait.ac.th/",
  },
  {
    id: "tar-umt",
    name: "TAR UMT",
    country: "Malaysia",
    flag: "MY",
    region: "asia_middle_east",
    programs: ["semester_exchange", "summer_school", "internship"],
    description: "A Southeast Asian technology and ICT destination to consider for short-term academic and internship exposure.",
    highlights: ["ICT programmes", "Southeast Asian tech ecosystem", "Short-term mobility research"],
    keyDisciplines: ["Software Engineering", "Enterprise Systems", "Mobile Apps"],
    pietSupport: "Confirm academic credit mapping and current exchange availability with PIET.",
    officialLink: "https://www.tarc.edu.my/",
  },
];

export const PROGRAM_TYPES: Record<MobilityType, ProgramDetail> = {
  all: {
    id: "all", title: "All global pathways", subtitle: "A broad view of international exposure options.", icon: "globe", badge: "Start with exploration", description: "Compare the main ways PIET students can prepare for overseas study, mobility, internships and research.", whoIsEligible: "All students can begin exploring; each opportunity has its own academic and administrative criteria.", keyBenefits: ["Clearer career planning", "International network building", "Better-prepared applications"], processSteps: ["Review the pathway", "Shortlist a partner or destination", "Confirm the current PIET process"], featuredPartners: ["VCU", "Asia University", "Muscat University", "Jan Wyzykowski University"],
  },
  twinning_program: {
    id: "twinning_program", title: "Twinning Program", subtitle: "Build a structured international collaboration pathway with academic and cultural exchange at its core.", icon: "users", badge: "Collaborative global learning", description: "The Twinning Program creates a focused bridge between PIET and partner institutions for shared learning, faculty exchange, academic mobility and cross-cultural engagement.", whoIsEligible: "Most relevant to students, faculty and academic teams looking for a collaborative and international learning experience.", keyBenefits: ["Academic collaboration", "Global exposure with faculty guidance", "Cross-cultural learning and networking"], processSteps: ["Review the current twinning notice", "Check eligibility and partner fit", "Prepare the required academic documents", "Confirm PIET approval and participation steps"], featuredPartners: ["Asia University", "Muscat University", "Jan Wyzykowski University"],
  },
  semester_exchange: {
    id: "semester_exchange", title: "Semester exchange", subtitle: "Explore one or two semesters abroad while planning credit alignment.", icon: "plane", badge: "Credit alignment requires approval", description: "A semester abroad can build academic confidence, cultural fluency and a stronger global profile. Course equivalence must be confirmed before you commit.", whoIsEligible: "Typically most relevant to 2nd and 3rd year students; current CGPA, backlog and nomination rules vary.", keyBenefits: ["Immersive academic experience", "Cross-cultural teamwork", "Potential credit transfer subject to approval"], processSteps: ["Speak with your HOD or department", "Map courses before applying", "Complete nomination and documentation", "Confirm visa and departure requirements"], featuredPartners: ["Asia University", "Jan Wyzykowski University", "Muscat University", "TAR UMT"],
  },
  higher_studies: {
    id: "higher_studies", title: "Overseas higher studies", subtitle: "Build a focused plan for MS, postgraduate and progression options.", icon: "graduation", badge: "Profile-building pathway", description: "Use your PIET degree, projects, research and recommendations to compare overseas postgraduate options in the USA, UK, Europe, Asia and Australia.", whoIsEligible: "Most relevant to 3rd and 4th year students and recent graduates planning the next academic step.", keyBenefits: ["Structured university research", "SOP and profile preparation", "Alumni-informed decision making"], processSteps: ["Evaluate your academic profile", "Shortlist programmes and costs", "Prepare tests and documents", "Apply through the university's official process"], featuredPartners: ["VCU", "University of Sunderland", "Southern Cross University", "OTH Regensburg"],
  },
  internship: {
    id: "internship", title: "Global internships", subtitle: "Gain practical experience through international internship and volunteer routes.", icon: "briefcase", badge: "AIESEC and partner networks", description: "Poornima Group reports AIESEC-linked incoming and outgoing internships. Check the current opportunity, host organisation and student requirements before applying.", whoIsEligible: "Students across years can explore; selection, duration, funding and destination vary by opportunity.", keyBenefits: ["International team experience", "Communication and leadership growth", "A practical global portfolio"], processSteps: ["Check the current opportunity list", "Match your profile and destination", "Complete host selection", "Review travel, visa and safety requirements"], featuredPartners: ["AIESEC", "Asia University", "Jan Wyzykowski University", "TAR UMT"],
  },
  summer_school: {
    id: "summer_school", title: "Summer schools and study tours", subtitle: "Short-term academic, cultural and laboratory exposure.", icon: "sun", badge: "Short-term global exposure", description: "Short programmes can be a useful first step for students who want international experience without committing to a full semester abroad.", whoIsEligible: "Availability is usually tied to the academic calendar and the published programme notice.", keyBenefits: ["Focused technical learning", "Cultural exposure", "A low-commitment way to explore a destination"], processSteps: ["Watch for the PIET announcement", "Review cost and academic fit", "Complete selection and documentation", "Share learning after return"], featuredPartners: ["Asia University", "Muscat University", "Asian Institute of Technology", "TAR UMT"],
  },
  joint_research: {
    id: "joint_research", title: "Global research", subtitle: "Connect research interests with international academic communities.", icon: "flask", badge: "Faculty-guided pathway", description: "Build research exposure through a strong problem statement, faculty mentorship, responsible authorship and appropriate publication venues.", whoIsEligible: "Especially useful for pre-final and final year students with a defined technical or research interest.", keyBenefits: ["Research portfolio development", "International academic conversations", "Stronger postgraduate preparation"], processSteps: ["Meet your department or R&D Cell", "Define the research question", "Identify a suitable collaborator", "Follow review and publication ethics"], featuredPartners: ["Asia University", "VCU", "Asian Institute of Technology", "OTH Regensburg"],
  },
};

export const regionLabels: { id: RegionType; label: string }[] = [
  { id: "all", label: "All regions" },
  { id: "usa", label: "USA" },
  { id: "europe", label: "Europe" },
  { id: "asia_middle_east", label: "Asia & Middle East" },
  { id: "australia", label: "Australia" },
];

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link, useRoute } from "wouter";

interface Publication {
  title: string;
  year?: number;
  url?: string;
}

interface ProfessionalLink {
  label: string;
  url: string;
}

interface Faculty {
  _id: string;
  name: string;
  department: string;
  designation: string;
  email?: string;
  employeeId?: string;
  imageUrl?: string;
  biography?: string;
  qualifications?: string[];
  experience?: string;
  teachingAreas?: string[];
  researchInterests?: string[];
  publications?: Publication[];
  awards?: string[];
  professionalMemberships?: string[];
  nptelCertifications?: string[];
  fdpsWorkshopsAttended?: string[];
  resourcePersonActivities?: string[];
  professionalLinks?: ProfessionalLink[];
}

interface FacultyApiResponse {
  success: boolean;
  data?: Faculty;
  message?: string;
}

function Section({
  title,
  children,
  id,
  className = "",
}: {
  title: string;
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={`scroll-mt-24 min-w-0 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 ${className}`}
    >
      <h2
        id={id ? `${id}-heading` : undefined}
        className="border-b border-gray-100 pb-2.5 text-base font-bold text-indigo-950 sm:text-lg"
      >
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function ExpandableSection({
  title,
  items,
  maxVisible = 5,
  id,
}: {
  title: string;
  items: ReactNode[];
  maxVisible?: number;
  id?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  if (items.length === 0) return null;

  const visibleItems = expanded ? items : items.slice(0, maxVisible);
  const hasMore = items.length > maxVisible;

  return (
    <Section title={title} id={id}>
      <ul className="space-y-2.5">{visibleItems}</ul>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((previous) => !previous)}
          aria-expanded={expanded}
          className="mt-3 rounded-sm text-sm font-semibold text-indigo-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
        >
          {expanded ? "Show less" : `Show all ${items.length} entries`}
        </button>
      )}
    </Section>
  );
}

function ExpandableBiography({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const previewLength = 500;
  if (!text.trim()) return null;

  const isLong = text.length > previewLength;
  const displayedText = expanded || !isLong
    ? text
    : `${text.slice(0, previewLength).trimEnd()}…`;

  return (
    <Section title="About the Faculty Member" id="about">
      <p className="whitespace-pre-line text-left text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
        {displayedText}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((previous) => !previous)}
          aria-expanded={expanded}
          className="mt-3 rounded-sm text-sm font-semibold text-indigo-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </Section>
  );
}

function MandatoryInfoCard({
  title,
  items,
  emptyText,
  tone = "indigo",
}: {
  title: string;
  items: string[];
  emptyText: string;
  tone?: "indigo" | "red" | "slate";
}) {
  const toneClasses = {
    indigo: "bg-indigo-50 text-indigo-950",
    red: "bg-red-50 text-red-950",
    slate: "bg-slate-100 text-slate-950",
  };

  return (
    <section className={`min-w-0 rounded-xl p-4 ${toneClasses[tone]}`}>
      <h2 className="text-sm font-bold sm:text-base">{title}</h2>
      {items.length > 0 ? (
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {items.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="max-w-full rounded-full border border-black/5 bg-white/80 px-2.5 py-1 text-xs leading-5 sm:text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm opacity-70">{emptyText}</p>
      )}
    </section>
  );
}

export default function FacultyProfile() {
  const [, params] = useRoute("/faculty/:slug");
  const slug = params?.slug;
  const id = slug?.match(/-([a-f\d]{24})$/i)?.[1];

  const [faculty, setFaculty] = useState<Faculty | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setFaculty(null);
      setError("Invalid faculty profile URL.");
      setLoading(false);
      return;
    }

    const facultyId = id;
    const controller = new AbortController();

    async function fetchFaculty() {
      setLoading(true);
      setError("");
      setFaculty(null);

      try {
        const response = await fetch(
          `/api/faculty/profile/${encodeURIComponent(facultyId)}`,
          { signal: controller.signal },
        );
        const result: FacultyApiResponse = await response.json();

        if (!response.ok || !result.success || !result.data) {
          throw new Error(
            result.message ||
              (response.status === 404
                ? "Faculty profile not found."
                : "Unable to load faculty profile."),
          );
        }

        setFaculty(result.data);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred.",
        );
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    fetchFaculty();
    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center bg-gray-50 px-4">
        <div className="text-center" role="status" aria-live="polite">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-700" />
          <p className="mt-4 text-gray-600">Loading faculty profile...</p>
        </div>
      </main>
    );
  }

  if (error || !faculty) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-lg rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">Faculty Profile</h1>
          <p className="mt-3 text-red-600">{error || "Faculty profile not found."}</p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-indigo-900 px-5 py-3 font-medium text-white transition hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
          >
            Return to Home
          </Link>
        </div>
      </main>
    );
  }

  const biography = faculty.biography || "";
  const experience = faculty.experience?.trim() || "";
  const teachingAreas = (faculty.teachingAreas || []).filter((item) => item?.trim());
  const researchInterests = (faculty.researchInterests || []).filter((item) => item?.trim());
  const publications = faculty.publications || [];
  const awards = faculty.awards || [];
  const professionalMemberships = (faculty.professionalMemberships || []).filter((item) => item?.trim());
  const nptelCertifications = faculty.nptelCertifications || [];
  const fdpsWorkshopsAttended = faculty.fdpsWorkshopsAttended || [];
  const resourcePersonActivities = faculty.resourcePersonActivities || [];
  const professionalLinks = faculty.professionalLinks || [];

  // Only the three requested profile types are displayed, in a predictable order.
  const profileButtons = [
    { label: "LinkedIn", match: /linked\s*in/i },
    { label: "Google Scholar", match: /google\s*scholar|scholar/i },
    { label: "Vidwan", match: /vidwan/i },
  ]
    .map(({ label, match }) => {
      const profile = professionalLinks.find(
        (item) => match.test(item.label || "") && /^https?:\/\//i.test(item.url || ""),
      );
      return profile ? { label, url: profile.url } : null;
    })
    .filter((item): item is { label: string; url: string } => item !== null);

  const sections = [
    { id: "about", label: "About", show: Boolean(biography.trim()) },
    { id: "teaching", label: "Teaching Areas", show: true },
    { id: "research", label: "Research Interests", show: true },
    { id: "experience", label: "Experience", show: true },
    { id: "publications", label: "Publications", show: publications.length > 0 },
    { id: "certifications", label: "NPTEL", show: nptelCertifications.length > 0 },
    { id: "workshops", label: "FDPs & Workshops", show: fdpsWorkshopsAttended.length > 0 },
    { id: "awards", label: "Awards", show: awards.length > 0 },
    { id: "talks", label: "Resource Person", show: resourcePersonActivities.length > 0 },
  ].filter((section) => section.show);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-gray-500 sm:text-sm">
            <Link href="/" className="hover:text-indigo-800">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-gray-800">Faculty Profile</span>
          </nav>
        </div>
      </div>

      {/* Compact header: no institute name and no qualifications panel. */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="mx-auto w-24 shrink-0 sm:mx-0 sm:w-28">
              {faculty.imageUrl ? (
                <img
                  src={faculty.imageUrl}
                  alt={`Portrait of ${faculty.name}`}
                  className="aspect-[3/4] w-full rounded-lg border border-gray-200 bg-gray-100 object-cover"
                  loading="eager"
                />
              ) : (
                <div className="flex aspect-[3/4] items-center justify-center rounded-lg bg-gray-100 p-2 text-center text-xs text-gray-500">
                  Photograph unavailable
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1 text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-red-700">
                {faculty.department}
              </p>
              <h1 className="mt-1 break-words text-2xl font-bold leading-tight text-indigo-950 sm:text-3xl">
                {faculty.name}
              </h1>
             

              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-sm sm:justify-start">
                <p className="mt-1 text-sm font-medium text-gray-600 sm:text-base">
                {faculty.designation}
              </p>
                {faculty.experience && (
                  <p className="text-sm text-blue-500 sm:text-sm">
                    <span className="font-medium">Experience:</span> {faculty.experience}
                  </p>
                )}
              </div>

              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-sm sm:justify-start">
                {faculty.email && (
                  <a
                    href={`mailto:${faculty.email}`}
                    className="break-all text-indigo-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
                  >
                    <span aria-hidden="true">✉ </span>{faculty.email}
                  </a>
                )}
                {faculty.employeeId && (
                  <p className="text-xs text-gray-500 sm:text-sm">
                    <span className="font-medium">Employee ID:</span> {faculty.employeeId}
                  </p>
                )}
              </div>


              {profileButtons.length > 0 && (
                <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                  {profileButtons.map(({ label, url }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${label} profile in a new tab`}
                      className="inline-flex items-center gap-1.5 rounded-md border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-900 transition hover:border-indigo-400 hover:bg-indigo-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 sm:text-sm"
                    >
                      {label}<span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {professionalMemberships.length > 0 && (
            <section aria-labelledby="memberships-heading" className="mt-3 border-t border-gray-100 pt-3">
              <h2 id="memberships-heading" className="text-xs font-bold text-gray-700 sm:text-sm">
                Professional Memberships
              </h2>
              <ul className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {professionalMemberships.map((item, index) => (
                  <li key={`${item}-${index}`} className="flex min-w-0 items-start gap-2 rounded-md bg-gray-50 px-3 py-2 text-sm leading-5 text-gray-700">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                    <span className="min-w-0 break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </header>

      

      <div className="mx-auto max-w-7xl space-y-5 px-4 py-5 sm:px-6 lg:px-8">
        {biography.trim() && <ExpandableBiography text={biography} />}

        {/* Three mandatory information boxes remain horizontally aligned on desktop. */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
          <div id="teaching" className="scroll-mt-24">
            <MandatoryInfoCard
              title="Teaching Areas"
              items={teachingAreas}
              emptyText="Teaching areas not listed."
              tone="indigo"
            />
          </div>
          <div id="research" className="scroll-mt-24">
            <MandatoryInfoCard
              title="Research Interests"
              items={researchInterests}
              emptyText="Research interests not listed."
              tone="red"
            />
          </div>
          
        </div>

        <div className="border-t border-gray-200 pt-5">
          <h2 className="mb-3 text-lg font-bold text-indigo-950 sm:text-xl">Academic Contributions</h2>

          {/* Explicit columns preserve the requested 3 + 2 arrangement. */}
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-5">
            <div className="min-w-0 space-y-4">
              <ExpandableSection
                title="Patents / Projects"
                id="publications"
                maxVisible={5}
                items={publications.map((publication, index) => (
                  <li key={`${publication.title}-${index}`} className="border-b border-gray-100 pb-2.5 last:border-0 last:pb-0">
                    {publication.url && /^https?:\/\//i.test(publication.url) ? (
                      <a
                        href={publication.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-words text-sm font-medium leading-6 text-indigo-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
                      >
                        {publication.title} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <p className="break-words text-sm font-medium leading-6 text-gray-800">{publication.title}</p>
                    )}
                    {publication.year && <p className="mt-0.5 text-xs text-gray-500">Published in {publication.year}</p>}
                  </li>
                ))}
              />

              <ExpandableSection
                title="NPTEL/ SWAYAM/ MOOC Certificates"
                id="certifications"
                maxVisible={4}
                items={nptelCertifications.map((item, index) => (
                  <li key={`${item}-${index}`} className="flex items-start gap-2 text-sm leading-6 text-gray-700">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                    <span className="min-w-0 break-words">{item}</span>
                  </li>
                ))}
              />

              
              <ExpandableSection
                title="Awards and Recognition"
                id="awards"
                maxVisible={4}
                items={awards.map((item, index) => (
                  <li key={`${item}-${index}`} className="flex items-start gap-2 text-sm leading-6 text-gray-700">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                    <span className="min-w-0 break-words">{item}</span>
                  </li>
                ))}
              />
            </div>

            <div className="min-w-0 space-y-4">
              <ExpandableSection
                title="FDPs, Seminars and Workshops Attended"
                id="workshops"
                maxVisible={4}
                items={fdpsWorkshopsAttended.map((item, index) => (
                  <li key={`${item}-${index}`} className="flex items-start gap-2 text-sm leading-6 text-gray-700">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                    <span className="min-w-0 break-words">{item}</span>
                  </li>
                ))}
              />

              <ExpandableSection
                title="Resource Person for Conferences, Workshops, and Seminars"
                id="talks"
                maxVisible={4}
                items={resourcePersonActivities.map((item, index) => (
                  <li key={`${item}-${index}`} className="flex items-start gap-2 text-sm leading-6 text-gray-700">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                    <span className="min-w-0 break-words">{item}</span>
                  </li>
                ))}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-indigo-800 hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
          >
            <span aria-hidden="true">←</span> Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

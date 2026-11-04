
import { useEffect, useState } from "react";
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
  imageUrl?: string;
  biography?: string;
  qualifications?: string[];
  experience?: string;
  teachingAreas?: string[];
  researchInterests?: string[];
  publications?: Publication[];
  awards?: string[];
  professionalLinks?: ProfessionalLink[];
}

interface FacultyApiResponse {
  success: boolean;
  data?: Faculty;
  message?: string;
}

const sampleProfile = {
  biography:
    "This is illustrative sample content. Replace it with a verified biography covering the faculty member's academic background, teaching experience, professional contributions and interests.",

  qualifications: [
    "Sample postgraduate qualification — replace with verified degree",
    "Sample undergraduate qualification — replace with verified degree",
  ],

  experience:
    "Sample experience information — enter the verified number of years and relevant teaching or industry experience.",

  teachingAreas: [
    "Sample Teaching Area 1",
    "Sample Teaching Area 2",
    "Sample Teaching Area 3",
  ],

  researchInterests: [
    "Sample Research Interest 1",
    "Sample Research Interest 2",
    "Sample Research Interest 3",
  ],

  publications: [
  {
    title: "Sample publication — replace with a verified publication",
    year: undefined,
    url: undefined,
  },
] as Publication[],

  awards: [
    "Sample award — replace with a verified achievement",
  ],

  professionalLinks: [
    "Google Scholar profile",
    "ORCID profile",
    "LinkedIn profile",
  ],
};

function Section({
  title,
  children,
  sample = false,
}: {
  title: string;
  children: React.ReactNode;
  sample?: boolean;
}) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-indigo-950 sm:text-2xl">
          {title}
        </h2>

        {sample && (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
            Sample content
          </span>
        )}
      </div>

      <div className="mt-4">{children}</div>
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
  const [previewMode, setPreviewMode] = useState(true);

  useEffect(() => {
    if (!id) {
      setFaculty(null);
      setError("Invalid faculty profile URL.");
      setLoading(false);
      return;
    }

    const facultyId: string = id;
    const controller = new AbortController();

    async function fetchFaculty() {
      setLoading(true);
      setError("");
      setFaculty(null);

      try {
        const response = await fetch(
          `/api/faculty/profile/${encodeURIComponent(facultyId)}`,
          { signal: controller.signal }
        );

        const result: FacultyApiResponse = await response.json();

        if (!response.ok || !result.success || !result.data) {
          throw new Error(
            result.message ||
              (response.status === 404
                ? "Faculty profile not found."
                : "Unable to load faculty profile.")
          );
        }

        setFaculty(result.data);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        setError(
          err instanceof Error
            ? err.message
            : "An unexpected error occurred."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchFaculty();

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-700" />
          <p className="mt-4 text-gray-600">
            Loading faculty profile...
          </p>
        </div>
      </main>
    );
  }

  if (error || !faculty) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-lg rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">
            Faculty Profile
          </h1>

          <p className="mt-3 text-red-600">
            {error || "Faculty profile not found."}
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-indigo-900 px-5 py-3 font-medium text-white transition hover:bg-indigo-800"
          >
            Return to Home
          </Link>
        </div>
      </main>
    );
  }

  const hasText = (value?: string) => Boolean(value?.trim());

  const hasItems = (items?: unknown[]) =>
    Boolean(items && items.length > 0);

  const qualifications =
    hasItems(faculty.qualifications)
      ? faculty.qualifications!
      : previewMode
        ? sampleProfile.qualifications
        : [];

  const experience =
    hasText(faculty.experience)
      ? faculty.experience!
      : previewMode
        ? sampleProfile.experience
        : "";

  const biography =
    hasText(faculty.biography)
      ? faculty.biography!
      : previewMode
        ? sampleProfile.biography
        : "";

  const teachingAreas =
    hasItems(faculty.teachingAreas)
      ? faculty.teachingAreas!
      : previewMode
        ? sampleProfile.teachingAreas
        : [];

  const researchInterests =
    hasItems(faculty.researchInterests)
      ? faculty.researchInterests!
      : previewMode
        ? sampleProfile.researchInterests
        : [];

  const publications =
    hasItems(faculty.publications)
      ? faculty.publications!
      : previewMode
        ? sampleProfile.publications
        : [];

  const awards =
    hasItems(faculty.awards)
      ? faculty.awards!
      : previewMode
        ? sampleProfile.awards
        : [];

  const professionalLinks = faculty.professionalLinks || [];

  const showSample = (value: string, actualExists: boolean) =>
    previewMode && !actualExists;

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-gray-500"
          >
            <Link href="/" className="hover:text-indigo-800">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-gray-700">Faculty Profile</span>
          </nav>
        </div>
      </div>

      {/* Preview control */}
      <div className="border-b border-amber-200 bg-amber-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="font-semibold text-amber-950">
              {previewMode
                ? "Profile design preview is enabled"
                : "Verified information view"}
            </p>
            <p className="mt-1 text-sm text-amber-900">
              {previewMode
                ? "Empty fields are filled with clearly labelled sample content for layout testing."
                : "Only information stored in the faculty record is displayed."}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setPreviewMode((current) => !current)}
            className="rounded-lg border border-amber-400 bg-white px-4 py-2 text-sm font-semibold text-amber-950 transition hover:bg-amber-100"
          >
            {previewMode ? "Hide sample content" : "Show preview"}
          </button>
        </div>
      </div>

      {/* Profile header */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <div className="grid items-start gap-8 md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr] lg:gap-12">
            <div className="mx-auto w-full max-w-[300px] md:mx-0">
              {faculty.imageUrl ? (
                <img
                  src={faculty.imageUrl}
                  alt={`Portrait of ${faculty.name}`}
                  className="aspect-[3/4] w-full rounded-xl border border-gray-200 bg-gray-100 object-cover shadow-sm"
                />
              ) : (
                <div className="flex aspect-[3/4] w-full items-center justify-center rounded-xl bg-gray-200 text-gray-500">
                  Photograph unavailable
                </div>
              )}
            </div>

            <div className="pt-2">
              <p className="text-sm font-bold uppercase tracking-wider text-red-700">
                {faculty.department}
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight text-indigo-950 sm:text-4xl">
                {faculty.name}
              </h1>

              <p className="mt-3 text-lg font-medium text-gray-600">
                {faculty.designation}
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Qualifications
                </p>
                {qualifications.length > 0 ? (
                  <ul className="mt-2 space-y-1 text-gray-800">
                    {qualifications.map((item, index) => (
                      <li key={`${item}-${index}`}>
                        {item}
                        {showSample(
                          item,
                          hasItems(faculty.qualifications)
                        ) && (
                          <span className="ml-2 text-xs font-semibold text-amber-700">
                            (sample)
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-gray-500">
                    Not provided
                  </p>
                )}
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Experience
                </p>
                <p className="mt-2 leading-7 text-gray-700">
                  {experience || "Not provided"}
                  {showSample(
                    experience,
                    hasText(faculty.experience)
                  ) && (
                    <span className="ml-2 text-xs font-semibold text-amber-700">
                      (sample)
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile details */}
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6 md:py-10 lg:px-8">
        <Section
          title="About the Faculty Member"
          sample={showSample(biography, hasText(faculty.biography))}
        >
          <p className="whitespace-pre-line leading-8 text-gray-700">
            {biography || "Biography has not been provided."}
          </p>
        </Section>

        <Section
          title="Teaching Areas"
          sample={showSample("", hasItems(faculty.teachingAreas))}
        >
          {teachingAreas.length > 0 ? (
            <ul className="flex flex-wrap gap-3">
              {teachingAreas.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Not provided yet.</p>
          )}
        </Section>

        <Section
          title="Research Interests"
          sample={showSample("", hasItems(faculty.researchInterests))}
        >
          {researchInterests.length > 0 ? (
            <ul className="flex flex-wrap gap-3">
              {researchInterests.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Not provided yet.</p>
          )}
        </Section>

        <Section
          title="Publications"
          sample={showSample("", hasItems(faculty.publications))}
        >
          {publications.length > 0 ? (
            <ul className="space-y-4">
              {publications.map((publication, index) => (
                <li
                  key={`${publication.title}-${index}`}
                  className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                >
                  {publication.url ? (
                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-indigo-800 hover:underline"
                    >
                      {publication.title}
                    </a>
                  ) : (
                    <p className="font-medium text-gray-800">
                      {publication.title}
                    </p>
                  )}

                  {publication.year && (
                    <p className="mt-1 text-sm text-gray-500">
                      Published in {publication.year}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No publications added yet.</p>
          )}
        </Section>

        <Section
          title="Awards and Recognition"
          sample={showSample("", hasItems(faculty.awards))}
        >
          {awards.length > 0 ? (
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              {awards.map((award, index) => (
                <li key={`${award}-${index}`}>{award}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No awards added yet.</p>
          )}
        </Section>

        <Section
          title="Professional Profiles"
          sample={
            previewMode && !hasItems(faculty.professionalLinks)
          }
        >
          {hasItems(professionalLinks) ? (
            <div className="flex flex-wrap gap-3">
              {professionalLinks.map((item, index) => (
                <a
                  key={`${item.label}-${index}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-indigo-200 px-4 py-2 font-medium text-indigo-800 transition hover:bg-indigo-50"
                >
                  {item.label}
                  <span className="ml-2" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          ) : previewMode ? (
            <div>
              <p className="mb-3 text-sm text-gray-600">
                Examples of profile links you can add after verification:
              </p>
              <div className="flex flex-wrap gap-3">
                {sampleProfile.professionalLinks.map((label) => (
                  <span
                    key={label}
                    className="rounded-lg border border-dashed border-amber-400 bg-amber-50 px-4 py-2 text-sm text-amber-900"
                  >
                    {label} — sample
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">
              Professional links have not been provided.
            </p>
          )}
        </Section>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-medium text-indigo-800 hover:underline"
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

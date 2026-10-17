import {
  CalendarDays,
  MapPin,
  Users,
  Lightbulb,
  Award,
  Network,
  Cpu,
  HeartHandshake,
} from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "Technology & Innovation",
    description: "AI, AR/VR, DevOps, Design Thinking and emerging technologies",
  },
  {
    icon: Users,
    title: "Leadership & Career",
    description: "Mentorship, career guidance, industry readiness and professional development",
  },
  {
    icon: HeartHandshake,
    title: "Women in Engineering",
    description: "WIE activities and discussions on women leadership in AI and technology",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Competitions",
    description: "Technical competitions, WIE Brainwave, Pitch Battle and student activities",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Interaction with IEEE leaders, professionals, academics and peers",
  },
  {
    icon: Award,
    title: "Cultural Engagement",
    description: "Cultural activities, talent showcase and informal networking experiences",
  },
];

export default function DSSYWLCSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 py-16 md:py-20">
      
      {/* Decorative elements */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-red-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            IEEE Delhi Section Supported Event
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            DSSYWLC 2025
          </h2>

          <p className="mt-3 text-lg font-medium text-gray-700">
            IEEE Delhi Section Students’, Young Professionals,
            Women in Engineering & Life Members’ Congress
          </p>

          <p className="mt-5 text-base leading-7 text-gray-600">
            Poornima Institute of Engineering & Technology (PIET), Jaipur
            hosted DSSYWLC 2025, bringing together students, young
            professionals, Women in Engineering members, Life Members
            and IEEE volunteers for a two-day programme focused on
            technology, leadership, innovation, career development and
            professional networking.
          </p>

        </div>

        {/* Event Information */}
        <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Funding */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Award className="h-6 w-6 text-green-700" />
            </div>

            <p className="text-3xl font-bold text-gray-900">
              ₹1,00,000
            </p>

            <p className="mt-1 text-sm font-medium text-gray-600">
              IEEE Support Received
            </p>
          </div>

          {/* Date */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <CalendarDays className="h-6 w-6 text-blue-700" />
            </div>

            <p className="text-lg font-bold text-gray-900">
              7–8 February 2026
            </p>

            <p className="mt-1 text-sm font-medium text-gray-600">
              Event Dates
            </p>
          </div>

          {/* Venue */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <MapPin className="h-6 w-6 text-red-700" />
            </div>

            <p className="text-lg font-bold text-gray-900">
              PIET, Jaipur
            </p>

            <p className="mt-1 text-sm font-medium text-gray-600">
              Venue
            </p>
          </div>

          {/* Duration */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Users className="h-6 w-6 text-purple-700" />
            </div>

            <p className="text-2xl font-bold text-gray-900">
              2 Days
            </p>

            <p className="mt-1 text-sm font-medium text-gray-600">
              Leadership & Technical Congress
            </p>
          </div>

        </div>

        {/* Highlights */}
        <div className="mb-10">

          <div className="mb-7 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Event Highlights
            </h3>

            <p className="mt-2 text-gray-600">
              A blend of technology, leadership, innovation and networking
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-100">
                    <Icon className="h-5 w-5 text-blue-700" />
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>

        {/* Featured Sessions */}
        <div className="mb-10 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-gray-200 md:p-10">

          <div className="grid gap-8 md:grid-cols-2">

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Featured Sessions
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                The congress featured keynote addresses, technical and
                professional development sessions, panel discussions,
                workshops and mentoring interactions involving experts
                from academia, industry and IEEE leadership.
              </p>
            </div>

            <div>
              <ul className="space-y-3 text-sm text-gray-700">

                <li className="flex gap-3">
                  <span className="mt-1 text-blue-600">●</span>
                  <span>
                    Women in AI Leadership: Opportunities, Challenges
                    and the Road Ahead
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 text-blue-600">●</span>
                  <span>
                    CI/CD in Practice: Building Fast and Secure Deployments
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 text-blue-600">●</span>
                  <span>
                    AR/VR Session and Emerging Technology Engagement
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 text-blue-600">●</span>
                  <span>
                    Mentorship and Career Guidance
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 text-blue-600">●</span>
                  <span>
                    Shaping Tomorrow’s Technologists: Leadership,
                    Innovation, Inclusion & Global Impact
                  </span>
                </li>

              </ul>
            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center">

          <p className="mx-auto mb-5 max-w-3xl text-sm leading-6 text-gray-600">
            DSSYWLC 2025 provided a platform for interaction among
            IEEE volunteers, students, young professionals, women
            leaders and Life Members through technical, leadership,
            professional and cultural activities.
          </p>

          <div className="flex flex-wrap justify-center gap-3">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              IEEE Delhi Section
            </span>

            <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
              IEEE Rajasthan Subsection
            </span>

            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
              IEEE Student Branch – PIET
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}
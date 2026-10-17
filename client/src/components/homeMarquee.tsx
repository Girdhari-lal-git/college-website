
import { ArrowUpRight, CalendarDays, ChevronRight } from "lucide-react";

const SportsCalendarMarquee = () => {
  return (
    <section
      aria-label="RTU sports and youth festival announcement"
      className="relative overflow-hidden bg-blue-950 text-white"
    >
      <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-8">
        {/* Announcement label */}
        <div className="flex shrink-0 items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-400" />
          </span>

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-300 sm:text-sm">
            Student Announcement
          </span>
        </div>

        {/* Scrolling announcement */}
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="sports-marquee-track flex w-max items-center gap-10">
            {[0, 1].map((item) => (
              <div
                key={item}
                aria-hidden={item === 1}
                className="flex shrink-0 items-center gap-3"
              >
                <CalendarDays
                  size={18}
                  className="shrink-0 text-cyan-300"
                />

                <p className="text-sm font-medium sm:text-base">
                  RTU Inter-Collegiate Sports & Youth Festival Calendar
                  <span className="mx-2 text-cyan-300">•</span>
                  <span className="text-blue-200">2026–27</span>
                </p>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  Official Calendar
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PDF link */}
        <a
          href="https://drive.google.com/file/d/1BbNgVfHIHrR_QJ-6pUT8uaX2oERsmZZO/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-blue-950 transition hover:bg-cyan-100"
        >
          View Full Calendar
          <ArrowUpRight size={16} />
        </a>
      </div>

      <style>{`
        .sports-marquee-track {
          animation: sports-marquee 28s linear infinite;
        }

        .sports-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes sports-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sports-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default SportsCalendarMarquee;

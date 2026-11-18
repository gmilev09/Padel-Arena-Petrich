import { Zap } from "lucide-react";

const words = [
  "Падел", "Беласица", "Петрич", "Турнири", "Coffee & Bar",
  "Премиум клуб", "Гора", "Арена", "Лига", "Общност",
];

export function Marquee({ reverse = false } ) {
  const row = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-flame/15 bg-night-2 py-5">
      <div
        className={`flex w-max items-center gap-8 whitespace-nowrap ${
          reverse ? "animate-marquee-slow" : "animate-marquee"
        }`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span
              className={`font-display text-2xl font-extrabold uppercase tracking-wide sm:text-3xl ${
                i % 2 === 0 ? "text-flame" : "text-stroke-faint"
              }`}
            >
              {w}
            </span>
            <Zap size={16} className="text-flame/60" />
          </span>
        ))}
      </div>
    </div>
  );
}

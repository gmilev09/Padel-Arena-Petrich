
import { Reveal, SectionHeading } from "./Reveal";
import { pricing, extras } from "../lib/content";
import { Check, Clock } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="court-lines relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading kicker="Цени" title="Честна цена за" accent="честна игра" />

        <div className="mt-14 mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
          {pricing.map((p, i) => (
            <Reveal key={p.name} delay={0.1 * i}>
              <div
                className={`lift relative h-full rounded-3xl border p-8 ${
                  p.highlight
                    ? "border-flame/60 bg-gradient-to-b from-flame/12 to-night-2 shadow-2xl shadow-flame/10"
                    : "border-white/10 bg-night-2/70"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-flame px-4 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-night">
                    Най-избиран
                  </span>
                )}
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-flame">
                  <Clock size={13} /> {p.time}
                </p>
                <h3 className="mt-4 font-display text-xl font-extrabold uppercase">{p.name}</h3>
                <p className="mt-5 font-display text-4xl font-black text-mist">
                  {p.price}
                  <span className="ml-2 font-body text-sm font-semibold text-mist/50">{p.per}</span>
                </p>
                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-mist/75">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-flame/15 text-flame">
                        <Check size={12} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className={`mt-8 block rounded-full py-3.5 text-center text-xs font-extrabold uppercase tracking-widest transition-all duration-300 ${
                    p.highlight
                      ? "bg-flame text-night hover:bg-mist"
                      : "border border-white/15 text-mist hover:border-flame hover:text-flame"
                  }`}
                >
                  Резервирай
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 rounded-3xl border border-white/8 bg-night-2/60 px-8 py-6">
            <p className="font-display text-sm font-bold uppercase tracking-widest text-flame">Допълнително:</p>
            {extras.map((e) => (
              <p key={e.name} className="text-sm text-mist/70">
                {e.name} — <span className="font-extrabold text-mist">{e.price}</span>
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

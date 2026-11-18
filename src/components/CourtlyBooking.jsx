
import { useEffect, useRef, useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import { COURTLY_URL, PHONE_DISPLAY, PHONE_TEL, WORKING_HOURS } from "../lib/content";
import { CalendarCheck, ExternalLink, Phone, Clock, Layers, Timer, CalendarRange } from "lucide-react";

export function CourtlyBooking() {
  const holderRef = useRef(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = holderRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="booking" className="relative overflow-hidden bg-night-2/50 py-24 sm:py-32">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-flame/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker="Онлайн резервация" title="Запази корт през" accent="Courtly" />
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3">
              <a
                href={COURTLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-flame px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-night transition-all hover:bg-gold"
              >
                <CalendarCheck size={15} />
                Отвори в Courtly
                <ExternalLink size={13} className="opacity-70 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-mist transition-all hover:border-gold hover:text-gold"
              >
                <Phone size={14} />
                {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Бързи факти */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Layers, t: "2 премиум корта", d: "Избор между Корт 1 и Корт 2" },
            { icon: Timer, t: "30-мин слотове", d: "Гъвкави интервали за игра" },
            { icon: CalendarRange, t: "До 30 дни напред", d: "Планирай мачовете си рано" },
            { icon: Clock, t: WORKING_HOURS, d: "Отворени всеки ден" },
          ].map((f, i) => (
            <Reveal key={f.t} delay={0.07 * i}>
              <div className="lift flex h-full items-start gap-4 rounded-2xl border border-white/8 bg-night p-5 transition-colors hover:border-flame/40">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-flame/12 text-flame">
                  <f.icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-wider">{f.t}</p>
                  <p className="mt-1 text-xs text-mist/55">{f.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Вградена Courtly страница за резервации */}
        <Reveal delay={0.15}>
          <div
            ref={holderRef}
            className="mt-10 overflow-hidden rounded-3xl border border-flame/25 bg-white shadow-2xl shadow-flame/5"
          >
            <div className="flex items-center justify-between gap-3 border-b border-black/5 bg-white px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-flame/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                <p className="ml-3 truncate text-xs font-bold text-neutral-600">
                  courtly.me/clubs/padel-arena-petrich
                </p>
              </div>
              <a
                href={COURTLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-1.5 rounded-full bg-night px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-mist transition-colors hover:text-gold"
              >
                Нов раздел <ExternalLink size={11} />
              </a>
            </div>
            <div className="relative h-[620px] bg-white sm:h-[720px]">
              {load ? (
                <iframe
                  src={COURTLY_URL}
                  className="h-full w-full border-0"
                  title="Courtly — резервация на корт в Padel Arena Petrich"
                  loading="lazy"
                  allow="payment"
                />
              ) : (
                <div className="grid h-full place-items-center">
                  <span className="h-8 w-8 animate-spin rounded-full border-2 border-flame border-t-transparent" />
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-mist/50">
            Резервациите се обработват директно през Courtly — избираш корт, ден
            и час, потвърждаваш по телефона и идваш да играеш. За групи и
            турнири — звънни на {PHONE_DISPLAY}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

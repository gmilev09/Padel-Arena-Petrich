
import { useEffect, useRef, useState } from "react";
import Image from "../lib/Image";
import { Reveal, SectionHeading } from "./Reveal";
import { upcomingEvent, EVENT_POST, PHONE_DISPLAY, PHONE_TEL, IG_URL } from "../lib/content";
import { InstagramIcon } from "./icons";
import { Trophy, Phone, MessageCircle, CalendarClock, Ticket, Users, Wallet, ArrowUpRight } from "lucide-react";

const factIcons = [Trophy, Wallet, CalendarClock, Users];

function EventPostEmbed() {
  const holderRef = useRef(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = holderRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={holderRef}
      className="lift relative h-full min-h-[560px] overflow-hidden rounded-3xl border border-white/10 bg-night-2"
    >
      {load ? (
        <iframe
          src={EVENT_POST.embed}
          className="ig-embed-frame absolute inset-0"
          title="Instagram профил на Padel Arena Petrich — последни публикации"
          allowTransparency
        />
      ) : (
        <div className="grid h-full min-h-[560px] place-items-center">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-flame border-t-transparent" />
        </div>
      )}
    </div>
  );
}

export function Events() {
  return (
    <section id="events" className="relative overflow-hidden bg-night-2/50 py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-gold/8 blur-[110px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading kicker="Предстоящо събитие" title="Първенство" accent="по падел" />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Ляво: постер + детайли */}
          <div>
            <Reveal>
              <div className="lift group relative overflow-hidden rounded-3xl border border-gold/30 shadow-2xl shadow-gold/5">
                <a href={EVENT_POST.url} target="_blank" rel="noopener noreferrer" className="block">
                  <Image
                    src={EVENT_POST.img}
                    alt="Официален постер — Първенство по падел, 3 седмици, Padel Arena Petrich"
                    width={640}
                    height={800}
                    className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-night/80 px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-mist backdrop-blur transition-colors group-hover:text-gold">
                    <InstagramIcon size={13} /> Официален профил <ArrowUpRight size={12} />
                  </span>
                </a>
              </div>
            </Reveal>

            {/* Факти */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {upcomingEvent.facts.map((f, i) => {
                const Icon = factIcons[i] ?? Trophy;
                return (
                  <Reveal key={f.label} delay={0.07 * i}>
                    <div className="lift h-full rounded-2xl border border-white/8 bg-night-2 p-4 text-center transition-colors hover:border-flame/40">
                      <Icon size={18} className="mx-auto text-gold" />
                      <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-mist/50">
                        {f.label}
                      </p>
                      <p className="mt-1 font-display text-[13px] font-bold leading-snug">{f.value}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-wrap items-center gap-4 rounded-3xl border border-flame/25 bg-gradient-to-r from-flame/10 via-night-2 to-night-2 p-6">
                <div className="min-w-52 flex-1">
                  <p className="font-display text-base font-bold uppercase tracking-wide">
                    Запиши се <span className="text-flame">сега</span>
                  </p>
                  <p className="mt-1 text-sm text-mist/60">{upcomingEvent.ctaNote}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="flex items-center gap-2 rounded-full bg-flame px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-night transition-all hover:bg-gold"
                  >
                    <Phone size={14} /> {PHONE_DISPLAY}
                  </a>
                  <a
                    href={IG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-mist transition-all hover:border-gold hover:text-gold"
                  >
                    <MessageCircle size={14} /> Лично съобщение
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Дясно: реалният IG пост, вграден */}
          <Reveal delay={0.15}>
            <div>
              <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-mist/50">
                <InstagramIcon size={14} className="text-flame" />
                Последни публикации
              </p>
              <EventPostEmbed />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Тикет лента */}
      <Reveal delay={0.1}>
        <div className="mx-auto mt-12 max-w-7xl px-5 sm:px-8">
          <a
            href={EVENT_POST.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/8 bg-night p-6 transition-colors hover:border-gold/40"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/12 text-gold">
                <Ticket size={20} />
              </span>
              <p className="text-sm font-semibold text-mist/70">
                Следи <span className="font-extrabold text-mist">@padelarenapetrich</span> за
                програмата на турнира, жребия и следващите събития на арената.
              </p>
            </div>
            <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-flame transition-colors group-hover:text-gold">
              Към профила <ArrowUpRight size={15} />
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

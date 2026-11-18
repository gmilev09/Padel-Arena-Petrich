
import Image from "../lib/Image";
import { Reveal, SectionHeading } from "./Reveal";
import {
  IG_URL, PHONE_TEL, PHONE_INTL, PHONE_DISPLAY, LOGO_SQUARE,
  ADDRESS, MAP_EMBED, EMAIL, WORKING_HOURS, COURTLY_URL,
} from "../lib/content";
import { Clock, MapPin, Phone, Mail, Navigation, CalendarCheck } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading kicker="Контакти" title="Свържете се" accent="с нас" />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            {[
              {
                icon: CalendarCheck,
                t: "Резервации през Courtly",
                lines: ["Онлайн — корт, ден и час", "Потвърждение по телефона"],
                href: COURTLY_URL,
              },
              {
                icon: Phone,
                t: "Телефон",
                lines: [PHONE_INTL, "Обаждане · Viber · WhatsApp"],
                href: `tel:${PHONE_TEL}`,
              },
              {
                icon: MapPin,
                t: "Адрес",
                lines: [ADDRESS, "подножието на Беласица"],
                href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`,
              },
              {
                icon: Clock,
                t: "Работно време",
                lines: [WORKING_HOURS, "Отворени всеки ден"],
                href: COURTLY_URL,
              },
              {
                icon: Mail,
                t: "Имейл",
                lines: [EMAIL],
                href: `mailto:${EMAIL}`,
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={0.07 * i}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="lift flex items-start gap-5 rounded-3xl border border-white/8 bg-night-2/70 p-6 transition-colors hover:border-flame/40"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-flame/12 text-flame">
                    <c.icon size={20} />
                  </span>
                  <div>
                    <p className="font-display text-sm font-extrabold uppercase tracking-widest">{c.t}</p>
                    {c.lines.map((l) => (
                      <p key={l} className="mt-1 text-sm text-mist/65">{l}</p>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lift flex items-center justify-between rounded-3xl bg-gradient-to-r from-[#d62976]/25 to-[#962fbf]/25 p-6 transition-all hover:from-[#d62976]/40 hover:to-[#962fbf]/40"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={LOGO_SQUARE}
                    alt="Padel Arena Petrich"
                    width={48}
                    height={48}
                    className="logo-emblem h-12 w-12 rounded-2xl object-cover"
                  />
                  <div>
                    <p className="font-display text-sm font-extrabold uppercase tracking-widest">Instagram</p>
                    <p className="mt-1 text-sm text-mist/65">@padelarenapetrich — всичко на живо</p>
                  </div>
                </div>
                <Navigation size={18} className="text-gold" />
              </a>
            </Reveal>
          </div>

          {/* Карта */}
          <Reveal delay={0.15}>
            <div className="lift relative h-full min-h-[420px] overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="Карта — Padel Arena Petrich, ул. България 68"
                src={MAP_EMBED}
                className="absolute inset-0 h-full w-full border-0 grayscale-[35%] invert-[92%] hue-rotate-180 contrast-[0.9]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-night/85 px-5 py-4 backdrop-blur">
                <p className="flex items-center gap-2 font-display text-xs font-extrabold uppercase tracking-widest text-flame">
                  <MapPin size={14} /> Как да ни намерите
                </p>
                <p className="mt-2 max-w-[260px] text-xs leading-relaxed text-mist/70">
                  {ADDRESS} — в подножието на Беласица. Безплатен паркинг на място.
                </p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold text-gold transition-colors hover:text-mist"
                >
                  <Phone size={13} /> {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

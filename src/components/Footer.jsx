
import Image from "../lib/Image";
import {
  IG_URL, LOGO_SQUARE, PHONE_DISPLAY, PHONE_TEL, PHONE_INTL,
  ADDRESS, EMAIL, WORKING_HOURS, COURTLY_URL,
} from "../lib/content";
import { InstagramIcon } from "./icons";
import { ArrowUp, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-night-2">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="max-w-sm">
            <a href="#top" className="group flex items-center gap-3">
              <Image
                src={LOGO_SQUARE}
                alt="Лого на Padel Arena Petrich"
                width={52}
                height={52}
                className="logo-emblem h-[52px] w-[52px] rounded-2xl object-cover"
              />
              <span className="font-display text-base font-bold uppercase tracking-[0.2em]">
                Padel Arena
                <span className="block text-[10px] font-semibold tracking-[0.35em] text-flame">Петрич</span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-mist/55">
              Първият падел клуб в Петрич — 2 модерни корта, кафе & бар и
              турнири в подножието на Беласица. Резервации през Courtly.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-mist transition-all hover:border-flame hover:text-flame"
              >
                <InstagramIcon size={15} />
                @padelarenapetrich
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-flame px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-night transition-all hover:bg-gold"
              >
                <Phone size={14} />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-14 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-flame">Навигация</p>
              <ul className="mt-4 space-y-2.5 text-sm text-mist/60">
                {[
                  ["#courts", "Кортове"],
                  ["#events", "Събития"],
                  ["#instagram", "Instagram"],
                  ["#gallery", "Галерия"],
                  ["#pricing", "Цени"],
                ].map(([href, l]) => (
                  <li key={href}>
                    <a href={href} className="transition-colors hover:text-flame">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-flame">Услуги</p>
              <ul className="mt-4 space-y-2.5 text-sm text-mist/60">
                <li>Наем на корт</li>
                <li>Тренировки & академия</li>
                <li>Турнири и лиги</li>
                <li>Тиймбилдинги</li>
                <li>Coffee & Bar</li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-flame">Контакт</p>
              <ul className="mt-4 space-y-2.5 text-sm text-mist/60">
                <li className="flex items-center gap-1.5">
                  <Phone size={13} className="text-flame" /> {PHONE_INTL}
                </li>
                <li className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-flame" /> {ADDRESS}
                </li>
                <li>{EMAIL}</li>
                <li>{WORKING_HOURS}</li>
                <li>
                  <a href={COURTLY_URL} target="_blank" rel="noopener noreferrer" className="text-gold transition-colors hover:text-mist">
                    courtly.me/clubs/padel-arena-petrich
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Гигантски текст — SVG с textLength, за да се побира на всяко устройство */}
      <div className="select-none overflow-hidden px-4 pb-3">
        <svg
          viewBox="0 0 1000 132"
          className="block w-full"
          role="img"
          aria-label="Беласица · Падел"
        >
          <text
            x="500"
            y="106"
            textAnchor="middle"
            textLength="984"
            lengthAdjust="spacingAndGlyphs"
            fontFamily="Unbounded, system-ui, sans-serif"
            fontWeight="900"
            fontSize="122"
            fill="none"
            stroke="rgba(242, 238, 238, 0.26)"
            strokeWidth="1.6"
          >
            Беласица · Падел
          </text>
        </svg>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-xs text-mist/40 sm:px-8">
          <p>© {new Date().getFullYear()} Padel Arena Petrich. Всички права запазени.</p>
          <a
            href="#top"
            className="flex items-center gap-2 font-bold uppercase tracking-widest text-mist/60 transition-colors hover:text-flame"
          >
            Нагоре <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

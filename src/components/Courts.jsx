
import { useRef } from "react";
import Image from "../lib/Image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";
import { courts, features, images, IG_URL, LOGO_SQUARE } from "../lib/content";
import { Check, ArrowRight, Mountain, Trees, Wind } from "lucide-react";
import { InstagramIcon } from "./icons";

export function Courts() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="courts" ref={ref} className="relative overflow-hidden py-24 sm:py-32">
      {/* Паралакс фон — гората на Беласица */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10 scale-125">
        <Image
          src={images.belasitsaForest}
          alt="Иглолистната гора на Беласица"
          fill
          className="media-duotone object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/82" />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/60 to-night" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionHeading
              kicker="Кортове & Локация"
              title="Кортовете в"
              accent="Беласица"
            />
            <Reveal delay={0.18}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist/75 sm:text-lg">
                Премиум кортове по световен стандарт, сгушени в гората в
                подножието на Беласица — чист въздух, естествена сянка през
                лятото и гледка, която превръща всеки мач в преживяване. На
                минути от центъра на Петрич.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a
              href="#booking"
              className="group flex items-center gap-2 rounded-full border border-flame/40 px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-flame transition-all hover:bg-flame hover:text-night"
            >
              Виж свободни часове
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* Природни предимства */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Trees, t: "Сред иглолистна гора", d: "Кортовете са оградени от вековни дървета — сянка и прохлада.", img: images.belasitsaGreen },
            { icon: Wind, t: "Планински въздух", d: "Беласица слави мекия си климат — игра се целогодишно.", img: images.belasitsaSunset },
            { icon: Mountain, t: "Пътеки и гледки", d: "След мача — разходка към хижа Беласица или смотровете над града.", img: images.belasitsaBridge },
          ].map((c, i) => (
            <Reveal key={c.t} delay={0.08 * i}>
              <div className="lift group flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-night-2/80 p-3 backdrop-blur">
                <Image
                  src={c.img}
                  alt={c.t}
                  width={160}
                  height={160}
                  className="media-duotone h-20 w-20 shrink-0 rounded-xl object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="pr-2">
                  <p className="flex items-center gap-2 font-display text-[13px] font-bold uppercase tracking-wide">
                    <c.icon size={14} className="text-gold" /> {c.t}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-mist/60">{c.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Кортове */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {courts.map((c, i) => (
            <Reveal key={c.id} delay={0.1 * i}>
              <article className="lift group relative overflow-hidden rounded-3xl border border-white/10 bg-night-2">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.name}
                    width={900}
                    height={700}
                    className="media-duotone h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-2 via-night-2/20 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-night/70 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-flame backdrop-blur">
                    {c.tag}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-extrabold uppercase">{c.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist/65">{c.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Удобства */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.06 * i}>
              <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-night-2/70 p-5 backdrop-blur transition-colors duration-300 hover:border-flame/40">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-flame/15 text-flame">
                  <Check size={15} />
                </span>
                <div>
                  <h4 className="text-sm font-extrabold uppercase tracking-wider">{f.title}</h4>
                  <p className="mt-1 text-[13px] leading-relaxed text-mist/55">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Повече реални кадри → Instagram */}
        <Reveal delay={0.1}>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-flame/25 bg-gradient-to-r from-flame/12 via-night-2 to-night-2 p-6 transition-all hover:border-gold/50 sm:p-8"
          >
            <div className="flex items-center gap-4">
              <Image
                src={LOGO_SQUARE}
                alt="Лого на Padel Arena Petrich"
                width={64}
                height={64}
                className="logo-emblem h-16 w-16 rounded-2xl object-cover"
              />
              <div>
                <p className="font-display text-base font-bold uppercase tracking-wide">
                  Всички реални кадри от кортовете
                </p>
                <p className="mt-1 text-sm text-mist/60">
                  Галерията на арената живее в Instagram — строеж, тестови мачове и живот около кортовете.
                </p>
              </div>
            </div>
            <span className="flex items-center gap-2 rounded-full bg-flame px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-night transition-transform group-hover:scale-105">
              <InstagramIcon size={15} />
              @padelarenapetrich
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}


import Image from "../lib/Image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Clock, Phone } from "lucide-react";
import { HERO_VIDEO, images, IG_URL, LOGO_SRC, PHONE_TEL, PHONE_DISPLAY, WORKING_HOURS, ADDRESS } from "../lib/content";
import { InstagramIcon } from "./icons";

export function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 220]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.15]);

  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Видео фон */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={images.heroPoster}
          className="media-duotone h-full w-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-night/85 via-night/60 to-night" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/75 via-transparent to-night/40" />
      </motion.div>

      {/* Плаващо лого — десктоп */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: -3 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="group pointer-events-none absolute right-[6%] top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <Image
          src={LOGO_SRC}
          alt="Официално лого на Padel Arena Petrich"
          width={420}
          height={302}
          priority
          className="logo-emblem w-[300px] rounded-[2rem] object-cover xl:w-[400px]"
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-24 pt-32 sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-flame/40 bg-flame/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-flame backdrop-blur">
            <MapPin size={13} />
            {ADDRESS}
          </span>
          <span className="hidden items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-gold backdrop-blur sm:inline-flex">
            <Clock size={13} />
            {WORKING_HOURS}
          </span>
        </motion.div>

        <h1 className="mt-8 font-display font-black uppercase leading-[0.95] tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-chrome block text-[13vw] sm:text-[9vw] lg:text-[7vw]"
          >
            Padel
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="text-flame-grad block text-[13vw] sm:text-[9vw] lg:text-[7vw]"
          >
            Arena
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
            className="text-stroke-gold block text-[10vw] sm:text-[6.5vw] lg:text-[4.6vw]"
          >
            Петрич
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 block max-w-xl font-body text-base font-semibold normal-case tracking-normal text-mist/75 sm:text-xl"
          >
            Премиум падел клуб в подножието на Беласица — кортове, кафе, бар и
            турнири сред гората.
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#booking"
            className="group relative overflow-hidden rounded-full bg-flame px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-night transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="relative z-10">Резервирай през Courtly</span>
            <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-500 ease-out group-hover:translate-x-0" />
          </a>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wider text-mist backdrop-blur transition-all duration-300 hover:border-flame hover:text-flame"
          >
            <InstagramIcon size={17} />
            @padelarenapetrich
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="group flex items-center gap-2 text-sm font-semibold text-mist/70 transition-colors hover:text-gold"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-colors group-hover:border-gold">
              <Phone size={15} />
            </span>
            {PHONE_DISPLAY}
          </a>
        </motion.div>

        {/* Статистики */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8"
        >
          {[
            { n: "2", l: "модерни корта" },
            { n: "1-ви", l: "клуб в Петрич" },
            { n: "08–24ч", l: "всеки ден" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-2xl font-extrabold text-gold sm:text-3xl">{s.n}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-mist/60">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#courts"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mist/50 transition-colors hover:text-flame"
        aria-label="Надолу"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </motion.a>
    </section>
  );
}

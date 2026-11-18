
import { useEffect, useState } from "react";
import Image from "../lib/Image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, CalendarCheck } from "lucide-react";
import { InstagramIcon } from "./icons";
import { IG_URL, LOGO_SQUARE } from "../lib/content";

const links = [
  { href: "#courts", label: "Кортове" },
  { href: "#events", label: "Събития" },
  { href: "#instagram", label: "Instagram" },
  { href: "#gallery", label: "Галерия" },
  { href: "#pricing", label: "Цени" },
  { href: "#contact", label: "Контакти" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-night/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <Image
            src={LOGO_SQUARE}
            alt="Лого на Padel Arena Petrich"
            width={46}
            height={46}
            className="logo-emblem h-[46px] w-[46px] rounded-xl object-cover"
            priority
          />
          <span className="font-display text-xs font-bold uppercase tracking-[0.2em] sm:text-sm">
            Padel Arena
            <span className="block text-[10px] font-semibold tracking-[0.35em] text-flame">
              Петрич
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-semibold text-ash transition-colors duration-300 hover:text-flame"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist transition-all duration-300 hover:border-flame hover:text-flame"
          >
            <InstagramIcon size={17} />
          </a>
          <a
            href="#booking"
            className="flex items-center gap-2 rounded-full bg-flame px-5 py-2.5 text-[13px] font-extrabold uppercase tracking-wider text-night transition-all duration-300 hover:bg-gold"
          >
            <CalendarCheck size={15} />
            Резервирай
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-white/5 bg-night/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-6 py-5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-mist hover:bg-white/5 hover:text-flame"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-flame px-5 py-3 text-sm font-extrabold uppercase tracking-wider text-night"
                >
                  <CalendarCheck size={16} />
                  Резервирай корт
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

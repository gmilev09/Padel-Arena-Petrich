
import { useEffect, useRef, useState } from "react";
import Image from "../lib/Image";
import { Reveal, SectionHeading } from "./Reveal";
import { InstagramIcon } from "./icons";
import { IG_URL, IG_EMBED_URL, REAL_REEL, LOGO_SQUARE } from "../lib/content";
import { ArrowUpRight, Clapperboard } from "lucide-react";

function LazyIframe({ src, title, className = "", minH = 560 }) {
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
    <div ref={holderRef} className={`relative ${className}`} style={{ minHeight: minH }}>
      {load ? (
        <iframe src={src} className="ig-embed-frame absolute inset-0" title={title} allowTransparency />
      ) : (
        <div className="grid place-items-center" style={{ minHeight: minH }}>
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-flame border-t-transparent" />
        </div>
      )}
    </div>
  );
}

export function InstagramSection() {
  return (
    <section id="instagram" className="court-lines relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker="Instagram" title="На живо от" accent="арената" />
          <Reveal delay={0.2}>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d62976] to-[#962fbf] px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-white transition-transform hover:scale-105"
            >
              <InstagramIcon size={15} />
              Следвай ни
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Реалното видео от кортовете */}
          <Reveal>
            <a
              href={REAL_REEL.url}
              target="_blank"
              rel="noopener noreferrer"
              className="lift group relative block overflow-hidden rounded-3xl border border-flame/30 shadow-2xl shadow-flame/10"
            >
              <Image
                src={REAL_REEL.poster}
                alt="Реалните кортове на Padel Arena Petrich — drone кадър нощем"
                width={650}
                height={860}
                className="aspect-[4/4.4] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "center 32%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-transparent to-night/30" />

              <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-flame px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-night">
                <Clapperboard size={13} />
                Реални кадри от кортовете
              </span>
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-gold/95 text-night shadow-2xl shadow-gold/30 transition-transform duration-300 group-hover:scale-110">
                  <InstagramIcon size={30} />
                </span>
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-lg font-extrabold uppercase leading-tight">
                  Drone видео над арената
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-mist/70">
                  Гледай в Instagram <ArrowUpRight size={14} className="text-gold" />
                </p>
              </div>
            </a>
          </Reveal>

          {/* Вграден reel — плеър директно в сайта */}
          <Reveal delay={0.12}>
            <div className="lift overflow-hidden rounded-3xl border border-white/10 bg-night-2">
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-tr from-[#fa7e1e] via-[#d62976] to-[#962fbf] text-white">
                    <InstagramIcon size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold leading-tight">Reel от корта</p>
                    <p className="text-[11px] text-mist/50">Пусни го директно тук</p>
                  </div>
                </div>
                <a
                  href={REAL_REEL.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full bg-flame px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider text-night transition-transform hover:scale-105"
                >
                  Reel <ArrowUpRight size={13} />
                </a>
              </div>
              <LazyIframe
                src={REAL_REEL.embed}
                title="Instagram reel — кортовете на Padel Arena Petrich"
                minH={620}
              />
            </div>
          </Reveal>
        </div>

        {/* Профилът */}
        <Reveal delay={0.1}>
          <div className="lift mt-8 overflow-hidden rounded-3xl border border-flame/25 bg-night-2 shadow-2xl shadow-flame/5">
            <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
              <div className="flex items-center gap-3">
                <Image
                  src={LOGO_SQUARE}
                  alt="Padel Arena Petrich лого"
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-xl object-cover"
                />
                <div>
                  <p className="text-sm font-extrabold leading-tight">@padelarenapetrich</p>
                  <p className="text-[11px] text-mist/50">Най-нови публикации и клипове</p>
                </div>
              </div>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-flame px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider text-night transition-transform hover:scale-105"
              >
                Последвай <ArrowUpRight size={13} />
              </a>
            </div>
            <LazyIframe
              src={IG_EMBED_URL}
              title="Instagram профил на Padel Arena Petrich"
              minH={560}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

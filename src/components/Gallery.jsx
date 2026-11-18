
import Image from "../lib/Image";
import { Reveal, SectionHeading } from "./Reveal";
import { galleryImages } from "../lib/content";

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading kicker="Галерия" title="Кортовете и" accent="планината" />
        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4">
          {galleryImages.map((g, i) => (
            <Reveal
              key={g.src + i}
              delay={0.04 * i}
              className={
                g.span === "wide"
                  ? "col-span-2"
                  : g.span === "tall"
                  ? "row-span-2"
                  : ""
              }
            >
              <figure className="lift group relative h-full w-full overflow-hidden rounded-2xl border border-white/8">
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={900}
                  height={900}
                  className="media-duotone h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-107"
                />
                <div className="absolute inset-0 bg-night/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-3 left-4 translate-y-3 text-xs font-bold uppercase tracking-widest text-mist opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

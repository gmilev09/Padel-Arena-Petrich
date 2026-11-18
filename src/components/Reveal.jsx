
import { motion, useReducedMotion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ kicker, title, accent }) {
  return (
    <div>
      <Reveal>
        <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.35em] text-flame">
          <span className="inline-block h-2 w-2 rounded-full bg-flame animate-soft-pulse" />
          {kicker}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl">
          {title}{" "}
          {accent ? <span className="text-flame">{accent}</span> : null}
        </h2>
      </Reveal>
    </div>
  );
}

// Съвместим заместител на next/image за Vite.
// Работи с data URL-и (вградени снимки) и с външни URL-и (Pexels/IG CDN),
// така че изображенията се показват на всеки хостинг — без зависимост от
// качване на файлове в public/ и без оптимизатор на изображения.
// Ако външен CDN блокира заявката (CSP, регион, хостинг), показваме
// рисуван placeholder вместо счупена снимка.

const FALLBACK =
  "data:image/svg+xml," +
  encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1b1012"/>
      <stop offset="55%" stop-color="#110a0b"/>
      <stop offset="100%" stop-color="#080607"/>
    </linearGradient>
    <pattern id="grid" width="72" height="72" patternUnits="userSpaceOnUse">
      <path d="M72 0H0v72" fill="none" stroke="#ff3128" stroke-opacity="0.12"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#g)"/>
  <rect width="800" height="600" fill="url(#grid)"/>
  <circle cx="400" cy="290" r="72" fill="#d9f24b"/>
  <path d="M348 250c34 12 58 38 66 74M452 250c-34 12-58 38-66 74" stroke="#080607" stroke-width="7" fill="none"/>
  <text x="400" y="430" text-anchor="middle" font-family="system-ui,sans-serif" font-size="26" font-weight="800" letter-spacing="6" fill="#f2eeee" fill-opacity="0.75">PADEL ARENA PETRICH</text>
</svg>`);

function withFallback(img) {
  if (img.dataset.fallback === "1") return;
  img.dataset.fallback = "1";
  img.src = FALLBACK;
}

export default function Image({
  src,
  alt = "",
  width,
  height,
  fill = false,
  priority = false,
  sizes,
  className = "",
  style,
  ...rest
}) {
  const common = {
    src,
    alt,
    className: fill ? `absolute inset-0 h-full w-full ${className}` : className,
    loading: priority ? "eager" : "lazy",
    decoding: "async",
    sizes,
    onError: (e) => withFallback(e.currentTarget),
    ...rest,
  };

  if (fill) {
    return <img {...common} style={{ objectFit: "cover", ...style }} />;
  }

  return <img {...common} width={width} height={height} style={style} />;
}

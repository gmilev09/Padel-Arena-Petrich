// ─── Padel Arena Petrich · съдържание ───────────────────────────────────────
// Реални данни от Instagram @padelarenapetrich и Courtly клубната страница:
// · 2 модерни корта · ул. „България“ 68, Петрич (41.3879, 23.1956)
// · Работно време: Пон–Нед 08:00 – 24:00 · Резервации: Courtly / +359 877 334 312

// Вградени (base64) изображения — виж scripts/optimize-images.mjs.
// Гарантирани се показват на всеки хостинг (Cloudflare, Netlify, локално),
// без да зависят от качването на файлове от public/ в assets директорията.
import { LOGO, AVATAR, EVENT_POSTER, REEL_POSTER } from "./images-data";

const px = (id, w = 1600, h) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}${h ? `&h=${h}&fit=crop` : ""}`;

export const IG_URL = "https://www.instagram.com/padelarenapetrich/";
export const IG_EMBED_URL = "https://www.instagram.com/padelarenapetrich/embed";
export const COURTLY_URL = "https://courtly.me/clubs/padel-arena-petrich/";

// Реални медии от техния Instagram (изтеглени от публикациите им)
export const REAL_REEL = {
  url: "https://www.instagram.com/reel/DdLlvn0uBbN/",
  embed: "https://www.instagram.com/reel/DdLlvn0uBbN/embed",
  poster: REEL_POSTER, // drone кадър на реалните кортове
};
// ⚠️ Постът с кратък код `Dfkfs38OLZj` вече НЕ съществува — Instagram връща
// „Sorry, this page isn't available." (проверено). Затова сочим към официалния
// профил, който е винаги достъпен. Когато публикувате нов пост за турнира,
// заменете двата адреса по-долу с него (url → поста, embed → поста + "/embed").
export const EVENT_POST = {
  url: IG_URL,
  embed: IG_EMBED_URL,
  img: EVENT_POSTER, // официалният постер на турнира
};

export const LOGO_SRC = LOGO; // пълната емблема от Courtly
export const LOGO_SQUARE = AVATAR; // квадратната емблема от Instagram

export const PHONE_DISPLAY = "0877 334 312";
export const PHONE_TEL = "+359877334312";
export const PHONE_INTL = "+359 877 334 312";
export const EMAIL = "padelarena534@abv.bg";
export const ADDRESS = "ул. „България“ 68, 2850 Петрич";
export const MAP_LAT = "41.3879047";
export const MAP_LNG = "23.1955512";
export const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=16&ie=UTF8&iwloc=&output=embed`;
export const WORKING_HOURS = "Пон – Нед: 08:00 – 24:00";

export const HERO_VIDEO =
  "https://videos.pexels.com/video-files/33444758/14232220_3840_2160_30fps.mp4";

export const images = {
  heroPoster: px(40136712, 1920),
  courtsWide: px(38155778, 1920),
  courtBlue: px(32474981, 1600),
  racketBall: px(31012869, 1600),
  ballBokeh: px(32896990, 1400),
  roofCourt: px(10926534, 1600),
  actionMen: px(40136712, 1400),
  actionWoman: px(35248286, 1400),
  actionJump: px(38413157, 1400),
  actionIndoor: px(35261961, 1400),
  restWoman: px(40165099, 1400),
  belasitsaForest: px(8402772, 1920),
  belasitsaGreen: px(8402770, 1600),
  belasitsaBridge: px(8402771, 1400),
  belasitsaRiver: px(8402769, 1400),
  belasitsaSunset: px(17062148, 1920),
};

// 2 реални модерни корта (според Courtly профила на клуба)
export const courts = [
  {
    id: "court-1",
    name: "Корт 1",
    tag: "Премиум",
    desc: "Модерен падел корт със стъклени стени, синя професионална настилка и нощно осветление — подходящ за начинаещи и опитни играчи.",
    img: images.courtsWide,
  },
  {
    id: "court-2",
    name: "Корт 2",
    tag: "Премиум",
    desc: "Вторият корт на арената — същото премиум изпълнение в гората на Беласица. Резервира се онлайн през Courtly.",
    img: images.courtBlue,
  },
];

// Реални удобства според Courtly: ac, pro_shop, locker, bar, parking, shower, wifi
export const features = [
  { title: "Климатизирана зала", desc: "Комфортна температура през всички сезони" },
  { title: "Pro Shop", desc: "Ракети, топки и екипировка на място" },
  { title: "Съблекални", desc: "Модерни съблекални с шкафчета" },
  { title: "Душове", desc: "Освежаване след мача" },
  { title: "Кафе & Бар", desc: "Напитки и почивка с изглед към кортовете" },
  { title: "Паркинг & Wi-Fi", desc: "Безплатен паркинг и безжичен интернет" },
];

// Реалното предстоящо събитие от официалния Instagram пост
export const upcomingEvent = {
  title: "Първенство по падел",
  kicker: "3-седмичен турнир",
  facts: [
    { label: "Формат", value: "Турнир, 3 седмици" },
    { label: "Вход", value: "20 € на двойка" },
    { label: "Корт", value: "Участниците си плащат корта" },
    { label: "Записване до", value: "15.11.2026 г." },
  ],
  ctaNote: "Обади се или пиши на лично съобщение в Instagram",
};

export const pricing = [
  {
    name: "Дневна игра",
    price: "20 €",
    per: "/ час на корт",
    time: "08:00 – 17:00",
    features: ["До 4 играчи на корт", "Безплатен паркинг", "Съблекални и душове", "Резервация през Courtly"],
  },
  {
    name: "Вечерна игра",
    price: "25 €",
    per: "/ час на корт",
    time: "17:00 – 24:00",
    highlight: true,
    features: ["До 4 играчи на корт", "Нощно осветление включено", "Съблекални и душове", "Coffee & Bar след мача"],
  },
];

export const extras = [
  { name: "Ракета от Pro Shop", price: "единично или комплект" },
  { name: "Турнирен вход", price: "20 € / двойка" },
  { name: "Работно време", price: "Пон – Нед · 08–24ч" },
];

export const galleryImages = [
  { src: REAL_REEL.poster, alt: "Реалните кортове от drone — Instagram", span: "tall" },
  { src: images.courtsWide, alt: "Сини стъклени кортове", span: "wide" },
  { src: images.actionMen, alt: "Мач в движение", span: "square" },
  { src: images.belasitsaForest, alt: "Гората на Беласица", span: "tall" },
  { src: images.racketBall, alt: "Ракета и топка", span: "square" },
  { src: EVENT_POST.img, alt: "Турнир по падел — официален постер", span: "tall" },
  { src: images.belasitsaSunset, alt: "Залез над Беласица", span: "wide" },
  { src: images.ballBokeh, alt: "Топка на син корт", span: "square" },
  { src: images.actionWoman, alt: "Фокус в играта", span: "square" },
  { src: images.actionIndoor, alt: "Интензивен мач", span: "square" },
  { src: images.belasitsaRiver, alt: "Планинска река", span: "square" },
  { src: images.restWoman, alt: "Почивка между геймовете", span: "square" },
];

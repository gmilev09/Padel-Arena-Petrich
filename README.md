# Padel Arena Petrich — сайт

Сайт на първия падел клуб в Петрич: реални данни от Instagram
([@padelarenapetrich](https://www.instagram.com/padelarenapetrich/)) и
[Courtly](https://courtly.me/clubs/padel-arena-petrich/), онлайн резервации
през Courtly, предстоящи събития, галерия и контакти.

## Технологии

* **Чист JavaScript (JSX)** — целият код на сайта е JS: `src/**/*.jsx` и
  `src/**/*.js`, без нито един `.ts`/`.tsx` файл с код. Единствените `.ts`
  файлове са конфигурации на билда, зададени от шаблона (`vite.config.ts` и
  `tsconfig.json`) — в тях няма код на сайта
* **React 19 + Vite 7 + Tailwind CSS 4**
* **База данни няма** — сайтът е 100 % статичен; резервациите са през Courtly
* `vite-plugin-singlefile` → целият сайт е **единствен `dist/index.html`**
  (JS, CSS и снимките са вградени като data URL), затова няма зависимост от
  отделни asset файлове и работи на всеки статичен хостинг

## Локална разработка

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/index.html
npm run preview
```

## Деплой в Cloudflare Pages

**Чрез Git (препоръчително):** Workers & Pages → Create → Pages → свързвате
репозитория. Настройки за билда (или ги взема автоматично от `wrangler.toml`):

* **Build command:** `npm run build`
* **Build output directory:** `dist`
* **Node version:** `.nvmrc` (22)

**Чрез CLI:**

```bash
npx wrangler login          # еднократно
npx wrangler pages deploy   # публикува dist/
```

Конфигурацията е в **`wrangler.toml`** (`pages_build_output_dir = "dist"`).
Header-ите са в **`public/_headers`** → копират се в `dist/`.

## Деплой в Netlify

**Чрез Git:** Add new site → Import an existing project → всичко идва от
**`netlify.toml`** (Build: `npm run build`, Publish: `dist`, Node 22).

**Чрез CLI:**

```bash
npx netlify login
npx netlify deploy --build --prod
```

## Структура

```
index.html            заглавие, meta, шрифтове (Unbounded + Manrope), favicon
netlify.toml          конфигурация за Netlify
wrangler.toml         конфигурация за Cloudflare Pages
.nvmrc                Node 22 (и двете платформи го четат)
public/_headers       security + cache header-и (Cloudflare Pages / Netlify)
public/_redirects     SPA fallback
src/main.jsx          entry
src/App.jsx           подредба на секциите
src/components/*.jsx  Navbar, Hero, Marquee, Courts, Events, Instagram,
                      Gallery, Pricing, CourtlyBooking, Contact, Footer
src/lib/content.js    ЦЯЛОТО съдържание — телефони, адрес, цени, кортове,
                      събития, галерия, линкове (само този файл се редактира)
src/lib/images-data.js  снимките, вградени като data URL (работят навсякъде)
src/lib/Image.jsx     заместител на next/image + fallback при неуспешно зареждане
```

## Съдържание

Цялото съдържание е в **`src/lib/content.js`** — редактирайте само него.

### Instagram линк на събитието

Постът `instagram.com/p/Dfkfs38OLZj/` **вече не съществува** (Instagram
връща „Sorry, this page isn't available."). Затова секцията „Предстоящо
събитие" сочи към официалния профил. Когато публикувате нов пост за
турнира, отворете `src/lib/content.js` и заменете:

```js
export const EVENT_POST = {
  url: "https://www.instagram.com/p/НОВИЯТ_КОД/",
  embed: "https://www.instagram.com/p/НОВИЯТ_КОД/embed",
  img: EVENT_POSTER,
};
```

### Снимки

Логото, аватарът, постерът на турнира и drone кадърът са **вградени като
base64 data URL** в `src/lib/images-data.js` — показват се на всеки хостинг,
без да е нужно качване на файлове. Останалите снимки са от Pexels CDN.

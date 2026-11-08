import { hero, links, profile } from '../content/site'
import { img } from '../lib/images'

/**
 * The photo sits in an arch — a nod to Yasi's training as an architect —
 * and a single turquoise line, borrowed from the orbit in the YD mark,
 * draws around it once when the page loads.
 */
function ArchPortrait({ src }) {
  return (
    <figure className="relative mx-auto w-full max-w-[19rem] sm:max-w-[22rem]">
      <div
        className="relative aspect-[4/5] overflow-hidden bg-lapis-deep"
        style={{ borderRadius: '50% 50% 1.25rem 1.25rem / 40% 40% 1.25rem 1.25rem' }}
      >
        {src && <img src={src} alt={`Portrait of ${profile.name}`} decoding="async" className="h-full w-full object-cover" />}
      </div>
      <svg
        viewBox="0 0 100 125"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
        fill="none"
      >
        <path
          className="hero-orbit"
          style={{ '--len': 100 }}
          pathLength="100"
          d="M-14 104 C-26 52 8 -6 58 -9 C104 -12 124 36 113 74 C107 96 92 110 76 118"
          stroke="var(--color-firouzeh)"
          strokeWidth="0.45"
          strokeLinecap="round"
        />
        <circle className="hero-dot" cx="76" cy="118" r="2.4" fill="var(--color-firouzeh)" />
      </svg>
    </figure>
  )
}

export default function Hero() {
  return (
    <section id="top" className="on-lapis relative overflow-hidden bg-lapis text-white">
      <div className="container-page grid items-center gap-14 pb-20 pt-32 md:grid-cols-12 md:gap-10 md:pb-28 md:pt-40">
        <div className="md:col-span-7">
          <h1 className="hero-in text-[1.0625rem] leading-snug">
            <span className="block font-semibold text-white">{profile.name}</span>
            <span className="block text-white/70">{hero.title}</span>
          </h1>

          <p
            className="display hero-in mt-8 max-w-[17ch] text-[clamp(2.6rem,5.2vw,4.25rem)] text-white"
            style={{ '--d': '120ms' }}
          >
            {hero.headline}
          </p>

          <p className="hero-in mt-7 max-w-[34rem] text-[1.1875rem] leading-relaxed text-white/80" style={{ '--d': '240ms' }}>
            {hero.intro}
          </p>

          <div className="hero-in mt-10 flex flex-wrap gap-3" style={{ '--d': '360ms' }}>
            <a
              href="#work"
              className="rounded-full bg-firouzeh px-7 py-3.5 font-semibold text-night transition-colors hover:bg-white"
            >
              See my work
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <ArchPortrait src={img(hero.portrait)} />
        </div>
      </div>
    </section>
  )
}

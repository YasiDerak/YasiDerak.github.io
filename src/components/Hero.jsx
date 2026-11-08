import { hero, profile } from '../content/site'
import { img } from '../lib/images'

const ARCH = '50% 50% 1.25rem 1.25rem / 40% 40% 1.25rem 1.25rem'

/**
 * The photo in a soft arch. Its violet frame slowly shimmers through
 * violet shades, and a small badge says hello with a waving hand.
 */
function ArchPortrait({ src }) {
  return (
    <figure className="relative mx-auto w-full max-w-[18rem] sm:max-w-[21rem]">
      <div className="arch-frame p-[6px] shadow-[var(--shadow-lift)]" style={{ borderRadius: ARCH }}>
        <div className="aspect-[4/5] overflow-hidden bg-lilac-200" style={{ borderRadius: ARCH }}>
          {src && <img src={src} alt={`Portrait of ${profile.name}`} decoding="async" className="h-full w-full object-cover" />}
        </div>
      </div>
      <figcaption className="hero-in absolute -bottom-5 -left-4 flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-ink shadow-[var(--shadow-soft)] sm:-left-8" style={{ '--d': '700ms' }}>
        <span className="wave inline-block text-[1.25rem] leading-none" aria-hidden="true">👋</span>
        Hi, I’m Yasi
      </figcaption>
    </figure>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-lilac-100">
      <div className="container-page grid items-center gap-16 pb-20 pt-32 md:grid-cols-12 md:gap-10 md:pb-28 md:pt-40">
        <div className="md:col-span-7">
          <h1 className="hero-in display text-[clamp(3.25rem,7.4vw,6.25rem)] leading-[0.95] text-ink">
            <span className="block">Yasaman</span>
            <span className="block">Derakhshandeh</span>
          </h1>

          <p className="hero-in mt-6 text-[1.1875rem] font-medium text-violet-deep" style={{ '--d': '120ms' }}>
            {hero.title}
          </p>

          <p className="hero-in mt-5 max-w-[32rem] text-[1.125rem] leading-relaxed text-ink-2" style={{ '--d': '220ms' }}>
            {hero.intro}
          </p>

          <div className="hero-in mt-9 flex flex-wrap gap-3" style={{ '--d': '320ms' }}>
            <a
              href="#work"
              className="rounded-full bg-violet px-7 py-3.5 font-medium text-ink transition-colors hover:bg-violet-deep hover:text-white"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-violet px-7 py-3.5 font-medium text-violet-deep transition-colors hover:bg-white"
            >
              Contact me
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

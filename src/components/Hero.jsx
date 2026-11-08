import { hero, profile } from '../content/site'
import { img } from '../lib/images'

/** The photo in a soft arch, white-framed, with a blush circle blooming behind it. */
function ArchPortrait({ src }) {
  return (
    <figure className="relative mx-auto w-full max-w-[18rem] sm:max-w-[21rem]">
      <span
        aria-hidden="true"
        className="hero-bloom absolute -bottom-6 -right-8 aspect-square w-[62%] rounded-full bg-pink"
      />
      <div
        className="relative aspect-[4/5] overflow-hidden border-[6px] border-white bg-lilac-200 shadow-[var(--shadow-lift)]"
        style={{ borderRadius: '50% 50% 1.25rem 1.25rem / 40% 40% 1.25rem 1.25rem' }}
      >
        {src && <img src={src} alt={`Portrait of ${profile.name}`} decoding="async" className="h-full w-full object-cover" />}
      </div>
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

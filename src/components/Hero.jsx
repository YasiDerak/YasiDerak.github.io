import { useEffect, useRef } from 'react'
import { hero, profile } from '../content/site'
import { img } from '../lib/images'
import { usePrefersReducedMotion } from '../lib/hooks'

const ARCH = '50% 50% 1.25rem 1.25rem / 40% 40% 1.25rem 1.25rem'

/**
 * The photo in a white-framed arch, sitting on a violet gradient shape that
 * slowly changes form. On a mouse, the photo drifts a few pixels toward the
 * cursor and the shape drifts the other way, for a sense of depth.
 */
function ArchPortrait({ src }) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduced || !window.matchMedia('(pointer: fine)').matches) return
    const section = el.closest('section')
    let frame = 0
    let next = { x: 0, y: 0 }
    const apply = () => {
      frame = 0
      el.style.setProperty('--mx', next.x.toFixed(3))
      el.style.setProperty('--my', next.y.toFixed(3))
    }
    const onMove = (e) => {
      const r = section.getBoundingClientRect()
      next = { x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 }
      if (!frame) frame = requestAnimationFrame(apply)
    }
    const onLeave = () => {
      next = { x: 0, y: 0 }
      if (!frame) frame = requestAnimationFrame(apply)
    }
    section.addEventListener('pointermove', onMove)
    section.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      section.removeEventListener('pointermove', onMove)
      section.removeEventListener('pointerleave', onLeave)
    }
  }, [reduced])

  return (
    <figure ref={ref} className="relative mx-auto w-full max-w-[17rem] sm:max-w-[20rem]" style={{ '--mx': 0, '--my': 0 }}>
      <div
        aria-hidden="true"
        className="absolute -inset-x-[22%] -inset-y-[14%] transition-transform duration-700 ease-out"
        style={{ transform: 'translate3d(calc(var(--mx) * -24px), calc(var(--my) * -18px), 0)' }}
      >
        <div className="morph morph-strong h-full w-full opacity-90" />
      </div>
      <div
        className="morph-frame relative p-[7px] shadow-[var(--shadow-lift)] transition-transform duration-500 ease-out"
        style={{ borderRadius: ARCH, transform: 'translate3d(calc(var(--mx) * 14px), calc(var(--my) * 12px), 0)' }}
      >
        <div className="aspect-[4/5] overflow-hidden bg-lilac-200" style={{ borderRadius: ARCH }}>
          {src && <img src={src} alt={`Portrait of ${profile.name}`} decoding="async" className="h-full w-full object-cover" />}
        </div>
      </div>
    </figure>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-lilac-100">
      <div
        aria-hidden="true"
        className="morph morph-soft pointer-events-none absolute -bottom-36 -left-36 -z-10 h-64 w-72 opacity-70 md:h-80 md:w-96"
        style={{ animationDuration: '14s', animationDirection: 'reverse' }}
      />
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

import { useEffect, useRef } from 'react'
import { hero, profile } from '../content/site'
import { img } from '../lib/images'
import { usePrefersReducedMotion } from '../lib/hooks'

/**
 * The photo (no frame), a thin outline and the violet shape behind it share one soft, flowing outline
 * that changes in sync, so the frame and the shape complete each other.
 * On a mouse, the photo drifts a few pixels toward the cursor and the shape
 * drifts the other way, for a sense of depth.
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
    <figure ref={ref} className="hero-pop relative mx-auto w-full max-w-[17rem] sm:max-w-[20rem]" style={{ '--mx': 0, '--my': 0 }}>
      {/* a thin outline in the same shape, offset up-left */}
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-transform duration-1000 ease-out"
        style={{ transform: 'translate3d(calc(-8% + var(--mx) * 18px), calc(-6% + var(--my) * 14px), 0) scale(1.06)' }}
      >
        <div className="blob-sync h-full w-full border-[1.5px] border-violet/70" />
      </div>
      {/* the same shape, filled, a little larger and offset down-right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ transform: 'translate3d(calc(9% + var(--mx) * -22px), calc(8% + var(--my) * -16px), 0) scale(1.1)' }}
      >
        <div className="blob-sync morph-strong morph-shift h-full w-full opacity-90" />
      </div>
      {/* the photo, frameless, in the same shape */}
      <div
        className="blob-sync relative overflow-hidden shadow-[0_30px_60px_-24px_rgb(107_79_207/0.55)] transition-transform duration-500 ease-out"
        style={{ transform: 'translate3d(calc(var(--mx) * 12px), calc(var(--my) * 10px), 0)' }}
      >
        <div className="blob-sync aspect-[4/5] overflow-hidden bg-lilac-200">
          {src && <img src={src} alt={`Portrait of ${profile.name}`} decoding="async" className="h-full w-full object-cover object-[50%_30%]" />}
        </div>
      </div>
    </figure>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[linear-gradient(to_bottom,var(--color-lilac-100)_0%,var(--color-lilac-100)_62%,#ffffff_100%)]"
    >
      {/* soft fade into the next section, over the corner shape but under the content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-[5] h-56 bg-[linear-gradient(to_bottom,transparent,#ffffff_78%)] md:h-72"
      />
      <div
        aria-hidden="true"
        className="morph morph-soft pointer-events-none absolute -bottom-52 -left-48 -z-10 hidden h-64 w-72 opacity-60 md:block md:h-80 md:w-96"
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

          <p className="hero-in mt-5 max-w-[30rem] text-[1.125rem] leading-relaxed text-ink-2 [text-wrap:pretty]" style={{ '--d': '220ms' }}>
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

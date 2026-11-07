import { useEffect, useRef } from 'react'
import { hero, profile } from '../content/site'
import { usePrefersReducedMotion } from '../lib/hooks'
import { Arrow, ButtonLink } from './ui/Bits'

/**
 * The name responds to the cursor: letters near the pointer gain weight,
 * like type leaning in to listen. Pointer devices only; off for reduced motion.
 */
function ResponsiveName({ lines }) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const root = ref.current
    if (!root || reduced || !window.matchMedia('(pointer: fine)').matches) return
    const letters = Array.from(root.querySelectorAll('[data-l]'))
    let rects = []
    let frame = 0
    let pointer = null

    const measure = () => {
      rects = letters.map((el) => {
        const r = el.getBoundingClientRect()
        return { x: r.left + r.width / 2 + window.scrollX, y: r.top + r.height / 2 + window.scrollY }
      })
    }
    const paint = () => {
      frame = 0
      letters.forEach((el, i) => {
        let w = 340
        if (pointer) {
          const dx = pointer.x - rects[i].x
          const dy = pointer.y - rects[i].y
          const d = Math.sqrt(dx * dx + dy * dy)
          w = 340 + 300 * Math.max(0, 1 - d / 240)
        }
        el.style.fontVariationSettings = `'wght' ${Math.round(w)}`
      })
    }
    const onMove = (e) => {
      pointer = { x: e.pageX, y: e.pageY }
      if (!frame) frame = requestAnimationFrame(paint)
    }
    const onLeave = () => {
      pointer = null
      if (!frame) frame = requestAnimationFrame(paint)
    }

    measure()
    const section = root.closest('section')
    section.addEventListener('pointermove', onMove)
    section.addEventListener('pointerleave', onLeave)
    window.addEventListener('resize', measure)
    document.fonts?.ready.then(measure)
    return () => {
      cancelAnimationFrame(frame)
      section.removeEventListener('pointermove', onMove)
      section.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', measure)
    }
  }, [reduced])

  return (
    <h1 ref={ref} aria-label={profile.name} className="display text-[clamp(2.75rem,11.6vw,10.6rem)] leading-[0.9] text-ink">
      {lines.map((line, li) => (
        <span
          key={line}
          aria-hidden="true"
          className={`block whitespace-nowrap ${li === 1 ? 'md:pl-[0.9em]' : ''}`}
        >
          {line.split('').map((ch, i) => (
            <span
              key={i}
              data-l
              className="inline-block transition-[font-variation-settings] duration-300 ease-out"
              style={{ fontVariationSettings: "'wght' 340" }}
            >
              {ch}
            </span>
          ))}
        </span>
      ))}
    </h1>
  )
}

function Orbit() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -right-[18vw] -top-[8vw] h-[70vw] w-[70vw] max-h-[900px] max-w-[900px] md:-right-[6vw] md:top-[-4vw] md:h-[52vw] md:w-[52vw]">
      <div className="anim-drift absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_40%_40%,var(--color-lilac-200),transparent_65%)] opacity-80 blur-2xl" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        {[190, 150, 112, 76].map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="var(--color-lilac-300)"
            strokeOpacity={0.55 - i * 0.08}
            strokeWidth="0.6"
            strokeDasharray={i === 1 ? '1 5' : undefined}
          />
        ))}
      </svg>
      <div className="anim-orbit absolute inset-[12.5%]">
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet shadow-[0_0_0_6px_rgb(106_85_168/0.12)]" />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="grain relative isolate overflow-hidden pb-16 pt-32 md:pb-24 md:pt-44">
      <Orbit />

      <div className="container-page relative">
        <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 md:mb-14">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/70 py-1.5 pl-2.5 pr-4 text-sm text-ink-2 backdrop-blur">
            <span className="anim-pulse-dot h-2 w-2 rounded-full bg-violet" aria-hidden="true" />
            <span>
              Currently {profile.role} at{' '}
              <a href={profile.companyUrl} target="_blank" rel="noreferrer" className="link-draw text-ink">
                {profile.company}
              </a>
            </span>
          </p>
          {profile.location && <p className="text-sm text-ink-3">{profile.location}</p>}
        </div>

        <div className="relative">
          <ResponsiveName lines={['Yasaman', 'Derakhshandeh']} />

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[0.78rem] uppercase tracking-[0.14em] text-ink-3 md:absolute md:right-0 md:top-3 md:mt-0 md:block md:space-y-2 md:text-right">
            {profile.titles.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-10 border-t border-line pt-10 md:mt-20 md:grid-cols-12 md:gap-10 md:pt-12">
          <p className="display text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.08] text-ink md:col-span-6">
            {hero.headline[0]} <em className="text-violet-deep">{hero.headline[1]}</em>
          </p>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-lg leading-relaxed text-ink-2">{hero.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#work">
                Explore my work
                <Arrow direction="down" className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Let’s connect
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

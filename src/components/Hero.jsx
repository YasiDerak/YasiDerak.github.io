import { useEffect, useRef } from 'react'
import { hero, profile } from '../content/site'
import { usePrefersReducedMotion } from '../lib/hooks'
import { Arrow, ButtonLink } from './ui/Bits'
import logo from '../assets/brand/yd-logo.png'

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

// Position of the logo's own dot ("DESIGN ●"), as a share of the trimmed logo image.
const LOGO_DOT = { left: '63.5%', top: '73.7%', size: '2.9%' }
const SPARKLES = [
  { left: '4%', top: '18%', size: 12, delay: '0.4s' },
  { left: '92%', top: '6%', size: 9, delay: '1.6s' },
  { left: '98%', top: '82%', size: 14, delay: '2.6s' },
  { left: '26%', top: '96%', size: 8, delay: '3.2s' },
]

function Sparkle({ s }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="anim-twinkle absolute text-violet"
      style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay }}
    >
      <path d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0z" fill="currentColor" />
    </svg>
  )
}

/**
 * The YD Design mark, brought to life: it writes itself in from left to right,
 * then floats on a slowly morphing lavender glow. A violet sheen sweeps through
 * the letterforms, the logo's dot pulses, and the whole scene leans gently
 * towards the cursor. Everything is static for reduced-motion visitors.
 */
function LogoScene({ className = '' }) {
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
      next = { x: (e.clientX / window.innerWidth) * 2 - 1, y: (e.clientY / window.innerHeight) * 2 - 1 }
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

  const mask = {
    WebkitMaskImage: `url(${logo})`,
    maskImage: `url(${logo})`,
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
  }

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none select-none ${className}`} style={{ '--mx': 0, '--my': 0 }}>
      {/* Morphing glow, drifting against the cursor */}
      <div
        className="absolute -inset-[30%] -z-10 transition-transform duration-[1200ms] ease-out"
        style={{ transform: 'translate3d(calc(var(--mx) * -22px), calc(var(--my) * -18px), 0)' }}
      >
        <div className="anim-blob absolute inset-[14%] bg-[radial-gradient(circle_at_35%_35%,var(--color-lilac-200),var(--color-lilac-100)_45%,transparent_72%)] opacity-90 blur-2xl" />
        <div
          className="anim-blob absolute inset-[30%_6%_10%_34%] bg-[radial-gradient(circle,rgb(255_128_126/0.16),transparent_70%)] blur-2xl"
          style={{ animationDuration: '21s', animationDirection: 'reverse' }}
        />
      </div>

      {/* The logo, leaning towards the cursor */}
      <div
        className="relative transition-transform duration-700 ease-out"
        style={{ transform: 'translate3d(calc(var(--mx) * 10px), calc(var(--my) * 8px), 0)' }}
      >
        <div className="anim-float relative">
          <img src={logo} alt="" width="478" height="360" className="anim-logo-in block h-auto w-full" />
          <div
            className="anim-sheen absolute inset-0 bg-[linear-gradient(105deg,transparent_38%,var(--color-violet)_47%,#a594e6_51%,transparent_60%)] bg-[length:260%_100%] bg-no-repeat"
            style={mask}
          />
          <span
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: LOGO_DOT.left, top: LOGO_DOT.top, width: LOGO_DOT.size, aspectRatio: '1' }}
          >
            <span className="anim-ping absolute inset-0 rounded-full bg-violet" />
            <span className="anim-pop-in absolute -inset-[12%] rounded-full bg-violet" />
          </span>
        </div>
        {SPARKLES.map((s) => (
          <Sparkle key={s.left} s={s} />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="grain relative isolate overflow-hidden pb-16 pt-32 md:pb-24 md:pt-44">
      {/* Small screens: just the soft glow; the logo already sits in the nav */}
      <div
        aria-hidden="true"
        className="anim-blob pointer-events-none absolute -right-24 -top-16 -z-10 h-80 w-80 bg-[radial-gradient(circle_at_40%_40%,var(--color-lilac-200),transparent_68%)] opacity-80 blur-2xl md:hidden"
      />

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
          <LogoScene className="absolute bottom-[63%] right-0 hidden w-[clamp(13rem,24vw,21rem)] md:block" />

          <ResponsiveName lines={['Yasaman', 'Derakhshandeh']} />

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[0.78rem] uppercase tracking-[0.14em] text-ink-3 md:justify-end md:gap-x-8">
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

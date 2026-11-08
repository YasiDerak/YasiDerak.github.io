import { useState } from 'react'
import { aplomb } from '../../content/aplomb'
import Media from '../ui/Media'
import Reveal from '../ui/Reveal'
import { Arrow, PlaceholderTag } from '../ui/Bits'

export const chapters = [
  { id: 'aplomb-overview', n: '01', label: 'Overview' },
  { id: 'aplomb-role', n: '02', label: 'My role' },
  { id: 'aplomb-decisions', n: '03', label: 'Key decisions' },
  { id: 'aplomb-system', n: '04', label: 'Design system' },
  { id: 'aplomb-final', n: '05', label: 'Final product' },
]

function Chapter({ index, title, intro, children, className = '' }) {
  const c = chapters[index]
  return (
    <section id={c.id} aria-labelledby={`${c.id}-title`} className={`scroll-mt-24 py-14 md:py-20 ${className}`}>
      <Reveal className="mb-10 grid gap-5 md:mb-12 md:grid-cols-12 md:gap-10">
        <p className="flex items-baseline gap-3 md:col-span-3">
          <span className="font-display text-[2.2rem] leading-none text-violet-deep">{c.n}</span>
          <span className="eyebrow">{c.label}</span>
        </p>
        <div className="md:col-span-9">
          <h3 id={`${c.id}-title`} className="display text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.04] text-ink">
            {title}
          </h3>
          {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">{intro}</p>}
        </div>
      </Reveal>
      {children}
    </section>
  )
}

/* 01 ---------------------------------------------------------------- */
export function Overview() {
  const { overview, definition } = aplomb
  return (
    <Chapter index={0} title={overview.lead}>
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="space-y-10 md:col-span-6 md:col-start-4">
          <div>
            <h4 className="eyebrow mb-3 text-violet-deep">The problem</h4>
            <p className="text-lg leading-relaxed text-ink-2">{overview.problem}</p>
          </div>
          <div>
            <h4 className="eyebrow mb-3 text-violet-deep">The idea</h4>
            <p className="text-lg leading-relaxed text-ink-2">{overview.approach}</p>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Moments people prepare for">
            {overview.moments.map((m, i) => (
              <li
                key={m}
                className="rounded-full border border-[#DCD8FB] bg-[#EEECFF] px-4 py-1.5 text-sm text-[#5148C5] transition-transform duration-300 hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                {m}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="md:col-span-3">
          <figure className="border-l border-line-strong pl-6">
            <p className="font-display text-3xl text-ink">
              {definition.word}
              <span className="ml-2 text-base text-ink-3">{definition.kind}</span>
            </p>
            <p className="mt-2 font-mono text-xs text-ink-3">/əˈplɒm/</p>
            <blockquote className="mt-4 font-display text-xl leading-snug text-violet-deep">
              {definition.meaning}
            </blockquote>
          </figure>
        </Reveal>
      </div>
    </Chapter>
  )
}

/* 02 ---------------------------------------------------------------- */
export function Role() {
  return (
    <Chapter
      index={1}
      title="Leading product, design and brand."
      intro="My work on Aplomb spans how it looks, how it works, and how it’s presented to the world."
    >
      <ol className="grid gap-x-10 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
        {aplomb.contributions.map((c, i) => (
          <Reveal as="li" key={c.title} delay={(i % 3) * 80} className="group border-t border-line-strong py-7">
            <div className="flex items-baseline justify-between">
              <h4 className="font-display text-[1.6rem] text-ink transition-colors duration-300 group-hover:text-violet-deep">
                {c.title}
              </h4>
                          </div>
            <p className="mt-3 leading-relaxed text-ink-2">{c.text}</p>
          </Reveal>
        ))}
      </ol>
    </Chapter>
  )
}

/* 03 ---------------------------------------------------------------- */
export function Decisions() {
  return (
    <Chapter index={2} title={<>Small choices that keep the help <em className="text-violet-deep">just enough.</em></>}>
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 md:pl-[25%]">
        {aplomb.decisions.map((d, i) => (
          <Reveal key={d.title} delay={(i % 2) * 90} className="border-t border-line-strong pt-5">
            <h4 className="flex items-center gap-3 font-medium text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-violet" aria-hidden="true" />
              {d.title}
            </h4>
            <p className="mt-2 leading-relaxed text-ink-2">{d.text}</p>
          </Reveal>
        ))}
      </div>
    </Chapter>
  )
}

/* 04 ---------------------------------------------------------------- */
function Swatch({ c }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(c.hex)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch {
      /* clipboard unavailable — no-op */
    }
  }
  return (
    <li>
      <button
        type="button"
        onClick={copy}
        className="group block w-full text-left"
        aria-label={`${c.name} ${c.hex} — copy hex value`}
      >
        <span
          className={`relative block aspect-[4/3] overflow-hidden rounded-2xl transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:-translate-y-1.5 ${
            c.light ? 'border border-black/5' : ''
          }`}
          style={{ background: c.hex }}
        >
          <span
            className={`absolute bottom-3 left-3 font-mono text-[0.68rem] transition-opacity duration-300 ${
              c.light ? 'text-ink-2' : 'text-white/85'
            }`}
          >
            {copied ? 'Copied ✓' : c.hex}
          </span>
        </span>
        <span className="mt-3 block text-sm font-medium text-ink">{c.name}</span>
        <span className="block text-xs text-ink-3">{c.role}</span>
      </button>
    </li>
  )
}

export function System() {
  const { system } = aplomb
  return (
    <Chapter index={3} title="A small system that holds everything together." intro={system.intro}>
      <Reveal>
        <div className="mb-6 flex items-baseline justify-between">
          <h4 className="eyebrow">Colour</h4>
          <p className="hidden text-xs text-ink-3 sm:block">Sampled from the brand artwork. Click a colour to copy it.</p>
        </div>
        <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {system.palette.map((c) => (
            <Swatch key={c.hex} c={c} />
          ))}
        </ul>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <h4 className="eyebrow mb-4">The mark</h4>
          <Media src={system.mark} alt="The Aplomb mark: a letter A holding a voice waveform" ratio="4 / 3" className="rounded-[1.5rem]" />
          <p className="mt-3 text-sm text-ink-2">
            An “A” for Aplomb that holds a voice waveform — confidence and speech in one shape.
          </p>
        </Reveal>

        <Reveal delay={100} className="flex flex-col md:col-span-5">
          <h4 className="eyebrow mb-4">Typography</h4>
          <div className="flex flex-1 flex-col justify-between rounded-[1.5rem] border border-line bg-white/70 p-7">
            {system.typefaces.length ? (
              system.typefaces.map((t) => (
                <div key={t.name} className="border-b border-line pb-5 last:border-0">
                  <p className="text-5xl text-[#122D6F]" style={{ fontFamily: t.name }}>Aa</p>
                  <p className="mt-2 font-medium text-ink">{t.name}</p>
                  <p className="text-sm text-ink-3">{t.use}</p>
                </div>
              ))
            ) : (
              <>
                <p className="font-sans text-[3.5rem] font-light leading-none tracking-tight text-[#122D6F]">
                  Speak with <br />
                  Aplomb.
                </p>
                <div className="mt-8 space-y-3 border-t border-line pt-5 text-sm">
                  <p className="flex justify-between text-ink-2">
                    <span>Display</span>
                    <span className="text-ink-3">Light, tight, conversational</span>
                  </p>
                  <p className="flex justify-between text-ink-2">
                    <span>Interface</span>
                    <span className="text-ink-3">Clear and friendly at small sizes</span>
                  </p>
                  <div className="pt-2">
                    <PlaceholderTag>Add typeface name</PlaceholderTag>
                  </div>
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <h4 className="eyebrow mb-4">Components</h4>
        <div className="grid items-end gap-6 rounded-[2rem] bg-gradient-to-br from-[#EAF1FD] via-[#EEECFF] to-[#F3F3FF] p-6 sm:grid-cols-2 md:grid-cols-12 md:p-12">
          {system.components.map((c, i) => (
            <figure
              key={c.caption}
              className={`mx-auto w-full ${i === 0 ? 'md:col-span-5' : i === 1 ? 'md:col-span-4' : 'md:col-span-3'}`}
              style={{ maxWidth: c.width }}
            >
              <Media
                src={c.image}
                alt={`Aplomb component — ${c.caption}`}
                ratio={c.ratio}
                className="rounded-2xl shadow-[var(--shadow-soft)]"
                hover={false}
              />
              <figcaption className="mt-3 text-sm text-ink-2">{c.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </Chapter>
  )
}

/* 05 ---------------------------------------------------------------- */
export function Final() {
  const { final, siteUrl } = aplomb
  const replay = () => {
    document.getElementById('aplomb-film')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    window.dispatchEvent(new Event('aplomb:replay'))
  }
  return (
    <Chapter index={4} title="Brand, app and website — one voice." className="pb-8 md:pb-12">
      <Reveal>
        <Media
          src={final.image}
          alt="Aplomb brand board: logo, landing page and four app screens"
          ratio="4 / 3"
          className="rounded-[2rem] shadow-[var(--shadow-lift)]"
          sizes="(min-width: 1240px) 1160px, 100vw"
        />
      </Reveal>
      <Reveal className="mx-auto mt-12 max-w-3xl text-center md:mt-16">
        <p className="display text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] text-ink">{final.closing}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={siteUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[0.95rem] font-medium text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-deep"
          >
            See Aplomb live
            <Arrow className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={replay}
            className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-white/60 px-6 py-3.5 text-[0.95rem] text-ink transition-all duration-300 hover:border-violet hover:text-violet-deep"
          >
            Replay the film
          </button>
        </div>
      </Reveal>
    </Chapter>
  )
}

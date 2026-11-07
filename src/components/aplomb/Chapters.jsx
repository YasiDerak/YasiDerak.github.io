import { useState } from 'react'
import { aplomb } from '../../content/aplomb'
import Media from '../ui/Media'
import Reveal from '../ui/Reveal'
import { Arrow, PlaceholderTag } from '../ui/Bits'

export const chapters = [
  { id: 'aplomb-overview', n: '01', label: 'Overview' },
  { id: 'aplomb-vision', n: '02', label: 'Vision' },
  { id: 'aplomb-role', n: '03', label: 'My role' },
  { id: 'aplomb-process', n: '04', label: 'Process' },
  { id: 'aplomb-interface', n: '05', label: 'Interface' },
  { id: 'aplomb-system', n: '06', label: 'Design system' },
  { id: 'aplomb-website', n: '07', label: 'Website' },
  { id: 'aplomb-final', n: '08', label: 'Final product' },
]

function Chapter({ index, title, intro, children, className = '' }) {
  const c = chapters[index]
  return (
    <section id={c.id} aria-labelledby={`${c.id}-title`} className={`scroll-mt-24 py-20 md:py-28 ${className}`}>
      <Reveal className="mb-12 grid gap-5 md:mb-16 md:grid-cols-12 md:gap-10">
        <p className="flex items-baseline gap-3 md:col-span-3">
          <span className="font-display text-[2.2rem] italic leading-none text-violet">{c.n}</span>
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
            <h4 className="eyebrow mb-3 text-violet">The problem</h4>
            <p className="text-lg leading-relaxed text-ink-2">{overview.problem}</p>
          </div>
          <div>
            <h4 className="eyebrow mb-3 text-violet">The idea</h4>
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
              <span className="ml-2 font-display text-base italic text-ink-3">{definition.kind}</span>
            </p>
            <p className="mt-2 font-mono text-xs text-ink-3">/əˈplɒm/</p>
            <blockquote className="mt-4 font-display text-xl italic leading-snug text-violet-deep">
              {definition.meaning}
            </blockquote>
          </figure>
        </Reveal>
      </div>
    </Chapter>
  )
}

/* 02 ---------------------------------------------------------------- */
export function Vision() {
  const { vision } = aplomb
  return (
    <Chapter index={1} title="Helping people prepare for real conversations.">
      <Reveal>
        <p className="display mx-auto max-w-4xl py-6 text-center text-[clamp(2.2rem,6vw,4.75rem)] italic leading-[1.02] text-violet-deep md:py-12">
          “{vision.statement}”
        </p>
      </Reveal>
      <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {vision.pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="border-t border-line-strong pt-6">
            <p className="font-mono text-xs text-violet">0{i + 1}</p>
            <h4 className="mt-3 font-display text-2xl text-ink">{p.title}</h4>
            <p className="mt-3 leading-relaxed text-ink-2">{p.text}</p>
          </Reveal>
        ))}
      </div>
    </Chapter>
  )
}

/* 03 ---------------------------------------------------------------- */
export function Role() {
  return (
    <Chapter
      index={2}
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
              <span className="font-mono text-xs text-ink-3">0{i + 1}</span>
            </div>
            <p className="mt-3 leading-relaxed text-ink-2">{c.text}</p>
          </Reveal>
        ))}
      </ol>
    </Chapter>
  )
}

/* 04 ---------------------------------------------------------------- */
export function Process() {
  const { journey } = aplomb
  return (
    <Chapter index={3} title="One journey, from “I have something coming up” to “I’m ready.”" intro={journey.intro}>
      {/* Journey track */}
      <Reveal>
        <h4 className="eyebrow mb-8">User journey</h4>
        <ol className="relative grid gap-8 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 hidden h-px w-[calc(100%-14px)] bg-gradient-to-r from-lilac-300 via-violet/50 to-lilac-300 lg:block"
          />
          {journey.steps.map((s, i) => (
            <li key={s.n} className="relative pl-8 lg:pl-0 lg:pt-10">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 border-violet bg-paper lg:top-0.5"
                style={{ boxShadow: i === 2 ? '0 0 0 6px rgb(106 85 168 / 0.12)' : undefined }}
              />
              <p className="font-mono text-[0.7rem] text-violet">{s.n}</p>
              <h5 className="mt-1.5 font-display text-xl leading-tight text-ink">{s.title}</h5>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-2">{s.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* Decisions */}
      <div className="mt-24 grid gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-4">
          <h4 className="eyebrow mb-4">Design decisions</h4>
          <p className="font-display text-[1.75rem] leading-snug text-ink">
            Small choices that keep the help <em className="text-violet-deep">just enough.</em>
          </p>
        </Reveal>
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 md:col-span-8">
          {journey.decisions.map((d, i) => (
            <Reveal key={d.title} delay={(i % 2) * 90}>
              <h5 className="flex items-center gap-3 font-medium text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-violet" aria-hidden="true" />
                {d.title}
              </h5>
              <p className="mt-2 leading-relaxed text-ink-2">{d.text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Process artefacts */}
      <div className="mt-24">
        <Reveal className="mb-6 flex flex-wrap items-center gap-3">
          <h4 className="eyebrow">From the process</h4>
          {journey.artefacts.some((a) => a.placeholder) && <PlaceholderTag>Add research, wireframes & iterations</PlaceholderTag>}
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {journey.artefacts.map((a, i) => (
            <Reveal key={a.caption} delay={i * 90}>
              <Media src={a.image} alt={a.caption} label={a.caption} ratio="4 / 3" className="rounded-2xl border border-line" />
              <p className="mt-3 text-sm text-ink-3">{a.caption}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Chapter>
  )
}

/* 05 ---------------------------------------------------------------- */
export function Interface() {
  const ui = aplomb.interface
  return (
    <Chapter index={4} title="A calm interface built around one thing: your voice." intro={ui.intro}>
      <div className="space-y-20 md:space-y-28">
        {ui.feature.map((f, i) => (
          <Reveal key={f.title} className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
            <Media
              src={f.image}
              alt={`Aplomb mobile app — ${f.title}`}
              ratio="4 / 3"
              className={`rounded-[1.5rem] shadow-[var(--shadow-lift)] md:col-span-8 ${i % 2 ? 'md:order-2 md:col-start-5' : ''}`}
            />
            <div className={`md:col-span-4 ${i % 2 ? 'md:order-1 md:col-start-1 md:row-start-1' : ''}`}>
              <p className="font-mono text-xs text-violet">0{i + 1}</p>
              <h4 className="mt-2 font-display text-[2rem] leading-tight text-ink">{f.title}</h4>
              <p className="mt-3 text-lg leading-relaxed text-ink-2">{f.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Screen line-up */}
      <Reveal className="mt-24 overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#E6EEFD] to-[#EEECFF] px-5 py-12 md:px-12 md:py-16">
        <p className="eyebrow mb-10 text-center">Screens · iOS & Android</p>
        <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
          {ui.screens.map((s, i) => (
            <li key={s.caption} className={`${i % 2 ? 'md:translate-y-10' : ''} transition-transform duration-700`}>
              <Media
                src={s.image}
                alt={`Aplomb app screen — ${s.caption}`}
                ratio="1 / 2"
                className="rounded-[1.6rem] shadow-[var(--shadow-lift)] transition-transform duration-500 hover:-translate-y-1.5"
                hover={false}
              />
              <p className="mt-4 text-center text-sm text-ink-2">{s.caption}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {ui.more.map((m, i) => (
          <Reveal key={m.title} delay={i * 90}>
            <Media src={m.image} alt={`Aplomb mobile app — ${m.title}`} ratio="4 / 3" className="rounded-2xl" />
            <p className="mt-3 text-sm text-ink-2">{m.title}</p>
          </Reveal>
        ))}
      </div>
    </Chapter>
  )
}

/* 06 ---------------------------------------------------------------- */
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
          className={`relative block aspect-[3/4] overflow-hidden rounded-2xl transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:-translate-y-1.5 ${
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
    <Chapter index={5} title="A small system that holds everything together." intro={system.intro}>
      <Reveal>
        <div className="mb-6 flex items-baseline justify-between">
          <h4 className="eyebrow">Colour</h4>
          <p className="hidden text-xs text-ink-3 sm:block">Sampled from the brand artwork · click to copy</p>
        </div>
        <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {system.palette.map((c) => (
            <Swatch key={c.hex} c={c} />
          ))}
        </ul>
      </Reveal>

      <div className="mt-20 grid gap-6 md:grid-cols-12">
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

      <Reveal className="mt-20">
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

/* 07 ---------------------------------------------------------------- */
export function Website() {
  const { website, siteUrl, siteLabel } = aplomb
  return (
    <Chapter index={6} title="A landing page that rehearses in front of you." intro={website.intro}>
      <Reveal>
        <Media
          src={website.hero.image}
          alt="Aplomb landing page hero: Speak with Aplomb."
          ratio="4 / 3"
          className="rounded-[1.75rem] shadow-[var(--shadow-lift)] md:aspect-[16/10]!"
          imgClassName="object-[50%_35%]"
        />
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-lg text-ink-2">{website.hero.title}</p>
          <a
            href={siteUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/60 px-5 py-2.5 text-sm text-ink transition-all duration-300 hover:border-violet hover:text-violet-deep"
          >
            Visit {siteLabel}
            <Arrow className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Reveal>

      <div className="mt-20 grid gap-10 md:grid-cols-3 md:gap-6">
        {website.beats.map((b, i) => (
          <Reveal key={b.title} delay={i * 100}>
            <Media src={b.image} alt={`Aplomb landing page — ${b.title}`} ratio="4 / 3" className="rounded-2xl" />
            <h4 className="mt-5 font-display text-xl leading-snug text-ink">{b.title}</h4>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{b.text}</p>
          </Reveal>
        ))}
      </div>
    </Chapter>
  )
}

/* 08 ---------------------------------------------------------------- */
export function Final() {
  const { final, siteUrl } = aplomb
  const replay = () => {
    document.getElementById('aplomb-film')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    window.dispatchEvent(new Event('aplomb:replay'))
  }
  return (
    <Chapter index={7} title="Brand, app and website — one voice." className="pb-8 md:pb-12">
      <Reveal>
        <Media
          src={final.image}
          alt="Aplomb brand board: logo, landing page and four app screens"
          ratio="4 / 3"
          className="rounded-[2rem] shadow-[var(--shadow-lift)]"
          sizes="(min-width: 1240px) 1160px, 100vw"
        />
      </Reveal>
      <Reveal className="mx-auto mt-16 max-w-3xl text-center md:mt-24">
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

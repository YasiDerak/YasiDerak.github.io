import { useEffect, useState } from 'react'
import { aplomb } from '../../content/aplomb'
import { useActiveSection } from '../../lib/hooks'
import Reveal from '../ui/Reveal'
import Film from './Film'
import { chapters, Final, Interface, Overview, Process, Role, System, Vision, Website } from './Chapters'

const chapterIds = chapters.map((c) => c.id)

/** Floating pill that tracks reading progress through the case study. */
function ChapterPill() {
  const active = useActiveSection(chapterIds)
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const first = document.getElementById(chapterIds[0])
    const last = document.getElementById(chapterIds[chapterIds.length - 1])
    const onScroll = () => {
      if (!first || !last) return
      const top = first.getBoundingClientRect().top
      const bottom = last.getBoundingClientRect().bottom
      const show = top < window.innerHeight * 0.6 && bottom > window.innerHeight * 0.5
      setVisible(show)
      if (!show) setOpen(false)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const idx = Math.max(0, chapters.findIndex((c) => c.id === active))
  const current = chapters[idx]

  return (
    <div
      className={`fixed bottom-5 left-1/2 z-40 -translate-x-1/2 transition-all duration-500 ease-[var(--ease-out-soft)] ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
      aria-hidden={!visible}
    >
      <div
        className={`absolute bottom-full left-1/2 mb-2 w-60 -translate-x-1/2 rounded-2xl border border-line bg-paper/95 p-2 shadow-[var(--shadow-lift)] backdrop-blur-xl transition-all duration-300 ${
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
        }`}
      >
        <ol>
          {chapters.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors ${
                  c.id === current.id ? 'bg-lilac-100 text-ink' : 'text-ink-2 hover:bg-lilac-50'
                }`}
              >
                <span className="font-mono text-[0.68rem] text-violet">{c.n}</span>
                {c.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        tabIndex={visible ? 0 : -1}
        className="flex items-center gap-3 rounded-full border border-line bg-paper/90 py-2 pl-4 pr-2 text-sm text-ink shadow-[var(--shadow-lift)] backdrop-blur-xl"
      >
        <span className="font-display italic text-violet">Aplomb</span>
        <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
        <span className="font-mono text-[0.7rem] text-ink-3">{current.n}</span>
        <span className="min-w-[6.5rem] text-left">{current.label}</span>
        <span className="relative h-7 w-7" aria-hidden="true">
          <svg viewBox="0 0 28 28" className="absolute inset-0 -rotate-90">
            <circle cx="14" cy="14" r="12" fill="none" stroke="var(--color-lilac-200)" strokeWidth="2" />
            <circle
              cx="14"
              cy="14"
              r="12"
              fill="none"
              stroke="var(--color-violet)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 12}
              strokeDashoffset={2 * Math.PI * 12 * (1 - (idx + 1) / chapters.length)}
              className="transition-[stroke-dashoffset] duration-700"
            />
          </svg>
        </span>
        <span className="sr-only">Show case study chapters</span>
      </button>
    </div>
  )
}

export default function CaseStudy() {
  return (
    <section id="work" aria-labelledby="aplomb-title" className="relative px-2 md:px-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#EEF2FC] via-[#F4F3FC] to-paper md:rounded-[2.75rem]">
        {/* soft atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-0 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,#DCE6FD,transparent_70%)] opacity-90"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-40 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,#E5DEFB,transparent_70%)]"
        />

        <div className="container-page relative pb-10 pt-20 md:pt-28">
          {/* Intro */}
          <Reveal className="flex flex-wrap items-center gap-3">
            <span className="eyebrow">Featured case study</span>
            <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
            <span className="eyebrow text-violet">Brand · App · Web</span>
          </Reveal>

          <div className="mt-8 grid items-end gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <h2 id="aplomb-title" className="display text-[clamp(4.5rem,15vw,12.5rem)] leading-[0.82] text-[#122D6F]">
                Aplomb
              </h2>
              <p className="mt-6 max-w-xl font-display text-[clamp(1.5rem,2.6vw,2.1rem)] italic leading-snug text-ink-2">
                {aplomb.tagline}
              </p>
            </Reveal>
            <Reveal delay={120} as="dl" className="grid grid-cols-2 gap-x-6 gap-y-5 md:col-span-5 md:grid-cols-1 lg:grid-cols-2">
              {aplomb.meta.map((m) => (
                <div key={m.label} className="border-t border-line-strong pt-3">
                  <dt className="eyebrow text-[0.66rem]">{m.label}</dt>
                  <dd className="mt-1.5 text-[0.95rem] leading-snug text-ink">{m.value}</dd>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal id="aplomb-film" className="mt-16 md:mt-24">
            <Film />
          </Reveal>

          <Overview />
          <Vision />
          <Role />
          <Process />
          <Interface />
          <System />
          <Website />
          <Final />
        </div>
      </div>
      <ChapterPill />
    </section>
  )
}

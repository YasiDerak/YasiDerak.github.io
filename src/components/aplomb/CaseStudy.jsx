import { aplomb } from '../../content/aplomb'
import Reveal from '../ui/Reveal'
import { Arrow } from '../ui/Bits'
import Film from './Film'
import { Decisions, Final, Overview, Role, System } from './Chapters'

/** The Aplomb case study page (#/work/aplomb). The film leads; the sections fill in what it can't show. */
export default function AplombPage() {
  return (
    <article aria-labelledby="aplomb-title" className="relative px-2 pt-24 md:px-4 md:pt-28">
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

        <div className="container-page relative pb-6 pt-10 md:pt-14">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-ink-3">
            <a href="#work" className="group inline-flex items-center gap-2 hover:text-violet-deep">
              <Arrow direction="right" className="rotate-180 transition-transform duration-300 group-hover:-translate-x-0.5" />
              <span className="link-draw">All work</span>
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-ink-2">Aplomb</span>
          </nav>

          <div className="mt-10 grid items-end gap-10 md:mt-12 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <p className="eyebrow">
                Case study <span className="mx-2 text-line-strong">·</span>
                <span className="text-violet">Brand · App · Web</span>
              </p>
              <h1 id="aplomb-title" className="display mt-5 text-[clamp(4rem,13vw,10.5rem)] leading-[0.85] text-[#122D6F]">
                Aplomb
              </h1>
              <p className="mt-5 max-w-xl font-display text-[clamp(1.4rem,2.4vw,2rem)] italic leading-snug text-ink-2">
                {aplomb.tagline}
              </p>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
                {aplomb.meta.map((m) => (
                  <div key={m.label} className="border-t border-line-strong pt-3">
                    <dt className="eyebrow text-[0.66rem]">{m.label}</dt>
                    <dd className="mt-1.5 text-[0.95rem] leading-snug text-ink">{m.value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={aplomb.siteUrl}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/60 px-5 py-2.5 text-sm text-ink transition-all duration-300 hover:border-violet hover:text-violet-deep"
              >
                Visit {aplomb.siteLabel}
                <Arrow className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>

          <Reveal id="aplomb-film" className="mt-12 md:mt-16">
            <Film />
          </Reveal>

          <Overview />
          <Role />
          <Decisions />
          <System />
          <Final />
        </div>
      </div>
    </article>
  )
}

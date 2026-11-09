import { aplomb } from '../../content/aplomb'
import Reveal from '../ui/Reveal'
import { Arrow } from '../ui/Bits'
import Film from './Film'
import { Decisions, Final, Overview, Role, System } from './Chapters'

/** The Aplomb case study page (#/work/aplomb). The film leads; the sections fill in what it can't show. */
export default function AplombPage() {
  return (
    <article aria-labelledby="aplomb-title" className="relative isolate overflow-x-clip">
      {/* the same light violet as the home page hero, fading to white behind the film */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[linear-gradient(to_bottom,var(--color-lilac-100)_0%,var(--color-lilac-100)_55%,#ffffff_100%)] md:h-[52rem]"
      />
      <div>
        <div className="container-page relative pb-6 pt-28 md:pt-36">
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
              <p className="eyebrow">Case study: brand, app and website</p>
              <h1 id="aplomb-title" className="display mt-4 text-[clamp(3.75rem,11vw,8.5rem)] leading-[1] text-[#122D6F]">
                Aplomb
              </h1>
              <p className="mt-6 max-w-xl text-[clamp(1.25rem,2vw,1.6rem)] leading-snug text-ink-2">
                {aplomb.tagline}
              </p>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
                {aplomb.meta.map((m) => (
                  <div key={m.label} className="border-t border-line-strong pt-3">
                    <dt className="text-[0.8125rem] text-ink-3">{m.label}</dt>
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

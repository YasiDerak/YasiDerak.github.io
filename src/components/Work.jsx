import { links, projects } from '../content/site'
import Media from './ui/Media'
import Reveal from './ui/Reveal'
import { Arrow, PlaceholderTag, SectionHeader } from './ui/Bits'

function ProjectCard({ p, i }) {
  const Wrapper = p.link ? 'a' : 'div'
  const wrapperProps = p.link ? { href: p.link, target: '_blank', rel: 'noreferrer' } : {}
  return (
    <Reveal delay={(i % 2) * 120} className={i % 2 ? 'md:mt-24' : ''}>
      <Wrapper {...wrapperProps} className="group block">
        <Media
          src={p.image}
          alt={p.placeholder ? '' : `${p.title} preview`}
          label="Project preview"
          ratio="5 / 4"
          className="rounded-[1.5rem] border border-line"
        />
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-[1.75rem] leading-tight text-ink transition-colors duration-300 group-hover:text-violet-deep">
                {p.title}
              </h3>
              {p.placeholder && <PlaceholderTag />}
            </div>
            <p className="mt-2 max-w-md leading-relaxed text-ink-2">{p.description}</p>
            <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-3">
              <span className="text-violet">{p.role}</span>
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </p>
          </div>
          {p.link && (
            <span className="mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:border-violet group-hover:bg-violet group-hover:text-paper">
              <Arrow />
            </span>
          )}
        </div>
      </Wrapper>
    </Reveal>
  )
}

export default function Work() {
  return (
    <section id="selected" aria-labelledby="selected-title" className="py-28 md:py-40">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            index="04"
            label="Other selected work"
            title={
              <span id="selected-title">
                More projects, <em className="text-violet-deep">in brief.</em>
              </span>
            }
            intro="A few more products and experiences I’ve designed."
          />
        </Reveal>
        <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-2 md:gap-x-10 md:gap-y-12">
          {projects.map((p, i) => (
            <ProjectCard key={i} p={p} i={i} />
          ))}
        </div>
        <Reveal className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8 md:mt-28">
          <p className="font-display text-2xl text-ink">
            More visual work and earlier projects <em className="text-violet-deep">live on Behance.</em>
          </p>
          <a
            href={links.behance}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm text-ink transition-all duration-300 hover:border-violet hover:text-violet-deep"
          >
            View Behance
            <Arrow className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

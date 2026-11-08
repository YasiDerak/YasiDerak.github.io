import { projects } from '../content/site'
import { projectHref } from '../lib/router'
import AplombPage from './aplomb/CaseStudy'
import Media from './ui/Media'
import { Arrow } from './ui/Bits'

/**
 * Project pages, by slug. To add one:
 *   1. give the project a `slug` in src/content/site.js → projects
 *   2. build its page component and register it here
 */
const pages = {
  aplomb: AplombPage,
}

export const projectTitle = (slug) => projects.find((p) => p.slug === slug)?.title ?? 'Project'

/** A short strip of the other projects, so a visitor can keep going. */
function MoreWork({ current }) {
  const others = projects.filter((p) => p.slug !== current && !p.placeholder).slice(0, 2)
  return (
    <section aria-labelledby="more-work-title" className="container-page py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="more-work-title" className="display text-[clamp(2rem,4vw,3rem)] text-ink">
          More work
        </h2>
        <a href="#work" className="group inline-flex items-center gap-2 text-sm text-ink-2 hover:text-violet-deep">
          <Arrow direction="right" className="rotate-180 transition-transform duration-300 group-hover:-translate-x-0.5" />
          <span className="link-draw">All projects</span>
        </a>
      </div>
      <ul className="mt-10 grid gap-8 md:grid-cols-2">
        {others.map((p) => {
          const href = p.slug ? projectHref(p.slug) : p.link
          const external = !p.slug
          return (
            <li key={p.title}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group grid grid-cols-[8rem_1fr] items-center gap-5 rounded-[1.5rem] border border-line bg-paper p-3 pr-6 transition-all duration-300 hover:border-violet/40 hover:shadow-[var(--shadow-soft)] sm:grid-cols-[11rem_1fr]"
              >
                <Media src={p.image} alt="" ratio="4 / 3" className="rounded-2xl" hover={false} />
                <span>
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-display text-2xl text-ink transition-colors group-hover:text-violet-deep">{p.title}</span>
                    <Arrow direction={external ? 'up-right' : 'right'} className="shrink-0 text-ink-3 group-hover:text-violet-deep" />
                  </span>
                  <span className="mt-1 block text-[0.9375rem] text-ink-3">{p.role}</span>
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default function ProjectPage({ slug }) {
  const Page = pages[slug]
  if (!Page) {
    return (
      <section className="container-page flex min-h-[70vh] flex-col items-start justify-center pt-32">
        <p className="eyebrow">Not found</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,6vw,4.5rem)] text-ink">That project isn’t here.</h1>
        <a href="#work" className="link-draw mt-8 text-violet-deep">
          See all projects
        </a>
      </section>
    )
  }
  return (
    <>
      <Page />
      <MoreWork current={slug} />
    </>
  )
}

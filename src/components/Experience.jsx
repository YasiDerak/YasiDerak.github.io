import { education, experience, links } from '../content/site'
import Reveal from './ui/Reveal'
import { Arrow, PlaceholderTag, SectionHeader } from './ui/Bits'

export default function Experience() {
  const [current, ...previous] = experience
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line bg-paper-2/60 py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            index="03"
            label="Experience & leadership"
            title={
              <span id="experience-title">
                Hands-on design, <em className="text-violet-deep">with a view of the whole product.</em>
              </span>
            }
          />
        </Reveal>

        {/* Current role — featured */}
        <Reveal className="mt-12 md:mt-16">
          <article className="relative overflow-hidden rounded-[2rem] border border-line bg-paper p-7 shadow-[var(--shadow-soft)] md:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,var(--color-lilac-100),transparent_70%)]"
            />
            <div className="relative grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="inline-flex items-center gap-2 rounded-full bg-lilac-100 px-3 py-1 text-xs font-medium text-violet-deep">
                  <span className="anim-pulse-dot h-1.5 w-1.5 rounded-full bg-violet" aria-hidden="true" />
                  Current role
                </p>
                <h3 className="mt-5 font-display text-[clamp(2rem,3.6vw,2.9rem)] leading-tight text-ink">{current.role}</h3>
                <p className="mt-1 text-lg text-ink-2">
                  {current.company} <span className="text-ink-3">· {current.period}</span>
                  {current.place && <span className="block text-sm text-ink-3">{current.place}</span>}
                </p>
              </div>
              <div className="md:col-span-7">
                <p className="text-lg leading-relaxed text-ink-2">{current.summary}</p>
                <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {current.focus.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[0.95rem] text-ink">
                      <span className="mt-[0.6em] h-px w-4 shrink-0 bg-violet" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#/work/aplomb" className="link-draw mt-8 inline-flex items-center gap-2 text-sm text-violet-deep">
                  See the Aplomb case study <Arrow direction="right" />
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Timeline */}
        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-4">
            <h3 className="eyebrow">Previously</h3>
            <p className="mt-4 max-w-xs text-ink-3">
              The full history lives on{' '}
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="link-draw text-ink">
                LinkedIn
              </a>
              .
            </p>
          </Reveal>
          <ol className="md:col-span-8">
            {previous.map((job, i) => (
              <Reveal
                as="li"
                key={i}
                delay={i * 80}
                className="group grid gap-2 border-t border-line-strong py-7 transition-colors sm:grid-cols-[10.5rem_1fr] sm:gap-8"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-ink-3 sm:pt-1.5">{job.period}</p>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="font-display text-2xl text-ink transition-colors duration-300 group-hover:text-violet-deep">
                      {job.role}
                    </h4>
                    {job.placeholder && <PlaceholderTag />}
                  </div>
                  <p className="text-ink-2">
                    {job.company}
                    {job.place && <span className="text-ink-3"> · {job.place}</span>}
                  </p>
                  {job.summary && <p className="mt-3 max-w-xl leading-relaxed text-ink-3">{job.summary}</p>}
                </div>
              </Reveal>
            ))}

            {education.length > 0 && (
              <Reveal as="li" className="mt-10 border-t border-line-strong pt-7">
                <h4 className="eyebrow mb-5">Education</h4>
                <ul className="space-y-4">
                  {education.map((e, i) => (
                    <li key={i} className="grid gap-1 sm:grid-cols-[10.5rem_1fr] sm:gap-8">
                      <p className="font-mono text-xs uppercase tracking-wider text-ink-3 sm:pt-1">{e.period}</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-ink">
                          {e.title} <span className="text-ink-3">· {e.school}</span>
                        </p>
                        {e.placeholder && <PlaceholderTag />}
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </ol>
        </div>
      </div>
    </section>
  )
}

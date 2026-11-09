import { about, education, experience } from '../content/site'
import BrandMark from './ui/BrandMark'

function Timeline({ items }) {
  return (
    <ol className="relative mt-6 border-l border-line-strong">
      {items.map((job) => (
        <li key={job.role + job.company} className="relative pb-9 pl-7 last:pb-0">
          <span
            aria-hidden="true"
            className={`absolute -left-[5px] top-[0.45rem] h-[9px] w-[9px] rounded-full ${
              job.current ? 'bg-violet-deep ring-4 ring-pink' : 'border border-line-strong bg-white'
            }`}
          />
          <p className="text-[0.875rem] tabular-nums text-ink-3">
            {job.period}
            {job.current && <span className="ml-2 font-semibold text-violet-deep">Current role</span>}
          </p>
          <h4 className="mt-1 text-[1.125rem] font-semibold leading-snug">{job.role}</h4>
          <p className="text-ink-2">
            {job.company}
            {job.place && <span className="text-ink-3">, {job.place}</span>}
          </p>
          {job.summary && <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{job.summary}</p>}
        </li>
      ))}
    </ol>
  )
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="band scroll-mt-16 py-20 md:py-28">
      <div className="container-page grid gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-6">
          <h2 id="about-title" className="display text-[clamp(2.25rem,4.5vw,3rem)]">
            About
          </h2>
          <p className="mt-8 text-[1.375rem] font-semibold leading-snug">{about.greeting}</p>
          <div className="mt-5 max-w-[36rem] space-y-5 text-ink-2">
            {about.paragraphs.filter(Boolean).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {about.facts?.length > 0 && (
            <dl className="mt-10 grid max-w-[36rem] grid-cols-3 gap-6 border-t border-line-strong pt-6">
              {about.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-[0.875rem] text-ink-3">{f.label}</dt>
                  <dd className="mt-1 font-semibold leading-snug">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {/* the YD logo on its shape fills the quiet space under the intro, and stays in view while the timeline scrolls */}
          <div className="mt-16 md:sticky md:top-32 md:mt-20">
            <BrandMark className="h-56 w-72 sm:h-64 sm:w-80 lg:h-72 lg:w-[22rem]" />
          </div>
        </div>

        <div id="experience" className="scroll-mt-24 md:col-span-5 md:col-start-8">
          <h3 className="font-display text-[1.75rem] font-semibold">Experience</h3>
          <Timeline items={experience} />

          {education.length > 0 && (
            <>
              <h3 className="mt-14 font-display text-[1.75rem] font-semibold">Education and certificates</h3>
              <ul className="mt-5 space-y-4">
                {education.map((e) => (
                  <li key={e.title}>
                    <p className="font-semibold leading-snug">{e.title}</p>
                    <p className="text-ink-2">
                      {e.school}
                      {e.period && <span className="tabular-nums text-ink-3"> {e.period}</span>}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

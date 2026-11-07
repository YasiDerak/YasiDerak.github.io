import { about } from '../content/site'
import { img } from '../lib/images'
import Reveal from './ui/Reveal'
import { Placeholder } from './ui/Media'

export default function About() {
  const portrait = img(about.portrait)
  return (
    <section id="about" aria-labelledby="about-title" className="py-28 md:py-40">
      <div className="container-page">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-4">
            <p className="eyebrow flex items-center gap-3">
              <span className="text-violet">02</span>
              <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
              About
            </p>
            <div className="relative mt-8 max-w-[22rem]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-lilac-50">
                {portrait ? (
                  <img
                    src={portrait}
                    alt="Portrait of Yasaman Derakhshandeh"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Placeholder label="Your portrait" path={about.portrait} />
                )}
              </div>
              <span
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[1.75rem] border border-lilac-300"
              />
            </div>
            {about.facts?.length > 0 && (
              <dl className="mt-12 max-w-[22rem] space-y-3">
                {about.facts.map((f) => (
                  <div key={f.label} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 text-sm">
                    <dt className="text-ink-3">{f.label}</dt>
                    <dd className="text-right text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </Reveal>

          <div className="md:col-span-7 md:col-start-6">
            <Reveal>
              <h2 id="about-title" className="display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.05] text-ink">
                {about.greeting.split('—')[0]}—
                <em className="text-violet-deep">{about.greeting.split('—')[1]}</em>
              </h2>
            </Reveal>
            <div className="mt-10 space-y-6">
              {about.paragraphs.filter(Boolean).map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p className="text-lg leading-relaxed text-ink-2">{p}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-16 grid gap-8 border-t border-line pt-10 sm:grid-cols-3 sm:gap-6">
              {about.principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 90}>
                  <p className="font-display text-[1.35rem] italic leading-tight text-ink">{p.title}</p>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-3">{p.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

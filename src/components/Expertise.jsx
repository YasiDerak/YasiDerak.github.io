import { expertise, tools } from '../content/site'
import Reveal from './ui/Reveal'
import { SectionHeader } from './ui/Bits'

export default function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            index="04"
            label="Skills & expertise"
            title={
              <span id="expertise-title">
                Where product thinking <em className="text-violet-deep">meets visual craft.</em>
              </span>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-3 lg:gap-10">
          {expertise.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 100}>
              <h3 className="flex items-baseline gap-3 border-b border-ink/80 pb-4">
                <span className="font-mono text-xs text-violet">0{gi + 1}</span>
                <span className="font-display text-2xl text-ink">{g.group}</span>
              </h3>
              <ul>
                {g.items.map((it) => (
                  <li
                    key={it.name}
                    className="group relative border-b border-line py-5 transition-[padding] duration-500 ease-[var(--ease-out-soft)] hover:pl-3"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 bg-violet transition-all duration-500 ease-[var(--ease-out-soft)] group-hover:h-8"
                    />
                    <p className="font-medium text-ink">{it.name}</p>
                    <p className="mt-1 text-[0.92rem] text-ink-3">{it.note}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {tools.length > 0 && (
          <Reveal className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-8">
            <span className="eyebrow">Tools</span>
            {tools.map((t) => (
              <span key={t} className="text-ink-2">
                {t}
              </span>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  )
}

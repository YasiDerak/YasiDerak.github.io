import { expertise, tools } from '../content/site'

export default function Expertise() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-16 py-16 md:py-20">
      <div className="container-page">
        <h2 id="skills-title" className="display text-[clamp(2.25rem,4.5vw,3rem)]">
          What I do
        </h2>
        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
          {expertise.map((g) => (
            <div key={g.group}>
              <h3 className="border-b-2 border-pink pb-3 font-display text-[1.375rem] font-semibold">{g.group}</h3>
              <ul className="mt-5 space-y-4">
                {g.items.map((it) => (
                  <li key={it.name}>
                    <p className="font-semibold leading-snug">{it.name}</p>
                    <p className="text-[0.9375rem] text-ink-3">{it.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {tools?.length > 0 && (
          <p className="mt-14 max-w-[48rem] text-ink-2">
            <span className="font-semibold text-ink">Tools I use: </span>
            {tools.join(', ')}.
          </p>
        )}
      </div>
    </section>
  )
}

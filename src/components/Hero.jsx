import { hero, links, profile, projects } from '../content/site'
import { img } from '../lib/images'
import Reveal from './ui/Reveal'
import { Arrow, ButtonLink } from './ui/Bits'

function Portrait({ src }) {
  return (
    <figure className="relative mx-auto w-full max-w-[24rem]">
      <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-lilac-50 shadow-[var(--shadow-lift)]">
        <img src={src} alt={`Portrait of ${profile.name}`} decoding="async" className="h-full w-full object-cover" />
      </div>
      <figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-2.5 rounded-full bg-paper/90 px-4 py-2.5 text-sm text-ink-2 backdrop-blur">
        <span className="anim-pulse-dot h-2 w-2 shrink-0 rounded-full bg-violet" aria-hidden="true" />
        {profile.role}, {profile.company}
      </figcaption>
    </figure>
  )
}

// Resting and hover positions for up to three stacked project covers (front first).
const STACK = [
  { rest: 'rotate(-2deg)', hover: 'translate(-6%, 4%) rotate(-4deg)' },
  { rest: 'translate(7%, -7%) rotate(4deg)', hover: 'translate(14%, -12%) rotate(7deg)' },
  { rest: 'translate(-6%, -10%) rotate(-7deg)', hover: 'translate(-14%, -16%) rotate(-10deg)' },
]

/** Until there's a portrait, the hero shows a small stack of real project covers. */
function WorkStack({ items }) {
  return (
    <a href="#work" className="group block" aria-label={`Selected work: ${items.map((p) => p.title).join(', ')}`}>
      <div className="relative mx-auto aspect-[5/4] w-[88%]">
        {items
          .map((p, i) => ({ p, i }))
          .reverse()
          .map(({ p, i }) => (
            <div
              key={p.title}
              className="absolute inset-0 overflow-hidden rounded-[1.5rem] border border-line bg-paper shadow-[var(--shadow-lift)] transition-transform duration-700 ease-[var(--ease-out-soft)] [transform:var(--rest)] group-hover:[transform:var(--hover)]"
              style={{ '--rest': STACK[i].rest, '--hover': STACK[i].hover }}
            >
              <img src={img(p.image)} alt="" decoding="async" className="h-full w-full object-cover" />
            </div>
          ))}
      </div>
      <p className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full border border-line bg-paper/80 py-2 pl-4 pr-2 text-sm text-ink-2 backdrop-blur transition-colors duration-300 group-hover:border-violet/40">
        <span>
          <span className="text-ink">Selected work</span> · {items.map((p) => p.title).join(', ')}
        </span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-paper transition-colors duration-300 group-hover:bg-violet-deep">
          <Arrow direction="down" className="h-3.5 w-3.5" />
        </span>
      </p>
    </a>
  )
}

export default function Hero() {
  const portrait = img(hero.portrait)
  const covers = projects.filter((p) => !p.placeholder && img(p.image)).slice(0, 3)

  return (
    <section id="top" className="relative isolate overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-24 -z-10 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,var(--color-lilac-100),transparent_68%)]"
      />

      <div className="container-page grid items-center gap-14 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-7">
          <h1 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.98rem] text-ink-2">
            <span className="font-medium text-ink">{profile.name}</span>
            <span className="hidden h-4 w-px bg-line-strong sm:block" aria-hidden="true" />
            <span>{hero.title}</span>
          </h1>

          <p className="display mt-6 max-w-[13ch] text-[clamp(2.6rem,5.6vw,4.9rem)] leading-[1.02] text-ink">
            {hero.headline[0]} <em className="text-violet-deep">{hero.headline[1]}</em>
          </p>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-2">{hero.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#work">
              View my work
              <Arrow direction="down" className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Let’s connect
            </ButtonLink>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="hidden h-[3.1rem] w-[3.1rem] items-center sm:flex justify-center rounded-full border border-line-strong text-ink-2 transition-colors duration-300 hover:border-violet hover:text-violet-deep"
            >
              <svg viewBox="0 0 24 24" className="h-[1.1rem] w-[1.1rem]" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.6 4.77 6v5.56h-4V15.8c0-1.18-.02-2.7-1.66-2.7-1.66 0-1.92 1.29-1.92 2.62v5.03h-4z" />
              </svg>
            </a>
          </div>

          <dl className="mt-12 grid gap-5 border-t border-line pt-6 sm:grid-cols-3 sm:gap-8">
            {hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="eyebrow text-[0.64rem]">{f.label}</dt>
                <dd className="mt-1.5 text-[0.95rem] leading-snug text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150} className="md:col-span-5">
          {portrait ? <Portrait src={portrait} /> : covers.length > 0 && <WorkStack items={covers} />}
        </Reveal>
      </div>
    </section>
  )
}

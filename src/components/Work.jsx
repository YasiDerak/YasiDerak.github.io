import { useRef } from 'react'
import { links, projects } from '../content/site'
import { img, publicUrl } from '../lib/images'
import { usePrefersReducedMotion } from '../lib/hooks'
import { projectHref } from '../lib/router'
import { PlaceholderTag } from './ui/Bits'

/** Each project sits on its own colour plate, taken from its brand. */
function Plate({ p, videoRef }) {
  const src = img(p.image)
  return (
    <div className="relative aspect-[5/4] overflow-hidden rounded-2xl p-5 sm:p-8" style={{ background: p.plate || 'var(--color-porcelain)' }}>
      {src ? (
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <img
            src={src}
            alt={`${p.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
          />
          {p.video && (
            <video
              ref={videoRef}
              src={publicUrl(p.video)}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-line-strong text-center text-sm text-ink-3">
          Add a cover image at
          <br />
          src/assets/images/{p.image}
        </div>
      )}
    </div>
  )
}

function Project({ p, i }) {
  const videoRef = useRef(null)
  const reduced = usePrefersReducedMotion()
  const internal = Boolean(p.slug)
  const href = internal ? projectHref(p.slug) : p.link
  const Tag = href ? 'a' : 'div'
  const tagProps = !href
    ? {}
    : internal
      ? { href, onClick: () => window.history.replaceState(null, '', '#work') }
      : { href, target: '_blank', rel: 'noreferrer' }

  const play = () => !reduced && videoRef.current?.play().catch(() => {})
  const stop = () => videoRef.current?.pause()

  // Alternate wide / narrow so the grid doesn't read as a row of identical cards.
  const wide = i % 4 === 0 || i % 4 === 3
  return (
    <li className={wide ? 'md:col-span-7' : 'md:col-span-5'}>
      <Tag {...tagProps} onMouseEnter={play} onMouseLeave={stop} onFocus={play} onBlur={stop} className="group block rounded-2xl">
        <Plate p={p} videoRef={videoRef} />
        <div className="mt-6 max-w-[36rem]">
          <h3 className="flex flex-wrap items-center gap-3 font-display text-[1.75rem] font-medium leading-tight">
            {p.title}
            {p.placeholder && <PlaceholderTag />}
          </h3>
          <p className="mt-2 text-ink-2">{p.description}</p>
          <p className="mt-3 text-[0.9375rem] text-ink-3">
            {p.role}. {p.tags.join(', ')}.
          </p>
          {href && (
            <span className="link mt-4 inline-block font-semibold text-firouzeh-deep">
              {internal ? 'Read the case study' : 'Visit the website'}
            </span>
          )}
        </div>
      </Tag>
    </li>
  )
}

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-16 py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="work-title" className="display text-[clamp(2.25rem,4.5vw,3rem)]">
            Selected work
          </h2>
          <a href={links.behance} target="_blank" rel="noreferrer" className="link font-semibold text-firouzeh-deep">
            More on Behance
          </a>
        </div>
        <ul className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-12">
          {/* Placeholder entries stay out of the live page until they're filled in. */}
          {projects.filter((p) => !p.placeholder).map((p, i) => (
            <Project key={p.slug || p.title + i} p={p} i={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

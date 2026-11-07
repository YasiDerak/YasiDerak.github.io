import { useRef } from 'react'
import { links, projects } from '../content/site'
import { img, publicUrl } from '../lib/images'
import { usePrefersReducedMotion } from '../lib/hooks'
import { projectHref } from '../lib/router'
import Media from './ui/Media'
import Reveal from './ui/Reveal'
import { Arrow, PlaceholderTag, SectionHeader } from './ui/Bits'

/** A project's cover. With a video, it plays (muted) while the card is hovered or focused. */
function Cover({ p, videoRef }) {
  if (p.video && img(p.image)) {
    return (
      <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-paper-2" style={{ aspectRatio: '4 / 3' }}>
        <img
          src={img(p.image)}
          alt={`${p.title} preview`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
        />
        <video
          ref={videoRef}
          src={publicUrl(p.video)}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
        />
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-paper/85 px-3 py-1 text-xs text-ink-2 backdrop-blur transition-opacity duration-300 group-hover:opacity-0">
          <svg viewBox="0 0 24 24" className="h-3 w-3 text-violet" aria-hidden="true">
            <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
          </svg>
          Film inside
        </span>
      </div>
    )
  }
  return (
    <Media
      src={p.image}
      alt={p.placeholder ? '' : `${p.title} preview`}
      label="Project preview"
      ratio="4 / 3"
      className="rounded-[1.5rem] border border-line"
    />
  )
}

function ProjectCard({ p, i }) {
  const videoRef = useRef(null)
  const reduced = usePrefersReducedMotion()

  const internal = Boolean(p.slug)
  const href = internal ? projectHref(p.slug) : p.link
  const Wrapper = href ? 'a' : 'div'
  const wrapperProps = !href
    ? {}
    : internal
      ? {
          href,
          // so the browser's Back button returns to the project list
          onClick: () => window.history.replaceState(null, '', '#work'),
        }
      : { href, target: '_blank', rel: 'noreferrer' }

  const play = () => {
    if (reduced || !videoRef.current) return
    videoRef.current.play().catch(() => {})
  }
  const stop = () => videoRef.current?.pause()

  return (
    <Reveal delay={(i % 3) * 100}>
      <Wrapper
        {...wrapperProps}
        onMouseEnter={play}
        onMouseLeave={stop}
        onFocus={play}
        onBlur={stop}
        className="group block rounded-[1.5rem] focus-visible:outline-offset-8"
      >
        <Cover p={p} videoRef={videoRef} />
        <div className="mt-5 flex items-start justify-between gap-5">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-[1.65rem] leading-tight text-ink transition-colors duration-300 group-hover:text-violet-deep">
                {p.title}
              </h3>
              {p.placeholder && <PlaceholderTag />}
            </div>
            <p className="mt-2 leading-relaxed text-ink-2">{p.description}</p>
            <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-3">
              <span className="text-violet">{p.role}</span>
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </p>
          </div>
          {href && (
            <span
              className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:border-violet group-hover:bg-violet group-hover:text-paper"
              aria-hidden="true"
            >
              <Arrow direction={internal ? 'right' : 'up-right'} />
            </span>
          )}
        </div>
        {internal && (
          <span className="mt-4 inline-flex text-sm font-medium text-violet-deep">
            <span className="link-draw">View case study</span>
          </span>
        )}
      </Wrapper>
    </Reveal>
  )
}

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-16 py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            index="01"
            label="Selected work"
            title={
              <span id="work-title">
                Products, brands and websites <em className="text-violet-deep">I’ve designed.</em>
              </span>
            }
            intro="Open a project for the full story."
          />
        </Reveal>
        <div className="mt-14 grid gap-x-8 gap-y-14 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug || p.title + i} p={p} i={i} />
          ))}
        </div>
        <Reveal className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
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

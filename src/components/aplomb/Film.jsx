import { useEffect, useRef, useState } from 'react'
import { aplomb } from '../../content/aplomb'
import { img, publicUrl } from '../../lib/images'
import { usePrefersReducedMotion } from '../../lib/hooks'

const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`

/**
 * The Aplomb showcase film. Starts muted when it scrolls into view
 * (unless the visitor prefers reduced motion), pauses when it leaves.
 * Chapters jump straight to each scene.
 */
export default function Film() {
  const { film } = aplomb
  const videoRef = useRef(null)
  const wrapRef = useRef(null)
  const userPaused = useRef(false)
  const reduced = usePrefersReducedMotion()
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(film.duration)

  // Autoplay in view / pause out of view
  useEffect(() => {
    const v = videoRef.current
    const el = wrapRef.current
    if (!v || !el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
          if (!reduced && !userPaused.current) v.play().catch(() => {})
        } else if (!v.paused) {
          v.pause()
        }
      },
      { threshold: [0, 0.45, 0.7] },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduced])

  // Let other parts of the page ask the film to replay
  useEffect(() => {
    const replay = () => {
      const v = videoRef.current
      if (!v) return
      userPaused.current = false
      v.currentTime = 0
      v.play().catch(() => {})
    }
    window.addEventListener('aplomb:replay', replay)
    return () => window.removeEventListener('aplomb:replay', replay)
  }, [])

  const toggle = () => {
    const v = videoRef.current
    if (v.paused) {
      userPaused.current = false
      v.play().catch(() => {})
    } else {
      userPaused.current = true
      v.pause()
    }
  }
  const seek = (t) => {
    const v = videoRef.current
    v.currentTime = t
    userPaused.current = false
    v.play().catch(() => {})
  }
  const toggleMute = () => {
    const v = videoRef.current
    v.muted = !v.muted
    setMuted(v.muted)
  }
  const onScrub = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    seek(((e.clientX - r.left) / r.width) * duration)
  }

  const activeIndex = film.chapters.reduce((acc, c, i) => (time >= c.t ? i : acc), 0)
  const progress = duration ? (time / duration) * 100 : 0

  return (
    <div ref={wrapRef} className="grid gap-6 lg:grid-cols-12 lg:gap-10">
      <figure className="min-w-0 lg:col-span-9">
        <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-[#E8EEFC] shadow-[var(--shadow-lift)]">
          <video
            ref={videoRef}
            className="block aspect-[4/3] w-full cursor-pointer object-cover"
            src={publicUrl(film.src)}
            poster={img(film.poster) || undefined}
            muted
            playsInline
            loop
            preload="none"
            onClick={toggle}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || film.duration)}
            aria-label="Aplomb showcase film: brand mark, landing page and mobile app"
          />

          {/* Big play button when paused */}
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? 'Pause film' : 'Play film'}
            className={`absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-violet-deep shadow-[var(--shadow-lift)] backdrop-blur-md transition-all duration-500 ${
              playing ? 'pointer-events-none scale-90 opacity-0' : 'scale-100 opacity-100 hover:scale-105'
            }`}
          >
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5v13a1 1 0 0 0 1.52.85l10.4-6.5a1 1 0 0 0 0-1.7L9.52 4.65A1 1 0 0 0 8 5.5z" />
            </svg>
          </button>

          {/* Control bar */}
          <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-full bg-white/75 px-3 py-2 shadow-[var(--shadow-soft)] backdrop-blur-md md:inset-x-5 md:bottom-5">
            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? 'Pause' : 'Play'}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-violet-deep transition-colors hover:bg-lilac-100"
            >
              {playing ? (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M8 5.5v13a1 1 0 0 0 1.52.85l10.4-6.5a1 1 0 0 0 0-1.7L9.52 4.65A1 1 0 0 0 8 5.5z" />
                </svg>
              )}
            </button>

            <div
              className="relative h-6 flex-1 cursor-pointer"
              onClick={onScrub}
              role="slider"
              tabIndex={0}
              aria-label="Seek"
              aria-valuemin={0}
              aria-valuemax={Math.round(duration)}
              aria-valuenow={Math.round(time)}
              aria-valuetext={fmt(time)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') seek(Math.min(duration, time + 5))
                if (e.key === 'ArrowLeft') seek(Math.max(0, time - 5))
              }}
            >
              <div className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-lilac-200" />
              <div
                className="absolute left-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-violet"
                style={{ width: `${progress}%` }}
              />
              {film.chapters.slice(1).map((c) => (
                <span
                  key={c.t}
                  aria-hidden="true"
                  className="absolute top-1/2 h-2 w-px -translate-y-1/2 bg-white"
                  style={{ left: `${(c.t / duration) * 100}%` }}
                />
              ))}
            </div>

            <span className="hidden w-[5.5rem] shrink-0 text-right font-mono text-[0.7rem] tabular-nums text-ink-3 sm:block">
              {fmt(time)} / {fmt(duration)}
            </span>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? 'Turn sound on' : 'Mute'}
              aria-pressed={!muted}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-violet-deep transition-colors hover:bg-lilac-100"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
                <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" />
                {muted ? (
                  <path d="M16 9.5l5 5M21 9.5l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                ) : (
                  <path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <figcaption className="mt-4 flex items-center justify-between text-sm text-ink-3">
          <span>Showcase film · {Math.round(film.duration)} seconds</span>
          <span className="hidden md:inline">Click a scene to jump straight to it</span>
        </figcaption>
      </figure>

      {/* Chapters */}
      <nav aria-label="Film scenes" className="min-w-0 lg:col-span-3">
        <p className="eyebrow mb-4">Scenes</p>
        <ol className="-mx-1 flex gap-2 overflow-x-auto pb-2 lg:mx-0 lg:block lg:space-y-0.5 lg:overflow-visible lg:pb-0">
          {film.chapters.map((c, i) => {
            const active = i === activeIndex && (playing || time > 0)
            return (
              <li key={c.t} className="shrink-0">
                <button
                  type="button"
                  onClick={() => seek(c.t)}
                  aria-current={active ? 'true' : undefined}
                  className={`group flex w-full items-center gap-3 rounded-full px-4 py-2 text-left text-sm transition-all duration-300 lg:rounded-xl lg:px-3 ${
                    active ? 'bg-white text-ink shadow-[var(--shadow-soft)]' : 'text-ink-2 hover:bg-white/60'
                  }`}
                >
                  <span className={`font-mono text-[0.68rem] tabular-nums ${active ? 'text-violet' : 'text-ink-3'}`}>
                    {fmt(c.t)}
                  </span>
                  <span className="whitespace-nowrap">{c.label}</span>
                  {active && (
                    <span className="ml-auto hidden items-end gap-[2px] lg:flex" aria-hidden="true">
                      {[0, 1, 2].map((b) => (
                        <span
                          key={b}
                          className={`w-[3px] rounded-full bg-violet ${playing ? 'anim-bar' : ''}`}
                          style={{ height: 10, animationDelay: `${b * 0.18}s` }}
                        />
                      ))}
                    </span>
                  )}
                </button>
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  )
}

import { img } from '../../lib/images'

/**
 * Responsive, lazy-loaded image with a designed placeholder fallback.
 * `src` is a path inside src/assets/images. If the file isn't there yet,
 * a soft placeholder shows the expected file name so it's easy to fill.
 */
export default function Media({
  src,
  alt = '',
  ratio = '4 / 3',
  className = '',
  imgClassName = '',
  label,
  eager = false,
  hover = true,
  sizes,
}) {
  const url = img(src)
  return (
    <div
      className={`group/media relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {url ? (
        <img
          src={url}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] ${
            hover ? 'group-hover/media:scale-[1.025]' : ''
          } ${imgClassName}`}
        />
      ) : (
        <Placeholder label={label || alt} path={src} />
      )}
    </div>
  )
}

export function Placeholder({ label, path }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-lilac-50 p-6 text-center"
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, transparent 0 14px, rgb(196 182 228 / 0.18) 14px 15px)',
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-lilac-300">
        <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="9" cy="10" r="1.8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 18l5-5 4 4 3-3 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
      {label && <p className="font-display text-lg italic text-violet-deep/80">{label}</p>}
      {path && <p className="font-mono text-[0.68rem] tracking-wide text-ink-3">images/{path}</p>}
    </div>
  )
}

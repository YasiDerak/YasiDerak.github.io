/** Small shared pieces of UI. */

export function SectionHeader({ index, label, title, intro, className = '' }) {
  return (
    <header className={`grid gap-6 md:grid-cols-12 md:gap-10 ${className}`}>
      <div className="md:col-span-4">
        <p className="eyebrow flex items-center gap-3">
          {index && <span className="text-violet">{index}</span>}
          <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
          <span>{label}</span>
        </p>
      </div>
      <div className="md:col-span-8">
        <h2 className="display text-[clamp(2.2rem,5vw,3.75rem)] text-ink">{title}</h2>
        {intro && <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">{intro}</p>}
      </div>
    </header>
  )
}

export function PlaceholderTag({ children = 'Placeholder' }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-dashed border-lilac-300 bg-lilac-50 px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-violet">
      {children}
    </span>
  )
}

export function Arrow({ className = '', direction = 'up-right' }) {
  const d =
    direction === 'down'
      ? 'M12 5v14M6 13l6 6 6-6'
      : direction === 'right'
        ? 'M5 12h14M13 6l6 6-6 6'
        : 'M7 17L17 7M8 7h9v9'
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`h-4 w-4 ${className}`}>
      <path d={d} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ButtonLink({ href, children, variant = 'primary', className = '', ...rest }) {
  const base =
    'group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[0.95rem] font-medium transition-all duration-300 ease-[var(--ease-out-soft)]'
  const styles =
    variant === 'primary'
      ? 'bg-ink text-paper hover:bg-violet-deep shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5'
      : 'border border-line-strong text-ink hover:border-violet hover:text-violet-deep bg-paper/60'
  return (
    <a href={href} className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </a>
  )
}

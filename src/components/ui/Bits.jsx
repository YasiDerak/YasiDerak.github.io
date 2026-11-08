/** Small shared pieces of UI. */

export function PlaceholderTag({ children = 'Placeholder' }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-dashed border-lilac-300 bg-lilac-50 px-2 py-0.5 text-[0.75rem] font-semibold text-violet-deep">
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

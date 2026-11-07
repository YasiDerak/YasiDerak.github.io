import { profile } from '../content/site'

export default function Footer() {
  return (
    <footer className="container-page flex flex-col gap-4 py-10 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="hidden md:block">Designed and built by me, with care for the details.</p>
      <a href="#top" className="group inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-violet-deep">
        Back to top
        <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" aria-hidden="true">
          <path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </footer>
  )
}

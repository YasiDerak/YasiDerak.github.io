import { profile } from '../content/site'
import logo from '../assets/brand/yd-logo.png'

export default function Footer() {
  return (
    <footer className="container-page flex flex-col gap-6 py-12 text-sm text-ink-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-center gap-5">
        <img src={logo} alt="YD Design" width="478" height="360" loading="lazy" className="h-16 w-auto md:h-20" />
        <p className="border-l border-line-strong pl-5 leading-relaxed">
          © {new Date().getFullYear()} {profile.name}
          <span className="hidden md:block">Designed and built by me, with care for the details.</span>
        </p>
      </div>
      <a href="#top" className="group inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-violet-deep">
        Back to top
        <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" aria-hidden="true">
          <path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </footer>
  )
}

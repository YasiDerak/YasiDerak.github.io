import { profile } from '../content/site'
import logoWhite from '../assets/brand/yd-logo-white.png'

export default function Footer() {
  return (
    <footer className="on-lapis bg-lapis-deep text-white/70">
      <div className="container-page flex flex-wrap items-center justify-between gap-6 py-8 text-[0.9375rem]">
        <div className="flex items-center gap-4">
          <img src={logoWhite} alt="YD Design" width="478" height="360" loading="lazy" className="h-10 w-auto" />
          <p>
            © {new Date().getFullYear()} {profile.name}. Designed and built by me.
          </p>
        </div>
        <a href="#top" className="link font-semibold text-white">
          Back to top
        </a>
      </div>
    </footer>
  )
}

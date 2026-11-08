import { profile } from '../content/site'
import logo from '../assets/brand/yd-logo.png'

export default function Footer() {
  return (
    <footer className="bg-lilac-200 text-ink-2">
      <div className="container-page flex flex-wrap items-center justify-between gap-6 py-8 text-[0.9375rem]">
        <div className="flex items-center gap-4">
          <img src={logo} alt="YD Design" width="478" height="360" loading="lazy" className="h-10 w-auto" />
          <p>
            © {new Date().getFullYear()} {profile.name}. Designed and built by me.
          </p>
        </div>
        <a href="#top" className="link font-medium text-ink">
          Back to top
        </a>
      </div>
    </footer>
  )
}

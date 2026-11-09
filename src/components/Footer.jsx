import { profile } from '../content/site'

export default function Footer() {
  return (
    <footer className="bg-lilac-200 text-ink-2">
      <div className="container-page flex flex-wrap items-center justify-between gap-6 border-t border-violet/20 py-8 text-[0.9375rem]">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed and built by me, pixel by pixel.
        </p>
        <a href="#top" className="link font-medium text-ink">
          Back to top
        </a>
      </div>
    </footer>
  )
}

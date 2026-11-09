import { useEffect, useState } from 'react'
import { links, nav, profile } from '../content/site'
import { useActiveSection, useScrolled } from '../lib/hooks'
import logoNight from '../assets/brand/yd-logo.png'

const ids = nav.map((n) => n.id).concat('contact')

export default function Nav({ home = true }) {
  const scrolled = useScrolled(40)
  const section = useActiveSection(ids, home)
  // On a project page, "Work" is where you are.
  const active = home ? section : 'work'
  const [open, setOpen] = useState(false)
  // At the top of every page the bar sits on the light violet band.
  const clear = !scrolled

  // Close the phone menu whenever the page or section changes (links, Back button).
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          clear ? 'bg-transparent' : 'border-b border-line bg-white/92 backdrop-blur-lg'
        }`}
      >
        <nav aria-label="Primary" className="container-page flex h-[4.5rem] items-center justify-between gap-6">
          <a href="#top" className="shrink-0" aria-label={`${profile.name}, home`}>
            <img src={logoNight} alt="" width="478" height="360" className="h-11 w-auto" />
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {nav.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`py-2 text-[0.95rem] font-medium underline-offset-[0.5em] transition-colors ${
                      isActive ? 'text-ink underline decoration-pink decoration-2' : 'text-ink-2 hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={links.email}
              className="hidden rounded-full bg-violet px-5 py-2.5 text-[0.95rem] font-medium text-ink transition-colors hover:bg-violet-deep hover:text-white sm:inline-flex"
            >
              Email me
            </a>
            <button
              type="button"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <span className="absolute h-px w-4 -translate-y-[3px] bg-current" />
              <span className="absolute h-px w-4 translate-y-[3px] bg-current" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[55] bg-lilac-100 text-ink transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between">
          <img src={logoNight} alt="" width="478" height="360" className="h-11 w-auto" />
          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line-strong"
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            <span className="absolute h-px w-4 rotate-45 bg-ink" />
            <span className="absolute h-px w-4 -rotate-45 bg-ink" />
          </button>
        </div>
        <ul className="container-page mt-10 space-y-2">
          {[...nav, { id: 'contact', label: 'Contact' }].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="block py-2 font-display text-[2.75rem] font-semibold leading-tight"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="container-page mt-12 text-ink-2">
          {profile.role} at {profile.company}
        </p>
      </div>
    </>
  )
}

import { useEffect, useState } from 'react'
import { links, nav, profile } from '../content/site'
import { useActiveSection, useScrolled } from '../lib/hooks'
import logoNight from '../assets/brand/yd-logo.png'
import logoWhite from '../assets/brand/yd-logo-white.png'

const ids = nav.map((n) => n.id).concat('contact')

export default function Nav({ home = true }) {
  const scrolled = useScrolled(40)
  const section = useActiveSection(ids, home)
  // On a project page, "Work" is where you are.
  const active = home ? section : 'work'
  const [open, setOpen] = useState(false)
  // Over the lapis hero the bar is transparent and the type is white.
  const dark = home && !scrolled

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
        className="sr-only z-[60] rounded-md bg-night px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          dark ? 'on-lapis bg-transparent' : 'border-b border-line bg-white/92 backdrop-blur-lg'
        }`}
      >
        <nav aria-label="Primary" className="container-page flex h-[4.5rem] items-center justify-between gap-6">
          <a href="#top" className="shrink-0" aria-label={`${profile.name}, home`}>
            <img src={dark ? logoWhite : logoNight} alt="" width="478" height="360" className="h-11 w-auto" />
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
                      dark ? 'text-white/80 hover:text-white' : 'text-ink-2 hover:text-ink'
                    } ${
                      isActive
                        ? `underline decoration-2 ${dark ? 'text-white decoration-firouzeh' : 'text-ink decoration-firouzeh-deep'}`
                        : ''
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
              className={`hidden rounded-full px-5 py-2.5 text-[0.95rem] font-semibold transition-colors sm:inline-flex ${
                dark ? 'bg-firouzeh text-night hover:bg-white' : 'bg-lapis text-white hover:bg-lapis-deep'
              }`}
            >
              Email me
            </a>
            <button
              type="button"
              className={`relative flex h-11 w-11 items-center justify-center rounded-full border md:hidden ${
                dark ? 'border-white/40 text-white' : 'border-line-strong text-ink'
              }`}
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
        className={`on-lapis fixed inset-0 z-[55] bg-lapis text-white transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between">
          <img src={logoWhite} alt="" width="478" height="360" className="h-11 w-auto" />
          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/40"
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            <span className="absolute h-px w-4 rotate-45 bg-white" />
            <span className="absolute h-px w-4 -rotate-45 bg-white" />
          </button>
        </div>
        <ul className="container-page mt-10 space-y-2">
          {[...nav, { id: 'contact', label: 'Contact' }].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="block py-2 font-display text-[2.5rem] font-medium leading-tight"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="container-page mt-12 text-white/70">
          {profile.role} at {profile.company}
        </p>
      </div>
    </>
  )
}

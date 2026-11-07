import { useEffect, useState } from 'react'
import { nav, profile } from '../content/site'
import { useActiveSection, useScrolled } from '../lib/hooks'
import logo from '../assets/brand/yd-logo.png'

const ids = nav.map((n) => n.id).concat('contact')

export default function Nav() {
  const scrolled = useScrolled()
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)

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
        className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-out-soft)] ${
          scrolled ? 'py-3' : 'py-5 md:py-7'
        }`}
      >
        <div className="container-page">
          <nav
            aria-label="Primary"
            className={`flex items-center justify-between rounded-full transition-all duration-500 ease-[var(--ease-out-soft)] ${
              scrolled
                ? 'border border-line/80 bg-paper/80 py-2 pl-5 pr-2 shadow-[var(--shadow-soft)] backdrop-blur-xl'
                : 'border border-transparent py-2 pl-0 pr-0'
            }`}
          >
            <a href="#top" className="group -my-1 flex shrink-0 items-center" aria-label={`${profile.name} — back to top`}>
              <img
                src={logo}
                alt=""
                width="478"
                height="360"
                className={`w-auto transition-all duration-500 ease-[var(--ease-out-soft)] group-hover:opacity-75 ${
                  scrolled ? 'h-10' : 'h-12 md:h-14'
                }`}
              />
            </a>

            <ul className="hidden items-center gap-1 md:flex">
              {nav.map((item) => {
                const isActive = active === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative rounded-full px-4 py-2 text-[0.92rem] transition-colors duration-300 ${
                        isActive ? 'text-ink' : 'text-ink-3 hover:text-ink'
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet transition-all duration-500 ${
                          isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden rounded-full bg-ink px-5 py-2.5 text-[0.9rem] font-medium text-paper transition-colors duration-300 hover:bg-violet-deep sm:inline-flex"
              >
                Let’s connect
              </a>
              <button
                type="button"
                className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper/80 md:hidden"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => setOpen((o) => !o)}
              >
                <span
                  className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-[3px]'}`}
                />
                <span
                  className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-[3px]'}`}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-paper/95 backdrop-blur-xl transition-opacity duration-500 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="container-page flex h-full flex-col justify-between pb-10 pt-28">
          <ul className="space-y-1">
            {[...nav, { id: 'contact', label: 'Contact' }].map((item, i) => (
              <li
                key={item.id}
                className="transition-all duration-500 ease-[var(--ease-out-soft)]"
                style={{
                  transitionDelay: open ? `${80 + i * 50}ms` : '0ms',
                  opacity: open ? 1 : 0,
                  transform: open ? 'none' : 'translateY(12px)',
                }}
              >
                <a
                  href={`#${item.id}`}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-2 font-display text-[2.6rem] leading-tight text-ink"
                >
                  <span className="font-mono text-xs text-ink-3">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-ink-3">
            {profile.role} at {profile.company}
          </p>
        </div>
      </div>
    </>
  )
}

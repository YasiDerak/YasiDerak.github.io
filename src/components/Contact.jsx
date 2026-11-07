import { useState } from 'react'
import { links, profile } from '../content/site'
import Reveal from './ui/Reveal'
import { Arrow } from './ui/Bits'

function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = links.email
    }
  }
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-paper px-4 py-2 text-sm text-ink-2 transition-all duration-300 hover:border-violet hover:text-violet-deep"
      aria-live="polite"
    >
      {copied ? (
        <>
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-violet" fill="none" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Copied to clipboard
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
            <rect x="8" y="8" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M16 8V6.5A2.5 2.5 0 0 0 13.5 4h-7A2.5 2.5 0 0 0 4 6.5v7A2.5 2.5 0 0 0 6.5 16H8" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          Copy email
        </>
      )}
    </button>
  )
}

const socials = [
  { label: 'LinkedIn', href: links.linkedin, handle: 'in/yasamanderakhshandeh' },
  { label: 'Behance', href: links.behance, handle: 'yasamanderakhshandeh' },
  { label: 'GitHub', href: links.github, handle: 'YasiDerak' },
  { label: 'Email', href: links.email, handle: profile.email },
]

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="grain relative overflow-hidden px-2 pb-2 md:px-4 md:pb-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-lilac-100 via-lilac-50 to-paper-2 py-24 md:rounded-[2.75rem] md:py-36">
        <div
          aria-hidden="true"
          className="anim-drift pointer-events-none absolute -bottom-40 -right-20 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,var(--color-lilac-200),transparent_70%)]"
        />
        <div className="container-page relative">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="text-violet">06</span>
              <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
              Contact
            </p>
            <h2 id="contact-title" className="display mt-8 max-w-5xl text-[clamp(2.8rem,8vw,7.2rem)] leading-[0.95] text-ink">
              Have a product that needs <em className="text-violet-deep">thoughtful design?</em>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
            <Reveal className="md:col-span-6">
              <p className="max-w-md text-lg leading-relaxed text-ink-2">
                I’m open to conversations about product design roles, freelance projects and collaborations — especially
                early-stage products with something real to solve. Say hello; I read everything.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={links.email}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[0.95rem] font-medium text-paper shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-deep hover:shadow-[var(--shadow-lift)]"
                >
                  Write to me
                  <Arrow className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <CopyEmail />
              </div>
            </Reveal>

            <Reveal delay={120} as="ul" className="md:col-span-5 md:col-start-8">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.label === 'Email' ? undefined : '_blank'}
                    rel={s.label === 'Email' ? undefined : 'noreferrer'}
                    className="group flex items-center justify-between gap-4 border-b border-ink/15 py-5 transition-colors duration-300 hover:border-violet"
                  >
                    <span className="font-display text-2xl text-ink transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-1.5">
                      {s.label}
                    </span>
                    <span className="flex min-w-0 items-center gap-3 text-sm text-ink-3">
                      <span className="truncate">{s.handle}</span>
                      <Arrow className="shrink-0 text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet" />
                    </span>
                  </a>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

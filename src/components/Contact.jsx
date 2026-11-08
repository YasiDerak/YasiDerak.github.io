import { useState } from 'react'
import { links, profile } from '../content/site'

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
      className="rounded-full border border-violet px-7 py-3.5 font-medium text-violet-deep transition-colors hover:bg-white"
    >
      <span aria-live="polite">{copied ? 'Email copied' : 'Copy email'}</span>
    </button>
  )
}

const elsewhere = [
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'Behance', href: links.behance },
  { label: 'GitHub', href: links.github },
]

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 bg-lilac-200 text-ink">
      <div className="container-page py-20 md:py-28">
        <h2 id="contact-title" className="display max-w-[16ch] text-[clamp(2.5rem,5.4vw,4.25rem)]">
          Have a product in mind? Let’s talk.
        </h2>
        <p className="mt-6 max-w-[34rem] text-[1.1875rem] leading-relaxed text-ink">
          I’m open to product design roles, freelance projects and collaborations. Write to me at{' '}
          <a href={links.email} className="link font-semibold text-ink">
            {profile.email}
          </a>
          .
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={links.email}
            className="rounded-full bg-violet px-7 py-3.5 font-medium text-ink transition-colors hover:bg-violet-deep hover:text-white"
          >
            Email me
          </a>
          <CopyEmail />
        </div>
        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-line-strong pt-8">
          {elsewhere.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="link font-medium text-ink">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

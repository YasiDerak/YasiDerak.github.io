import { useState } from 'react'
import { links, profile } from '../content/site'
import logo from '../assets/brand/yd-logo.png'

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
    <section id="contact" aria-labelledby="contact-title" className="band-end relative isolate scroll-mt-16 overflow-hidden text-ink">
      <div
        aria-hidden="true"
        className="morph morph-strong pointer-events-none absolute -right-10 top-10 -z-10 hidden h-96 w-[28rem] opacity-60 lg:block"
        style={{ animationDuration: '13s' }}
      />
      {/* fade the top edge (and the shape) in from the white section above */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-[5] h-40 bg-[linear-gradient(to_bottom,#ffffff_20%,transparent)] md:h-56"
      />
      {/* the YD logo sitting on the shape (the shape turns, the logo stays upright) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-10 -z-[1] hidden h-96 w-[28rem] items-center justify-center lg:flex"
      >
        <img src={logo} alt="" width="478" height="360" loading="lazy" className="w-48 xl:w-52" />
      </div>
      <div className="container-page py-20 md:py-28">
        <h2 id="contact-title" className="display max-w-[16ch] text-[clamp(2.5rem,5.4vw,4.25rem)]">
          Have a product in mind? Let’s talk.
        </h2>
        <p className="mt-6 max-w-[34rem] text-[1.1875rem] leading-relaxed text-ink">
          I’m open to product design roles, freelance projects and collaborations. Say hello at{' '}
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
        {/* phones and tablets: the same shape and logo, below the buttons so they never cover the text */}
        <div aria-hidden="true" className="relative mt-14 flex h-56 w-72 max-w-full items-center justify-center sm:ml-auto lg:hidden">
          <div className="morph morph-strong absolute inset-0 opacity-60" style={{ animationDuration: '13s' }} />
          <img src={logo} alt="" width="478" height="360" loading="lazy" className="relative w-40" />
        </div>
        <ul className="mt-10 flex flex-wrap lg:mt-14 gap-x-8 gap-y-1 border-t border-line-strong pt-6">
          {elsewhere.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="link inline-block py-2.5 font-medium text-ink">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

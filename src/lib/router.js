import { useEffect, useState } from 'react'

/**
 * A tiny hash router, so the site stays a single static page on GitHub Pages
 * (and still works when opened straight from a file).
 *
 *   #/work/<slug>   → that project's page
 *   #about, #work…  → the home page, scrolled to that section
 *
 * Any other hash (#main, in-page anchors on a project page) leaves the
 * current page as it is.
 */
export const HOME_SECTIONS = ['top', 'work', 'about', 'experience', 'expertise', 'contact']

export const projectHref = (slug) => `#/work/${slug}`

function parse(hash) {
  const m = hash.match(/^#\/work\/([\w-]+)/)
  if (m) return { page: 'project', slug: m[1] }
  const id = hash.replace(/^#\/?/, '')
  if (id === '' || HOME_SECTIONS.includes(id)) return { page: 'home', anchor: id }
  return null
}

export function useRoute() {
  const [route, setRoute] = useState(() => parse(window.location.hash) || { page: 'home', anchor: '' })
  useEffect(() => {
    const onChange = () => {
      const next = parse(window.location.hash)
      if (next) setRoute(next)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

import { useLayoutEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Expertise from './components/Expertise'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectPage, { projectTitle } from './components/ProjectPage'
import { profile } from './content/site'
import { useRoute } from './lib/router'

const baseTitle = document.title

export default function App() {
  const route = useRoute()
  const prev = useRef(null)

  // When the page itself changes, jump to the right place on the new page.
  useLayoutEffect(() => {
    const key = route.page === 'project' ? `project:${route.slug}` : 'home'
    const changed = prev.current !== null && prev.current !== key
    prev.current = key

    if (route.page === 'project') {
      document.title = `${projectTitle(route.slug)} — ${profile.name}`
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    document.title = baseTitle
    if (!changed) return
    const target = route.anchor && document.getElementById(route.anchor)
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [route])

  return (
    <>
      <Nav home={route.page === 'home'} />
      <main id="main">
        {route.page === 'project' ? (
          <ProjectPage slug={route.slug} />
        ) : (
          <>
            <Hero />
            <Work />
            <About />
            <Expertise />
          </>
        )}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

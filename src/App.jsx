import Nav from './components/Nav'
import Hero from './components/Hero'
import CaseStudy from './components/aplomb/CaseStudy'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Expertise from './components/Expertise'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <CaseStudy />
        <About />
        <Experience />
        <Work />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

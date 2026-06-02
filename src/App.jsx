import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

const PANELS = {
  home: Hero,
  about: About,
  expertise: Expertise,
  work: Work,
  contact: Contact,
}

export default function App() {
  const [active, setActive] = useState('home')

  const go = (id) => {
    setActive(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const Panel = PANELS[active]

  return (
    <div className="app-shell">
      <Navbar tabs={TABS} active={active} onChange={go} />
      <main className="tab-stage">
        <div
          className="tab-panel"
          key={active}
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
        >
          <Panel onNavigate={go} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

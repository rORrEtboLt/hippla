import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Gallery from './pages/Gallery.jsx'
import { Margins, Valley } from './Decor.jsx'

const tabs = [
  { to: '/', label: 'Home' },
  { to: '/contact', label: 'Contact' },
  { to: '/gallery', label: 'Gallery' },
]

export default function App() {
  return (
    <div className="site">
      <Margins />
      <header className="header">
        <NavLink to="/" className="brand" aria-label="Hippla home">
          <img src="/hippla-logo.png" alt="Hippla" />
        </NavLink>
        <nav className="tabs">
          {tabs.map((t) => (
            <NavLink key={t.to} to={t.to} end>
              {t.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Valley />
      <footer className="footer">
        Hippla Estate · Chikmagalur, Karnataka · Est. 1916
      </footer>
    </div>
  )
}

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="main-nav">
      <div className="container nav-inner">
        <Link href="/" className="logo">
          <img src="/images/solarstackw.png" alt="Solarstack" />
        </Link>
        <ul className="nav-links" style={menuOpen ? {
          display: 'flex',
          position: 'absolute',
          top: '72px',
          left: '0',
          right: '0',
          flexDirection: 'column',
          background: '#fff',
          padding: '24px',
          borderBottom: '1px solid #eee',
          zIndex: 199,
        } : {}}>
          <li><Link href="/photovoltaik">Photovoltaik</Link></li>
          <li><Link href="/waermepumpe">Wärmepumpe</Link></li>
          <li><Link href="/glasfaser">Glasfaser</Link></li>
          <li><Link href="/gas-strom">Gas &amp; Strom</Link></li>
          <li><Link href="/ueber-uns">Über uns</Link></li>
          <li><Link href="/kontakt">Kontakt</Link></li>
        </ul>
        <div className="nav-cta">
          <Link href="/kontakt" className="btn btn-primary">Jetzt Angebot sichern</Link>
          <button
            className="mobile-toggle"
            aria-label="Menu"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  )
}

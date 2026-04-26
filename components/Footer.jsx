import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: '16px' }}>
              <img src="/images/solarstackw.png" alt="Solarstack" style={{ height: '32px' }} />
            </div>
            <p style={{ fontSize: '14px', maxWidth: '320px' }}>
              Ihr Partner für Photovoltaik, Wärmepumpen und Glasfaser – regional, zuverlässig und transparent.
            </p>
          </div>
          <div>
            <h5>☀ Solar &amp; Energie</h5>
            <ul>
              <li><Link href="/photovoltaik">Photovoltaik</Link></li>
              <li><Link href="/photovoltaik/stromspeicher">Stromspeicher</Link></li>
              <li><Link href="/photovoltaik/wallbox">Wallbox &amp; E-Auto</Link></li>
              <li><Link href="/gas-strom">Gas &amp; Strom</Link></li>
              <li><Link href="/gas-strom/oekostrom">Ökostrom &amp; Bio-Gas</Link></li>
            </ul>
          </div>
          <div>
            <h5>🌡 Wärme &amp; Internet</h5>
            <ul>
              <li><Link href="/waermepumpe">Wärmepumpe</Link></li>
              <li><Link href="/waermepumpe/foerderung">WP-Förderung</Link></li>
              <li><Link href="/glasfaser">Glasfaser</Link></li>
              <li><Link href="/glasfaser/telekommunikation">Telekommunikation</Link></li>
            </ul>
          </div>
          <div>
            <h5>Unternehmen</h5>
            <ul>
              <li><Link href="/ueber-uns">Über uns</Link></li>
              <li><Link href="/kontakt">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h5>Rechtliches</h5>
            <ul>
              <li><Link href="/impressum">Impressum</Link></li>
              <li><Link href="/datenschutz">Datenschutz</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Solarstack GmbH. Alle Rechte vorbehalten.</span>
          <span>Made with ☀ in Deutschland</span>
        </div>
      </div>
    </footer>
  )
}

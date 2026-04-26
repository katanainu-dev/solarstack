import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Telekommunikation() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <Head>
        <title>Telekommunikation — Solarstack</title>
        <meta name="description" content="Telefon, Mobilfunk und Internet aus einer Hand. Glasfaser-Tarife, Festnetz-Flat und Mobilfunk-Bundles für Privat- und Geschäftskunden." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <style>{`
        .subhero {
          min-height: 65vh;
          background:
            linear-gradient(90deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.3) 60%, transparent 100%),
            url('https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1600') center/cover no-repeat;
        }
        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .split.rev { direction: rtl; } .split.rev > * { direction: ltr; }
        .split img { border-radius: 14px; aspect-ratio: 4/3; object-fit: cover; width: 100%; box-shadow: 0 16px 48px rgba(0,0,0,.12); }
        .tech-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 24px; }
        .tech-item { background: var(--gray-50); padding: 18px 20px; border-radius: 10px; border-left: 3px solid var(--accent); }
        .tech-item strong { display: block; margin-bottom: 4px; font-size: 15px; }
        .tech-item span { color: var(--gray-700); font-size: 14px; }
        .savings-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
        .savings-item { text-align: center; padding: 36px 20px; background: var(--gray-50); border-radius: 14px; }
        .savings-num { font-size: 42px; font-weight: 700; color: var(--dark); display: block; margin-bottom: 8px; letter-spacing: -.02em; }
        .savings-label { color: var(--gray-700); font-size: 15px; }
        @media (max-width: 960px) {
          .split, .tech-grid, .savings-row { grid-template-columns: 1fr; }
          .split.rev { direction: ltr; }
        }
      `}</style>

      <header className="hero subhero">
        <div className="container hero-content">
          <span className="eyebrow">📞 TELEKOMMUNIKATION</span>
          <h1>Internet, Festnetz<br />und Mobilfunk</h1>
          <p>Alles aus einer Hand: Glasfaser-Internet, Festnetz-Flat und Mobilfunk-Bundles zu Top-Preisen. Kombinieren Sie Tarife und sparen Sie zusätzlich.</p>
          <div className="hero-cta">
            <Link href="/kontakt" className="btn btn-primary">Tarif anfragen →</Link>
            <Link href="/glasfaser" className="btn btn-secondary">← Zurück zu Glasfaser</Link>
          </div>
          <div className="hero-trust">
            <span>Bis 1.000 Mbit/s</span>
            <span>Festnetz-Flat</span>
            <span>5G-Mobilfunk</span>
          </div>
        </div>
      </header>

      <section>
        <div className="container split">
          <img src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Smartphone und Router auf Schreibtisch" />
          <div>
            <span className="eyebrow">Komplettpaket</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '16px' }}>Ein Anbieter.<br />Eine Rechnung.</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '24px' }}>Statt Internet, Festnetz und Mobilfunk bei drei Anbietern bündeln Sie alles bei uns – einfacher, günstiger und mit einem Ansprechpartner für alles.</p>
            <ul className="feature-list">
              <li>Glasfaser-Internet bis 1.000 Mbit/s</li>
              <li>Festnetz-Flat ins gesamte deutsche Netz</li>
              <li>5G-Mobilfunk im Telekom- oder Vodafone-Netz</li>
              <li>Bis zu 5 Mobilfunkkarten zum Familientarif</li>
              <li>Premium-WLAN-Router inklusive</li>
            </ul>
            <Link href="/kontakt" className="btn btn-dark" style={{ marginTop: '8px' }}>Komplettpaket anfragen →</Link>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">3 Bausteine</span>
            <h2>Stellen Sie Ihren Tarif zusammen</h2>
          </div>
          <div className="usp-grid">
            <div className="usp-card"><div className="usp-icon">🌐</div><h3>Internet</h3><p>Glasfaser bis 1.000 Mbit/s symmetrisch. Alternativ DSL bis 250 Mbit/s und Kabel bis 1.000 Mbit/s.</p></div>
            <div className="usp-card"><div className="usp-icon">☎</div><h3>Festnetz</h3><p>Allnet-Flat ins deutsche Festnetz und alle Mobilfunk-Netze. Optional EU-Roaming-Flat.</p></div>
            <div className="usp-card"><div className="usp-icon">📱</div><h3>Mobilfunk</h3><p>5G-Tarife mit 30, 60 oder 100 GB Datenvolumen. EU-Roaming und Telefonie-Flat inklusive.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container split rev">
          <img src="https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Familie nutzt mehrere Geräte gleichzeitig" />
          <div>
            <span className="eyebrow">Tarifvarianten</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '14px' }}>Für jeden Bedarf das passende Paket</h2>
            <p style={{ color: 'var(--gray-700)' }}>Von der Single-Flat bis zum Familienpaket mit 5 Mobilfunk-Karten – wir kombinieren passend zu Ihnen.</p>
            <div className="tech-grid">
              <div className="tech-item"><strong>Basic</strong><span>100 Mbit/s + Festnetz, 25 €/Monat</span></div>
              <div className="tech-item"><strong>Standard</strong><span>500 Mbit/s + Festnetz, 35 €/Monat</span></div>
              <div className="tech-item"><strong>Premium</strong><span>1.000 Mbit/s + Festnetz, 50 €/Monat</span></div>
              <div className="tech-item"><strong>Mobil S</strong><span>30 GB 5G, 15 €/Monat</span></div>
              <div className="tech-item"><strong>Mobil M</strong><span>60 GB 5G, 25 €/Monat</span></div>
              <div className="tech-item"><strong>Mobil XL</strong><span>100 GB 5G, 35 €/Monat</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ihre Ersparnis</span>
            <h2>Bündeln und sparen</h2>
          </div>
          <div className="savings-row">
            <div className="savings-item"><span className="savings-num">~15 %</span><span className="savings-label">Bündel-Rabatt</span></div>
            <div className="savings-item" style={{ background: 'var(--accent)' }}><span className="savings-num">1 Rechn.</span><span className="savings-label">Statt drei</span></div>
            <div className="savings-item" style={{ background: 'var(--dark)', color: '#fff' }}><span className="savings-num" style={{ color: 'var(--accent)' }}>24 h</span><span className="savings-label" style={{ color: 'rgba(255,255,255,.8)' }}>Support-Erreichbarkeit</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Häufig gefragt</span>
            <h2>FAQ Telekommunikation</h2>
          </div>
          <div className="faq-list">
            {[
              { q: 'Kann ich meine Rufnummer mitnehmen?', a: 'Ja, Sie können Ihre Festnetz- und Mobilfunknummer kostenlos zu uns mitnehmen. Wir kümmern uns um die Portierung beim alten Anbieter.' },
              { q: 'Wie lange ist die Vertragslaufzeit?', a: 'Standardlaufzeit sind 24 Monate, verfügbar sind aber auch flexible Tarife mit monatlicher Kündigung gegen einen kleinen Aufpreis.' },
              { q: 'Bekomme ich einen Router gestellt?', a: 'Ja – ein moderner Wi-Fi-6-Router (FRITZ!Box 7530 AX oder vergleichbar) ist im Tarif enthalten. Optional auch Mesh-Repeater für mehr Reichweite.' },
              { q: 'Was passiert beim Umzug?', a: 'Bei Umzug innerhalb Deutschlands nehmen Sie Ihre Tarife einfach mit – ohne neue Mindestlaufzeit, sofern am neuen Ort verfügbar.' },
            ].map((item, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prefooter-cta-wrap">
        <div className="prefooter-cta">
          <div className="prefooter-inner">
            <span className="eyebrow" style={{ background: 'rgba(255,214,10,.2)', color: 'var(--accent)' }}>📞 KOSTENLOSER TARIFCHECK</span>
            <h2>Welcher Tarif passt zu Ihnen?</h2>
            <p>Wir vergleichen Ihren aktuellen Vertrag und finden das beste Komplettpaket – kostenlos und unverbindlich.</p>
            <Link href="/kontakt" className="btn btn-primary">Jetzt Angebot anfordern →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

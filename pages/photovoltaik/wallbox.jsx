import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Wallbox() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <Head>
        <title>Wallbox &amp; E-Auto — Solarstack</title>
        <meta name="description" content="Intelligente Wallboxen für Ihr E-Auto. Solarüberschuss-Laden, bis zu 22 kW, dynamisches Lastmanagement und KfW-förderfähig." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <style>{`
        .subhero {
          min-height: 65vh;
          background:
            linear-gradient(90deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.3) 60%, transparent 100%),
            url('https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=1600') center/cover no-repeat;
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
          <span className="eyebrow">🔌 WALLBOX &amp; E-AUTO</span>
          <h1>Mit Sonne tanken,<br />statt mit Geld</h1>
          <p>Intelligente Wallboxen mit PV-Überschussladen. Bis zu 22 kW Ladeleistung, dynamisches Lastmanagement und volle Kontrolle über die App.</p>
          <div className="hero-cta">
            <Link href="/kontakt" className="btn btn-primary">Wallbox anfragen →</Link>
            <Link href="/photovoltaik" className="btn btn-secondary">← Zurück zu PV</Link>
          </div>
          <div className="hero-trust">
            <span>Bis 22 kW</span>
            <span>PV-Überschussladen</span>
            <span>OCPP-fähig</span>
          </div>
        </div>
      </header>

      <section>
        <div className="container split">
          <img src="https://images.pexels.com/photos/9800006/pexels-photo-9800006.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Wallbox an moderner Hauswand" />
          <div>
            <span className="eyebrow">Smart laden</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '16px' }}>Solarstrom direkt<br />in den Akku.</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '24px' }}>Eine smarte Wallbox erkennt Ihren Solarüberschuss und lädt das E-Auto automatisch mit kostenlosem Sonnenstrom – statt teurem Netzstrom.</p>
            <ul className="feature-list">
              <li>Ladeleistung 11 oder 22 kW (1- oder 3-phasig)</li>
              <li>PV-Überschussladen vollautomatisch</li>
              <li>RFID, App-Steuerung und MID-geeichter Zähler</li>
              <li>Dynamisches Lastmanagement bei mehreren Wallboxen</li>
              <li>Wetterfest IP54, für Außen- und Garageninstallation</li>
            </ul>
            <Link href="/kontakt" className="btn btn-dark" style={{ marginTop: '8px' }}>Beratung sichern →</Link>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">3 Lademodi</span>
            <h2>Sie entscheiden, wie geladen wird</h2>
          </div>
          <div className="usp-grid">
            <div className="usp-card"><div className="usp-icon">☀</div><h3>PV-Überschuss</h3><p>Auto lädt nur mit echtem Solarüberschuss – maximaler Eigenverbrauch, null Netzbezug.</p></div>
            <div className="usp-card"><div className="usp-icon">⚡</div><h3>Schnell laden</h3><p>Volle Ladeleistung aus PV + Netz, wenn es schnell gehen muss – z.B. spontane Fahrt.</p></div>
            <div className="usp-card"><div className="usp-icon">⏱</div><h3>Zeitgesteuert</h3><p>Laden zu Niedrigtarif-Zeiten oder mit dynamischem Stromtarif (z.B. Tibber, Octopus).</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container split rev">
          <img src="https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=900" alt="E-Auto an Ladestation" />
          <div>
            <span className="eyebrow">Modelle &amp; Optionen</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '14px' }}>Premium-Wallboxen aus einer Hand</h2>
            <p style={{ color: 'var(--gray-700)' }}>Wir installieren namhafte Marken wie go-eCharger, KEBA, Wallbe und Mennekes – passend zur PV-Anlage und KfW-förderfähig.</p>
            <div className="tech-grid">
              <div className="tech-item"><strong>11 kW</strong><span>Standard, ideal für Einfamilienhaus</span></div>
              <div className="tech-item"><strong>22 kW</strong><span>Schnellladen mit Drehstromanschluss</span></div>
              <div className="tech-item"><strong>RFID</strong><span>Zugangskontrolle &amp; Abrechnung</span></div>
              <div className="tech-item"><strong>OCPP 1.6</strong><span>Offen für alle Backends</span></div>
              <div className="tech-item"><strong>MID-Zähler</strong><span>Eichrechtskonform abrechnen</span></div>
              <div className="tech-item"><strong>App-Steuerung</strong><span>Live-Status &amp; Verbrauchstatistik</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ihre Ersparnis</span>
            <h2>Tanken zum Solarstrom-Preis</h2>
            <p>Bei einem Verbrauch von 15.000 km/Jahr und einem E-Auto mit 18 kWh/100 km.</p>
          </div>
          <div className="savings-row">
            <div className="savings-item"><span className="savings-num">~800 €</span><span className="savings-label">Ersparnis pro Jahr ggü. Benzin</span></div>
            <div className="savings-item" style={{ background: 'var(--accent)' }}><span className="savings-num">~3 ct</span><span className="savings-label">pro km mit Solarstrom</span></div>
            <div className="savings-item" style={{ background: 'var(--dark)', color: '#fff' }}><span className="savings-num" style={{ color: 'var(--accent)' }}>0 g</span><span className="savings-label" style={{ color: 'rgba(255,255,255,.8)' }}>CO₂ beim Laden mit PV</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Häufig gefragt</span>
            <h2>FAQ Wallbox</h2>
          </div>
          <div className="faq-list">
            {[
              { q: 'Was kostet eine Wallbox inklusive Installation?', a: 'Eine 11-kW-Wallbox inklusive Standardinstallation kostet zwischen 1.500 € und 2.800 € – abhängig von Marke, Kabellänge und nötigen Erdarbeiten.' },
              { q: 'Brauche ich eine Genehmigung?', a: 'Wallboxen bis 11 kW müssen lediglich beim Netzbetreiber angemeldet werden. Ab 12 kW ist eine Genehmigung erforderlich – wir kümmern uns um beides.' },
              { q: 'Lohnt sich PV-Überschussladen wirklich?', a: 'Ja – Sie tanken zu reinen Erzeugungskosten von ca. 8–10 ct/kWh statt mit ca. 35 ct Netzstrom oder Benzin/Diesel-Äquivalent.' },
              { q: 'Funktioniert die Wallbox mit jedem E-Auto?', a: 'Ja, alle modernen Wallboxen mit Typ-2-Stecker sind kompatibel mit jedem in Europa verkauften E-Auto und Plug-in-Hybrid.' },
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
            <span className="eyebrow" style={{ background: 'rgba(255,214,10,.2)', color: 'var(--accent)' }}>🔌 KOSTENLOSES ANGEBOT</span>
            <h2>Bereit, mit Sonne zu tanken?</h2>
            <p>Wir installieren Ihre Wallbox passend zur PV-Anlage. Inklusive Anmeldung beim Netzbetreiber.</p>
            <Link href="/kontakt" className="btn btn-primary">Jetzt anfragen →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

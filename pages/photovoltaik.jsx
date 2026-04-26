import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Photovoltaik() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <Head>
        <title>Photovoltaik — Solarstack</title>
        <meta name="description" content="Premium-Solaranlagen von Solarstack. Bis zu 70 % weniger Stromkosten, 30 Jahre Garantie, Installation in 6 Wochen." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <style>{`
        .subhero {
          min-height: 65vh;
          background:
            linear-gradient(90deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.3) 60%, transparent 100%),
            url('/images/hero-pv.png') center 30%/cover no-repeat;
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

      {/* Hero */}
      <header className="hero subhero">
        <div className="container hero-content">
          <span className="eyebrow">☀ PHOTOVOLTAIK</span>
          <h1>Ihr eigener<br />Solarstrom</h1>
          <p>Premium-Module mit 30 Jahren Garantie, bis zu 70 % weniger Stromkosten und Installation in nur 6 Wochen. Wir planen, liefern und installieren Ihre Anlage komplett.</p>
          <div className="hero-cta">
            <Link href="/kontakt" className="btn btn-primary">Kostenloses Angebot →</Link>
            <a href="#funktionsweise" className="btn btn-secondary">▶ Wie funktioniert PV?</a>
          </div>
          <div className="hero-trust">
            <span>Premium-Module</span>
            <span>30 Jahre Garantie</span>
            <span>Bis 70 % Ersparnis</span>
          </div>
        </div>
      </header>

      {/* Benefits */}
      <section>
        <div className="container split">
          <img src="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Solarmodule auf modernem Hausdach" />
          <div>
            <span className="eyebrow">Premium-Qualität</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '16px' }}>Höchste Effizienz.<br />Längste Garantie.</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '24px' }}>Wir verbauen ausschließlich Premium Full-Black-Module mit bifazialer Technologie. Sie überzeugen mit hoher Effizienz auch bei diffusem Licht – und kommen mit bis zu 30 Jahren Leistungsgarantie.</p>
            <ul className="feature-list">
              <li>Bis zu 465 Wp Modulleistung (Aiko Neostar N-Type)</li>
              <li>Full-Black Glas-Glas-Module mit bifazialer Technologie</li>
              <li>30 Jahre Leistungsgarantie, 12 Jahre Produktgarantie</li>
              <li>Monokristalline Zellen mit bis zu 23,6 % Wirkungsgrad</li>
              <li>Brandschutzklasse A – auch für Carports geeignet</li>
            </ul>
            <Link href="/kontakt" className="btn btn-dark" style={{ marginTop: '8px' }}>Jetzt beraten lassen →</Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="funktionsweise" className="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Funktionsweise</span>
            <h2>So wird aus Sonne Strom</h2>
            <p>Der photoelektrische Effekt setzt Elektronen in den Solarzellen frei und erzeugt Gleichspannung. Ein Wechselrichter wandelt diese in nutzbaren Haushaltsstrom um.</p>
          </div>
          <div className="usp-grid">
            <div className="usp-card"><div className="usp-icon">☀</div><h3>1. Sonnenlicht einfangen</h3><p>Die Solarmodule wandeln Sonnenstrahlung durch den photoelektrischen Effekt direkt in Gleichstrom um – auch bei bewölktem Himmel.</p></div>
            <div className="usp-card"><div className="usp-icon">⚡</div><h3>2. Strom umwandeln</h3><p>Der Hybridwechselrichter konvertiert den Gleichstrom in haushaltsüblichen Wechselstrom (230 V / 50 Hz) und steuert den Heimspeicher.</p></div>
            <div className="usp-card"><div className="usp-icon">🏠</div><h3>3. Eigenverbrauch &amp; Speicher</h3><p>Eigenverbrauch geht vor: Erst das Haus, dann der Speicher. Überschuss fließt mit Einspeisevergütung (ca. 8 ct/kWh) ins Netz.</p></div>
          </div>
        </div>
      </section>

      {/* Technical details */}
      <section>
        <div className="container split rev">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80" alt="Photovoltaik-Komponenten Wechselrichter" />
          <div>
            <span className="eyebrow">Komponenten</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '14px' }}>Alles was Ihre Anlage braucht</h2>
            <p style={{ color: 'var(--gray-700)' }}>Eine vollständige PV-Anlage besteht aus perfekt aufeinander abgestimmten Komponenten. Wir planen und liefern alles aus einer Hand – schlüsselfertig.</p>
            <div className="tech-grid">
              <div className="tech-item"><strong>PV-Module</strong><span>Aiko Neostar 465W N-Type ABC</span></div>
              <div className="tech-item"><strong>Wechselrichter</strong><span>Hybrid, String- oder Mikro-WR</span></div>
              <div className="tech-item"><strong>Stromspeicher</strong><span>EcoFlow PowerOcean 5–45 kWh</span></div>
              <div className="tech-item"><strong>Montagesystem</strong><span>Für alle Dach- und Fassadentypen</span></div>
              <div className="tech-item"><strong>Energiemanager</strong><span>KI-gesteuert mit Live-App</span></div>
              <div className="tech-item"><strong>Netzanschluss</strong><span>Inkl. Anmeldung &amp; Zählertausch</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings */}
      <section className="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ihre Ersparnis</span>
            <h2>Was Sie wirklich sparen</h2>
            <p>Beispielrechnung für ein Einfamilienhaus mit 10-kWp-Anlage, 9,6-kWh-Speicher und einem Jahresverbrauch von 5.000 kWh.</p>
          </div>
          <div className="savings-row">
            <div className="savings-item"><span className="savings-num">~1.400 €</span><span className="savings-label">Ersparnis pro Jahr</span></div>
            <div className="savings-item" style={{ background: 'var(--accent)' }}><span className="savings-num">8–12 J</span><span className="savings-label">Amortisationszeit</span></div>
            <div className="savings-item" style={{ background: 'var(--dark)', color: '#fff' }}><span className="savings-num" style={{ color: 'var(--accent)' }}>~90 %</span><span className="savings-label" style={{ color: 'rgba(255,255,255,.8)' }}>Autarkiegrad mit Speicher</span></div>
          </div>
          <div className="usp-grid" style={{ marginTop: '32px' }}>
            <div className="usp-card"><div className="usp-icon">💰</div><h3>Bis zu 70 % sparen</h3><p>Eigenverbrauch statt teurem Netzstrom. Mit Speicher nutzen Sie auch abends und nachts Ihren eigenen Strom.</p></div>
            <div className="usp-card"><div className="usp-icon">📈</div><h3>Immobilienwert steigt</h3><p>Eine PV-Anlage erhöht den Marktwert Ihrer Immobilie nachweislich um mehrere tausend Euro.</p></div>
            <div className="usp-card"><div className="usp-icon">🌱</div><h3>CO₂-neutral heizen</h3><p>Jede kWh Solarstrom spart ca. 400 g CO₂. Mit 10 kWp vermeiden Sie über 4 Tonnen CO₂ pro Jahr.</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Häufig gefragt</span>
            <h2>FAQ zu Photovoltaik</h2>
          </div>
          <div className="faq-list">
            {[
              { q: 'Was kostet eine komplette Photovoltaikanlage?', a: 'Eine typische 10-kWp-Anlage mit 9,6-kWh-Speicher liegt zwischen 18.000 € und 26.000 €. Die genauen Kosten hängen von Dachform, Ausrichtung und gewünschter Speichergröße ab. Wir erstellen Ihnen ein kostenloses, unverbindliches Angebot.' },
              { q: 'Wie lange hält eine PV-Anlage?', a: 'Premium-Module (wie die Aiko Neostar) haben 30 Jahre Leistungsgarantie – die tatsächliche Lebensdauer liegt meist bei 35+ Jahren. Wechselrichter werden typischerweise nach 10–15 Jahren einmal getauscht.' },
              { q: 'Lohnt sich ein Stromspeicher?', a: 'Ja – ein Speicher erhöht Ihren Autarkiegrad von typisch 30 % auf 80–90 %. Die Amortisationszeit liegt bei ca. 10–12 Jahren. Mit steigenden Strompreisen wird der Vorteil größer.' },
              { q: 'Wie hoch ist die Einspeisevergütung?', a: 'Aktuell ca. 8,0 Cent pro kWh (Stand 2026) – garantiert für 20 Jahre ab Inbetriebnahme laut EEG. Ab gewissen Größen gelten gestaffelte Tarife, die wir bei der Planung berücksichtigen.' },
              { q: 'Brauche ich eine Baugenehmigung?', a: 'Für Aufdach-Anlagen an normalen Einfamilienhäusern in der Regel nicht. Wir klären alle behördlichen Themen (Netzanmeldung, Zählertausch, ggf. Denkmalschutz) vollständig für Sie.' },
            ].map((item, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="prefooter-cta-wrap">
        <div className="prefooter-cta">
          <div className="prefooter-inner">
            <span className="eyebrow" style={{ background: 'rgba(255,214,10,.2)', color: 'var(--accent)' }}>☀ KOSTENLOS &amp; UNVERBINDLICH</span>
            <h2>Bereit für Ihre Solaranlage?</h2>
            <p>Erhalten Sie in 2 Minuten Ihr persönliches Angebot. Unser Experte ruft Sie innerhalb von 24 Stunden zurück.</p>
            <Link href="/kontakt" className="btn btn-primary">Jetzt Angebot anfordern →</Link>
            <div className="hero-trust" style={{ marginTop: '20px' }}>
              <span>Kostenlos</span><span>Unverbindlich</span><span>In 2 Minuten ausgefüllt</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

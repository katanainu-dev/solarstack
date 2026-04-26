import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Waermepumpe() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <Head>
        <title>Wärmepumpe — Solarstack</title>
        <meta name="description" content="Moderne Wärmepumpen von Solarstack. Bis zu 70 % BAFA-Förderung, SCOP 4,6, leise SILENT plus Technologie, natürliches Kältemittel R290." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <style>{`
        .subhero {
          min-height: 65vh;
          background:
            linear-gradient(90deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,.35) 60%, transparent 100%),
            url('/images/hero-waermepumpe.png') center 40%/cover no-repeat;
        }
        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .split.rev { direction: rtl; } .split.rev > * { direction: ltr; }
        .split img { border-radius: 14px; aspect-ratio: 4/3; object-fit: cover; width: 100%; box-shadow: 0 16px 48px rgba(0,0,0,.12); }
        .badge-row { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 20px; }
        .badge { background: var(--accent); color: var(--dark); padding: 8px 14px; border-radius: 999px; font-size: 13px; font-weight: 600; }
        .cost-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .cost-card { padding: 40px 28px; border-radius: 14px; text-align: center; }
        .cost-num { font-size: 34px; font-weight: 700; margin: 10px 0 8px; }
        .foerd-list { list-style: none; }
        .foerd-list li { display: flex; align-items: baseline; gap: 14px; padding: 16px 0; border-bottom: 1px solid var(--gray-100); font-size: 16px; }
        .foerd-list li:last-child { border-bottom: none; }
        .foerd-pct { font-size: 28px; font-weight: 700; color: var(--dark); flex-shrink: 0; width: 60px; }
        @media (max-width: 960px) { .split, .cost-grid { grid-template-columns: 1fr; } .split.rev { direction: ltr; } }
      `}</style>

      {/* Hero */}
      <header className="hero subhero">
        <div className="container hero-content">
          <span className="eyebrow">🌡 WÄRMEPUMPE</span>
          <h1>Heizen ohne<br />Öl und Gas</h1>
          <p>Bis zu 70 % staatliche Förderung, 4-mal effizienter als eine Gasheizung und flüsterleise. Wir übernehmen Planung, Förderantrag und Installation – komplett.</p>
          <div className="hero-cta">
            <Link href="/kontakt" className="btn btn-primary">Förderung prüfen →</Link>
            <a href="#funktionsweise" className="btn btn-secondary">▶ Wie funktioniert das?</a>
          </div>
          <div className="hero-trust">
            <span>Bis zu 70 % Förderung</span>
            <span>4x effizienter als Gas</span>
            <span>Kältemittel R290</span>
          </div>
        </div>
      </header>

      {/* Key Benefits */}
      <section>
        <div className="container split">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80" alt="Moderne Wärmepumpe Bosch Compress Außeneinheit" />
          <div>
            <span className="eyebrow">Umweltfreundlich heizen</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '16px' }}>Die Heizung der Zukunft</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '24px' }}>Eine Wärmepumpe nutzt die Energie aus der Umgebungsluft. Aus 1 kWh Strom werden bis zu 4,6 kWh Wärme – das macht sie mehrfach effizienter als jede Gasheizung. Kombiniert mit Ihrer Solaranlage heizen Sie nahezu kostenlos.</p>
            <ul className="feature-list">
              <li>Bis zu 70 % BAFA/KfW-Förderung – wir übernehmen den Antrag</li>
              <li>Flüsterleiser Betrieb durch SILENT plus Technologie (35 dB)</li>
              <li>Natürliches Kältemittel R290 (Propan) – zukunftssicher</li>
              <li>Zuverlässig auch bei −20 °C Außentemperatur</li>
              <li>Edles Design, auch für kleine Grundstücke geeignet</li>
            </ul>
            <div className="badge-row">
              <span className="badge">✓ Bosch Compress</span>
              <span className="badge">✓ Viessmann Vitocal</span>
              <span className="badge">✓ Buderus Logatherm</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="funktionsweise" className="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Funktionsweise</span>
            <h2>So heizt eine Wärmepumpe</h2>
            <p>Wie ein Kühlschrank – nur umgekehrt: Wärme wird der Umgebungsluft entzogen und auf ein höheres Niveau gebracht, um Ihr Haus zu heizen.</p>
          </div>
          <div className="usp-grid">
            <div className="usp-card"><div className="usp-icon">🌡</div><h3>1. Wärme aufnehmen</h3><p>Das Kältemittel R290 verdampft bei sehr niedriger Temperatur und nimmt dabei Umgebungswärme aus der Luft auf – auch bei Frost.</p></div>
            <div className="usp-card"><div className="usp-icon">⚙</div><h3>2. Temperatur erhöhen</h3><p>Der elektrische Kompressor verdichtet das Kältemittel. Dabei steigt die Temperatur stark an – auf Heiztemperatur-Niveau.</p></div>
            <div className="usp-card"><div className="usp-icon">🏠</div><h3>3. Haus heizen</h3><p>Die Wärme wird über einen Wärmetauscher an das Heizsystem abgegeben – ideal für Fußbodenheizung und moderne Heizkörper.</p></div>
          </div>
        </div>
      </section>

      {/* Förderung */}
      <section>
        <div className="container split rev">
          <img src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=900&q=80" alt="Förderung Wärmepumpe BAFA KfW Dokumente" />
          <div>
            <span className="eyebrow">💰 Förderung 2026</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '16px' }}>Bis zu 70 %<br />staatliche Förderung</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '24px' }}>Der Austausch einer alten Öl- oder Gasheizung wird massiv gefördert. Wir kümmern uns um den gesamten Antragsprozess bei BAFA und KfW – Sie bekommen die Förderung direkt ausgezahlt.</p>
            <ul className="foerd-list">
              <li><span className="foerd-pct">30 %</span><span>Grundförderung für alle Eigenheimbesitzer</span></li>
              <li><span className="foerd-pct">+20 %</span><span>Klimageschwindigkeitsbonus (frühzeitiger Heizungstausch)</span></li>
              <li><span className="foerd-pct">+30 %</span><span>Einkommensbonus (bis 40.000 € Haushaltseinkommen)</span></li>
              <li><span className="foerd-pct">+5 %</span><span>Effizienzbonus für natürliche Kältemittel (R290)</span></li>
            </ul>
            <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--gray-500)' }}>Maximale Förderung bis zu 21.000 € pro Wohneinheit. Fördervoraussetzungen können sich ändern.</p>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Kostenvergleich</span>
            <h2>Was spart eine Wärmepumpe wirklich?</h2>
            <p>Beispielrechnung für ein Einfamilienhaus mit 20.000 kWh Jahresheizbedarf und Wärmepumpentarif.</p>
          </div>
          <div className="cost-grid">
            <div className="cost-card" style={{ background: 'var(--gray-50)' }}>
              <div className="usp-icon">⛽</div>
              <h3>Gasheizung</h3>
              <p className="cost-num">~2.400 €/J.</p>
              <p style={{ color: 'var(--gray-700)', fontSize: '14px' }}>Gaspreis 12 Ct/kWh, Wirkungsgrad 95 %</p>
            </div>
            <div className="cost-card" style={{ background: 'var(--accent)' }}>
              <div className="usp-icon" style={{ background: 'var(--dark)', color: 'var(--accent)' }}>🌬</div>
              <h3>Wärmepumpe</h3>
              <p className="cost-num">~1.250 €/J.</p>
              <p style={{ color: 'rgba(0,0,0,.7)', fontSize: '14px' }}>Wärmepumpentarif, JAZ 4,0 bei 25 Ct/kWh</p>
            </div>
            <div className="cost-card" style={{ background: 'var(--dark)', color: '#fff' }}>
              <div className="usp-icon">🌞</div>
              <h3>Wärmepumpe + PV</h3>
              <p className="cost-num" style={{ color: 'var(--accent)' }}>~400 €/J.</p>
              <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '14px' }}>Großteil des Stroms vom eigenen Dach</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Häufig gefragt</span>
            <h2>FAQ zur Wärmepumpe</h2>
          </div>
          <div className="faq-list">
            {[
              { q: 'Funktioniert eine Wärmepumpe auch im Altbau?', a: 'Ja. Moderne Luft-Wasser-Wärmepumpen arbeiten auch in Altbauten effizient – besonders nach einer energetischen Sanierung oder mit Flächenheizung. Wir prüfen Ihr Haus im Rahmen der kostenlosen Beratung.' },
              { q: 'Wie laut ist eine Wärmepumpe?', a: 'Moderne Geräte der Bosch Compress 5800i-Serie erreichen nur ca. 35–45 dB in 3 m Abstand – leiser als ein normales Gespräch. Dank SILENT plus Technologie sind unsere Empfehlungen besonders leise.' },
              { q: 'Was kostet eine Wärmepumpe inkl. Installation?', a: 'Eine typische Luft-Wasser-Wärmepumpe kostet 20.000–35.000 € (inkl. Installation und Anbindung). Nach Förderung (bis 70 %) bleibt oft nur 6.000–12.000 € Eigenanteil.' },
              { q: 'Wie lange dauert die Installation?', a: 'Die Installation einer Luft-Wasser-Wärmepumpe dauert 2–4 Tage. Ab Beauftragung bis Inbetriebnahme vergehen im Schnitt 6–8 Wochen, inkl. Förderantrag und Behördenkontakt.' },
              { q: 'Was ist die Jahresarbeitszahl (JAZ)?', a: 'Die JAZ gibt an, wie viele kWh Wärme aus 1 kWh Strom erzeugt werden. Gute Anlagen erreichen JAZ 4,0–4,6 – also das Mehrfache gegenüber Direktheizung und deutlich mehr als Gas.' },
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
            <span className="eyebrow" style={{ background: 'rgba(255,214,10,.2)', color: 'var(--accent)' }}>💰 BIS ZU 70 % FÖRDERUNG</span>
            <h2>Unabhängig von Öl und Gas</h2>
            <p>Wir prüfen kostenlos, ob und wie viel Förderung Sie für Ihren Heizungstausch erhalten – und kümmern uns um alles.</p>
            <Link href="/kontakt" className="btn btn-primary">Förderung berechnen →</Link>
            <div className="hero-trust" style={{ marginTop: '20px' }}>
              <span>Kostenlos</span><span>Unverbindlich</span><span>Inkl. Förderantrag</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

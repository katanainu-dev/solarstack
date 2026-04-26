import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Oekostrom() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <Head>
        <title>Ökostrom &amp; Bio-Gas — Solarstack</title>
        <meta name="description" content="100 % zertifizierter Ökostrom und Bio-Gas-Tarife. Klimaneutral heizen und leben – ohne Aufpreis und mit Preisgarantie." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <style>{`
        .subhero {
          min-height: 65vh;
          background:
            linear-gradient(90deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.3) 60%, transparent 100%),
            url('https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1600') center/cover no-repeat;
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
          <span className="eyebrow">🌱 ÖKOSTROM &amp; BIO-GAS</span>
          <h1>100 % grün.<br />Ohne Aufpreis.</h1>
          <p>Zertifizierter Ökostrom aus Wasser, Wind und Sonne sowie Bio-Gas aus Reststoffen. Klimaneutral leben – ohne mehr zu zahlen als für konventionelle Tarife.</p>
          <div className="hero-cta">
            <Link href="/kontakt" className="btn btn-primary">Tarif anfragen →</Link>
            <Link href="/gas-strom" className="btn btn-secondary">← Zurück zu Gas &amp; Strom</Link>
          </div>
          <div className="hero-trust">
            <span>TÜV-zertifiziert</span>
            <span>Preisgarantie</span>
            <span>Monatlich kündbar</span>
          </div>
        </div>
      </header>

      <section>
        <div className="container split">
          <img src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Windrad und Solaranlage in der Natur" />
          <div>
            <span className="eyebrow">Echter Ökostrom</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '16px' }}>Strom aus<br />deutscher Erzeugung.</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '24px' }}>Unser Ökostrom stammt zu 100 % aus erneuerbaren Energien – belegt durch Herkunftsnachweise und unabhängige TÜV-Zertifizierung.</p>
            <ul className="feature-list">
              <li>100 % Strom aus Wasser-, Wind- und Solarkraft</li>
              <li>TÜV Süd CMS Standard 70-Zertifizierung</li>
              <li>Investition in neue Erzeugungsanlagen</li>
              <li>Preisgarantie für 12 oder 24 Monate</li>
              <li>Monatlich kündbar, keine Mindestlaufzeit-Falle</li>
            </ul>
            <Link href="/kontakt" className="btn btn-dark" style={{ marginTop: '8px' }}>Ökotarif sichern →</Link>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">3 Tarifoptionen</span>
            <h2>Ihr grüner Tarif – flexibel</h2>
          </div>
          <div className="usp-grid">
            <div className="usp-card"><div className="usp-icon">💡</div><h3>Öko Basis</h3><p>Standard-Ökostrom mit Preisgarantie 12 Monate, monatlich kündbar – ideal zum Einstieg.</p></div>
            <div className="usp-card"><div className="usp-icon">⚡</div><h3>Öko Plus</h3><p>Mit Neuanlagenförderung – 0,5 ct/kWh fließen direkt in den Bau neuer Wind- und Solaranlagen.</p></div>
            <div className="usp-card"><div className="usp-icon">🏆</div><h3>Öko Premium</h3><p>100 % regional aus Bayern, Niedersachsen oder NRW – kennzeichnungspflichtig nach Region.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container split rev">
          <img src="https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Bio-Gas Anlage" />
          <div>
            <span className="eyebrow">Bio-Gas</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '14px' }}>Heizen mit Reststoffen statt Erdgas</h2>
            <p style={{ color: 'var(--gray-700)' }}>Bio-Gas wird aus Bioabfällen, Gülle und Pflanzenresten gewonnen – CO₂-neutral und ohne neue fossile Quellen anzuzapfen.</p>
            <div className="tech-grid">
              <div className="tech-item"><strong>10 % Bio-Gas</strong><span>Einstiegstarif, leicht über Erdgaspreis</span></div>
              <div className="tech-item"><strong>20 % Bio-Gas</strong><span>Empfohlene Mischung</span></div>
              <div className="tech-item"><strong>50 % Bio-Gas</strong><span>Hoher Bio-Anteil für Klimabewusste</span></div>
              <div className="tech-item"><strong>100 % Bio-Gas</strong><span>Vollständig CO₂-neutral</span></div>
              <div className="tech-item"><strong>Herkunft</strong><span>Aus deutscher &amp; europäischer Produktion</span></div>
              <div className="tech-item"><strong>Zertifikat</strong><span>TÜV oder Grüner-Strom-Label</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ihr Beitrag</span>
            <h2>Was Sie bewegen können</h2>
            <p>Beispiel: 4-Personen-Haushalt mit 4.000 kWh Strom und 18.000 kWh Gas pro Jahr.</p>
          </div>
          <div className="savings-row">
            <div className="savings-item"><span className="savings-num">~1,8 t</span><span className="savings-label">CO₂-Ersparnis Strom/Jahr</span></div>
            <div className="savings-item" style={{ background: 'var(--accent)' }}><span className="savings-num">~3,6 t</span><span className="savings-label">CO₂-Ersparnis Gas/Jahr</span></div>
            <div className="savings-item" style={{ background: 'var(--dark)', color: '#fff' }}><span className="savings-num" style={{ color: 'var(--accent)' }}>0 €</span><span className="savings-label" style={{ color: 'rgba(255,255,255,.8)' }}>Aufpreis ggü. konventionell</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Häufig gefragt</span>
            <h2>FAQ Ökostrom &amp; Bio-Gas</h2>
          </div>
          <div className="faq-list">
            {[
              { q: 'Was unterscheidet echten Ökostrom von "Greenwashing"?', a: 'Echter Ökostrom investiert nachweislich in den Bau neuer erneuerbarer Anlagen und ist mit Labeln wie TÜV Süd CMS 70, Grüner-Strom-Label oder ok-power zertifiziert. Wir bieten ausschließlich solche Tarife.' },
              { q: 'Ist Ökostrom teurer?', a: 'Nein, in der Regel nicht. Viele unserer Ökostromtarife liegen sogar unter dem Grundversorgertarif. Sie sparen Geld UND tun etwas für die Umwelt.' },
              { q: 'Kommt der Strom wirklich aus erneuerbaren Quellen?', a: 'Physikalisch fließt aus jeder Steckdose der gleiche Strom-Mix. Aber: Mit jedem Ökostromvertrag wird die exakte Menge erneuerbar erzeugter Strom ins Netz eingespeist – über Herkunftsnachweise garantiert.' },
              { q: 'Was ist Bio-Gas genau?', a: 'Bio-Gas wird aus Reststoffen wie Gülle, Bioabfällen und Energiepflanzen in Biogas-Anlagen produziert. Es wird auf Erdgasqualität aufbereitet und ins Gasnetz eingespeist – chemisch identisch zu Erdgas, aber CO₂-neutral.' },
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
            <span className="eyebrow" style={{ background: 'rgba(255,214,10,.2)', color: 'var(--accent)' }}>🌱 100 % GRÜN</span>
            <h2>Wechseln Sie jetzt auf Grün</h2>
            <p>Wechsel in 2 Minuten, ohne Unterbrechung der Versorgung. Wir kündigen Ihren Altvertrag automatisch.</p>
            <Link href="/kontakt" className="btn btn-primary">Jetzt wechseln →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

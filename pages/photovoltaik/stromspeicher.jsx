import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Stromspeicher() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <Head>
        <title>Stromspeicher — Solarstack</title>
        <meta name="description" content="Hochwertige Stromspeicher für Ihre Photovoltaikanlage. Bis zu 90 % Autarkie, 10 Jahre Garantie, modular erweiterbar." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <style>{`
        .subhero {
          min-height: 65vh;
          background:
            linear-gradient(90deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.3) 60%, transparent 100%),
            url('https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1600') center/cover no-repeat;
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
          <span className="eyebrow">🔋 STROMSPEICHER</span>
          <h1>Solarstrom rund<br />um die Uhr nutzen</h1>
          <p>Ein moderner Heimspeicher erhöht Ihren Autarkiegrad von ca. 30 % auf bis zu 90 %. Modular erweiterbar von 5 bis 45 kWh – passend für jeden Haushalt.</p>
          <div className="hero-cta">
            <Link href="/kontakt" className="btn btn-primary">Speicher anfragen →</Link>
            <Link href="/photovoltaik" className="btn btn-secondary">← Zurück zu PV</Link>
          </div>
          <div className="hero-trust">
            <span>Bis 90 % Autarkie</span>
            <span>10 Jahre Garantie</span>
            <span>Modular erweiterbar</span>
          </div>
        </div>
      </header>

      <section>
        <div className="container split">
          <img src="https://images.pexels.com/photos/9875395/pexels-photo-9875395.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Heimspeicher mit Wechselrichter" />
          <div>
            <span className="eyebrow">Premium-Speichertechnik</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '16px' }}>Lithium-Eisenphosphat.<br />Sicher und langlebig.</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '24px' }}>Wir setzen auf LFP-Speicher (Lithium-Eisenphosphat) der neuesten Generation – sicherer, langlebiger und ressourcenschonender als klassische NMC-Akkus.</p>
            <ul className="feature-list">
              <li>EcoFlow PowerOcean von 5 bis 45 kWh modular skalierbar</li>
              <li>Über 6.000 Ladezyklen bei 80 % Restkapazität</li>
              <li>10 Jahre Vollgarantie auf Speicher und Elektronik</li>
              <li>Notstromfunktion bei Stromausfall (USV-fähig)</li>
              <li>Smart-Home-Integration via App und KI-Energiemanager</li>
            </ul>
            <Link href="/kontakt" className="btn btn-dark" style={{ marginTop: '8px' }}>Beratungstermin sichern →</Link>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">So funktioniert's</span>
            <h2>Vom Sonnenstrahl in die Steckdose</h2>
            <p>Tagsüber laden, abends nutzen – Ihr Speicher arbeitet vollautomatisch im Hintergrund.</p>
          </div>
          <div className="usp-grid">
            <div className="usp-card"><div className="usp-icon">☀</div><h3>1. Tagsüber laden</h3><p>Überschüssiger Solarstrom, der nicht direkt verbraucht wird, fließt in den Speicher statt für wenige Cent ins Netz.</p></div>
            <div className="usp-card"><div className="usp-icon">🌙</div><h3>2. Abends entladen</h3><p>Sobald die Sonne untergeht oder der Verbrauch steigt, liefert der Speicher Ihren eigenen Solarstrom an alle Verbraucher.</p></div>
            <div className="usp-card"><div className="usp-icon">📱</div><h3>3. Live im Blick</h3><p>Per App sehen Sie Erzeugung, Verbrauch, Speicherstand und Einspeisung in Echtzeit – inklusive Prognosen.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container split rev">
          <img src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Smart-Home-Energiemanagement" />
          <div>
            <span className="eyebrow">Speichergrößen</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '14px' }}>Welche Größe ist die richtige?</h2>
            <p style={{ color: 'var(--gray-700)' }}>Faustregel: 1 kWh Speicher pro 1.000 kWh Jahresverbrauch. Wir kalkulieren individuell – inklusive Wallbox- und Wärmepumpen-Bedarf.</p>
            <div className="tech-grid">
              <div className="tech-item"><strong>5 kWh</strong><span>Single &amp; Paare bis 3.000 kWh/a</span></div>
              <div className="tech-item"><strong>10 kWh</strong><span>Familie 3–4 Pers., 4.500 kWh/a</span></div>
              <div className="tech-item"><strong>15 kWh</strong><span>Mit Wallbox oder Wärmepumpe</span></div>
              <div className="tech-item"><strong>20+ kWh</strong><span>Großhaushalt &amp; Mehrfamilienhaus</span></div>
              <div className="tech-item"><strong>30 kWh</strong><span>Gewerbe und KMU</span></div>
              <div className="tech-item"><strong>45 kWh</strong><span>Maximalausbau, modular</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ihre Vorteile</span>
            <h2>Warum sich ein Speicher lohnt</h2>
          </div>
          <div className="savings-row">
            <div className="savings-item"><span className="savings-num">~90 %</span><span className="savings-label">Autarkiegrad</span></div>
            <div className="savings-item" style={{ background: 'var(--accent)' }}><span className="savings-num">10 J</span><span className="savings-label">Vollgarantie</span></div>
            <div className="savings-item" style={{ background: 'var(--dark)', color: '#fff' }}><span className="savings-num" style={{ color: 'var(--accent)' }}>6.000+</span><span className="savings-label" style={{ color: 'rgba(255,255,255,.8)' }}>Ladezyklen</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Häufig gefragt</span>
            <h2>FAQ Stromspeicher</h2>
          </div>
          <div className="faq-list">
            {[
              { q: 'Wie lange hält ein moderner LFP-Speicher?', a: 'Hochwertige LFP-Speicher schaffen 6.000 bis 10.000 Ladezyklen bei 80 % Restkapazität. Das entspricht 15–20 Jahren bei einem typischen Zyklus pro Tag.' },
              { q: 'Was kostet ein Speicher?', a: 'Ein 10-kWh-LFP-Speicher inklusive Hybrid-Wechselrichter und Installation kostet zwischen 7.000 € und 11.000 €, je nach Hersteller und Notstromfunktion.' },
              { q: 'Funktioniert der Speicher als Notstromversorgung?', a: 'Ja – mit Notstromfunktion versorgt der Speicher Ihr Haus auch bei einem Stromausfall weiter. Eine echte Inselfunktion (USV) ist optional verfügbar.' },
              { q: 'Kann ich den Speicher später erweitern?', a: 'Bei modularen Systemen wie EcoFlow PowerOcean ja – Sie starten mit 5 kWh und erweitern später jederzeit auf bis zu 45 kWh.' },
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
            <span className="eyebrow" style={{ background: 'rgba(255,214,10,.2)', color: 'var(--accent)' }}>🔋 KOSTENLOSE BERATUNG</span>
            <h2>Welcher Speicher passt zu Ihnen?</h2>
            <p>Wir berechnen die optimale Speichergröße für Ihren Verbrauch – kostenlos und unverbindlich.</p>
            <Link href="/kontakt" className="btn btn-primary">Jetzt anfragen →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

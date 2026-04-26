import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const INTEREST_ITEMS = [
  { ico: '☀️', label: 'Photovoltaik' },
  { ico: '🌡️', label: 'Wärmepumpe' },
  { ico: '📦', label: 'Komplettpaket' },
  { ico: '🌐', label: 'Glasfaser' },
  { ico: '🔥', label: 'Gas & Strom' },
  { ico: '📡', label: 'Telekommunikation' },
]

export default function Kontakt() {
  const [selected, setSelected] = useState(['Photovoltaik'])
  const [submitted, setSubmitted] = useState(false)

  function toggleSelection(label) {
    setSelected(prev =>
      prev.includes(label) ? prev.filter(x => x !== label) : [...prev, label]
    )
  }

  return (
    <>
      <Head>
        <title>Kontakt — Solarstack</title>
        <meta name="description" content="Kostenloses Angebot für Solaranlage und Wärmepumpe. In 2 Minuten ausgefüllt, Rückmeldung in 24 Stunden." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <style>{`
        .subhero {
          min-height: 48vh;
          background:
            linear-gradient(90deg, rgba(0,0,0,.80) 0%, rgba(0,0,0,.45) 60%, transparent 100%),
            url('/images/haus-winter.png') center 40%/cover no-repeat;
        }
        .contact-strip { background: #fff; border-bottom: 1px solid var(--gray-100); padding: 0; }
        .contact-strip-inner { display: flex; align-items: stretch; justify-content: center; flex-wrap: wrap; max-width: 860px; margin: 0 auto; padding: 0 24px; }
        .cs-item { display: flex; align-items: center; gap: 10px; padding: 18px 28px; font-size: 14px; color: var(--gray-700); border-right: 1px solid var(--gray-100); text-decoration: none; transition: background .15s; }
        .cs-item:last-child { border-right: none; }
        .cs-item:hover { background: var(--gray-50); }
        .cs-icon { font-size: 20px; }
        .cs-label { font-size: 11px; font-weight: 600; letter-spacing: .5px; color: var(--gray-500); text-transform: uppercase; display: block; margin-bottom: 2px; }
        .cs-value { font-weight: 600; color: var(--dark); font-size: 14px; }
        .form-section { padding: 64px 0 80px; }
        .form-wrap { display: grid; grid-template-columns: 1fr 500px; gap: 56px; max-width: 1120px; margin: 0 auto; align-items: start; }
        .form-left h2 { font-size: 36px; font-weight: 700; letter-spacing: -.02em; margin-bottom: 12px; }
        .form-left p { color: var(--gray-700); font-size: 16px; margin-bottom: 28px; }
        .trust-list { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 32px; }
        .trust-list li { display: flex; align-items: center; gap: 10px; font-size: 15px; }
        .trust-list li::before { content: "✓"; width: 22px; height: 22px; border-radius: 50%; background: var(--accent); display: grid; place-items: center; font-weight: 700; font-size: 12px; flex-shrink: 0; }
        .interest-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-bottom: 20px; }
        .int-btn { background: #fff; border: 1.5px solid var(--gray-300); border-radius: 10px; padding: 11px 14px; cursor: pointer; transition: all .15s; display: flex; align-items: center; gap: 8px; font-family: inherit; font-size: 13px; font-weight: 600; color: var(--dark); text-align: left; white-space: nowrap; }
        .int-btn .int-ico { font-size: 18px; }
        .int-btn:hover, .int-btn.sel { border-color: var(--accent); background: #fffbea; }
        .form-card { background: var(--gray-50); border-radius: 14px; padding: 36px 32px; box-shadow: var(--shadow); overflow: hidden; min-width: 0; }
        .form-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 6px; }
        .form-card > p { color: var(--gray-500); font-size: 14px; margin-bottom: 20px; }
        @media (max-width: 860px) {
          .form-wrap { grid-template-columns: 1fr; }
          .contact-strip-inner { flex-direction: column; }
          .cs-item { border-right: none; border-bottom: 1px solid var(--gray-100); padding: 14px 0; }
          .cs-item:last-child { border-bottom: none; }
        }
        @media (max-width: 560px) {
          .form-card { padding: 24px 18px; }
          .interest-grid { grid-template-columns: 1fr 1fr; }
          .int-btn { font-size: 12px; padding: 9px 10px; white-space: normal; }
        }
      `}</style>

      {/* Hero */}
      <header className="hero subhero">
        <div className="container hero-content">
          <span className="eyebrow" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', borderColor: 'rgba(255,255,255,.35)' }}>💬 KOSTENLOSES ANGEBOT</span>
          <h1>Jetzt Angebot sichern</h1>
          <p>Kostenlos und unverbindlich. Wir melden uns innerhalb von 24 Stunden mit einem maßgeschneiderten Angebot.</p>
          <div className="hero-trust">
            <span>100 % Kostenlos</span>
            <span>Unverbindlich</span>
            <span>In 2 Minuten</span>
          </div>
        </div>
      </header>

      {/* Contact strip */}
      <div className="contact-strip">
        <div className="contact-strip-inner">
          <a href="tel:+4915141241591" className="cs-item">
            <span className="cs-icon">📞</span>
            <div>
              <span className="cs-label">Telefon</span>
              <span className="cs-value" style={{ display: 'block' }}>+49 151 41241591</span>
              <span className="cs-value" style={{ display: 'block', fontSize: '12px', fontWeight: '500', color: 'var(--gray-500)' }}>+49 151 44945764</span>
            </div>
          </a>
          <a href="mailto:info@solarstack.de" className="cs-item">
            <span className="cs-icon">✉️</span>
            <div><span className="cs-label">E-Mail</span><span className="cs-value">info@solarstack.de</span></div>
          </a>
          <div className="cs-item">
            <span className="cs-icon">📍</span>
            <div><span className="cs-label">Adresse</span><span className="cs-value">Am Germaniahafen 3, 24143 Kiel</span></div>
          </div>
          <div className="cs-item">
            <span className="cs-icon">🕐</span>
            <div><span className="cs-label">Erreichbar</span><span className="cs-value">Mo–Fr 8:00–18:00 Uhr</span></div>
          </div>
        </div>
      </div>

      {/* Main form section */}
      <section className="form-section" id="formular">
        <div className="container">
          <div className="form-wrap">
            <div className="form-left">
              <span className="eyebrow" style={{ background: 'rgba(10,10,10,.06)', color: 'var(--dark)' }}>Kostenlos &amp; Unverbindlich</span>
              <h2 style={{ marginTop: '16px' }}>Ihr persönliches Energieangebot</h2>
              <p>Erzählen Sie uns von Ihrem Haus – wir planen Ihre individuelle Energielösung und berechnen Ihre Ersparnis.</p>
              <ul className="trust-list">
                <li>Angebot in 24 Stunden in Ihrem Postfach</li>
                <li>Kein Verkaufsdruck – ehrliche Beratung</li>
                <li>Bis zu 70 % staatliche Förderung inklusive</li>
                <li>Festpreisgarantie ohne versteckte Kosten</li>
              </ul>
            </div>

            <div>
              <div className="form-card">
                <h3>Angebot anfordern</h3>
                <p>In 2 Minuten ausgefüllt</p>

                <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)', display: 'block', marginBottom: '8px' }}>Was interessiert Sie?</label>
                <div className="interest-grid">
                  {INTEREST_ITEMS.map(({ ico, label }) => (
                    <button
                      key={label}
                      type="button"
                      className={`int-btn${selected.includes(label) ? ' sel' : ''}`}
                      onClick={() => toggleSelection(label)}
                    >
                      <span className="int-ico">{ico}</span>{label}
                    </button>
                  ))}
                </div>

                {submitted ? (
                  <div style={{ textAlign: 'center', background: '#f0fdf4', border: '2px solid var(--green)', padding: '40px 32px', borderRadius: '14px' }}>
                    <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
                    <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Vielen Dank!</h3>
                    <p style={{ color: 'var(--gray-700)', marginBottom: '20px', fontSize: '15px' }}>Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                    <Link href="/" className="btn btn-dark">← Zurück zur Startseite</Link>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
                    <div className="form-row">
                      <div className="field"><label>Vorname *</label><input type="text" required /></div>
                      <div className="field"><label>Nachname *</label><input type="text" required /></div>
                    </div>
                    <div className="field"><label>E-Mail *</label><input type="email" required /></div>
                    <div className="field"><label>Telefon</label><input type="tel" placeholder="+49 ..." /></div>
                    <div className="field"><label>Postleitzahl *</label><input type="text" pattern="[0-9]{5}" required placeholder="12345" /></div>
                    <div className="field"><label>Nachricht (optional)</label><textarea rows="3" placeholder="Erzählen Sie uns von Ihrem Projekt..."></textarea></div>
                    <div className="field check">
                      <input type="checkbox" required id="dsgvo-kontakt" />
                      <label htmlFor="dsgvo-kontakt" style={{ fontSize: '13px' }}>Ich akzeptiere die <Link href="/datenschutz" style={{ color: 'var(--dark)', textDecoration: 'underline' }}>Datenschutzerklärung</Link> und stimme einer Kontaktaufnahme zu.</label>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px 20px' }}>
                      Kostenloses Angebot erhalten →
                    </button>
                    <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--gray-500)', marginTop: '10px' }}>🔒 Verschlüsselte Übertragung · Keine Weitergabe an Dritte</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Foerderung() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <Head>
        <title>Wärmepumpen-Förderung 2026 — Solarstack</title>
        <meta name="description" content="Bis zu 70 % Förderung für Ihre neue Wärmepumpe. BEG, KfW, Heizungstausch-Bonus und einkommensabhängige Boni – wir kümmern uns um den Antrag." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <style>{`
        .subhero {
          min-height: 65vh;
          background:
            linear-gradient(90deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.3) 60%, transparent 100%),
            url('https://images.pexels.com/photos/8853499/pexels-photo-8853499.jpeg?auto=compress&cs=tinysrgb&w=1600') center/cover no-repeat;
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
          <span className="eyebrow">💰 FÖRDERUNG 2026</span>
          <h1>Bis zu 70 %<br />staatlicher Zuschuss</h1>
          <p>Beim Heizungstausch übernimmt der Staat einen großen Teil der Kosten. Wir prüfen alle Förderungen, beantragen sie für Sie und zahlen sie an Sie aus.</p>
          <div className="hero-cta">
            <Link href="/kontakt" className="btn btn-primary">Förderung prüfen →</Link>
            <Link href="/waermepumpe" className="btn btn-secondary">← Zurück zur WP</Link>
          </div>
          <div className="hero-trust">
            <span>BEG-Förderung</span>
            <span>Heizungstausch-Bonus</span>
            <span>Antrag inklusive</span>
          </div>
        </div>
      </header>

      <section>
        <div className="container split">
          <img src="https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Antragsformulare und Förderdokumente" />
          <div>
            <span className="eyebrow">Förderbausteine BEG-EM</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '16px' }}>So setzt sich Ihre<br />Förderung zusammen</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '24px' }}>Die Bundesförderung für effiziente Gebäude (BEG) kombiniert mehrere Bausteine. Wir berechnen für Sie das Maximum.</p>
            <ul className="feature-list">
              <li><strong>30 %</strong> Grundförderung für jede Wärmepumpe</li>
              <li><strong>+20 %</strong> Klimageschwindigkeitsbonus (alte Heizung raus bis 2028)</li>
              <li><strong>+30 %</strong> Einkommensbonus (bis 40.000 € zu versteuerndes Einkommen)</li>
              <li><strong>+5 %</strong> Effizienzbonus für Erd- &amp; Wasserwärmepumpen</li>
              <li>Maximale Förderung: <strong>70 %</strong> der Investitionskosten</li>
            </ul>
            <Link href="/kontakt" className="btn btn-dark" style={{ marginTop: '8px' }}>Persönlich prüfen lassen →</Link>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ablauf</span>
            <h2>Wir übernehmen die Bürokratie</h2>
            <p>Von der Erstberatung bis zur Auszahlung – Sie unterschreiben, wir kümmern uns.</p>
          </div>
          <div className="usp-grid">
            <div className="usp-card"><div className="usp-icon">📞</div><h3>1. Kostenlose Erstberatung</h3><p>Wir analysieren Ihre Heizung, Ihr Haus und Ihre Einkommenssituation – und berechnen die maximale Förderung.</p></div>
            <div className="usp-card"><div className="usp-icon">📝</div><h3>2. Antrag &amp; BAFA-/KfW-Einreichung</h3><p>Wir stellen den Förderantrag bei BAFA bzw. KfW und holen alle Bestätigungen ein – bevor mit den Arbeiten begonnen wird.</p></div>
            <div className="usp-card"><div className="usp-icon">💸</div><h3>3. Auszahlung &amp; Abrechnung</h3><p>Nach Inbetriebnahme reichen wir den Verwendungsnachweis ein – das Geld fließt direkt an Sie.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container split rev">
          <img src="https://images.pexels.com/photos/7174379/pexels-photo-7174379.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Beratungsgespräch zu Förderung" />
          <div>
            <span className="eyebrow">Rechenbeispiel</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '14px' }}>So viel können Sie sparen</h2>
            <p style={{ color: 'var(--gray-700)' }}>Beispielrechnung Einfamilienhaus, alte Gasheizung wird durch Luft-Wasser-Wärmepumpe ersetzt.</p>
            <div className="tech-grid">
              <div className="tech-item"><strong>Brutto</strong><span>30.000 € Komplettpreis</span></div>
              <div className="tech-item"><strong>Grundförderung</strong><span>− 9.000 € (30 %)</span></div>
              <div className="tech-item"><strong>Klimabonus</strong><span>− 6.000 € (20 %)</span></div>
              <div className="tech-item"><strong>Effizienzbonus</strong><span>− 1.500 € (5 %)</span></div>
              <div className="tech-item"><strong>Eigenanteil</strong><span>13.500 € (45 %)</span></div>
              <div className="tech-item"><strong>Mit Einkommen</strong><span>nur 9.000 € möglich</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ihre Vorteile</span>
            <h2>Förderung in Zahlen</h2>
          </div>
          <div className="savings-row">
            <div className="savings-item"><span className="savings-num">70 %</span><span className="savings-label">maximale Förderquote</span></div>
            <div className="savings-item" style={{ background: 'var(--accent)' }}><span className="savings-num">21.000 €</span><span className="savings-label">max. Zuschuss bei 30 T€ Invest</span></div>
            <div className="savings-item" style={{ background: 'var(--dark)', color: '#fff' }}><span className="savings-num" style={{ color: 'var(--accent)' }}>0 €</span><span className="savings-label" style={{ color: 'rgba(255,255,255,.8)' }}>Aufwand für Sie</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Häufig gefragt</span>
            <h2>FAQ Förderung</h2>
          </div>
          <div className="faq-list">
            {[
              { q: 'Wer beantragt die Förderung?', a: 'Bei BEG-Einzelmaßnahmen kann der Hauseigentümer den Antrag direkt selbst stellen oder einen Energieberater bzw. Fachbetrieb beauftragen. Wir übernehmen den gesamten Antrag für Sie – inklusive Energieeffizienz-Experten.' },
              { q: 'Wann muss der Antrag gestellt werden?', a: 'Wichtig: Der Antrag muss VOR Beginn der Maßnahme gestellt und bewilligt werden. Daher prüfen wir die Förderung immer als ersten Schritt – bevor irgendwas bestellt oder montiert wird.' },
              { q: 'Wie lange dauert die Auszahlung?', a: 'Nach Bewilligung des Antrags und Einreichung des Verwendungsnachweises (nach Inbetriebnahme) dauert die Auszahlung ca. 6–12 Wochen.' },
              { q: 'Kann ich die Förderung mit der Steuer kombinieren?', a: 'Nein – Sie wählen entweder BEG-Förderung ODER die Steuerermäßigung nach §35c EStG. Wir berechnen, was für Sie günstiger ist.' },
              { q: 'Was passiert, wenn meine alte Heizung noch nicht 20 Jahre alt ist?', a: 'Der Klimageschwindigkeitsbonus gilt unabhängig vom Alter, solange Sie die alte Heizung VOR Ablauf der gesetzlichen Frist freiwillig austauschen. Wir prüfen Ihren konkreten Fall.' },
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
            <span className="eyebrow" style={{ background: 'rgba(255,214,10,.2)', color: 'var(--accent)' }}>💰 KOSTENLOSE FÖRDERPRÜFUNG</span>
            <h2>Wie viel Förderung steht Ihnen zu?</h2>
            <p>In nur 24 Stunden erhalten Sie eine schriftliche Auswertung Ihrer maximal möglichen Förderung.</p>
            <Link href="/kontakt" className="btn btn-primary">Jetzt prüfen lassen →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

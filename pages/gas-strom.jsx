import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function GasStrom() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <Head>
        <title>Gas &amp; Strom — Solarstack</title>
        <meta name="description" content="Günstige Gas- und Stromtarife von Solarstack. Keine versteckten Kosten, faire Konditionen, perfekte Ergänzung zu Ihrer Solaranlage." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <style>{`
        .subhero { min-height: 65vh; }
        .subhero .hero-slide-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(90deg, rgba(0,0,0,.78) 0%, rgba(0,0,0,.4) 60%, transparent 100%);
        }
        .stats-band { background: var(--dark); color: #fff; padding: 0; overflow: hidden; }
        .stats-band-inner { display: flex; align-items: stretch; max-width: 1280px; margin: 0 auto; }
        .sb-item { flex: 1; padding: 44px 32px; text-align: center; border-right: 1px solid rgba(255,255,255,.08); }
        .sb-item:last-child { border-right: none; }
        .sb-num { font-size: 52px; font-weight: 700; color: var(--accent); display: block; line-height: 1; }
        .sb-label { color: rgba(255,255,255,.7); font-size: 14px; margin-top: 6px; display: block; }
        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .split.rev { direction: rtl; } .split.rev > * { direction: ltr; }
        .split img { border-radius: 14px; width: 100%; object-fit: cover; box-shadow: 0 16px 48px rgba(0,0,0,.12); aspect-ratio: 4/3; }
        .hiw-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 16px; }
        .hiw-step { text-align: center; }
        .hiw-num { width: 52px; height: 52px; border-radius: 50%; background: var(--accent); color: var(--dark); display: grid; place-items: center; font-weight: 700; font-size: 20px; margin: 0 auto 16px; }
        .hiw-step h4 { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
        .hiw-step p { font-size: 14px; color: var(--gray-700); }
        .faq-compact { max-width: 820px; margin: 0 auto; }
        .faq-compact .faq-item { border-bottom: 1px solid var(--gray-100); padding: 18px 0; }
        .faq-compact .faq-q { font-weight: 600; font-size: 16px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .faq-compact .faq-q::after { content: "+"; font-size: 22px; color: var(--gray-500); }
        .faq-compact .faq-item.open .faq-q::after { content: "−"; }
        .faq-compact .faq-a { max-height: 0; overflow: hidden; transition: max-height .3s, padding .3s; color: var(--gray-700); font-size: 15px; }
        .faq-compact .faq-item.open .faq-a { max-height: 400px; padding-top: 12px; }
        @media (max-width: 960px) {
          .split, .hiw-grid { grid-template-columns: 1fr; }
          .split.rev { direction: ltr; }
          .stats-band-inner { flex-direction: column; }
          .sb-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,.08); }
          .sb-item:last-child { border-bottom: none; }
        }
      `}</style>

      {/* Hero */}
      <header className="hero subhero">
        <div className="hero-slides">
          <div className="hero-slide active" style={{ background: "center/cover no-repeat url('/images/smart-home-wohnzimmer.png')" }}></div>
        </div>
        <div className="hero-slide-overlay"></div>
        <div className="container hero-content" style={{ paddingTop: '100px' }}>
          <span className="eyebrow" style={{ background: 'rgba(255,214,10,.2)', color: 'var(--accent)' }}>🔥 GAS &amp; STROM</span>
          <h1>Energie günstiger –<br />einfach wechseln</h1>
          <p>Faire Tarife ohne versteckte Kosten. Als Solarstack-Kunde kombinieren Sie Ihren Eigenverbrauch mit unserem günstigen Netzstrom – und zahlen nur noch für das, was Sie wirklich brauchen.</p>
          <div className="hero-cta">
            <Link href="/kontakt" className="btn btn-primary">Tarif berechnen →</Link>
            <Link href="/kontakt" className="btn btn-secondary">▶ Angebot anfragen</Link>
          </div>
          <div className="hero-trust">
            <span>Keine Mindestlaufzeit</span>
            <span>100 % transparent</span>
            <span>In 5 Minuten gewechselt</span>
          </div>
        </div>
      </header>

      {/* Stats Band */}
      <div className="stats-band">
        <div className="stats-band-inner">
          <div className="sb-item"><span className="sb-num">Ø 30 %</span><span className="sb-label">Durchschnittlich günstiger – mehr möglich</span></div>
          <div className="sb-item"><span className="sb-num">5 Min</span><span className="sb-label">Wechsel komplett online</span></div>
          <div className="sb-item"><span className="sb-num">100 %</span><span className="sb-label">Ökostrom-Option verfügbar</span></div>
          <div className="sb-item"><span className="sb-num">0 €</span><span className="sb-label">Wechselkosten – wir übernehmen alles</span></div>
        </div>
      </div>

      {/* Intro Split */}
      <section>
        <div className="container split">
          <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=900&q=80" alt="Strom und Energie sparen" />
          <div>
            <span className="eyebrow">Warum Solarstack Energie?</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: '700', letterSpacing: '-.02em', margin: '16px 0 14px' }}>Der clevere Energie-<br />Komplettanbieter</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '18px', fontSize: '16px' }}>Warum Strom und Gas woanders kaufen, wenn Sie mit Solarstack alles aus einer Hand bekommen? Wir verhandeln direkten Zugang zu den Großhandelsmärkten – und geben die Ersparnis direkt an Sie weiter.</p>
            <ul className="feature-list">
              <li>Kein Callcenter – direkter Ansprechpartner</li>
              <li>Automatischer Wechsel – kein Papierkram für Sie</li>
              <li>Kombivorteil mit PV-Anlage: Eigenverbrauch priorisiert</li>
              <li>Monatliche Abrechnung – volle Transparenz</li>
            </ul>
            <Link href="/kontakt" className="btn btn-dark" style={{ marginTop: '20px' }}>Jetzt Tarif anfragen →</Link>
          </div>
        </div>
      </section>

      {/* Stromrechnung Shock */}
      <section id="kosten" style={{ background: 'var(--gray-50)' }}>
        <div className="container split">
          <img src="/images/stromrechnung.png" alt="Schockierte Person über hohe Stromrechnung" style={{ aspectRatio: '4/3', objectFit: 'cover' }} />
          <div>
            <span className="eyebrow" style={{ background: 'rgba(239,68,68,.1)', color: '#dc2626' }}>⚡ DAS KOSTET SIE STROM WIRKLICH</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: '700', letterSpacing: '-.02em', margin: '16px 0 14px' }}>Stromrechnung über<br /><span style={{ color: '#dc2626' }}>2.800 € pro Jahr?</span></h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '18px', fontSize: '16px' }}>Deutsche Haushalte zahlen im Durchschnitt deutlich zu viel für Strom und Gas – oft hunderte Euro mehr als nötig. Wer nicht wechselt, zahlt drauf. Mit Solarstack wechseln Sie in 5 Minuten zu einem fairen Tarif.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', margin: '24px 0' }}>
              <div style={{ background: '#fff', borderRadius: '12px', padding: '18px', border: '1.5px solid var(--gray-100)' }}>
                <div style={{ fontSize: '28px', fontWeight: '700', color: '#dc2626' }}>Ø 30 %</div>
                <div style={{ fontSize: '13px', color: 'var(--gray-700)', marginTop: '4px' }}>günstiger – mehr ist möglich</div>
              </div>
              <div style={{ background: '#fff', borderRadius: '12px', padding: '18px', border: '1.5px solid var(--gray-100)' }}>
                <div style={{ fontSize: '28px', fontWeight: '700', color: 'var(--green)' }}>5 Min</div>
                <div style={{ fontSize: '13px', color: 'var(--gray-700)', marginTop: '4px' }}>Wechsel vollständig online</div>
              </div>
            </div>
            <Link href="/kontakt" className="btn btn-primary" style={{ marginTop: '4px' }}>Jetzt sparen – Angebot anfordern →</Link>
          </div>
        </div>
      </section>

      {/* PV-Kombivorteil */}
      <section>
        <div className="container split rev">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80" alt="Solaranlage und Strom" />
          <div>
            <span className="eyebrow">Solar + Strom = maximale Ersparnis</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '700', letterSpacing: '-.02em', margin: '16px 0 14px' }}>Ihr Eigenverbrauch zählt doppelt</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '18px', fontSize: '16px' }}>Mit unserer Solar-Kombi-Lösung wird der Strom Ihrer PV-Anlage automatisch mit Ihrem Netzbezug verrechnet. Was Sie selbst produzieren, müssen Sie nicht kaufen – und für den Rest zahlen Sie unseren günstigen Kombi-Tarif.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '24px 0' }}>
              <div style={{ background: 'var(--gray-50)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--accent-dark)' }}>Ø 70 %</div>
                <div style={{ fontSize: '13px', color: 'var(--gray-700)', marginTop: '4px' }}>Eigendeckungsgrad mit PV</div>
              </div>
              <div style={{ background: 'var(--gray-50)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--accent-dark)' }}>Ø 1.400 €</div>
                <div style={{ fontSize: '13px', color: 'var(--gray-700)', marginTop: '4px' }}>Ersparnis pro Jahr</div>
              </div>
            </div>
            <Link href="/kontakt" className="btn btn-dark">Kombinationsangebot anfragen →</Link>
          </div>
        </div>
      </section>

      {/* Wechsel in 4 Schritten */}
      <section style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">So einfach geht's</span>
            <h2>In 4 Schritten zum besseren Tarif</h2>
            <p>Kein Papierkram, keine Wartezeit, kein Risiko. Wir übernehmen die gesamte Kommunikation mit Ihrem alten Anbieter.</p>
          </div>
          <div className="hiw-grid">
            <div className="hiw-step"><div className="hiw-num">1</div><h4>Tarif wählen</h4><p>Wählen Sie online Ihren Wunsch-Tarif oder lassen Sie sich kostenlos beraten.</p></div>
            <div className="hiw-step"><div className="hiw-num">2</div><h4>Daten angeben</h4><p>Name, Adresse und aktuelle Zählernummer – mehr brauchen wir nicht von Ihnen.</p></div>
            <div className="hiw-step"><div className="hiw-num">3</div><h4>Wir kündigen für Sie</h4><p>Wir übernehmen die komplette Kündigung bei Ihrem bisherigen Anbieter. Keine Briefe, kein Stress.</p></div>
            <div className="hiw-step"><div className="hiw-num">4</div><h4>Sparen beginnt</h4><p>Nach Bearbeitungszeit (ca. 4–6 Wochen) sind Sie nahtlos umgestellt – und zahlen weniger.</p></div>
          </div>
        </div>
      </section>

      {/* Gas Heizung Split */}
      <section>
        <div className="container split">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" alt="Modernes Haus mit Heizung" />
          <div>
            <span className="eyebrow">Gas für Ihr Zuhause</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '700', letterSpacing: '-.02em', margin: '16px 0 14px' }}>Günstiges Gas – auch als Übergang zur Wärmepumpe</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '18px', fontSize: '16px' }}>Nicht jeder Haushalt kann sofort auf Wärmepumpe umsteigen. Mit unserem Gastarif bleiben Sie flexibel – zu fairen Konditionen, ohne Risiko. Und wenn Sie bereit für die Wärmepumpe sind, sind wir da.</p>
            <ul className="arrow-list">
              <li>Keine Sperrung, keine versteckten Gebühren</li>
              <li>Monatliche Abrechnung nach realem Verbrauch</li>
              <li>Upgrade auf Wärmepumpe jederzeit möglich</li>
              <li>Solarstack berät Sie beim optimalen Zeitpunkt</li>
            </ul>
            <Link href="/kontakt" className="btn btn-dark" style={{ marginTop: '20px' }}>Gas-Tarif anfragen →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Häufige Fragen zu Gas &amp; Strom</h2>
          </div>
          <div className="faq-compact">
            {[
              { q: 'Wie lange dauert der Wechsel?', a: 'In der Regel 4–6 Wochen. Wir koordinieren alles mit Ihrem bisherigen Anbieter – Sie müssen nichts tun. Die Versorgung ist jederzeit sichergestellt, es gibt keine Versorgungslücke.' },
              { q: 'Gibt es eine Mindestlaufzeit?', a: 'Nein. Unsere Tarife sind monatlich kündbar – ohne Fristen oder Stornogebühren. Wir setzen auf Kundenzufriedenheit, nicht auf Vertragsklauseln.' },
              { q: 'Was passiert mit meiner Einspeisevergütung?', a: 'Im Solar-Kombi-Tarif wird Ihre Einspeisevergütung direkt mit Ihrem Stromverbrauch verrechnet. Das vereinfacht die Abrechnung enorm und spart Ihnen zusätzlich Steuern und Verwaltungsaufwand.' },
              { q: 'Kann ich Strom und Gas zusammen beziehen?', a: 'Ja. Wenn Sie bei uns beides abschließen, erhalten Sie einen Kombivorteil von 0,5 ct/kWh auf Ihren Strom sowie einen einmaligen Wechselbonus von 50 €.' },
              { q: 'Ist Ökostrom auch verfügbar?', a: 'Ja. Unser Basisstrom ist nach deutschem EEG-Mix. Auf Wunsch liefern wir 100 % zertifizierten Ökostrom (TÜV-geprüft) für einen kleinen Aufpreis von 1,5 ct/kWh.' },
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
            <span className="eyebrow" style={{ background: 'rgba(255,214,10,.2)', color: 'var(--accent)' }}>🔥 GAS &amp; STROM VON SOLARSTACK</span>
            <h2>Jetzt Tarif berechnen</h2>
            <p>Geben Sie Ihren Jahresverbrauch an – wir zeigen Ihnen sofort, wie viel Sie sparen. Kostenlos und unverbindlich.</p>
            <Link href="/kontakt" className="btn btn-primary">Kostenloses Angebot →</Link>
            <div className="hero-trust" style={{ marginTop: '20px' }}>
              <span>Kein Risiko</span><span>Monatlich kündbar</span><span>In 5 Min. abgeschlossen</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

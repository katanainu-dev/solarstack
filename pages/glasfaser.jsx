import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Glasfaser() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <Head>
        <title>Glasfaser — Solarstack</title>
        <meta name="description" content="Glasfaser-Internetanschluss für Ihr Zuhause – bis 1 Gbit/s, stabil, zukunftssicher. Solarstack verlegt und aktiviert Ihren Glasfaseranschluss." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <style>{`
        .subhero {
          min-height: 65vh;
          background:
            linear-gradient(90deg, rgba(0,0,0,.78) 0%, rgba(0,0,0,.35) 60%, transparent 100%),
            url('/images/app-fam2.png') center 40%/cover no-repeat;
        }
        .speed-band { background: var(--dark); color: #fff; padding: 0; overflow: hidden; }
        .speed-inner { display: flex; align-items: stretch; max-width: 1280px; margin: 0 auto; }
        .speed-item { flex: 1; padding: 44px 32px; text-align: center; border-right: 1px solid rgba(255,255,255,.08); }
        .speed-item:last-child { border-right: none; }
        .speed-num { font-size: 52px; font-weight: 700; color: var(--accent); display: block; line-height: 1; }
        .speed-label { color: rgba(255,255,255,.7); font-size: 14px; margin-top: 6px; display: block; }
        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .split.rev { direction: rtl; } .split.rev > * { direction: ltr; }
        .split img { border-radius: 14px; width: 100%; object-fit: cover; box-shadow: 0 16px 48px rgba(0,0,0,.12); }
        .split .img-tall { aspect-ratio: 4/3; }
        .compare-table { width: 100%; border-collapse: collapse; margin-top: 16px; }
        .compare-table th { background: var(--dark); color: #fff; padding: 14px 20px; text-align: left; font-size: 14px; }
        .compare-table th:first-child { border-radius: 10px 0 0 0; }
        .compare-table th:last-child { border-radius: 0 10px 0 0; }
        .compare-table td { padding: 14px 20px; border-bottom: 1px solid var(--gray-100); font-size: 14px; vertical-align: middle; }
        .compare-table tr:last-child td { border-bottom: none; }
        .compare-table tr:nth-child(even) td { background: var(--gray-50); }
        .check-yes { color: #22c55e; font-size: 18px; }
        .check-no { color: #ef4444; font-size: 18px; }
        @media (max-width: 960px) {
          .split { grid-template-columns: 1fr; }
          .split.rev { direction: ltr; }
          .speed-inner { flex-wrap: wrap; }
          .speed-item { flex: 1 1 50%; border-right: none; border-bottom: 1px solid rgba(255,255,255,.08); }
        }
      `}</style>

      {/* Hero */}
      <header className="hero subhero">
        <div className="container hero-content">
          <span className="eyebrow">🌐 GLASFASER</span>
          <h1>Internet so schnell<br />wie Licht</h1>
          <p>Glasfaser direkt bis ins Haus – bis zu 1.000 Mbit/s, stabile Verbindung und zukunftssicherer Anschluss für Ihre gesamte Familie.</p>
          <div className="hero-cta">
            <Link href="/kontakt" className="btn btn-primary">Verfügbarkeit prüfen →</Link>
            <a href="#pakete" className="btn btn-secondary">▶ Pakete ansehen</a>
          </div>
          <div className="hero-trust">
            <span>Bis 1.000 Mbit/s</span>
            <span>Kein Aufpreis für Router</span>
            <span>24 h Aktivierung</span>
          </div>
        </div>
      </header>

      {/* Speed band */}
      <div className="speed-band">
        <div className="speed-inner">
          <div className="speed-item"><span className="speed-num">1.000</span><span className="speed-label">Mbit/s Download</span></div>
          <div className="speed-item"><span className="speed-num">500</span><span className="speed-label">Mbit/s Upload</span></div>
          <div className="speed-item"><span className="speed-num">&lt; 5 ms</span><span className="speed-label">Ping-Zeit (Latenz)</span></div>
          <div className="speed-item"><span className="speed-num">99,9 %</span><span className="speed-label">Netz-Verfügbarkeit</span></div>
        </div>
      </div>

      {/* What is Glasfaser */}
      <section>
        <div className="container split">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80" alt="Glasfaser-Kabel Lichtleiter" className="img-tall" />
          <div>
            <span className="eyebrow">Was ist Glasfaser?</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '16px' }}>Lichtschnelle Daten – direkt bis ins Haus</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '18px' }}>Glasfaser überträgt Daten nicht durch Kupferkabel, sondern durch hauchdünne Lichtleiter aus Glas – mit der Geschwindigkeit des Lichts. Das bedeutet: keine Verlangsamung bei Entfernung zur Vermittlungsstelle, kein Einbruch der Leistung zu Stoßzeiten.</p>
            <p style={{ color: 'var(--gray-700)', marginBottom: '24px' }}>Beim FTTH-Anschluss (Fiber to the Home) verlegen wir die Glasfaserleitung direkt bis in Ihre Wohnung oder Ihr Haus – nicht nur bis zum Verteilerkasten an der Straße. Das ist echter Glasfaser.</p>
            <ul className="feature-list">
              <li>FTTH – Glasfaser direkt bis in die Wohnung</li>
              <li>Symmetrische Geschwindigkeiten (Up = Down)</li>
              <li>Keine Beeinflussung durch Wetter oder Entfernung</li>
              <li>Zukunftssicher für die nächsten Jahrzehnte</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Vorteile</span>
            <h2>Warum Glasfaser statt DSL oder Kabel?</h2>
            <p>Einmal umsteigen – dauerhaft profitieren. Glasfaser ist die überlegene Technologie für Ihr Zuhause.</p>
          </div>
          <div className="usp-grid">
            <div className="usp-card"><div className="usp-icon">⚡</div><h3>Maximale Geschwindigkeit</h3><p>Bis zu 1.000 Mbit/s für Download und 500 Mbit/s Upload – für 4K-Streaming, Gaming, Homeoffice und Smart Home gleichzeitig.</p></div>
            <div className="usp-card"><div className="usp-icon">🔒</div><h3>Stabiles Signal</h3><p>Glasfaser ist unempfindlich gegenüber elektromagnetischen Störungen, Gewitter und Temperaturschwankungen. Das Signal bleibt konstant stabil.</p></div>
            <div className="usp-card"><div className="usp-icon">🏠</div><h3>Wertsteigerung Ihrer Immobilie</h3><p>Ein FTTH-Glasfaseranschluss erhöht nachweislich den Marktwert Ihrer Immobilie. Glasfaser ist heute ein entscheidendes Kaufkriterium.</p></div>
            <div className="usp-card"><div className="usp-icon">👨‍👩‍👧‍👦</div><h3>Für die ganze Familie</h3><p>Mehrere Nutzer, mehrere Geräte – gleichzeitig. Kein Ruckeln beim Streaming, keine Lags beim Gaming, keine Aussetzer im Video-Call.</p></div>
            <div className="usp-card"><div className="usp-icon">🌐</div><h3>Zukunftssicher</h3><p>Die Glasfaser-Infrastruktur ist auf die nächsten Jahrzehnte ausgelegt. Höhere Geschwindigkeiten durch Software-Update – keine neue Leitung nötig.</p></div>
            <div className="usp-card"><div className="usp-icon">♻️</div><h3>Energieeffizient</h3><p>Glasfaser verbraucht bis zu 85 % weniger Energie als vergleichbare Kupfer-Infrastruktur – gut für Ihren Stromverbrauch und die Umwelt.</p></div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Vergleich</span>
            <h2>Glasfaser vs. DSL vs. Kabel</h2>
            <p>Warum die Technologie entscheidet – nicht nur der Preis.</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Merkmal</th>
                  <th>🌐 Glasfaser (FTTH)</th>
                  <th>📞 DSL / VDSL</th>
                  <th>📺 Kabel (Coax)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Max. Download</strong></td><td><strong>bis 1.000 Mbit/s</strong></td><td>bis 250 Mbit/s</td><td>bis 1.000 Mbit/s</td></tr>
                <tr><td><strong>Max. Upload</strong></td><td><strong>bis 500 Mbit/s</strong></td><td>bis 40 Mbit/s</td><td>bis 50 Mbit/s</td></tr>
                <tr><td><strong>Latenz (Ping)</strong></td><td><strong>&lt; 5 ms</strong></td><td>20–50 ms</td><td>10–30 ms</td></tr>
                <tr><td><strong>Stabilität</strong></td><td><span className="check-yes">●●●●●</span></td><td><span>●●●○○</span></td><td><span>●●●●○</span></td></tr>
                <tr><td><strong>Störungsempfindlichkeit</strong></td><td><span className="check-yes">Keine</span></td><td><span className="check-no">Mittel–Hoch</span></td><td>Gering–Mittel</td></tr>
                <tr><td><strong>Geschwindigkeit bei Entfernung</strong></td><td><span className="check-yes">Unvermindert</span></td><td><span className="check-no">Stark abhängig</span></td><td>Leicht abhängig</td></tr>
                <tr><td><strong>Zukunftssicherheit</strong></td><td><span className="check-yes">Sehr hoch</span></td><td><span className="check-no">Gering</span></td><td>Mittel</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">So einfach geht's</span>
            <h2>In 4 Schritten zu Glasfaser</h2>
            <p>Von der Verfügbarkeitsprüfung bis zur Aktivierung – wir kümmern uns um alles.</p>
          </div>
          <div className="process-grid">
            <div className="step"><div className="step-num">1</div><h4>Verfügbarkeit prüfen</h4><p>Geben Sie Ihre Postleitzahl ein. Wir prüfen sofort, ob Glasfaser in Ihrer Straße verfügbar ist.</p></div>
            <div className="step"><div className="step-num">2</div><h4>Tarif wählen</h4><p>Wählen Sie den passenden Tarif für Ihren Haushalt – wir beraten Sie kostenlos und unverbindlich.</p></div>
            <div className="step"><div className="step-num">3</div><h4>Installation</h4><p>Unser Montageteam verlegt den Glasfaseranschluss direkt bis in Ihre Wohnung – in der Regel in wenigen Stunden.</p></div>
            <div className="step"><div className="step-num">4</div><h4>Aktivierung &amp; Genießen</h4><p>Ihr Anschluss wird innerhalb von 24 Stunden aktiviert. Router einstecken – fertig. Los geht's!</p></div>
          </div>
        </div>
      </section>

      {/* Glasfaser + Smart Home */}
      <section style={{ background: 'var(--gray-50)' }}>
        <div className="container split rev">
          <img src="/images/app-fam.png" alt="Smart Home mit Glasfaser und Energiemanager" className="img-tall" />
          <div>
            <span className="eyebrow">Perfekte Kombination</span>
            <h2 style={{ fontSize: '38px', letterSpacing: '-.02em', marginBottom: '16px' }}>Glasfaser + Smart Home:<br />Die Zukunft beginnt jetzt</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '18px' }}>Ein schneller und stabiler Internetzugang ist die Grundlage für Ihr smartes Energiesystem. Der Energiemanager, die PV-App und die Steuerung der Wärmepumpe funktionieren über Ihr Heimnetzwerk – Glasfaser garantiert minimale Latenz und maximale Zuverlässigkeit.</p>
            <ul className="arrow-list">
              <li>Energiemanager und PV-App immer online</li>
              <li>Fernzugriff auf Wärmepumpe und Wallbox</li>
              <li>Smart Meter und Einspeiseabrechnung in Echtzeit</li>
              <li>Fernwartung durch Solarstack-Techniker</li>
            </ul>
            <Link href="/kontakt" className="btn btn-primary" style={{ marginTop: '24px' }}>Jetzt Komplettpaket anfragen →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Häufige Fragen zu Glasfaser</h2>
          </div>
          <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { q: 'Was kostet die Glasfaser-Installation?', a: 'Die einmaligen Installationskosten betragen 99 €. Während Sonderaktionen in bestimmten Ausbaugebieten ist die Installation auch kostenlos möglich. Fragen Sie uns einfach an.' },
              { q: 'Wie lange dauert die Installation?', a: 'Die eigentliche Montage dauert meist nur 2–4 Stunden. Der Termin wird flexibel mit Ihnen vereinbart – auch samstags. Die Aktivierung des Anschlusses erfolgt innerhalb von 24 Stunden nach Montage.' },
              { q: 'Muss ich meinen alten Anbieter kündigen?', a: 'Nein – das erledigen wir für Sie! Mit der Anbieterwechsel-Beauftragung kündigen wir Ihren alten Vertrag fristgerecht und koordinieren den nahtlosen Übergang. Kein Tag ohne Internet.' },
              { q: 'Brauche ich einen neuen Router?', a: 'In allen Tarifen ist ein moderner WLAN-Router enthalten. Wenn Sie Ihren eigenen Router nutzen möchten, ist das ebenfalls möglich – wir unterstützen alle gängigen Geräte.' },
              { q: 'Kann ich Glasfaser mit meiner PV-Anlage kombinieren?', a: 'Ja – und wir empfehlen es sogar. Ein stabiler Glasfaseranschluss ist die ideale Grundlage für Ihren Energiemanager, die PV-App und die Steuerung von Wärmepumpe und Wallbox. Als Solarstack-Kunde erhalten Sie attraktive Kombi-Angebote.' },
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
            <span className="eyebrow" style={{ background: 'rgba(255,214,10,.2)', color: 'var(--accent)' }}>🌐 GLASFASER ANFRAGEN</span>
            <h2>Bereit für echtes Glasfaser-Internet?</h2>
            <p>Kostenloses Angebot in 2 Minuten. Unser Experte meldet sich innerhalb von 24 Stunden.</p>
            <Link href="/kontakt" className="btn btn-primary">Jetzt Verfügbarkeit prüfen →</Link>
            <div className="hero-trust" style={{ marginTop: '20px' }}>
              <span>Kostenlos</span><span>Unverbindlich</span><span>Persönliche Beratung</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

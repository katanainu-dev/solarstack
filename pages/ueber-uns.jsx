import Head from 'next/head'
import Link from 'next/link'

export default function UeberUns() {
  return (
    <>
      <Head>
        <title>Über uns — Solarstack</title>
        <meta name="description" content="Solarstack — Ihr regionaler Partner für Solaranlagen und Wärmepumpen seit 2014. Transparent, familiengeführt, 10.000+ Anlagen." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <style>{`
        .subhero {
          min-height: 60vh;
          background:
            linear-gradient(90deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.3) 60%, transparent 100%),
            url('/images/hero-smarthome.png') center 30%/cover no-repeat;
        }
        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .split.rev { direction: rtl; } .split.rev > * { direction: ltr; }
        .split img { border-radius: 14px; aspect-ratio: 4/3; object-fit: cover; width: 100%; box-shadow: 0 16px 48px rgba(0,0,0,.12); }
        .value-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .value-card { padding: 36px 28px; border-radius: 14px; background: var(--gray-50); }
        .value-card h3 { margin: 14px 0 10px; font-size: 20px; }
        .big-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; text-align: center; border-radius: 20px; overflow: hidden; background: var(--dark); }
        .big-stat-item { padding: 48px 24px; }
        .big-stat-item:not(:last-child) { border-right: 1px solid rgba(255,255,255,.08); }
        .big-stat-num { font-size: 52px; font-weight: 700; color: var(--accent); display: block; line-height: 1; margin-bottom: 8px; }
        .big-stat-label { color: rgba(255,255,255,.7); font-size: 15px; }
        @media (max-width: 960px) {
          .split, .value-grid { grid-template-columns: 1fr; }
          .split.rev { direction: ltr; }
          .big-stats { grid-template-columns: repeat(2, 1fr); }
          .big-stat-item:nth-child(2) { border-right: none; }
          .big-stat-item:not(:last-child) { border-bottom: 1px solid rgba(255,255,255,.08); }
        }
      `}</style>

      {/* Hero */}
      <header className="hero subhero">
        <div className="container hero-content">
          <span className="eyebrow">👥 ÜBER UNS</span>
          <h1>Menschen hinter<br />der Energiewende</h1>
          <p>Familiengeführt seit 2014, über 10.000 installierte Anlagen und ein Team, das wirklich hinter dem steht, was es tut. Willkommen bei Solarstack.</p>
          <div className="hero-cta">
            <Link href="/kontakt" className="btn btn-primary">Team kennenlernen →</Link>
          </div>
          <div className="hero-trust">
            <span>Seit 2014</span>
            <span>10.000+ Anlagen</span>
            <span>Familiengeführt</span>
          </div>
        </div>
      </header>

      {/* Story */}
      <section>
        <div className="container split">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80" alt="Das Solarstack Team bei der Arbeit" />
          <div>
            <span className="eyebrow">Unsere Geschichte</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '16px' }}>Seit 2014 für erneuerbare Energien</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '18px' }}>Was vor über einem Jahrzehnt als kleiner Familienbetrieb in einer Garage begann, ist heute einer der führenden regionalen Anbieter für integrierte Energielösungen. Gegründet von zwei Ingenieuren mit der Vision, Energieunabhängigkeit für jeden Haushalt erreichbar zu machen.</p>
            <p style={{ color: 'var(--gray-700)', marginBottom: '24px' }}>Wir arbeiten ausschließlich mit eigenen, festangestellten Montageteams – <strong>keine Subunternehmer</strong>. So garantieren wir höchste Qualität und einen festen Ansprechpartner von Anfang bis Ende.</p>
            <ul className="feature-list">
              <li>Eigenes Montageteam – keine Subunternehmer</li>
              <li>Festpreisgarantie ohne versteckte Kosten</li>
              <li>Service-Hotline auch nach der Installation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="big-stats">
            <div className="big-stat-item"><span className="big-stat-num">10+</span><span className="big-stat-label">Jahre Erfahrung</span></div>
            <div className="big-stat-item"><span className="big-stat-num">10.000+</span><span className="big-stat-label">Installierte Anlagen</span></div>
            <div className="big-stat-item"><span className="big-stat-num">50+</span><span className="big-stat-label">Festangestellte Mitarbeiter</span></div>
            <div className="big-stat-item"><span className="big-stat-num">10+</span><span className="big-stat-label">Berater für Sie</span></div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ background: 'var(--gray-50)', padding: '100px 0' }}>
        <div className="container split rev">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" alt="Modernes Haus mit Solaranlage" />
          <div>
            <span className="eyebrow">Unsere Mission</span>
            <h2 style={{ fontSize: '40px', letterSpacing: '-.02em', marginBottom: '16px' }}>Energieunabhängigkeit für jeden</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '20px' }}>Wir glauben: Saubere Energie sollte kein Luxus sein. Deshalb beraten wir ehrlich, planen kostenlos und helfen Ihnen, die maximale Förderung zu erhalten.</p>
            <ul className="arrow-list">
              <li>Ehrliche Beratung – wenn sich etwas nicht lohnt, sagen wir das</li>
              <li>Transparent in Planung, Preis und Durchführung</li>
              <li>Langfristiger Partner – nicht nur der Installateur</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Unsere Werte</span>
            <h2>Wofür wir jeden Tag aufstehen</h2>
            <p>Drei Prinzipien, die uns bei jedem Projekt leiten – und bei jedem Kundengespräch.</p>
          </div>
          <div className="value-grid">
            <div className="value-card">
              <div className="usp-icon">🤝</div>
              <h3>Transparenz</h3>
              <p>Ehrliche Beratung, klare Preise und faire Vertragskonditionen. Wenn ein Projekt sich für Sie nicht lohnt, sagen wir das – bevor Sie unterschreiben.</p>
            </div>
            <div className="value-card">
              <div className="usp-icon">🛠</div>
              <h3>Qualität</h3>
              <p>Nur Premium-Komponenten führender Hersteller. Eigene Montageteams mit Meisterausbildung. Keine Kompromisse bei Material und Ausführung.</p>
            </div>
            <div className="value-card">
              <div className="usp-icon">📞</div>
              <h3>Verlässlichkeit</h3>
              <p>Ein fester Ansprechpartner vom Erstgespräch bis zur Inbetriebnahme. Unsere Service-Hotline ist auch nach der Installation für Sie da.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ background: 'var(--gray-50)', padding: '100px 0' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Auszeichnungen &amp; Partner</span>
            <h2>Geprüfte Qualität</h2>
            <p>Unabhängige Zertifizierungen und Partnerschaften mit den besten Herstellern der Branche.</p>
          </div>
          <div className="usp-grid">
            <div className="usp-card"><div className="usp-icon">🏆</div><h3>TÜV-zertifiziert</h3><p>Regelmäßige Prüfungen durch den TÜV garantieren höchste Qualitätsstandards in Planung, Montage und Betrieb.</p></div>
            <div className="usp-card"><div className="usp-icon">⭐</div><h3>Bosch Premium Partner</h3><p>Offizieller Partner für Heiztechnik – direkte Schulungen, bevorzugter Support und Zugang zu neuesten Produkten.</p></div>
            <div className="usp-card"><div className="usp-icon">🎖</div><h3>Meisterbetrieb</h3><p>Eingetragen in der Handwerksrolle. Wir bilden eigene Fachkräfte aus und sorgen so für gleichbleibend hohe Qualität.</p></div>
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="prefooter-cta-wrap">
        <div className="prefooter-cta">
          <div className="prefooter-inner">
            <span className="eyebrow" style={{ background: 'rgba(255,214,10,.2)', color: 'var(--accent)' }}>🤝 WIR BERATEN SIE PERSÖNLICH</span>
            <h2>Lernen Sie uns kennen</h2>
            <p>Vereinbaren Sie ein unverbindliches Gespräch – telefonisch, vor Ort oder bei Ihnen zuhause. Kein Verkaufsdruck, nur echte Beratung.</p>
            <Link href="/kontakt" className="btn btn-primary">Termin vereinbaren →</Link>
            <div className="hero-trust" style={{ marginTop: '20px' }}>
              <span>Kostenlos</span><span>Unverbindlich</span><span>Ohne Verkaufsdruck</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import Head from 'next/head'

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Impressum — Solarstack</title>
        <meta name="description" content="Impressum der Solarstack GmbH / Proseller HIGHLEVEL gemäß §5 TMG." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <style>{`
        .legal-hero {
          min-height: 28vh;
          background: linear-gradient(90deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.4) 70%,transparent 100%),
            url('/images/hero-haus-solar-komplett.png') center 50%/cover no-repeat;
        }
        .legal-body { max-width: 860px; margin: 0 auto; padding: 64px 24px 100px; }
        .legal-body h2 { font-size: 22px; font-weight: 700; margin: 40px 0 12px; color: var(--dark); border-left: 4px solid var(--accent); padding-left: 14px; }
        .legal-body h3 { font-size: 17px; font-weight: 700; margin: 24px 0 8px; }
        .legal-body p, .legal-body li { font-size: 15px; color: var(--gray-700); line-height: 1.75; margin-bottom: 12px; }
        .legal-body ul { padding-left: 20px; }
        .legal-body a { color: var(--dark); text-decoration: underline; }
      `}</style>

      <header className="hero legal-hero">
        <div className="container hero-content">
          <span className="eyebrow">📋 RECHTLICHES</span>
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 TMG</p>
        </div>
      </header>

      <div className="legal-body">
        <h2>1. Angaben gemäß § 5 TMG</h2>
        <p>
          <strong>Proseller HIGHLEVEL</strong><br />
          Am Germaniahafen 3<br />
          24143 Kiel<br />
          Deutschland
        </p>

        <h2>2. Kontakt</h2>
        <p>
          <strong>Telefon:</strong> <a href="tel:+4915141241591">+49 151 41241591</a><br />
          <strong>Telefon:</strong> <a href="tel:+4915144945764">+49 151 44945764</a><br />
          <strong>E-Mail:</strong> <a href="mailto:info@solarstack.de">info@solarstack.de</a>
        </p>

        <h2>3. Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
        <strong>DE [wird nachgetragen]</strong></p>

        <h2>4. Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          Proseller HIGHLEVEL<br />
          Am Germaniahafen 3<br />
          24143 Kiel
        </p>

        <h2>5. Streitschlichtung</h2>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a></p>
        <p>Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

        <h2>6. Haftung für Inhalte</h2>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
        <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

        <h2>7. Haftung für Links</h2>
        <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
        <p>Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

        <h2>8. Urheberrecht</h2>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
        <p>Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

        <p style={{ marginTop: '48px', fontSize: '13px', color: 'var(--gray-500)' }}>Stand: April 2026</p>
      </div>
    </>
  )
}

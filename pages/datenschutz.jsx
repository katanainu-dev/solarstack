import Head from 'next/head'

export default function Datenschutz() {
  return (
    <>
      <Head>
        <title>Datenschutzerklärung — Solarstack</title>
        <meta name="description" content="Datenschutzerklärung der Solarstack GmbH / Proseller HIGHLEVEL – DSGVO-konform." />
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
        .dsgvo-badge { display: inline-flex; align-items: center; gap: 8px; background: #f0fdf4; border: 1.5px solid #22c55e; color: #15803d; border-radius: 8px; padding: 10px 18px; font-size: 14px; font-weight: 600; margin-bottom: 32px; }
      `}</style>

      <header className="hero legal-hero">
        <div className="container hero-content">
          <span className="eyebrow">🔒 RECHTLICHES</span>
          <h1>Datenschutzerklärung</h1>
          <p>Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.</p>
        </div>
      </header>

      <div className="legal-body">
        <div className="dsgvo-badge">✅ Diese Datenschutzerklärung ist DSGVO-konform (Stand: April 2026)</div>

        <h2>1. Verantwortlicher</h2>
        <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:</p>
        <p>
          <strong>Proseller HIGHLEVEL</strong><br />
          Am Germaniahafen 3<br />
          24143 Kiel<br />
          Deutschland<br /><br />
          <strong>E-Mail:</strong> <a href="mailto:info@solarstack.de">info@solarstack.de</a><br />
          <strong>Telefon:</strong> +49 151 41241591<br />
          <strong>Telefon:</strong> +49 151 44945764
        </p>

        <h2>2. Grundsätze der Datenverarbeitung</h2>
        <p>Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Dienstleistungen notwendig ist oder Sie uns Ihre Einwilligung erteilt haben. Unsere Datenverarbeitung erfolgt stets gemäß der DSGVO, dem Bundesdatenschutzgesetz (BDSG) sowie weiteren anwendbaren datenschutzrechtlichen Bestimmungen.</p>

        <h2>3. Erhebung und Verarbeitung personenbezogener Daten</h2>

        <h3>3.1 Beim Besuch unserer Website</h3>
        <p>Beim Aufrufen unserer Website werden durch den Browser automatisch folgende Daten an unseren Server übermittelt:</p>
        <ul>
          <li>IP-Adresse des anfragenden Geräts (anonymisiert)</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Übertragene Datenmenge</li>
          <li>Browser-Typ und -Version</li>
          <li>Betriebssystem</li>
          <li>Referrer-URL (zuvor besuchte Seite)</li>
        </ul>
        <p>Diese Daten werden vorübergehend in einem Logfile gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) zur Sicherstellung der technischen Funktionsfähigkeit der Website.</p>

        <h3>3.2 Kontaktformular und Anfragen</h3>
        <p>Wenn Sie unser Kontaktformular nutzen oder uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Telefonnummer, Nachricht) zur Bearbeitung Ihrer Anfrage.</p>
        <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>
        <p>Die Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben. Sie werden gelöscht, sobald die Anfrage vollständig bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>

        <h3>3.3 Angebotsanfragen</h3>
        <p>Wenn Sie ein Angebot für Solaranlagen, Wärmepumpen, Glasfaser oder Energieprodukte anfordern, erheben wir folgende Daten:</p>
        <ul>
          <li>Vor- und Nachname</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer (optional)</li>
          <li>Postleitzahl / Adresse</li>
          <li>Interesse / Produktauswahl</li>
        </ul>
        <p>Diese Daten werden ausschließlich zur Erstellung und Übermittlung eines maßgeschneiderten Angebots genutzt.</p>

        <h2>4. Weitergabe von Daten an Dritte</h2>
        <p>Wir geben Ihre Daten grundsätzlich nicht ohne Ihre ausdrückliche Einwilligung an Dritte weiter. Eine Weitergabe kann ausnahmsweise erfolgen, wenn:</p>
        <ul>
          <li>dies zur Vertragserfüllung notwendig ist (z.B. an Installationspartner in Ihrer Region),</li>
          <li>wir gesetzlich dazu verpflichtet sind,</li>
          <li>wir berechtigte Interessen verfolgen und keine überwiegenden Interessen des Betroffenen entgegenstehen.</li>
        </ul>

        <h2>5. Cookies</h2>
        <p>Unsere Website verwendet technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Diese Cookies speichern keine personenbezogenen Daten und werden am Ende der Browsersitzung automatisch gelöscht.</p>
        <p>Wir setzen keine Tracking-Cookies oder Cookies von Drittanbietern zu Werbezwecken ein, ohne Ihre vorherige Einwilligung.</p>

        <h2>6. Hosting &amp; technische Infrastruktur</h2>
        <p>Unsere Website wird auf Servern in Deutschland gehostet. Alle übertragenen Daten werden verschlüsselt (SSL/TLS). Der Hostinganbieter hat keinen Zugriff auf die Inhalte Ihrer Anfragen.</p>

        <h2>7. Speicherdauer</h2>
        <p>Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck notwendig ist oder gesetzliche Aufbewahrungsfristen bestehen (max. 10 Jahre für steuerrelevante Unterlagen gemäß § 147 AO). Kontaktanfragen werden nach vollständiger Bearbeitung gelöscht.</p>

        <h2>8. Ihre Rechte als betroffene Person</h2>
        <p>Sie haben gemäß DSGVO folgende Rechte:</p>
        <ul>
          <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können jederzeit Auskunft über die zu Ihrer Person gespeicherten Daten verlangen.</li>
          <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger Daten verlangen.</li>
          <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
          <li><strong>Einschränkungsrecht (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung verlangen.</li>
          <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können Ihre Daten in einem gängigen Format erhalten.</li>
          <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der Verarbeitung Ihrer Daten jederzeit widersprechen.</li>
          <li><strong>Widerrufsrecht:</strong> Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</li>
        </ul>
        <p>Zur Ausübung Ihrer Rechte wenden Sie sich an: <a href="mailto:info@solarstack.de">info@solarstack.de</a></p>

        <h2>9. Beschwerderecht</h2>
        <p>Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren. In Schleswig-Holstein ist dies:</p>
        <p>
          <strong>Unabhängiges Landeszentrum für Datenschutz Schleswig-Holstein (ULD)</strong><br />
          Holstenstraße 98, 24103 Kiel<br />
          E-Mail: <a href="mailto:mail@datenschutzzentrum.de">mail@datenschutzzentrum.de</a><br />
          Web: <a href="https://www.datenschutzzentrum.de" target="_blank" rel="noopener noreferrer">www.datenschutzzentrum.de</a>
        </p>

        <h2>10. Datensicherheit</h2>
        <p>Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten gegen unbefugten Zugriff, Verlust oder Missbrauch zu schützen. Alle Datenübertragungen erfolgen verschlüsselt über HTTPS (SSL/TLS). Unsere Mitarbeiter sind zur Vertraulichkeit verpflichtet.</p>

        <h2>11. Änderungen dieser Datenschutzerklärung</h2>
        <p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren, um sie an geänderte Rechtslage oder Änderungen in unseren Leistungen anzupassen. Die jeweils aktuelle Version ist stets auf dieser Seite abrufbar.</p>
        <p><strong>Stand:</strong> April 2026</p>
      </div>
    </>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import ScrollReveal, { DropLetters } from '../components/ScrollReveal'
import ScrollFrames from '../components/ScrollFrames'

// Energy system data
const FLOW_MAP = {
  pv:       ['flow-pv', 'flow-grid'],
  wp:       ['flow-pv', 'flow-wp'],
  manager:  ['flow-pv', 'flow-wp', 'flow-speicher', 'flow-wallbox', 'flow-grid'],
  speicher: ['flow-pv', 'flow-speicher'],
  wallbox:  ['flow-pv', 'flow-wallbox'],
  glasfaser:['flow-glasfaser'],
}
const VISUAL_MAP = {
  pv: '.comp-pv-visual',
  wp: '.comp-wp-visual',
  manager: '.comp-manager-visual',
  speicher: '.comp-speicher-visual',
  wallbox: '.comp-wallbox-visual',
}

// Product tabs data
const TABS = [
  { id: 'manager', icon: '⚡', label: 'Energie\u00admanager' },
  { id: 'pv', icon: '☀️', label: 'Solar\u00admodul' },
  { id: 'wp', icon: '🌡️', label: 'Wärme\u00adpumpe' },
  { id: 'speicher', icon: '🔋', label: 'Strom\u00adspeicher' },
  { id: 'wallbox', icon: '🔌', label: 'Wallbox' },
  { id: 'notstrom', icon: '🛡️', label: 'Notstrom' },
  { id: 'glasfaser', icon: '🌐', label: 'Glasfaser' },
  { id: 'gas', icon: '🔥', label: 'Gas & Strom' },
  { id: 'telekom', icon: '📡', label: 'Telekommunikation' },
]

export default function Home() {
  // Hero slider
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    const slides = document.querySelectorAll('.hero-slide')
    if (slides.length < 2) return
    const timer = setInterval(() => {
      setCurrentSlide(prev => {
        slides[prev].classList.remove('active')
        const next = (prev + 1) % slides.length
        slides[next].classList.add('active')
        return next
      })
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  // Product tabs
  const [activeTab, setActiveTab] = useState('manager')

  // Energy system
  const [activeComp, setActiveComp] = useState(null)
  const [activeInfo, setActiveInfo] = useState('default')

  function handleComp(comp) {
    setActiveComp(comp)
    setActiveInfo(comp)
    // flows
    document.querySelectorAll('.flow').forEach(f => f.classList.remove('on'))
    ;(FLOW_MAP[comp] || []).forEach(cls => {
      const el = document.querySelector('.' + cls)
      if (el) el.classList.add('on')
    })
    // highlight
    document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'))
    const vis = document.querySelector(VISUAL_MAP[comp])
    if (vis) vis.classList.add('highlight')
  }

  // FAQ accordion
  const [openFaq, setOpenFaq] = useState(null)

  // Contact form
  const [chips, setChips] = useState(['Photovoltaik'])
  const [formSubmitted, setFormSubmitted] = useState(false)

  function toggleChip(label) {
    setChips(prev => prev.includes(label) ? prev.filter(x => x !== label) : [...prev, label])
  }

  return (
    <>
      <Head>
        <title>Solarstack — Solaranlagen &amp; Wärmepumpen aus einer Hand</title>
        <meta name="description" content="Photovoltaik und Wärmepumpen vom Profi. Unabhängig werden, sparen und die Umwelt schonen. Kostenloses Angebot in 2 Minuten." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-slides">
          <div className="hero-slide active" style={{ backgroundImage: "url('/images/hero-familie-solar-ev.png')" }}></div>
          <div className="hero-slide" style={{ backgroundImage: "url('/images/hero-familie-solar-wp.png')" }}></div>
          <div className="hero-slide" style={{ backgroundImage: "url('/images/hero-haus-solar-komplett.png')" }}></div>
          <div className="hero-slide" style={{ backgroundImage: "url('/images/hero-haus-solar-abend.png')" }}></div>
          <div className="hero-slide" style={{ backgroundImage: "url('/images/hero-familie-waermepumpe.png')" }}></div>
          <div className="hero-slide" style={{ backgroundImage: "url('/images/hero-smarthome-familie.png')" }}></div>
          <div className="hero-slide" style={{ backgroundImage: "url('/images/haus-winter.png')" }}></div>
          <div className="hero-slide" style={{ backgroundImage: "url('/images/wp-tech.png')" }}></div>
        </div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-announce">
            <span>120.000+ Haushalte vertrauen uns</span>
            <span>0 € Anzahlung</span>
            <span>Persönliche Beratung</span>
          </div>
          <span className="eyebrow" style={{ background: 'rgba(255,214,10,.18)', color: 'var(--accent)' }}>⚡ ALLES AUS EINER HAND</span>
          <h1><DropLetters text="Ihre Energiezukunft" /><br /><DropLetters text="beginnt hier" delay={0.5} /></h1>
          <ScrollReveal variant="fadeUp" delay={0.9} duration={0.9}>
            <p>Mit Solarstack werden Sie unabhängig von steigenden Strompreisen – Photovoltaik und Wärmepumpe komplett aus einer Hand, von Beratung bis Installation.</p>
          </ScrollReveal>
          <div className="hero-cta">
            <Link href="/kontakt" className="btn btn-primary">Jetzt Ersparnis berechnen →</Link>
            <a href="#produkte" className="btn btn-secondary">▶ Mehr erfahren</a>
          </div>
          <div className="hero-trust">
            <span>Kostenlos</span>
            <span>Unverbindlich</span>
            <span>In 2 Minuten ausgefüllt</span>
          </div>
        </div>
      </header>

      {/* ============ FEATURE STRIP ============ */}
      <div className="feature-strip">
        <div className="container feature-strip-inner">
          <Link href="/photovoltaik" className="fs-item"><span className="fs-icon">☀️</span><span className="fs-text">Photovoltaik</span></Link>
          <span className="fs-sep"></span>
          <Link href="/waermepumpe" className="fs-item"><span className="fs-icon">🌡️</span><span className="fs-text">Wärmepumpe</span></Link>
          <span className="fs-sep"></span>
          <Link href="/photovoltaik/wallbox" className="fs-item"><span className="fs-icon">🔌</span><span className="fs-text">Wallbox</span></Link>
          <span className="fs-sep"></span>
          <Link href="/glasfaser" className="fs-item"><span className="fs-icon">🌐</span><span className="fs-text">Glasfaser</span></Link>
          <span className="fs-sep"></span>
          <a href="#gas-strom" className="fs-item"><span className="fs-icon">🔥</span><span className="fs-text">Gas &amp; Strom</span></a>
        </div>
      </div>

      {/* ============ USP ============ */}
      <section>
        <div className="container">
          <ScrollReveal variant="drop" duration={0.9}>
            <div className="section-head">
              <span className="eyebrow">Warum Solarstack</span>
              <h2><DropLetters text="Energie endlich günstig" /></h2>
              <p>Über 120.000 zufriedene Haushalte vertrauen uns bereits. Regional, persönlich und zu fairen Konditionen.</p>
            </div>
          </ScrollReveal>
          <div className="usp-photo-grid">
            <div className="usp-photo-card">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" alt="Installateure-Team" />
              <div className="usp-check">✓</div>
              <h3>Regional &amp; persönlich</h3>
              <p>Unsere qualifizierten und regionalen Handwerker kommen zu Ihnen, um Ihre Solaranlage zu installieren.</p>
            </div>
            <div className="usp-photo-card">
              <ScrollFrames frameCount={50} basePath="/scroll-frames-haus/f" alt="Haus mit Solar, Wärmepumpe und E-Auto" aspectRatio="1/1" borderRadius={12} />
              <div className="usp-check">✓</div>
              <h3>5-in-1 Komplettpaket</h3>
              <p>Solaranlage, Wärmepumpe, Energiemanager, Speicher und Wallbox perfekt kombiniert.</p>
            </div>
            <div className="usp-photo-card">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Zufriedener Monteur" />
              <div className="usp-check">✓</div>
              <h3>In 6 Wochen fertig</h3>
              <p>Im Durchschnitt vergehen von Beratung bis zur installierten Energielösung nur 6 Wochen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ENERGIESYSTEM ============ */}
      <section className="energy-system">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Alles verbunden</span>
            <h2>Ihr Zuhause als eigenes Kraftwerk</h2>
            <p>Klicken Sie auf die Komponenten, um zu sehen wie der Energiefluss in Ihrem Haus funktioniert.</p>
          </div>
          <div className="energy-wrap">
            <div className="energy-svgbox">
              <svg className="energy-svg" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" aria-label="Energiesystem Haus">
                <defs>
                  <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#dbeeff"/><stop offset="100%" stopColor="#f0f6ff"/></linearGradient>
                  <linearGradient id="pvGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1b3a5e"/><stop offset="100%" stopColor="#0d1f36"/></linearGradient>
                  <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3a3a3a"/><stop offset="100%" stopColor="#1c1c1c"/></linearGradient>
                  <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fefefe"/><stop offset="100%" stopColor="#f0f2f4"/></linearGradient>
                  <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c8e6c9"/><stop offset="100%" stopColor="#a5d6a7"/></linearGradient>
                  <filter id="houseShad" x="-5%" y="-5%" width="115%" height="125%">
                    <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="rgba(0,0,0,0.12)"/>
                  </filter>
                  <clipPath id="roofClip"><polygon points="252,252 500,116 748,252"/></clipPath>
                </defs>
                <rect x="0" y="0" width="900" height="480" fill="url(#skyGrad)"/>
                <rect x="0" y="478" width="900" height="122" fill="url(#grassGrad)"/>
                <path d="M762,600 L800,480 L900,480 L900,600 Z" fill="#cfd8dc" opacity=".65"/>
                <ellipse cx="500" cy="488" rx="248" ry="10" fill="rgba(0,0,0,.12)"/>
                <rect x="76" y="178" width="6" height="326" fill="#9e9e9e" rx="2"/>
                <rect x="38" y="196" width="86" height="6" fill="#9e9e9e" rx="2"/>
                <rect x="38" y="226" width="86" height="6" fill="#9e9e9e" rx="2"/>
                <line x1="80" y1="200" x2="260" y2="254" stroke="#b0b0b0" strokeWidth="1.5" opacity=".8"/>
                <line x1="80" y1="228" x2="260" y2="270" stroke="#b0b0b0" strokeWidth="1.5" opacity=".8"/>
                <polygon points="258,250 500,118 742,250 742,480 258,480" fill="url(#wallGrad)" stroke="#d0d5dc" strokeWidth="2" filter="url(#houseShad)"/>
                <polygon points="252,252 500,116 748,252" fill="url(#roofGrad)"/>
                <line x1="500" y1="116" x2="252" y2="252" stroke="rgba(255,255,255,.07)" strokeWidth="2"/>
                <line x1="500" y1="116" x2="748" y2="252" stroke="rgba(255,255,255,.05)" strokeWidth="2"/>
                <g className="comp-pv-visual">
                  <polygon points="280,246 490,134 490,202 280,276" fill="url(#pvGrad)" clipPath="url(#roofClip)"/>
                  <line x1="338" y1="252" x2="490" y2="160" stroke="#2a4e7a" strokeWidth="1.2" opacity=".9" clipPath="url(#roofClip)"/>
                  <line x1="390" y1="264" x2="490" y2="186" stroke="#2a4e7a" strokeWidth="1.2" opacity=".9" clipPath="url(#roofClip)"/>
                  <line x1="440" y1="275" x2="490" y2="213" stroke="#2a4e7a" strokeWidth="1.2" opacity=".9" clipPath="url(#roofClip)"/>
                  <line x1="280" y1="252" x2="490" y2="150" stroke="#2a4e7a" strokeWidth="1.2" opacity=".9" clipPath="url(#roofClip)"/>
                  <line x1="280" y1="266" x2="490" y2="175" stroke="#2a4e7a" strokeWidth="1.2" opacity=".9" clipPath="url(#roofClip)"/>
                  <polygon points="280,246 490,134 490,202 280,276" fill="none" stroke="#FFD60A" strokeWidth="2.5" clipPath="url(#roofClip)"/>
                  <polygon points="292,246 342,220 342,234 292,262" fill="white" opacity=".13" clipPath="url(#roofClip)"/>
                  <ellipse cx="366" cy="194" rx="7" ry="4" fill="white" opacity=".16" transform="rotate(-30 366 194)" clipPath="url(#roofClip)"/>
                </g>
                <g className="comp-pv-visual-r">
                  <polygon points="510,134 720,246 720,276 510,202" fill="url(#pvGrad)" clipPath="url(#roofClip)"/>
                  <line x1="560" y1="152" x2="720" y2="238" stroke="#2a4e7a" strokeWidth="1.2" opacity=".9" clipPath="url(#roofClip)"/>
                  <line x1="616" y1="170" x2="720" y2="256" stroke="#2a4e7a" strokeWidth="1.2" opacity=".9" clipPath="url(#roofClip)"/>
                  <line x1="510" y1="162" x2="720" y2="260" stroke="#2a4e7a" strokeWidth="1.2" opacity=".9" clipPath="url(#roofClip)"/>
                  <line x1="510" y1="181" x2="700" y2="270" stroke="#2a4e7a" strokeWidth="1.2" opacity=".9" clipPath="url(#roofClip)"/>
                  <polygon points="510,134 720,246 720,276 510,202" fill="none" stroke="#FFD60A" strokeWidth="2.5" clipPath="url(#roofClip)"/>
                  <polygon points="518,138 562,160 562,174 518,154" fill="white" opacity=".10" clipPath="url(#roofClip)"/>
                </g>
                <rect x="605" y="140" width="30" height="58" fill="#4a4a4a" rx="2"/>
                <rect x="601" y="136" width="38" height="10" fill="#3a3a3a" rx="2"/>
                <rect x="605" y="137" width="14" height="2" fill="rgba(255,255,255,.18)" rx="1"/>
                <rect x="305" y="314" width="94" height="98" fill="#fffde7" rx="3"/>
                <rect x="305" y="314" width="94" height="98" fill="none" stroke="#b8bfc8" strokeWidth="2.5" rx="3"/>
                <line x1="352" y1="314" x2="352" y2="412" stroke="#c8cfd8" strokeWidth="1.5"/>
                <line x1="305" y1="362" x2="399" y2="362" stroke="#c8cfd8" strokeWidth="1.5"/>
                <rect x="305" y="314" width="94" height="98" fill="rgba(255,214,10,.10)" rx="3"/>
                <rect x="299" y="410" width="106" height="7" fill="#d8dde4" rx="2"/>
                <rect x="456" y="314" width="94" height="98" fill="#fffde7" rx="3"/>
                <rect x="456" y="314" width="94" height="98" fill="none" stroke="#b8bfc8" strokeWidth="2.5" rx="3"/>
                <line x1="503" y1="314" x2="503" y2="412" stroke="#c8cfd8" strokeWidth="1.5"/>
                <line x1="456" y1="362" x2="550" y2="362" stroke="#c8cfd8" strokeWidth="1.5"/>
                <rect x="456" y="314" width="94" height="98" fill="rgba(255,214,10,.10)" rx="3"/>
                <rect x="450" y="410" width="106" height="7" fill="#d8dde4" rx="2"/>
                <rect x="587" y="352" width="68" height="128" fill="#5d4037" rx="4 4 0 0"/>
                <rect x="597" y="362" width="23" height="58" fill="#4a3328" rx="2"/>
                <rect x="624" y="362" width="23" height="58" fill="#4a3328" rx="2"/>
                <circle cx="620" cy="440" r="4" fill="#FFD60A"/>
                <rect x="578" y="478" width="88" height="6" fill="#c8cfd8" rx="2"/>
                <g className="comp-wp-visual">
                  <ellipse cx="204" cy="486" rx="50" ry="5" fill="rgba(0,0,0,.12)"/>
                  <rect x="164" y="480" width="15" height="8" fill="#9e9e9e" rx="2"/>
                  <rect x="218" y="480" width="15" height="8" fill="#9e9e9e" rx="2"/>
                  <rect x="158" y="386" width="94" height="96" fill="#eceff1" rx="8" stroke="#cfd8dc" strokeWidth="1.5"/>
                  <rect x="158" y="384" width="94" height="13" fill="#dde0e4" rx="6 6 0 0"/>
                  <rect x="165" y="402" width="62" height="62" fill="#dde1e7" rx="6"/>
                  <circle cx="196" cy="433" r="27" fill="#cdd3d9" stroke="#b0b8c0" strokeWidth="2"/>
                  <circle cx="196" cy="433" r="17" fill="#bdc4cb"/>
                  <ellipse cx="196" cy="419" rx="6" ry="12" fill="#a8b1b9" transform="rotate(0 196 433)"/>
                  <ellipse cx="196" cy="419" rx="6" ry="12" fill="#a8b1b9" transform="rotate(72 196 433)"/>
                  <ellipse cx="196" cy="419" rx="6" ry="12" fill="#a8b1b9" transform="rotate(144 196 433)"/>
                  <ellipse cx="196" cy="419" rx="6" ry="12" fill="#a8b1b9" transform="rotate(216 196 433)"/>
                  <ellipse cx="196" cy="419" rx="6" ry="12" fill="#a8b1b9" transform="rotate(288 196 433)"/>
                  <circle cx="196" cy="433" r="5" fill="#8d9ba5"/>
                  <rect x="232" y="406" width="14" height="4" fill="#bec6cd" rx="2"/>
                  <rect x="232" y="414" width="14" height="4" fill="#bec6cd" rx="2"/>
                  <rect x="232" y="422" width="14" height="4" fill="#bec6cd" rx="2"/>
                  <rect x="232" y="430" width="14" height="4" fill="#bec6cd" rx="2"/>
                  <rect x="232" y="438" width="14" height="4" fill="#bec6cd" rx="2"/>
                  <rect x="232" y="446" width="14" height="4" fill="#bec6cd" rx="2"/>
                  <rect x="232" y="454" width="14" height="4" fill="#bec6cd" rx="2"/>
                  <rect x="165" y="466" width="62" height="12" fill="#d5dce4" rx="2"/>
                  <circle cx="244" cy="392" r="5" fill="#4caf50"/>
                  <circle cx="244" cy="392" r="2.5" fill="#a5d6a7" opacity=".8"/>
                  <rect x="252" y="414" width="20" height="5" fill="#b0bec5" rx="2"/>
                  <rect x="252" y="428" width="20" height="5" fill="#b0bec5" rx="2"/>
                </g>
                <g className="comp-speicher-visual">
                  <rect x="742" y="332" width="56" height="148" fill="#1c2433" rx="5" stroke="#2e3a4a" strokeWidth="1.5"/>
                  <rect x="757" y="325" width="16" height="9" fill="#374151" rx="2"/>
                  <rect x="749" y="342" width="42" height="18" fill="#FFD60A" rx="3"/>
                  <rect x="749" y="364" width="42" height="18" fill="#FFD60A" opacity=".78" rx="3"/>
                  <rect x="749" y="386" width="42" height="18" fill="#FFD60A" opacity=".48" rx="3"/>
                  <rect x="749" y="408" width="42" height="18" fill="#334155" rx="3"/>
                  <rect x="749" y="430" width="42" height="10" fill="#243040" rx="2"/>
                  <rect x="749" y="444" width="42" height="10" fill="#243040" rx="2"/>
                  <rect x="749" y="458" width="42" height="10" fill="#243040" rx="2"/>
                  <circle cx="770" cy="476" r="4.5" fill="#4caf50"/>
                  <circle cx="770" cy="476" r="2" fill="#a5d6a7" opacity=".8"/>
                  <rect x="746" y="478" width="48" height="6" fill="#111a26" rx="2"/>
                </g>
                <g className="comp-manager-visual">
                  <rect x="415" y="428" width="78" height="52" fill="#1a1a1a" rx="8"/>
                  <rect x="423" y="436" width="62" height="34" fill="#FFD60A" rx="4"/>
                  <rect x="427" y="440" width="26" height="4" fill="rgba(0,0,0,.45)" rx="1"/>
                  <rect x="427" y="448" width="18" height="4" fill="rgba(0,0,0,.30)" rx="1"/>
                  <rect x="427" y="456" width="34" height="4" fill="rgba(0,0,0,.20)" rx="1"/>
                  <rect x="462" y="452" width="5" height="8" fill="rgba(0,0,0,.35)" rx="1"/>
                  <rect x="469" y="447" width="5" height="13" fill="rgba(0,0,0,.35)" rx="1"/>
                  <rect x="476" y="450" width="5" height="10" fill="rgba(0,0,0,.35)" rx="1"/>
                  <circle cx="454" cy="472" r="4" fill="#22c55e"/>
                  <rect x="427" y="480" width="54" height="4" fill="#222" rx="2"/>
                </g>
                <circle cx="820" cy="72" r="44" fill="rgba(255,214,10,.15)"/>
                <circle cx="820" cy="72" r="32" fill="#FFD60A"/>
                <circle cx="820" cy="72" r="22" fill="#FFE040"/>
                <line x1="820" y1="26" x2="820" y2="12" stroke="#FFD60A" strokeWidth="3.5" strokeLinecap="round"/>
                <line x1="820" y1="118" x2="820" y2="132" stroke="#FFD60A" strokeWidth="3.5" strokeLinecap="round"/>
                <line x1="774" y1="72" x2="760" y2="72" stroke="#FFD60A" strokeWidth="3.5" strokeLinecap="round"/>
                <line x1="866" y1="72" x2="880" y2="72" stroke="#FFD60A" strokeWidth="3.5" strokeLinecap="round"/>
                <line x1="787" y1="39" x2="777" y2="29" stroke="#FFD60A" strokeWidth="3" strokeLinecap="round"/>
                <line x1="853" y1="105" x2="863" y2="115" stroke="#FFD60A" strokeWidth="3" strokeLinecap="round"/>
                <line x1="853" y1="39" x2="863" y2="29" stroke="#FFD60A" strokeWidth="3" strokeLinecap="round"/>
                <line x1="787" y1="105" x2="777" y2="115" stroke="#FFD60A" strokeWidth="3" strokeLinecap="round"/>
                <g className="comp-wallbox-visual">
                  <ellipse cx="854" cy="488" rx="58" ry="6" fill="rgba(0,0,0,.15)"/>
                  <rect x="796" y="450" width="116" height="36" fill="#37474f" rx="8"/>
                  <path d="M812,450 L822,424 L878,424 L888,450 Z" fill="#455a64"/>
                  <path d="M888,450 L882,430 L860,427 L862,450 Z" fill="#80deea" opacity=".75"/>
                  <path d="M812,450 L820,430 L840,427 L840,450 Z" fill="#80deea" opacity=".65"/>
                  <rect x="840" y="427" width="4" height="23" fill="#37474f"/>
                  <rect x="796" y="454" width="9" height="18" fill="#ef9a9a" rx="2" opacity=".9"/>
                  <rect x="903" y="454" width="9" height="18" fill="#fffde7" rx="2" opacity=".9"/>
                  <circle cx="820" cy="486" r="14" fill="#263238"/>
                  <circle cx="820" cy="486" r="8" fill="#455a64"/>
                  <circle cx="820" cy="486" r="3" fill="#90a4ae"/>
                  <circle cx="878" cy="486" r="14" fill="#263238"/>
                  <circle cx="878" cy="486" r="8" fill="#455a64"/>
                  <circle cx="878" cy="486" r="3" fill="#90a4ae"/>
                  <circle cx="800" cy="462" r="4.5" fill="#FFD60A"/>
                  <path d="M782,456 Q788,466 796,463" stroke="#FFD60A" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
                </g>
                <rect x="752" y="414" width="32" height="58" fill="#2a2a2a" rx="5"/>
                <rect x="758" y="422" width="20" height="28" fill="#FFD60A" rx="3"/>
                <rect x="761" y="426" width="14" height="3" fill="rgba(0,0,0,.4)" rx="1"/>
                <rect x="761" y="433" width="10" height="3" fill="rgba(0,0,0,.3)" rx="1"/>
                <circle cx="768" cy="460" r="4.5" fill="#4caf50"/>
                <circle cx="768" cy="460" r="2" fill="#a5d6a7" opacity=".8"/>
                <rect x="760" y="472" width="12" height="4" fill="#1a1a1a" rx="1"/>
                <g className="comp-glasfaser-visual">
                  <rect x="28" y="500" width="58" height="28" fill="#0046be" rx="5" stroke="#1a5eff" strokeWidth="1"/>
                  <rect x="33" y="505" width="12" height="8" fill="#3b82f6" rx="1.5"/>
                  <rect x="49" y="505" width="12" height="8" fill="#3b82f6" rx="1.5"/>
                  <rect x="65" y="505" width="12" height="8" fill="#3b82f6" rx="1.5"/>
                  <rect x="33" y="516" width="44" height="3" fill="#1a5eff" rx="1" opacity=".5"/>
                  <line x1="86" y1="514" x2="258" y2="470" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 4" opacity=".7"/>
                  <circle cx="86" cy="514" r="3" fill="#3b82f6"/>
                </g>
                <path className="flow flow-pv" d="M490,166 Q490,300 454,428" stroke="#FFD60A" strokeWidth="3" fill="none" strokeDasharray="8 6" opacity="0"/>
                <path className="flow flow-wp" d="M252,428 L415,450" stroke="#FFD60A" strokeWidth="3" fill="none" strokeDasharray="8 6" opacity="0"/>
                <path className="flow flow-speicher" d="M493,454 L742,400" stroke="#FFD60A" strokeWidth="3" fill="none" strokeDasharray="8 6" opacity="0"/>
                <path className="flow flow-wallbox" d="M493,460 L752,450" stroke="#FFD60A" strokeWidth="3" fill="none" strokeDasharray="8 6" opacity="0"/>
                <path className="flow flow-grid" d="M260,268 L82,218" stroke="#FFD60A" strokeWidth="3" fill="none" strokeDasharray="8 6" opacity="0"/>
                <path className="flow flow-glasfaser" d="M86,514 L258,470" stroke="#3b82f6" strokeWidth="3" fill="none" strokeDasharray="8 6" opacity="0"/>
              </svg>

              <button className={`comp-btn pos-pv${activeComp === 'pv' ? ' active' : ''}`} onClick={() => handleComp('pv')}>
                <span className="comp-icon">☀</span><span className="comp-label">Photovoltaik</span>
              </button>
              <button className={`comp-btn pos-wp${activeComp === 'wp' ? ' active' : ''}`} onClick={() => handleComp('wp')}>
                <span className="comp-icon">🌬</span><span className="comp-label">Wärmepumpe</span>
              </button>
              <button className={`comp-btn pos-manager${activeComp === 'manager' ? ' active' : ''}`} onClick={() => handleComp('manager')}>
                <span className="comp-icon">📱</span><span className="comp-label">Energiemanager</span>
              </button>
              <button className={`comp-btn pos-speicher${activeComp === 'speicher' ? ' active' : ''}`} onClick={() => handleComp('speicher')}>
                <span className="comp-icon">🔋</span><span className="comp-label">Stromspeicher</span>
              </button>
              <button className={`comp-btn pos-wallbox${activeComp === 'wallbox' ? ' active' : ''}`} onClick={() => handleComp('wallbox')}>
                <span className="comp-icon">🚗</span><span className="comp-label">E-Mobilität</span>
              </button>
              <button className={`comp-btn pos-glasfaser${activeComp === 'glasfaser' ? ' active' : ''}`} onClick={() => handleComp('glasfaser')}>
                <span className="comp-icon">🌐</span><span className="comp-label">Glasfaser</span>
              </button>
            </div>

            <div className="energy-info">
              <div className={`info-card${activeInfo === 'default' ? ' active' : ''}`} data-info="default">
                <h3>Wählen Sie eine Komponente</h3>
                <p>Klicken Sie auf eine der gelben Kacheln, um mehr über die Funktion im Gesamtsystem zu erfahren.</p>
              </div>
              <div className={`info-card${activeInfo === 'pv' ? ' active' : ''}`} data-info="pv">
                <h3>☀ Photovoltaik</h3>
                <p>Ihre Solarmodule fangen das Sonnenlicht ein und erzeugen sauberen Strom. Dieser fließt zuerst in Ihr Haus, dann in den Speicher – und nur der Überschuss ins Netz.</p>
                <ul className="feature-list"><li>Bis zu 450 Wp pro Modul</li><li>25 Jahre Leistungsgarantie</li></ul>
              </div>
              <div className={`info-card${activeInfo === 'wp' ? ' active' : ''}`} data-info="wp">
                <h3>🌬 Wärmepumpe</h3>
                <p>Die Wärmepumpe nutzt den Solarstrom, um aus Umgebungsluft Heizwärme zu gewinnen – 4x effizienter als eine Gasheizung und mit bis zu 70 % Förderung.</p>
                <ul className="feature-list"><li>JAZ bis 4,0 – 4x effizienter</li><li>Bis 70 % staatliche Förderung</li></ul>
              </div>
              <div className={`info-card${activeInfo === 'manager' ? ' active' : ''}`} data-info="manager">
                <h3>📱 Energiemanager</h3>
                <p>Das Herz des Systems: Der Energiemanager verteilt den Strom intelligent – zum Haus, zum Speicher, zur Wallbox oder ins Netz. Live-Übersicht per App.</p>
                <ul className="feature-list"><li>Automatische Strom-Verteilung</li><li>App mit Live-Energieübersicht</li></ul>
              </div>
              <div className={`info-card${activeInfo === 'speicher' ? ' active' : ''}`} data-info="speicher">
                <h3>🔋 Stromspeicher</h3>
                <p>Der Speicher puffert tagsüber produzierten Solarstrom für die Abend- und Nachtstunden. So erhöhen Sie Ihren Autarkiegrad auf bis zu 90 %.</p>
                <ul className="feature-list"><li>Modular 5–20 kWh</li><li>Bis 90 % Autarkie</li></ul>
              </div>
              <div className={`info-card${activeInfo === 'wallbox' ? ' active' : ''}`} data-info="wallbox">
                <h3>🚗 E-Mobilität</h3>
                <p>Laden Sie Ihr E-Auto mit eigenem Solarstrom – bis zu 4x günstiger als Benzin. Die Wallbox nutzt vorrangig PV-Überschuss.</p>
                <ul className="feature-list"><li>Bis 22 kW Ladeleistung</li><li>PV-Überschussladen</li></ul>
              </div>
              <div className={`info-card${activeInfo === 'glasfaser' ? ' active' : ''}`} data-info="glasfaser">
                <h3>🌐 Glasfaser</h3>
                <p>Glasfaser ist die Grundlage Ihres vernetzten Energiesystems. Energiemanager, PV-App und Wärmepumpensteuerung laufen nur mit stabilem, schnellem Internet zuverlässig.</p>
                <ul className="feature-list"><li>Bis 1.000 Mbit/s – stabil &amp; latenzarm</li><li>Basis für Energiemanager &amp; Smart Home</li></ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS TABS ============ */}
      <section id="produkte" className="ptabs-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">🛒 UNSER KATALOG</span>
            <h2>Die Technik hinter Ihrer Unabhängigkeit</h2>
            <p>Wir verbauen nur Premium-Komponenten führender Hersteller – vom Solarmodul bis zum Energiemanager.</p>
          </div>
          <div className="ptabs-nav" role="tablist">
            {TABS.map(t => (
              <button
                key={t.id}
                className={`ptab${activeTab === t.id ? ' active' : ''}`}
                role="tab"
                aria-selected={activeTab === t.id}
                onClick={() => setActiveTab(t.id)}
              >
                <span className="ptab-icon">{t.icon}</span>
                <span className="ptab-label" dangerouslySetInnerHTML={{ __html: t.label }} />
              </button>
            ))}
          </div>

          <div className={`ptab-panel${activeTab === 'manager' ? ' active' : ''}`}>
            <div className="ptab-photo">
              <img src="https://images.pexels.com/photos/7688374/pexels-photo-7688374.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Energiemanager Smart Home App" />
              <div className="ptab-photo-overlay"><span className="ptab-model">EcoFlow PowerOcean</span></div>
            </div>
            <div className="ptab-content">
              <span className="ptab-tag">KI-gesteuert</span>
              <h3>Energie&shy;manager</h3>
              <p>Ein fest installiertes Tablet und eine App zeigen alle Energieflüsse live und verteilen den Strom automatisch nach Preis, Sonne und Speicherstand.</p>
              <ul className="ptab-features">
                <li>Automatische Strom-Verteilung im Haushalt</li>
                <li>Live-App mit Energie-Übersicht &amp; Prognosen</li>
                <li>Steuert Haus, Speicher, Wallbox und Wärmepumpe</li>
              </ul>
              <div className="ptab-actions">
                <Link href="/kontakt" className="btn btn-primary">Produkt anfragen</Link>
                <a href="#" className="btn btn-outline">📄 Datenblatt</a>
              </div>
            </div>
          </div>

          <div className={`ptab-panel${activeTab === 'pv' ? ' active' : ''}`}>
            <div className="ptab-photo">
              <img src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Aiko Neostar Solarmodule auf Dach" />
              <div className="ptab-photo-overlay"><span className="ptab-model">Aiko Neostar 465W</span></div>
            </div>
            <div className="ptab-content">
              <span className="ptab-tag">30 Jahre Garantie</span>
              <h3>PV-Modul</h3>
              <p>Das Aiko Neostar 465W N-Type ABC Solarmodul überzeugt mit außergewöhnlich hoher Leistung, langer Lebensdauer und 30 Jahren Leistungsgarantie.</p>
              <ul className="ptab-features">
                <li>465 W Leistung pro Modul</li>
                <li>30 Jahre Leistungsgarantie</li>
                <li>Bifazial, Glas-Glas, Brandschutzklasse A</li>
              </ul>
              <div className="ptab-actions">
                <Link href="/photovoltaik" className="btn btn-primary">Mehr erfahren</Link>
                <a href="#" className="btn btn-outline">📄 Datenblatt</a>
              </div>
            </div>
          </div>

          <div className={`ptab-panel${activeTab === 'wp' ? ' active' : ''}`}>
            <div className="ptab-photo">
              <img src="https://images.pexels.com/photos/2224842/pexels-photo-2224842.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Bosch Compress Wärmepumpe Außeneinheit" />
              <div className="ptab-photo-overlay"><span className="ptab-model">Bosch Compress 5800i AW</span></div>
            </div>
            <div className="ptab-content">
              <span className="ptab-tag">SCOP bis 4,6</span>
              <h3>Wärme&shy;pumpe</h3>
              <p>Leise Luft-Wasser-Wärmepumpe mit natürlichem Kältemittel R290. Heizung und Warmwasser effizient – auch bei −20 °C zuverlässig.</p>
              <ul className="ptab-features">
                <li>Effizienz SCOP bis 4,6</li>
                <li>Leiser als Sprechlautstärke (35 dB)</li>
                <li>Natürliches Kältemittel R290 – zukunftssicher</li>
              </ul>
              <div className="ptab-actions">
                <Link href="/waermepumpe" className="btn btn-primary">Mehr erfahren</Link>
                <a href="#" className="btn btn-outline">📄 Datenblatt</a>
              </div>
            </div>
          </div>

          <div className={`ptab-panel${activeTab === 'speicher' ? ' active' : ''}`}>
            <div className="ptab-photo">
              <img src="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=900" alt="EcoFlow PowerOcean Heimspeicher" />
              <div className="ptab-photo-overlay"><span className="ptab-model">EcoFlow PowerOcean</span></div>
            </div>
            <div className="ptab-content">
              <span className="ptab-tag">Modular erweiterbar</span>
              <h3>Strom&shy;speicher</h3>
              <p>Ihr erweiterbarer Heimspeicher mit integriertem Hybridwechselrichter. Läuft auch bei Kälte stabil und liefert viele Jahre verlässlich Strom.</p>
              <ul className="ptab-features">
                <li>Bis 45 kWh nutzbare Speicherenergie</li>
                <li>Ca. 6.000 Ladezyklen Lebensdauer</li>
                <li>Bis 15 Jahre täglicher Betrieb</li>
              </ul>
              <div className="ptab-actions">
                <Link href="/kontakt" className="btn btn-primary">Produkt anfragen</Link>
                <a href="#" className="btn btn-outline">📄 Datenblatt</a>
              </div>
            </div>
          </div>

          <div className={`ptab-panel${activeTab === 'wallbox' ? ' active' : ''}`}>
            <div className="ptab-photo">
              <img src="https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Wallbox PowerPulse 2" />
              <div className="ptab-photo-overlay"><span className="ptab-model">PowerPulse 2</span></div>
            </div>
            <div className="ptab-content">
              <span className="ptab-tag">11 kW Ladeleistung</span>
              <h3>Wallbox</h3>
              <p>Smartes PV-Überschussladen für Ihr E-Auto – gesteuert per App und voll integriert ins Energiesystem.</p>
              <ul className="ptab-features">
                <li>11 kW schnelles Laden zuhause</li>
                <li>Nutzt PV-Überschussstrom vorrangig</li>
                <li>Voll integriert ins Gesamtenergiesystem</li>
              </ul>
              <div className="ptab-actions">
                <Link href="/kontakt" className="btn btn-primary">Produkt anfragen</Link>
                <a href="#" className="btn btn-outline">📄 Datenblatt</a>
              </div>
            </div>
          </div>

          <div className={`ptab-panel${activeTab === 'notstrom' ? ' active' : ''}`}>
            <div className="ptab-photo">
              <img src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Notstrom Absicherung" />
              <div className="ptab-photo-overlay"><span className="ptab-model">Automatische Umschaltung</span></div>
            </div>
            <div className="ptab-content">
              <span className="ptab-tag">&lt; 1 Sekunde</span>
              <h3>Notstrom</h3>
              <p>Bei Netzausfall schaltet das System in unter einer Sekunde automatisch auf Inselbetrieb – Ihr Haus bleibt dreiphasig versorgt.</p>
              <ul className="ptab-features">
                <li>Umschaltzeit unter 1 Sekunde</li>
                <li>Haus bleibt dreiphasig weiterversorgt</li>
                <li>PV und Speicher laufen im Inselbetrieb</li>
              </ul>
              <div className="ptab-actions">
                <Link href="/kontakt" className="btn btn-primary">Produkt anfragen</Link>
                <a href="#" className="btn btn-outline">📄 Datenblatt</a>
              </div>
            </div>
          </div>

          <div className={`ptab-panel${activeTab === 'glasfaser' ? ' active' : ''}`}>
            <div className="ptab-photo">
              <img src="/images/app-fam2.png" alt="Glasfaser Smart Home Familie" />
              <div className="ptab-photo-overlay"><span className="ptab-model">Bis 1.000 Mbit/s</span></div>
            </div>
            <div className="ptab-content">
              <span className="ptab-tag">FTTH – echtes Glasfaser</span>
              <h3>Glasfaser</h3>
              <p>Glasfaser direkt bis ins Haus – stabiles Internet für Smart Home, Streaming, Gaming und Homeoffice. Die ideale Grundlage für Ihr vernetztes Energiesystem.</p>
              <ul className="ptab-features">
                <li>Bis 1.000 Mbit/s Download &amp; 500 Mbit/s Upload</li>
                <li>Latenz unter 5 ms – perfekt für Smart Home</li>
                <li>Inklusive Router &amp; kostenlose Installation</li>
              </ul>
              <div className="ptab-actions">
                <Link href="/glasfaser" className="btn btn-primary">Mehr erfahren</Link>
                <Link href="/kontakt" className="btn btn-outline">📋 Verfügbarkeit prüfen</Link>
              </div>
            </div>
          </div>

          <div className={`ptab-panel${activeTab === 'gas' ? ' active' : ''}`}>
            <div className="ptab-photo">
              <img src="/images/stromrechnung.png" alt="Gas und Strom Anbieter wechseln sparen" />
              <div className="ptab-photo-overlay"><span className="ptab-model">Bis 30 % günstiger</span></div>
            </div>
            <div className="ptab-content">
              <span className="ptab-tag">Sofort wechseln</span>
              <h3>Gas &amp; Strom</h3>
              <p>Die meisten Haushalte zahlen deutlich zu viel – weil sie nie gewechselt haben. Mit unserem Wechselservice sparen Sie durchschnittlich 30 % jährlich – mehr ist möglich.</p>
              <ul className="ptab-features">
                <li>Durchschnittlich 30 % günstiger – mehr ist möglich</li>
                <li>Wir übernehmen Kündigung &amp; Anmeldung komplett</li>
                <li>Kein Tag ohne Versorgung – nahtloser Übergang</li>
              </ul>
              <div className="ptab-actions">
                <Link href="/kontakt" className="btn btn-primary">Jetzt Tarif prüfen</Link>
                <a href="#gas-strom" className="btn btn-outline">Mehr erfahren</a>
              </div>
            </div>
          </div>

          <div className={`ptab-panel${activeTab === 'telekom' ? ' active' : ''}`}>
            <div className="ptab-photo">
              <img src="/images/app-fam.png" alt="Telekommunikation Glasfaser Internet" />
              <div className="ptab-photo-overlay"><span className="ptab-model">Bis 1.000 Mbit/s</span></div>
            </div>
            <div className="ptab-content">
              <span className="ptab-tag">Glasfaser &amp; DSL</span>
              <h3>Telekommunikation</h3>
              <p>Schnelles Internet für Ihr Smart Home – als perfekte Ergänzung zu Ihrer Energielösung. Wir vergleichen die besten Tarife und schalten Sie kostenlos um.</p>
              <ul className="ptab-features">
                <li>Glasfaser bis 1.000 Mbit/s – stabil &amp; zukunftssicher</li>
                <li>Tarifvergleich &amp; kostenloser Anbieterwechsel</li>
                <li>Ideal als Grundlage für Ihren Energiemanager</li>
              </ul>
              <div className="ptab-actions">
                <Link href="/glasfaser" className="btn btn-primary">Glasfaser anfragen</Link>
                <Link href="/kontakt" className="btn btn-outline">Tarif vergleichen</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SAVINGS ============ */}
      <section>
        <div className="container">
          <div className="savings">
            <div>
              <span className="eyebrow" style={{ background: 'rgba(255,214,10,.15)', color: 'var(--accent)' }}>💰 Ihre Ersparnis</span>
              <h2>Bis zu 70 % weniger Energiekosten</h2>
              <p>Mit einer kombinierten Solaranlage und Wärmepumpe sparen durchschnittliche Haushalte über die Laufzeit mehrere zehntausend Euro – und schützen gleichzeitig die Umwelt.</p>
              <Link href="/kontakt" className="btn btn-primary">Ersparnis berechnen →</Link>
            </div>
            <div className="stats">
              <div className="stat"><span className="stat-num">70%</span><span className="stat-label">Weniger Stromkosten</span></div>
              <div className="stat"><span className="stat-num">25J</span><span className="stat-label">Garantie auf Module</span></div>
              <div className="stat"><span className="stat-num">6W</span><span className="stat-label">Bis zur Installation</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ROW 1: PV + WP Synergie ============ */}
      <section className="smart-section">
        <ScrollReveal variant="slideLeft" duration={1.0}>
        <div className="container split-grid">
          <div>
            <span className="marker">Smart kombinieren</span>
            <h2 className="big-title">Photovoltaikanlagen &amp; Wärmepumpen:<br />Eine lukrative <span className="accent-word">Synergie.</span></h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '14px' }}>Wer eigenen Solarstrom produziert und eine Wärmepumpe betreibt, senkt seine Energiekosten um bis zu 75 % — dauerhaft und unabhängig von steigenden Preisen.</p>
            <ul className="feature-list">
              <li>Solaranlage deckt den Strombedarf der Wärmepumpe</li>
              <li>Unabhängig von Strom-, Gas- &amp; Ölpreisen</li>
              <li>Mehr Geld für Familie, Urlaub &amp; das echte Leben</li>
            </ul>
            <Link href="/kontakt" className="btn btn-primary" style={{ marginTop: '20px' }}>Jetzt Ersparnis berechnen →</Link>
          </div>
          <div>
            <ScrollFrames frameCount={60} basePath="/scroll-frames/f" alt="Familie vor Haus mit Solaranlage" className="section-img" />
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ============ ROW 2: Wärmepumpe Detail ============ */}
      <section className="deep-section">
        <ScrollReveal variant="slideRight" duration={1.0}>
        <div className="container split-grid">
          <div>
            <ScrollFrames frameCount={60} basePath="/scroll-frames-wp/f" alt="Familie mit Wärmepumpe" className="section-img" />
          </div>
          <div>
            <span className="eyebrow">Wärmepumpen</span>
            <h2 className="big-title">Umweltfreundlich heizen mit Bosch Compress 5800i AW</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '14px' }}>Testsieger bei Stiftung Warentest. Heizt effizient, leise und mit natürlichem Kältemittel – auch bei −20 °C. Bis zu 70 % staatliche Förderung, wir beantragen alles für Sie.</p>
            <ul className="arrow-list">
              <li>Bis zu 70 % Förderung – wir kümmern uns um alles</li>
              <li>Leiser als Sprechlautstärke (SILENT plus Technologie)</li>
              <li>Kältemittel R290 – umweltfreundlich &amp; zukunftssicher</li>
            </ul>
            <Link href="/waermepumpe" className="btn btn-primary" style={{ marginTop: '20px' }}>Mehr zur Wärmepumpe →</Link>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ============ ROW 3: Gas & Strom ============ */}
      <section id="gas-strom" className="smart-section">
        <ScrollReveal variant="slideLeft" duration={1.0}>
        <div className="container split-grid">
          <div>
            <span className="eyebrow">Gas &amp; Strom</span>
            <h2 className="big-title">Durchschnittlich 30 % sparen –<br />mehr ist möglich.</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '14px' }}>Die meisten Familien wissen es nicht: Wer nie seinen Gas- oder Stromanbieter gewechselt hat, zahlt beim teuren Grundversorger durchschnittlich 30 % mehr als nötig – oft noch mehr. Wir übernehmen den Wechsel — ohne Aufwand, ohne Unterbrechung.</p>
            <ul className="feature-list">
              <li>Durchschnittlich 30 % günstigere Tarife – mehr ist möglich</li>
              <li>Wir kündigen &amp; melden an – Sie tun gar nichts</li>
              <li>Kein Tag ohne Strom oder Gas – nahtloser Übergang</li>
            </ul>
            <Link href="/kontakt" className="btn btn-primary" style={{ marginTop: '20px' }}>Jetzt Tarif prüfen →</Link>
          </div>
          <div>
            <img src="/images/stromrechnung.png" alt="Gas und Strom Tarif wechseln sparen" className="section-img" />
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ============ ROW 4: Glasfaser ============ */}
      <section className="deep-section">
        <ScrollReveal variant="slideRight" duration={1.0}>
        <div className="container split-grid">
          <div>
            <ScrollFrames frameCount={60} basePath="/scroll-frames-gf/f" alt="Familie mit Glasfaser Internet Smart Home" className="section-img" />
          </div>
          <div>
            <span className="eyebrow">Glasfaser</span>
            <h2 className="big-title">Internet so schnell wie Licht – direkt bis ins Haus</h2>
            <p style={{ color: 'var(--gray-700)', marginBottom: '14px' }}>Glasfaser ist die Grundlage für Ihr smartes Zuhause. Energiemanager, PV-App und Wärmepumpensteuerung laufen zuverlässig nur mit stabilem, schnellem Internet. Wir verlegen und aktivieren Ihren Anschluss komplett.</p>
            <ul className="arrow-list">
              <li>Bis 1.000 Mbit/s – stabil, latenzarm, zukunftssicher</li>
              <li>Inklusive Router, Installation &amp; Anbieterwechsel</li>
              <li>Perfekte Basis für Ihr Energie-Smarthome</li>
            </ul>
            <Link href="/glasfaser" className="btn btn-primary" style={{ marginTop: '20px' }}>Mehr zu Glasfaser →</Link>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ============ PROCESS ============ */}
      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">So einfach geht's</span>
            <h2>Ihr Weg zur eigenen Energie</h2>
            <p>Von der ersten Anfrage bis zur fertigen Anlage – wir begleiten Sie bei jedem Schritt.</p>
          </div>
          <div className="process-grid">
            <div className="step"><div className="step-num">1</div><h4>Kostenlose Anfrage</h4><p>Füllen Sie unser 2-Minuten-Formular aus – unverbindlich und kostenlos.</p></div>
            <div className="step"><div className="step-num">2</div><h4>Persönliche Beratung</h4><p>Unsere Experten analysieren Ihr Zuhause und erstellen ein maßgeschneidertes Angebot.</p></div>
            <div className="step"><div className="step-num">3</div><h4>Planung &amp; Förderung</h4><p>Wir übernehmen die komplette Planung und kümmern uns um Fördermittel.</p></div>
            <div className="step"><div className="step-num">4</div><h4>Installation</h4><p>Unsere eigenen Montageteams installieren Ihre Anlage in wenigen Tagen.</p></div>
          </div>
        </div>
      </section>

      {/* ============ PARALLAX SECTION ============ */}
      <section className="parallax-section">
        <div className="container">
          <div className="parallax-content">
            <span className="eyebrow" style={{ background: 'rgba(255,214,10,.2)', color: 'var(--accent)' }}>🌡️ WÄRMEPUMPE &amp; PHOTOVOLTAIK</span>
            <h2 style={{ marginTop: '16px' }}>Modernste Technologie für Ihr Zuhause</h2>
            <p>Kombinieren Sie eine leise Luft-Wärmepumpe mit Ihrer Solaranlage und heizen Sie nahezu kostenlos – das ganze Jahr über. Bis zu 70 % staatliche Förderung inklusive.</p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/waermepumpe" className="btn btn-primary">Mehr zur Wärmepumpe →</Link>
              <Link href="/kontakt" className="btn btn-secondary">Kostenloses Angebot</Link>
            </div>
            <div className="parallax-stats">
              <div className="ps-item"><span className="ps-num">70 %</span><div className="ps-label">Max. BAFA-Förderung</div></div>
              <div className="ps-item"><span className="ps-num">SCOP 4,6</span><div className="ps-label">Jahresarbeitszahl</div></div>
              <div className="ps-item"><span className="ps-num">6 Wkn</span><div className="ps-label">Bis zur Inbetriebnahme</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VIDEO + TESTIMONIAL ============ */}
      <section className="video-testi-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Kundenstimme</span>
            <h2>Was unsere Kunden sagen</h2>
          </div>
          <div className="vt-grid">
            <VideoThumb />
            <div className="vt-quote-side">
              <div className="vt-stars">★★★★★</div>
              <blockquote>Vom ersten Besuch durchgehend richtig gut angefühlt</blockquote>
              <p>Vom Erstkontakt bis die Module auf dem Dach lagen, sind nur rund drei Wochen vergangen. Heute versorgt die PV-Anlage unsere Wärmepumpe mit Strom, senkt die laufenden Kosten spürbar – und ich kann alles bequem über das Tablet steuern.</p>
              <div className="vt-meta">
                <img className="vt-avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" alt="Dominik W.D." />
                <div className="vt-meta-text"><strong>Dominik W. D.</strong><span>12 kWp PV-Anlage + 9,2 kW Wärmepumpe</span></div>
              </div>
              <div className="vt-badges">
                <span className="vt-badge">✓ 12 kWp Photovoltaik</span>
                <span className="vt-badge">✓ 9,6 kWh Speicher</span>
                <span className="vt-badge">✓ 9,2 kW Wärmepumpe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="testimonials">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Kundenstimmen</span>
            <h2>Gemeinsam für die Energiewende</h2>
            <p>Lesen Sie, was unsere Kunden über ihre Solarstack-Installation sagen.</p>
          </div>
          <div className="testi-grid">
            <div className="testi-card">
              <img src="/images/solar-fam.png" alt="Familie Krause" />
              <div className="testi-body"><h4>Familie Krause</h4><div className="testi-stats"><span>12 kWp PV-Anlage</span><span>9,6 kWh Stromspeicher</span><span>9,2 kW Wärmepumpe</span></div></div>
            </div>
            <div className="testi-card">
              <img src="/images/wp-fam2.png" alt="Familie Zimmermann" />
              <div className="testi-body"><h4>Familie Zimmermann</h4><div className="testi-stats"><span>12,9 kWp PV-Anlage</span><span>9,6 kWh Stromspeicher</span><span>4,66 kW Wärmepumpe</span></div></div>
            </div>
            <div className="testi-card">
              <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80" alt="Familie Kümpel" />
              <div className="testi-body"><h4>Familie Kümpel</h4><div className="testi-stats"><span>6 kWp PV-Anlage</span><span>8 kWh Stromspeicher</span><span>90 % Autarkiegrad</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BERATER SECTION ============ */}
      <section className="berater-section">
        <div className="container">
          <div className="berater-grid">
            <div className="berater-img-wrap">
              <img src="/images/berater.png" alt="Solarstack Energieberater" />
              <div className="berater-badge">
                <span className="berater-badge-icon">👤</span>
                <div><strong>Ein persönlicher Berater</strong><span>nur für Sie – von Anfang an</span></div>
              </div>
            </div>
            <div className="berater-content">
              <span className="eyebrow" style={{ background: 'rgba(255,214,10,.18)', color: 'var(--accent)' }}>Ihr persönlicher Experte</span>
              <h2 style={{ marginTop: '16px' }}>Sprechen Sie jetzt mit einem unserer <span style={{ color: 'var(--accent)' }}>50+ zertifizierten</span> Energieberater</h2>
              <p>Kein Callcenter, kein Warteschleifen-Chaos. Jeder unserer Berater ist ausgebildeter Energieexperte und kennt Ihren regionalen Markt – für eine Beratung, die wirklich passt.</p>
              <div className="berater-stats">
                <div className="bstat"><span className="bstat-num">50+</span><div className="bstat-label">Zertifizierte Berater</div></div>
                <div className="bstat"><span className="bstat-num">24h</span><div className="bstat-label">Rückruf-Garantie</div></div>
                <div className="bstat"><span className="bstat-num">0 €</span><div className="bstat-label">Kosten für Beratung</div></div>
              </div>
              <div className="berater-actions">
                <Link href="/kontakt" className="btn btn-primary">Jetzt Beratung anfragen →</Link>
                <a href="tel:+49123456789" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)' }}>📞 Direkt anrufen</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Häufig gestellte Fragen</h2>
          </div>
          <div className="faq-list">
            {[
              { q: 'Wie viel kostet eine Photovoltaikanlage?', a: 'Die Kosten hängen von Größe, Standort und Ausstattung ab. Eine typische Anlage für ein Einfamilienhaus liegt zwischen 12.000 € und 25.000 € – oft rentiert sich die Investition bereits nach 8–12 Jahren.' },
              { q: 'Gibt es Fördermittel für Wärmepumpen?', a: 'Ja, über die BAFA und KfW sind Förderungen von bis zu 70 % möglich. Wir übernehmen den kompletten Antragsprozess für Sie.' },
              { q: 'Wie lange dauert die Installation?', a: 'Die Installation einer PV-Anlage dauert in der Regel 1–3 Tage. Vom Erstkontakt bis zur Inbetriebnahme vergehen im Schnitt 6 Wochen.' },
              { q: 'Lohnt sich die Kombination aus PV und Wärmepumpe?', a: 'Definitiv. Der selbst erzeugte Solarstrom betreibt die Wärmepumpe nahezu kostenlos – Sie werden unabhängig von Öl, Gas und Strompreisen zugleich.' },
              { q: 'Welche Garantie bieten Sie?', a: 'Auf Solarmodule 25 Jahre Leistungsgarantie, auf Wechselrichter und Speicher 10 Jahre, auf Wärmepumpen 5–10 Jahre je nach Modell.' },
              { q: 'Wie funktioniert Glasfaser bei Ihnen?', a: 'Wir prüfen kostenlos, ob Glasfaser in Ihrer Region verfügbar ist, vergleichen die besten Tarife und kümmern uns um die gesamte Umschaltung.' },
              { q: 'Was bieten Sie im Bereich Telekommunikation an?', a: 'Von DSL über Glasfaser bis hin zu Mobilfunk-Tarifen: Wir bündeln alles, was Ihr Smart Home braucht.' },
              { q: 'Lohnt es sich, zu Gas & Strom von Solarstack zu wechseln?', a: 'Ja. Durch unsere Einkaufsmacht und direkten Lieferantenverhandlungen können wir günstigere Konditionen als die meisten Grundversorger bieten.' },
            ].map((item, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA Pre-Footer ============ */}
      <section className="prefooter-cta-wrap">
        <div className="prefooter-cta">
          <div className="prefooter-inner">
            <span className="eyebrow" style={{ background: 'rgba(255,214,10,.2)', color: 'var(--accent)' }}>🤝 WIR BERATEN SIE!</span>
            <h2>Bereit für Ihre Energiewende?</h2>
            <p>Fordern Sie jetzt Ihr kostenloses Angebot an. Wir melden uns innerhalb von 24 Stunden.</p>
            <Link href="/kontakt" className="btn btn-primary">Jetzt Angebot anfordern</Link>
            <div className="hero-trust" style={{ marginTop: '20px' }}>
              <span>Kostenlos</span><span>Unverbindlich</span><span>In 2 Minuten ausgefüllt</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT (on homepage) ============ */}
      <section id="kontakt" style={{ padding: '60px 0 100px' }}>
        <div className="container contact">
          <div className="contact-info">
            <span className="eyebrow">Kontakt</span>
            <h2>So erreichen Sie uns</h2>
            <p style={{ fontWeight: '700', fontSize: '15px', color: 'var(--dark)' }}>Proseller HIGHLEVEL</p>
            <p>Haben Sie Fragen oder möchten ein Angebot? Unsere Energie-Experten freuen sich auf Ihre Anfrage.</p>
            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div><strong>Telefon</strong><span style={{ display: 'block' }}>+49 151 41241591</span><span style={{ display: 'block' }}>+49 151 44945764</span></div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">✉</div>
              <div><strong>E-Mail</strong><span>info@solarstack.de</span></div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div><strong>Adresse</strong><span>Am Germaniahafen 3, 24143 Kiel</span></div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">🕐</div>
              <div><strong>Öffnungszeiten</strong><span>Mo–Fr 8:00–18:00 Uhr</span></div>
            </div>
          </div>

          {formSubmitted ? (
            <div style={{ textAlign: 'center', padding: '32px' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
              <h3 style={{ marginBottom: '8px' }}>Vielen Dank!</h3>
              <p style={{ color: '#495057' }}>Wir melden uns innerhalb von 24 Stunden.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={e => { e.preventDefault(); setFormSubmitted(true) }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)', display: 'block', marginBottom: '8px' }}>Was interessiert Sie?</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '20px' }}>
                {[['☀️', 'Photovoltaik'], ['🌡️', 'Wärmepumpe'], ['🌐', 'Glasfaser'], ['📦', 'Komplettpaket'], ['🔥', 'Gas & Strom'], ['📡', 'Telekommunikation']].map(([ico, label]) => (
                  <button
                    key={label}
                    type="button"
                    className={`int-chip${chips.includes(label) ? ' sel' : ''}`}
                    onClick={() => toggleChip(label)}
                  >
                    <span>{ico}</span> {label}
                  </button>
                ))}
              </div>
              <div className="form-row">
                <div className="field"><label>Vorname *</label><input type="text" required /></div>
                <div className="field"><label>Nachname *</label><input type="text" required /></div>
              </div>
              <div className="field"><label>E-Mail *</label><input type="email" required /></div>
              <div className="field"><label>Telefon</label><input type="tel" placeholder="+49 ..." /></div>
              <div className="field"><label>Nachricht (optional)</label><textarea rows="3" placeholder="Erzählen Sie uns von Ihrem Projekt..."></textarea></div>
              <div className="field check">
                <input type="checkbox" required id="dsgvo-home" />
                <label htmlFor="dsgvo-home" style={{ fontSize: '13px' }}>Ich akzeptiere die <Link href="/datenschutz" style={{ color: 'var(--dark)', textDecoration: 'underline' }}>Datenschutzerklärung</Link> und stimme einer Kontaktaufnahme zu.</label>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Angebot anfordern →</button>
              <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--gray-500)', marginTop: '10px' }}>🔒 Verschlüsselte Übertragung · Keine Weitergabe</p>
            </form>
          )}
        </div>
      </section>

      {/* ============ LOGO SCROLL ============ */}
      <div className="logo-scroll-wrap">
        <div className="logo-scroll-inner">
          <div className="logo-track">
            {['K2 Systems', 'BOSCH', 'AIKO', 'EcoFlow', 'hager', 'SMA', 'Fronius', 'Viessmann', 'BYD', 'Solaredge',
              'K2 Systems', 'BOSCH', 'AIKO', 'EcoFlow', 'hager', 'SMA', 'Fronius', 'Viessmann', 'BYD', 'Solaredge'].map((name, i) => (
              <span key={i} className="logo-item"><b>{name}</b></span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function VideoThumb() {
  const [playing, setPlaying] = useState(false)
  if (playing) {
    return (
      <div className="vt-video-wrap">
        <iframe
          width="100%"
          height="100%"
          style={{ aspectRatio: '16/10', border: 'none', borderRadius: '20px' }}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          allowFullScreen
        />
      </div>
    )
  }
  return (
    <div className="vt-video-wrap" onClick={() => setPlaying(true)} style={{ cursor: 'pointer' }}>
      <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=900&q=80" alt="Kundenvideo Testimonial" />
      <div className="vt-overlay"></div>
      <button className="play-btn">▶</button>
      <div className="vt-person"><strong>Dominik W. D.</strong><span>Freyburg, Sachsen</span></div>
    </div>
  )
}

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

/**
 * Scroll-pinned scene: parts (sun, frame, rails, screws, modules, inverter, cable, house)
 * fly in from different directions and assemble into a complete solar installation
 * as the user scrolls through the section.
 */
export default function SolarAssembly() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // smooth out the scroll progress
  const sp = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.5 })

  // Animate ranges per part (0 = section enters, 1 = section leaves)
  const sunY        = useTransform(sp, [0, 0.25], [-300, 0])
  const sunOpacity  = useTransform(sp, [0, 0.15], [0, 1])
  const sunScale    = useTransform(sp, [0, 0.3, 1], [0.4, 1, 1.05])

  const frameX      = useTransform(sp, [0.05, 0.3], [-600, 0])
  const frameOp     = useTransform(sp, [0.05, 0.25], [0, 1])

  const railsY      = useTransform(sp, [0.15, 0.4], [400, 0])
  const railsOp     = useTransform(sp, [0.15, 0.35], [0, 1])

  const screw1X     = useTransform(sp, [0.25, 0.45], [-500, 0])
  const screw2X     = useTransform(sp, [0.27, 0.47], [500, 0])
  const screw3Y     = useTransform(sp, [0.3, 0.5],   [-500, 0])
  const screw4Y     = useTransform(sp, [0.32, 0.52], [500, 0])
  const screwOp     = useTransform(sp, [0.25, 0.45], [0, 1])
  const screwRot    = useTransform(sp, [0.25, 0.55], [0, 720])

  const mod1X       = useTransform(sp, [0.45, 0.65], [-700, 0])
  const mod2X       = useTransform(sp, [0.48, 0.68], [700, 0])
  const mod3Y       = useTransform(sp, [0.5, 0.7],   [-500, 0])
  const mod4Y       = useTransform(sp, [0.52, 0.72], [500, 0])
  const modOp       = useTransform(sp, [0.45, 0.65], [0, 1])

  const inverterX   = useTransform(sp, [0.65, 0.82], [-400, 0])
  const inverterOp  = useTransform(sp, [0.65, 0.8],  [0, 1])

  const cablePath   = useTransform(sp, [0.78, 0.92], [0, 1])

  const houseOp     = useTransform(sp, [0, 0.1], [0.3, 1])

  // headline scroll-tied transforms
  const titleY      = useTransform(sp, [0, 0.5], [60, -40])
  const titleOpacity= useTransform(sp, [0, 0.1, 0.85, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} style={{ position: 'relative', height: '400vh', background: 'linear-gradient(180deg, #0b1220 0%, #1a2540 50%, #0b1220 100%)' }}>
      {/* Sticky stage */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Animated stars / particles */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 30%, rgba(255,214,10,.08), transparent 40%), radial-gradient(circle at 80% 70%, rgba(100,150,255,.08), transparent 40%)' }} />

        {/* Headline */}
        <motion.div
          style={{
            position: 'absolute',
            top: '8%',
            left: 0, right: 0,
            textAlign: 'center',
            zIndex: 10,
            y: titleY,
            opacity: titleOpacity,
            color: '#fff',
            padding: '0 24px',
          }}
        >
          <span style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(255,214,10,.15)', color: '#FFD60A', borderRadius: '20px', fontSize: '12px', letterSpacing: '.18em', fontWeight: 600, marginBottom: '16px' }}>
            ⚙ MONTAGE LIVE
          </span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 64px)', letterSpacing: '-.02em', lineHeight: 1.05, margin: 0 }}>
            Vom Einzelteil<br />zur fertigen Anlage
          </h2>
          <p style={{ marginTop: '14px', fontSize: '17px', color: 'rgba(255,255,255,.7)', maxWidth: '560px', margin: '14px auto 0' }}>
            Scrolle weiter und sieh zu, wie sich aus Schrauben, Schienen, Modulen und Wechselrichter Schritt für Schritt eine komplette PV-Anlage zusammensetzt.
          </p>
        </motion.div>

        {/* SVG Stage */}
        <svg viewBox="0 0 1000 700" style={{ width: '100%', maxWidth: '1100px', height: 'auto', maxHeight: '85vh' }}>
          {/* House silhouette */}
          <motion.g style={{ opacity: houseOp }}>
            {/* House body */}
            <rect x="280" y="430" width="440" height="220" fill="#1a2540" stroke="rgba(255,255,255,.15)" strokeWidth="2" />
            {/* Roof */}
            <polygon points="260,430 500,300 740,430" fill="#0f1729" stroke="rgba(255,255,255,.2)" strokeWidth="2" />
            {/* Door */}
            <rect x="470" y="540" width="60" height="110" fill="#0b1220" />
            {/* Windows */}
            <rect x="320" y="470" width="60" height="60" fill="#FFD60A" opacity=".25" />
            <rect x="620" y="470" width="60" height="60" fill="#FFD60A" opacity=".25" />
            {/* Ground */}
            <rect x="0" y="650" width="1000" height="50" fill="#0a0f1c" />
          </motion.g>

          {/* Sun */}
          <motion.g style={{ y: sunY, opacity: sunOpacity, scale: sunScale, transformOrigin: '150px 150px' }}>
            <circle cx="150" cy="150" r="55" fill="#FFD60A" />
            <circle cx="150" cy="150" r="75" fill="#FFD60A" opacity=".25" />
            <circle cx="150" cy="150" r="95" fill="#FFD60A" opacity=".12" />
            {/* Rays */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
              <line
                key={deg}
                x1="150" y1="150"
                x2={150 + Math.cos((deg * Math.PI) / 180) * 120}
                y2={150 + Math.sin((deg * Math.PI) / 180) * 120}
                stroke="#FFD60A" strokeWidth="3" strokeLinecap="round" opacity=".6"
              />
            ))}
          </motion.g>

          {/* Frame (the rectangle that holds modules on the roof) */}
          <motion.g style={{ x: frameX, opacity: frameOp }}>
            <rect x="320" y="335" width="360" height="100" fill="none" stroke="#FFD60A" strokeWidth="4" rx="4" />
            <rect x="320" y="335" width="360" height="100" fill="rgba(255,214,10,.05)" rx="4" />
          </motion.g>

          {/* Mounting rails */}
          <motion.g style={{ y: railsY, opacity: railsOp }}>
            <rect x="320" y="355" width="360" height="6" fill="#888" />
            <rect x="320" y="410" width="360" height="6" fill="#888" />
          </motion.g>

          {/* Screws — fly in from 4 directions, spinning */}
          <motion.g style={{ x: screw1X, opacity: screwOp, rotate: screwRot, transformOrigin: '335px 355px' }}>
            <circle cx="335" cy="355" r="8" fill="#fff" stroke="#1a2540" strokeWidth="2" />
            <line x1="329" y1="355" x2="341" y2="355" stroke="#1a2540" strokeWidth="2" />
          </motion.g>
          <motion.g style={{ x: screw2X, opacity: screwOp, rotate: screwRot, transformOrigin: '665px 355px' }}>
            <circle cx="665" cy="355" r="8" fill="#fff" stroke="#1a2540" strokeWidth="2" />
            <line x1="659" y1="355" x2="671" y2="355" stroke="#1a2540" strokeWidth="2" />
          </motion.g>
          <motion.g style={{ y: screw3Y, opacity: screwOp, rotate: screwRot, transformOrigin: '335px 415px' }}>
            <circle cx="335" cy="415" r="8" fill="#fff" stroke="#1a2540" strokeWidth="2" />
            <line x1="329" y1="415" x2="341" y2="415" stroke="#1a2540" strokeWidth="2" />
          </motion.g>
          <motion.g style={{ y: screw4Y, opacity: screwOp, rotate: screwRot, transformOrigin: '665px 415px' }}>
            <circle cx="665" cy="415" r="8" fill="#fff" stroke="#1a2540" strokeWidth="2" />
            <line x1="659" y1="415" x2="671" y2="415" stroke="#1a2540" strokeWidth="2" />
          </motion.g>

          {/* Solar modules — 4 panels fly in */}
          <motion.g style={{ x: mod1X, opacity: modOp }}>
            <rect x="328" y="345" width="80" height="80" fill="#0d2a4a" stroke="#FFD60A" strokeWidth="1.5" />
            {/* Cell grid */}
            {[0,1,2,3].map(r => [0,1,2,3].map(c => (
              <rect key={`m1-${r}-${c}`} x={332 + c*19} y={349 + r*19} width="16" height="16" fill="#0d3c6f" stroke="#1a4d8c" strokeWidth=".5" />
            )))}
          </motion.g>
          <motion.g style={{ x: mod2X, opacity: modOp }}>
            <rect x="412" y="345" width="80" height="80" fill="#0d2a4a" stroke="#FFD60A" strokeWidth="1.5" />
            {[0,1,2,3].map(r => [0,1,2,3].map(c => (
              <rect key={`m2-${r}-${c}`} x={416 + c*19} y={349 + r*19} width="16" height="16" fill="#0d3c6f" stroke="#1a4d8c" strokeWidth=".5" />
            )))}
          </motion.g>
          <motion.g style={{ y: mod3Y, opacity: modOp }}>
            <rect x="496" y="345" width="80" height="80" fill="#0d2a4a" stroke="#FFD60A" strokeWidth="1.5" />
            {[0,1,2,3].map(r => [0,1,2,3].map(c => (
              <rect key={`m3-${r}-${c}`} x={500 + c*19} y={349 + r*19} width="16" height="16" fill="#0d3c6f" stroke="#1a4d8c" strokeWidth=".5" />
            )))}
          </motion.g>
          <motion.g style={{ y: mod4Y, opacity: modOp }}>
            <rect x="580" y="345" width="80" height="80" fill="#0d2a4a" stroke="#FFD60A" strokeWidth="1.5" />
            {[0,1,2,3].map(r => [0,1,2,3].map(c => (
              <rect key={`m4-${r}-${c}`} x={584 + c*19} y={349 + r*19} width="16" height="16" fill="#0d3c6f" stroke="#1a4d8c" strokeWidth=".5" />
            )))}
          </motion.g>

          {/* Inverter on house wall */}
          <motion.g style={{ x: inverterX, opacity: inverterOp }}>
            <rect x="800" y="490" width="70" height="100" fill="#fff" stroke="#1a2540" strokeWidth="2" rx="4" />
            <circle cx="835" cy="520" r="10" fill="#FFD60A" />
            <rect x="815" y="545" width="40" height="6" fill="#1a2540" />
            <rect x="815" y="557" width="40" height="6" fill="#1a2540" />
            <rect x="815" y="569" width="40" height="6" fill="#1a2540" />
            <text x="835" y="585" textAnchor="middle" fontSize="9" fill="#1a2540" fontWeight="700">INV</text>
          </motion.g>

          {/* Cable from modules to inverter (animated draw) */}
          <motion.path
            d="M 660 425 Q 720 450 760 480 T 820 510"
            fill="none"
            stroke="#FFD60A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1"
            style={{ pathLength: cablePath, opacity: cablePath }}
          />
        </svg>

        {/* Scroll hint */}
        <motion.div
          style={{ position: 'absolute', bottom: '24px', left: 0, right: 0, textAlign: 'center', color: 'rgba(255,255,255,.5)', fontSize: '12px', letterSpacing: '.2em' }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          ↓ WEITER SCROLLEN
        </motion.div>
      </div>
    </section>
  )
}

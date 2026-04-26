import { motion } from 'framer-motion'

const presets = {
  fadeUp:    { initial: { opacity: 0, y: 60 },     whileInView: { opacity: 1, y: 0 } },
  fadeDown:  { initial: { opacity: 0, y: -60 },    whileInView: { opacity: 1, y: 0 } },
  drop:      { initial: { opacity: 0, y: -120 },   whileInView: { opacity: 1, y: 0 } },
  slideLeft: { initial: { opacity: 0, x: -120 },   whileInView: { opacity: 1, x: 0 } },
  slideRight:{ initial: { opacity: 0, x: 120 },    whileInView: { opacity: 1, x: 0 } },
  zoom:      { initial: { opacity: 0, scale: 0.7 },whileInView: { opacity: 1, scale: 1 } },
  rotate:    { initial: { opacity: 0, rotate: -8, y: 40 }, whileInView: { opacity: 1, rotate: 0, y: 0 } },
}

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.8,
  once = true,
  amount = 0.25,
  as = 'div',
  style,
  className,
  stagger,
}) {
  const preset = presets[variant] || presets.fadeUp
  const MotionTag = motion[as] || motion.div

  if (stagger) {
    return (
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
        style={style}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <MotionTag
      initial={preset.initial}
      whileInView={preset.whileInView}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
      className={className}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerItem({ children, variant = 'fadeUp', duration = 0.7, style, className }) {
  const preset = presets[variant] || presets.fadeUp
  return (
    <motion.div
      variants={{
        hidden: preset.initial,
        show: { ...preset.whileInView, transition: { duration, ease: [0.22, 1, 0.36, 1] } },
      }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function DropLetters({ text, delay = 0, style, className }) {
  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: delay } } }}
      style={{ display: 'inline-block', ...style }}
      className={className}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: -80, rotate: -10 },
            show:   { opacity: 1, y: 0, rotate: 0, transition: { type: 'spring', damping: 12, stiffness: 200 } },
          }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-driven frame sequence (Apple-style).
 * As the user scrolls through the section, the frame index advances.
 *
 * Props:
 *  - frameCount: total number of frames (default 60)
 *  - basePath:   path prefix, e.g. "/scroll-frames/f"
 *  - extension:  ".jpg"
 *  - padTo:      digit padding (default 3 → "001", "002", ...)
 *  - height:     CSS height of the scroll container (default '200vh' = section is twice viewport)
 *  - className/style optional
 */
export default function ScrollFrames({
  frameCount = 60,
  basePath = '/scroll-frames/f',
  extension = '.jpg',
  padTo = 3,
  height = '200vh',
  className,
  style,
  alt = 'Scroll-Animation',
  borderRadius = 16,
}) {
  const wrapperRef = useRef(null)
  const [currentFrame, setCurrentFrame] = useState(1)

  // Preload all frames once mounted
  useEffect(() => {
    const imgs = []
    for (let i = 1; i <= frameCount; i++) {
      const img = new window.Image()
      img.src = `${basePath}${String(i).padStart(padTo, '0')}${extension}`
      imgs.push(img)
    }
  }, [frameCount, basePath, padTo, extension])

  useEffect(() => {
    const update = () => {
      const el = wrapperRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // scroll progress 0..1 from when section enters viewport to when it leaves
      const total = rect.height - vh
      if (total <= 0) return
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      const progress = scrolled / total
      const f = Math.min(frameCount, Math.max(1, Math.round(progress * (frameCount - 1)) + 1))
      setCurrentFrame(f)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [frameCount])

  const src = `${basePath}${String(currentFrame).padStart(padTo, '0')}${extension}`

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ position: 'relative', height, ...style }}
    >
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}>
        <img
          src={src}
          alt={alt}
          style={{
            maxWidth: '100%',
            maxHeight: '90vh',
            width: 'auto',
            height: 'auto',
            borderRadius,
            boxShadow: '0 20px 60px rgba(0,0,0,.18)',
            display: 'block',
          }}
        />
      </div>
    </div>
  )
}

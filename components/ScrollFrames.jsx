import { useEffect, useRef, useState } from 'react'

/**
 * Inline scroll-driven frame sequence.
 * Sits in place of an image — frames advance based on the element's
 * position in the viewport as the user scrolls past the section.
 *
 * Props:
 *  - frameCount: total number of frames
 *  - basePath:   path prefix, e.g. "/scroll-frames/f"
 *  - extension:  ".jpg"
 *  - padTo:      digit padding (default 3 → "001")
 *  - className:  CSS class for the wrapper (e.g. "section-img")
 *  - aspectRatio: e.g. '4/3', '16/9' — fallback to 4/3
 */
export default function ScrollFrames({
  frameCount = 60,
  basePath = '/scroll-frames/f',
  extension = '.jpg',
  padTo = 3,
  className,
  alt = 'Scroll-Animation',
  aspectRatio = '4/3',
  borderRadius = 14,
  style,
}) {
  const wrapperRef = useRef(null)
  const [currentFrame, setCurrentFrame] = useState(1)

  // Preload all frames
  useEffect(() => {
    for (let i = 1; i <= frameCount; i++) {
      const img = new window.Image()
      img.src = `${basePath}${String(i).padStart(padTo, '0')}${extension}`
    }
  }, [frameCount, basePath, padTo, extension])

  useEffect(() => {
    const update = () => {
      const el = wrapperRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // progress: 0 = element bottom touches viewport bottom (just entered)
      //           1 = element top touches viewport top (about to leave)
      const total = vh + rect.height
      const traveled = vh - rect.top
      const progress = Math.min(1, Math.max(0, traveled / total))
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
    <img
      ref={wrapperRef}
      src={src}
      alt={alt}
      className={className}
      style={{
        width: '100%',
        height: 'auto',
        aspectRatio,
        objectFit: 'cover',
        borderRadius,
        boxShadow: '0 16px 48px rgba(0,0,0,.12)',
        display: 'block',
        ...style,
      }}
    />
  )
}

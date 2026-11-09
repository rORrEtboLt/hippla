import { useEffect, useState } from 'react'

export default function Slider({ slides, interval = 6000 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(id)
  }, [paused, interval, slides.length])

  const go = (step) => setIndex((i) => (i + step + slides.length) % slides.length)

  return (
    <div
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((s, i) => (
        <img
          key={s.alt}
          src={s.src}
          alt={s.alt}
          className={i === index ? 'active' : ''}
          aria-hidden={i !== index}
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}
      <button className="arrow prev" onClick={() => go(-1)} aria-label="Previous photo">‹</button>
      <button className="arrow next" onClick={() => go(1)} aria-label="Next photo">›</button>
      <div className="dots">
        {slides.map((s, i) => (
          <button
            key={s.alt}
            className={i === index ? 'active' : ''}
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

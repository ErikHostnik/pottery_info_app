import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children, className = '', delay = 0, as: Tag = 'div', style, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          if (delay) {
            setTimeout(() => {
              el.style.transitionDelay = ''
            }, (delay + 0.8) * 1000)
          }
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{ ...style, ...(delay ? { transitionDelay: `${delay}s` } : {}) }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

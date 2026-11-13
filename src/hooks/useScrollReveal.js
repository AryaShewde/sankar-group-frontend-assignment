import { useEffect, useRef } from 'react'

function useScrollReveal(options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    }, options)

    const current = ref.current
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [options])

  return ref
}

export default useScrollReveal

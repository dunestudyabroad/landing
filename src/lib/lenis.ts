// lib/lenis.ts
import Lenis from '@studio-freight/lenis'

export const initLenis = () => {
  const lenis = new Lenis({
    lerp: 0.1,
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

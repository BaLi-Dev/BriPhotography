'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }
    document.addEventListener('mousemove', onMove)

    let raf: number
    const animate = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.12
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx + 'px'
        ringRef.current.style.top = pos.current.ry + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    const grow = () => {
      if (cursorRef.current) { cursorRef.current.style.width = '20px'; cursorRef.current.style.height = '20px' }
      if (ringRef.current) { ringRef.current.style.width = '60px'; ringRef.current.style.height = '60px' }
    }
    const shrink = () => {
      if (cursorRef.current) { cursorRef.current.style.width = '12px'; cursorRef.current.style.height = '12px' }
      if (ringRef.current) { ringRef.current.style.width = '36px'; ringRef.current.style.height = '36px' }
    }
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}

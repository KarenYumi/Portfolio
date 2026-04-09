import { useEffect, useState } from 'react'
import charm from '../assets/images/charm.png'

export default function HangingCharm() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const rotation = Math.sin(scrollY * 0.03) * 8

  return (
    <div className="fixed top-0 right-4 md:right-auto md:left-4 z-50 pointer-events-none">
      <div className="flex flex-col items-center">
        <div className="w-px h-11" />
        <img
          src={charm}
          alt="Pingente decorativo"
          className="w-30 md:w-42 sx:hidden select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)]"
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: 'top center',
            transition: 'transform 0.35s ease-out',
            filter: 'sepia(0.50)  hue-rotate(-10deg)'
          }}
          draggable="false"
        />
      </div>
    </div>
  )
}
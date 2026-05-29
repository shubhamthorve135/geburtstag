import { useMemo } from 'react'

const COLORS = ['#F97316', '#F472B6', '#60A5FA', '#34D399', '#F59E0B', '#A78BFA']

export default function Confetti({count = 40}){
  const pieces = useMemo(() => {
    return Array.from({length: count}).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 3 + Math.random() * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotate: Math.random() * 360,
      size: 6 + Math.random() * 10,
    }))
  }, [count])

  return (
    <div className="confetti pointer-events-none fixed inset-0 z-50">
      {pieces.map(p => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            backgroundColor: p.color,
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  )
}

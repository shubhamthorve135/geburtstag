import { useEffect, useRef, useState } from 'react'
import AnimatedClouds from './components/AnimatedClouds'
import FloatingBalloons from './components/FloatingBalloons'
import Confetti from './components/Confetti'
import Homepage from './components/Homepage'
import PasswordGate from './components/PasswordGate'
import SpecialMessage from './components/SpecialMessage'
import VolumeControl from './components/VolumeControl'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [authorized, setAuthorized] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [isMuted, setIsMuted] = useState(false)
  const [now, setNow] = useState(new Date())
  const [celebrationDone, setCelebrationDone] = useState(false)
  const audioRef = useRef(null)
  const celebrationTimerRef = useRef(null)

  const releaseDate = new Date('2026-05-29T00:00:00')
  const timeUntilRelease = releaseDate - now

  useEffect(() => {
    const storedAuth = sessionStorage.getItem('birthday_auth')
    if (storedAuth === 'true') {
      setAuthorized(true)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (timeUntilRelease <= 0 && !celebrationDone && celebrationTimerRef.current === null) {
      celebrationTimerRef.current = window.setTimeout(() => {
        setCelebrationDone(true)
        celebrationTimerRef.current = null
      }, 1500)
    }
  }, [timeUntilRelease, celebrationDone])

  // clear celebration timer on unmount only
  useEffect(() => {
    return () => {
      if (celebrationTimerRef.current !== null) {
        clearTimeout(celebrationTimerRef.current)
        celebrationTimerRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (authorized && audio) {
      audio.play().catch(() => {
        // Autoplay might be blocked; user can still control sound via UI.
      })
    }
  }, [authorized])

  const handleAuthorization = () => {
    sessionStorage.setItem('birthday_auth', 'true')
    setAuthorized(true)
  }

  const correctPassword = 'Gulabjamun@26' || 'gulabjamun@26' ||  'gulabjam@26' || 'Gulabjamun@26'

  const totalSeconds = Math.max(0, Math.floor(timeUntilRelease / 1000))
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  const releaseLabel = releaseDate.toLocaleString([], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
  const isCelebration = timeUntilRelease <= 0 && !celebrationDone
  const showCountdownPage = timeUntilRelease > 0 || isCelebration

  if (showCountdownPage) {
    const celebrateLabel = isCelebration ? 'Celebrate! 🎉' : 'Coming Soon'
    const infoText = isCelebration
      ? 'The countdown reached zero. Opening the site now...'
      : `This will open at ${releaseLabel}`
    const showDays = isCelebration ? '00' : String(days).padStart(2, '0')
    const showHours = isCelebration ? '00' : String(hours).padStart(2, '0')
    const showMinutes = isCelebration ? '00' : String(minutes).padStart(2, '0')
    const showSeconds = isCelebration ? '00' : String(seconds).padStart(2, '0')

    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.15),_transparent_40%),linear-gradient(to_bottom,#0f172a,#581c87)] text-white">
        <div className="glass-card max-w-xl w-full p-10 text-center">
          <p className="text-3xl font-bold mb-4">{celebrateLabel}</p>
          <p className="text-sm text-slate-300 mb-8">{infoText}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-6">
            <div>
              <p className="text-5xl font-bold">{showDays}</p>
              <p className="text-sm text-slate-300">Days</p>
            </div>
            <div>
              <p className="text-5xl font-bold">{showHours}</p>
              <p className="text-sm text-slate-300">Hours</p>
            </div>
            <div>
              <p className="text-5xl font-bold">{showMinutes}</p>
              <p className="text-sm text-slate-300">Minutes</p>
            </div>
            <div>
              <p className="text-5xl font-bold">{showSeconds}</p>
              <p className="text-sm text-slate-300">Seconds</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 text-4xl mb-4">
            {isCelebration ? <>🎉✨🥳</> : <>⏳🌙✨</>}
          </div>
          {isCelebration && <div className="celebration-burst">🎉</div>}
          <p className="text-sm text-slate-400">
            {isCelebration ? 'Please wait a moment while the site opens.' : 'Refresh the page after the countdown finishes to access the site.'}
          </p>
        </div>
      </div>
    )
  }

  if (!authorized) {
    return <PasswordGate onSuccess={handleAuthorization} correctPassword={correctPassword} />
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}music.mp3`}
        loop
        preload="auto"
      />

      {/* Background elements */}
      <AnimatedClouds />
      <FloatingBalloons />

      {/* Main Content */}
      {currentPage === 'home' && (
        <Homepage onNavigateToMessage={() => setCurrentPage('message')} />
      )}

      {currentPage === 'message' && (
        <SpecialMessage onBack={() => setCurrentPage('home')} />
      )}

      {/* Volume Control */}
      <VolumeControl
        volume={volume}
        isMuted={isMuted}
        onVolumeChange={setVolume}
        onToggleMute={() => setIsMuted((prev) => !prev)}
      />
    </div>
  )
}

export default App

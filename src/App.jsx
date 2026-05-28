import { useEffect, useRef, useState } from 'react'
import AnimatedClouds from './components/AnimatedClouds'
import FloatingBalloons from './components/FloatingBalloons'
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
  const audioRef = useRef(null)

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

  const correctPassword = 'Divya@26'

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

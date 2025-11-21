"use client"

import { useEffect, useRef, useState } from "react"

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Force immediate loading
    video.load()

    // Handle when video can start playing
    const handleCanPlay = () => {
      setIsLoaded(true)
      // Try to play immediately
      video.play().catch(() => {
        // Auto-play might be blocked, but video is ready
        setIsLoaded(true)
      })
    }

    // Handle when enough data is loaded to start playing
    const handleCanPlayThrough = () => {
      setIsLoaded(true)
    }

    // Handle when video starts playing
    const handlePlaying = () => {
      setIsLoaded(true)
    }

    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("canplaythrough", handleCanPlayThrough)
    video.addEventListener("playing", handlePlaying)

    // Preload aggressively
    if (video.readyState >= 2) {
      setIsLoaded(true)
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("canplaythrough", handleCanPlayThrough)
      video.removeEventListener("playing", handlePlaying)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      {/* Fallback background image - shows immediately */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/industrial-automation-factory-floor-high-tech.jpg')",
          opacity: isLoaded ? 0 : 1,
          transition: "opacity 0.5s ease-in-out"
        }}
      />
      
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out"
        }}
      >
        <source src="/12331860_1920_1080_30fps (online-video-cutter.com).webm" type="video/webm" />
      </video>
    </div>
  )
}


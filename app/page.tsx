"use client"

import { useState, useEffect } from "react"

export default function LoveCounter() {
  const [startDate] = useState(new Date("2025-08-01")) // Ngày bắt đầu - bạn có thể thay đổi
  const [daysTogether, setDaysTogether] = useState(0)

  useEffect(() => {
    const calculateDays = () => {
      const today = new Date()
      const diffTime = Math.abs(today.getTime() - startDate.getTime())
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
      setDaysTogether(diffDays)
    }

    calculateDays()
    const interval = setInterval(calculateDays, 1000 * 60 * 60) // Cập nhật mỗi giờ

    return () => clearInterval(interval)
  }, [startDate])

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/shin-background.jpeg)" }} />

      {/* Overlay để làm nổi bật counter */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Day counter positioned on center Shin's shirt */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="mt-12 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {daysTogether}
        </div>
      </div>
    </div>
  )
}

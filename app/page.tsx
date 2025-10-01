'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      
      // Znajdź najbliższy piątek o 20:00
      const nextFriday = new Date(now)
      const currentDay = now.getDay() // 0 = niedziela, 5 = piątek
      const daysUntilFriday = currentDay <= 5 ? (5 - currentDay) : (5 + 7 - currentDay)
      
      nextFriday.setDate(now.getDate() + daysUntilFriday)
      nextFriday.setHours(20, 0, 0, 0)
      
      // Jeśli już minął piątek 20:00, ustaw na następny piątek
      if (now.getDay() === 5 && now.getHours() >= 20) {
        nextFriday.setDate(nextFriday.getDate() + 7)
      }
      
      const distance = nextFriday.getTime() - now.getTime()

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mt-16 mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#0098EA] to-[#0098EA] bg-clip-text text-transparent">
              lockTONber
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Lock in on TON in October
          </p>
          
          {/* Token Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-gray-800/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#0098EA] mb-2">88B</div>
              <div className="text-gray-300">Total Supply</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#0098EA] mb-2">1B</div>
              <div className="text-gray-300">Liquidity Pool</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#0098EA] mb-2">87B</div>
              <div className="text-gray-300">Airdrop Pool</div>
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-[#0098EA] mb-4">
              October Airdrop
            </h2>
            <p className="text-gray-300 mb-6">
              80 billion tokens distributed proportionally to all holders in October!
            </p>
            <button className="px-8 py-3 bg-[#0098EA] text-white font-bold rounded-full hover:opacity-90 transition-opacity">
              Join Now
            </button>
          </div>

          {/* Countdown Timer */}
          <div className="bg-gray-800/30 rounded-2xl p-8 mb-16 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#0098EA] mb-6">
              First Airdrop in:
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0098EA] mb-2">{timeLeft.days}</div>
                <div className="text-gray-400 text-sm">Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0098EA] mb-2">{timeLeft.hours}</div>
                <div className="text-gray-400 text-sm">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0098EA] mb-2">{timeLeft.minutes}</div>
                <div className="text-gray-400 text-sm">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0098EA] mb-2">{timeLeft.seconds}</div>
                <div className="text-gray-400 text-sm">Seconds</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-gray-400 text-sm">
            © 2024 lockTONber. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}

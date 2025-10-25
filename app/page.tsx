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
      
      // Znajdź najbliższy 1 dzień miesiąca o 2:00
      const nextFirstOfMonth = new Date(now)
      nextFirstOfMonth.setDate(1)
      nextFirstOfMonth.setHours(2, 0, 0, 0)
      
      // Jeśli już minął 1 dzień tego miesiąca o 2:00, ustaw na następny miesiąc
      if (now.getDate() > 1 || (now.getDate() === 1 && now.getHours() >= 2)) {
        nextFirstOfMonth.setMonth(nextFirstOfMonth.getMonth() + 1)
      }
      
      // Upewnij się, że nie jesteśmy przed 1 listopada 2025
      const startDate = new Date(2025, 10, 1, 2, 0, 0, 0) // listopad = 10 (0-indexed)
      if (nextFirstOfMonth < startDate) {
        nextFirstOfMonth.setFullYear(2025, 10, 1)
        nextFirstOfMonth.setHours(2, 0, 0, 0)
      }
      
      const distance = nextFirstOfMonth.getTime() - now.getTime()

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
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#0098EA] to-[#0098EA] bg-clip-text text-transparent">
              TONVEMBULL
            </span>
          </h1>
          
          {/* Pyramid Loader */}
          <div className="flex justify-center mb-8">
            <div className="pyramid-loader">
              <div className="wrapper">
                <div className="side side1"></div>
                <div className="side side2"></div>
                <div className="side side3"></div>
                <div className="side side4"></div>
                <div className="base"></div>
                <div className="shadow"></div>
              </div>
            </div>
          </div>
          
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
              <div className="text-gray-300">Started Liquidity Pool</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#0098EA] mb-2">87B</div>
              <div className="text-gray-300">Airdrop Pool</div>
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-[#0098EA] mb-4">
              TONVEMBULL Airdrop
            </h2>
            <p className="text-gray-300 mb-6">
              87 billion tokens distributed proportionally to all holders in following months!
            </p>
            <button className="px-8 py-3 bg-[#0098EA] text-white font-bold rounded-full hover:opacity-90 transition-opacity" onClick={() => window.location.href='https://app.ston.fi/swap?ft=TON&tt=EQDvc_TcB_lUR-QAM5n-v2n0mFprdArD6yPTZN4FRZfqeS5I&chartVisible=true&chartInterval=1w&fa=%22100%22'}>
              Join Now
            </button>
          </div>

          {/* Countdown Timer */}
          <div className="bg-gray-800/30 rounded-2xl p-8 mb-16 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#0098EA] mb-6">
              Next Monthly Airdrop in:
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

      {/* Airdrop Timeline Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#0098EA] to-[#0098EA] bg-clip-text text-transparent">
              Airdrop Timeline
            </span>
          </h2>
          
          <div className="space-y-6">
            {/* Nov 1 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-[#0098EA]">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-[#0098EA] mb-2">Nov 1st: 1B tokens</h3>
                  <blockquote className="text-gray-300 italic text-lg">
                    "First airdrop, holders double their bags!"
                  </blockquote>
                </div>
                <div className="text-sm text-gray-400">2025</div>
              </div>
            </div>

            {/* Dec 1 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-600">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-300">Dec 1st: 2B tokens</h3>
                <div className="text-sm text-gray-400">2025</div>
              </div>
            </div>

            {/* Jan 1 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-600">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-300">Jan 1st: 3B tokens</h3>
                <div className="text-sm text-gray-400">2026</div>
              </div>
            </div>

            {/* Feb 1 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-600">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-300">Feb 1st: 5B tokens</h3>
                <div className="text-sm text-gray-400">2026</div>
              </div>
            </div>

            {/* Mar 1 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-600">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-300">Mar 1st: 8B tokens</h3>
                <div className="text-sm text-gray-400">2026</div>
              </div>
            </div>

            {/* Apr 1 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-600">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-300">Apr 1st: 13B tokens</h3>
                <div className="text-sm text-gray-400">2026</div>
              </div>
            </div>

            {/* May 1 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-600">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-300">May 1st: 21B tokens</h3>
                <div className="text-sm text-gray-400">2026</div>
              </div>
            </div>

            {/* Jun 1 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-600">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-300">Jun 1st: 34B tokens</h3>
                <div className="text-sm text-gray-400">2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-gray-400 text-sm">
            © 2025 TONVEMBULL. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}

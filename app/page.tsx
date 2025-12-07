'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [copied, setCopied] = useState(false)

  const contractAddress = 'EQDvc_TcB_lUR-QAM5n-v2n0mFprdArD6yPTZN4FRZfqeS5I'

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      
      // Znajdź najbliższy ostatni dzień miesiąca o 23:59 (UTC+1)
      // 23:59 UTC+1 = 22:59 UTC
      const nextLastOfMonth = new Date(now)
      nextLastOfMonth.setUTCDate(1)
      nextLastOfMonth.setUTCMonth(nextLastOfMonth.getUTCMonth() + 1)
      nextLastOfMonth.setUTCDate(0) // Ostatni dzień poprzedniego miesiąca
      nextLastOfMonth.setUTCHours(22, 59, 0, 0) // 23:59 UTC+1 = 22:59 UTC
      
      // Jeśli już minął ostatni dzień tego miesiąca o 23:59 UTC+1, ustaw na następny miesiąc
      const nowUTC = new Date(now.getTime())
      const lastDayOfCurrentMonth = new Date(nowUTC)
      lastDayOfCurrentMonth.setUTCDate(1)
      lastDayOfCurrentMonth.setUTCMonth(lastDayOfCurrentMonth.getUTCMonth() + 1)
      lastDayOfCurrentMonth.setUTCDate(0)
      lastDayOfCurrentMonth.setUTCHours(22, 59, 0, 0)
      
      if (now.getTime() >= lastDayOfCurrentMonth.getTime()) {
        nextLastOfMonth.setUTCMonth(nextLastOfMonth.getUTCMonth() + 1, 0)
        nextLastOfMonth.setUTCDate(0)
        nextLastOfMonth.setUTCHours(22, 59, 0, 0)
      }
      
      // Upewnij się, że nie jesteśmy przed 30 listopada 2025 23:59 UTC+1 (22:59 UTC)
      const startDate = new Date(Date.UTC(2025, 10, 30, 22, 59, 0, 0)) // listopad = 10 (0-indexed), 22:59 UTC
      if (nextLastOfMonth.getTime() < startDate.getTime()) {
        nextLastOfMonth.setUTCFullYear(2025, 10, 30)
        nextLastOfMonth.setUTCHours(22, 59, 0, 0)
      }
      
      const distance = nextLastOfMonth.getTime() - now.getTime()

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
          
          {/* Contract Address */}
          <div className="mb-8">
            <p className="text-lg md:text-xl text-gray-300 mb-3">$TVB CA</p>
            <div className="flex items-center justify-center gap-3">
              <code className="bg-gray-800/50 px-4 py-2 rounded-lg text-sm md:text-base text-gray-300 font-mono break-all max-w-full">
                {contractAddress}
              </code>
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-[#0098EA] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                {copied ? 'Skopiowano!' : 'Kopiuj'}
              </button>
            </div>
          </div>
          
          {/* Pyramid Loader */}
          <div className="flex justify-center mb-8">
            <div className="pyramid-loader">
              <div className="wrapper">
                <div className="side side1">
                  <img src="/ton-white.png" alt="TON" className="side-logo" />
                </div>
                <div className="side side2">
                  <img src="/ton-white.png" alt="TON" className="side-logo" />
                </div>
                <div className="side side3">
                  <img src="/ton-white.png" alt="TON" className="side-logo" />
                </div>
                <div className="side side4">
                  <img src="/ton-white.png" alt="TON" className="side-logo" />
                </div>
                <div className="base"></div>
                <div className="shadow"></div>
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Starting Bull Run on TON with TONVEMBULL
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-[#0098EA] text-white font-bold rounded-full opacity-50 cursor-not-allowed transition-opacity" disabled>
                Join CTO (Soon)
              </button>
              <button className="px-8 py-3 border-2 border-[#0098EA] text-[#0098EA] font-bold rounded-full hover:bg-[#0098EA] hover:text-white transition-all" onClick={() => window.location.href='https://app.ston.fi/swap?ft=TON&tt=EQDvc_TcB_lUR-QAM5n-v2n0mFprdArD6yPTZN4FRZfqeS5I&chartVisible=true&chartInterval=1w&fa=%22100%22'}>
                Swap on dex
              </button>
            </div>
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
            {/* Nov 30 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-500 opacity-60">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-500 mb-2 line-through">Nov 30th: 1B tokens</h3>
                  <blockquote className="text-gray-500 italic text-lg line-through">
                    "First airdrop, holders double their bags!"
                  </blockquote>
                </div>
                <div className="text-sm text-gray-500">2025</div>
              </div>
            </div>

            {/* Dec 31 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-[#0098EA]">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-[#0098EA] mb-2">Dec 31st: 2B tokens</h3>
                  <blockquote className="text-gray-300 italic text-lg">
                    "DECEMBULL vibes! Diamond hands getting rewarded!"
                  </blockquote>
                </div>
                <div className="text-sm text-gray-400">2025</div>
              </div>
            </div>

            {/* Jan 31 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-600">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-300">Jan 31st: 3B tokens</h3>
                <div className="text-sm text-gray-400">2026</div>
              </div>
            </div>

            {/* Feb 28 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-600">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-300">Feb 28th: 5B tokens</h3>
                <div className="text-sm text-gray-400">2026</div>
              </div>
            </div>

            {/* Mar 31 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-600">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-300">Mar 31st: 8B tokens</h3>
                <div className="text-sm text-gray-400">2026</div>
              </div>
            </div>

            {/* Apr 30 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-600">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-300">Apr 30th: 13B tokens</h3>
                <div className="text-sm text-gray-400">2026</div>
              </div>
            </div>

            {/* May 31 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-600">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-300">May 31st: 21B tokens</h3>
                <div className="text-sm text-gray-400">2026</div>
              </div>
            </div>

            {/* Jun 30 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-600">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-300">Jun 30th: 34B tokens</h3>
                <div className="text-sm text-gray-400">2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-[#0098EA] to-[#0098EA] bg-clip-text text-transparent">
              Live Chart
            </span>
          </h2>
          <div className="bg-gray-800/30 rounded-2xl overflow-hidden" style={{ height: '600px' }}>
            <iframe
              height="100%"
              width="100%"
              id="geckoterminal-embed"
              title="GeckoTerminal Embed"
              src="https://www.geckoterminal.com/ton/pools/EQA_-ReWXXl5TL1PgbZti-nQw6VKU9CbMCydEcGEzIq_au3N?embed=1&info=1&swaps=1&grayscale=0&light_chart=0&chart_type=price&resolution=15m"
              frameBorder="0"
              allow="clipboard-write"
              allowFullScreen
              className="w-full h-full"
            />
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

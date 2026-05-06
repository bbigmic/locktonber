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
    // Ostatni airdrop: 30 listopada 2026, 23:59 UTC+1 (22:59 UTC)
    const upcomingAirdrops = [
      new Date(Date.UTC(2026, 10, 30, 22, 59, 0, 0)), // Nov 30
    ] as const

    const timer = setInterval(() => {
      const now = new Date()
      const next = upcomingAirdrops.find((d) => d.getTime() > now.getTime())
      const distance = next ? next.getTime() - now.getTime() : 0

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
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
              87 billion tokens distributed proportionally to all holders - final snapshot at the end of November!
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
              Next Airdrop in:
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
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-500 opacity-60">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-500 mb-2 line-through">Dec 31st: 2B tokens</h3>
                  <blockquote className="text-gray-500 italic text-lg line-through">
                    "Year-end closeout — DECEMBULL rang the bell with 2B under the tree!"
                  </blockquote>
                </div>
                <div className="text-sm text-gray-500">2025</div>
              </div>
            </div>

            {/* Jan 31 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-500 opacity-60">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-500 mb-2 line-through">Jan 31st: 3B tokens</h3>
                  <blockquote className="text-gray-500 italic text-lg line-through">
                    "New year, same conviction — January stacked 3B for the resolvers who stayed!"
                  </blockquote>
                </div>
                <div className="text-sm text-gray-500">2026</div>
              </div>
            </div>

            {/* Feb 28 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-500 opacity-60">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-500 mb-2 line-through">Feb 28th: 5B tokens</h3>
                  <blockquote className="text-gray-500 italic text-lg line-through">
                    "Short month, Fibonacci five — February lovers of TON split 5B!"
                  </blockquote>
                </div>
                <div className="text-sm text-gray-500">2026</div>
              </div>
            </div>

            {/* Mar 31 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-500 opacity-60">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-500 mb-2 line-through">Mar 31st: 8B tokens</h3>
                  <blockquote className="text-gray-500 italic text-lg line-through">
                    "Q1 sprint to spring — March madness on TON dropped 8B on the faithful!"
                  </blockquote>
                </div>
                <div className="text-sm text-gray-500">2026</div>
              </div>
            </div>

            {/* Apr 30 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-500 opacity-60">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-500 mb-2 line-through">Apr 30th: 13B tokens</h3>
                  <blockquote className="text-gray-500 italic text-lg line-through">
                    "April showers, TON flowers — lucky 13B bloomed for holders before May!"
                  </blockquote>
                </div>
                <div className="text-sm text-gray-500">2026</div>
              </div>
            </div>

            {/* May 31 — consolidated into final November schedule */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-gray-500 opacity-60">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-500 mb-2 line-through">May 31st: 21B tokens</h3>
                  <blockquote className="text-gray-500 italic text-lg line-through">
                    "Monthly cadence paused - this 21B tranche rolls into the final November snapshot!"
                  </blockquote>
                </div>
                <div className="text-sm text-gray-500">2026</div>
              </div>
            </div>

            {/* Nov 30 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border-l-4 border-[#0098EA]">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-[#0098EA] mb-2">Nov 30th: 55B tokens</h3>
                  <blockquote className="text-gray-300 italic text-lg">
                    "TONVEMBULL anniversary finale - November drops the last 55B and closes the full 87B arc!"
                  </blockquote>
                </div>
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

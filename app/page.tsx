export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
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
              <div className="text-3xl font-bold text-[#0098EA] mb-2">88.8B</div>
              <div className="text-gray-300">Total Supply</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#0098EA] mb-2">8.8B</div>
              <div className="text-gray-300">Liquidity Pool</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#0098EA] mb-2">80B</div>
              <div className="text-gray-300">Airdrop Pool</div>
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0098EA] mb-4">
              October Airdrop
            </h2>
            <p className="text-gray-300 mb-6">
              80 billion tokens distributed proportionally to all holders every day in October!
            </p>
            <button className="px-8 py-3 bg-[#0098EA] text-white font-bold rounded-full hover:opacity-90 transition-opacity">
              Join Now
            </button>
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

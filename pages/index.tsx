export default function LandingPage() {
    return (
      <main className="min-h-screen bg-[#0e0e16] text-white flex flex-col items-center px-4 relative overflow-hidden">
        {/* Background graphics */}
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-[url('/bg-pattern.svg')] bg-cover opacity-10 pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-800 opacity-30 blur-3xl rounded-full z-0" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-[#5865F2] opacity-20 blur-2xl rounded-full z-0" />
  
        <header className="w-full max-w-4xl py-16 flex flex-col items-center text-center z-10">
          <img src="/vlaid-logo.svg" alt="Vlaid Logo" className="w-20 h-20 mb-6" />
          <h1 className="text-5xl sm:text-6xl font-bold text-[#b29cff] mb-4">
            Meet Vlaid
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Your Telegram-based microlearning assistant. Just send a link, and Vlaid will digest it with GenAI and deliver bite-sized summaries straight to your Telegram.
          </p>
        </header>
  
        <section className="w-full max-w-3xl text-center py-14 border-t border-gray-700 z-10">
          <h2 className="text-3xl font-semibold text-[#b29cff] mb-10">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-10 text-gray-300">
            <div className="flex flex-col items-center">
              <img src="/step-link.svg" alt="Send link" className="w-16 h-16 mb-3" />
              <p>Send any article or link</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/step-ai.svg" alt="GenAI summary" className="w-16 h-16 mb-3" />
              <p>Vlaid reads & summarizes</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/step-telegram.svg" alt="Receive in Telegram" className="w-16 h-16 mb-3" />
              <p>You get digest in Telegram</p>
            </div>
          </div>
        </section>
  
        <section className="w-full max-w-3xl text-center py-14 border-t border-gray-700 z-10">
          <h2 className="text-3xl font-semibold text-[#b29cff] mb-6">Start learning fast</h2>
          <a
            href="https://t.me/vlaid_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#5865F2] hover:bg-[#4752c4] text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl transition-colors"
          >
            Open in Telegram
          </a>
        </section>
  
        <footer className="w-full max-w-4xl py-10 text-center text-xs text-gray-500 border-t border-gray-700 z-10">
          <p>Made with ❤️ and GenAI — Vlaid Bot © {new Date().getFullYear()}</p>
        </footer>
      </main>
    );
  }
  
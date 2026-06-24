import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans selection:bg-[#0071e3] selection:text-white">
      {/* Navigation */}
      <nav className="w-full bg-[#fbfbfd]/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#d2d2d7]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg tracking-tight">Maaster</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm text-[#1d1d1f]/80">
              <Link href="#portfolio" className="hover:text-[#0071e3] transition-colors">Portfolio</Link>
              <Link href="#technology" className="hover:text-[#0071e3] transition-colors">Technology</Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] mb-6">
            Digitizing experiences.<br className="hidden md:block"/> Building the future.
          </h1>
          <p className="text-xl md:text-2xl text-[#86868b] max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
            The Maaster organization is a digital-first incubator and holding company. We deploy cutting-edge SaaS products, technology tools, and physical solutions to elevate how businesses operate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#portfolio" 
              className="bg-[#1d1d1f] text-white px-8 py-3 rounded-full font-medium hover:bg-[#333336] transition-colors"
            >
              Explore Our Portfolio
            </Link>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Ecosystem</h2>
              <p className="text-xl text-[#86868b]">A unified portfolio powered by technology.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Event Maaster */}
              <div className="bg-[#fbfbfd] p-10 rounded-3xl border border-[#d2d2d7]/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#0071e3]/10 text-[#0071e3] rounded-2xl flex items-center justify-center mb-6 text-xl">✨</div>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">Event Maaster</h3>
                <p className="text-[#86868b] mb-6 leading-relaxed">Premium event planning and digital experiences for modern celebrations and corporate functions.</p>
                <Link href="https://event.maaster.online" className="text-[#0071e3] font-medium hover:underline flex items-center gap-1">
                  Visit Event Maaster <span className="text-sm">↗</span>
                </Link>
              </div>

              {/* Invite Maaster */}
              <div className="bg-[#fbfbfd] p-10 rounded-3xl border border-[#d2d2d7]/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#e30071]/10 text-[#e30071] rounded-2xl flex items-center justify-center mb-6 text-xl">💌</div>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">Invite Maaster</h3>
                <p className="text-[#86868b] mb-6 leading-relaxed">Beautiful, interactive, web-based digital invitations for modern events.</p>
                <Link href="https://invite.maaster.online" className="text-[#0071e3] font-medium hover:underline flex items-center gap-1">
                  Visit Invite Maaster <span className="text-sm">↗</span>
                </Link>
              </div>

              {/* Lyrics Maaster (RiLycs) */}
              <div className="bg-[#fbfbfd] p-10 rounded-3xl border border-[#d2d2d7]/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#8c52ff]/10 text-[#8c52ff] rounded-2xl flex items-center justify-center mb-6 text-xl">🎵</div>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">Lyrics Maaster (RiLycs)</h3>
                <p className="text-[#86868b] mb-6 leading-relaxed">India-first live captioning and music recognition engine for spiritual and live events.</p>
                <Link href="https://lyrics.maaster.online" className="text-[#0071e3] font-medium hover:underline flex items-center gap-1">
                  Visit RiLycs <span className="text-sm">↗</span>
                </Link>
              </div>

              {/* PhotoMaaster */}
              <div className="bg-[#fbfbfd] p-10 rounded-3xl border border-[#d2d2d7]/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#bf4800]/10 text-[#bf4800] rounded-2xl flex items-center justify-center mb-6 text-xl">📸</div>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">PhotoMaaster</h3>
                <p className="text-[#86868b] mb-6 leading-relaxed">AI-powered event photo sharing platform. Instant WhatsApp delivery via facial recognition.</p>
                <Link href="https://photo.maaster.online" className="text-[#0071e3] font-medium hover:underline flex items-center gap-1">
                  Visit PhotoMaaster <span className="text-sm">↗</span>
                </Link>
              </div>

              {/* HisabMaaster */}
              <div className="bg-[#fbfbfd] p-10 rounded-3xl border border-[#d2d2d7]/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#2d8a39]/10 text-[#2d8a39] rounded-2xl flex items-center justify-center mb-6 text-xl">💸</div>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">HisabMaaster</h3>
                <p className="text-[#86868b] mb-6 leading-relaxed">Enterprise-grade organizational expense tracker with transparent auditing and WhatsApp OTP auth.</p>
                <Link href="https://hisab.maaster.online" className="text-[#0071e3] font-medium hover:underline flex items-center gap-1">
                  Visit HisabMaaster <span className="text-sm">↗</span>
                </Link>
              </div>

              {/* Interior Maaster */}
              <div className="bg-[#fbfbfd] p-10 rounded-3xl border border-[#d2d2d7]/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#8a2d85]/10 text-[#8a2d85] rounded-2xl flex items-center justify-center mb-6 text-xl">🛋️</div>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">Interior Maaster</h3>
                <p className="text-[#86868b] mb-6 leading-relaxed">End-to-end turnkey interior design solutions tailored for modern residential and commercial spaces.</p>
              </div>

              {/* Fabrication Maaster */}
              <div className="bg-[#fbfbfd] p-10 rounded-3xl border border-[#d2d2d7]/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#4a4a4a]/10 text-[#4a4a4a] rounded-2xl flex items-center justify-center mb-6 text-xl">⚙️</div>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">Fabrication Maaster</h3>
                <p className="text-[#86868b] mb-6 leading-relaxed">Precision fabrication and engineering services building the physical infrastructure of tomorrow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Highlight */}
        <section id="technology" className="py-24 bg-[#1d1d1f] text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Built for scale.</h2>
            <p className="text-xl text-[#a1a1a6] mb-12">
              Our software products are powered by an advanced serverless architecture. We utilize Cloudflare edge networks, WhatsApp-first authentication, and distributed databases to guarantee zero downtime.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
              <div className="font-semibold text-lg">Next.js</div>
              <div className="font-semibold text-lg">Cloudflare</div>
              <div className="font-semibold text-lg">React & Vite</div>
              <div className="font-semibold text-lg">Neon Serverless</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#fbfbfd] border-t border-[#d2d2d7]/50 py-12 px-4 sm:px-6 lg:px-8 text-sm text-[#86868b]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Maaster Organization. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

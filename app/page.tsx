export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          3D Heritage Marketplace
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          Preserve History.<br />
          <span className="text-[#58a6ff]">Sell Your 3D Scans.</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          The premier marketplace for high-quality 3D scans of historical monuments and sites.
          Museums, educators, VR developers, and researchers find exactly what they need — or sell their work to the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Start Selling — $99/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-4 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[
            ["500+", "Scans Listed"],
            ["120+", "Active Sellers"],
            ["40+", "Countries"],
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-extrabold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Seller Subscription</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Seller</div>
          <div className="text-5xl font-extrabold text-white mb-1">$99<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to sell 3D heritage scans at scale.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited scan uploads",
              "Custom storefront page",
              "Per-scan buyer purchases",
              "Analytics & download tracking",
              "Priority listing placement",
              "Commercial license templates",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No setup fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Who can sell on Pyramid?",
              a: "Any heritage photographer, archaeologist, or 3D scanning professional can subscribe and list their scans. We welcome both independent creators and institutions.",
            },
            {
              q: "How do buyers purchase scans?",
              a: "Buyers browse the marketplace for free and pay per scan. No subscription required for buyers — just find the scan you need and purchase a license instantly.",
            },
            {
              q: "What file formats are supported?",
              a: "We support all major 3D formats including OBJ, FBX, GLTF, PLY, and E57 point clouds. Sellers can bundle multiple formats in a single listing.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Pyramid 3D Heritage Marketplace. All rights reserved.
      </footer>
    </main>
  );
}

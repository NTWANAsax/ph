export default function Home(){
  return(
    <main className="min-h-screen bg-black">
      {/* NAV */}
      <nav className="flex justify-between items-center p-6 border-b border-[#D4AF37]/20">
        <h1 className="text-2xl font-bold text-[#D4AF37] tracking-[0.2em]">PHETHAGATSA</h1>
        <div className="flex gap-6 text-sm text-[#F5E6B8]/80">
          <a href="#" className="hover:text-[#D4AF37]">Shop</a>
          <a href="#" className="hover:text-[#D4AF37]">About</a>
          <a href="/admin/login" className="border border-[#D4AF37] px-4 py-1 rounded-full hover:bg-[#D4AF37] hover:text-black">Admin</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 md:px-20 py-24 text-center">
        <p className="text-[#7FB069] tracking-[0.3em] text-xs mb-4">MODERN AFRICAN SKINCARE</p>
        <h2 className="text-5xl md:text-7xl font-light text-[#F5E6B8] leading-tight">Rooted in Nature.<br/><span className="text-[#D4AF37] italic">Crafted for Radiance.</span></h2>
        <p className="mt-6 text-[#F5E6B8]/60 max-w-xl mx-auto">Luxury botanical formulations from the heart of Africa. Ethically sourced. Dermatologically tested.</p>
        <button className="mt-10 bg-[#D4AF37] text-black px-10 py-3 rounded-full font-semibold hover:bg-[#F5E6B8] transition">Shop Collection</button>
      </section>

      {/* PRODUCTS GRID PLACEHOLDER */}
      <section className="px-6 md:px-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1,2,3].map(i=>(
          <div key={i} className="border border-[#D4AF37]/20 p-6 rounded-2xl bg-[#0a0a0a]">
            <div className="h-64 bg-gradient-to-b from-[#1A3C34] to-black rounded-xl mb-4"></div>
            <h3 className="text-[#D4AF37]">Botanical Serum #{i}</h3>
            <p className="text-[#F5E6B8]/50 text-sm mt-1">R 450.00</p>
          </div>
        ))}
      </section>

      <footer className="text-center py-10 text-[#F5E6B8]/30 text-xs border-t border-[#D4AF37]/10 mt-20">© 2024 Phethagatsa Solutions - Sandton, SA</footer>
    </main>
  )
}

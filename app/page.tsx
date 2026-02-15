export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F2EE] text-black">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Luxe wax melts, made for the moments you actually live in.
        </h1>
        <p className="mt-6 text-lg text-black/70">
          Hand-poured in Norfolk. Designed for cosy corners, fresh linen days
          and homes that smell as beautiful as they feel.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#collection"
            className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90"
          >
            Shop Scents
          </a>
          <a
            href="#story"
            className="border border-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition"
          >
            Our Story
          </a>
        </div>
      </section>

      {/* Edits Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          
          <div className="border p-8 rounded-3xl">
            <h2 className="text-2xl font-semibold">Cosy Edit</h2>
            <p className="mt-4 text-black/70">
              Soft, warm and comforting blends made for slow evenings,
              gentle lighting and quiet homes.
            </p>
          </div>

          <div className="border p-8 rounded-3xl">
            <h2 className="text-2xl font-semibold">Fresh Edit</h2>
            <p className="mt-4 text-black/70">
              Clean, airy scents inspired by fresh linen, open windows
              and calm mornings.
            </p>
          </div>

        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="py-20 px-6 bg-[#F6F2EE]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">Signature Scents</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            
            <div className="bg-white p-6 rounded-3xl border">
              <h3 className="text-xl font-semibold">Sunday Linen</h3>
              <p className="mt-3 text-black/70">
                Fresh, clean linen softened with gentle cosy warmth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border">
              <h3 className="text-xl font-semibold">Amber Hearth</h3>
              <p className="mt-3 text-black/70">
                Warm amber and soft vanilla with a hint of plum.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border">
              <h3 className="text-xl font-semibold">Cashmere Mornings</h3>
              <p className="mt-3 text-black/70">
                Creamy cashmere with soft musk and gentle warmth.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="mt-6 text-black/70 leading-relaxed">
            Tilly & Roo Norfolk is a small-batch wax melt brand built around
            beautiful scent and everyday comfort.
            <br /><br />
            Each blend is hand-poured in Norfolk and carefully tested
            for balance, throw and that “walk into the room and smile” feeling.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F6F2EE] py-10 text-center text-sm text-black/60">
        © {new Date().getFullYear()} Tilly & Roo Norfolk. All rights reserved.
      </footer>

    </main>
  );
}

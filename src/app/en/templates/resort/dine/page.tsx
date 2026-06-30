import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";

const menu = [
  { category: "Starters", tag: "Starters",
    items: [
      { name: "Grilled Aegean Octopus", desc: "Slow-cooked with wild oregano, local capers, and a squeeze of lemon", price: "$28", img: "dish-octopus.jpg" },
      { name: "Cretan Dakos", desc: "Barley rusks soaked in olive oil, grated tomato, barrel-aged feta", price: "$16", img: "restaurant-terrace-food.jpg" },
      { name: "Calamari Fritto", desc: "Lightly battered crispy squid, house-made citrus garlic aioli", price: "$18", img: "pkg-bbq.jpg" },
      { name: "Chilled Gazpacho", desc: "Sun-ripened tomato, cucumber, green pepper, sherry vinegar", price: "$15", img: "restaurant-indoor.jpg" },
    ] },
  { category: "Mains", tag: "Mains",
    items: [
      { name: "Sea Bream in Salt Crust", desc: "Fresh whole bream baked in salt, carved table-side with herbs", price: "$42", img: "dining.jpg" },
      { name: "Slow-Roasted Lamb Shoulder", desc: "Wild herbs, garlic, slow-cooked until falling apart", price: "$38", img: "gallery-8.jpg" },
      { name: "Lobster Linguine", desc: "Handmade pasta, local lobster, creamy saffron, white wine", price: "$46", img: "terrace-dining-caldera.jpg" },
      { name: "Wild Mushroom Risotto", desc: "Acquerello rice, forest mushrooms, Parmigiano-Reggiano, truffle oil", price: "$32", img: "dish-risotto.jpg" },
    ] },
  { category: "Desserts", tag: "Desserts",
    items: [
      { name: "Baklava with Greek Yogurt", desc: "Layered phyllo, walnuts, honey syrup, thick strained yogurt", price: "$14", img: "dish-baklava.jpg" },
      { name: "Orange-Almond Cake", desc: "Semolina, blood orange syrup, toasted almond flakes", price: "$12", img: "dish-cake.jpg" },
      { name: "Honey & Fig Ice Cream", desc: "Wild thyme honey, dried Smyrna figs, vanilla bean", price: "$10", img: "dish-icecream.jpg" },
      { name: "Olive Oil Chocolate Mousse", desc: "Dark couverture, early-harvest olive oil, sea salt flakes", price: "$16", img: "dish-mousse.jpg" },
    ] },
  { category: "Wines", tag: "Wines",
    items: [
      { name: "Assyrtiko, Santorini 2023", desc: "Crisp minerality, citrus, the signature dry white of the island", price: "$14", img: "bar-rooftop-sunset.jpg" },
      { name: "Xinomavro, Naoussa 2020", desc: "Complex red, wild cherry, sun-dried tomato, warm spices", price: "$18", img: "concept-2.jpg" },
      { name: "Mandilaria, Rhodes 2021", desc: "Full-bodied, dark fruit, soft oak, long finish", price: "$16", img: "aerial-caldera-golden.jpg" },
      { name: "Vinsanto, Santorini", desc: "Naturally sweet sun-dried grape wine, barrel-aged 4 years", price: "$22", img: "aerial-village-dusk.jpg" },
    ] },
];

export default function DinePage() {
  const allItems = menu.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.tag }))
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
        <section className="relative h-[65vh] overflow-hidden flex items-end pb-14">
          <img
            src="/templates/resort/sub-hero-dine.jpg"
            alt="OHMT Dining"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
          <div className="relative z-10 max-w-[1440px] mx-auto w-full px-10">
            <h1 className="text-white tracking-[-0.02em] leading-[0.85] mb-6 font-semibold uppercase"
              style={{ fontSize: "clamp(80px, 14vw, 220px)" }}>
            THE<br />CULINARY
          </h1>
            <p className="text-white/70 text-[19px] max-w-[520px] font-[300] leading-relaxed">
              Michelin-starred cuisine prepared with the day&apos;s catch.<br />
              Every dish written by the sea, not the menu.
            </p>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-10 py-16 border-b border-white/10 mb-16">
          <p className="text-white/60 text-[15px] md:text-[17px] font-[300] leading-[1.85] max-w-[720px]">
            Every dish begins before the kitchen opens. At dawn, our team meets the boats returning from the Aegean. By noon, the day&apos;s menu is written. By evening, the terrace is set — and the sea is always the backdrop.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-16 items-center max-w-[1440px] mx-auto px-10 mb-20">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              src="/templates/resort/restaurant-indoor.jpg"
              alt="OHMT Restaurant interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-white/85 text-[17px] leading-[1.9] font-[300] mb-6">
              At OHMT, every meal is a conversation between land and sea. Our kitchen draws from the 
              coastal pantry of the Aegean: sun-ripened tomatoes, wild herbs gathered from the cliffs, 
              fish caught at dawn and served within hours. The Michelin-starred team works with 
              restraint and respect, letting each ingredient speak for itself against a backdrop of 
              panoramic ocean views.
            </p>
            <p className="text-white/70 text-[15px] leading-[1.8] font-[300]">
              Head chef Elena Marchetti sources directly from local fishermen and small-batch 
              producers across the Cyclades. Every dish begins on the water or in the soil, 
              never on a plate. The menu changes with the seasons and the catch, guided by 
              what is freshest rather than what is expected.
            </p>
            <div className="mt-8 pl-6 border-l-2 border-[var(--accent)]">
              <p className="text-white/60 text-[14px] leading-[1.7] font-[300] italic">
                &ldquo;We do not impose on the ingredients. We listen to them. The sea tells us 
                what to cook each morning.&rdquo;
              </p>
              <p className="text-[var(--accent)] text-[12px] font-medium mt-2 tracking-widest uppercase">
                Chef Elena Marchetti
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24 max-w-[1440px] mx-auto px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allItems.map((item) => (
              <div key={item.name} className="group rounded-2xl overflow-hidden bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`/templates/resort/${item.img}`}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-medium text-white/40 uppercase tracking-[0.1em] bg-white/10 rounded-full px-3 py-1">
                      {item.category}
                    </span>
                    <span className="text-[var(--accent)] text-sm font-semibold ml-auto">{item.price}</span>
                  </div>
                  <h3 className="text-white text-[15px] font-medium leading-snug mb-1">{item.name}</h3>
                  <p className="text-white/50 text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

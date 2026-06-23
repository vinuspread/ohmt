"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowLeft, Shield, Truck, RefreshCw, Star } from "lucide-react";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { Button } from "../../_components/ui/Button";
import Link from "next/link";

const FASHION_PRODUCTS = [
  {
    id: 1,
    name: 'WOOL BUCKET HAT',
    price: '$120.00',
    image: '/templates/OHMT001-fashion/wool-hat.png',
    category: 'Accessories',
    desc: 'A meticulously crafted structured wool bucket hat. Featuring clean geometric seams and an elegant minimalist silhouette. Perfect for high-fashion layering.',
    longDesc: 'Engineered for contemporary luxury, the Wool Bucket Hat is sculpted from heavily brushed, premium virgin wool. Designed with clean geometric panel construction, it holds its architectural silhouette while offering structural warmth. The inner lining is finished in a premium silk-blend cupro, feeling exceptionally soft against the hair and forehead. Finished with a subtle tone-on-tone embroidered logo on the side seam.\n\nThis bucket hat is designed to naturally frame the head, softening facial features while creating a sharp, modern shadow. The brim width and angle have undergone numerous drape tests to shield the eyes elegantly while maintaining ample visibility.\n\nA perfect companion for minimalist wool coats or classic leather jackets, this accessory adds a refined touch to any cold-weather ensemble.',
    specs: [
      { label: 'Composition', value: '100% Premium Virgin Wool Outer, 100% Cupro Lining' },
      { label: 'Sizing', value: 'One Size (Fits head circumference 56cm - 58cm)' },
      { label: 'Brim & Height', value: 'Brim width: 6.5cm, Crown height: 9.5cm' },
      { label: 'Lining Details', value: 'Anti-static, hair-smoothing silk-feel cupro lining' },
      { label: 'Care Instructions', value: 'Dry clean only to maintain shape and texture' },
      { label: 'Stitching', value: 'Concealed seams with high-precision blind stitching' },
      { label: 'Warranty', value: '1-Year repair support for stitching and lining' },
      { label: 'Origin', value: 'Hand-finished in a millinery workshop in Munich, Germany' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Charlotte L.', rating: 5, date: 'May 14, 2026', text: 'Beautiful structure. Holds its shape perfectly in the wind and looks incredibly high-end. The wool is so dense.' },
      { id: 'r2', reviewer: 'Daniel W.', rating: 4, date: 'April 20, 2026', text: 'The cupro lining makes a massive difference in comfort. No forehead irritation. The packaging was also exquisite.' },
      { id: 'r3', reviewer: 'Lily A.', rating: 5, date: 'May 27, 2026', text: 'Stunning hat! I got it in black, and it instantly elevates even a casual puffer jacket. Highly recommend.' },
      { id: 'r4', reviewer: 'Grace K.', rating: 5, date: 'June 02, 2026', text: 'Handmade quality really shows. Stitching is perfectly uniform. A must-have accessory.' }
    ]
  },
  {
    id: 2,
    name: 'CLASSIC TRENCH COAT',
    price: '$850.00',
    image: '/templates/OHMT001-fashion/trench-coat.png',
    category: 'Outerwear',
    desc: 'An oversized double-breasted trench coat tailored in durable cotton gabardine. Minimalist belt closure with structural storm flaps for an understated silhouette.',
    longDesc: 'A modern iteration of a timeless icon, this Classic Trench Coat is tailored from water-repellent, high-density cotton gabardine. Designed with an intentional oversized drape, it features exaggerated storm flaps, a clean hidden throat latch, and deep welt pockets. The minimalist belt closure is finished with real leather-wrapped buckles. Half-lined in a smooth viscose fabric for perfect seasonal layering.\n\nThis trench coat is built to be styled two ways: wear it loose for a modern H-line silhouette, or cinch the belt tightly for an elegant, draped A-line shape. The dropped-shoulder design ensures comfortable layering over chunky knits or structured blazers.\n\nThe premium gabardine yarn is treated with a durable water-resistant glaze, repelling light spring showers while remaining highly breathable and resistant to heavy creasing.',
    specs: [
      { label: 'Shell Material', value: '100% Organic High-Density Cotton Gabardine (Water-repellent)' },
      { label: 'Lining Material', value: '100% Viscose Charmeuse (Sleeves and half-back lining)' },
      { label: 'Hardware', value: 'Genuine Buffalo Horn Buttons, Italian Calf Leather Buckles' },
      { label: 'Fit Profile', value: 'Oversized double-breasted fit with dropped shoulders' },
      { label: 'Design Elements', value: 'Back storm flap, buttoned epaulets, adjustable cuff straps' },
      { label: 'Care Instructions', value: 'Professional dry clean only; protect leather hardware' },
      { label: 'Warranty', value: 'Lifetime button replacement and stitching repair' },
      { label: 'Origin', value: 'Tailored at a specialty outerwear atelier in London, UK' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Sophia K.', rating: 5, date: 'June 01, 2026', text: 'The gabardine is heavy and water-repellent. The oversized silhouette is exactly what I was looking for. Perfect drape.' },
      { id: 'r2', reviewer: 'Julius M.', rating: 5, date: 'May 18, 2026', text: 'Timeless piece. The leather details on the buckle are beautiful. The horn buttons have gorgeous natural patterns.' },
      { id: 'r3', reviewer: 'Emily H.', rating: 4, date: 'May 25, 2026', text: 'Runs very large. I usually wear M but ordered S and it fits perfectly with room for a sweater. Check the size chart.' },
      { id: 'r4', reviewer: 'Victoria P.', rating: 5, date: 'June 09, 2026', text: 'Excellent length (hits below the knee). It looks extremely chic when belted. The fabric is thick and expensive-feeling.' }
    ]
  },
  {
    id: 3,
    name: 'MINIMALIST BACKPACK',
    price: '$350.00',
    image: '/templates/OHMT001-fashion/backpack.png',
    category: 'Bags',
    desc: 'Crafted in premium matte black leather. Single flap compartment with clean concealed zip structures. The ultimate essential container for active modern life.',
    longDesc: 'Crafted for the modern minimalist, our flagship backpack is constructed from premium full-grain Italian pebble leather with a water-resistant matte coating. The single flap compartment opens to a spacious interior featuring a padded laptop sleeve (up to 16") and quick-access internal slots. Reinforced concealed YKK zippers and breathable mesh back pads ensure comfort and high durability.\n\nWithout any visible exterior pockets or dangling straps, it maintains a clean, block-like profile that sits perfectly over tailored suits and casual outfits alike. A hidden anti-theft zipper slot on the back panel secures your passport and wallet.\n\nThe zippers are sealed with polyurethane coating to repel moisture, ensuring your tech gear remains safe during rainy commutes.',
    specs: [
      { label: 'Leather Type', value: '100% Full-Grain Italian Pebble Leather (Water-resistant finish)' },
      { label: 'Lining Material', value: '100% Recycled Waterproof Eco-Nylon' },
      { label: 'Dimensions', value: '17.5" H x 12.5" W x 5.5" D (32 x 45 x 14 cm)' },
      { label: 'Laptop Sleeve', value: 'Microfiber-lined padded compartment fits up to 16" MacBook Pro' },
      { label: 'Zippers', value: 'YKK AquaGuard matte water-repellent zippers' },
      { label: 'Shoulder Straps', value: 'Leather-faced adjustable straps with high-density airmesh padding' },
      { label: 'Warranty', value: 'Lifetime warranty on leather, zippers, and stitching' },
      { label: 'Origin', value: 'Handcrafted in Florence, Italy' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Lucas F.', rating: 5, date: 'June 05, 2026', text: 'Super clean design. No unnecessary straps hanging around. The leather is thick, heavy, and smells amazing.' },
      { id: 'r2', reviewer: 'Emma T.', rating: 4, date: 'May 24, 2026', text: 'Fits my 16" laptop perfectly. Very comfortable to wear even when fully loaded. Leather adds a bit of weight.' },
      { id: 'r3', reviewer: 'Sarah J.', rating: 5, date: 'May 31, 2026', text: 'The mesh back is highly breathable. The hidden passport pocket is a lifesaver for travel. Outstanding product.' },
      { id: 'r4', reviewer: 'Henry R.', rating: 5, date: 'June 07, 2026', text: 'Perfect waterproofing. Got caught in a downpour and the water just beaded off. Laptop stayed completely dry.' }
    ]
  },
  {
    id: 4,
    name: 'PREMIUM LEATHER BOOTS',
    price: '$480.00',
    image: '/templates/OHMT001-fashion/boots.png',
    category: 'Footwear',
    desc: 'Square-toe high-top boots featuring premium brushed calfskin leather. Side zip closure with a stacked leather heel. Pure sculptural aesthetics.',
    longDesc: 'Embodying sleek structural design, these Square-Toe Boots are hand-finished from premium brushed calfskin leather. Features include a side metal zip closure with a secure leather pull, a fully lined calfskin interior, and an orthotic foam-cushioned footbed. Complete with a 2-inch stacked leather block heel and rubber sole pads for exceptional traction.\n\nThe square-toe silhouette is balanced to be neither too blocky nor too sharp, ensuring it coordinates perfectly with wide-leg trousers, tailored suits, or cropped denim.\n\nThe inner side zipper is a premium Excella zip, detailed with a protective leather guard backing to prevent snagging and protect socks from catching.',
    specs: [
      { label: 'Upper', value: '100% Premium Calfskin Leather (Brushed finish)' },
      { label: 'Lining', value: '100% Breathable Soft Pigskin Leather' },
      { label: 'Outsole', value: 'Stacked Leather Sole with Vibram Rubber Forepart' },
      { label: 'Heel Height', value: '2.0" / 50mm Stacked Leather Block Heel' },
      { label: 'Zipper', value: 'YKK Excella luxury metal side zipper' },
      { label: 'Construction', value: 'Blake Stitch construction (Flexible and lightweight)' },
      { label: 'Warranty', value: 'Lifetime resoling support (Vibram outsole replacement)' },
      { label: 'Origin', value: 'Handmade in Tuscany, Italy' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Mia B.', rating: 5, date: 'June 10, 2026', text: 'Absolute sculptural art. They look incredibly sharp and the block heel makes them super comfortable to walk in.' },
      { id: 'r2', reviewer: 'Noah J.', rating: 5, date: 'May 29, 2026', text: 'The calfskin leather is rich and glossy. True to size. The zipper is incredibly smooth.' },
      { id: 'r3', reviewer: 'David L.', rating: 5, date: 'June 01, 2026', text: 'Looks great when pants drape over the ankle. The square toe is highly sophisticated and modern.' },
      { id: 'r4', reviewer: 'Olivia S.', rating: 4, date: 'June 06, 2026', text: 'A bit stiff around the ankle on the first day, but molded to my foot perfectly by day three. Highly recommend.' }
    ]
  },
  {
    id: 5,
    name: 'SILK EVENING DRESS',
    price: '$1,200.00',
    image: '/templates/OHMT001-fashion/silk-dress.png',
    category: 'Dresses',
    desc: 'A flowing floor-length dress cut in pure heavyweight silk charmeuse. Open back architecture with a delicate fluid neckline. Understated elegance.',
    longDesc: 'A masterclass in fluidity and elegance, our Silk Evening Dress is bias-cut from high-weight silk charmeuse. Featuring a beautiful open-back design secured by delicate cross-straps and a cowl neckline that drapes gracefully. The fabric flows effortlessly around the ankles, offering a liquid-like sheen under ambient lights.\n\nDue to the bias cut, the fabric naturally stretches and contours to the body without the need for stiff, restrictive zippers. The organic mulberry silk fiber provides a cooling feel and naturally prevents static cling.\n\nThe skirt finishes in a subtle mermaid puddle train, making it the perfect gown for formal galas, black-tie events, or elegant wedding receptions.',
    specs: [
      { label: 'Material', value: '100% Natural Mulberry Silk Charmeuse (22 Momme Heavyweight)' },
      { label: 'Cutting', value: 'Bias-cut construction for a natural stretch silhouette' },
      { label: 'Neckline', value: 'Draped Cowl Neckline' },
      { label: 'Back Design', value: 'Adjustable cross-strap open back' },
      { label: 'Length', value: 'Full length (61" from high shoulder point)' },
      { label: 'Care Instructions', value: 'Dry clean only; handle with care' },
      { label: 'Warranty', value: 'First-time complimentary snag repair service' },
      { label: 'Origin', value: 'Crafted in Paris, France' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Isabella M.', rating: 5, date: 'June 02, 2026', text: 'Words cannot describe how beautiful this silk feels. It flows like water. The open back is gorgeous.' },
      { id: 'r2', reviewer: 'Olivia P.', rating: 5, date: 'May 14, 2026', text: 'Stunning evening dress. Wore it to a gala and received endless compliments. Drape is perfect.' },
      { id: 'r3', reviewer: 'Grace F.', rating: 5, date: 'May 29, 2026', text: 'The bias cut hugs every curve beautifully without feeling tight. The champagne color is so rich.' },
      { id: 'r4', reviewer: 'Sophia T.', rating: 5, date: 'June 04, 2026', text: 'Pure luxury. Better quality silk than dresses costing twice the price at department stores.' }
    ]
  },
  {
    id: 6,
    name: 'COTTON BASICS TEE',
    price: '$65.00',
    image: '/templates/OHMT001-fashion/basic-tee.png',
    category: 'Tops',
    desc: 'A boxy heavyweight cotton jersey tee. Clean bound crew neck with side split hem architectures. Built for comfortable, long-lasting luxury basics.',
    longDesc: 'Constructed from pre-shrunk, high-density cotton jersey, the Cotton Basics Tee is built to retain its structured silhouette through years of wear. It features a boxy fit, dropped shoulders, and a thick rib-knit collar. Clean side split hems add subtle design interest and prevent bunching when tucked.\n\nTo prevent collar stretching, the neckline is finished with a bound rib collar and reinforced triple-needle chain stitching. It resists stretching out even after repeated machine washes.\n\nThe fabric undergoes a bio-silicone wash to remove all surface lint, resulting in a smooth, matte finish that feels incredibly soft yet retains a dense, structured weight.',
    specs: [
      { label: 'Material', value: '100% Organic Combed Cotton Single Jersey (260 gsm Heavyweight)' },
      { label: 'Fit Profile', value: 'Boxy, relaxed fit with dropped shoulders' },
      { label: 'Collar Detail', value: 'Bound crew neck with triple-needle stitch reinforcement' },
      { label: 'Hem Details', value: 'Side split hem for easy front tucking' },
      { label: 'Finish', value: 'Bio-silicone wash for lint prevention' },
      { label: 'Shrinkage', value: 'Pre-shrunk (Less than 1% dimensional change after wash)' },
      { label: 'Care Instructions', value: 'Machine wash cold; hang dry recommended' },
      { label: 'Origin', value: 'Milled and sewn in Portugal' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Ethan S.', rating: 5, date: 'June 11, 2026', text: 'This is the perfect heavyweight tee. Heavy but breathable. The collar stays tight after washing.' },
      { id: 'r2', reviewer: 'Leo G.', rating: 4, date: 'June 01, 2026', text: 'Excellent basic. Holds its boxy shape perfectly. The side slit makes tucking in look very clean.' },
      { id: 'r3', reviewer: 'Alex M.', rating: 5, date: 'May 22, 2026', text: 'Zero show-through because of the density. Very soft on the skin. I have it in three colors now.' },
      { id: 'r4', reviewer: 'Jack B.', rating: 5, date: 'June 08, 2026', text: 'Premium heavy cotton. Doesn’t twist at the seams after washing. Essential wardrobe piece.' }
    ]
  }
];

function ProductDetailPageContent() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [openTab, setOpenTab] = useState<string | null>(null);

  const toggleTab = (tabName: string) => {
    setOpenTab(openTab === tabName ? null : tabName);
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const product = FASHION_PRODUCTS.find((p) => String(p.id) === String(params.id));

  if (!mounted) return null;
  if (!product) return <div className="pt-40 text-center uppercase font-bold tracking-widest text-[13px]">Product not found</div>;

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white min-h-screen pt-20 md:pt-28 pb-12 selection:bg-black selection:text-white">
        <Navbar />
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Back Navigation */}
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-10"
          >
            <ArrowLeft size={12} /> Back to Collection
          </Button>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 mb-16 md:mb-24">
            {/* Left: Product Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-3/5 lg:sticky lg:top-32 h-fit"
            >
              <div className="relative aspect-square bg-[var(--color-bg-secondary)] overflow-hidden w-full flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Right: Product Details Stack */}
            <div className="flex flex-col lg:w-2/5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="space-y-6 md:space-y-8"
              >
                {/* Heading Block */}
                <div className="border-b border-black/10 pb-6">
                  <span className="text-[11px] font-medium text-black/40 uppercase tracking-[0.4em] mb-2 block">
                    {product.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-normal tracking-[-0.02em] uppercase leading-[1.1] text-[var(--color-text)] mb-4">
                    {product.name}
                  </h1>
                  <p className="text-[16px] font-bold text-black/70">
                    {product.price}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[13px] md:text-[14px] text-black/60 leading-[1.4] font-normal normal-case">
                  {product.desc}
                </p>

                {/* Size Selector */}
                <div className="space-y-3">
                  <span className="text-[11px] font-medium text-black/40 uppercase tracking-[0.3em] block">Select Size</span>
                  <div className="flex gap-3">
                    {["S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 text-[13px] font-bold uppercase tracking-wider transition-all border flex items-center justify-center ${
                          selectedSize === size
                            ? "bg-black border-black text-white"
                            : "border-black/15 text-black hover:border-black/55"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions Block */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  {/* Quantity */}
                  <div className="flex items-center justify-between border border-black/15 px-6 py-4 sm:w-36">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:opacity-50 transition-opacity">
                      <Minus size={14} />
                    </button>
                    <span className="text-[12px] font-bold w-4 text-center">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="hover:opacity-50 transition-opacity">
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Add Bag Button */}
                  <Button
                    variant="primary"
                    onClick={() => router.push('/templates/OHMT001-fashion/cart')}
                    className="flex-1 text-[13px] font-bold uppercase tracking-[0.3em] py-6"
                  >
                    ADD TO BAG
                  </Button>
                </div>

                {/* Accordion Tabs */}
                <div className="mt-10 border-t border-black/15">
                  {/* Tab 1: Long Description */}
                  {product && (product as any).longDesc && (
                    <div className="border-b border-black/15">
                      <button
                        onClick={() => toggleTab('details')}
                        className="w-full flex items-center justify-between py-4 text-left font-bold text-[12px] uppercase tracking-[0.2em] text-black hover:opacity-60 transition-opacity"
                      >
                        <span>Material & Details</span>
                        <span>{openTab === 'details' ? '−' : '+'}</span>
                      </button>
                      {openTab === 'details' && (
                        <div className="pb-6 text-[13px] leading-relaxed text-black/60 normal-case font-normal whitespace-pre-line">
                          {(product as any).longDesc}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tab 2: Specs Table */}
                  {product && (product as any).specs && (product as any).specs.length > 0 && (
                    <div className="border-b border-black/15">
                      <button
                        onClick={() => toggleTab('specs')}
                        className="w-full flex items-center justify-between py-4 text-left font-bold text-[12px] uppercase tracking-[0.2em] text-black hover:opacity-60 transition-opacity"
                      >
                        <span>Specifications</span>
                        <span>{openTab === 'specs' ? '−' : '+'}</span>
                      </button>
                      {openTab === 'specs' && (
                        <div className="pb-6">
                          <table className="w-full text-[13px] text-black/60 normal-case">
                            <tbody>
                              {(product as any).specs.map((spec: any, idx: number) => (
                                <tr key={idx} className="border-b border-black/5 last:border-0">
                                  <td className="py-2.5 font-bold text-black uppercase text-[11px] tracking-[0.05em] w-1/3">{spec.label}</td>
                                  <td className="py-2.5 w-2/3">{spec.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tab 3: Reviews */}
                  {product && (product as any).reviewsList && (product as any).reviewsList.length > 0 && (
                    <div className="border-b border-black/15">
                      <button
                        onClick={() => toggleTab('reviews')}
                        className="w-full flex items-center justify-between py-4 text-left font-bold text-[12px] uppercase tracking-[0.2em] text-black hover:opacity-60 transition-opacity"
                      >
                        <span>Reviews ({(product as any).reviewsList.length})</span>
                        <span>{openTab === 'reviews' ? '−' : '+'}</span>
                      </button>
                      {openTab === 'reviews' && (
                        <div className="pb-6 space-y-6 normal-case text-[13px]">
                          {(product as any).reviewsList.map((review: any) => (
                            <div key={review.id} className="border-b border-black/5 pb-4 last:border-0 last:pb-0">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-bold text-black">{review.reviewer}</span>
                                <span className="text-[11px] text-black/40">{review.date}</span>
                              </div>
                              <div className="flex gap-0.5 mb-2">
                                {[1, 2, 3, 4, 5].map((starIdx) => (
                                  <Star
                                    key={starIdx}
                                    size={10}
                                    fill={starIdx <= review.rating ? "black" : "none"}
                                    color={starIdx <= review.rating ? "black" : "#D1D5DB"}
                                    strokeWidth={1.5}
                                  />
                                ))}
                              </div>
                              <p className="leading-relaxed text-black/60">{review.text}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tab 4: Shipping & Returns */}
                  <div className="border-b border-black/15">
                    <button
                      onClick={() => toggleTab('shipping')}
                      className="w-full flex items-center justify-between py-4 text-left font-bold text-[12px] uppercase tracking-[0.2em] text-black hover:opacity-60 transition-opacity"
                    >
                      <span>Shipping & Returns</span>
                      <span>{openTab === 'shipping' ? '−' : '+'}</span>
                    </button>
                    {openTab === 'shipping' && (
                      <div className="pb-6 text-[13px] leading-relaxed text-black/60 normal-case font-normal">
                        <p className="mb-2">Free worldwide shipping on all orders over $250. Orders are shipped via DHL Express and typically arrive within 2-4 business days.</p>
                        <p>We accept returns of unworn items with tags attached in original packaging within 30 days of delivery.</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Service Pointers */}
                <div className="border-t border-black/10 pt-6 space-y-4 text-[13px] font-bold uppercase tracking-[0.25em] text-black/40">
                  <div className="flex items-center gap-3">
                    <Truck size={14} />
                    <span>Free Shipping Worldwide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RefreshCw size={14} />
                    <span>45-day Hassle-free Returns</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield size={14} />
                    <span>Secure Checkout Guarantee</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Editorial Visual Story section */}
          <section className="mt-16 md:mt-24 pb-12 border-t border-black/10">
            <div className="pt-12 md:pt-16 mb-10 md:mb-16">
              <span className="text-[11px] font-medium text-black/40 uppercase tracking-[0.4em] mb-2 block">Atmosphere</span>
              <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tighter leading-none text-black">Understated Silence.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-square bg-[var(--color-bg-secondary)] overflow-hidden"
              >
                <img 
                  src={product.image} 
                  className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-105"
                  alt="Product Editorial representation"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-normal uppercase leading-[1.1] text-black">
                  tailored volumes<br/>redefining digital luxury.
                </h3>
                <div className="w-12 h-px bg-black/20" />
                <p className="text-[13px] md:text-[14px] text-black/60 leading-[1.4] font-normal normal-case max-w-md">
                  Crafting silhouettes that speak volumes through silence. Each garment is meticulously tailored utilizing the finest materials sourced globally. Designed to integrate seamlessly into a curated modern wardrobe. {product.desc}
                </p>
                <div className="pt-4">
                  <Link href="/en/templates/OHMT001-fashion-en" className="text-[13px] font-bold uppercase tracking-[0.25em] border-b border-black pb-1 hover:opacity-50 transition-opacity">
                    Return to Collection
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
        
        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function ProductDetailPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <ProductDetailPageContent {...props} />
    </React.Suspense>
  );
}

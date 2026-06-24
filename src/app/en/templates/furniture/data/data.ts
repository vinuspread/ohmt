// src/app/en/templates/OHMT004-furniture-EN/data/data.ts

export const C = {
  white: "var(--color-bg)",
  bg: "var(--color-light-bg)",
  text: "var(--color-text)",
  sub: "var(--color-secondary)",
  accent: "var(--color-primary)",
  border: "#D2D2D7",
};

export const products = [
  {
    id: "1",
    name: "Siero Lounge Chair",
    category: "Chair",
    price: "$1,290",
    image: "/templates/furniture/chair.png",
    tag: "Essential",
    desc: "A signature lounge chair blending absolute comfort with structural minimalism, maintaining clean geometry and premium ergonomics.",
    longDesc: "Focusing on architectural lines and ergonomic purity, the Siero Lounge Chair is a signature masterpiece that illuminates any contemporary interior. Hand-selected American walnut wood is precisely milled, manually sanded, and finished with natural organic oil to emphasize the deep, rich natural grain of the timber. The buttery-soft premium Italian leather seat combined with a calculated, reclined backrest angle evokes a perfect balance of active conversation and deep relaxation. Built with traditional mortise-and-tenon joinery, it promises lifetime durability to be passed down through generations.\n\nThis chair employs a low-profile design inspired by Mid-Century Modernism, ensuring a visual sense of space and clean lines from every perspective. The metal brackets connecting the backrest and the seat are coated in a matte-black powder finish and cleverly recessed to remain completely out of sight.\n\nOver time, the premium natural aniline leather will develop a unique patina and soft creases, adapting to the user's seating patterns for custom comfort.",
    details: {
      material: "Solid American Walnut (FAS Grade), Premium Italian Full-Grain Leather Seat",
      dimensions: "82cm W x 75cm D x 88cm H",
      weight: "18kg",
      assembly: "Fully assembled (No setup required)",
      maxLoad: "150kg",
      warranty: "5-Year structural frame warranty",
      care: "Wipe with a dry soft cloth; apply leather conditioner once a year",
      origin: "Handcrafted in Milan, Italy"
    },
    reviewsList: [
      { id: "r1", reviewer: "James J.", rating: 5, date: "May 20, 2026", text: "The wood finish is pure artistry. Hands down my favorite armchair in the study. Leather is thick and incredibly soft." },
      { id: "r2", reviewer: "Sarah L.", rating: 5, date: "April 11, 2026", text: "Impeccable craft details. The cushion rebounds instantly and holds its shape. A timeless heirloom piece." },
      { id: "r3", reviewer: "Leo G.", rating: 4, date: "May 03, 2026", text: "Elevates my entire living room setup. The low profile is perfect for reclining comfortably. Definitely worth the price." },
      { id: "r4", reviewer: "Min-woo K.", rating: 5, date: "June 02, 2026", text: "Excellent packing and delivery service. The walnut grain is symmetrical and gorgeous, looks like a museum piece." }
    ],
    gallery: ["/templates/furniture/chair.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "2",
    name: "Velvet Mono Sofa",
    category: "Sofa",
    price: "$3,400",
    image: "/templates/furniture/sofa.png",
    tag: "Luxury",
    desc: "A masterpiece sofa filled with premium down feathers and high-resiliency foam for a deep, immersive relaxation experience.",
    longDesc: "Designed for a heavy, block-like architectural presence and deep rest, the Velvet Mono Sofa offers a low, generous seat position for unmatched comfort. Built on a kiln-dried solid ash hardwood frame, it features layers of high-resiliency foam and premium goose-down padding to maintain plush, cloud-like cushioning for years. The heavy-gauge Belgian velvet linen fabric provides a soft, breathable texture, while the recessed support block feet create a floating, modern aesthetic that visually enlarges your living space.\n\nThe wide, flat armrest profile easily serves as a sturdy side table for teacups, smartphones, or notebooks. Inside, a heavy-duty S-sinuous spring system and dual pocket coil suspension distribute body weight evenly, ensuring ergonomic alignment.\n\nThe entire linen cover set is easily removable and dry-cleanable, allowing for convenient maintenance.",
    details: {
      material: "Kiln-dried solid Ash Wood frame, Premium goose-down feather padding, Belgian velvet linen cover",
      dimensions: "240cm W x 105cm D x 75cm H (Seat depth: 72cm)",
      weight: "62kg",
      assembly: "White glove delivery and professional in-home assembly included",
      maxLoad: "300kg",
      warranty: "10-Year structural frame warranty",
      care: "Fabric cleaner recommended; removable covers are dry-clean only",
      origin: "Produced in Milan, Italy"
    },
    reviewsList: [
      { id: "r1", reviewer: "Robert B.", rating: 5, date: "June 02, 2026", text: "The seat is incredibly deep and cozy, perfect for lounging and napping. Easily fits three adults comfortably." },
      { id: "r2", reviewer: "Sophia W.", rating: 4, date: "May 19, 2026", text: "The fabric texture is highly luxurious. The grey linen matches my decor perfectly. Shipping was delayed but setup was quick." },
      { id: "r3", reviewer: "Emma C.", rating: 5, date: "May 27, 2026", text: "Just the right density - not too soft, feels very supportive. The armrests are wide enough to hold a plate or book easily." },
      { id: "r4", reviewer: "Lucas P.", rating: 5, date: "June 05, 2026", text: "Warm and cozy yet extremely breathable. Unlike synthetic velvet, this does not feel hot or sweaty in the summer." }
    ],
    gallery: ["/templates/furniture/sofa.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "3",
    name: "Oak Dining Table",
    category: "Dining",
    price: "$4,200",
    image: "/templates/furniture/table.png",
    tag: "Essential",
    desc: "A natural minimalist dining table crafted from sustainable European oak, serving as the warm social hub of the home.",
    longDesc: "Crafted from sustainable European oak, our Oak Dining Table is a pure expression of Scandinavian minimalism. Preserving the natural knots and continuous grain patterns of the wood, the wide tabletop is sealed with an ultra-thin, matte polyurethane finish. This coating protects against heat, spills, and stains while preserving the natural wood texture. The sleek, angled legs provide a stable base while ensuring comfortable legroom and smooth traffic flow.\n\nRather than using narrow wood strips, this tabletop features wide solid-oak planks selected for grain harmony, creating a beautiful organic pattern across the surface. The edges are finished with a soft 3R radius curve, making it safe for households with young children.\n\nThe streamlined under-table apron design allows armchairs to slide fully underneath, optimizing your dining space.",
    details: {
      material: "Solid European White Oak (FSC Certified sustainable sourcing)",
      dimensions: "200cm W x 90cm D x 75cm H (Tabletop thickness: 40mm)",
      weight: "85kg",
      assembly: "Leg assembly required (Professional in-home assembly included)",
      maxLoad: "120kg",
      warranty: "3-Year warp and crack warranty",
      care: "Always use hot pads; wipe with a damp cloth followed by a dry cloth",
      origin: "Designed in Denmark, made in EU"
    },
    reviewsList: [
      { id: "r1", reviewer: "Daniel K.", rating: 5, date: "May 25, 2026", text: "Heavy, robust, and beautiful. The oak grain is natural and premium. Easily fits 6 to 8 people." },
      { id: "r2", reviewer: "Grace L.", rating: 5, date: "May 08, 2026", text: "Spacious and clean. Matte coating is highly durable and handles daily family use without staining." },
      { id: "r3", reviewer: "Isabella V.", rating: 5, date: "May 16, 2026", text: "Transforms the kitchen into a cozy cafe. The solid wood feel is reassuringly heavy and solid." },
      { id: "r4", reviewer: "Liam T.", rating: 4, date: "June 04, 2026", text: "Beautiful warm oak tone. Easy to clean. Be sure to use a humidifier in dry winters to protect the wood." }
    ],
    gallery: ["/templates/furniture/table.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "4",
    name: "Walnut Lounge Chair",
    category: "Lounge",
    price: "$2,850",
    image: "/templates/furniture/chair.png",
    tag: "Iconic",
    desc: "A luxurious mid-century modern inspired lounger featuring a hand-molded walnut plywood frame and premium leather cushions.",
    longDesc: "Honoring the iconic designers of the mid-century modern era, the Walnut Lounge Chair features a curved plywood frame faced with premium American walnut veneer. The hand-sewn leather cushions are upholstered in semi-aniline leather for durability and softness. Set upon a high-precision cast aluminum swivel base with a durable powder coating, it offers a smooth, silent 360-degree rotation.\n\nThe chair is designed with a three-piece shell system matching the natural curve of the spine, distributing body weight across the head, back, and lumbar regions. The walnut veneers are hand-pressed in 7 layers for natural flexibility and strength.\n\nIt serves as a commanding statement piece in a reading corner or an executive office lounge.",
    details: {
      material: "7-ply molded Walnut veneer shell, Semi-aniline premium leather, Cast aluminum swivel base",
      dimensions: "85cm W x 82cm D x 78cm H",
      weight: "24kg",
      assembly: "Fully assembled",
      maxLoad: "150kg",
      warranty: "5-Year swivel mechanism and shell warranty",
      care: "Wipe clean; apply leather wax monthly; dust metal base with dry cloth",
      origin: "OEM manufactured for US premium design label"
    },
    reviewsList: [
      { id: "r1", reviewer: "Thomas B.", rating: 5, date: "June 07, 2026", text: "A design classic. Absolutely silent swivel rotation. Cradle-like support makes it great for long reading sessions." },
      { id: "r2", reviewer: "Charlotte F.", rating: 5, date: "May 15, 2026", text: "Stitching and grain alignment are perfect. Premium quality and beautiful detailing." },
      { id: "r3", reviewer: "Henry M.", rating: 4, date: "May 20, 2026", text: "Very comfortable cushion density. Note that it has a large footprint, so check your space before ordering." },
      { id: "r4", reviewer: "Sophia E.", rating: 5, date: "June 08, 2026", text: "A great lounge chair. Reclines at a highly relaxing angle. Sits beautifully alongside modern furniture." }
    ],
    gallery: ["/templates/furniture/chair.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "5",
    name: "Ceramic Pendant Light",
    category: "Lighting",
    price: "$890",
    image: "/templates/furniture/lamp.png",
    tag: "Ambient",
    desc: "A hand-thrown ceramic pendant lamp featuring a raw matte exterior texture and a reflective glazed interior for cozy lighting.",
    longDesc: "Hand-thrown on a potter's wheel, our Ceramic Pendant Light captures the tactile beauty of raw clay. The exterior features an unglazed, textured matte stoneware finish, while the interior is coated in a glossy milk-white glaze to optimize light projection and create a warm, focused glow. Finished with a twisted fabric cord and solid brass fittings, it adds a refined artisanal touch to any room.\n\nFired at 1250 degrees for two days, the shade is highly durable and free from micro-cracks. The natural minerals in the clay create unique, subtle surface details, making each pendant a one-of-a-kind work of art.\n\nHung individually or clustered in groups of two or three over a dining table or kitchen island, it provides cozy ambient lighting.",
    details: {
      material: "Natural clay stoneware (Fired at 1250°C), Solid brass socket and canopy, Fabric-covered cord",
      dimensions: "45cm Diameter x 20cm Height (1.5m adjustable cord included)",
      weight: "4.5kg",
      assembly: "Ceiling installation required (Professional electrician installation recommended)",
      maxLoad: "N/A (Ceiling anchor mount)",
      warranty: "1-Year electrical components warranty",
      care: "Dust with a dry feather duster; wipe interior with a soft cloth",
      origin: "Artisan partnership in Kyoto, Japan"
    },
    reviewsList: [
      { id: "r1", reviewer: "Alice D.", rating: 5, date: "June 01, 2026", text: "The white interior glaze projects a beautifully warm and focused light. Makes dinner look highly inviting." },
      { id: "r2", reviewer: "Kenji S.", rating: 4, date: "May 12, 2026", text: "Beautiful texture. Since it is handmade, there are slight organic variations which add to its character." },
      { id: "r3", reviewer: "Mimi L.", rating: 5, date: "May 28, 2026", text: "Exactly as pictured. The clay texture is beautifully matte. Adds a warm, rustic vibe to my kitchen." },
      { id: "r4", reviewer: "David F.", rating: 5, date: "June 06, 2026", text: "Stunning brass accents. The beige fabric cord hangs perfectly straight and looks highly clean." }
    ],
    gallery: ["/templates/furniture/lamp.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "6",
    name: "Brutalist Side Table",
    category: "Living",
    price: "$1,150",
    image: "/templates/furniture/sidetable.png",
    tag: "Low",
    desc: "A sculptural side table cast from fiber-reinforced concrete, sealed to highlight the raw, monumental beauty of the material.",
    longDesc: "Inspired by Brutalist architectural design, this Side Table features a bold, monumental presence. Cast from high-performance concrete reinforced with structural glass fibers, it offers high strength and stability. Preserving the natural air bubbles and organic color variations of the material, it is sealed with a clear, matte protective finish to resist daily stains and water absorption.\n\nIts monolithic column-like form makes it an ideal accent piece next to a minimalist sofa or as an industrial bedside nightstand.\n\nTo ensure a clean feel, the surface is hand-polished in three stages to remove dust while retaining the authentic concrete texture.",
    details: {
      material: "Glass Fiber Reinforced Concrete (GFRC)",
      dimensions: "40cm W x 40cm D x 45cm H",
      weight: "18kg",
      assembly: "Fully assembled",
      maxLoad: "80kg",
      warranty: "2-Year crack and structural warranty",
      care: "Wipe spills immediately; avoid acidic cleaners and harsh abrasives",
      origin: "Cast and finished at a Brutalist design studio in Germany"
    },
    reviewsList: [
      { id: "r1", reviewer: "Hans E.", rating: 5, date: "May 29, 2026", text: "Heavy and sculptural. Feels like a modern art piece in the living room. Extremely stable." },
      { id: "r2", reviewer: "Olivia K.", rating: 5, date: "April 24, 2026", text: "Perfect couch companion. The matte sealer works perfectly; spilt coffee wiped off cleanly without staining." },
      { id: "r3", reviewer: "Marcus N.", rating: 4, date: "May 11, 2026", text: "Solid and doesn't tip. The concrete texture is smooth to the touch, not chalky or rough." },
      { id: "r4", reviewer: "Elena R.", rating: 5, date: "June 03, 2026", text: "Excellent minimalist table. Adds a clean architectural touch to my reading corner." }
    ],
    gallery: ["/templates/furniture/sidetable.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "7",
    name: "Floating Wall Desk",
    category: "Home Office",
    price: "$1,650",
    image: "/templates/furniture/desk.png",
    tag: "Sleek",
    desc: "A space-saving wall-mounted desk featuring a solid oak top and a laser-cut steel frame for a clean workspace.",
    longDesc: "Ideal for compact apartments or minimalist study rooms, this wall-mounted Floating Wall Desk maximizes floor space. Built with a solid oak tabletop and a powder-coated black steel mounting frame, it offers clean, secure support. The slim drawer features soft-closing dampers, providing quiet and organized storage for laptops, tablets, and paperwork.\n\nWithout table legs, it allows for comfortable chair movement. The integrated rear cable management duct organizes wires out of sight to maintain a clean aesthetic.\n\nThe tabletop is detailed with side slots to hold writing tools or task lamps securely in place.",
    details: {
      material: "Solid European Oak top, 2.5mm laser-cut powder-coated steel wall mount bracket",
      dimensions: "120cm W x 50cm D x 12cm H",
      weight: "32kg",
      assembly: "Wall mounting required (Professional installation recommended; hardware included)",
      maxLoad: "50kg (Mounted to concrete wall)",
      warranty: "3-Year drawer runner and structural warranty",
      care: "Clean with wood cleaner; wipe dry; avoid standing water on the oak top",
      origin: "Co-produced with space designers in Stockholm, Sweden"
    },
    reviewsList: [
      { id: "r1", reviewer: "Lucas V.", rating: 5, date: "June 03, 2026", text: "Anchored to a brick wall; zero wobbling. Cable management is highly useful for keeping wires hidden." },
      { id: "r2", reviewer: "Sophia F.", rating: 4, date: "May 20, 2026", text: "Sleek and space-saving. Makes my small study feel much larger. Precise leveling during install is key." },
      { id: "r3", reviewer: "Arvid K.", rating: 5, date: "May 29, 2026", text: "The soft-closing drawer has a premium, quiet slide. The natural oak wood tone is beautiful." },
      { id: "r4", reviewer: "Julia N.", rating: 5, date: "June 09, 2026", text: "Perfect for my home office setup. Highly recommended for minimalist workspaces." }
    ],
    gallery: ["/templates/furniture/desk.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "8",
    name: "Linen Platform Bed",
    category: "Bedroom",
    price: "$5,400",
    image: "/templates/furniture/bed.png",
    tag: "Serene",
    desc: "A serene bed frame featuring a padded Belgian linen headboard and a solid ash base for restful sleep.",
    longDesc: "Bringing quiet comfort to the bedroom, the Linen Platform Bed is a masterpiece of design. Built on a durable hardwood frame padded with high-resiliency foam, it is upholstered in breathable natural linen from Antwerp, Belgium. The generous padded headboard offers a comfortable backrest for reading or lounging, supported by tapered solid ash wood feet for stability.\n\nThe mattress sits recessed within the platform frame, holding bedding in place for a clean, tailored look reminiscent of a luxury hotel.\n\nTo prevent squeaking, the slat platform is constructed with double-bolted steel brackets and sound-dampening Velcro lining, ensuring quiet performance.",
    details: {
      material: "Premium Belgian Linen cover, Solid Ash wood feet, E0-grade engineered hardwood support frame",
      dimensions: "180cm W x 210cm L x 95cm Headboard H (Accommodates Queen/King sizes)",
      weight: "110kg",
      assembly: "Professional in-home assembly and mattress leveling included",
      maxLoad: "400kg (Evenly distributed)",
      warranty: "5-Year slat and frame joint warranty",
      care: "Fabric spray care recommended; spot clean fabric with mild detergent",
      origin: "Linen woven and assembled in Belgium"
    },
    reviewsList: [
      { id: "r1", reviewer: "Emily S.", rating: 5, date: "June 05, 2026", text: "Incredibly cozy. The linen texture is premium and makes the bedroom feel like a gallery." },
      { id: "r2", reviewer: "Michael D.", rating: 5, date: "May 18, 2026", text: "No squeaks or creaks at all. The heavy platform base is very solid. Mattress fits perfectly." },
      { id: "r3", reviewer: "Clara T.", rating: 4, date: "May 24, 2026", text: "The headboard padding is thick and comfortable to lean back on while watching TV. Beautiful fabric." },
      { id: "r4", reviewer: "Peter H.", rating: 5, date: "June 02, 2026", text: "Soft, breathable Belgian linen feels wonderful to touch. Does not shed fibers or dust. Ideal." }
    ],
    gallery: ["/templates/furniture/bed.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "9",
    name: "Ash Wood Wardrobe",
    category: "Storage",
    price: "$7,800",
    image: "/templates/furniture/wardrobe.png",
    tag: "Grand",
    desc: "A monolithic wardrobe featuring book-matched ash veneers, solid maple interiors, and hand-cast brass hardware.",
    longDesc: "Bringing architectural luxury to home storage, the Ash Wood Wardrobe is built to impress. The exterior features book-matched natural ash veneers, aligned to display a continuous, organic wood grain across the double doors. The interior is lined with fragrant solid maple, detailed with hand-cast solid brass hanging rods and velvet-lined jewelry drawers to elevate your storage experience.\n\nThe wardrobe doors are fitted with premium soft-closing hinges from Hettich, Germany, allowing them to close quietly and smoothly.\n\nAn integrated motion-sensing LED light strip (CRI 95) automatically illuminates the interior when the doors open, providing clear visibility and a premium showcase look.",
    details: {
      material: "Natural Ash veneer, Solid Maple interior, Hand-cast solid brass fittings",
      dimensions: "160cm W x 60cm D x 220cm H",
      weight: "145kg",
      assembly: "Professional 2-man in-home installation and anchoring included",
      maxLoad: "30kg per shelf, 50kg per hanging rod",
      warranty: "10-Year Hettich soft-close hinge warranty",
      care: "Apply furniture oil annually; avoid moisture and direct sunlight",
      origin: "Crafted at a woodworking atelier in Finland"
    },
    reviewsList: [
      { id: "r1", reviewer: "David Y.", rating: 5, date: "June 02, 2026", text: "Ample storage space. The continuous ash grain looks incredible in person. The maple wood interior smells fresh." },
      { id: "r2", reviewer: "Anna B.", rating: 5, date: "April 30, 2026", text: "High-end hardware and solid wood throughout. A statement wardrobe built to last. Impeccable installation." },
      { id: "r3", reviewer: "Silvia K.", rating: 5, date: "May 19, 2026", text: "The automatic LED lights make finding outfits at night highly convenient. Well-organized compartments." },
      { id: "r4", reviewer: "John S.", rating: 5, date: "June 05, 2026", text: "The hand-cast brass handles add a beautiful, subtle detail. Blends perfectly with the rich ash wood." }
    ],
    gallery: ["/templates/furniture/wardrobe.png", "/templates/furniture/lifestyle-narrative.png"]
  }
];

export const stats = [
  { label: "Happy Customers", value: "30K+" },
  { label: "Design Awards", value: "500+" },
  { label: "Years of Heritage", value: "15 Years" }
];

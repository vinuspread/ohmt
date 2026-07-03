export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: "collection" | "archive";
  material: string;
  color: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "WOOL BUCKET HAT",
    price: "$120.00",
    image: "/templates/OHMT001-fashion/wool-hat.png",
    category: "collection",
    material: "Pure New Wool",
    color: "Charcoal Black",
    description: "Sculpted from premium Italian wool. A modern reinterpretation of a timeless silhouette. Features a structured brim and breathable cotton lining."
  },
  {
    id: 2,
    name: "CLASSIC TRENCH COAT",
    price: "$850.00",
    image: "/templates/OHMT001-fashion/trench-coat.png",
    category: "collection",
    material: "Cotton Gabardine",
    color: "Ivory",
    description: "Double-breasted trench coat crafted from densely woven cotton gabardine. Raglan sleeves, storm flap, and buckle strap detailing at collar and cuffs."
  },
  {
    id: 3,
    name: "MINIMALIST BACKPACK",
    price: "$350.00",
    image: "/templates/OHMT001-fashion/backpack.png",
    category: "archive",
    material: "Waxed Canvas & Leather",
    color: "Black",
    description: "A refined carry solution with a single main compartment, padded laptop sleeve, and hand-finished leather trim. Minimal hardware, maximum utility."
  },
  {
    id: 4,
    name: "PREMIUM LEATHER BOOTS",
    price: "$480.00",
    image: "/templates/OHMT001-fashion/boots.png",
    category: "archive",
    material: "Full-Grain Calf Leather",
    color: "Dark Chestnut",
    description: "Goodyear-welted boots with a Blake stitch construction. Vegetable-tanned leather upper, leather sole, and a subtle square toe profile."
  },
  {
    id: 5,
    name: "SILK EVENING DRESS",
    price: "$1,200.00",
    image: "/templates/OHMT001-fashion/silk-dress.png",
    category: "collection",
    material: "18 Momme Silk",
    color: "Midnight Blue",
    description: "Floor-length bias-cut dress in liquid silk satin. Adjustable shoulder ties and a draped cowl back. Each piece cut individually."
  },
  {
    id: 6,
    name: "COTTON BASICS TEE",
    price: "$65.00",
    image: "/templates/OHMT001-fashion/basic-tee.png",
    category: "collection",
    material: "Supima Cotton Jersey",
    color: "White",
    description: "Heavyweight 260gsm Supima cotton. Ribbed crewneck, reinforced shoulder seams, and a boxy fit that holds its shape wash after wash."
  },
  {
    id: 7,
    name: "CLASSIC LEATHER JACKET",
    price: "$950.00",
    image: "/templates/OHMT001-fashion/leather-jacket-2.png",
    category: "archive",
    material: "Full-Grain Lambskin",
    color: "Black",
    description: "An iconic double-rider silhouette crafted from exceptionally soft lambskin leather. Features heavy-gauge metal hardware, zippered cuffs, and a quilted satin lining."
  },
  {
    id: 8,
    name: "TAILORED WOOL BLAZER",
    price: "$620.00",
    image: "/templates/OHMT001-fashion/product-blazer.jpg",
    category: "collection",
    material: "100% Virgin Wool",
    color: "Navy Blue",
    description: "A modern unstructured blazer with a relaxed drape. Half-canvas construction, notch lapels, and patch pockets. Perfect for effortless layering."
  },
  {
    id: 9,
    name: "CABLE KNIT SWEATER",
    price: "$280.00",
    image: "/templates/OHMT001-fashion/product-knit.jpg",
    category: "collection",
    material: "Merino Wool Blend",
    color: "Oatmeal",
    description: "Classic crewneck sweater knitted with dense cable patterns. Exceptional warmth and a soft, non-itchy texture. Ribbed collar, cuffs, and hem."
  },
  {
    id: 10,
    name: "WIDE-LEG TROUSERS",
    price: "$320.00",
    image: "/templates/OHMT001-fashion/product-trousers.jpg",
    category: "collection",
    material: "Wool & Polyester Blend",
    color: "Charcoal",
    description: "High-waisted trousers featuring a generous wide-leg cut and sharp front creases. Zip fly with hook-and-bar closure, side slip pockets, and back welt pockets."
  },
  {
    id: 11,
    name: "MINIMALIST LEATHER BELT",
    price: "$150.00",
    image: "/templates/OHMT001-fashion/accessories-2.png",
    category: "archive",
    material: "Vegetable-Tanned Leather",
    color: "Tan",
    description: "A clean, hardware-minimalist belt crafted from thick Italian vegetable-tanned leather. Features a solid brass buckle and hand-burnished edges."
  },
  {
    id: 12,
    name: "PREMIUM SUNGLASSES",
    price: "$240.00",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600&auto=format&fit=crop",
    category: "collection",
    material: "Acetate & Polarized Glass",
    color: "Gloss Black",
    description: "Handcrafted acetate frame with polarized lenses offering full UV protection. Reinforced seven-barrel hinges and subtle engraved branding inside the temples."
  }
];

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
    category: "Chairs",
    price: "$1,290",
    image: "/templates/furniture/chair.png",
    tag: "Essential",
    desc: "A timeless masterpiece of comfort and form. The Siero Lounge Chair is designed to provide unparalleled ergonomic support while maintaining a slim, architectural profile.",
    details: {
      material: "Solid Walnut, Premium Italian Leather",
      dimensions: "82cm x 75cm x 88cm",
      weight: "18kg",
      origin: "Handcrafted in Milan"
    },
    gallery: ["/templates/furniture/chair.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "2",
    name: "Velvet Mono Sofa",
    category: "Sofas",
    price: "$3,400",
    image: "/templates/furniture/sofa.png",
    tag: "Luxury",
    desc: "A timeless masterpiece of comfort, featuring premium Italian linen and deep-seated ergonomics.",
    details: { material: "Italian Linen, Goose Down", dimensions: "240 x 105 x 75 cm", weight: "62kg", origin: "Italy" },
    gallery: ["/templates/furniture/sofa.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "3",
    name: "Oak Dining Table",
    category: "Dining",
    price: "$4,200",
    image: "/templates/furniture/table.png",
    tag: "Essential",
    desc: "Crafted from sustainable European oak, this table defines the heart of a modern home.",
    details: { material: "Solid European Oak", dimensions: "200 x 90 x 75 cm", weight: "85kg", origin: "Denmark" },
    gallery: ["/templates/furniture/table.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "4",
    name: "Walnut Lounge Chair",
    category: "Lounge",
    price: "$2,850",
    image: "/templates/furniture/chair.png",
    tag: "Iconic",
    desc: "Sculptural silhouette meets unmatched comfort in this hand-finished American Walnut chair.",
    details: { material: "American Walnut, Semi-Aniline Leather", dimensions: "85 x 82 x 78 cm", weight: "24kg", origin: "USA" },
    gallery: ["/templates/furniture/chair.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "5",
    name: "Ceramic Pendant Lamp",
    category: "Lighting",
    price: "$890",
    image: "/templates/furniture/lamp.png",
    tag: "Ambient",
    desc: "A delicate balance of raw texture and refined form, providing soft, ambient glows.",
    details: { material: "Hand-thrown Ceramic, Brass", dimensions: "45 x 45 x 20 cm", weight: "4.5kg", origin: "Japan" },
    gallery: ["/templates/furniture/lamp.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "6",
    name: "Brutalist Side Table",
    category: "Living",
    price: "$1,150",
    image: "/templates/furniture/sidetable.png",
    tag: "Raw",
    desc: "Cast in lightweight concrete with a honed finish, celebrating raw materiality.",
    details: { material: "Architectural Concrete", dimensions: "40 x 40 x 45 cm", weight: "18kg", origin: "Germany" },
    gallery: ["/templates/furniture/sidetable.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "7",
    name: "Floating Wall Desk",
    category: "Home Office",
    price: "$1,650",
    image: "/templates/furniture/desk.png",
    tag: "Sleek",
    desc: "A space-saving architect's desk that mounts seamlessly to any wall surface.",
    details: { material: "Powder-coated Steel, Oak", dimensions: "120 x 50 x 12 cm", weight: "32kg", origin: "Sweden" },
    gallery: ["/templates/furniture/desk.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "8",
    name: "Linen Platform Bed",
    category: "Bedroom",
    price: "$5,400",
    image: "/templates/furniture/bed.png",
    tag: "Serene",
    desc: "The ultimate sanctuary, featuring a low-profile frame and padded linen headboard.",
    details: { material: "Belgian Linen, Ash Wood", dimensions: "180 x 210 x 95 cm", weight: "110kg", origin: "Belgium" },
    gallery: ["/templates/furniture/bed.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "9",
    name: "Ash Wood Wardrobe",
    category: "Storage",
    price: "$7,800",
    image: "/templates/furniture/wardrobe.png",
    tag: "Grand",
    desc: "Expansive storage with a monolithic presence, showcasing the natural grain of ash.",
    details: { material: "Solid Ash Wood, Brass", dimensions: "160 x 60 x 220 cm", weight: "145kg", origin: "Finland" },
    gallery: ["/templates/furniture/wardrobe.png", "/templates/furniture/lifestyle-narrative.png"]
  }
];

export const stats = [
  { label: "Happy Customers", value: "30K+" },
  { label: "Design Awards", value: "500+" },
  { label: "Years of Heritage", value: "15 Yrs" }
];

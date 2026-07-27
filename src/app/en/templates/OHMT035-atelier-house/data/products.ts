export type Product = {
  slug: string
  name: string
  category: string
  price: number
  tag: string
  description: string
  material: string
  dimensions: string
}

export const products: Product[] = [
  {
    slug: 'birch-lounge-chair',
    name: 'Birch Lounge Chair',
    category: 'Seating',
    price: 640,
    tag: 'New',
    description:
      'A low, wide lounge chair built on a solid birch frame with a hand-tied webbing seat. The backrest angle is set for reading, not just sitting down.',
    material: 'Solid birch, wool-blend upholstery',
    dimensions: '28"W x 32"D x 30"H',
  },
  {
    slug: 'quarry-dining-table',
    name: 'Quarry Dining Table',
    category: 'Tables',
    price: 1180,
    tag: 'Bestseller',
    description:
      'A honed-edge oak table sized for six. The top is a single glued slab, not a veneer, so it can be resurfaced instead of replaced.',
    material: 'Solid white oak, matte oil finish',
    dimensions: '72"W x 38"D x 29"H',
  },
  {
    slug: 'linden-pendant-light',
    name: 'Linden Pendant Light',
    category: 'Lighting',
    price: 220,
    tag: 'New',
    description:
      'A pressed-linen shade over a slim brass stem. Diffuses light evenly instead of casting a hard downward cone.',
    material: 'Linen shade, brushed brass stem',
    dimensions: '14" diameter, 60" drop max',
  },
  {
    slug: 'harbor-sofa',
    name: 'Harbor Sofa',
    category: 'Seating',
    price: 2140,
    tag: 'Bestseller',
    description:
      'A deep-seat three-cushion sofa with a kiln-dried hardwood frame under the upholstery, not particleboard.',
    material: 'Kiln-dried hardwood frame, performance weave',
    dimensions: '84"W x 36"D x 33"H',
  },
  {
    slug: 'field-side-table',
    name: 'Field Side Table',
    category: 'Tables',
    price: 290,
    tag: 'New',
    description:
      'A compact two-tier side table in solid ash, sized to sit next to the Birch Lounge Chair without crowding it.',
    material: 'Solid ash, matte oil finish',
    dimensions: '18"W x 18"D x 22"H',
  },
  {
    slug: 'moor-floor-lamp',
    name: 'Moor Floor Lamp',
    category: 'Lighting',
    price: 340,
    tag: 'Bestseller',
    description:
      'A weighted marble base and a slim steel stem, built so the lamp does not tip when the cord gets pulled.',
    material: 'Honed marble base, powder-coated steel',
    dimensions: '12" base diameter, 58"H',
  },
  {
    slug: 'canvas-weave-throw',
    name: 'Canvas Weave Throw',
    category: 'Textiles',
    price: 160,
    tag: 'New',
    description:
      'A dense cotton-linen throw with enough weight to sit flat on a sofa arm instead of sliding onto the floor.',
    material: 'Cotton-linen blend, bound edge',
    dimensions: '54"W x 72"L',
  },
  {
    slug: 'ridge-floor-cushion',
    name: 'Ridge Floor Cushion',
    category: 'Textiles',
    price: 210,
    tag: 'Limited',
    description:
      'A low square cushion filled with layered wool batting, made for floor seating, reading corners, and children who ignore chairs.',
    material: 'Wool batting, heavy cotton canvas',
    dimensions: '28"W x 28"D x 5"H',
  },
]

export const categories = ['Seating', 'Tables', 'Lighting', 'Textiles'] as const

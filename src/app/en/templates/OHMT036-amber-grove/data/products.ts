export type Product = {
  slug: string
  name: string
  category: string
  price: string
  season: string
  image: string
  description: string
  details: string[]
  shipWindow: string
}

const imageBase = '/templates/en/OHMT036-amber-grove'

export const products: Product[] = [
  {
    slug: 'summer-stone-fruit',
    name: 'Summer Stone Fruit',
    category: 'Stone Fruit',
    price: '$38',
    season: 'June to August',
    image: `${imageBase}/product-stone-fruit.jpg`,
    description:
      'A soft-ripening crate of peaches, nectarines, apricots, and plums picked for eating across the week.',
    details: ['8 to 10 lb mixed crate', 'Picked firm-ripe', 'Includes ripening notes'],
    shipWindow: 'Ships Tuesday and Wednesday while the crop is at peak sugar.',
  },
  {
    slug: 'mountain-berries',
    name: 'Mountain Berry Flat',
    category: 'Berries',
    price: '$34',
    season: 'May to July',
    image: `${imageBase}/product-berries.jpg`,
    description:
      'Paper punnets of strawberries, blueberries, raspberries, and blackberries packed cold the same morning.',
    details: ['Six paper punnets', 'No plastic clamshells', 'Best within four days'],
    shipWindow: 'Local courier only on harvest mornings.',
  },
  {
    slug: 'winter-citrus',
    name: 'Winter Citrus Box',
    category: 'Citrus',
    price: '$42',
    season: 'December to March',
    image: `${imageBase}/product-citrus.jpg`,
    description:
      'Oranges, mandarins, lemons, and grapefruit selected for fresh eating, marmalade, and bright winter tables.',
    details: ['10 lb mixed box', 'Leaf-on fruit when available', 'Cold weather packing'],
    shipWindow: 'Ships Monday through Wednesday during cool weather.',
  },
  {
    slug: 'heritage-apples',
    name: 'Heritage Apple Basket',
    category: 'Orchard Apples',
    price: '$36',
    season: 'September to November',
    image: `${imageBase}/product-apples.jpg`,
    description:
      'A rotating basket of crisp, aromatic apple varieties grown for flavor instead of shelf uniformity.',
    details: ['Five to seven varieties', 'Tasting card included', 'Good for baking and slicing'],
    shipWindow: 'Ships weekly after the morning sort.',
  },
  {
    slug: 'small-batch-preserves',
    name: 'Small Batch Preserves',
    category: 'Preserves',
    price: '$28',
    season: 'Year round',
    image: `${imageBase}/product-preserves.jpg`,
    description:
      'Low-sugar preserves made in small kettles from fruit that was too ripe to ship but too good to waste.',
    details: ['Three 8 oz jars', 'Peach, berry, and citrus rotation', 'No artificial color'],
    shipWindow: 'Ships every Friday.',
  },
  {
    slug: 'orchard-gift-crate',
    name: 'Orchard Gift Crate',
    category: 'Gift Crates',
    price: '$68',
    season: 'Seasonal rotation',
    image: `${imageBase}/product-gift-crate.jpg`,
    description:
      'A giftable wooden crate with fruit, preserves, and a field note from the current harvest week.',
    details: ['Mixed fresh fruit', 'One preserve jar', 'Hand-packed tissue and twine'],
    shipWindow: 'Ships on the date you choose, crop weather permitting.',
  },
]

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}

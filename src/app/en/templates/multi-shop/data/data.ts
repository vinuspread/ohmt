export const categories = [
  { id: 'accessories', name: 'Accessories', image: '/templates/multi-shop/category-accessories.jpg' },
  { id: 'footwear', name: 'Footwear', image: '/templates/multi-shop/category-footwear.jpg' },
  { id: 'womens', name: "Women's", image: '/templates/multi-shop/category-women.jpg' },
  { id: 'mens', name: "Men's", image: '/templates/multi-shop/category-men.jpg' },
]

export const products = [
  { id: '1', name: 'Square Sunglasses', price: 29, originalPrice: 45, rating: 4.8, reviewCount: 124, category: 'accessories', tag: 'New', image: '/templates/multi-shop/product-01.jpg', description: 'Minimalist square-frame sunglasses with UV400 protection. Lightweight acetate construction for all-day comfort.' },
  { id: '2', name: 'Canvas Tote Bag', price: 45, rating: 4.6, reviewCount: 89, category: 'accessories', tag: 'New', image: '/templates/multi-shop/product-02.jpg', description: 'Organic cotton canvas tote with reinforced stitching. Spacious interior fits all your daily essentials.' },
  { id: '3', name: 'Lila Bow-Accent Skirt', price: 149, originalPrice: 199, rating: 4.9, reviewCount: 57, category: 'womens', tag: 'New', image: '/templates/multi-shop/product-03.jpg', description: 'Elegant A-line skirt with delicate bow detail at the waist. Crafted from premium peached satin.' },
  { id: '4', name: 'Minimal Leather Sneaker', price: 89, rating: 4.7, reviewCount: 203, category: 'footwear', tag: 'New', image: '/templates/multi-shop/product-04.jpg', description: 'Sleek leather sneakers with cushioned innersole. Versatile design pairs with any wardrobe.' },
  { id: '5', name: 'Classic Linen Shirt', price: 65, originalPrice: 89, rating: 4.5, reviewCount: 145, category: 'mens', tag: 'New', image: '/templates/multi-shop/product-05.jpg', description: 'Relaxed-fit linen shirt with mother-of-pearl buttons. Breathable fabric perfect for warmer days.' },
  { id: '6', name: 'Ribbed Knit Sweater', price: 95, rating: 4.9, reviewCount: 312, category: 'womens', tag: 'Best', image: '/templates/multi-shop/product-06.jpg', description: 'Fine-gauge ribbed knit sweater with a relaxed silhouette. Soft merino wool blend.' },
  { id: '7', name: 'Slim Chino Pants', price: 75, originalPrice: 110, rating: 4.6, reviewCount: 178, category: 'mens', tag: 'Best', image: '/templates/multi-shop/product-07.jpg', description: 'Tailored slim-fit chinos in stretch cotton twill. Classic five-pocket styling.' },
  { id: '8', name: 'Leather Crossbody', price: 120, rating: 4.8, reviewCount: 94, category: 'accessories', tag: 'Best', image: '/templates/multi-shop/product-08.jpg', description: 'Italian leather crossbody bag with adjustable strap. Minimalist silhouette with hidden pocket.' },
  { id: '9', name: 'Ankle Boots', price: 135, originalPrice: 180, rating: 4.9, reviewCount: 267, category: 'footwear', tag: 'Best', image: '/templates/multi-shop/product-09.jpg', description: 'Pointed-toe ankle boots with stacked leather heel. Side zip for easy wear.' },
  { id: '10', name: 'Floral Wrap Dress', price: 110, rating: 4.7, reviewCount: 83, category: 'womens', tag: 'Best', image: '/templates/multi-shop/product-10.jpg', description: 'Wrap dress with custom floral print. Flattering tie waist and V-neckline in lightweight viscose.' },
  { id: '11', name: 'Oxford Loafers', price: 99, originalPrice: 140, rating: 4.8, reviewCount: 156, category: 'footwear', tag: 'Best', image: '/templates/multi-shop/product-11.jpg', description: 'Classic penny loafer in polished calf leather. Cushioned footbed and durable leather sole.' },
]

export const newArrivals = products.filter(p => p.tag === 'New')
export const bestSellers = products.filter(p => p.tag === 'Best')

export const teamMembers = [
  { id: '1', name: 'Sofia Laurent', role: 'Creative Director', image: '/templates/multi-shop/team-01.png', instagram: '#', linkedin: '#' },
  { id: '2', name: 'James Avery', role: 'Head of Design', image: '/templates/multi-shop/team-02.png', instagram: '#', linkedin: '#' },
  { id: '3', name: 'Mia Chen', role: 'Brand Strategist', image: '/templates/multi-shop/team-03.png', instagram: '#', linkedin: '#' },
]

export const reviews = [
  { id: '1', rating: 5, text: 'The quality is outstanding. My Leather Crossbody arrived perfectly packaged and has become my everyday essential.', reviewer: 'Emma W.', product: 'Leather Crossbody' },
  { id: '2', rating: 5, text: 'Finally found a fashion brand that nails both style and comfort. The Ribbed Knit Sweater fits beautifully.', reviewer: 'Lucas M.', product: 'Ribbed Knit Sweater' },
  { id: '3', rating: 5, text: 'Fast shipping, gorgeous packaging, and the Square Sunglasses are even better in person.', reviewer: 'Chloe K.', product: 'Square Sunglasses' },
  { id: '4', rating: 5, text: 'The Ankle Boots are worth every penny. Elegant design, incredibly comfortable.', reviewer: 'Noah R.', product: 'Ankle Boots' },
]

export const blogPosts = [
  { id: '1', slug: 'style-minimalist-accessories', title: 'How to Style Minimalist Accessories This Season', category: 'Style Guide', date: 'June 5, 2026', readTime: '5 min', image: '/templates/multi-shop/blog-01.jpg', excerpt: 'Discover the art of understated elegance with our curated guide to minimalist accessories that elevate any outfit.' },
  { id: '2', slug: 'sustainable-fashion', title: 'Sustainable Fashion: Our Brand Commitment', category: 'Brand Story', date: 'May 28, 2026', readTime: '4 min', image: '/templates/multi-shop/blog-02.jpg', excerpt: 'Learn about our journey toward sustainable practices and how we are redefining fashion with purpose.' },
  { id: '3', slug: 'mens-wardrobe-checklist', title: "The Essential Men's Wardrobe Checklist", category: "Men's Guide", date: 'May 15, 2026', readTime: '6 min', image: '/templates/multi-shop/blog-03.jpg', excerpt: 'Build a timeless wardrobe with our essential checklist of versatile pieces every man needs.' },
]

// src/app/en/templates/OHMT017-multi-shop/data/data.ts

export const categories = [
  { id: 'accessories', name: 'Accessories', image: '/templates/OHMT017-multi-shop/category-accessories.jpg' },
  { id: 'footwear', name: 'Footwear', image: '/templates/OHMT017-multi-shop/category-footwear.jpg' },
  { id: 'womens', name: "Women's", image: '/templates/OHMT017-multi-shop/category-women.jpg' },
  { id: 'mens', name: "Men's", image: '/templates/OHMT017-multi-shop/category-men.jpg' },
]

export const products = [
  {
    id: '1',
    name: 'Square Sunglasses',
    price: 29,
    originalPrice: 45,
    rating: 4.8,
    reviewCount: 124,
    category: 'accessories',
    tag: 'New',
    image: '/templates/OHMT017-multi-shop/product-01.jpg',
    description: 'Minimalist square-frame sunglasses with UV400 protection. Lightweight acetate construction for all-day comfort.',
    longDescription: 'Embodying classic chic with a contemporary edge, these Square Sunglasses are a testament to refined minimalism. Featuring a hand-polished premium bio-acetate frame and robust UV400 lenses, they offer unparalleled clarity and daytime eye protection. The sleek profile is balanced by comfortable, subtle nose pads and solid metal temples that gently curve for an optimal fit.\n\nDesigned for both casual city walks and dynamic outdoor leisure activities, these sunglasses block glare while keeping your outfit grounded in effortless style. The signature metal hinges are reinforced to withstand daily wear and tear without losing their tension.\n\nWith a genderless aesthetic, the clean rectangular silhouette flatters a wide range of face shapes, serving as the ultimate versatile accessory.',
    specs: [
      { label: 'Frame Material', value: '100% Hand-Polished Bio-Acetate' },
      { label: 'Lens Specification', value: '100% UVA/UVB Protection (UV400 Certified Acrylic Lenses)' },
      { label: 'Hardware', value: 'Reinforced 5-Barrel Metal Hinges' },
      { label: 'Dimensions (Lens/Bridge/Temple)', value: '52mm / 20mm / 145mm' },
      { label: 'Weight', value: '28g (Ultra-lightweight profile)' },
      { label: 'Origin', value: 'Handcrafted in Italy' },
      { label: 'Warranty', value: '1-Year limited manufacturer warranty' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Sophia M.', rating: 5, date: 'May 12, 2026', text: 'Stunning fit and premium weight. Lenses are crystal clear. Love the matte finish feel.' },
      { id: 'r2', reviewer: 'Liam T.', rating: 4, date: 'April 28, 2026', text: 'Classic design that pairs with any style. Comfortable all day long, although a bit wide for narrow faces.' },
      { id: 'r3', reviewer: 'Olivia R.', rating: 5, date: 'May 20, 2026', text: 'Perfect daily glasses. The leather case it comes with is absolutely beautiful. Highly recommend!' },
      { id: 'r4', reviewer: 'Ethan B.', rating: 5, date: 'June 02, 2026', text: 'Excellent value for money. Looks and feels much more expensive than the price suggests.' }
    ]
  },
  {
    id: '2',
    name: 'Canvas Tote Bag',
    price: 45,
    rating: 4.6,
    reviewCount: 89,
    category: 'accessories',
    tag: 'New',
    image: '/templates/OHMT017-multi-shop/product-02.jpg',
    description: 'Organic cotton canvas tote with reinforced stitching. Spacious interior fits all your daily essentials.',
    longDescription: 'Engineered for the daily commuter and weekend wanderer, our Canvas Tote Bag is constructed from heavy-duty organic cotton canvas. Featuring reinforced box-stitching at key stress points and dual webbed handles, it effortlessly handles heavy loads. The spacious unlined interior includes an easy-access slip pocket for keys and smartphones, combining utilitarian purpose with a raw, natural aesthetic.\n\nThis tote is designed to hold its structural shape over time, avoiding the floppy look of cheaper alternatives. The flat bottom is reinforced with a double-layered canvas panel, ensuring your books, laptop, and water bottle remain organized and upright.\n\nThe unbleached organic cotton reveals tiny, natural seed flecks throughout, giving each individual bag a unique and authentic texture that beautifully ages with use.',
    specs: [
      { label: 'Material', value: '18oz 100% Organic Cotton Canvas' },
      { label: 'Dimensions', value: '16" H x 14" W x 6" D' },
      { label: 'Handle Drop', value: '11" (Optimized for comfortable shoulder carry)' },
      { label: 'Interior Details', value: 'Single open compartment with one accessory slip pocket' },
      { label: 'Stitching', value: 'Heavy-duty cotton thread with X-box tacking' },
      { label: 'Care Instructions', value: 'Spot clean only with mild detergent; do not machine wash' },
      { label: 'Origin', value: 'Ethically made in Portugal' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Grace L.', rating: 5, date: 'June 01, 2026', text: 'Incredibly thick canvas. Holds its shape well even when empty. The ivory color is clean and perfect.' },
      { id: 'r2', reviewer: 'Mason H.', rating: 4, date: 'May 15, 2026', text: 'Simple, sturdy, and elegant. The inside pocket is very useful. Canvas attracts a bit of lint, but easy to clean.' },
      { id: 'r3', reviewer: 'Ava K.', rating: 5, date: 'May 25, 2026', text: 'Fits my 15-inch laptop, a heavy notebook, cosmetics pouch, and my lunchbox with ease. The ideal work bag.' },
      { id: 'r4', reviewer: 'Logan D.', rating: 4, date: 'June 05, 2026', text: 'Very robust build quality. Handles are comfortable even when carrying heavy books.' }
    ]
  },
  {
    id: '3',
    name: 'Lila Bow-Accent Skirt',
    price: 149,
    originalPrice: 199,
    rating: 4.9,
    reviewCount: 57,
    category: 'womens',
    tag: 'New',
    image: '/templates/OHMT017-multi-shop/product-03.jpg',
    description: 'Elegant A-line skirt with delicate bow detail at the waist. Crafted from premium peached satin.',
    longDescription: 'Capturing fluid motion with a structured waist, the Lila Bow-Accent Skirt is a versatile masterpiece. Tailored from premium peached satin, it offers a luxurious matte-shine finish and a butter-soft drape. The A-line silhouette is completed with an elegant self-tie bow at the left hip, invisible side-zip closure, and a delicate midi hemline that transitions seamlessly from high-profile daytime meetings to evening events.\n\nThe bias-cut construction drape allows the skirt to follow your movements fluidly, creating an elegant silhouette. The fabric has undergone a specialized peach-skin brushing process, removing the harsh shine of standard satin and replacing it with a velvety, sophisticated touch.\n\nA matching full-length stretch lining is built in, providing anti-static performance and maximum freedom of movement throughout the day.',
    specs: [
      { label: 'Shell Material', value: '85% Satin Viscose, 15% Polyester' },
      { label: 'Lining Material', value: '100% Polyester stretch lining' },
      { label: 'Fit & Length', value: 'High-waisted midi length (31" total length)' },
      { label: 'Closure', value: 'Concealed side zipper with hook-and-eye safety' },
      { label: 'Transparency', value: 'Opaque, mid-weight drape (Suitable for all seasons)' },
      { label: 'Care Guide', value: 'Hand wash cold or machine wash delicate in a mesh bag' },
      { label: 'Origin', value: 'Crafted in Portugal' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Olivia R.', rating: 5, date: 'May 30, 2026', text: 'The satin is incredibly soft and heavy, falls beautifully. Arrived with zero wrinkles.' },
      { id: 'r2', reviewer: 'Isabella C.', rating: 5, date: 'May 20, 2026', text: 'Elegant waistline detail. Fits true to size and looks very premium. Hugs the hips nicely.' },
      { id: 'r3', reviewer: 'Chloe K.', rating: 4, date: 'June 01, 2026', text: 'Perfect wedding guest outfit. Just be careful with jewelry scratching the satin fabric.' },
      { id: 'r4', reviewer: 'Sophia N.', rating: 5, date: 'June 08, 2026', text: 'The deep navy color is gorgeous. It looks incredibly formal with a silk blouse. Will buy in black too.' }
    ]
  },
  {
    id: '4',
    name: 'Minimal Leather Sneaker',
    price: 89,
    rating: 4.7,
    reviewCount: 203,
    category: 'footwear',
    tag: 'New',
    image: '/templates/OHMT017-multi-shop/product-04.jpg',
    description: 'Cushioned insole and sleek leather construction. Versatile design pairs with any wardrobe.',
    longDescription: 'Redefining casual luxury, our Minimal Leather Sneaker boasts a clean, stitch-down profile made from full-grain calfskin leather. Fitted with an ultra-comfortable padded leather collar and a high-rebound cushioned footbed, it delivers cloud-like steps. The durable vulcanized rubber cupsole ensures premium grip and longevity, making it the definitive smart-casual anchor for any minimalist wardrobe.\n\nThe beauty of this sneaker lies in its unbranded, stitch-perfect minimalism. With no visible logos, it keeps your outfit looking clean and sophisticated, easily dressing up a casual suit or dressing down tailored trousers.\n\nEvery seam is stitched with high-tensile nylon thread, and the leather edges are hand-painted with high-quality edge coat to prevent cracking over time.',
    specs: [
      { label: 'Upper', value: 'Full-Grain Italian Calfskin Leather' },
      { label: 'Lining', value: '100% Breathable Calfskin Leather (Full lining)' },
      { label: 'Outsole', value: 'Margom Vulcanized Natural Rubber Cupsole' },
      { label: 'Insole', value: 'Removable high-rebound latex footbed' },
      { label: 'Construction', value: '360-degree stitched cupsole method' },
      { label: 'Sizing', value: 'Runs slightly large; order one size down if between sizes' },
      { label: 'Origin', value: 'Handmade in Portugal' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Ethan B.', rating: 5, date: 'June 03, 2026', text: 'Extremely clean look. The leather broke in beautifully after just two days. No blisters at all.' },
      { id: 'r2', reviewer: 'Noah W.', rating: 4, date: 'May 18, 2026', text: 'High quality materials. Feels comparable to designer brands twice the price. Very sturdy sole.' },
      { id: 'r3', reviewer: 'Liam J.', rating: 5, date: 'May 29, 2026', text: 'Perfect office shoe. Looks neat with chinos and a blazer. Clean white color matches everything.' },
      { id: 'r4', reviewer: 'Oliver K.', rating: 5, date: 'June 09, 2026', text: 'The rubber sole is quite grippy and does not make squeaky sounds on polished floors. Outstanding.' }
    ]
  },
  {
    id: '5',
    name: 'Classic Linen Shirt',
    price: 65,
    originalPrice: 89,
    rating: 4.5,
    reviewCount: 145,
    category: 'mens',
    tag: 'New',
    image: '/templates/OHMT017-multi-shop/product-05.jpg',
    description: 'Relaxed-fit linen shirt with mother-of-pearl buttons. Breathable fabric perfect for warmer days.',
    longDescription: 'Woven from premium Belgian flax, the Classic Linen Shirt is designed for natural breathability and a relaxed drape. The fabric is pre-washed to prevent shrinking and to enhance its soft texture. Detailed with genuine mother-of-pearl buttons, a clean French placket, and a soft button-down collar, it strikes a perfect balance between coastal ease and urban sophistication.\n\nThe premium flax fibers allow optimal airflow, keeping your skin dry and cool even in high heat and humidity. Unlike cheaper synthetic blends, this 100% natural linen is highly absorbent and hypoallergenic.\n\nDesigned to be worn slightly rumpled, this shirt develops character and custom drape with every single wash and wear cycle.',
    specs: [
      { label: 'Material', value: '100% Premium Belgian Flax Linen' },
      { label: 'Buttons', value: 'Genuine Mother-of-Pearl (2mm thickness)' },
      { label: 'Collar Style', value: 'Soft casual regular button-down collar' },
      { label: 'Fit Profile', value: 'Relaxed regular fit with dropped shoulders' },
      { label: 'Weight & Sheerness', value: 'Lightweight, white color has slight transparency' },
      { label: 'Care Instructions', value: 'Machine wash cold, line dry; warm iron if needed' },
      { label: 'Origin', value: 'Sourced in Belgium, assembled in Portugal' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Lucas P.', rating: 5, date: 'June 05, 2026', text: 'Super breathable. Love the natural texture of the fabric. The buttons look incredibly high-end.' },
      { id: 'r2', reviewer: 'Benjamin M.', rating: 4, date: 'May 22, 2026', text: 'Great linen texture. It gets softer with every wash. Naturally wrinkles, but that is the style.' },
      { id: 'r3', reviewer: 'Henry C.', rating: 5, date: 'May 27, 2026', text: 'Perfect vacation shirt. I went one size up for an ultra-relaxed drape. The sand beige color is stunning.' },
      { id: 'r4', reviewer: 'Jack D.', rating: 4, date: 'June 08, 2026', text: 'Soft to the touch. The collar holds its shape nicely even without a tie. Ideal for summer.' }
    ]
  },
  {
    id: '6',
    name: 'Ribbed Knit Sweater',
    price: 95,
    rating: 4.9,
    reviewCount: 312,
    category: 'womens',
    tag: 'Best',
    image: '/templates/OHMT017-multi-shop/product-06.jpg',
    description: 'Fine-gauge ribbed knit sweater with a relaxed silhouette. Soft merino wool blend.',
    longDescription: 'Spun from an exquisite blend of merino wool and cashmere, the Ribbed Knit Sweater delivers superior warmth without weight. The fine-gauge ribbing conforms naturally to your body for a flattering drape, while the dropped shoulders create an effortlessly relaxed silhouette. Complete with cozy extended cuffs and a mock neckline, it is a timeless seasonal foundation.\n\nThe ribbed knit structure offers high elasticity, allowing for easy layering over shirts without any constriction. The cozy mock neck provides premium wind protection while creating a sophisticated, elongated neck profile.\n\nCrafted with high-precision linking, every seam is entirely flat-knit to avoid bulkiness under coats and jackets.',
    specs: [
      { label: 'Yarn Composition', value: '70% Australian Merino Wool, 30% Mongolian Cashmere' },
      { label: 'Knit Gauge', value: '12GG fine-knit ribbing' },
      { label: 'Details', value: 'Dropped shoulders, extended cuffs with slits, mock neck' },
      { label: 'Fabric Certification', value: 'OEKO-TEX Certified non-toxic yarns' },
      { label: 'Weight & Warmth', value: 'Medium-weight, excellent heat retention' },
      { label: 'Care Guide', value: 'Dry clean recommended, or hand wash cold and dry flat' },
      { label: 'Origin', value: 'Spun and knit in Scotland' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Amelia G.', rating: 5, date: 'June 10, 2026', text: 'So soft! Not itchy at all. The mock neck is the perfect height. Doesn’t pill easily.' },
      { id: 'r2', reviewer: 'Evelyn S.', rating: 5, date: 'May 25, 2026', text: 'Classic staple. The camel color is beautiful and expensive-looking. Fits my frame perfectly.' },
      { id: 'r3', reviewer: 'Harper L.', rating: 4, date: 'May 18, 2026', text: 'Lightweight but incredibly warm. Layering it under my wool coat keeps me perfectly cozy.' },
      { id: 'r4', reviewer: 'Ella V.', rating: 5, date: 'June 02, 2026', text: 'The sleeves are slightly long and cover the hands beautifully. Highly elegant design.' }
    ]
  },
  {
    id: '7',
    name: 'Slim Chino Pants',
    price: 75,
    originalPrice: 110,
    rating: 4.6,
    reviewCount: 178,
    category: 'mens',
    tag: 'Best',
    image: '/templates/OHMT017-multi-shop/product-07.jpg',
    description: 'Tailored slim-fit chinos in stretch cotton twill. Classic five-pocket styling.',
    longDescription: 'Crafted from premium long-staple cotton twill with a touch of elastane, these Slim Chino Pants offer flexibility and shape retention. The tailored fit tapers gently through the leg for a sleek, contemporary silhouette. Features include dynamic reinforced belt loops, clean welt rear pockets, and a durable brass zip fly, making them ideal for day-to-night versatility.\n\nThese chinos are the ultimate wardrobe bridging piece, looking equally sophisticated with a sharp blazer at the office or styled casually with a clean tee and sneakers on the weekend.\n\nThe double-twisted yarn construction ensures that these pants maintain their structural fit after washing, eliminating baggy knees or fabric sagging.',
    specs: [
      { label: 'Material', value: '97% Combed Long-Staple Cotton, 3% Lycra Elastane' },
      { label: 'Weight', value: '8.5oz Mid-weight twill fabric (Four-season wear)' },
      { label: 'Fit Profile', value: 'Tailored slim-tapered fit' },
      { label: 'Pocket Layout', value: 'Two side slant pockets, two rear welt pockets with button closures' },
      { label: 'Hardware', value: 'YKK Brass zipper fly, genuine horn button' },
      { label: 'Shrinkage Control', value: 'Sanforized to minimize post-wash shrinkage' },
      { label: 'Origin', value: 'Made in Vietnam' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Daniel C.', rating: 5, date: 'June 02, 2026', text: 'Great fit! The touch of stretch makes them very comfortable to sit in all day. Colors don’t fade.' },
      { id: 'r2', reviewer: 'Oliver K.', rating: 4, date: 'May 14, 2026', text: 'Tailored perfectly. Needs very little ironing if hung up straight out of the wash. Slightly long in length.' },
      { id: 'r3', reviewer: 'Samuel M.', rating: 5, date: 'May 22, 2026', text: 'Taper is clean without being too tight around the calves. Highly flattering silhouette.' },
      { id: 'r4', reviewer: 'James L.', rating: 4, date: 'June 06, 2026', text: 'Inner waistband has a silicone grip strip that keeps tucked shirts from sliding out. Fantastic detail!' }
    ]
  },
  {
    id: '8',
    name: 'Leather Crossbody',
    price: 120,
    rating: 4.8,
    reviewCount: 94,
    category: 'accessories',
    tag: 'Best',
    image: '/templates/OHMT017-multi-shop/product-08.jpg',
    description: 'Italian leather crossbody bag with adjustable strap. Minimalist silhouette with hidden pocket.',
    longDescription: 'A study in minimalist form and utility, this Leather Crossbody Bag is constructed from vegetable-tanned Italian pebble leather that ages with a rich patina. The structured exterior features a clean hidden front slip pocket, while the main lined compartment houses zippered organization. Completed with polished brass hardware and an adjustable shoulder strap for customized carrying.\n\nTo ensure durability against scratches, the leather has undergone a gentle pebble-embossing process. This texture naturally repels dirt and moisture, keeping the bag looking immaculate through daily commutes.\n\nThe crossbody strap is secured with high-grade solid brass buckles, coated in a matte anti-tarnish glaze that develops a matching vintage tone.',
    specs: [
      { label: 'Leather Type', value: '100% Vegetable-Tanned Italian Pebble Calf Leather' },
      { label: 'Lining Material', value: '100% Recycled Cotton Twill (Heavy-duty)' },
      { label: 'Dimensions', value: '9" W x 6.5" H x 3" D (23 x 16.5 x 7.5 cm)' },
      { label: 'Strap Length', value: '20" - 24" adjustable drop (5 adjustment holes)' },
      { label: 'Hardware', value: 'Solid brass zippers and buckles with anti-tarnish finish' },
      { label: 'Compartments', value: 'One main compartment, one inner slip pocket, one rear zip pocket' },
      { label: 'Origin', value: 'Handcrafted in Florence, Italy' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Emma W.', rating: 5, date: 'June 11, 2026', text: 'Outstanding craftsmanship. The leather is thick and smells great. Essential daily bag.' },
      { id: 'r2', reviewer: 'Charlotte V.', rating: 5, date: 'May 28, 2026', text: 'Compact but fits my iPhone, card holder, keys, and lipstick perfectly. Holds shape.' },
      { id: 'r3', reviewer: 'Mia B.', rating: 4, date: 'May 19, 2026', text: 'Adjustable strap is very sturdy. Leather doesn’t scratch easily. Worth the investment.' },
      { id: 'r4', reviewer: 'Isabella H.', rating: 5, date: 'June 04, 2026', text: 'Stitching is impeccable, looks like a luxury designer bag. Packing was very high quality.' }
    ]
  },
  {
    id: '9',
    name: 'Ankle Boots',
    price: 135,
    originalPrice: 180,
    rating: 4.9,
    reviewCount: 267,
    category: 'footwear',
    tag: 'Best',
    image: '/templates/OHMT017-multi-shop/product-09.jpg',
    description: 'Pointed-toe ankle boots with stacked leather heel. Side zip for easy wear.',
    longDescription: 'Sleek and sculptural, these Pointed-Toe Ankle Boots are crafted in soft calf suede with an elegant stacked block heel. Features include a cushioned leather lining and a shock-absorbing footbed for unexpected comfort. A durable inner side zip with metal hardware ensures effortless dressing, while the sharp, modern silhouette elongates the leg line.\n\nTo prevent the common pinching associated with pointed-toe footwear, the toe box features a custom anatomically widened instep, providing a comfortable fit even during long walks.\n\nThe sole and heel are bound using a traditional handcrafted cemented process in a Spanish atelier, preventing heel separation and ensuring long-term wearability.',
    specs: [
      { label: 'Upper', value: 'Premium Grade Calf Suede' },
      { label: 'Lining', value: 'Soft pigskin leather lining (Breathable & sweat-wicking)' },
      { label: 'Heel Height', value: '2" (55mm) Stacked Leather Block Heel' },
      { label: 'Zipper', value: 'YKK Premium metal zipper (Smooth sliding)' },
      { label: 'Sole Type', value: 'Italian leather sole with non-slip rubber insert' },
      { label: 'Origin', value: 'Handmade in Spain' },
      { label: 'Fit Advice', value: 'Fits true to size; order half size up for thick socks' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Harper D.', rating: 5, date: 'June 09, 2026', text: 'Stunning boots! The block heel is highly stable and comfortable to walk in. Suede is rich.' },
      { id: 'r2', reviewer: 'Lily F.', rating: 5, date: 'May 19, 2026', text: 'Beautiful suede. The pointed toe doesn’t pinch my feet. Highly elegant profile.' },
      { id: 'r3', reviewer: 'Grace N.', rating: 4, date: 'May 27, 2026', text: 'Great for dry autumn weather. The zipper runs smoothly. Cushion is surprisingly thick.' },
      { id: 'r4', reviewer: 'Chloe E.', rating: 5, date: 'June 03, 2026', text: 'Wore them to work and my feet didn’t hurt at all. Classic look that pairs with pants or skirts.' }
    ]
  },
  {
    id: '10',
    name: 'Floral Wrap Dress',
    price: 110,
    rating: 4.7,
    reviewCount: 83,
    category: 'womens',
    tag: 'Best',
    image: '/templates/OHMT017-multi-shop/product-10.jpg',
    description: 'Wrap dress with custom floral print. Flattering tie waist and V-neckline in lightweight viscose.',
    longDescription: 'Defined by a fluid wrap silhouette and custom floral motifs, this Dress is crafted from lightweight viscose that flows elegantly with every movement. Designed with a flattering adjustable waist tie, a clean V-neckline, and subtle flutter sleeves, it offers a romantic yet contemporary look ideal for outdoor gatherings or evening dinner dates.\n\nThe fabric is woven from Lenzing EcoVero viscose fibers, sourced from certified sustainable wood pulp, reducing chemical use and carbon footprint by 50% compared to generic viscose.\n\nTo guarantee comfort, the neckline is equipped with a tiny, hidden security snap button, preventing any unwanted gaping during movement.',
    specs: [
      { label: 'Material', value: '100% Lenzing EcoVero Viscose (Sustainable)' },
      { label: 'Pattern', value: 'Original in-house botanical print' },
      { label: 'Closure', value: 'True wrap construction with self-tie waist strings' },
      { label: 'Sleeves', value: 'Flutter drape short sleeves' },
      { label: 'Length', value: 'Midi length (46" from high shoulder point)' },
      { label: 'Care Instructions', value: 'Hand wash cold, dry flat; or dry clean' },
      { label: 'Origin', value: 'Assembled in Portugal using eco-certified fabrics' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Mia O.', rating: 5, date: 'June 04, 2026', text: 'Beautiful pattern and extremely light. Great for hot summer days. Got tons of compliments!' },
      { id: 'r2', reviewer: 'Sophia N.', rating: 4, date: 'May 16, 2026', text: 'Fits beautifully. The wrap design makes it highly adjustable. The neck snap is very handy.' },
      { id: 'r3', reviewer: 'Zoe M.', rating: 5, date: 'May 30, 2026', text: 'Fabric feels silky and cool. Doesn’t wrinkle easily in the suitcase. Perfect travel dress.' },
      { id: 'r4', reviewer: 'Evelyn P.', rating: 5, date: 'June 07, 2026', text: 'Perfect length for midi styling. Drapes beautifully when walking. Fully opaque.' }
    ]
  },
  {
    id: '11',
    name: 'Oxford Loafers',
    price: 99,
    originalPrice: 140,
    rating: 4.8,
    reviewCount: 156,
    category: 'footwear',
    tag: 'Best',
    image: '/templates/OHMT017-multi-shop/product-11.jpg',
    description: 'Classic penny loafer in polished calf leather. Cushioned footbed and durable leather sole.',
    longDescription: 'Honoring traditional shoemaking, these Oxford Loafers are constructed from polished box-calf leather that softens with wear. Featuring a genuine Goodyear welt, a comfortable memory foam-cushioned leather insole, and a durable stacked leather sole with rubber heel taps for added traction, they are built to last a lifetime.\n\nThe semi-gloss box-calf leather holds its luster exceptionally well; a quick buff with neutral shoe cream instantly restores its original showroom shine.\n\nThe saddle strap across the vamp is stitched with high-tensile waxed thread using traditional saddle stitching, preventing any separation of the penny slot over years of wear.',
    specs: [
      { label: 'Upper', value: 'Full-Grain Box-Calf Leather (Semi-gloss finish)' },
      { label: 'Construction', value: 'Durable Goodyear Welted (Resolable)' },
      { label: 'Insole', value: 'Memory foam comfort padded leather footbed' },
      { label: 'Outsole', value: 'Hand-stained leather sole with rubber grip insert' },
      { label: 'Vamp Detail', value: 'Hand-stitched penny saddle strap' },
      { label: 'Origin', value: 'Handcrafted in Portugal' },
      { label: 'Break-in Guide', value: 'Leather is stiff initially; wear with socks for the first 2-3 days' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: 'Leo S.', rating: 5, date: 'June 08, 2026', text: 'Top tier construction. The welt stitching is extremely neat. Hard wearing leather sole.' },
      { id: 'r2', reviewer: 'Jack P.', rating: 4, date: 'May 23, 2026', text: 'Stiff at first, but molded to my feet beautifully within a week. Now they are highly comfortable.' },
      { id: 'r3', reviewer: 'Thomas W.', rating: 5, date: 'May 31, 2026', text: 'Classic click-clack leather sole sound. The memory foam insert makes these very walk-friendly.' },
      { id: 'r4', reviewer: 'Luke G.', rating: 5, date: 'June 09, 2026', text: 'Pairs great with denim or trousers. Stitching is solid and heavy. Incredible quality!' }
    ]
  }
]

export const newArrivals = products.filter(p => p.tag === 'New')
export const bestSellers = products.filter(p => p.tag === 'Best')

export const teamMembers = [
  { id: '1', name: 'Sofia Laurent', role: 'Creative Director', image: '/templates/OHMT017-multi-shop/team-01.jpg', instagram: '#', linkedin: '#' },
  { id: '2', name: 'James Avery', role: 'Head of Design', image: '/templates/OHMT017-multi-shop/team-02.jpg', instagram: '#', linkedin: '#' },
  { id: '3', name: 'Mia Chen', role: 'Brand Strategist', image: '/templates/OHMT017-multi-shop/team-03.jpg', instagram: '#', linkedin: '#' },
]

export const reviews = [
  { id: '1', rating: 5, text: 'The quality is outstanding. My Leather Crossbody arrived perfectly packaged and has become my everyday essential.', reviewer: 'Emma W.', product: 'Leather Crossbody' },
  { id: '2', rating: 5, text: 'Finally found a fashion brand that nails both style and comfort. The Ribbed Knit Sweater fits beautifully.', reviewer: 'Lucas M.', product: 'Ribbed Knit Sweater' },
  { id: '3', rating: 5, text: 'Fast shipping, gorgeous packaging, and the Square Sunglasses are even better in person.', reviewer: 'Chloe K.', product: 'Square Sunglasses' },
  { id: '4', rating: 5, text: 'The Ankle Boots are worth every penny. Elegant design, incredibly comfortable.', reviewer: 'Noah R.', product: 'Ankle Boots' },
]

export const blogPosts = [
  { id: '1', slug: 'style-minimalist-accessories', title: 'How to Style Minimalist Accessories This Season', category: 'Style Guide', date: 'June 5, 2026', readTime: '5 min', image: '/templates/OHMT017-multi-shop/blog-01.jpg', excerpt: 'Discover the art of understated elegance with our curated guide to minimalist accessories that elevate any outfit.' },
  { id: '2', slug: 'sustainable-fashion', title: 'Sustainable Fashion: Our Brand Commitment', category: 'Brand Story', date: 'May 28, 2026', readTime: '4 min', image: '/templates/OHMT017-multi-shop/blog-02.jpg', excerpt: 'Learn about our journey toward sustainable practices and how we are redefining fashion with purpose.' },
  { id: '3', slug: 'mens-wardrobe-checklist', title: "The Essential Men's Wardrobe Checklist", category: "Men's Guide", date: 'May 15, 2026', readTime: '6 min', image: '/templates/OHMT017-multi-shop/blog-03.jpg', excerpt: 'Build a timeless wardrobe with our essential checklist of versatile pieces every man needs.' },
]

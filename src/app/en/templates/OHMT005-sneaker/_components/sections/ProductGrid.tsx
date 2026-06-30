// src/app/en/templates/OHMT005-sneaker/_components/sections/ProductGrid.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { useSearchParams } from "next/navigation";

export const products = [
  {
    id: "sn-001",
    name: "Air Stride Pro",
    price: 240,
    originalPrice: 280,
    rating: 4.5,
    reviews: 128,
    img: "/templates/OHMT005-sneaker/product-1.jpg?v=2",
    badge: "Best Seller",
    longDesc: "Engineered for record-breaking speed and stability. The Air Stride Pro combines an integrated carbon-fiber flyplate with high-rebound dual-density foam cushioning. Designed to propel you forward with minimal energy loss, the engineered warp-knit mesh upper ensures lightweight breathability and structural support.\n\nAt the heart of this shoe is a full-length 3D carbon plate embedded throughout the midsole, which quickly converts landing impacts into forward propulsion. Additionally, the high-density TPU heel counter at the rear ensures absolute wobble-free stability.\n\nThis is a premium racing platform providing the perfect gait mechanics not only for full-course marathoners but also for crew runners seeking high-speed training sessions.",
    specs: [
      { label: "Cushioning Midsole", value: "High-Rebound Dual-Density ZoomAir Tech Foam" },
      { label: "Plate Material", value: "Propulsive 100% Carbon-Fiber 3D Flyplate" },
      { label: "Upper Mesh", value: "Warp-Knit Engineered Breathable Light Mesh" },
      { label: "Outsole", value: "High-Abrasion Wet-Traction Grip Rubber Tread" },
      { label: "Heel-to-Toe Drop", value: "8mm Offset" },
      { label: "Weight", value: "215g (based on US Men's size 9)" },
      { label: "Arch Type", value: "Neutral Arch Support Geometry" },
      { label: "Recommended Use", value: "Road Marathon Racing, Speed Interval Training" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "James K.", rating: 5, date: "May 2026", text: "Best running shoes I've ever owned. Carbon plate really propels you forward. Smashed my previous record instantly." },
      { id: "r2", reviewer: "Alex R.", rating: 4, date: "April 2026", text: "Extremely fast shoe, though a bit narrow in the midfoot. People with wider feet should definitely go half size up." },
      { id: "r3", reviewer: "Lucas M.", rating: 5, date: "May 2026", text: "Incredible energy return. Excellent ventilation means my feet stay dry even during hot summer noon runs." },
      { id: "r4", reviewer: "Sophia W.", rating: 5, date: "June 2026", text: "Cushioning is firm yet springy, reducing knee impact significantly. The lightweight build is absolutely outstanding." }
    ]
  },
  {
    id: "sn-002",
    name: "Urban Classic",
    price: 180,
    originalPrice: null,
    rating: 4.3,
    reviews: 96,
    img: "/templates/OHMT005-sneaker/product-2.jpg",
    badge: null,
    longDesc: "The definitive everyday staple designed to add depth to your casual wardrobe. The Urban Classic is handcrafted from premium full-grain leather that molds to your unique foot shape over time. Its clean, retro silhouette is anchored by a durable stitched rubber cupsole, ensuring timeless versatility.\n\nBy minimizing external logos, this shoe merges elegantly with formal slacks or casual denim pants. The interior is lined with butter-soft natural pigskin leather to prevent friction and enhance comfort.\n\nFinished with robust sidewall stitching, these shoes represent a classic essential engineered to stay in your wardrobe for years.",
    specs: [
      { label: "Upper Material", value: "Premium Full-Grain Nappa Calfskin Leather" },
      { label: "Lining Material", value: "Breathable and Sweat-Absorbent Pigskin Leather" },
      { label: "Outsole", value: "Stitched Margom Natural Rubber Cupsole" },
      { label: "Insole", value: "Ortholite Shock-Absorbing Comfort Latex Foam" },
      { label: "Construction", value: "Sidewall Stitchdown Cupsole Method" },
      { label: "Weight", value: "340g (US Men's size 9)" },
      { label: "Laces", value: "100% Wax-Coated Flat Premium Cotton Laces" },
      { label: "Origin", value: "Handcrafted in Traditional Portuguese Footwear Atelier" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "Emma R.", rating: 5, date: "March 2026", text: "Ordered two pairs. The quality of the leather justifies the price. Will definitely be back for more." },
      { id: "r2", reviewer: "Lucas V.", rating: 4, date: "February 2026", text: "Very clean look. Goes with suit pants or jeans easily. A bit stiff initially but breaks in beautifully." },
      { id: "r3", reviewer: "Jack S.", rating: 5, date: "April 2026", text: "Stitch lines are incredibly clean and uniform. The rubber outsole is tough and shows minimal wear after weeks." },
      { id: "r4", reviewer: "Liam O.", rating: 4, date: "May 2026", text: "Fits true to size and has a very sleek profile. Leather smells authentic and premium. Highly recommended." }
    ]
  },
  {
    id: "sn-003",
    name: "Shadow Runner",
    price: 320,
    originalPrice: 380,
    rating: 4.7,
    reviews: 214,
    img: "/templates/OHMT005-sneaker/product-3.jpg",
    badge: "20% Off",
    longDesc: "A stealthy fusion of high-performance materials and dark cyberpunk aesthetics. Features water-resistant ripstop panels, a responsive foam midsole, and tactical quick-lace toggle hardware.\n\nThe upper is reinforced with ballistic nylon skin to withstand scrapes and tears in rough environments. It also incorporates 3M reflective panels to maximize visibility during nighttime excursions.\n\nWhether facing heavy monsoon rains or navigating dark streets, this shoe is the ultimate tactical answer for all-weather urban commuters.",
    specs: [
      { label: "Waterproofing", value: "OutDry Windproof & Waterproof Breathable Membrane" },
      { label: "Upper Shell", value: "High-Tenacity Ballistic Ripstop Nylon & Synthetic Suede" },
      { label: "Lacing System", value: "Quick-Lace Speed Toggle Locking Hardware" },
      { label: "Night Visibility", value: "3M Scotchlite High-Reflective Safety Panels" },
      { label: "Midsole", value: "Responsive High-Rebound Energy Return Phylon Foam" },
      { label: "Outsole Type", value: "All-Weather Multi-Traction Rubber Lug Sole" },
      { label: "Warranty", value: "1-Year Warranty on Waterproof Membrane Integrity" },
      { label: "Origin", value: "Precision Outdoor Factory in Vietnam" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "David L.", rating: 5, date: "April 2026", text: "Great design and very comfortable. Quick-lace toggle makes slipping them on and off incredibly easy." },
      { id: "r2", reviewer: "Tyler K.", rating: 4, date: "March 2026", text: "Love the tactical lacing. Keeps foot locked in perfectly. Cushioning feels slightly firm but supportive." },
      { id: "r3", reviewer: "Ethan H.", rating: 5, date: "May 2026", text: "The reflective panels look amazing under streetlights. A perfect blend of futuristic styling and real utility." },
      { id: "r4", reviewer: "Oliver B.", rating: 5, date: "June 2026", text: "Waterproofing works perfectly. Dirt wipes off easily with a damp cloth. Fantastic value." }
    ]
  },
  {
    id: "sn-004",
    name: "Velocity Edge",
    price: 195,
    originalPrice: null,
    rating: 4.2,
    reviews: 73,
    img: "/templates/OHMT005-sneaker/product-4.jpg",
    badge: null,
    longDesc: "Built for agility on multi-directional terrains and indoor sports courts. Low-profile, responsive midsole combines with knit zone grids to support active side-to-side cuts and explosive sprints.\n\nThe low-drop outsole is designed to maximize ground contact, providing a solid base for squats, deadlifts, or court movements. Lateral outriggers are integrated to prevent rolling during hard cuts.\n\nThis is a highly specialized training shoe ideal for crossfit, agility workouts, and high-intensity fitness sessions.",
    specs: [
      { label: "Knit Material", value: "High-Agility Zonal Stretch Compression Knit (3D Socks Style)" },
      { label: "Profile Stance", value: "Low-Profile Court Stance with 4mm Heel Drop" },
      { label: "Outsole Pattern", value: "Non-Slip Multi-Directional Deep Herringbone Rubber" },
      { label: "Side Guard", value: "Lateral Anti-Roll Reinforced Outrigger" },
      { label: "Weight", value: "260g (US Men's size 9)" },
      { label: "Insole", value: "Anti-Slip Micro-Textured Athletic Insole" },
      { label: "Origin", value: "High-End Indonesia Training Sneaker Production Line" },
      { label: "Warranty", value: "6-Month Warranty against adhesive separation or outsole cracking" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "Sarah B.", rating: 4, date: "May 2026", text: "Incredibly responsive on court. Feels lightweight and fast, grabbing the floor perfectly." },
      { id: "r2", reviewer: "Mike D.", rating: 4, date: "April 2026", text: "My feet do not slip at all during heavy deadlifts. Note that cushioning is firm, so avoid long road runs." },
      { id: "r3", reviewer: "Chloe P.", rating: 5, date: "May 2026", text: "Fits like a glove. The compression knit wraps the ankle beautifully and prevents dust from getting inside." }
    ]
  },
  {
    id: "sn-005",
    name: "Pearl Low",
    price: 160,
    originalPrice: 190,
    rating: 4.4,
    reviews: 182,
    img: "/templates/OHMT005-sneaker/product-5.jpg",
    badge: "15% Off",
    longDesc: "Soft pearlescent leather finishes meet relaxed comfort. The Pearl Low features raw edges, custom metal eyelets, and an Ortholite comfort foam insole that keeps your steps cushioned and dry.\n\nThe leather surfaces undergo a special coating process that creates a subtle opal glow over time, resulting in an elegant patina. Designed with a wider toe-box, it accommodates high arches comfortably.\n\nA perfect choice to wear with cropped trousers, skirts, or light denim, offering a refined urban aesthetic.",
    specs: [
      { label: "Upper Leather", value: "Opal-Coated Premium Natural Nappa Calfskin Leather" },
      { label: "Insole", value: "Ortholite Antimicrobial Memory Foam Cushioned Footbed" },
      { label: "Hardware", value: "Oxidized Rust-Proof Gunmetal Aluminum Eyelets" },
      { label: "Fit Type", value: "Relaxed Asian-Fit Wide-Toe Stance" },
      { label: "Heel Height", value: "3.2cm (Subtle built-in height lift)" },
      { label: "Stitching", value: "Double-Faced Raw Edge Stitching" },
      { label: "Origin", value: "Handcrafted in Portugal Sourced Leather Atelier" },
      { label: "Care Instructions", value: "Avoid heavy rain. Wipe with a dry suede cloth for light stains." }
    ],
    reviewsList: [
      { id: "r1", reviewer: "Sarah M.", rating: 5, date: "April 2026", text: "Wore these to work for a month straight. Incredibly comfortable and still look brand new. The opal glow is stunning." },
      { id: "r2", reviewer: "Jessica A.", rating: 4, date: "March 2026", text: "Very cute shape! The heel leather was slightly stiff at first, so I recommend wearing socks initially." },
      { id: "r3", reviewer: "Daniel H.", rating: 5, date: "April 2026", text: "Ortholite insole is remarkably soft. Walked around the city all weekend without any foot fatigue." }
    ]
  },
  {
    id: "sn-006",
    name: "Terra Boot",
    price: 290,
    originalPrice: null,
    rating: 4.6,
    reviews: 104,
    img: "/templates/OHMT005-sneaker/product-6.jpg",
    badge: "New",
    longDesc: "A rugged hybrid sneaker boot designed to tackle high-altitude mountain trails and muddy urban streets with ease. Equipped with a fully waterproof membrane, a reinforced rubber rand, and a Vibram outsole.\n\nThe flexible neoprene ankle collar wraps the ankle snugly, ensuring dirt, pebbles, or water cannot penetrate the interior. Speed hooks allow for fast and secure lace adjustments.\n\nThis boot ensures unparalleled traction and ankle stability on slippery, wet stones or uneven icy roads.",
    specs: [
      { label: "Membrane", value: "OutDry High-Performance Waterproof & Windproof Barrier" },
      { label: "Mudguard", value: "Reinforced Abrasion-Resistant Rubber Shield Rand" },
      { label: "Outsole", value: "Vibram Megagrip Rubber with 5.5mm Deep Lugs" },
      { label: "Ankle Collar", value: "Double-Layer Padded Neoprene Protective Collar" },
      { label: "Lacing", value: "Speed-Hook Anodized Aluminum Fast Lacing System" },
      { label: "Weight", value: "420g (Lightweight boot class)" },
      { label: "Origin", value: "Crafted in Hiking Footwear Atelier in Spain" },
      { label: "Warranty", value: "2-Year Warranty on Vibram outsole adhesion and replacement" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "Ben O.", rating: 5, date: "June 2026", text: "Perfect combination of boot toughness and sneaker comfort. Waterproof works flawlessly through streams." },
      { id: "r2", reviewer: "Robert J.", rating: 5, date: "May 2026", text: "Vibram Megagrip is incredible. Never slipped once on wet rocks during my recent rainy mountain trip." },
      { id: "r3", reviewer: "Sean M.", rating: 4, date: "May 2026", text: "Lightweight for a boot but expectedly heavier than standard sneakers. Gives great confidence on rough trails." }
    ]
  },
  {
    id: "sn-007",
    name: "High Volt",
    price: 215,
    originalPrice: 250,
    rating: 4.1,
    reviews: 58,
    img: "/templates/OHMT005-sneaker/product-7.jpg",
    badge: null,
    longDesc: "Electrify your stride. A track-oriented trainer sporting fluorescent TPU panels, breathable monofilament mesh, and a high-traction rubber outsole designed for fast speed trials.\n\nThe upper features seamless heat-bonding technology, completely eliminating stitch lines that might cause skin irritation or pressure points. You can run sockless with complete confidence.\n\nThe vibrant neon colorway significantly enhances visibility during late-evening runs, ensuring cars and cyclists can spot you from a distance.",
    specs: [
      { label: "Support Plate", value: "Neon Fluorescent High-Tensile TPU Arch & Heel Support" },
      { label: "Upper Fabric", value: "Ultra-Lightweight Monofilament Breathable Single-Layer Mesh" },
      { label: "Overlay Method", value: "Seamless No-Sew Heat-Bonded Technology" },
      { label: "Lacing", value: "Non-Slip Serrated Nylon Athletic Shoelaces" },
      { label: "Weight", value: "195g (Featherweight class)" },
      { label: "Heel-to-Toe Drop", value: "4mm Low Drop (Close-to-ground feel)" },
      { label: "Origin", value: "Precision Sports Factory in China" },
      { label: "Warranty", value: "6-Month Warranty on heat-bonded overlays" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "Chris T.", rating: 4, date: "May 2026", text: "Love the bright look! Very lightweight and airy for summer runs. Fits like a second skin." },
      { id: "r2", reviewer: "Alan Y.", rating: 4, date: "April 2026", text: "Highly breathable but the fit is very narrow. Wide-footed runners should size up for a proper fit." }
    ]
  },
  {
    id: "sn-008",
    name: "Neon Sprint",
    price: 175,
    originalPrice: null,
    rating: 4.5,
    reviews: 239,
    img: "/templates/OHMT005-sneaker/product-8.jpg",
    badge: null,
    longDesc: "Crafted for high-rebound energy returns during high-intensity interval training. Designed with a flexible grooved forefoot and a high-stability wider heel platform to lock down your stance.\n\nIt secures your heels firmly during heavy lifting exercises while the responsive midsole cushioning absorbs impact during explosive plyometric jump moves.\n\nA versatile fitness shoe engineered to handle crossfit, group training, and dynamic weightlifting sessions.",
    specs: [
      { label: "Recommended Use", value: "Crossfit, HIIT, Indoor Weightlifting, Group Fitness" },
      { label: "Midsole Foam", value: "High-Rebound Spring-Back Compression EVA Foam" },
      { label: "Heel Base", value: "Wider Flat-Profile Stable TPU Heel Plate" },
      { label: "Forefoot Flex", value: "Deep Anatomical Forefoot Flex Grooves" },
      { label: "Upper Construction", value: "Abrasion-Resistant Breathable Engineered Gym Knit" },
      { label: "Weight", value: "280g (US Men's size 9)" },
      { label: "Origin", value: "Precision Fitness Shoe Factory in Vietnam" },
      { label: "Warranty", value: "6-Month Standard Product Warranty" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "Jessica V.", rating: 5, date: "May 2026", text: "Great gym shoes. Perfect stability for squats and jumps. The flat heel really helps drive power from the ground." },
      { id: "r2", reviewer: "Thomas W.", rating: 4, date: "April 2026", text: "Very solid construction. The sole is completely flat, making it unsuitable for distance running, but perfect for the gym." }
    ]
  },
  {
    id: "sn-009",
    name: "Obsidian Hike",
    price: 340,
    originalPrice: 400,
    rating: 4.8,
    reviews: 311,
    img: "/templates/OHMT005-sneaker/product-9.jpg",
    badge: "15% Off",
    longDesc: "Our premier trail running sneaker built for extreme terrains. Boasts a GORE-TEX waterproof lining, a high-density rock plate in the forefoot, and a deep-grooved mud-clearing outsole.\n\nReinforced rubber toe caps and heel guards protect your feet from impacts against rocks, roots, or trail debris, keeping the construction intact over long distances.\n\nKeep your running pace steady and comfortable across the mud, creeks, and rugged mountain paths under any weather conditions.",
    specs: [
      { label: "Lining membrane", value: "GORE-TEX Original Waterproof & Extreme Breathability Layer" },
      { label: "Rock Plate", value: "ESS Forefoot Protection Shield Rock Plate" },
      { label: "Midsole Cushioning", value: "High-Density Energy-Return Cushioning Midsole" },
      { label: "Outsole Lugs", value: "5.5mm Self-Cleaning Mud-Grip Rubber Outsole" },
      { label: "Upper Shell", value: "High-Tensile Ripstop Nylon with Protective Suede Overlays" },
      { label: "Weight", value: "310g (US Men's size 9)" },
      { label: "Origin", value: "Outdoor Footwear Atelier in Spain" },
      { label: "Warranty", value: "1-Year Warranty on GORE-TEX lining waterproof performance" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "Danielle P.", rating: 5, date: "June 2026", text: "Dry feet through streams and mud. Incredible traction on wet rocks. The rock plate makes rough paths feel smooth." },
      { id: "r2", reviewer: "Brian L.", rating: 5, date: "May 2026", text: "Absolutely waterproof and remarkably breathable. Walked for miles in rain and my socks stayed perfectly dry." }
    ]
  },
  {
    id: "sn-010",
    name: "Oxford Slim",
    price: 260,
    originalPrice: null,
    rating: 4.3,
    reviews: 87,
    img: "/templates/OHMT005-sneaker/product-10.jpg",
    badge: null,
    longDesc: "The elegance of formal footwear fused with the lightweight comfort of modern trainers. Upholstered in polished calfskin suede with a streamlined low profile.\n\nDesigned specifically for professionals who need to maintain a smart, dressy appearance at work while desiring sneaker-like underfoot comfort. Elegant hand-stitched detailing outlines the edges.\n\nA hybrid masterpiece that pairs beautifully with suit setups or slim-fit slacks, enhancing your professional look.",
    specs: [
      { label: "Upper Suede", value: "Premium Select Italian Calf Suede Leather" },
      { label: "Lining Skin", value: "Soft Natural Calfskin Lining (Reduces friction and sweat)" },
      { label: "Sole Material", value: "Highly Flexible Low-Profile Cushioning Rubber Sole" },
      { label: "Details", value: "Classic Penny Loafer Saddle Hand-Stitching" },
      { label: "Weight", value: "295g (US Men's size 9)" },
      { label: "Insole", value: "Latex Memory Foam Comfort Leather Insole" },
      { label: "Origin", value: "Traditional Shoe Workshop in Portugal" },
      { label: "Fit Profile", value: "Slim and Elegant Low-Profile Fitting" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "Arthur D.", rating: 4, date: "May 2026", text: "Perfect office sneaker. Classy enough for meetings, comfortable for the commute. The suede is very high quality." },
      { id: "r2", reviewer: "Mark S.", rating: 5, date: "April 2026", text: "Soft leather means no blisters on day one. Fits suits perfectly. I'd buy another pair in a heartbeat." }
    ]
  },
  {
    id: "sn-011",
    name: "Trail Burst",
    price: 185,
    originalPrice: 220,
    rating: 4.4,
    reviews: 142,
    img: "/templates/OHMT005-sneaker/product-11.jpg",
    badge: "15% Off",
    longDesc: "Durable ripstop upper combined with dual-strap midfoot locks for technical trail security. A rugged high-traction tread ensures grip over loose sand and gravel.\n\nReplacing standard laces with dual velcro strap bands prevents snagging hazards on branches and weeds while providing a customizable, locked-in fit across the instep.\n\nMaximize your trail-running control and agility with deep outsole lugs designed to grip uneven surfaces.",
    specs: [
      { label: "Upper Fabric", value: "Heavy-Duty Ballistic Ripstop Nylon & Protected Suede Skin" },
      { label: "Lockdown Strap", value: "Dual High-Strength Velcro Strap Locking System" },
      { label: "Midsole Core", value: "Shock-Absorbing High-Pressure Molded EVA Midsole" },
      { label: "Outsole Grip", value: "Off-Road Gravel-Grip Spiked Rubber Outsole" },
      { label: "Toe Shield", value: "High-Hardness Rubber Coated Toe Cap Shield" },
      { label: "Weight", value: "320g (US Men's size 9)" },
      { label: "Origin", value: "High-Tech Technical Footwear Factory in China" },
      { label: "Warranty", value: "1-Year Warranty on velcro adhesion and strap hardware" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "Sam M.", rating: 5, date: "April 2026", text: "Great trail runner. The midfoot straps keep my foot from sliding forward on declines. Velcro is exceptionally strong." },
      { id: "r2", reviewer: "Daniel C.", rating: 4, date: "March 2026", text: "Looks very rugged and techwear. Very practical, but if you have extremely high arches, the straps might feel snug." }
    ]
  },
  {
    id: "sn-012",
    name: "Apex Lite",
    price: 210,
    originalPrice: null,
    rating: 4.6,
    reviews: 196,
    img: "/templates/OHMT005-sneaker/product-12.jpg",
    badge: "New",
    longDesc: "Zero weight, maximum cushion. Weighing only 190g, the Apex Lite is structured from single-thread monofilament yarn and an ultra-light gas-infused foam midsole.\n\nThe seamless socks-like collar wraps your ankle gently, preventing stitch friction and irritation during long walks or fast pacing sessions.\n\nDesigned for modern urban runners who want to feel weightless and stay stylish during their daily commute.",
    specs: [
      { label: "Product Weight", value: "190g (US Men's size 9 - Featherweight Class)" },
      { label: "Yarn Material", value: "Single-Thread Fine-Knit High-Density Socks-Like Knit" },
      { label: "Midsole Tech", value: "Nitrogen (N2) Gas-Infused High-Rebound Ultra-Light Foam" },
      { label: "Collar Type", value: "Elastic Rib-Knit Socks Collar" },
      { label: "Insole Specs", value: "High-Ventilation Long-Lasting Cushioning Air-Cell Insole" },
      { label: "Outsole Rubbers", value: "Minimalist Abrasion-Resistant Rubber Pods in High-Wear Zones" },
      { label: "Origin", value: "Precision Knit Footwear Production Line in Indonesia" },
      { label: "Warranty", value: "6-Month Warranty against knit yarn unraveling under normal use" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "Nico F.", rating: 5, date: "June 2026", text: "Feels like you aren't wearing shoes at all. Outstanding cushion for such a light shoe. Foot fatigue is gone." },
      { id: "r2", reviewer: "Amanda J.", rating: 4, date: "May 2026", text: "Incredibly breathable. Highly recommended for hot days, though be careful since water gets in instantly if it rains." }
    ]
  },
  {
    id: "sn-013",
    name: "Sport Flex",
    price: 155,
    originalPrice: 185,
    rating: 4.2,
    reviews: 63,
    img: "/templates/OHMT005-sneaker/product-13.jpg",
    badge: null,
    longDesc: "A daily fitness sneaker sporting an elastic slip-on opening and flexible knit upper. Conforms instantly to your unique foot shape for all-day active ease.\n\nEliminating laces entirely, the rear heel pull tab allows you to slip them on effortlessly. The interior features a removable ortholite insole with ergonomic arch support.\n\nThe ideal companion for light walks, grocery runs, or casual weekend travels where convenience is key.",
    specs: [
      { label: "Knit Fabric", value: "High-Stretch Organic Flex-Weave Mesh Knit" },
      { label: "Opening Style", value: "Lace-Free Elastic Slip-On Socks Structure" },
      { label: "Sole Design", value: "Multi-Axis Flex-Grooved Segmented EVA Comfort Sole" },
      { label: "Footbed Insole", value: "Removable Ergonomic Arch-Support Ortholite Insole" },
      { label: "Weight Info", value: "240g (Lightweight build)" },
      { label: "Seasonality", value: "Thin and Breathable (Suited for Spring, Summer, Autumn)" },
      { label: "Origin", value: "Cooperative OEM Partner Factory in China" },
      { label: "Warranty", value: "6-Month Warranty covering sole-to-upper bond" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "Rachel Y.", rating: 4, date: "May 2026", text: "Super easy slip-on. Excellent for running quick errands. Does not rub against my heels at all." },
      { id: "r2", reviewer: "Helen G.", rating: 5, date: "April 2026", text: "The arch support is surprisingly effective. It really cushions my flat arches. Buying a pair for my parents too." }
    ]
  },
  {
    id: "sn-014",
    name: "Loafer Classic",
    price: 230,
    originalPrice: null,
    rating: 4.5,
    reviews: 77,
    img: "/templates/OHMT005-sneaker/product-14.jpg",
    badge: null,
    longDesc: "Class classic meets technical sole. High-grade Italian calf leather upper fitted with hand-sewn penny slots, sitting on a high-cushion rubber cupsole.\n\nDitch the stiff feeling of traditional hard leather dress shoes and enjoy superior cushioning even when standing all day during long work hours.\n\nAn essential smart hybrid shoe for businessmen, consultants, and anyone seeking a polished look without sacrificing foot health.",
    specs: [
      { label: "Upper Leather", value: "Semi-Gloss Premium Italian Calfskin Leather" },
      { label: "Outsole Core", value: "High-Rebound Memory-Foam Cushioned Margom Rubber Cupsole" },
      { label: "Penny Slot Detail", value: "Hand-Stitched Traditional Penny Loafer Saddle Band" },
      { label: "Interior Lining", value: "Natural Calfskin Full Leather Lining (Absorbs sweat effectively)" },
      { label: "Product Weight", value: "310g (US Men's size 9)" },
      { label: "Origin", value: "Made in Handcrafted Footwear Atelier in Portugal" },
      { label: "Warranty", value: "1-Year Warranty covering leather split or stitch tearing" },
      { label: "Leather Care", value: "Wipe with dry towel. Regular leather cream treatment recommended." }
    ],
    reviewsList: [
      { id: "r1", reviewer: "Kenji K.", rating: 5, date: "June 2026", text: "Absolute perfection. Looks smart but feels like a sneaker. The leather looks very premium under daylight." },
      { id: "r2", reviewer: "Henry N.", rating: 4, date: "May 2026", text: "The leather needs a few days to soften up, but once broken in, they are extremely comfortable. A great office shoe." }
    ]
  },
  {
    id: "sn-015",
    name: "Carbon Run",
    price: 280,
    originalPrice: 320,
    rating: 4.7,
    reviews: 188,
    img: "/templates/OHMT005-sneaker/product-15.jpg",
    badge: "12% Off",
    longDesc: "Built to shatter personal bests during marathon racing. A full-length curved carbon fiber plate is sandwiched between two generous layers of nitrogen-infused cushioning.\n\nEach step returns landing energy as forward momentum, reducing muscle fatigue and helping you maintain a high speed over long distances.\n\nThe upper mesh is woven from semi-transparent monofilament yarns, yielding outstanding breathability that is three times more effective than standard cotton.",
    specs: [
      { label: "Carbon Plate", value: "Full-Length Curved High-Tensile 3D Carbon Fiber Plate" },
      { label: "Midsole Core", value: "Dual Nitrogen-Infused High-Elastic Light-X Foam Cushioning" },
      { label: "Upper mesh", value: "Semi-Transparent Monofilament Precision Screen Mesh" },
      { label: "Outsole Base", value: "Strategic High-Wear Abrasion Carbon Rubber Outsole Panels" },
      { label: "Weight", value: "205g (US Men's size 9)" },
      { label: "Drop Offset", value: "8mm Drop (Optimized for running gait propulsion)" },
      { label: "Origin", value: "Advanced Sports Footwear Technology Line in China" },
      { label: "Warranty", value: "1-Year Midsole and Carbon Plate Performance Guarantee" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "Marcus A.", rating: 5, date: "May 2026", text: "Insane bounce. Smashed my 5K PR by 35 seconds on the first run. The propulsion is really noticeable." },
      { id: "r2", reviewer: "Kevin S.", rating: 5, date: "April 2026", text: "Super cool transparent design that looks neat with bright socks. Extremely lightweight and breathable." }
    ]
  },
  {
    id: "sn-016",
    name: "Street Low",
    price: 145,
    originalPrice: null,
    rating: 4.0,
    reviews: 44,
    img: "/templates/OHMT005-sneaker/product-16.jpg",
    badge: null,
    longDesc: "Retro skate styling crafted from heavy-duty organic canvas and premium suede overlays. A thicker cupsole and padded tongue ensure durable daily comfort.\n\nThe areas most prone to friction during skate tricks are reinforced with double-stitched leather panels to prevent premature tearing.\n\nA great match for loose wide jeans, cargo trousers, or casual street fashion, adding a rugged, laid-back charm to your outfit.",
    specs: [
      { label: "Fabric Blend", value: "12oz Organic Heavy Cotton Canvas & Premium Calf Suede Overlays" },
      { label: "Tongue Shape", value: "Padded Thick Skate-Style Protective Tongue" },
      { label: "Outsole method", value: "High-Temperature Vulcanized High-Density Raw Rubber Grid Sole" },
      { label: "Insole Specs", value: "Impact-Absorbing High-Rebound EVA Board Insole" },
      { label: "Weight", value: "360g" },
      { label: "Lacing style", value: "High-Gauge Wide Flat Cotton Shoelaces" },
      { label: "Origin", value: "Collaborative OEM Production Line in China" },
      { label: "Warranty", value: "6-Month Warranty covering sole delamination" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "Nate H.", rating: 4, date: "April 2026", text: "Nice retro skate design. Durable canvas, takes a beating and holds up well on the board." },
      { id: "r2", reviewer: "Kyle W.", rating: 4, date: "March 2026", text: "Thick canvas and flat rubber sole are great for skateboarding. Walking long distances might feel flat." }
    ]
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={12}
          className={i <= Math.round(rating) ? "fill-black text-black" : "fill-black/20 text-black/20"}
        />
      ))}
      <span className="text-[0.7rem] text-black/50 ml-1">{rating}</span>
    </div>
  );
}

function getBadgeStyle(badge: string) {
  const normalized = badge.toLowerCase();
  if (normalized.includes("best")) {
    return "bg-orange-50 text-orange-600 border border-orange-200/40";
  }
  if (normalized.includes("new")) {
    return "bg-emerald-50 text-emerald-600 border border-emerald-200/40";
  }
  if (normalized.includes("off") || normalized.includes("%")) {
    return "bg-red-50 text-red-600 border border-red-200/40";
  }
  return "bg-zinc-50 text-zinc-600 border border-zinc-200/40";
}

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <Link href={`/en/templates/OHMT005-sneaker/product/${product.id}`} className="group block border border-black/10 hover:border-black/50 transition-all duration-300 active:scale-[0.98]">
      <div className="relative overflow-hidden aspect-square bg-[var(--color-bg-secondary)]">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded-[3px] backdrop-blur-sm ${getBadgeStyle(product.badge)}`}>
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-[0.88rem] font-bold text-black mb-1.5">{product.name}</h3>
        <StarRating rating={product.rating} />
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[0.95rem] font-black text-black">${product.price} USD</span>
          {product.originalPrice && (
            <span className="text-[0.8rem] text-black/30 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

interface Props {
  title: string;
  items?: typeof products;
  limit?: number;
}

export function ProductGrid({ title, items, limit = 8 }: Props) {
  const [page, setPage] = useState(0);
  const searchParams = useSearchParams();
  const t = {
    "nav": {
      "categories": `Categories`,
      "shop": `Shop`,
      "about": `About`,
      "blog": `Blog`,
      "contact": `Contact`
    },
    "hero": {
      "badge": `NEW RELEASE`,
      "badgeText": `New Collection - 2026`,
      "title1": `Rule the Streets.`,
      "title2": `Raw Emotion.`,
      "desc": `Uncompromised speed, unreleased grails. Rewrite the laws of urban velocity.`,
      "cta": `ENTER DRAW`,
      "cta2": `View All`
    },
    "categoryBanners": {
      "title": `Categories`,
      "viewAll": `View All`,
      "items": {
        "sneakers": `Sneakers`,
        "boots": `Boots`,
        "formal": `Formal`,
        "running": `Running`,
        "oxford": `Oxford`,
        "sports": `Sports`,
        "highNeck": `High Neck`,
        "loafers": `Loafers`
      }
    },
    "productGrid": {
      "viewAll": `View All`,
      "badges": {
        "bestSeller": `Best Seller`,
        "percent20": `20% Off`,
        "percent15": `15% Off`,
        "percent12": `12% Off`,
        "new": `New`
      }
    },
    "reviews": {
      "label": `Testimonials`,
      "title": `What Our Customers Say`,
      "basedOn": `Based on {count} reviews`,
      "items": [
        {
          "name": `James K.`,
          "text": `Best sneakers I've owned. The build quality is exceptional and they look even better in person.`,
          "product": `Air Stride Pro`,
          "date": `May 2026`
        },
        {
          "name": `Sarah M.`,
          "text": `Wore these to work for a month straight. Incredibly comfortable and still look brand new.`,
          "product": `Pearl Low`,
          "date": `Apr 2026`
        },
        {
          "name": `David L.`,
          "text": `Great design and very comfortable. Shipping was fast and packaging was minimal and eco-friendly.`,
          "product": `Shadow Runner`,
          "date": `Apr 2026`
        },
        {
          "name": `Emma R.`,
          "text": `Ordered two pairs. The quality justifies the price. Will definitely be back for more.`,
          "product": `Urban Classic`,
          "date": `Mar 2026`
        }
      ]
    },
    "blogSection": {
      "title": `From the Blog`,
      "allPosts": `All Posts`,
      "readMore": `Read More`,
      "posts": [
        {
          "title": `How to Style Sneakers for Any Occasion`,
          "category": `Style`,
          "date": `May 20, 2026`
        },
        {
          "title": `The Rise of Sustainable Footwear`,
          "category": `Sustainability`,
          "date": `May 14, 2026`
        },
        {
          "title": `Complete Sneaker Care Guide`,
          "category": `Care`,
          "date": `May 8, 2026`
        },
        {
          "title": `Top Sneaker Trends for 2026`,
          "category": `Trends`,
          "date": `May 1, 2026`
        }
      ]
    },
    "sectionTitles": {
      "bestSellers": `Best Sellers`,
      "newArrivals": `New Arrivals`
    },
    "featureRow": {
      "items": [
        {
          "title": `Sustainable Materials`,
          "desc": `Eco-friendly fabrics sourced responsibly`
        },
        {
          "title": `6-Month Warranty`,
          "desc": `Full coverage on all products`
        },
        {
          "title": `Fast Delivery`,
          "desc": `1-2 business days shipping`
        },
        {
          "title": `Eco Packaging`,
          "desc": `100% recyclable materials`
        }
      ]
    },
    "promoBanner": {
      "label": `Limited Time`,
      "title1": `Weekend`,
      "title2": `Special Offer`,
      "codeLabel": `Use code at checkout`,
      "code": `WEEKEND20`,
      "disclaimer": `20% off all orders · Ends Sunday midnight`,
      "cta": `Shop the Sale`
    },
    "footer": {
      "brandDesc": `Premium footwear merging sustainability and style.`,
      "sections": {
        "shop": `Shop`,
        "categories": `Categories`,
        "help": `Help`
      },
      "links": {
        "allProducts": `All Products`,
        "newArrivals": `New Arrivals`,
        "bestSellers": `Best Sellers`,
        "sale": `Sale`,
        "sneakers": `Sneakers`,
        "running": `Running`,
        "formal": `Formal`,
        "boots": `Boots`,
        "loafers": `Loafers`,
        "sizingGuide": `Sizing Guide`,
        "shipping": `Shipping`,
        "returns": `Returns`,
        "contact": `Contact`
      },
      "copyright": `© 2026 OHMT.`,
      "legal": {
        "privacy": `Privacy`,
        "terms": `Terms`,
        "cookies": `Cookies`
      }
    }
  };
  const source = items ?? products;
  const pages = Math.ceil(source.length / limit);
  const visible = source.slice(page * limit, page * limit + limit);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[1.6rem] font-black tracking-[-0.02em] uppercase">{title}</h2>
          <Link href="/en/templates/OHMT005-sneaker/shop-all" className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-black/50 hover:text-black transition-colors border-b border-black/20 pb-0.5">
            {t.productGrid.viewAll}
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visible.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        {pages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-8 h-8 text-[0.78rem] font-bold border transition-colors ${page === i ? "bg-black text-white border-black" : "bg-white text-black border-black/20 hover:border-black"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

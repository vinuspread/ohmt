export const menuCategories = [
  { id: 'sets',     label: 'Set Menu' },
  { id: 'burger',   label: 'Burgers' },
  { id: 'chicken',  label: 'Chicken' },
  { id: 'sides',    label: 'Sides' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks',   label: 'Drinks' },
] as const;

export type MenuCategory = typeof menuCategories[number]['id'];

export const menuItems = [
  // Burgers
  { id: '1', name: 'Classic Smash Burger', category: 'burger', description: 'Double beef patty, american cheese, pickles, onions, secret sauce on brioche.', price: 12.90, image: '/templates/OHMT018-burger/menu-burger-01.png', isSignature: true, calories: 780 },
  { id: '2', name: 'Truffle Mushroom Swiss', category: 'burger', description: 'Beef patty, truffle aioli, sauteed mushrooms, swiss cheese, arugula.', price: 14.90, image: '/templates/OHMT018-burger/menu-burger-02.png', isSignature: true, calories: 720 },
  { id: '3', name: 'Spicy Jalapeno Crunch', category: 'burger', description: 'Beef patty, pepper jack, jalapenos, crispy onions, chipotle mayo, lettuce.', price: 13.50, image: '/templates/OHMT018-burger/menu-burger-03.png', isSignature: true, calories: 810 },
  { id: '4', name: 'Classic Cheeseburger', category: 'burger', description: 'Single beef patty, cheddar, lettuce, tomato, onion, pickles, special sauce.', price: 9.90, image: '/templates/OHMT018-burger/menu-burger-01.png', calories: 650 },
  { id: '5', name: 'Bacon BBQ Burger', category: 'burger', description: 'Beef patty, smoked bacon, bbq sauce, cheddar, onion rings, coleslaw.', price: 13.90, image: '/templates/OHMT018-burger/menu-burger-02.png', calories: 890 },
  { id: '6', name: 'Double Stack', category: 'burger', description: 'Two beef patties, double cheese, grilled onions, mustard, ketchup.', price: 11.90, image: '/templates/OHMT018-burger/menu-burger-03.png', calories: 920 },
  // Chicken
  { id: '7', name: 'Crispy Chicken Classic', category: 'chicken', description: 'Buttermilk fried chicken, brioche bun, lettuce, tomato, herb mayo.', price: 11.50, image: '/templates/OHMT018-burger/menu-chicken-01.png', calories: 680 },
  { id: '8', name: 'Spicy Chicken Deluxe', category: 'chicken', description: 'Fried chicken tossed in spicy glaze, slaw, pickles, ranch dressing.', price: 12.50, image: '/templates/OHMT018-burger/menu-chicken-02.png', calories: 710 },
  { id: '9', name: 'Grilled Chicken Club', category: 'chicken', description: 'Grilled chicken breast, smoked bacon, avocado, tomato, garlic aioli.', price: 13.50, image: '/templates/OHMT018-burger/menu-chicken-03.png', calories: 640 },
  // Sets
  { id: '10', name: 'Classic Set', category: 'sets', description: 'Classic Cheeseburger + regular fries + choice of drink.', price: 15.90, image: '/templates/OHMT018-burger/set-classic.png', calories: 980 },
  { id: '11', name: 'Smash Set', category: 'sets', description: 'Classic Smash Burger + truffle parmesan fries + choice of drink.', price: 18.90, image: '/templates/OHMT018-burger/set-smash.png', calories: 1150 },
  { id: '12', name: 'Chicken Set', category: 'sets', description: 'Crispy Chicken Classic + sweet potato fries + choice of drink.', price: 17.50, image: '/templates/OHMT018-burger/set-chicken.png', calories: 1020 },
  { id: '25', name: 'Spicy Set', category: 'sets', description: 'Spicy Jalapeno Crunch + crispy onion rings + choice of drink.', price: 19.90, image: '/templates/OHMT018-burger/set-smash.png', calories: 1200 },
  { id: '26', name: 'BBQ Set', category: 'sets', description: 'Bacon BBQ Burger + regular fries + choice of drink.', price: 19.50, image: '/templates/OHMT018-burger/set-classic.png', calories: 1280 },
  { id: '27', name: 'Double Set', category: 'sets', description: 'Double Stack + truffle parmesan fries + shake or drink.', price: 21.90, image: '/templates/OHMT018-burger/set-smash.png', calories: 1420 },
  // Sides
  { id: '13', name: 'Truffle Parmesan Fries', category: 'sides', description: 'Crispy fries tossed in truffle oil, parmesan, fresh herbs.', price: 6.90, image: '/templates/OHMT018-burger/menu-side-01.png', calories: 450 },
  { id: '14', name: 'Crispy Onion Rings', category: 'sides', description: 'Beer-battered onion rings with smokey chipotle dipping sauce.', price: 5.90, image: '/templates/OHMT018-burger/menu-side-01.png', calories: 380 },
  { id: '15', name: 'Sweet Potato Fries', category: 'sides', description: 'Crispy sweet potato fries with honey sriracha dip.', price: 6.50, image: '/templates/OHMT018-burger/menu-side-01.png', calories: 410 },
  // Desserts
  { id: '16', name: 'Vanilla Soft Serve', category: 'desserts', description: 'Creamy soft-serve vanilla ice cream in a crispy waffle cone.', price: 3.90, image: '/templates/OHMT018-burger/menu-dessert-01.png', calories: 280 },
  { id: '17', name: 'Chocolate Brownie Sundae', category: 'desserts', description: 'Warm chocolate brownie, vanilla soft serve, hot fudge sauce, whipped cream.', price: 6.50, image: '/templates/OHMT018-burger/menu-dessert-02.png', calories: 520 },
  { id: '18', name: 'Strawberry Cheesecake', category: 'desserts', description: 'House-made cheesecake slice with fresh strawberry compote.', price: 5.90, image: '/templates/OHMT018-burger/menu-dessert-03.png', calories: 440 },
  // Shakes
  { id: '19', name: 'Vanilla Shake', category: 'drinks', description: 'Hand-spun vanilla milkshake in a classic stainless steel cup, whipped cream and cherry on top.', price: 7.50, image: '/templates/OHMT018-burger/menu-shake-01.png', calories: 520 },
  { id: '20', name: 'Chocolate Shake', category: 'drinks', description: 'Rich chocolate milkshake with dark chocolate drizzle, whipped cream, chocolate shavings.', price: 7.50, image: '/templates/OHMT018-burger/menu-shake-02.png', calories: 580 },
  { id: '21', name: 'Strawberry Shake', category: 'drinks', description: 'Bright strawberry milkshake with fresh strawberry on the rim and whipped cream.', price: 7.50, image: '/templates/OHMT018-burger/menu-shake-03.png', calories: 540 },
  // Drinks
  { id: '22', name: 'Craft Lemonade', category: 'drinks', description: 'Fresh-squeezed lemonade with ice, lemon slice and fresh mint sprig.', price: 4.50, image: '/templates/OHMT018-burger/menu-drink-02.png', calories: 140 },
  { id: '23', name: 'Classic Cola', category: 'drinks', description: 'Ice-cold cola in a tall glass, fizzing and refreshing.', price: 3.50, image: '/templates/OHMT018-burger/menu-drink-01.png', calories: 150 },
  { id: '24', name: 'Craft Root Beer', category: 'drinks', description: 'Small-batch root beer served in a frosted mug.', price: 4.00, image: '/templates/OHMT018-burger/menu-drink-01.png', calories: 170 },
];

export const locations = [
  { id: '1', city: 'Seoul', address: '45 Gwanghwamun-ro, Jongno-gu, Seoul', hours: 'Mon-Sun 11AM-10PM', phone: '02-1234-5678' },
  { id: '2', city: 'New York', address: '350 Fifth Avenue, New York, NY 10118', hours: 'Mon-Sun 11AM-11PM', phone: '212-123-4567' },
  { id: '3', city: 'Tokyo', address: '2-6-1 Ginza, Chuo-ku, Tokyo', hours: 'Mon-Sun 11AM-10PM', phone: '03-1234-5678' },
  { id: '4', city: 'London', address: '29 Camden High Street, London NW1 7JE', hours: 'Mon-Sun 12PM-10PM', phone: '020-7123-4567' },
  { id: '5', city: 'Dubai', address: 'Sheikh Zayed Road, Downtown Dubai', hours: 'Mon-Sun 11AM-12AM', phone: '04-123-4567' },
  { id: '6', city: 'Singapore', address: '88 Orchard Road, Singapore 238859', hours: 'Mon-Sun 11AM-10PM', phone: '6234-5678' },
];

export const testimonials = [
  { id: '1', name: 'Sarah Kim', text: 'The truffle mushroom burger is genuinely life-changing. Best burger I have ever had, hands down.', location: 'Seoul' },
  { id: '2', name: 'James Park', text: 'Finally a burger place that gets it right. Quality ingredients, perfect patties, and those fries are addictive.', location: 'New York' },
  { id: '3', name: 'Yuki Tanaka', text: 'The atmosphere is as good as the food. Clean, modern, and the staff makes you feel welcome.', location: 'Tokyo' },
];

export const menuCategories = [
  { id: 'all', label: 'All' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'non-coffee', label: 'Non-Coffee' },
  { id: 'food', label: 'Food' },
] as const;

export type MenuCategory = 'coffee' | 'non-coffee' | 'food';

export const menuItems = [
  { id: '1',  name: 'Double Espresso',       category: 'coffee'    as MenuCategory, description: 'Rich double shot with honey sweetness and lingering crema.',               price: 3.50, image: '/templates/OHMT019-coffee/menu-espresso.jpg',          options: ['hot'] as ('hot' | 'iced')[],           isSignature: true },
  { id: '2',  name: 'Americano',             category: 'coffee'    as MenuCategory, description: 'Bold espresso cut with hot water for a clean, smooth finish.',             price: 4.00, image: '/templates/OHMT019-coffee/menu-americano.jpg',         options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '3',  name: 'Cappuccino',            category: 'coffee'    as MenuCategory, description: 'Double espresso with steamed milk and thick foam.',                        price: 4.50, image: '/templates/OHMT019-coffee/menu-cappuccino.jpg',        options: ['hot'] as ('hot' | 'iced')[] },
  { id: '4',  name: 'Cortado',              category: 'coffee'    as MenuCategory, description: 'Equal parts espresso and warm milk in a small glass.',                     price: 4.00, image: '/templates/OHMT019-coffee/menu-cortado.jpg',           options: ['hot'] as ('hot' | 'iced')[] },
  { id: '5',  name: 'Flat White',            category: 'coffee'    as MenuCategory, description: 'Velvety microfoam poured over a double ristretto.',                       price: 4.50, image: '/templates/OHMT019-coffee/menu-flat-white.jpg',        options: ['hot'] as ('hot' | 'iced')[] },
  { id: '6',  name: 'Signature Latte',       category: 'coffee'    as MenuCategory, description: 'House-made vanilla syrup meets espresso and steamed oat milk.',           price: 5.50, image: '/templates/OHMT019-coffee/menu-vanilla-latte.jpg',    options: ['hot', 'iced'] as ('hot' | 'iced')[],   isSignature: true },
  { id: '7',  name: 'Vanilla Latte',         category: 'coffee'    as MenuCategory, description: 'Classic vanilla latte with your choice of milk.',                         price: 5.50, image: '/templates/OHMT019-coffee/menu-vanilla-latte.jpg',    options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '8',  name: 'Oat Milk Latte',        category: 'coffee'    as MenuCategory, description: 'Smooth oat milk espresso with a naturally sweet finish.',                 price: 5.50, image: '/templates/OHMT019-coffee/menu-flat-white.jpg',        options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '9',  name: 'Caramel Latte',         category: 'coffee'    as MenuCategory, description: 'Buttery caramel syrup layered into steamed milk and espresso.',           price: 5.50, image: '/templates/OHMT019-coffee/menu-caramel-macchiato.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '10', name: 'Matcha Latte',          category: 'coffee'    as MenuCategory, description: 'Ceremonial grade matcha whisked with steamed oat milk.',                  price: 5.50, image: '/templates/OHMT019-coffee/menu-matcha-ade.jpg',       options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '11', name: 'Cold Brew',             category: 'coffee'    as MenuCategory, description: 'Slow-steeped 24 hours for a smooth, chocolatey finish.',                  price: 5.00, image: '/templates/OHMT019-coffee/menu-cold-brew.jpg',         options: ['iced'] as ('hot' | 'iced')[],           isSignature: true },
  { id: '12', name: 'Cold Brew + Oat',       category: 'coffee'    as MenuCategory, description: 'Our signature cold brew topped with creamy oat milk.',                    price: 5.50, image: '/templates/OHMT019-coffee/menu-cold-foam.jpg',         options: ['iced'] as ('hot' | 'iced')[] },
  { id: '13', name: 'Brown Sugar Cold Foam', category: 'coffee'    as MenuCategory, description: 'Cold brew crowned with brown sugar vanilla cold foam.',                   price: 6.00, image: '/templates/OHMT019-coffee/menu-cold-foam.jpg',         options: ['iced'] as ('hot' | 'iced')[] },
  { id: '14', name: 'Nitro Cold Brew',       category: 'coffee'    as MenuCategory, description: 'Nitrogen-infused cold brew with a creamy cascading head.',                price: 6.00, image: '/templates/OHMT019-coffee/menu-nitro.jpg',             options: ['iced'] as ('hot' | 'iced')[] },
  { id: '15', name: 'Hibiscus Tea',          category: 'non-coffee' as MenuCategory, description: 'Floral hibiscus iced tea with agave and fresh mint.',                     price: 4.50, image: '/templates/OHMT019-coffee/menu-yuzu-tea.jpg',          options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '16', name: 'Chamomile Honey',       category: 'non-coffee' as MenuCategory, description: 'Calming chamomile blossom with local honey.',                             price: 4.50, image: '/templates/OHMT019-coffee/menu-chamomile.jpg',         options: ['hot'] as ('hot' | 'iced')[] },
  { id: '17', name: 'Earl Grey Latte',       category: 'non-coffee' as MenuCategory, description: 'Bergamot black tea latte with vanilla and steamed milk.',                 price: 5.00, image: '/templates/OHMT019-coffee/menu-earl-grey.jpg',         options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '18', name: 'Mint Green Tea',        category: 'non-coffee' as MenuCategory, description: 'Organic green tea with fresh mint and a touch of honey.',                 price: 4.50, image: '/templates/OHMT019-coffee/menu-peppermint.jpg',        options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '19', name: 'Butter Croissant',      category: 'food'      as MenuCategory, description: 'French-style croissant, golden and flaky.',                               price: 4.00, image: '/templates/OHMT019-coffee/menu-croissant.jpg',         options: [] as ('hot' | 'iced')[] },
  { id: '20', name: 'Almond Croissant',      category: 'food'      as MenuCategory, description: 'Croissant filled with almond cream and sliced almonds.',                  price: 4.50, image: '/templates/OHMT019-coffee/menu-croissant.jpg',         options: [] as ('hot' | 'iced')[] },
  { id: '21', name: 'Pound Cake',            category: 'food'      as MenuCategory, description: 'Classic pound cake with a golden crust, sliced fresh daily.',             price: 5.00, image: '/templates/OHMT019-coffee/menu-pound-cake.jpg',        options: [] as ('hot' | 'iced')[] },
  { id: '22', name: 'Madeleine',             category: 'food'      as MenuCategory, description: 'French shell-shaped butter cake, delicate and golden.',                   price: 3.50, image: '/templates/OHMT019-coffee/menu-madeleine.jpg',         options: [] as ('hot' | 'iced')[] },
  { id: '23', name: 'Mocha',                 category: 'coffee'    as MenuCategory, description: 'Espresso with dark chocolate sauce and steamed milk.',                    price: 5.50, image: '/templates/OHMT019-coffee/menu-mocha.jpg',             options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '24', name: 'Cold Brew Tonic',       category: 'coffee'    as MenuCategory, description: 'Cold brew over sparkling tonic water for a crisp, effervescent finish.',  price: 6.00, image: '/templates/OHMT019-coffee/menu-cold-brew-tonic.jpg',   options: ['iced'] as ('hot' | 'iced')[] },
  { id: '25', name: 'Black Ice',             category: 'coffee'    as MenuCategory, description: 'Iced americano over jet-black cold brew. Minimal and intense.',           price: 5.50, image: '/templates/OHMT019-coffee/menu-black-ice.jpg',         options: ['iced'] as ('hot' | 'iced')[] },
];

export const locations = [
  { id: '1', name: 'Seongsu', address: '45 Seongsui-ro, Seongdong-gu, Seoul', hours: 'Mon-Fri 8AM-9PM, Sat-Sun 9AM-9PM', phone: '02-1234-5678', image: '/templates/OHMT019-coffee/location-seongsu.jpg' },
  { id: '2', name: 'Itaewon', address: '122 Itaewon-ro, Yongsan-gu, Seoul', hours: 'Mon-Sun 8AM-10PM', phone: '02-2345-6789', image: '/templates/OHMT019-coffee/location-itaewon.jpg' },
  { id: '3', name: 'Gangnam', address: '301 Teheran-ro, Gangnam-gu, Seoul', hours: 'Mon-Fri 7AM-9PM, Sat-Sun 9AM-8PM', phone: '02-3456-7890', image: '/templates/OHMT019-coffee/location-gangnam.jpg' },
  { id: '4', name: 'Hannam', address: '28 Hannam-daero, Yongsan-gu, Seoul', hours: 'Mon-Sun 9AM-9PM', phone: '02-4567-8901', image: '/templates/OHMT019-coffee/location-hannam.jpg' },
  { id: '5', name: 'Yeonhui', address: '89 Yeonhuimat-ro, Seodaemun-gu, Seoul', hours: 'Mon-Sun 9AM-8PM', phone: '02-5678-9012', image: '/templates/OHMT019-coffee/location-yeonhui.jpg' },
];

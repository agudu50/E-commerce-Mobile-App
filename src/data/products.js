export const PRODUCTS = [
  {
    id: '1',
    name: "Kawasaki Men's Fishing T-Shirt",
    price: 10.99,
    rating: 4.8,
    reviewsCount: 128,
    image: require('../../assets/shirt-image.png'),
    bgColor: '#D2F4DC',
    isFavorite: false,
    category: 'Clothing',
    variantLabel: 'White/Black',
    discount: '10%',
    options: [
      { id: '1-1', name: 'Black', image: require('../../assets/shirt-image.png'), isDark: true },
      { id: '1-2', name: 'White/Gray', image: require('../../assets/shirt-white.png'), isDark: false }
    ],
    description:
      "Crafted with premium breathable fabric, this Kawasaki Men's Fishing T-Shirt delivers optimal moisture-wicking comfort for long outdoor adventures, casual workouts, and everyday wear."
  },
  {
    id: '2',
    name: 'Smart Ultrasonic Wrist Watch',
    price: 23.99,
    rating: 4.6,
    reviewsCount: 94,
    image: require('../../assets/wrist-watch.png'),
    bgColor: '#EDE8FD',
    accentColor: '#6135FF',
    isFavorite: false,
    category: 'Electronics',
    variantLabel: 'Space Gray/Black',
    discount: '15%',
    options: [
      { id: '2-1', name: 'Space Gray', image: require('../../assets/wrist-watch.png'), isDark: true },
      { id: '2-2', name: 'Silver Edition', image: require('../../assets/wrist-watch.png'), isDark: false }
    ],
    description:
      'Features cutting-edge ultrasonic sensor technology, all-day biometric tracking, notification sync, and a lightweight ergonomic strap built for active lifestyles.'
  },
  {
    id: '3',
    name: 'Air pro bluetooth earphones',
    price: 49.99,
    rating: 4.9,
    reviewsCount: 256,
    image: require('../../assets/speaker.png'),
    bgColor: '#EBE6FC',
    isFavorite: true,
    category: 'Audio',
    variantLabel: 'Obsidian Black',
    discount: '20%',
    options: [
      { id: '3-1', name: 'Obsidian Black', image: require('../../assets/speaker.png'), isDark: true },
      { id: '3-2', name: 'Pearl Gray', image: require('../../assets/speaker.png'), isDark: false }
    ],
    description:
      'Zealot acoustic engineering with deep bass response, seamless Bluetooth 5.3 connectivity, noise isolation, and up to 24 hours of total playtime on a single charge.'
  },
  {
    id: '4',
    name: 'Nike - Red 2024 Model',
    price: 59.99,
    rating: 4.7,
    reviewsCount: 310,
    image: require('../../assets/nike-red.png'),
    bgColor: '#FFB3AE',
    isFavorite: false,
    category: 'Footwear',
    variantLabel: 'Crimson/White',
    discount: '10%',
    options: [
      { id: '4-1', name: 'Crimson Red', image: require('../../assets/nike-red.png'), isDark: true },
      { id: '4-2', name: 'Flash Edition', image: require('../../assets/nike-red.png'), isDark: false }
    ],
    description:
      'The 2024 Nike Running edition features responsive foam cushioning, high-traction grooved outsoles, and a dynamic mesh upper for breathability and agility.'
  },
  {
    id: '5',
    name: 'Air pro bluetooth earphones',
    price: 19.99,
    rating: 4.8,
    reviewsCount: 184,
    image: require('../../assets/airpro.png'),
    imageStyle: { transform: [{ scale: 1.15 }] },
    bgColor: '#EDE9FE',
    isFavorite: false,
    category: 'Audio',
    variantLabel: 'Glossy White',
    discount: '15%',
    options: [
      { id: '5-1', name: 'Glossy White', image: require('../../assets/airpro.png'), isDark: true },
      { id: '5-2', name: 'Matte White', image: require('../../assets/airpro.png'), isDark: false }
    ],
    description:
      'True wireless stereo bluetooth earbuds with ergonomic in-ear fit, smart charging case, crystal-clear call quality, and instant auto-pairing.'
  },
  {
    id: '6',
    name: 'Curlogy 100g',
    price: 2.99,
    rating: 4.9,
    reviewsCount: 420,
    image: require('../../assets/curology.png'),
    imageStyle: { transform: [{ scale: 1.15 }] },
    bgColor: '#FEF9C3',
    isFavorite: false,
    category: 'Skincare',
    variantLabel: 'Daily Gentle Set',
    discount: '10%',
    options: [
      { id: '6-1', name: '100g Bottle', image: require('../../assets/curology.png'), isDark: true },
      { id: '6-2', name: '50g Travel Size', image: require('../../assets/curology.png'), isDark: false }
    ],
    description:
      'Dermatologist-developed custom skincare set designed to cleanse, nourish, and protect your skin barrier with clinically proven ingredients.'
  },
  {
    id: '7',
    name: 'Women Perfume Latest',
    price: 8.99,
    rating: 4.7,
    reviewsCount: 88,
    image: require('../../assets/perfume.png'),
    imageStyle: { transform: [{ scale: 1.15 }] },
    bgColor: '#FEF9C3',
    isFavorite: false,
    category: 'Fragrance',
    variantLabel: 'Floral Rose/Vanilla',
    discount: '25%',
    options: [
      { id: '7-1', name: 'Rose & Vanilla', image: require('../../assets/perfume.png'), isDark: true },
      { id: '7-2', name: 'Golden Amber', image: require('../../assets/perfume.png'), isDark: false }
    ],
    description:
      'Exquisite French-inspired luxury fragrance infused with radiant floral accords, soft amber undertones, and a long-lasting signature scent.'
  },
  {
    id: '8',
    name: 'Premium Red Office dress',
    price: 39.99,
    rating: 4.8,
    reviewsCount: 152,
    image: require('../../assets/office-dress.png'),
    imageStyle: { transform: [{ scale: 1.15 }] },
    bgColor: '#D2F4DC',
    isFavorite: false,
    category: 'Clothing',
    variantLabel: 'Scarlet Red/Tailored',
    discount: '10%',
    options: [
      { id: '8-1', name: 'Scarlet Red', image: require('../../assets/office-dress.png'), isDark: true },
      { id: '8-2', name: 'Burgundy Classic', image: require('../../assets/office-dress.png'), isDark: false }
    ],
    description:
      'Sophisticated double-breasted red blazer dress crafted from structured premium crepe fabric, perfect for modern professional and formal occasions.'
  }
];

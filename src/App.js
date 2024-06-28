// import React, { useState } from 'react';
// import ItemList from './ItemList/ItemList';
// import Cart from './Cart/Cart';

// const App = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     const existingItem = cart.find(cartItem => cartItem.id === item.id);
//     if (existingItem) {
//       setCart(cart.map(cartItem =>
//         cartItem.id === item.id
//           ? { ...cartItem, quantity: cartItem.quantity + 1, subtotal: (cartItem.quantity + 1) * cartItem.price }
//           : cartItem
//       ));
//     } else {
//       setCart([...cart, { ...item, quantity: 1, subtotal: item.price }]);
//     }
//   };

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       <ItemList addToCart={addToCart} />
//       <Cart cart={cart} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import ProductList from './ProductList';

// Mock Amazon products with images
const products = [
  // (30 mock products as before)
  {
    id: 1,
    name: 'Echo Dot (3rd Gen)',
    category: 'Electronics',
    imageUrl: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY436_FMwebp_QL65_.jpg'
  },
  {
    id: 2,
    name: 'Fire TV Stick 4K',
    category: 'Electronics',
    imageUrl: 'https://m.media-amazon.com/images/I/710TJuHTMhL._AC_UY436_FMwebp_QL65_.jpg'
  },
  {
    id: 3,
    name: 'Amazon Basics High-Density Round Foam Roller',
    category: 'Sports & Outdoors',
    imageUrl: 'https://m.media-amazon.com/images/I/71ksu+8cL3L._AC_UL640_FMwebp_QL65_.jpg'
  },
  {
    id: 4,
    name: 'Kindle Paperwhite',
    category: 'Books',
    imageUrl: 'https://m.media-amazon.com/images/I/61jBLw5Bq9L._AC_UY436_FMwebp_QL65_.jpg'
  },
  {
    id: 5,
    name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
    category: 'Home & Kitchen',
    imageUrl: 'https://m.media-amazon.com/images/I/61KejycOflL._AC_UL640_FMwebp_QL65_.jpg'
  },
  {
    id: 6,
    name: 'Ring Video Doorbell 3',
    category: 'Electronics',
    imageUrl: 'https://m.media-amazon.com/images/I/317eB4+yU6L._AC_UL640_FMwebp_QL65_.jpg'
  },
  {
    id: 7,
    name: 'Fitbit Charge 4 Fitness and Activity Tracker',
    category: 'Sports & Outdoors',
    imageUrl: 'https://m.media-amazon.com/images/I/610goztaz1L._AC_UL640_FMwebp_QL65_.jpg'
  },
  {
    id: 8,
    name: 'Apple AirPods Pro',
    category: 'Electronics',
    imageUrl: 'https://m.media-amazon.com/images/I/51PzaL2D0sL._AC_UL640_FMwebp_QL65_.jpg'
  },
  {
    id: 9,
    name: 'Samsung Galaxy S21 Ultra',
    category: 'Electronics',
    imageUrl: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UY436_FMwebp_QL65_.jpg'
  },
  {
    id: 10,
    name: 'Sony WH-1000XM4',
    category: 'Electronics',
    imageUrl: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UY436_FMwebp_QL65_.jpg'
  },
  {
    id: 11,
    name: 'Nikon D3500',
    category: 'Electronics',
    imageUrl: 'https://m.media-amazon.com/images/I/71ItMeqpN3L._AC_UY436_FMwebp_QL65_.jpg'
  },
  {
    id: 12,
    name: 'GoPro HERO9 Black',
    category: 'Electronics',
    imageUrl: 'https://m.media-amazon.com/images/I/71OHU37+dVL._AC_UY436_FMwebp_QL65_.jpg'
  },
  {
    id: 13,
    name: 'Oculus Quest 2',
    category: 'Electronics',
    imageUrl: 'https://m.media-amazon.com/images/I/61YSNhAb00L._AC_UY436_FMwebp_QL65_.jpg'
  },
  {
    id: 14,
    name: 'KitchenAid Artisan Stand Mixer',
    category: 'Home & Kitchen',
    imageUrl: 'https://m.media-amazon.com/images/I/5173efeS9yL._AC_UY436_FMwebp_QL65_.jpg'
  },
  {
    id: 15,
    name: 'Dyson V11 Torque Drive',
    category: 'Home & Kitchen',
    imageUrl: 'https://m.media-amazon.com/images/I/61N0s9jMJyL._AC_UL640_FMwebp_QL65_.jpg'
  },
  {
    id: 16,
    name: 'iRobot Roomba 675',
    category: 'Home & Kitchen',
    imageUrl: 'https://m.media-amazon.com/images/I/61uE9aOtNzL._AC_UY436_FMwebp_QL65_.jpg'
  }
];

const categories = ['All', 'Electronics', 'Sports & Outdoors', 'Books', 'Home & Kitchen'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div>
      <CategoryFilter categories={categories} setSelectedCategory={setSelectedCategory} />
      <ProductList products={products} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;


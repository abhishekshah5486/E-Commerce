import React from 'react';

const ItemList = ({ addToCart }) => {
  const items = [
    { id: 1, name: 'Wireless Mouse', price: 25, description: 'Ergonomic wireless mouse with USB receiver and adjustable DPI.', imageUrl: 'https://m.media-amazon.com/images/I/71u2XOFXAIL._AC_UL640_FMwebp_QL65_.jpg' },
    { id: 2, name: 'Bluetooth Headphones', price: 50, description: 'Noise-cancelling over-ear Bluetooth headphones with long battery life.', imageUrl: 'https://m.media-amazon.com/images/I/51GOpp8rAJL._AC_UL640_FMwebp_QL65_.jpg' },
    { id: 3, name: 'Mechanical Keyboard', price: 80, description: 'RGB backlit mechanical keyboard with blue switches for tactile feedback.', imageUrl: 'https://m.media-amazon.com/images/I/41mWz2aRrTL._AC_UL640_FMwebp_QL65_.jpg' },
    { id: 4, name: 'Smartphone Stand', price: 15, description: 'Adjustable aluminum stand for smartphones and tablets.', imageUrl: 'https://m.media-amazon.com/images/I/81UEKD1LteL._AC_UL640_FMwebp_QL65_.jpg' },
    { id: 5, name: 'USB-C Hub', price: 40, description: 'Multiport USB-C hub with HDMI, USB 3.0, and Ethernet ports.', imageUrl: 'https://m.media-amazon.com/images/I/71sfbi31lhL._AC_UL640_FMwebp_QL65_.jpg' },
    { id: 6, name: 'Portable Charger', price: 30, description: '10000mAh portable charger with fast charging capabilities.', imageUrl: 'https://m.media-amazon.com/images/I/6188O0UwR-L._AC_UL640_FMwebp_QL65_.jpg' },
    { id: 7, name: 'Fitness Tracker', price: 70, description: 'Waterproof fitness tracker with heart rate monitor and GPS.', imageUrl: 'https://m.media-amazon.com/images/I/610fN3RyKFL._AC_UL640_FMwebp_QL65_.jpg' },
    { id: 8, name: 'Smart Light Bulb', price: 20, description: 'Wi-Fi enabled smart light bulb with adjustable brightness and color.', imageUrl: 'https://m.media-amazon.com/images/I/71uwtcGCLNL._AC_UL640_FMwebp_QL65_.jpg' },
    { id: 9, name: 'Wireless Earbuds', price: 60, description: 'True wireless earbuds with touch controls and noise isolation.', imageUrl: 'https://m.media-amazon.com/images/I/71JMDJLzRDL._AC_UL640_FMwebp_QL65_.jpg' },
    { id: 10, name: 'Laptop Stand', price: 35, description: 'Foldable laptop stand with adjustable height and angle.', imageUrl: 'https://m.media-amazon.com/images/I/513SzEEev1L._AC_UL640_QL65_.jpg' },
  ];

  return (
    <div>
      <h2>Items</h2>
      {items.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: '100px' }} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>${item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

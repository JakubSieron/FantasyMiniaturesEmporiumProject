import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.scss'; // optional if you want separate styles

const dummyProducts = [
  { id: 1, name: 'Orc Warrior', category: 'miniatures', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Elven Archer', category: 'miniatures', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Fantasy Terrain Set', category: 'terrain', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Basic Paints Pack', category: 'paints', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Dark Wizard', category: 'miniatures', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Advanced Paint Set', category: 'paints', image: 'https://via.placeholder.com/150' },
];

export default function Shop() {
  const [category, setCategory] = useState('all');

  const filtered = category === 'all'
    ? dummyProducts
    : dummyProducts.filter(p => p.category === category);

  return (
    <div className="shop-page">
      <h1>Shop All Products</h1>

      {/* Category Filter */}
      <div className="filter-buttons">
        {['all', 'miniatures', 'terrain', 'paints'].map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={category === cat ? 'active' : ''}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filtered.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.scss';

const dummyProducts = [
  {
    id: 1,
    name: 'Orc Warrior',
    category: 'miniatures',
    image: 'https://i.imgur.com/sW1VZIS.png',
  },
  {
    id: 2,
    name: 'Elven Archer',
    category: 'miniatures',
    image: 'https://i.imgur.com/8IFL1aZ.png',
  },
  {
    id: 3,
    name: 'Fantasy Terrain Set',
    category: 'terrain',
    image: 'https://i.imgur.com/GqHc3vW.png',
  },
  {
    id: 4,
    name: 'Basic Paints Pack',
    category: 'paints',
    image: 'https://i.imgur.com/Uj7QZGn.png',
  },
  {
    id: 5,
    name: 'Dark Wizard',
    category: 'miniatures',
    image: 'https://i.imgur.com/ZVTXcb0.png',
  },
  {
    id: 6,
    name: 'Advanced Paint Set',
    category: 'paints',
    image: 'https://i.imgur.com/z7fPzJH.png',
  },
];

export default function Shop() {
  const [category, setCategory] = useState('all');

  const filtered = category === 'all'
    ? dummyProducts
    : dummyProducts.filter((p) => p.category === category);

  return (
    <div className="shop-page">
      <h1>Shop All Products</h1>

      {/* Category Filter */}
      <div className="filter-buttons">
        {['all', 'miniatures', 'terrain', 'paints'].map((cat) => (
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
        {filtered.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <Link to={`/product/${product.id}`} className="details-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


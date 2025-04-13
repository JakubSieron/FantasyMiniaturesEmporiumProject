import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.scss';

import dwarfImg from '../assets/images/bat1.jpg';
import elfImg from '../assets/images/bat2.jpg';
import terrainImg from '../assets/images/ter1.jpg';
import paintsBasicImg from '../assets/images/pset2.jpg';
import bretImg from '../assets/images/bat3.jpg';
import paintsAdvancedImg from '../assets/images/pset1.jpg';
import terrain2Img from '../assets/images/pset3.jpg';
import hillImg from '../assets/images/ter2.jpg';
import manorImg from '../assets/images/ter3.jpg';
import chaoImg from '../assets/images/bat4.jpg';
import dwfImg from '../assets/images/bat5.jpg';
import setImg from '../assets/images/bat6.jpg';
import set3Img from '../assets/images/bat7.jpg';
import arcImg from '../assets/images/bat8.jpg';

const dummyProducts = [
  {
    id: 1,
    name: 'Dwarf Battalion',
    category: 'miniatures',
    image: dwarfImg,
  },
  {
    id: 2,
    name: 'Elven Battalion',
    category: 'miniatures',
    image: elfImg,
  },
  {
    id: 3,
    name: 'Arcane Ruins',
    category: 'terrain',
    image: terrainImg,
  },
  {
    id: 4,
    name: 'Basic Paints Pack',
    category: 'paints',
    image: paintsBasicImg,
  },
  {
    id: 5,
    name: 'Bretonia Starter Set',
    category: 'miniatures',
    image: bretImg,
  },
  {
    id: 6,
    name: 'Advanced Paint Set',
    category: 'paints',
    image: paintsAdvancedImg,
  },
  {
    id: 7,
    name: 'Advanced Terrain Set',
    category: 'paints',
    image: terrain2Img,
  },
  {
    id: 8,
    name: 'Hills',
    category: 'terrain',
    image: manorImg,
  },
  {
    id: 9,
    name: 'Fortified Manor',
    category: 'terrain',
    image: hillImg,
  },
  {
    id: 10,
    name: 'Chaos Warriors',
    category: 'miniatures',
    image: chaoImg,
  },
  {
    id: 11,
    name: 'Dwarf Thunderers',
    category: 'miniatures',
    image: dwfImg,
  },
  {
    id: 12,
    name: 'Hexbane Hunters Set',
    category: 'miniatures',
    image: setImg,
  },
  {
    id: 13,
    name: '3 Sets',
    category: 'miniatures',
    image: set3Img,
  },
  {
    id: 14,
    name: 'Kharadron Overlords',
    category: 'miniatures',
    image: arcImg,
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


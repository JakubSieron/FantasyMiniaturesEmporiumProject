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
import setImg from '../assets/images/bat7.jpg';
import set3Img from '../assets/images/bat8.jpg';
import arcImg from '../assets/images/bat6.jpg';

const dummyProducts = [
  {
    id: 1,
    name: 'Dwarf Battalion',
    category: 'miniatures',
    image: dwarfImg,
    price: 190.99,
    description: 'Starter set for Mountain Holds.',
    stock: 5,
  },
  {
    id: 2,
    name: 'Elven Battalion',
    category: 'miniatures',
    image: elfImg,
    price: 190.99,
    description: 'Starter set for High Elves.',
    stock: 5,
  },
  {
    id: 3,
    name: 'Arcane Ruins',
    category: 'terrain',
    image: terrainImg,
    price: 59.99,
    description: 'Add atmosphere to your battles with rocky ruins.',
    stock: 5,
  },
  {
    id: 4,
    name: 'Basic Paints Pack',
    category: 'paints',
    image: paintsBasicImg,
    price: 39.99,
    description: 'Your essential starter set for miniature painting.',
    stock: 5,
  },
  {
    id: 5,
    name: 'Bretonia Starter Set',
    category: 'miniatures',
    image: bretImg,
    price: 229.99,
    description: 'Starter set for Bretonian Kingdom.',
    stock: 5,
  },
  {
    id: 6,
    name: 'Advanced Paint Set',
    category: 'paints',
    image: paintsAdvancedImg,
    price: 39.99,
    description: 'Extended palette of paint with terrain accessories.',
    stock: 5,
  },
  {
    id: 7,
    name: 'Advanced Terrain Set',
    category: 'paints',
    image: terrain2Img,
    price: 39.99,
    description: 'Terrain accessories for various environments.',
    stock: 5,
  },
  {
    id: 8,
    name: 'Hills',
    category: 'terrain',
    image: hillImg,
    price: 69.99,
    description: 'It is always better to have a high ground.',
    stock: 5,
  },
  {
    id: 9,
    name: 'Fortified Manor',
    category: 'terrain',
    image: manorImg,
    price: 89.99,
    description: 'Fortified manor to improve your defense.',
    stock: 5,
  },
  {
    id: 10,
    name: 'Chaos Warriors',
    category: 'miniatures',
    image: chaoImg,
    price: 29.99,
    description: 'A fearsome warriors for your horde.',
    stock: 5,
  },
  {
    id: 11,
    name: 'Dwarf Thunderers',
    category: 'miniatures',
    image: dwfImg,
    price: 29.99,
    description: 'Do not take a knife to a gun fight.',
    stock: 5,
  },
  {
    id: 12,
    name: 'Hexbane Witch Hunters Set',
    category: 'miniatures',
    image: setImg,
    price: 19.99,
    description: 'No one expected Spanish inquisition.',
    stock: 5,
  },
  {
    id: 13,
    name: '3 Sets',
    category: 'miniatures',
    image: set3Img,
    price: 49.99,
    description: 'Three warbands set.',
    stock: 5,
  },
  {
    id: 14,
    name: 'Kharadron Overlords',
    category: 'miniatures',
    image: arcImg,
    price: 39.99,
    description: 'Simply flying dwarfs.',
    stock: 5,
  },
];

export default function Shop() {
  const [category, setCategory] = useState('all');

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    let updatedCart;
  
    if (existing) {
      updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
  
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

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
         <p className="price">${product.price.toFixed(2)}</p>
         <p className="description">{product.description}</p>
         <button className="add-to-cart" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
         <Link to={`/product/${product.id}`} className="details-link">
           View Details
         </Link>
       </div>
        
        ))}
      </div>
    </div>
  );
}


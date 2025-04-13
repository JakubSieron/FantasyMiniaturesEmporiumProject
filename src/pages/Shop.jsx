import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products.json';
import './Shop.scss';

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
    ? products
    : products.filter((p) => p.category === category);

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
        {filtered.map((product) => {
          let productImage;
          try {
            productImage = require(`../assets/images/${product.image}`);
          } catch {
            productImage = 'https://via.placeholder.com/150';
          }

          return (
            <div key={product.id} className="product-card">
              <img src={productImage} alt={product.name} />
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
          );
        })}
      </div>
    </div>
  );
}

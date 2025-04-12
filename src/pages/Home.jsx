import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss'; // optional, can inline instead

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Fantasy Miniatures Emporium</h1>
          <p>Your portal to epic battles, hand-crafted heroes, and legendary paint jobs.</p>
          <Link to="/shop" className="shop-btn">Shop Now</Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <h2>Featured Miniatures</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Orc Warrior" />
            <h3>Orc Warrior</h3>
            <Link to="/product/1">View</Link>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Elven Archer" />
            <h3>Elven Archer</h3>
            <Link to="/product/2">View</Link>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Paint Starter Set" />
            <h3>Paint Starter Set</h3>
            <Link to="/product/3">View</Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <h2>About Our Shop</h2>
        <p>
          We're passionate about miniatures, modeling, and bringing fantasy to life.
          Whether you're painting your first goblin or building a diorama, we've got you covered.
        </p>
        <Link to="/about">Learn More</Link>
      </section>
    </div>
  );
}

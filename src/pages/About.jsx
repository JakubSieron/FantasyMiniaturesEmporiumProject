import React from 'react';
import './About.scss';
import logo from '../assets/images/logoEmp.png'; 

export default function About() {
  return (
    <div className="about-page">
      <section className="company-intro">
        <h1>About Fantasy Miniatures Emporium</h1>
        <p>
          Fantasy Miniatures Emporium is your gateway to an epic world of hobby craftsmanship,
          tabletop adventures, and artistic exploration. Since our founding, we've helped thousands
          of hobbyists bring their fantasy worlds to life.
        </p>
        <img
          src={logo}
          alt="Fantasy Miniatures Logo"
          className="company-logo"
        />
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To inspire creativity through high-quality miniatures, premium painting supplies,
          and a passionate community of creators. Whether you're a first-time painter or a veteran
          warlord, we provide the tools, knowledge, and inspiration you need.
        </p>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <ul className="team-members">
          <li>
            <h3>Edem Nedipov</h3>
            <p>Founder & Miniature Designer</p>
          </li>
          <li>
            <h3>Jakub Sieron</h3>
            <p>Paint Specialist & Community Manager</p>
          </li>
        </ul>
      </section>

      <section className="timeline">
        <h2>Our Journey</h2>
        <ul>
          <li><strong>2021:</strong> Emporium founded with just 12 miniatures</li>
          <li><strong>2022:</strong> Launched our paint and tool line</li>
          <li><strong>2023:</strong> 5,000+ happy customers worldwide</li>
          <li><strong>2024:</strong> Expanded to terrain and 3D-printed accessories</li>
        </ul>
      </section>
    </div>
  );
}

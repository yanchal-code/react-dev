import React from 'react';
import Layout from './Layout';
 // Import the CSS file

function View() {
  return (
    <Layout>
      <div className="page">
        <section className="hero-section">
          <h1 className="hero-title">Welcome to Our Site!</h1>
          <p className="hero-subtitle">
            We're glad to have you here. Explore our features and start your journey with us.
          </p>
          <a href="#explore" className="cta-button">Get Started</a>
        </section>

        <section id="explore" className="about-section">
          <h2 className="section-title">About Us</h2>
          <p>
            We are committed to providing the best user experience with intuitive designs and cutting-edge technology.
            Join our community to stay updated on our latest offerings and innovations.
          </p>
        </section>

        <section className="features-section">
          <h2 className="section-title">Our Features</h2>
          <div className="features-container">
            <div className="feature-card">
              <h3>Feature 1</h3>
              <p>Discover the power of our intuitive interface and simple navigation.</p>
            </div>
            <div className="feature-card">
              <h3>Feature 2</h3>
              <p>Unlock new ways to connect and collaborate with ease.</p>
            </div>
            <div className="feature-card">
              <h3>Feature 3</h3>
              <p>Customize your experience and enjoy personalized content.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default View;

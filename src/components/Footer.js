import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Quick Tech Rent</h5>
            <p>Your trusted partner for laptop rentals. We provide high-quality laptops for all your needs.</p>
          </div>
          <div className="col-md-2">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/browse">Browse Laptops</Link></li>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Customer Service</h5>
            <ul>
              <li><Link to="/support">Contact Us</Link></li>
              <li><Link to="/support">FAQs</Link></li>
              <li><Link to="/support">Shipping Policy</Link></li>
              <li><Link to="/support">Return Policy</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Info</h5>
            <ul>
              <li>Email: quicktechrent@gmail.com</li>
              <li>Phone: +91 9769602148</li>
              <li>Address: 123 Tech Street, Silicon Valley, Mumbai 400042</li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; {new Date().getFullYear()} Quick Tech Rent. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* About Our Company */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold">About Our Company</h6>
            <p className="text-light small mt-3">
              Get the power to do more your way. Whether you're a gamer, a designer, a student or parent, a writer, a dealmaker, or a Jack or Jill of all trades – at the CompShop you'll find the perfect PCs for all that you do.
              Explore our collection by type – and discover devices that can make every project your best.
            </p>
          </div>

          {/* Information */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold">Information</h6>
            <ul className="list-unstyled mt-3">
              <li><a href="#" className="text-light text-decoration-none small">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none small">Catalog</a></li>
              <li><a href="#" className="text-light text-decoration-none small">Collections</a></li>
              <li><a href="#" className="text-light text-decoration-none small">Privacy</a></li>
              <li><a href="#" className="text-light text-decoration-none small">Blog</a></li>
            </ul>
          </div>

          {/* Account */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold">Account</h6>
            <ul className="list-unstyled mt-3">
              <li><a href="#" className="text-light text-decoration-none small">My Account</a></li>
              <li><a href="#" className="text-light text-decoration-none small">Password</a></li>
              <li><a href="#" className="text-light text-decoration-none small">My Addresses</a></li>
              <li><a href="#" className="text-light text-decoration-none small">My Orders</a></li>
              <li><a href="#" className="text-light text-decoration-none small">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-5 mb-4">
            <h6 className="text-uppercase fw-bold">Newsletter</h6>
            <p className="text-light small mt-3">
              Receive a 10% discount code via email when you sign up for our Store offers & updates.
            </p>
            <form className="d-flex mb-3">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-primary" type="submit">SUBSCRIBE</button>
            </form>
            <div className="d-flex gap-2">
              <img src="https://img.icons8.com/color/36/000000/mastercard-logo.png" alt="mastercard" />
              <img src="https://img.icons8.com/color/36/000000/paypal.png" alt="paypal" />
              <img src="https://img.icons8.com/color/36/000000/visa.png" alt="visa" />
            </div>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="text-center mt-4 small text-light">
          &copy; PR Computer Store || copyright AllRight Recerve 2025.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

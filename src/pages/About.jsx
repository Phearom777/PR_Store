import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="about-page-container">
        {/* Hero Section */}

        <div className="bg-light pt-3 pb-5 text-center">
          <div className="container">
            <div className="text-start">
              <Link className="links text-dark text-decoration-none " to={"/"}>
                Home
              </Link>{" "}
              <i className="bi bi-chevron-right bi-sm"></i> <span>About</span>
            </div>
            <div className="text-center mb-5 mt-2">
              <h1>About Us</h1>
              <p className="line"></p>
            </div>
            
          </div>
        </div>

        {/* Our Story Section */}
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-center mb-4">Our Journey</h2>
              <p className="text-muted text-center mb-4">
                Founded in [Year, e.g., 2020], our vision was simple: to bring
                cutting-edge technology and essential home comforts directly to
                your doorstep. What started as a small venture driven by a
                passion for electronics, has grown into a comprehensive
                e-commerce platform serving customers nationwide.
              </p>
              <p className="text-muted text-center">
                We believe in more than just selling products; we're about
                enhancing your lifestyle with reliable, innovative, and
                high-quality electronics and appliances. Every item in our
                catalog is carefully selected to meet our stringent standards
                for performance and value.
              </p>
              {/* You can add an image here if desired */}
              {/* <div className="text-center mt-4">
              <img src="path/to/your/story-image.jpg" alt="Our Story" className="img-fluid rounded shadow-sm" style={{ maxWidth: '600px' }} />
            </div> */}
            </div>
          </div>
        </div>

        {/* Our Mission & Vision Section */}
        <div className="bg-primary text-white py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <h3 className="fw-bold mb-3">
                  <i className="bi bi-rocket-takeoff-fill me-2"></i>Our Mission
                </h3>
                <p>
                  To empower our customers with access to the best laptops,
                  monitors, accessories, TVs, watches, air conditioning units,
                  and refrigerators, ensuring a seamless shopping experience,
                  competitive pricing, and unparalleled customer support. We
                  strive to be the go-to source for all your electronic and home
                  appliance needs.
                </p>
              </div>
              <div className="col-md-6">
                <h3 className="fw-bold mb-3">
                  <i className="bi bi-eye-fill me-2"></i>Our Vision
                </h3>
                <p>
                  To be the leading online retailer of electronics and home
                  appliances, recognized for our diverse product range,
                  commitment to quality, and dedication to customer
                  satisfaction. We aim to build lasting relationships with our
                  customers by consistently exceeding expectations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="container my-5">
          <h2 className="text-center mb-4">What We Offer</h2>
          <div className="row text-center m-auto">
            <div className="col-6 col-md-4 col-lg-3 mb-4 mx-auto">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <i className="bi bi-laptop fs-1 text-info mb-3"></i>
                  <h5 className="card-title fw-bold">Laptops & Monitors</h5>
                  <p className="card-text text-muted">
                    A wide selection for work, gaming, and everyday use from top
                    brands.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mb-4 mx-auto">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <i className="bi bi-earbuds fs-1 text-success mb-3"></i>
                  <h5 className="card-title fw-bold">Accessories</h5>
                  <p className="card-text text-muted">
                    Everything from keyboards, mice, webcams, headphones, and
                    more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mb-4 mx-auto">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <i className="bi bi-tv-fill fs-1 text-danger mb-3"></i>
                  <h5 className="card-title fw-bold">TVs & Watches</h5>
                  <p className="card-text text-muted">
                    Immersive viewing experiences and smart wearables for every
                    lifestyle.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mb-4 ">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <i className="bi bi-wind fs-1 text-warning mb-3"></i>
                  <h5 className="card-title fw-bold">Air Conditioning</h5>
                  <p className="card-text text-muted">
                    Stay cool and comfortable with our range of efficient AC
                    units.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <i className="bi bi-snow fs-1 text-primary mb-3"></i>
                  <h5 className="card-title fw-bold">Refrigerators</h5>
                  <p className="card-text text-muted">
                    Keep your food fresh with our selection of modern
                    refrigerators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-light py-5">
          <div className="container">
            <h2 className="text-center mb-4">Why Choose Us?</h2>
            <div className="row text-center">
              <div className="col-md-3 mb-4">
                <i className="bi bi-check-circle-fill fs-2 text-success mb-2"></i>
                <h5 className="fw-bold">Quality Products</h5>
                <p className="text-muted">
                  Hand-picked for performance & durability.
                </p>
              </div>
              <div className="col-md-3 mb-4">
                <i className="bi bi-cash-stack fs-2 text-success mb-2"></i>
                <h5 className="fw-bold">Competitive Prices</h5>
                <p className="text-muted">
                  Great value without compromising quality.
                </p>
              </div>
              <div className="col-md-3 mb-4">
                <i className="bi bi-truck fs-2 text-success mb-2"></i>
                <h5 className="fw-bold">Fast & Secure Delivery</h5>
                <p className="text-muted">
                  Reliable shipping right to your door.
                </p>
              </div>
              <div className="col-md-3 mb-4">
                <i className="bi bi-headset fs-2 text-success mb-2"></i>
                <h5 className="fw-bold">Excellent Support</h5>
                <p className="text-muted">
                  Dedicated customer service team ready to assist.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-primary text-white py-5 text-center">
          <div className="container">
            <h2 className="mb-3">Ready to Explore Our Products?</h2>
            <p className="lead mb-4">
              Dive into our extensive collection and find exactly what you need.
            </p>
            <a href="/products" className="btn btn-light btn-lg me-3">
              Shop Now <i className="bi bi-arrow-right"></i>
            </a>
            <a href="/contact" className="btn btn-outline-light btn-lg">
              Contact Us <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

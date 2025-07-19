import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="container my-5">
        <div className="text-start mt-3">
          <Link className="links text-dark text-decoration-none " to={"/"}>
            Home
          </Link>{" "}
          <i className="bi bi-chevron-right bi-sm"></i> <span>Contact</span>
        </div>
        <div className="text-center mb-5 mt-2">
          <h3>Contact Us</h3>
          <p className="line"></p>
        </div>
        <div className="row">
          {/* Contacts Section */}
          <div className="col-md-4">
            <h2 className="mb-4">CONTACTS</h2>
            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-house fs-4 me-3"></i>{" "}
              {/* Bootstrap House Icon */}
              <div>
                <p className="fw-bold mb-0">ADDRESS</p>
                <p>7563 St. Vicent Place, Glasgow</p>
              </div>
            </div>
            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-phone fs-4 me-3"></i>{" "}
              {/* Bootstrap Phone Icon */}
              <div>
                <p className="fw-bold mb-0">PHONE</p>
                <p>+09123 456 789</p>
              </div>
            </div>
            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-clock fs-4 me-3"></i>{" "}
              {/* Bootstrap Clock Icon */}
              <div>
                <p className="fw-bold mb-0">HOURS</p>
                <p>7 Days a week from 10:00 am to 6:00 pm!</p>
              </div>
            </div>
            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-envelope fs-4 me-3"></i>{" "}
              {/* Bootstrap Envelope Icon */}
              <div>
                <p className="fw-bold mb-0">EMAIL</p>
                <p>zemes@demolink.org</p>
              </div>
            </div>
          </div>

          {/* Get In Touch With Us Section */}
          <div className="col-md-4">
            <h2 className="mb-4">GET IN TOUCH WITH US</h2>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                SUBMIT
              </button>
            </form>
          </div>

          {/* Follow Us Section */}
          <div className="col-md-4">
            <h2 className="mb-4">FOLLOW US</h2>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  <i className="bi bi-facebook fs-4 me-3"></i>{" "}
                  {/* Bootstrap Facebook Icon */}
                  <span className="fw-bold">FOLLOW US ON FACEBOOK</span>
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  <i className="bi bi-twitter fs-4 me-3"></i>{" "}
                  {/* Bootstrap Twitter Icon */}
                  <span className="fw-bold">JOIN US ON TWITTER</span>
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  <i className="bi bi-instagram fs-4 me-3"></i>{" "}
                  {/* Bootstrap Instagram Icon */}
                  <span className="fw-bold">FOLLOW US ON INSTAGRAM</span>
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  <i className="bi bi-youtube fs-4 me-3"></i>{" "}
                  {/* Bootstrap Youtube Icon */}
                  <span className="fw-bold">SUBSCRIBE US ON YOUTUBE</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

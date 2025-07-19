import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import { useCart } from "../pages/CartContext";
function Navbar() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "", href: "/cart" },
    { label: "", href: "/search" },
  ];
  const [open, setOpen] = useState(false);
  const hanndlemenu = () => {
    setOpen(!open);
  };

  const { cartItems } = useCart();

  const getTotalQty = () => cartItems.length;

  return (
    <div className="nav shadow-sm">
      <div className="  container-fluid  ">
        <div className="container p-3 p-md-4">
          <div className="row ">
            {/* Logo */}
            <div className="col-4 col-md-4 col-lg-4  d-flex align-items-center justify-content-start justify-content-md-start ">
              <div className="btn_menu me-5 ms-0 " onClick={hanndlemenu}>
                {open ? (
                  <i className="bi bi-x-lg fw-bold"></i> // Bootstrap X icon
                ) : (
                  <i className="bi bi-list fw-bold"></i> // Bootstrap menu icon
                )}
              </div>
              <div className="logo ">
                <img src="/public/image/logo.png" alt="Logo" />
              </div>
            </div>

            {/* Menu */}
            <div
              className={`col-8 col-md-6 col-lg-4  menu ${open ? "show" : ""}`}
            >
              <ul className=" ul gap-4 list-unstyled mb-0 ">
                {navLinks.map((item, index) => (
                  <li key={index} onClick={() => setOpen(false)}>
                    <Link
                      className="link text-decoration-none cursor-pointer"
                      to={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cart */}
            <div className="col-8 col-md-8 col-lg-4 d-flex  justify-content-end align-items-center">
              <Link
                to={"/cart"}
                href=""
                className="cart text-end position-relative"
              >
                <p className="mb-0 text-dark cursor-pointer">
                  <i className="bi bi-bag-check-fill fs-5 "></i>

                  {/* Bootstrap Badge */}

                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {getTotalQty()}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

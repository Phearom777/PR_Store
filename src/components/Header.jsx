import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  const handleSearch = () => {
    if (search) {
      // It's closing
      setSearch(false);
      navigate("/"); // Go to home
    } else {
      setSearch(true);
      navigate("/search")
    }
  };
  return (
    <div>
      <div className="container-fluid shadow-sm">
        <div className="container p-2">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div style={{ color: "rgb(108, 108, 108)" }} className="contact ">
                Order online or call us (+885) 965 231 272
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="account  d-flex justify-content-start gap-3  justify-content-md-end align-items-center">
                <div
                  className={`form-group mt-0 search ${search ? "show" : ""}`}
                >
                  <input
                    type="search"
                    name=""
                    id=""
                    className=" search-input"
                    placeholder="search here"
                  />
                </div>
                <p
                  className="mb-0  text-decoration-none text-dark d-flex "
                  onClick={handleSearch}
                >
                  <i className="bi bi-search cursor-pointer"></i>
                </p>

                <p className="mb-0 border-0">
                  <Link to='/favorite' >
                  <i
                    className="bi bi-suit-heart-fill fs-5 text-danger cursor-pointer"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Favorite"
                  ></i>
                  </Link>
                </p>
                <div className="mb-0">
                  <select className="form-select border-0 shadow-none">
                    <option value="1">USD</option>
                    <option value="2">KHR</option>
                  </select>
                </div>
                <div className="dropdown">
                  <p
                    className="mb-0 cursor-pointer"
                    role="button"
                    id="accountDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-circle fs-4"></i>
                  </p>

                  {/* Dropdown Menu */}
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="accountDropdown"
                  >
                    <li>
                      <h6 className="dropdown-header">
                        <img
                          src="/image/profile.png"
                          className="img-fluid w-25 rounded-circle"
                          alt=""
                        />
                      </h6>
                    </li>
                    <li>
                      <h6 className="dropdown-header">Hello, User</h6>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/cart">
                        My Orders
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-danger d-flex justify-content-start align-items-center align-middle "
                        to="/login"
                      >
                        <i className="bi bi-arrow-bar-left fs-4"></i>
                        <span>LogOut</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/*  */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

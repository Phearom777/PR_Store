import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import { categories, products } from "../service/data";
import { toast } from "react-toastify";
import { useCart } from "./CartContext";

function Shop() {
  const { addToCart, toggleFavorite } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  // ✅ Filter products based on selected category
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const categoryId = parseInt(selectedCategory); // convert string to number
      setFilteredProducts(
        products.filter((product) => product.category === categoryId)
      );
    }
    setCurrentPage(1);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleAdd = (product) => {
    toast.success("🛒 Product added to cart!");
    addToCart(product);
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="text-start mt-3">
          <Link className="links text-dark text-decoration-none" to={"/"}>
            Home
          </Link>{" "}
          <i className="bi bi-chevron-right bi-sm"></i>{" "}
          <span>Shop</span>
        </div>

        <div className="text-center mb-5 mt-2">
          <h3>Shop</h3>
          <p className="line"></p>
        </div>

        <div className="header mb-4">
          <form>
            <div className="form-group w-50  w-md-25 w-lg-50  d-flex flex-column gap-2">
              <label htmlFor="filter_by_category" className="form-label">
                Filter
              </label>
              <select
                className="form-select"
                name="filter_by_category"
                id="filter_by_category"
               
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="all">All</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>

        <div className="row">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div
                key={product.id}
                data-aos="zoom-in-down"
                data-aos-delay="100"
                data-aos-duration="600"
                className="card col-6 col-md-4 col-lg-3 position-relative overflow-hidden border-0 rounded-3 mb-3"
              >
                <div className="product_type bg-danger text-light position-absolute py-1">
                  {product.label}
                </div>
                <Link to={`/product-detail/${product.id}`}>
                  <div className="image text-center overflow-hidden pt-3">
                    <img
                      src={product.image}
                      className="img-fluid text-center"
                      alt={product.title}
                    />
                  </div>
                </Link>

                <div className="title text-start text-dark p-3">
                  <p className="m-0 product_title">{product.title}</p>
                  <div className="d-flex gap-3">
                    <del className="price text-danger">
                      ${product.regularPrice}
                    </del>
                    <p className="m-0 price">${product.salePrice}</p>
                  </div>

                  <div className="cart row d-flex align-items-center text-hover-primary">
                    <div className="col-7 col-md-7 col-lg-7">
                      <button
                        onClick={() => handleAdd(product)}
                        className="btn align-middle border-0 btn-sm p-0"
                      >
                        <i className="bi bi-bag-plus-fill fs-5"></i>
                        <span className="add_to_cart"> Add to cart</span>
                      </button>
                    </div>
                    <div className="col-5 col-md-5 col-lg-5 text-end">
                      <div className="btn align-middle border-0 btn-sm p-0">
                        <button
                          onClick={() => toggleFavorite(product)}
                          className="btn align-middle border-0 btn-sm p-0"
                        >
                          <i className="bi bi-heart-fill me-2"></i>
                        </button>
                        <Link to={`/product-detail/${product.id}`}>
                          <i className="bi bi-search"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-muted py-5">
              <h5>This category has no product yet.</h5>
            </div>
          )}
        </div>

        {/* Pagination */}
        <nav className="d-flex justify-content-center mt-4">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &laquo;
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  onClick={() => paginate(index + 1)}
                  className="page-link"
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                &raquo;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Shop;

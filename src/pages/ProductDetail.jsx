import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../service/data";
import "../assets/css/style.css";
import { toast } from "react-toastify";
import { useCart } from "./CartContext";
import { Button } from "bootstrap";
function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const price = parseFloat(product.salePrice);
  const { addToCart, toggleFavorite } = useCart();



  const randomProducts = [...products]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  // const isFav = favorites.some((item) => item.id === products.id);

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="text-start mt-3">
            <Link className="links text-dark text-decoration-none " to={"/"}>
              Home
            </Link>{" "}
            <i className="bi bi-chevron-right bi-sm"></i>{" "}
            <span>Prduct Detail</span>
          </div>
          <div className="text-center mb-5 mt-2">
            <h3>Product Detail</h3>
            <p className="line"></p>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="row mb-4">
                <div className="col-3 change_image col-md-3 col-lg-3 px-0  ">
                  <div className=" image position-relative text-end d-flex flex-column gap-1  ">
                    <div className="text-center position-absolute arrow_up ">
                      <i className="bi bi-chevron-up fs-3"></i>
                    </div>
                    <img
                      src={product.image}
                      className="img-fluid w-75 mx-auto "
                      alt={product.title}
                    />
                    <img
                      src={product.image}
                      className="img-fluid w-75 mx-auto  "
                      alt={product.title}
                    />
                    <img
                      src={product.image}
                      className="img-fluid w-75 mx-auto"
                      alt={product.title}
                    />
                    <div className="text-centertext-center arrow_down position-absolute ">
                      <i className="bi bi-chevron-down fs-3"></i>
                    </div>
                  </div>
                </div>
                <div className="col-9 detail col-md-9 col-lg-9   ">
                  <div className="image  pt-3 mx-auto mt-0 ">
                    <img
                      src={product.image}
                      className="img-fluid  text-center "
                      alt={product.title}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 ">
              <div className="product_text  ">
                <h2 className="product-title">{product.title}</h2>
                <p className="availability">
                  Availability: <strong>39 items</strong>
                </p>
                <p className="price">Price: ${price.toFixed(2)} </p>
                <p className="barcode">Barcode: ----</p>
                <p className="collections">
                  Collections: <Link to="#">Accessories</Link>{" "}
                  <Link to="#">Computing</Link>{" "}
                  <Link to="#">Laptops & computers</Link>
                </p>
                <p className="product-type">
                  Product type: <Link to="#">Computer accessories</Link>
                </p>
                {/* <p className="vendor">
                  Vendor: <Link to="#">Computer Store</Link>
                </p> */}
                <p>
                  <span>Description: </span> {product.description}
                </p>
                <div className="price-quantity mt-4">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <span className="price h3">€257.16</span>
                    </div>
                    <div className="col-auto">
                      <div className="d-flex justify-content-center gap-2 mt-2">
                        <p className="px-2 py-1 bg-light border">
                          <i className="bi bi-dash fw-bold"></i>
                        </p>
                        <p className="px-3 py-1 border">2</p>
                        <p className="px-2 py-1 bg-light border">
                          <i className="bi bi-plus fw-bold"></i>
                        </p>
                      </div>
                    </div>
                    <div className="add-to-cart-section d-flex gap-3 mt-4">
                      <button
                        className="btn btn-info btn-sm w-auto text-white "
                        onClick={() => addToCart(product)}
                      >
                        <i className="bi bi-bag-plus-fill fs-5 ">
                          {" "}
                          Add to cart
                        </i>
                      </button>
                      <button
                        onClick={() => toggleFavorite(product)}
                        className="btn align-middle border-0 btn-sm p-0 "
                      >
                        <i className="bi bi-heart fs-5"></i>{" "}
                        <span>Add to the wishlist</span>
                      </button>
                      {/* <i className="bi bi-heart"></i> Add to the wishlist */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related product */}
          <div className="all_card my-5  ">
            <div className="text-center mb-3 ">
              <h3>Relate Product</h3>
              <p className="line"></p>
            </div>

            <div className="row d-flex  rounded-2 py-3 px-2 ">
              {randomProducts.map((product) => (
                <div
                  key={product.id}
                  data-aos="zoom-in-down"
                data-aos-delay="100"
                data-aos-duration="600"
                  className="card col-6 col-md-4 col-lg-3 position-relative overflow-hidden  border-0 rounded-3 mb-3"
                >
                  <div className="product_type bg-danger  text-light  position-absolute py-1">
                    {product.label}
                  </div>
                  <Link to={`/product-detail/${product.id}`}>
                    <div className="image  text-center  overflow-hidden  pt-3">
                      <img
                        src={product.image}
                        className="img-fluid  text-center "
                        alt={product.title}
                      />
                    </div>
                  </Link>
                  <div className="title text-start text-dark p-3">
                    <p className="m-0 product_title">{product.title}</p>
                    <div className=" d-flex gap-3">
                      <del className="price text-danger">
                        ${product.regularPrice}
                      </del>
                      <p className="m-0  price">${product.salePrice}</p>
                    </div>

                    <div className="cart row  d-flex align-items-center text-hover-primary">
                      <div className="col-7 col-md-7 col-lg-7">
                        <button
                          onClick={() => addToCart(product)}
                          className="btn align-middle border-0 btn-sm  p-0"
                        >
                          <i className="bi bi-bag-plus-fill fs-5"></i>
                          <span className="add_to_cart"> Add to cart</span>
                        </button>
                      </div>
                      <div className="col-5 col-md-5 col-lg-5 text-end">
                        <div className="btn  align-middle border-0 btn-sm p-0">
                          <button
                            onClick={() => toggleFavorite(product)}
                            className="btn align-middle border-0 btn-sm p-0"
                          >
                            <i className="bi bi-heart-fill me-2 "></i>
                          </button>
                          <Link to={`/product-detail/${product.id}`}>
                            <i className="bi bi-search"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;

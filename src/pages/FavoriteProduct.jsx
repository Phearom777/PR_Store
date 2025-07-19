import React from "react";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { products } from "../service/data";

function FavoriteProduct() {
  const { addToCart, favorites, toggleFavorite } = useCart();

  const handleAdd = (product) => {
    toast.success("🛒 Product added to cart!");
    addToCart(product);
  };

  // ✅ Toggle favorite on button click
  const isFav = favorites.some((item) => item.id === products.id);

  return (
    <>
      <div className="container-fluid pb-5">
        <div className="container">
          <div className="text-start mt-3">
            <Link className="links text-dark text-decoration-none " to={"/"}>
              Home
            </Link>{" "}
            <i className="bi bi-chevron-right bi-sm"></i> <span>Favorite</span>
          </div>
          <div className="text-center mb-5 mt-2">
            <h3>Your Favorite Product</h3>
            <p className="line"></p>
          </div>
          {favorites.length === 0 ? (
            <p className="text-center">No favorites yet!</p>
          ) : (
            <div className="row d-flex  rounded-2 py-3 px-2  ">
              {favorites.map((product) => (
                <div
                  key={product.id}
                  className="card col-6 col-md-4 col-lg-3 position-relative overflow-hidden  border-0 rounded-3 mb-3"
                >
                  <div className="product_type bg-danger  text-light  position-absolute py-1">
                    {product.label}
                  </div>
                  <Link to={`/product-detail/${product.id}`}>
                    <div className="image  text-center overflow-hidden  pt-3">
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

                    <div className="cart row  d-flex align-items-center    text-hover-primary">
                      <div className="col-7 col-md-7 col-lg-7">
                        <button
                          onClick={() => handleAdd(product)}
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
                            <i
                              className="bi bi-heart-fill text-danger me-2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Remove"
                            ></i>
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
          )}

          {/*  */}
        </div>
      </div>
    </>
  );
}

export default FavoriteProduct;

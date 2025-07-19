import "../assets/css/style.css";
import { brands, categories, products } from "../service/data";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Home() {
  // carousel
  const carouselImages = [
    { src: "/public/image/product/banners1.jpg", alt: "Slide 1",title: "EXTREME DEALS OF THE DAY", },
    { src: "/public/image/product/banners2.png", alt: "Slide 2",title: "SALE! 20% LAPTOP AND TABLATE", },
    { src: "/public/image//product/watchbanner.jpg", alt: "Slide 3",title: "EXTREME DEALS OF THE DAY", },
    { src: "/public/image//product/tvbanner.png", alt: "Slide 4",title: "SALE! 20% OF SAMSUNG TV", },
    { src: "/public/image//product/asuzmonitor.png", alt: "Slide 4",title: "EXTREME DEALS OF THE DAY", },
  ];

  // const [cart,setCart]=useState([]);
  // const handleAdd = (product)=>{
  //    setCart((prevCart) => [...prevCart, product]);
  //   console.log("Added to cart:", product);
  // }

  const { addToCart, favorites, toggleFavorite } = useCart();

  const handleAdd = (product) => {
    toast.success("🛒 Product added to cart!");
    addToCart(product);
  };

  // ✅ Toggle favorite on button click
  const isFav = favorites.some((item) => item.id === products.id);

  return (
    <>
      <div className="container-fluid">
        {/* carousel */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            {carouselImages.map((item, idx) => (
              <button
                key={idx}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={idx}
                className={idx === 0 ? "active" : ""}
                aria-current={idx === 0 ? "true" : undefined}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Carousel items */}
          <div className="carousel-inner">
            {carouselImages.map((img, idx) => (
              <div
                key={idx}
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
              >
                <div className="color"></div>
                <div className="title">
                  <p>{img.title}</p>
                  {/* <p>Big sale! accsessories 50% off</p> */}
                  <button className="btn px-3 py-2 px-lg-4 py-lg-3 btn-sm rounded-0  ">
                    SHOP NOW
                  </button>
                </div>
                <img src={img.src} className="d-block w-100" alt={img.alt} />
              </div>
            ))}
          </div>

          {/* Controls */}
          {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button> */}
        </div>
        <div className="scrol d-flex justify-content-end me-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-3 "
          >
            <i className="bi bi-chevron-up text-white"></i>
          </button>
        </div>
        {/* Category */}

        <div className="container">
          <div className="text-center my-5 ">
            <h3>Category</h3>
            <p className="line"></p>
          </div>
          <div className="row">
            {categories.map((cat) => (
              <div key={cat.id}  className="col-6 col-md-4 col-lg-4 mb-4">
                <div  className="cate_card position-relative overflow-hidden rounded shadow-sm">
                  {/* Hover Background Overlay */}
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-0 hover-opacity-50 transition "></div>
                  <div  className="row category bg-transparent text-center">
                    <div className="col-4 position-relative">
                      <p className=" cat_name w-100  ms-4   position-absolute top-50 start-50 translate-middle  ">
                        {cat.name}
                      </p>
                    </div>
                    <div className="col-8">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="img-fluid w-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* New Product */}
          <div className="all_card my-5  ">
            <div className="text-center mb-3 ">
              <h3> New Product</h3>
              <p className="line"></p>
            </div>
            <div className="arrow d-flex justify-content-end gap-2 mb-4">
              <i className="bi bi-chevron-left fs-5 fw-bold"></i>
              <i className="bi bi-chevron-right fs-5 fw-bold"></i>
            </div>
            <div className="row_card d-flex flex-nowrap gap-3 gap-md-2 gap-lg-5  rounded-2 py-3 px-2 overflow-x-scroll  mw-100 gap-1">
              {products.map((product) => (
                <div key={product.id} className="card_carousel ">
                  <div  className="card   d-flex position-relative overflow-hidden    border-0 rounded-3">
                    <div className="product_type bg-danger  text-light  position-absolute py-1">
                      {product.label}
                    </div>
                    <Link to={`/product-detail/${product.id}`}>
                      <div className="image  text-center  pt-3">
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
                                className={`bi bi-heart-fill me-2 ${
                                  isFav ? "text-danger" : "text-dark"
                                }`}
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Favorite"
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
                </div>
              ))}
            </div>
          </div>

          {/* even */}
        </div>
        <div className="row">
          <div  className="col-12 col-md-6 col-lg-6">
            <div  className="even_banner">
              <div className="color"></div>

              <img
                src="/public/image/product/banner 1.jpg"
                className="image-fluid w-100"
                alt=""
              />
              <div className="title">
                <p>Big sale! accsessories 50% off</p>
                <button className="btn px-4 py-3 btn-sm  rounded-0 ">
                  {" "}
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="even_banner ">
              <img
                src="/public/image/product/banner2.jpg"
                className="image-fluid w-100"
                alt=""
              />
              <div className="title">
                <p>Big sale! accsessories 50% off</p>
                <button className="btn px-4 py-3 btn-sm rounded-0  ">
                  SHOP NOW
                </button>
              </div>
              <div className="color"></div>
            </div>
          </div>
        </div>
        {/* Best seller */}
          <div className="all_card my-5  ">
            <div className="text-center mb-3 ">
              <h3>Best Seller</h3>
              <p className="line"></p>
            </div>
            <div className="arrow d-flex justify-content-end gap-2 mb-4">
              <i className="bi bi-chevron-left fs-5 fw-bold"></i>
              <i className="bi bi-chevron-right fs-5 fw-bold"></i>
            </div>
            <div className="row_card d-flex flex-nowrap gap-3 gap-md-2 gap-lg-5  rounded-2 py-3 px-2 overflow-x-scroll  mw-100 gap-1">
              {products.map((product) => (
                <div key={product.id}  className="card_carousel ">
                  <div 
                 className="card   d-flex position-relative overflow-hidden    border-0 rounded-3">
                    <div className="product_type bg-danger  text-light  position-absolute py-1">
                      {product.label}
                    </div>
                    <Link to={`/product-detail/${product.id}`}>
                      <div className="image  text-center  pt-3">
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
                                className={`bi bi-heart-fill me-2 ${
                                  isFav ? "text-danger" : "text-dark"
                                }`}
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
                </div>
              ))}
            </div>
          </div>

        <div className="container">
          <div className="row my-5 ">
            <div className="text-center mb-3 ">
              <h3>BRANDS</h3>
              <p className="line"></p>
            </div>
            {brands.map((brand) => (
              <div key={brand.id} className="col-6 col-md-2 col-lg-2  ">
                <div className="image  text-center pt-2">
                  <img
                    src={brand.image}
                    className="img-fluid w-50 text-center bg-transparent"
                  />
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

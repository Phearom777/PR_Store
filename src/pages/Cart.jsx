import { Link } from "react-router-dom";
import { useCart } from "./CartContext"; // using context only for data

function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.salePrice * item.qty,
    0
  );
  const total = (item) => {
    return item.qty * item.salePrice;
  };

  return (
    <>
    <div className="container " >
      <div className="text-start mt-3">
        <Link className="links text-dark text-decoration-none " to={"/"}>
          Home
        </Link>{" "}
        <i className="bi bi-chevron-right bi-sm"></i>{" "}
        <span>Your Shopping Cart</span>
      </div>

      <div className="text-center mb-5 mt-2">
        <h3>Your Order</h3>
        <p className="line"></p>
      </div>

      {cartItems.length === 0 ? (
        <h5 className="text-center">🛒 No products in cart.</h5>
      ) : (
        cartItems.map((item) => (
          <div className="row mt-3 mb-4" key={item.id}>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-4 text-center">
                <Link to={`/product-detail/${item.id}`}>
                  <img
                    src={item.image}
                    className="img-fluid w-75"
                    alt={item.title}
                  />
                  </Link>
                </div>
                <div className="col-8 text-start">
                  <p className="m-0 fw-bold">{item.title}</p>
                  <p className="m-0">
                    <span className="span">Price:</span>$
                    {item.salePrice.toFixed(2)}
                  </p>
                  <button
                    className="btn btn-danger btn-sm mt-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
              <div className="row">
                <div className="col-6">
                  <div className="d-flex justify-content-center gap-2 mt-2">
                    <p
                      className="px-2 py-1 bg-light border"
                      onClick={() => decreaseQty(item.id)}
                    >
                      <i className="bi bi-dash fw-bold"></i>
                    </p>
                    <p className="px-3 py-1 border">{item.qty}</p>
                    <p
                      className="px-2 py-1 bg-light border"
                      onClick={() => increaseQty(item.id)}
                    >
                      <i className="bi bi-plus fw-bold"></i>
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <p className="fs-5 fw-bold mt-3">${total(item).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      <hr />
      <div className="checkout me-0 me-md-5 me-lg-5 text-end">
        <div className="subtotal    align-middle gap-3  ">
          <h5 className="text-end">SubTotal:</h5>
          <p className="qty fs-5 fw-bold">${subtotal.toFixed(2)}</p>
        </div>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn order btn-primary text-white">
          <i className="bi bi-credit-card-fill text-white"> Payment</i>
        </button>
      </div>
      
    </div>
    {/* modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Payment Method
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="form">
        {/* Payment Options */}
        <div className="payment--options">
          <button name="paypal" type="button" className="gap-3 bg-primary text-white">
            {/* Insert PayPal SVG here */}
            ABA Pay
          </button>

          <button name="apple-pay" type="button" className="bg-info text-white">
            {/* Insert Apple Pay SVG here */}
            ACLEDA Pay
          </button>

          <button name="google-pay" type="button" className="bg-warning">
            {/* Insert Google Pay SVG here */}
            Paypal 
          </button>
        </div>

        {/* Separator */}
        <div className="separator">
          <hr className="line" />
          <p>or pay using credit card</p>
          <hr className="line" />
        </div>

        {/* Credit Card Form */}
        <div className="credit-card-info--form">
          <div className="input_container">
            <label htmlFor="card_name" className="input_label">Card holder full name</label>
            <input id="card_name" className="input_field" type="text" placeholder="Enter your full name" />
          </div>

          <div className="input_container">
            <label htmlFor="card_number" className="input_label">Card Number</label>
            <input id="card_number" className="input_field" type="number" placeholder="0000 0000 0000 0000" />
          </div>

          <div className="input_container">
            <label className="input_label">Expiry Date / CVV</label>
            <div className="split">
              <input id="expiry" className="input_field" type="text" placeholder="01/23" />
              <input id="cvv" className="input_field" type="number" placeholder="CVV" />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="purchase--btn">Checkout</button>
      </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;

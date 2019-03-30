import React from "react";
import { ProductConsumer } from "../../context";
import PayPalBtn from "./PayPalBtn";
export default function CartTotals({ history }) {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {value => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
            console.log(cartTotal);

            return (
              <div className="col text-title text-center my-4">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={clearCart}
                >
                  clear cart
                </button>
                <h3>subtotal : ${cartSubTotal}</h3>
                <h3>tax : ${cartTax}</h3>
                <h3>total : ${cartTotal}</h3>
                <PayPalBtn
                  history={history}
                  clearCart={clearCart}
                  cartTotal={cartTotal}
                />
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}

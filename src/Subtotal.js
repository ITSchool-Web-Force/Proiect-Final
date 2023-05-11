import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Total ({basket.length} cumparaturi): <strong>${value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Acesta este un cadou
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
      />

      <button>Finalizare comada</button>
    </div>
  );
}

export default Subtotal;

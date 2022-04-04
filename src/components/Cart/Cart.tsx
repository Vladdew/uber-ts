import { useEffect, FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { store } from "../../store";
import { mainState } from "../../types/mainTypes";
import { ItemProductType } from "../../types/interfaces";

import CartProduct from "../CartProduct/CartProduct";
import FormCheckout from "../FormCheckout/FormCheckout";
import "./Cart.scss";

const Cart: FC = () => {
  const { cart, totalCheckout } = useTypedSelector(state => state);
  const { changeAmount, calculateCartTotal } = useActions();

  const composedChangeAmount = (amount: number, uuid: string) => {
    changeAmount(amount, uuid);
    calculateCartTotal();
  };

  useEffect(() => {
    return () => {
      const curentCartState = (store.getState() as mainState).cart;
      if (curentCartState.length) {
        localStorage.setItem("cart", JSON.stringify(curentCartState));
      }
    };
  }, []);

  window.addEventListener("beforeunload", function () {
    localStorage.setItem(
      "cart",
      JSON.stringify((store.getState() as mainState).cart)
    );
  });

  const changeQty = (param: string, uuid: string): void => {
    const currentProduct = cart.find(
      (product: ItemProductType) => product.uuid === uuid
    );

    if (param === "+") {
      currentProduct.amount += 1;
    } else {
      currentProduct.amount -= 1;
    }

    composedChangeAmount(currentProduct.amount, uuid);
  };

  return (
    <>
      <h1 className="cart__h1">Cart</h1>
      <div className="cart">
        <div className="cart__goods">
          {cart.map((product: ItemProductType) => (
            <CartProduct
              product={product}
              key={product.uuid}
              changeQty={changeQty}
            />
          ))}
          {cart.length !== 0 ? (
            <span className="cart__total">{`Total:${totalCheckout} UAH`}</span>
          ) : (
            <span className="cart__total">Cart empty</span>
          )}
        </div>
        {cart.length !== 0 && <FormCheckout />}
      </div>
    </>
  );
};

export default Cart;

import { useState, FC } from "react";
import { store } from "../../store";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { ItemProductType, OrderType } from "../../types/interfaces";
import { mainState } from "../../types/mainTypes";

import {
  selectOrder,
  selectRestaurantsListError,
  selectIsLoading,
} from "../../store/selector";
import Loader from "../Loader";
import Error from "../Error/Error";
import "./Order.scss";

export const Order: FC = () => {
  const state: mainState = useTypedSelector(s => s);
  const [counter, setCount] = useState(1);

  const order: OrderType = selectOrder(state);
  const isLoading = selectIsLoading(state);
  const error = selectRestaurantsListError(state);

  const { setOrder, addToCart, setModalWindow, calculateCartTotal } =
    useActions();

  const deleteOrder = () => {
    setModalWindow(false);
    setOrder(null);
  };

  const addToCartComposed = (product: ItemProductType) => {
    addToCart(product);
    calculateCartTotal();
    setModalWindow(false);
  };

  const incrementCounter = () => setCount(counter + 1);

  const decrementCounter = () => {
    if (counter <= 1) return;
    return setCount(counter - 1);
  };
  const { imageUrl, title, itemDescription, price } = order;

  const addToCartHandler = (product: ItemProductType, amount: number) => {
    const payload = product;

    payload.amount = amount;
    addToCartComposed(payload);
    localStorage.setItem(
      "cart",
      JSON.stringify((store.getState() as mainState).cart)
    );
  };

  const srcImage = imageUrl || "./images/no_image.png";
  const srcTitle = title || "no-image icon";

  if (isLoading) {
    return <Loader />;
  }

  return (
    <aside className="modal">
      <div className="modal-window">
        {error && <Error message={error} />}
        {!error && (
          <>
            <img className="modal-window__img" src={srcImage} alt={srcTitle} />
            <div className="modal-window__wrapper-content">
              <p className="modal-window__title">{`${price}₴`}</p>
              <p className="modal-window__title">{title}</p>
              <p className="modal-window__description">{itemDescription}</p>
              <div className="modal-window__footer">
                <div className="counter">
                  <button
                    className="counter__change-amount"
                    type="button"
                    onClick={decrementCounter}
                  >
                    <img
                      className="counter__button"
                      src="./images/button-minus.svg"
                      alt="icon minus"
                    />
                  </button>

                  <div className="counter__item">{counter}</div>
                  <button
                    className="counter__change-amount"
                    type="button"
                    onClick={incrementCounter}
                  >
                    <img
                      className="counter__button"
                      src="./images/button-plus.svg"
                      alt="icon plus"
                    />
                  </button>
                </div>
                <button
                  onClick={() => addToCartHandler(order, counter)}
                  type="button"
                  className="modal-window__button-order"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </>
        )}
        <div onClick={deleteOrder} role="presentation">
          <img
            className="modal-window__button-close"
            src="./images/button-close.svg"
            alt="button close"
            title="close"
          />
        </div>
      </div>
    </aside>
  );
};

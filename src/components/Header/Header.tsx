import { useState, FC } from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { HeaderStateProps } from "../../types/interfaces";
import { mainState } from "../../types/mainTypes";

import Input from "../Input";
import "./Header.scss";

export const Header: FC = () => {
  const { totalCheckout, totalItemCheckout }: mainState = useTypedSelector(
    s => s
  );
  const [state, setState] = useState<HeaderStateProps>({
    address: "",
    time: "",
    search: "",
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: false,
  });

  const {
    address,
    time,
    search,
    isMobileSearchVisible,
    isMobileDeliveryInfoVisible,
  } = state;

  const handleChange = (e: Event) => {
    const el = e.target as HTMLInputElement;
    if (el) {
      setState({
        ...state,
        [el.name]: el.value,
      });
    }
  };

  const toggleSearch = () =>
    setState({
      ...state,
      isMobileSearchVisible: !isMobileSearchVisible,
      isMobileDeliveryInfoVisible: false,
    });

  const toggleDeliveryInfo = () =>
    setState({
      ...state,
      isMobileDeliveryInfoVisible: !isMobileDeliveryInfoVisible,
      isMobileSearchVisible: false,
    });

  const closeMobile = () =>
    setState({
      ...state,
      isMobileDeliveryInfoVisible: false,
      isMobileSearchVisible: false,
    });
  return (
    <header className="header">
      <div className="content">
        <div className="header__inner">
          <Link to="/">
            <img
              className="header__logo"
              src="./images/logo.svg"
              alt="Uber Eats"
            />
          </Link>

          <div className="header__delivery-info">
            <Input
              name="address"
              value={address}
              onChange={e => handleChange(e)}
              placeholder="Address"
              iconUrl="./images/place.svg"
            />

            <Input
              name="time"
              value={time}
              onChange={e => handleChange(e)}
              placeholder="Time"
              iconUrl=""
              type="time"
            />
          </div>

          <Input
            name="search"
            value={search}
            onChange={e => handleChange(e)}
            placeholder="Search"
            iconUrl="./images/search.svg"
            className="header__search"
          />

          <div className="header__toogle-buttons">
            <button
              onClick={toggleDeliveryInfo}
              type="button"
              className="header__toogle-btn"
            >
              <img
                src="./images/place.svg"
                alt="place icon"
                className="control__icon"
              />
            </button>
            <button
              onClick={toggleSearch}
              type="button"
              className="header__toogle-btn"
            >
              <img
                src="./images/search.svg"
                alt="search icon"
                className="control__icon"
              />
            </button>
          </div>
          <div className="header__cart-wrap">
            {totalItemCheckout ? (
              <Link to="/cart">
                <div className="header__cart">
                  <img
                    className="header__cart-img"
                    src="./images/cart.png"
                    alt="Uber Eats Cart"
                  />
                  <span className="header__cart-total">
                    {`${totalCheckout} UAH`}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="header__cart">
                <img
                  className="header__cart-img"
                  src="./images/cart.png"
                  alt="Uber Eats Cart"
                />
              </div>
            )}
            <span
              className={
                !totalItemCheckout
                  ? "header__cart-amount"
                  : "header__cart-amount header__cart-amount-animate"
              }
            >
              {totalItemCheckout}
            </span>
          </div>
        </div>

        {(isMobileSearchVisible || isMobileDeliveryInfoVisible) && (
          <div className="header__mobile-controls mobile-controls">
            {isMobileSearchVisible && (
              <Input
                label="Find"
                name="search"
                value={search}
                onChange={e => handleChange(e)}
                placeholder="Search"
                iconUrl="./images/search.svg"
                isSmall={false}
              />
            )}

            {isMobileDeliveryInfoVisible && (
              <>
                <Input
                  label="When"
                  name="time"
                  value={time}
                  onChange={e => handleChange(e)}
                  placeholder="Time"
                  iconUrl=""
                  type="time"
                  isSmall={false}
                />

                <Input
                  label="To"
                  name="address"
                  value={address}
                  onChange={e => handleChange(e)}
                  placeholder="Address"
                  iconUrl="./images/place.svg"
                  isSmall={false}
                />
              </>
            )}

            <button
              onClick={closeMobile}
              type="button"
              className="mobile-controls__close"
            >
              <img src="./images/close.svg" alt="search icon" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

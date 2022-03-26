import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import RestaurantsListPage from "../RestaurantsListPage/RestaurantsListPage";
import { Header } from "../Header";
import Footer from "../Footer";
import { Cart } from "../Cart";
import { RestaurantPage } from "../RestaurantPage";
import { Order } from "../Order";

import "./App.scss";

interface Iprops {
  modalWindow: boolean;
  returnCartFromLS: (cartLS: string) => void;
}

export const App = ({ modalWindow, returnCartFromLS }: Iprops) => {
  // const state = useTypedSelector(state => state);
  // console.log(state);

  useEffect(() => {
    const cartLS = localStorage.getItem("cart");

    if (cartLS) {
      return returnCartFromLS(JSON.parse(cartLS));
    }
  }, [returnCartFromLS]);

  return (
    <>
      <Header />
      <main className="page">
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<RestaurantsListPage />} />
          <Route path="/:uuid" element={<RestaurantPage />} />
        </Routes>
      </main>
      <Footer />
      {modalWindow && <Order />}
    </>
  );
};

App.propTypes = {
  modalWindow: PropTypes.bool.isRequired,
  returnCartFromLS: PropTypes.func.isRequired,
};

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { selectStateModalWindow } from "../../store/selector";

import { Route, Routes } from "react-router-dom";
import RestaurantsListPage from "../RestaurantsListPage/RestaurantsListPage";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import { RestaurantPage } from "../RestaurantPage/RestaurantPage";
import { Order } from "../Order/Order";

import "./App.scss";

export const App: React.FC = () => {
  const state = useTypedSelector(state => state);
  const modalWindow: boolean = selectStateModalWindow(state);
  const { returnCartFromLS, calculateCartTotal } = useActions();

  useEffect(() => {
    const cartLS = localStorage.getItem("cart");
    function a() {
      if (cartLS) {
        returnCartFromLS(JSON.parse(cartLS));
      }
      calculateCartTotal();
    }
    if (cartLS) {
      return a();
    }
  }, []);

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

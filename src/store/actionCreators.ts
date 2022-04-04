import { Dispatch } from "redux";
import * as actions from "./actions";
import { ActionTypes } from "../types/mainTypes";
const BASE_URL = "https://mate-uber-eats-api.herokuapp.com/api/v1/";

const {
  startLoading,
  saveRestaurants,
  setRestaurantsError,
  stopLoading,
  saveRestaurantPage,
  setModalWindow,
  setOrder,
} = actions;

export const loadRestaurants = () => (dispatch: Dispatch<ActionTypes>) => {
  dispatch(startLoading());
  fetch(`${BASE_URL}restaurants/`)
    .then(response => response.json())
    .then(({ data }) => dispatch(saveRestaurants(data)))
    .catch(error => dispatch(setRestaurantsError(error.message)))
    .finally(() => dispatch(stopLoading()));
};

export const loadRestaurantPage =
  (id: string) => (dispatch: Dispatch<ActionTypes>) => {
    dispatch(startLoading());
    fetch(`${BASE_URL}restaurants/${id}`)
      .then(response => response.json())
      .then(({ data }) => dispatch(saveRestaurantPage(data)))
      .catch(error => dispatch(setRestaurantsError(error.message)))
      .finally(() => dispatch(stopLoading()));
  };

export const loadMenuItem =
  (uuid: string) => (dispatch: Dispatch<ActionTypes>) => {
    dispatch(setModalWindow(true));
    dispatch(startLoading());
    fetch(`${BASE_URL}menu-items/${uuid}`)
      .then(response => response.json())
      .then(({ data }) => dispatch(setOrder(data)))
      .catch(error => dispatch(setRestaurantsError(error.message)))
      .finally(() => dispatch(stopLoading()));
  };

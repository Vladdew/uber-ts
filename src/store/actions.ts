import { ActionTypes, actionType } from "../types/mainTypes";
import { Dispatch } from "redux";

const BASE_URL = "https://mate-uber-eats-api.herokuapp.com/api/v1/";

export const setOrder = (uuid: string) => ({
  type: ActionTypes.SET_ORDER,
  payload: uuid,
});

export const calculateCartTotal = () => ({
  type: ActionTypes.CALCULATE_CART_TOTAL,
});

export const addToCart = (product: any) => {
  console.log(product);
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const changeAmount = (amount: number, uuid: string) => ({
  type: ActionTypes.CHANGE_AMOUNT,
  payload: {
    amount,
    uuid,
  },
});

export const returnCartFromLS = (cart: any[]) => ({
  type: ActionTypes.RETURN_CART,
  payload: cart,
});

export const setModalWindow = (bool: boolean) => ({
  type: ActionTypes.SET_MODAL_WINDOW,
  payload: bool,
});

export const loadRestaurants = () => (dispatch: Dispatch<actionType>) => {
  dispatch({ type: ActionTypes.START_LOADING });
  fetch(`${BASE_URL}restaurants/`)
    .then(response => response.json())
    .then(({ data }) =>
      dispatch({
        type: ActionTypes.SAVE_RESTAURANTS,
        payload: data,
      })
    )
    .catch(error =>
      dispatch({
        type: ActionTypes.SET_LOAD_RESTAURANTS_ERROR,
        payload: error,
      })
    )
    .finally(() =>
      dispatch({
        type: ActionTypes.STOP_LOADING,
      })
    );
};

export const loadRestaurantPage =
  (id: string) => (dispatch: Dispatch<actionType>) => {
    dispatch({ type: ActionTypes.START_LOADING });
    fetch(`${BASE_URL}restaurants/${id}`)
      .then(response => response.json())
      .then(({ data }) =>
        dispatch({
          type: ActionTypes.SAVE_RESTAURANT_PAGE,
          payload: data,
        })
      )
      .catch(error =>
        dispatch({
          type: ActionTypes.SET_LOAD_RESTAURANTS_ERROR,
          payload: error.message,
        })
      )
      .finally(() =>
        dispatch({
          type: ActionTypes.STOP_LOADING,
        })
      );
  };

export const loadMenuItem =
  (uuid: string) => (dispatch: Dispatch<actionType>) => {
    dispatch({
      type: ActionTypes.SET_MODAL_WINDOW,
      payload: true,
    });
    dispatch({ type: ActionTypes.START_LOADING });
    fetch(`${BASE_URL}menu-items/${uuid}`)
      .then(response => response.json())
      .then(({ data }) =>
        dispatch({
          type: ActionTypes.SET_ORDER,
          payload: data,
        })
      )
      .catch(error =>
        dispatch({
          type: ActionTypes.SET_LOAD_RESTAURANTS_ERROR,
          payload: error.message,
        })
      )
      .finally(() =>
        dispatch({
          type: ActionTypes.STOP_LOADING,
        })
      );
  };

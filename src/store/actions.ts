import { ACTION_TYPES } from "../store/ActionTypes";

import { ItemProductType } from "../types/interfaces";

function inferLiteralFromString<T extends string>(arg: T): T {
  return arg;
}

export const saveRestaurants = (data: any[]) => ({
  type: inferLiteralFromString(ACTION_TYPES.SAVE_RESTAURANTS),
  payload: data,
});

export const saveRestaurantPage = (data: any[]) => ({
  type: inferLiteralFromString(ACTION_TYPES.SAVE_RESTAURANT_PAGE),
  payload: data,
});

export const setRestaurantsError = (error: string) => ({
  type: inferLiteralFromString(ACTION_TYPES.SET_LOAD_RESTAURANTS_ERROR),
  payload: error,
});

export const startLoading = () => ({
  type: inferLiteralFromString(ACTION_TYPES.START_LOADING),
});

export const stopLoading = () => ({
  type: inferLiteralFromString(ACTION_TYPES.STOP_LOADING),
});

export const setOrder = (uuid: string | null) => ({
  type: inferLiteralFromString(ACTION_TYPES.SET_ORDER),
  payload: uuid,
});

export const calculateCartTotal = () => ({
  type: inferLiteralFromString(ACTION_TYPES.CALCULATE_CART_TOTAL),
});

export const addToCart = (product: ItemProductType) => ({
  type: inferLiteralFromString(ACTION_TYPES.ADD_TO_CART),
  payload: product,
});

export const changeAmount = (amount: number, uuid: string) => ({
  type: inferLiteralFromString(ACTION_TYPES.CHANGE_AMOUNT),
  payload: {
    amount,
    uuid,
  },
});

export const returnCartFromLS = (cart: any[]) => ({
  type: inferLiteralFromString(ACTION_TYPES.RETURN_CART),
  payload: cart,
});

export const setModalWindow = (bool: boolean) => ({
  type: inferLiteralFromString(ACTION_TYPES.SET_MODAL_WINDOW),
  payload: bool,
});

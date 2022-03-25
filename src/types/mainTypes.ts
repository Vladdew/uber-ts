export interface mainState {
  restaurantsListData: any[] | null;
  restaurantPageData: any[] | null;
  isLoading: boolean;
  error: never | null;
  order: any;
  showModalWindow: boolean;
  cart: any[];
  totalCheckout: number;
  totalItemCheckout: number;
}

export enum ActionTypes {
  SAVE_RESTAURANTS = "SAVE_RESTAURANTS",
  SAVE_RESTAURANT_PAGE = "SAVE_RESTAURANT_PAGE",
  SET_LOAD_RESTAURANTS_ERROR = "SET_LOAD_RESTAURANTS_ERROR",
  START_LOADING = "START_LOADING",
  STOP_LOADING = "STOP_LOADING",
  SET_ORDER = "SET_ORDER",
  SET_MODAL_WINDOW = "SET_MODAL_WINDOW",
  ADD_TO_CART = "ADD_TO_CART",
  CHANGE_AMOUNT = "CHANGE_AMOUNT",
  RETURN_CART = "RETURN_CART",
  CALCULATE_CART_TOTAL = "CALCULATE_CART_TOTAL",
}

interface saveRestaurants {
  type: ActionTypes.SAVE_RESTAURANTS;
  payload: any[];
}

interface saveRestaurantPage {
  type: ActionTypes.SAVE_RESTAURANT_PAGE;
  payload: any[];
}

interface setRestaurantsError {
  type: ActionTypes.SET_LOAD_RESTAURANTS_ERROR;
  payload: string;
}

interface Loading {
  type: ActionTypes.START_LOADING | ActionTypes.STOP_LOADING;
}

interface setOrder {
  type: ActionTypes.SET_ORDER;
  payload: string;
}

interface calculateCartTotal {
  type: ActionTypes.CALCULATE_CART_TOTAL;
}

interface addToCart {
  type: ActionTypes.ADD_TO_CART;
  payload: {
    amount: number;
    uuid: string;
  };
}
interface changeAmount {
  type: ActionTypes.CHANGE_AMOUNT;
  payload: {
    amount: number;
    uuid: string;
  };
}

interface returnCartFromLS {
  type: ActionTypes.RETURN_CART;
  payload: any[];
}

interface setModalWindow {
  type: ActionTypes.SET_MODAL_WINDOW;
  payload: boolean;
}
export type actionType =
  | saveRestaurants
  | saveRestaurantPage
  | setRestaurantsError
  | Loading
  | setOrder
  | calculateCartTotal
  | addToCart
  | changeAmount
  | returnCartFromLS
  | setModalWindow;

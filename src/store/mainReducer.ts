import { ActionTypes, mainState, mainTypes } from "../types/mainTypes";

const initialState: mainState = {
  restaurantsListData: null,
  restaurantPageData: null,
  isLoading: false,
  error: null,
  order: {},
  showModalWindow: false,
  cart: [],
  totalCheckout: 0,
  totalItemCheckout: 0,
};

export function mainReducer(state = initialState, action: mainTypes) {
  switch (action.type) {
    case ActionTypes.SAVE_RESTAURANTS: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        restaurantsListData: payload,
        restaurantPageData: null,
      };
    }

    case ActionTypes.SAVE_RESTAURANT_PAGE: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        restaurantPageData: payload,
      };
    }

    case ActionTypes.SET_LOAD_RESTAURANTS_ERROR: {
      const { payload } = action;

      return {
        ...state,
        error: payload,
        restaurantsListData: null,
        restaurantPage: null,
        order: null,
      };
    }

    case ActionTypes.START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionTypes.STOP_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case ActionTypes.SET_ORDER: {
      const { payload } = action;

      return {
        ...state,
        order: payload,
      };
    }

    case ActionTypes.ADD_TO_CART: {
      const { payload } = action;
      const doWeHave = state.cart.find(
        product => product && product.uuid === payload.uuid
      );

      if (doWeHave) {
        doWeHave.amount += payload.amount;

        return {
          ...state,
        };
      }

      return {
        ...state,
        cart: [...state.cart, payload],
      };
    }

    case ActionTypes.CHANGE_AMOUNT: {
      const { payload } = action;
      const curentProduct = state.cart.find(
        product => product.uuid === payload.uuid
      );

      curentProduct.amount = payload.amount;
      if (!payload.amount) {
        const newGoodsList = state.cart.filter(
          product => product.uuid !== curentProduct.uuid
        );

        return {
          ...state,
          cart: [...newGoodsList],
        };
      }

      return {
        ...state,
      };
    }

    case ActionTypes.RETURN_CART: {
      const { payload } = action;

      return {
        ...state,
        cart: payload,
      };
    }

    case ActionTypes.CALCULATE_CART_TOTAL: {
      const { cart } = state;
      let productSum = 0;
      let productQty = 0;

      cart.forEach(product => {
        productSum += product.amount * product.price;
        productQty += product.amount;
      });

      return {
        ...state,
        totalCheckout: productSum,
        totalItemCheckout: productQty,
      };
    }

    case ActionTypes.SET_MODAL_WINDOW: {
      const { payload } = action;

      return {
        ...state,
        showModalWindow: payload,
      };
    }

    default:
      return state;
  }
}

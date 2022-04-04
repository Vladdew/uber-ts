import * as actions from "../store/actions";
export interface mainState {
  restaurantsListData: any;
  restaurantPageData: any;
  isLoading: boolean;
  error: string | null;
  order: any;
  showModalWindow: boolean;
  cart: any[];
  totalCheckout: number;
  totalItemCheckout: number;
  storesMap?: any;
  restaurantPage: any;
}

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

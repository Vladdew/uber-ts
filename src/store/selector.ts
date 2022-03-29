import { createSelector } from "reselect";
import { mainState } from "../types/mainTypes";

const rootSelector = (state: mainState) => state;

export const selectRestaurantsList = createSelector(
  rootSelector,
  ({ restaurantsListData }) => {
    if (!restaurantsListData) {
      return [];
    }

    const { feedItems, storesMap } = restaurantsListData;

    return feedItems.map(({ uuid }: { uuid: string }) => storesMap[uuid]);
  }
);

export const selectResorauntSections = createSelector(
  rootSelector,
  ({ restaurantPageData }) => {
    if (!restaurantPageData) {
      return [];
    }

    const { sectionsMap, sections } = restaurantPageData;

    return sections.map((id: string) => sectionsMap[id]);
  }
);

export const selectRestorauntItems = createSelector(
  rootSelector,
  selectResorauntSections,
  ({ restaurantPageData }, restorauntSections) => {
    if (!restaurantPageData) {
      return [] as any;
    }

    const { entitiesMap } = restaurantPageData;

    return restorauntSections.map((item: any) => ({
      ...item,
      itemUuids: item.itemUuids.map((uuid: string) => entitiesMap[uuid]),
    }));
  }
);

export const selectEtaRange = (state: mainState, props: any) =>
  state.storesMap[props.uuid].etaRange.text;

export const selectRestaurantPageData = createSelector(
  rootSelector,
  ({ restaurantPageData }) => restaurantPageData
);

export const selectRestaurantCurency = createSelector(
  rootSelector,
  ({ restaurantPageData }) => {
    if (!restaurantPageData) {
      return [];
    }

    return restaurantPageData.priceBucket;
  }
);

export const selectRestaurantsListError = createSelector(
  rootSelector,
  ({ error }) => error
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading
);

export const selectOrder = createSelector(rootSelector, ({ order }) => {
  if (!order) {
    return {};
  }

  return order;
});

export const selectStateModalWindow = createSelector(
  rootSelector,
  ({ showModalWindow }) => showModalWindow
);

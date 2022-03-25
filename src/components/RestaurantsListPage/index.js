import { connect } from "react-redux";

import { RestaurantsListPage } from "./RestaurantsListPage";
import { loadRestaurants } from "../../store/actions";
import {
  selectRestaurantsList,
  selectRestaurantsListError,
  selectIsLoading,
} from "../../store/selector";

const mapStateToProps = state => ({
  restaurantsListData: selectRestaurantsList(state),
  error: selectRestaurantsListError(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = {
  loadRestaurants,
};

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsListPage);

export { Enhanced as RestaurantsListPage };

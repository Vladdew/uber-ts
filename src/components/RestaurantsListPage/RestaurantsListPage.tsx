import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { mainState } from "../../types/mainTypes";

import {
  selectRestaurantsList,
  selectRestaurantsListError,
  selectIsLoading,
} from "../../store/selector";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import Loader from "../Loader";
import Error from "../Error/Error";

import "./RestaurantListPage.scss";

const DEFAULT_ETA_RANGE = "20 - 30 min";

const RestaurantsListPage: React.FC = () => {
  const state: mainState = useTypedSelector(state => state);

  const restaurantsListData: any[] | null = selectRestaurantsList(state);
  const isLoading: boolean = selectIsLoading(state);
  const error: string | null = selectRestaurantsListError(state);

  const { loadRestaurants } = useActions();

  useEffect(() => {
    loadRestaurants();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="content">
      <div className="restaurant-list">
        {restaurantsListData &&
          restaurantsListData.map(
            (restoraunt: {
              uuid: string;
              title: string;
              heroImageUrl: string;
              categories: any[];
              etaRange: any;
            }) => {
              const { uuid, title, heroImageUrl, categories, etaRange } =
                restoraunt;

              return (
                <Link to={uuid} key={uuid}>
                  <RestaurantCard
                    key={uuid}
                    title={title}
                    imageUrl={heroImageUrl}
                    categories={categories}
                    etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
                  />
                </Link>
              );
            }
          )}
      </div>
    </div>
  );
};

export default RestaurantsListPage;

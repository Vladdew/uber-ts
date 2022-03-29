import { FunctionComponent } from "react";
import { RestaurantCardProps } from "../../types/simpleTypes";

import "./RestaurantCard.scss";

export const RestaurantCard: FunctionComponent<RestaurantCardProps> = ({
  imageUrl,
  title,
  categories,
  etaRange,
}) => {
  return (
    <div className="restaurant-card">
      <img src={imageUrl} alt={title} className="restaurant-card__img" />
      <h2 className="restaurant-card__title">{title}</h2>
      <div className="restaurant-card__categories">
        {categories.join(" • ")}
      </div>
      <div className="restaurant-card__eta">{etaRange}</div>
    </div>
  );
};

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { selectRestaurantCurency } from "../../store/selector";
import { ItemProductType } from "../../types/interfaces";
import { mainState } from "../../types/mainTypes";

import "./CardItem.scss";

export const CardItem: React.FC<ItemProductType> = ({
  title,
  imageUrl,
  description,
  price,
  uuid,
}) => {
  const { loadMenuItem } = useActions();
  const createOrder = (uuid: string) => loadMenuItem(uuid);
  const state: mainState = useTypedSelector(state => state);
  const restaurantCurency = selectRestaurantCurency(state);

  return (
    <div className="card" onClick={() => createOrder(uuid)} role="presentation">
      <div className="card__description">
        <div className="card__description-wrapper">
          <p>{title}</p>
          <p className="card__description-info">{description}</p>
        </div>
        <p>{`${restaurantCurency}${price}`}</p>
      </div>
      <div className="card__wrapper-img">
        <img
          className="card__img"
          src={imageUrl || "./images/no_image.png"}
          alt={title || "no-image icon"}
        />
      </div>
    </div>
  );
};

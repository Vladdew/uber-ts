import { FC } from "react";
import { selectRestorauntItems } from "../../store/selector";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CardItem } from "../CardItem/CardItem";
import {
  ItemProductType,
  SectionProps,
  itemUuidsType,
} from "../../types/interfaces";
import "./Section.scss";

export const Section: FC<SectionProps> = ({ category }) => {
  const state = useTypedSelector(s => s);
  const restaurantItems: ItemProductType[] = selectRestorauntItems(state);

  const { title, uuid } = category;
  const items = restaurantItems.find(
    (item: ItemProductType) => item.uuid === category.uuid
  )!.itemUuids;

  return (
    <>
      <h2 className="title-categories">{title}</h2>
      <section id={uuid} className="section">
        {items!.map((item: itemUuidsType) => (
          <CardItem {...item} key={item.uuid} />
        ))}
      </section>
    </>
  );
};

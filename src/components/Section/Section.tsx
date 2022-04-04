import { FunctionComponent } from "react";
import { selectRestorauntItems } from "../../store/selector";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CardItem } from "../CardItem/CardItem";
import { ItemProductType } from "../../types/interfaces";
import "./Section.scss";

interface SectionProps {
  category: {
    displayType: any;
    itemUuids: string[];
    subtitle: string | null;
    title: string;
    uuid: string;
  };
}

export const Section: FunctionComponent<SectionProps> = ({ category }) => {
  const state = useTypedSelector(s => s);
  const restaurantItems = selectRestorauntItems(state);
  const { title, uuid } = category;
  const items = restaurantItems.find(
    (item: ItemProductType) => item.uuid === category.uuid
  ).itemUuids;

  return (
    <>
      <h2 className="title-categories">{title}</h2>
      <section id={uuid} className="section">
        {items.map((item: ItemProductType) => (
          <CardItem {...item} key={item.uuid} />
        ))}
      </section>
    </>
  );
};

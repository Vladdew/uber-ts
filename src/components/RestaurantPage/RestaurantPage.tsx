import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  selectRestaurantPageData,
  selectResorauntSections,
} from "../../store/selector";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { Section } from "../Section/Section";

import "./RestaurantPage.scss";

const DEFAULT_ETA_RANGE = "20 - 30 min";

export const RestaurantPage: React.FC = () => {
  const params = useParams();
  const state = useTypedSelector(s => s);
  const restaurantPageData = selectRestaurantPageData(state);
  const restaurantSections = selectResorauntSections(state);
  const { loadRestaurantPage } = useActions();

  useEffect(() => {
    if (params.uuid) loadRestaurantPage(params.uuid);
    window.scrollTo(0, 0);
  }, []);

  const handleClickItemMenu = (id: string) => {
    const sectionId = id.slice(2);
    const section = document.getElementById(sectionId);
    const positionSection = section!.getBoundingClientRect();

    window.scrollTo({
      left: 0,
      top: positionSection.y + window.scrollY - 170,
      behavior: "smooth",
    });
  };

  if (!restaurantPageData) {
    return <Loader />;
  }

  const { uuid, title, heroImageUrls, categories, etaRange, location } =
    restaurantPageData;

  const heroImageUrl = heroImageUrls[heroImageUrls.length - 1].url;

  const heroImageUrlSrcSet = heroImageUrls.reduce(
    (acc: string, item: { url: string; width: number }, index: number) => {
      let str = `${item.url} ${item.width}w`;

      index !== heroImageUrls.length - 1 && (str = `${str},`);

      return `${acc}${str}`;
    },
    ""
  );

  return (
    <>
      <div className="hero">
        <img
          className="hero__img"
          srcSet={heroImageUrlSrcSet}
          sizes="
            (max-width: 320px) 240px,
            (max-width: 768px) 550px,
            (max-width: 1280px) 750px,
            (max-width: 1980px) 1080px,
            750px
          "
          src={heroImageUrl}
          alt={title}
        />

        <div className="wrapper-title">
          <div className="content">
            <div className="title">
              <h1 id={uuid} className="title__name">
                {title}
              </h1>
              <div className="title__categories">{categories.join(" • ")}</div>
              <div className="title__eta">{etaRange || DEFAULT_ETA_RANGE}</div>
              <div className="title__address">
                {`${location.address} • `}
                <span className="title__more">More info</span>
              </div>
            </div>
          </div>
          <div className="left-margin-block" />
        </div>
      </div>

      <div className="title-mobile">
        <h1 id={uuid} className="title-mobile__name">
          {title}
        </h1>
        <div className="title-mobile__categories">{categories.join(" • ")}</div>
        <div className="title-mobile__eta">{etaRange || DEFAULT_ETA_RANGE}</div>
      </div>

      <div className="content">
        <nav className="restoraunt-menu">
          {restaurantSections.map((item: any) => {
            return (
              <span
                id={`m_${item.uuid}`}
                className="restoraunt-menu__item"
                key={item.uuid}
                onClick={event =>
                  handleClickItemMenu((event.target as HTMLSpanElement).id)
                }
                role="presentation"
              >
                {item.title}
              </span>
            );
          })}
        </nav>

        {restaurantSections.map((item: any) => (
          <Section category={item} key={item.uuid} />
        ))}
      </div>
    </>
  );
};

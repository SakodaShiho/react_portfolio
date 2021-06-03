import React from "react";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import StackGrid from "react-stack-grid";
import Design1 from "../img/design/design1.png";
import Design2 from "../img/design/design2.png";
import Design3 from "../img/design/design3.png";

export const MyGallery = () => {
  return (
    <em className="design">
      <Gallery>
        <StackGrid columnWidth={250} monitorImagesLoaded={true}>
          <Item
            original={Design1}
            thumbnail={Design1}
            width="563"
            height="788"
            title="バナー 2021年2月制作(Illustrator)"
            key="key1"
          >
            {({ ref, open }) => <img ref={ref} onClick={open} src={Design1} />}
          </Item>
          <Item
            original={Design2}
            thumbnail={Design2}
            width="1000"
            height="454"
            title="ECサイトバナー① 2021年1月制作(Photoshop)"
            key="key2"
          >
            {({ ref, open }) => <img ref={ref} onClick={open} src={Design2} />}
          </Item>
          <Item
            original={Design3}
            thumbnail={Design3}
            width="1000"
            height="454"
            title="ECサイトバナー② 2020年5月制作(XD)"
            key="key3"
          >
            {({ ref, open }) => <img ref={ref} onClick={open} src={Design3} />}
          </Item>
        </StackGrid>
      </Gallery>
    </em>
  );
};

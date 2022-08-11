import { FC } from "react";
import { generateImageURL } from "../../helpers/utils";
import { useAppSelector } from "../../hooks/redux";

export const MainBody: FC = () => {
  const { imageData } = useAppSelector((store) => store.appReducer);

  const imageCollection = imageData.map((image) => (
    <img src={generateImageURL(image.image)} />
  ));

  return <div className="timebody"> {imageCollection}</div>;
};

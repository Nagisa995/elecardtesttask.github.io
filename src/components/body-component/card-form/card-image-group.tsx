import { FC } from "react";
import { compareIndex } from "../../../helpers/utils";
import { IImageInfo } from "../../../store/reducers/appState";
import { CardElement } from "../../ui-components/cardElement";

interface ICardImageGroup {
  imageData: IImageInfo[];
  currentPage: number;
}

export const CardImageGroup: FC<ICardImageGroup> = ({
  imageData,
  currentPage,
}) => {
  const imageOnPage = imageData.filter((image, index) =>
    compareIndex(currentPage, index)
  );

  const cardOnUI = imageOnPage.map((image) => (
    <CardElement imageInformation={image} key={image.image} />
  ));

  return <div className="card-image-group">{cardOnUI}</div>;
};

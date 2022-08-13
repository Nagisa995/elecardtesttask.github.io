import { FC, useState } from "react";
import { dateFormat, generateImageURL } from "../../helpers/utils";
import { IImageInfo } from "../../store/reducers/appState";
import { ModalImage } from "./modal-window-image";

interface ICardImage {
  imageInformation: IImageInfo;
}

export const CardElement: FC<ICardImage> = ({ imageInformation }) => {
  const [isModalWindowActive, setIsModalWindowActive] = useState(false);

  return (
    <>
      {isModalWindowActive && (
        <ModalImage
          imgURL={imageInformation.image}
          setWindowClose={setIsModalWindowActive}
        />
      )}
      <div className="image_card">
        <div className="image_container">
          <img
            src={generateImageURL(imageInformation.image)}
            alt={imageInformation.image}
            id={imageInformation.image}
            onClick={() => setIsModalWindowActive(true)}
          />
        </div>
        <div className="image_information">
          Loaded:{dateFormat(imageInformation.timestamp)}
        </div>
      </div>
    </>
  );
};

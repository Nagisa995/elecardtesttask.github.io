import { FC, useState } from "react";
import {
  dateFormat,
  generateImageURL,
  getImageName,
} from "../../helpers/utils";
import { IImageInfo } from "../../store/reducers/appState";
import { DeleteButton } from "./deleteButton";
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
          <DeleteButton imageID={imageInformation.image} />
        </div>
        <div className="image_information">
          <p>Name: {getImageName(imageInformation.image)}</p>
          <p>Category: {imageInformation.category}</p>
          <p>File size: {imageInformation.filesize} bytes</p>
          <p>Loaded: {dateFormat(imageInformation.timestamp)}</p>
        </div>
      </div>
    </>
  );
};

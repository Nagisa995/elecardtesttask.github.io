import { FC } from "react";
import { generateImageURL } from "../../helpers/utils";
import { useAppSelector } from "../../hooks/redux";
import { Loader } from "../ui-components/loader";

export const MainBody: FC = () => {
  const { imageData, isImageDataLoading } = useAppSelector(
    (store) => store.appReducer
  );

  const imageCollection = imageData.map((image) => (
    <img src={generateImageURL(image.image)} />
  ));

  return (
    <>
      {(isImageDataLoading && <Loader />) || (
        <div className="timebody"> {imageCollection}</div>
      )}
    </>
  );
};

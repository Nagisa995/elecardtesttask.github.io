import { IImageInfo } from "../../../store/reducers/appState";

interface ISortedData {
  [key: string]: IImageInfo[];
}

export const sortedData = (imageData): ISortedData => {
  return imageData.reduce(function (sortObject, imageInfo) {
    const currentCategory = imageInfo.category;

    if (currentCategory in sortObject) {
      sortObject[currentCategory].push(imageInfo);
    } else {
      sortObject[currentCategory] = [imageInfo];
    }

    return sortObject;
  }, {});
};

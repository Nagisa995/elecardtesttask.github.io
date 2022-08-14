import { filters } from "../../../helpers/const";
import { getImageName } from "../../../helpers/utils";
import { IImageInfo } from "../../../store/reducers/appState";

export const filteredList = (
  imageData: IImageInfo[],
  filter: filters
): IImageInfo[] => {
  const isDefaultFilter = filter === filters.DEFAULT;
  if (isDefaultFilter) {
    return imageData;
  }
  const filteredImageList = imageData.slice();
  filteredImageList.sort((first, second) => {
    switch (filter) {
      case filters.CATEGORY:
        return comparedData(first.category, second.category);
      case filters.DATE:
        return comparedData(first.timestamp, second.timestamp);
      case filters.FILE_SIZE:
        return comparedData(first.filesize, second.filesize);
      default:
        return comparedData(
          getImageName(first.image),
          getImageName(second.image)
        );
    }
  });
  return filteredImageList;
};

function comparedData(first, second) {
  if (first > second) {
    return 1;
  } else {
    return -1;
  }
}

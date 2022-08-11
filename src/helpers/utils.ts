import { imageBaseURL } from "./const";

export const generateImageURL = (urlEnd: string): string => {
  return imageBaseURL + urlEnd;
};

import format from "date-fns/format";
import Cookies from "js-cookie";
import { exclusionList, imageBaseURL, imagePerPage } from "./const";

export const generateImageURL = (urlEnd: string): string => {
  return imageBaseURL + urlEnd;
};

export const dateFormat = (date: number): string => {
  return format(new Date(date), "dd.MM.yyyy");
};

export const getImageName = (url: string): string => {
  const urlPart = url.split("/");
  const urlEndPart = urlPart[1].split(".");
  const draftName = urlEndPart[0].split("-");
  draftName.pop();
  return draftName.join("-");
};

export const compareIndex = (page: number, index: number): boolean => {
  const startLimit = page * imagePerPage;
  const endLimit = (page + 1) * imagePerPage;
  const isIndexInLimit = index >= startLimit && index < endLimit;
  return isIndexInLimit;
};

export const getCookieData = () => {
  try {
    return JSON.parse(Cookies.get(exclusionList));
  } catch (error) {
    return [];
  }
};

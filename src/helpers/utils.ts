import format from "date-fns/format";
import { imageBaseURL } from "./const";

export const generateImageURL = (urlEnd: string): string => {
  return imageBaseURL + urlEnd;
};

export const dateFormat = (date:number):string =>{
  return format(new Date(date), 'MM.dd.yyyy')
}
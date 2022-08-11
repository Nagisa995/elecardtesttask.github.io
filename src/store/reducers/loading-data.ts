import axios from "axios";
import { AppDispatch } from "../store";
import { IImageInfo } from "./appState";
import { urlData } from "./const";
import { appSlice } from "./appState";

export const requestImageData = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(appSlice.actions.imageDataFetching());
    const responseData = await axios.get<IImageInfo[]>(urlData);
    dispatch(appSlice.actions.imageDataFetchingSuccess(responseData.data));
  } catch (error: any) {
    dispatch(appSlice.actions.imageDataFetchingError(error.message));
  }
};

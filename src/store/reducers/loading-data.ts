import axios from "axios";
import { urlData } from "../../helpers/const";
import { AppDispatch } from "../store";
import { IImageInfo } from "./appState";
import { appStateSlice } from "./appState";

export const requestImageData = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(appStateSlice.actions.imageDataFetching());
    const responseData = await axios.get<IImageInfo[]>(urlData);
    dispatch(appStateSlice.actions.imageDataFetchingSuccess(responseData.data));
  } catch (error: any) {
    dispatch(appStateSlice.actions.imageDataFetchingError(error.message));
  }
};

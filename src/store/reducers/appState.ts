import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { exclusionList } from "../../helpers/const";
import Cookies from "js-cookie";

export interface IImageInfo {
  image: string;
  filesize: number;
  timestamp: number;
  category: string;
}

interface IAppState {
  imageData: IImageInfo[];
  isImageDataLoading: boolean;
  imageDataError: string;

  exclusionImageList: string[];
}

const defaultState: IAppState = {
  imageData: [],
  isImageDataLoading: false,
  imageDataError: "",

  exclusionImageList: Cookies.get(exclusionList) ?? [],
};

export const appStateSlice = createSlice({
  name: "appStoreData",
  initialState: defaultState,
  reducers: {
    imageDataFetching(state) {
      state.isImageDataLoading = true;
    },
    imageDataFetchingSuccess(state, action: PayloadAction<IImageInfo[]>) {
      state.isImageDataLoading = false;
      state.imageData = action.payload;
    },
    imageDataFetchingError(state, action: PayloadAction<string>) {
      state.isImageDataLoading = false;
      state.imageDataError = action.payload;
    },
    addInExclusionList(state, action: PayloadAction<string>) {
      state.exclusionImageList.push(action.payload);
    },
    resetExclusionList(state) {
      state.exclusionImageList = [];
    },
  },
});

export default appStateSlice.reducer;

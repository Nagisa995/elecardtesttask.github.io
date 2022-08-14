import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookieData } from "../../helpers/utils";
import Cookies from "js-cookie";
import { exclusionList } from "../../helpers/const";

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
  exclusionImageList: getCookieData(),
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
      state.exclusionImageList = [...state.exclusionImageList, action.payload];
      Cookies.set(exclusionList, JSON.stringify(state.exclusionImageList));
    },
    resetExclusionList(state) {
      state.exclusionImageList = [];
      Cookies.remove(exclusionList);
    },
  },
});

export default appStateSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
}

const defaultState: IAppState = {
  imageData: [],
  isImageDataLoading: false,
  imageDataError: "",
};

export const appSlice = createSlice({
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
  },
});

export default appSlice.reducer;

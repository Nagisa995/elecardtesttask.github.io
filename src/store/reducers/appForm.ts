import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { contentForm } from "../../helpers/const";

interface IFormValue {
  activeForm: contentForm;
}

const defaultValue: IFormValue = {
  activeForm: contentForm.CARD,
};

export const appFormSlice = createSlice({
  name: "appFormData",
  initialState: defaultValue,
  reducers: {
    switchContentForm(state, action: PayloadAction<contentForm>) {
      state.activeForm = action.payload;
    },
  },
});

export default appFormSlice.reducer;

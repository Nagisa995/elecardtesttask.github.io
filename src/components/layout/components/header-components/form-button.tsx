import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FC } from "react";
import { contentForm } from "../../../../helpers/const";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { appFormSlice } from "../../../../store/reducers/appForm";

export const FormButtonGroup: FC = () => {
  const { activeForm } = useAppSelector((state) => state.appFormReducer);
  const dispatch = useAppDispatch();
  return (
    <FormControl>
      <RadioGroup
        name="content-form"
        value={activeForm}
        row
        onChange={(e) =>
          dispatch(
            appFormSlice.actions.switchContentForm(
              e.target.value as contentForm
            )
          )
        }
      >
        <FormControlLabel
          control={<Radio color="success" />}
          label={contentForm.TREE}
          value={contentForm.TREE}
        />
        <FormControlLabel
          control={<Radio color="secondary" />}
          label={contentForm.CARD}
          labelPlacement="start"
          value={contentForm.CARD}
        />
      </RadioGroup>
    </FormControl>
  );
};

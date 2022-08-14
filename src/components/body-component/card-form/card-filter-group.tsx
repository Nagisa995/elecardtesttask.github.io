import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { FC } from "react";
import { filters } from "../../../helpers/const";

interface ICardFilterButtonGroup {
  currentFilter: filters;
  changeFilter: React.Dispatch<React.SetStateAction<filters>>;
  resetPage: React.Dispatch<React.SetStateAction<number>>;
}

export const CardFilterButtonGroup: FC<ICardFilterButtonGroup> = ({
  currentFilter,
  changeFilter,
  resetPage,
}) => {
  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeFilter(e.target.value as filters);
    resetPage(0);
  };

  return (
    <FormControl>
      <RadioGroup
        className="card_filter_group"
        name="content-form"
        value={currentFilter}
        onChange={changeHandle}
        row
      >
        <FormControlLabel
          control={<Radio />}
          label={filters.DEFAULT}
          value={filters.DEFAULT}
        />
        <FormControlLabel
          control={<Radio />}
          label={filters.CATEGORY}
          value={filters.CATEGORY}
        />
        <FormControlLabel
          control={<Radio />}
          label={filters.DATE}
          value={filters.DATE}
        />
        <FormControlLabel
          control={<Radio />}
          label={filters.NAME}
          value={filters.NAME}
        />
        <FormControlLabel
          control={<Radio />}
          label={filters.FILE_SIZE}
          value={filters.FILE_SIZE}
        />
      </RadioGroup>
    </FormControl>
  );
};

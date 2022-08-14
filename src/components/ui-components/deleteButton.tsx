import { Delete, DeleteOutline, DeleteTwoTone } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { FC } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { appStateSlice } from "../../store/reducers/appState";

interface IDeleteButton {
  imageID: string;
}

export const DeleteButton: FC<IDeleteButton> = ({ imageID }) => {
  const dispatch = useAppDispatch();
  return (
    <IconButton
      className="delete-button"
      onClick={() =>
        dispatch(appStateSlice.actions.addInExclusionList(imageID))
      }
    >
      <Delete color="error" fontSize="large" />
    </IconButton>
  );
};

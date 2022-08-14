import { Button } from "@mui/material";
import { FC } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { appStateSlice } from "../../../store/reducers/appState";

export const Footer: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <footer className="layout">
      <Button
        variant="contained"
        color="info"
        onClick={() => dispatch(appStateSlice.actions.resetExclusionList())}
      >
        Reset changes
      </Button>
    </footer>
  );
};

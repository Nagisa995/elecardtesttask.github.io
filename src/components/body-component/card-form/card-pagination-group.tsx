import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { FC } from "react";

interface IPagenationGroup {
  currentPage: number;
  totalPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PaginationGroup: FC<IPagenationGroup> = ({
  currentPage,
  totalPage,
  setPage,
}) => {
  const currentPageOnUI = currentPage + 1;
  const isFirstPage = currentPageOnUI === 1;
  const isLastPage = currentPageOnUI === totalPage;
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ display: "flex", alignItems: "center" }}
    >
      <IconButton
        color="error"
        disabled={isFirstPage}
        onClick={() => setPage(currentPage - 1)}
      >
        <NavigateBefore />
      </IconButton>
      <Typography>
        Page {currentPageOnUI} of {totalPage}{" "}
      </Typography>
      <IconButton
        color="error"
        disabled={isLastPage}
        onClick={() => setPage(currentPage + 1)}
      >
        <NavigateNext />
      </IconButton>
    </Stack>
  );
};

import { FC, useEffect, useState } from "react";
import { filters, imagePerPage } from "../../../helpers/const";
import { IImageInfo } from "../../../store/reducers/appState";
import { CardFilterButtonGroup } from "./card-filter-group";
import { CardImageGroup } from "./card-image-group";
import { PaginationGroup } from "./card-pagination-group";
import { filteredList } from "./utils";

interface ICardForm {
  imageData: IImageInfo[];
}

export const CardForm: FC<ICardForm> = ({ imageData }) => {
  const [currenFilter, setCurrentFilter] = useState(filters.DEFAULT);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredImageList = filteredList(imageData, currenFilter);
  const totalPage = Math.ceil(filteredImageList.length / imagePerPage);

  if (currentPage === totalPage) {
    setCurrentPage(currentPage - 1);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <span>
        <strong>Filtered by:</strong>
      </span>
      <CardFilterButtonGroup
        currentFilter={currenFilter}
        changeFilter={setCurrentFilter}
        resetPage={setCurrentPage}
      />
      <CardImageGroup imageData={filteredImageList} currentPage={currentPage} />
      <PaginationGroup
        currentPage={currentPage}
        totalPage={totalPage}
        setPage={setCurrentPage}
      />
    </>
  );
};

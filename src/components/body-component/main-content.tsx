import { FC } from "react";
import { contentForm } from "../../helpers/const";
import { useAppSelector } from "../../hooks/redux";
import { CardForm } from "./card-form/card-form";
import { TreeForm } from "./tree-form/tree-form";

export const MainContent: FC = () => {
  const { activeForm } = useAppSelector((state) => state.appFormReducer);
  const { imageData, exclusionImageList } = useAppSelector(
    (state) => state.appReducer
  );
  const isExclusionListEmpty = exclusionImageList.length === 0;
  const isActiveFormTree = activeForm === contentForm.TREE;

  const currenImageList = isExclusionListEmpty
    ? imageData
    : imageData.filter((image) => !exclusionImageList.includes(image.image));

  return (
    <>
      {(isActiveFormTree && <TreeForm imageData={currenImageList} />) || (
        <CardForm imageData={currenImageList} />
      )}
    </>
  );
};

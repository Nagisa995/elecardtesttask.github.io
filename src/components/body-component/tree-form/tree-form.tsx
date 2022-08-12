import { FC } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { TreeBranch } from "./tree-branch";
import { AccordionElement } from "../../ui-components/accordion";
import { sortedData } from "./utils";

export const TreeForm: FC = () => {
  const { imageData } = useAppSelector((store) => store.appReducer);

  if (imageData.length === 0) {
    return <div></div>;
  }

  const sortByCategory = sortedData(imageData);

  const treeBranchs = Object.entries(sortByCategory).map((branch) => (
    <TreeBranch branchName={branch[0]} childs={branch[1]} key={branch[0]} />
  ));

  return (
    <div>
      <AccordionElement name="Tree Root" childsData={treeBranchs} />
    </div>
  );
};

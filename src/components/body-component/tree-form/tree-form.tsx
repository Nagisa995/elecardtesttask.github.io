import { FC } from "react";
import { TreeBranch } from "./tree-branch";
import { AccordionElement } from "../../ui-components/accordion";
import { sortedData } from "./utils";
import { IImageInfo } from "../../../store/reducers/appState";

interface ITreeForm {
  imageData: IImageInfo[];
}

export const TreeForm: FC<ITreeForm> = ({ imageData }) => {
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

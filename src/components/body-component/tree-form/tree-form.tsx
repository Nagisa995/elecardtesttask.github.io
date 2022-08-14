import { FC } from "react";
import { TreeBranch } from "./tree-branch";
import { AccordionElement } from "../../ui-components/accordion";
import { sortedData } from "./utils";
import { IImageInfo } from "../../../store/reducers/appState";

interface ITreeForm {
  imageData: IImageInfo[];
}

export const TreeForm: FC<ITreeForm> = ({ imageData }) => {
  if (imageData.length === 0) {
    return (
      <span>
        <strong>Что-то пошло не по плану...</strong>
      </span>
    );
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

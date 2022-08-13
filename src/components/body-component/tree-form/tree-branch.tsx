import { FC } from "react";
import { IImageInfo } from "../../../store/reducers/appState";
import { AccordionElement } from "../../ui-components/accordion";
import { CardElement } from "../../ui-components/cardElement";

interface ITreeBranch {
  branchName: string;
  childs: Array<IImageInfo>;
}

export const TreeBranch: FC<ITreeBranch> = ({ branchName, childs }) => {
  const branchOnUI = childs.map((image) => (
    <CardElement imageInformation={image} key={image.image} />
  ));

  return <AccordionElement name={branchName} childsData={branchOnUI} />;
};

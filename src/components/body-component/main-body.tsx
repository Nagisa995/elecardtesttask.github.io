import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { Loader } from "../ui-components/loader";
import { TreeForm } from "./tree-form/tree-form";

export const MainBody: FC = () => {
  const { isImageDataLoading } = useAppSelector((store) => store.appReducer);

  return (
    <div className="main_content">
      {(isImageDataLoading && <Loader />) || <TreeForm />}
    </div>
  );
};

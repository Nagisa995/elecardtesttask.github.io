import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { Loader } from "../ui-components/loader";
import { MainContent } from "./main-content";

export const MainBody: FC = () => {
  const { isImageDataLoading } = useAppSelector((store) => store.appReducer);

  return (
    <div className="main_content">
      {(isImageDataLoading && <Loader />) || <MainContent />}
    </div>
  );
};

import { FC } from "react";
import { loaderURL } from "../../helpers/const";

export const Loader: FC = () => {
  return (
    <div className="loader_screen">
      <img src={loaderURL} className="loader_image" alt="Loading..." />
    </div>
  );
};

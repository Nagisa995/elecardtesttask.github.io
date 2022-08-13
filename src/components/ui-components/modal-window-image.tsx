import { Button } from "@mui/material";
import { FC } from "react";
import { generateImageURL } from "../../helpers/utils";

interface IModal {
  imgURL: string;
  setWindowClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalImage: FC<IModal> = ({ imgURL, setWindowClose }) => {
  return (
    <div className="modal_screen" onClick={() => setWindowClose(false)}>
      <div className="image_container">
        <img
          src={generateImageURL(imgURL)}
          alt={imgURL}
          onClick={(e) => e.stopPropagation()}
        />
        <Button variant="contained" color="success" onClick={() => setWindowClose(false)}>
          Close Image
        </Button>
      </div>
    </div>
  );
};

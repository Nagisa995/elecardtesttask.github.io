import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { dateFormat, generateImageURL } from "../../helpers/utils";
import { IImageInfo } from "../../store/reducers/appState";

interface ICardImage {
  imageInformation: IImageInfo;
}

export const CardElement: FC<ICardImage> = ({ imageInformation }) => {
  return (
    <Box width="250px">
      <Card>
        <CardMedia
          component="img"
          height="250px"
          image={generateImageURL(imageInformation.image)}
        />
        <CardContent>
          <Typography>Loaded:{dateFormat(imageInformation.timestamp)}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

import { FC } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface IAccordion {
  name: string;
  childsData: any;
}

export const AccordionElement: FC<IAccordion> = ({ name, childsData }) => {
  return (
    <Accordion>
      <AccordionSummary
        id={name}
        aria-controls={name}
        expandIcon={<ExpandMore />}
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box className="accordion_content">{childsData} </Box>
      </AccordionDetails>
    </Accordion>
  );
};

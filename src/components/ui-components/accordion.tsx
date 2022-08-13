import { FC, useState } from "react";

interface IAccordion {
  name: string;
  childsData: any;
}

export const AccordionElement: FC<IAccordion> = ({
  name,
  childsData,
}) => {
  const [isOpenAccordion, setIsOpenAccordion] = useState(false);

  return (
    <div className="accordion_body">
      <div
        className="accordion_title"
        onClick={() => setIsOpenAccordion(!isOpenAccordion)}
      >
        {name}
      </div>
      {isOpenAccordion && <div className="accordion_content">{childsData}</div>}
    </div>
  );
};

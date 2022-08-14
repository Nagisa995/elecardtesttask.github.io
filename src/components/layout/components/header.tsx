import { FC } from "react";
import { FormButtonGroup } from "./header-components/form-button";

export const Header: FC = () => {
  return (
    <header className="layout">
        <span><strong>Choose content Form</strong></span>
      <FormButtonGroup />
    </header>
  );
};

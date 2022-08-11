import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <>
      <header className="layout"> Заголовок </header>
      <Outlet />
      <footer className="layout"> Подвал </footer>
    </>
  );
};

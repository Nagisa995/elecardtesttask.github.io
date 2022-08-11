import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { requestImageData } from "../store/reducers/loading-data";
import { MainBody } from "./body-component/main-body";
import { Layout } from "./layout/layout";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestImageData());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainBody />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

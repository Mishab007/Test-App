/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

function CommonRouter() {
  return (
    <>
      <Routes>
      <Route path='/'  Component={Home} />
      </Routes>
    </>
  );
}

export default CommonRouter;
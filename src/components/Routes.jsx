import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import SingleDog from "./SingleDog";

const RRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/:id" element={<SingleDog />}></Route>
      </Routes>
    </div>
  );
};

export default RRoutes;
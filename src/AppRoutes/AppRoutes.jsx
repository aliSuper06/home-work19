import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Login/Login";
import TodoList from "../components/TodoList";
import { HomePage } from "../HomePage/HomePage";
import { Calculator } from "../calculate/Calculator";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
};

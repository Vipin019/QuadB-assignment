import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Allshow from "./pages/allshow/Allshow";
import Singleshow from "./pages/singleshow/Singleshow";
import Bookshow from "./pages/bookshow/Bookshow";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Allshow />} />
        <Route path="/singleShow/:id" element={<Singleshow />} />
        <Route path="/bookShow/:id" element={<Bookshow />} />
      </Routes>
    </>
  );
};

export default App;

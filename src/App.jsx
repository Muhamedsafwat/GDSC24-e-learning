import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//import pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import IndvlSignup from "./components/IndvlSignup";
import TiickerPage from "./pages/TiickerPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup/individual-signup" element={<SignUp />} />
          <Route path="/signup/enterprise-signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/individual-signup" element={<IndvlSignup />} />
          <Route path="/dashboard" element={<TiickerPage />} />
        </>
      </Routes>
    </Router>
  );
};

export default App;

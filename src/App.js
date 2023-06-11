import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { UserContext, UserProvider } from "./context/UserContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Test from "./Test";
import TiickerPage from "./pages/TiickerPage";
import { useEffect } from "react";

const App = () => {
  const [storedUser, setStoredUser] = useState(null);

  return (
    <UserContext.Provider value={{ storedUser, setStoredUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup/individual-signup" element={<SignUp />} />
          <Route path="/signup/enterprise-signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/dashboard" element={<TiickerPage />} />
          {/* <Route path="/dashboard/project/:id" element={<TiickerPage />} /> */}
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;

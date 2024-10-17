import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignupPage from "./Pages/Auth/SignupPage.jsx";
import LoginPage from "/Pages/Auth/LoginPage.jsx";
import HomePage from "/Pages/Auth/HomePage.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;

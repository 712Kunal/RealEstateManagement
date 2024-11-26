import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignupPage from "./Pages/Auth/SignupPage.jsx";
import LoginPage from "./Pages/Auth/LoginPage.jsx";
import HomePage from "./Pages/App/HomePage.jsx";
import NotFoundPage from "./Pages/Auth/NotFoundPage.jsx";
import LandingPage from "./Pages/Auth/LandingPage.jsx";
import AppWrapper from "./Components/Wrappers/AppWrapper.jsx";
import ListPage from "./Pages/App/ListPage.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/app" element={<AppWrapper />}>
            <Route path="homepage" element={<HomePage />} />
            <Route path="list" element={<ListPage />} />  
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

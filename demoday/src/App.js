import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import theme
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

// Importing components
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import SignUpPage from "./pages/Signup";
import CompetitorSignup from "./pages/signup/competitorSignup";
import JudgeSignup from "./pages/signup/judgeSignup";
import CompetitorLogin from "./pages/login/competitorLogin";
import JudgeLogin from "./pages/login/judgeLogin";
import Judge from "./pages/judgeRedir";
import ScorePage from "./pages/scorePage";
import Competitor from "./pages/CompetitorSubmission";

// Context
import { UserContextProvider } from "./context/user-context";

// MUI date picker imports for Luxon
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { LocalizationProvider } from "@mui/x-date-pickers";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {" "}
        {/* Wrap your components with ThemeProvider */}
        <UserContextProvider>
          <LocalizationProvider dateAdapter={AdapterLuxon}>
            <Header /> {/* Header added at the top */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pages/Signup" element={<SignUpPage />} />
              <Route
                path="/pages/signup/competitorSignup"
                element={<CompetitorSignup />}
              />
              <Route
                path="/pages/signup/judgeSignup"
                element={<JudgeSignup />}
              />
              <Route
                path="/pages/login/competitorLogin"
                element={<CompetitorLogin />}
              />
              <Route path="/pages/login/judgeLogin" element={<JudgeLogin />} />
              <Route path="/scorePage" element={<ScorePage />} />
              <Route path="/pages/judgeRedir" element={<Judge />} />
              <Route path="pages/CompetitorSubmission" element={<Competitor />} />
            </Routes>
            <Footer /> {/* Footer added at the bottom */}
          </LocalizationProvider>
        </UserContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

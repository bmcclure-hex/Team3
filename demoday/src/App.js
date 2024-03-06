import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import SignUpPage from "./pages/Signup";
import CompetitorSignup from "./pages/signup/competitorSignup";
import JudgeSignup from "./pages/signup/judgeSignup";

//Import Pages (for Testing purpose)
import Judge from "./pages/judgeRedir";
import ScorePage from "./pages/scorePage";

// Context
import { UserContextProvider } from "./context/user-context";

// MUI date picker imports for Luxon
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { LocalizationProvider } from "@mui/x-date-pickers";

// import{ BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';

export default function App() {
  // State management for accessCode can be defined here if needed
  // const [accessCode, setAccessCode] = useState('');

  return (
    <BrowserRouter>
      <UserContextProvider>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
          <Header /> {/* Header added at the top */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/Signup" element={<SignUpPage/>} />
            <Route path="/pages/signup/competitorSignup" element={<CompetitorSignup />} />
            <Route path="/pages/signup/judgeSignup" element={<JudgeSignup />} />

            {/*for testing purposing*/}
            <Route path="/jview" element={<Judge />} />
            <Route path="/score" element={<ScorePage />} />
            {/* Uncomment and modify the following routes as per your application's requirements */}
            {/* <Route path="/AgreePage" element={<AgreePage accessCode={accessCode} verifyAccessCode={verifyAccessCode} />} /> */}
            {/* <Route path="/AudioPlayer" element={<AuthWrapper component={<AudioPlayer />} />} /> */}
          </Routes>
          <Footer /> {/* Footer added at the bottom */}
        </LocalizationProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

//     <Router>
//       <div>
//         Team 3
//         <Routes>
//           <Route path="/"/>
//           <Route path="/jview" element={<Judge/>}/>
//           <Route path="/score" element={<ScorePage/>}/>

//         </Routes>
//       </div>
//     </Router>
//   )
// }

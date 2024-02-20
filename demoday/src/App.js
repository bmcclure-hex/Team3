import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing components
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';

// Context
import { UserContextProvider } from './context/user-context';

// MUI date picker imports for Luxon
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers';

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

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#0034A9', // Your dark blue
      contrastText: '#FFFFFF', // For text that appears on primary color background
    },
    secondary: {
      main: '#0071CE', // Your light blue
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#CC0000', // Your red
    },
    // You can continue defining other colors like warning, info, etc.
    background: {
      default: '#FFFFFF', // Your white for backgrounds
    },
    text: {
      primary: '#0034A9', // Dark blue text
      secondary: '#0071CE', // Light blue text
      disabled: 'rgba(0, 0, 0, 0.38)', // Default disabled text
      hint: 'rgba(0, 0, 0, 0.38)', // Default hint text
    },
  },
  // other theme options
});


export default theme;

import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    grey,
    background: {
      default: '#242424',
      paper: '#333333',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
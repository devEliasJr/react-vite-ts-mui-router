import { createTheme } from '@mui/material/styles';
import { red, grey, blue, } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    grey,
    secondary: {
      main: red[800],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
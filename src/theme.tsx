import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: {
        main: string,
      },
      secondary: {
        main: string,
      }
    }
  }
}

export default createTheme({
  palette: {
    primary: {
      main: "#5f6caf"
    },
    secondary: {
      main: "#5bbfba"
    }
  },
});

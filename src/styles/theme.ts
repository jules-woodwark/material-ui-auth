import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    s: true;
    sy: true;
    sx: true;
    szm: true;
    sm: true;
    m: true;
    md: true;
    lg: true;
    xl: true;
  }
}

const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      s: 300,
      sy: 350,
      sx: 400,
      szm: 450,
      sm: 600,
      m: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        #root{
          height: 100vh;
        }
        body {
          background-color: #E1E2E1;
        }
      `,
    },
  },
};

let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);

export default theme;

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#2aa7df'
      },
      secondary: {
        main: '#ffffff'
      },
      tertiary: {
        main: '#4c4c4c'
      }
    },
    typography: {
      fontSize: 16,
      h1: {
        fontWeight: 600,
        fontSize: '3rem',
        [`@media screen and (max-width: 768px)`]: {
          fontSize: "2.125rem"
        }
      },
      h2: {
        fontWeight: 600,
        fontSize: '2.125rem',
        [`@media screen and (max-width: 768px)`]: {
          fontSize: "1.5rem"
        }
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.5rem',
        [`@media screen and (max-width: 768px)`]: {
          fontSize: "1.25rem"
        }
      },
      p: {
        fontWeight: 400,
        fontSize: '0.875rem'
      }
    }
})

export default theme;
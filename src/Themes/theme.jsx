import { experimental_extendTheme as extendTheme} from '@mui/material/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#2aa7df',
        },
        secondary: {
          main: '#ffffff'
        },
        tertiary: {
          main: '#4c4c4c'
        },
        error: {
          main: '#D32929'
        }
      },
    }
  },
  typography: {
    h2: {
      fontWeight: 700,
      fontSize: '34px',
      lineHeight: '40px',
      paddingBottom: '24px',
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
      fontSize: '14px',
      lineHeight: '20px',
      marginBottom: '24px'
    }
  }
})

export default theme;
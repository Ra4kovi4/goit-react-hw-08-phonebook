import { grey, deepPurple } from '@mui/material/colors';

export const getDesignTokens = mode => ({
  palette: {
    mode,
    primary: {
      ...deepPurple,
      ...(mode === 'dark' && {
        main: deepPurple[800],
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: grey[600],
        paper: grey[900],
      },
    }),
    secondary: {
      ...deepPurple,
      ...(mode === 'dark' && {
        main: deepPurple[50],
      }),
    },
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[400],
          }
        : {
            primary: deepPurple[50],
            secondary: grey[500],
          }),
    },
  },
});

import { Typography, Box, Container, Link } from '@mui/material';

export const Footer = props => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
        backgroundColor: 'transparent',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Typography component="p" variant="body2" color="text.secondary">
          {'Copyright © created by '}
          <Link color="inherit" href="https://github.com/Ra4kovi4">
            Kristina Rachkovych
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

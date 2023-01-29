import { Typography, Container, CssBaseline } from '@mui/material';
import AddchartIcon from '@mui/icons-material/Addchart';
import LoginIcon from '@mui/icons-material/Login';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { NavLinkSX } from './Nav.styled';

export const AuthNav = () => {
  return (
    <>
      <CssBaseline />
      <Box display="flex" gap={0} flexShrink="0">
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexShrink: '1',
            p: '10px',
          }}
        >
          <NavLinkSX component={NavLink} variant="h6" to="/signup" mr="10px">
            <Typography
              component="span"
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '24px',
                height: '24px',
                mr: '5px',
              }}
            >
              <AddchartIcon />
            </Typography>
            <Typography
              variant="h6"
              type="p"
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              Register
            </Typography>
          </NavLinkSX>
        </Container>
        <Container
          sx={{
            display: 'flex',
            // justifyContent: 'flex-start',
            alignItems: 'center',
            p: '10px',
          }}
        >
          <NavLinkSX component={NavLink} variant="h6" to="/login" mr="10px">
            <Typography
              component="span"
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '24px',
                height: '24px',
                mr: '5px',
              }}
            >
              <LoginIcon />
            </Typography>
            <Typography
              variant="h6"
              type="p"
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              Login
            </Typography>
          </NavLinkSX>
        </Container>
      </Box>
    </>
  );
};

import { Helmet } from 'react-helmet-async';
import { useAuth } from 'hooks/useAuth';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Typography, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();
  const particlesInit = async main => {
    await loadFull(main);
  };

  const particlesLoaded = container => {};

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Box id="particles-js">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#42a5f5',
              },
              links: {
                color: '#42a5f5',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />

        <Box
          sx={{
            flexGrow: 3,
            m: '0 auto',
          }}
        >
          {!isLoggedIn ? (
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
              <Typography variant="h3" component="h1" gutterBottom>
                Welcome to phonebook
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                If you're not with us yet then click by all means{' '}
                <Typography component={Link} type="p" variant="h5" to="/signup">
                  signup
                </Typography>
              </Typography>

              <Typography variant="h5" component="h2" gutterBottom>
                and if you already have an account then{' '}
                <Typography component={Link} type="p" variant="h5" to="/login">
                  login
                </Typography>
              </Typography>
            </Container>
          ) : (
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
              <Typography variant="h3" component="h1" gutterBottom>
                Welcome, {user.name}!
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                {
                  'If you want to continue with your contacts click on the contacts button... '
                }
              </Typography>

              <Typography variant="h5" component="h2" gutterBottom>
                {
                  ' But if you want to think about life, dream or just relax, then stay on this page and play with particles'
                }
              </Typography>
            </Container>
          )}
        </Box>
      </Box>
    </>
  );
}

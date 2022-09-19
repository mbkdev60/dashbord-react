import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import logo from '../../../images/logo.png';
import Swal from 'sweetalert2';
import './style.css';
const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TsAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(13)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 86%;
      height: 86%;
      display: block;
    }
`
);

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function Connecter() {
    try {
      await fetch(`http://localhost:5003/getuser`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mail: email,
          mdp: password
        })
      })
        .then((response) => response.json())
        .then((result) => {
          localStorage.setItem('user_id', result.user_id);
          localStorage.setItem('user', email);
          localStorage.setItem('prenom', result.prenom);
          localStorage.setItem('nom', result.nom);
          localStorage.setItem('image', result.img);
          localStorage.setItem('password', password);
          navigate('dashboards/Clients');
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10, col: 12 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} xl={12} mx="auto">
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            Connectez Vous
          </TypographyH1>
          <div className="d-flex flex-column bd-highlight mb-3">
            <div className=" bd-highlight ">
              <TextField
                style={{ width: '560px' }}
                sx={{ mt: 6, mb: 1 }}
                id="outlined-email-input"
                label="Email"
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className=" bd-highlight ">
              <TextField
                style={{ width: '560px' }}
                sx={{ my: 1 }}
                id="outlined-password-input"
                label="Mot de passe"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className=" bd-highlight ">
              <Button
                sx={{ my: 1, mt: 6 }}
                size="large"
                variant="contained"
                onClick={Connecter}
              >
                Connecter
              </Button>
            </div>
          </div>
          <Box sx={{ pb: 2, pt: 2 }}>
            <b>
              Vous n'avez pas de Compte ?
              <span>
                <a
                  style={{
                    color: '#5569ff',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                  href="/register"
                  onClick={() => {
                    localStorage.setItem('register', 'true');
                  }}
                >
                  {' '}
                  Inscrivez-vous
                </a>
              </span>
            </b>
          </Box>

          <Grid container spacing={3} mt={5}>
            <Grid item md={12}>
              <TsAvatar>
                <img
                  src={logo}
                  alt="Typescript"
                  style={{ width: '85%', height: '86%' }}
                />
              </TsAvatar>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ pb: 2 }}>
        <b>
          © 2022-Application. All Rights Reserved | Design by Chayma BEN BRAHIM
          -
          <span>
            <a
              style={{ color: '#5569ff', textDecoration: 'none' }}
              href="https://aures.com/fr/about-group-pos-retail-equipment/"
            >
              AURES
            </a>
          </span>
        </b>
      </Box>
    </Container>
  );
}

export default Login;

import React from 'react';
import { Box, Button, Container, Grid, Typography, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import logo from '../../../images/BK STOCKS(2).png';
import Image from './Image';
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
const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Register() {
  const [imageclient, setImage] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nom, setNom] = React.useState('');
  const [prenom, setPrenom] = React.useState('');
  let imageProfile = 'http://192.168.2.150:5000/profile.png';

  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const navigate = useNavigate();
  function Addclient(image: string) {
    if (password && email && nom && prenom) {
      if (re.test(email)) {
        fetch(`${process.env.REACT_APP_API_URL}/adduser`, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            mail: email,
            mdp: password,
            nom: nom,
            prenom: prenom,
            img: image
          })
        })
          .then((response) => response.json())
          .then((data) => {
            Swal.fire({
              title: ' Un nouveau compte créé ',
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            localStorage.removeItem('register');
            navigate('/');
            window.location.reload();
          });
      } else {
        Swal.fire({
          title: ' Cet email est invalide !',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    } else {
      Swal.fire({
        title: 'Il est obligatoire de remplir tous les champs !',
        icon: 'warning',
        confirmButtonText: 'Ok'
      });
    }
  }
  async function RegisterClient() {
    try {
      if (imageclient) {
        var formData = new FormData();
        let img = imageclient;
        for (const i of Object.keys(img)) {
          formData.append('imgCollection', img[i as unknown as number]);
        }
        await fetch(`${process.env.REACT_APP_API_URL}/uploadImage`, {
          body: formData,
          method: 'POST'
        })
          .then((response) => response.json())
          .then((data: any) => {
            Addclient(data);
          });
      } else {
        Addclient(imageProfile);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <OverviewWrapper>
      <Container maxWidth="lg">
        <Card sx={{ p: 10, mb: 10, borderRadius: 12, m: 10 }}>
          <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Grid
              spacing={{ xs: 6, md: 10 }}
              justifyContent="center"
              alignItems="center"
              container
            >
              <Grid item md={10} lg={8} mx="auto">
                <TypographyH1 className="title-cl" sx={{ mb: 2 }} variant="h1">
                  Inscrivez-Vous
                </TypographyH1>
                <div className="d-flex flex-column bd-highlight mb-3 ">
                  <div className=" bd-highlight ">
                    <TextField
                      style={{ width: '560px' }}
                      sx={{ mt: 6, mb: 1 }}
                      id="outlined-nom-input"
                      label="Nom"
                      type="text"
                      value={nom}
                      onChange={(e: any) => {
                        setNom(e.target.value);
                      }}
                    />
                  </div>
                  <div className=" bd-highlight ">
                    <TextField
                      style={{ width: '560px' }}
                      sx={{ mb: 1 }}
                      id="outlined-prenom-input"
                      label="Prenom"
                      type="text"
                      value={prenom}
                      onChange={(e: any) => {
                        setPrenom(e.target.value);
                      }}
                    />
                  </div>
                  <div className=" bd-highlight ">
                    <TextField
                      style={{ width: '560px' }}
                      sx={{ mb: 1 }}
                      id="outlined-email-input"
                      label="Email"
                      type="text"
                      value={email}
                      onChange={(e: any) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className=" bd-highlight ">
                    <TextField
                      style={{ width: '560px' }}
                      sx={{ mb: 1 }}
                      id="outlined-password-input"
                      label="Mot de passe"
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e: any) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className=" bd-highlight mt-3">
                    <Image setImage={setImage} />
                  </div>
                  <div className=" bd-highlight ">
                    <Button
                      sx={{ my: 1, mt: 6 }}
                      size="large"
                      variant="contained"
                      onClick={RegisterClient}
                    >
                      S'inscrire
                    </Button>
                  </div>
                </div>
                <Box sx={{ pb: 2, pt: 2 }} style={{ marginTop: '10px' }}>
                  <b>
                    Vous avez déjà un compte?
                    <span>
                      <a
                        style={{
                          color: '#5569ff',
                          textDecoration: 'none',
                          cursor: 'pointer'
                        }}
                        href="/"
                        onClick={() => {
                          localStorage.removeItem('register');
                        }}
                      >
                        {' '}
                        Connectez-vous
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
                        style={{
                          width: '20rem',
                          height: '7rem',
                          marginBottom: '50px',
                          backgroundColor: '#FFFFFF'
                        }}
                      />
                    </TsAvatar>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box sx={{ pb: 2 }}>
              <b>
                © 2022-Application. All Rights Reserved | Designed by Moez BEN
                KHALED
              </b>
            </Box>
          </Container>
        </Card>
      </Container>
    </OverviewWrapper>
  );
}

export default Register;

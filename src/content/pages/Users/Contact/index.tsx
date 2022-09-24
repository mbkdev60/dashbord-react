import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';
import { Grid, Container } from '@mui/material';
import ProfileCover from '../ProfileCover'; //Image
import Contact from './Contact'; //  profil données
import PopularTags from '../PopularTags'; // facebook .....

function ManagementUserProfile() {
  const [update, setupdate] = useState(true);
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [picture, setPicture] = useState('');
  const user = {
    name: prenom + ' ' + name,
    avatar: picture,
    coverImg: 'http://localhost:5003/logo2.png',
    description: 'Bienvenue' + ' ' + 'Mr(s)' + ' ' + name
  };

  useEffect(() => {
    let nameUser: any = localStorage.getItem('nom');
    let prenomUser: any = localStorage.getItem('prenom');
    let pictureUser: any = localStorage.getItem('image');
    setName(nameUser);
    setPrenom(prenomUser);
    setPicture(pictureUser);
    setupdate(false);
  }, [name, prenom, update, picture]);

  return (
    <>
      <Helmet>
        <title> Paramètres du profil</title>
      </Helmet>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} />
          </Grid>

          <Grid item xs={12} md={4}>
            <PopularTags />
          </Grid>
          <Grid item xs={12} md={12}>
            <Contact setpdate={setupdate} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ManagementUserProfile;

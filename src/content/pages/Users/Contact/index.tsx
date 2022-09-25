import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';
import { Grid, Container } from '@mui/material';
import ContactCover from './ContactCover'; //Image
import Contact from './Contact'; //  profil données
import PopularTags from '../PopularTags'; // facebook .....

function ManagementUserProfile() {
 const [update, setpdate] = useState(true);
  const [nomSte, setNomSte] = useState('');
  // const [prenom, setPrenom] = useState('');
  const [logo, setLogo] = useState('');
  const contact = {
    nom: nomSte,
    avatar: logo,
    coverImg: 'http://localhost:5003/dosthing.jpg',
    description: 'Bienvenue' + ' ' + 'chez la société' + ' ' + nomSte
  };

  useEffect(() => {
    let nomSte: any = localStorage.getItem('nom');
    // let prenomUser: any = localStorage.getItem('prenom');
    let logoSte: any = localStorage.getItem('logo');
    setNomSte(nomSte);
    // setPrenom(prenomUser);
    setLogo(logoSte);
    setpdate(false);
  }, [nomSte, update, logo]);
  

  return (
    <>
      <Helmet>
        <title> Paramètres du contact</title>
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
            <ContactCover contact={contact} />
          </Grid>

          <Grid item xs={12} md={4}>
            <PopularTags />
          </Grid>
          <Grid item xs={12} md={12}>
            <Contact setpdate={setpdate} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ManagementUserProfile;

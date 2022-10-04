import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';
import { Grid, Container } from '@mui/material';
import ContactCover from './ContactCover'; //Image
import Contact from './Contact'; //  profil données
import PopularTags from './PopularTags'; // facebook .....

function ManagementUserContact() {
  const [update, setpdate] = useState(true);
  const [nom, setNom] = useState('');
  const [logo, setLogo] = useState('');
  const contact = {
    nom: nom,
    avatar: logo,
    coverImg: `${process.env.REACT_APP_API_URL}/nasa.jpg`,
    description: 'Bienvenue' + ' ' + 'chez la société' + ' ' + nom
  };

  useEffect(() => {
    let nom: any = localStorage.getItem('nomscte');
    let logo: any = localStorage.getItem('logoscte');
    setNom(nom);
    setLogo(logo);
    setpdate(false);
  }, [update]);

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

export default ManagementUserContact;

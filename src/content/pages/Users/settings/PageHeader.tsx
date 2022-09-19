import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
function PageHeader() {
  const [update, setpdate] = useState(true);
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [picture, setPicture] = useState('');
  const user = {
    name: prenom + '    ' + name,
    avatar: picture
  };

  useEffect(() => {
    let nameUser: any = localStorage.getItem('nom');
    let prenomUser: any = localStorage.getItem('prenom');
    let pictureUser: any = localStorage.getItem('image');
    setName(nameUser);
    setPrenom(prenomUser);
    setPicture(pictureUser);
    setpdate(false);
  }, [name, prenom, update, picture]);

  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        Les differents vues de cameras
      </Typography>
      <Typography variant="subtitle2">
        {user.name}, Ils existe des differentes vues pour voir les flux de
        toutes les cameras.
      </Typography>
    </>
  );
}

export default PageHeader;

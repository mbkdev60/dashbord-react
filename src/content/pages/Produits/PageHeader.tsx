import { Typography, Avatar, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';

function PageHeader() {
  const [update, setpdate] = useState(true);
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [picture, setPicture] = useState('');
  const user = {
    name: prenom + ' ' + name,
    avatar: picture
  };
  const theme = useTheme();
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
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user.name}
          src={user.avatar}
        />
      </Grid>
      <Grid item>
        <Typography
          variant="h3"
          component="h3"
          gutterBottom
          style={{ color: 'blue' }}
        >
          {user.name}
        </Typography>
        <Typography variant="subtitle2">
          Voici la liste de vos produits 🛍
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;

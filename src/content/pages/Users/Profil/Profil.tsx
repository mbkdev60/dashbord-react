import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardHeader,
  Divider,
  Avatar,
  Grid,
  Button
} from '@mui/material';
import Swal from 'sweetalert2';
import Image from '../../../overview/Login/Image';
import TextField from '@mui/material/TextField';
type profiletype = {
  setpdate: Function;
};

function Feed({ setpdate }: profiletype) {
  const [imageProfile, setImageProfile] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem('image')))
  );
  const [prenom, setPrenom] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem('prenom')))
  );
  const [nom, setNom] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem('nom')))
  );
  const [nom1, setNom1] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem('nom')))
  );
  const [prenom1, setPrenom1] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem('nom')))
  );
  const [password, setpassword] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem('password')))
  );

  const [password1, setpassword1] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem('password')))
  );

  async function ModifierImageuser(image: any) {
    if (nom1 != nom || prenom1 != prenom || password != password1) {
      try {
        await fetch(`http://localhost:5003/updateuser`, {
          method: 'put',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nom: nom,
            prenom: prenom,
            img: image,
            mdp: password,
            user_id: localStorage.getItem('user_id'),
            mail: localStorage.getItem('user')
          })
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.removeItem('image');
            localStorage.removeItem('nom');
            localStorage.removeItem('prenom');
            localStorage.setItem('image', image);
            localStorage.setItem('nom', nom);
            localStorage.setItem('prenom', prenom);
            setpdate(true);
            Swal.fire({
              title: 'Votre profil est modifié!',
              icon: 'success',
              confirmButtonText: 'Ok'
            }).then(function () {
              //pour refresh la commande
              window.location.reload();
            });
          });
      } catch (error) {
        console.error(error);
      }
    } else {
      Swal.fire({
        title: 'Il faut modifier au moins un champ !',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }

  async function Modifier() {
    try {
      if (
        imageProfile !=
        JSON.parse(JSON.stringify(localStorage.getItem('image')))
      ) {
        var formData = new FormData();
        let img = imageProfile;
        for (const i of Object.keys(img)) {
          formData.append('imgCollection', img[i as unknown as number]);
        }
        await fetch(`http://localhost:5003/uploadImage`, {
          body: formData,
          method: 'POST'
        })
          .then((response) => response.json())
          .then((data) => {
            ModifierImageuser(data);
          });
      } else {
        ModifierImageuser(imageProfile);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card style={{ width: '800px' }}>
      <CardHeader title="Modifier le profil" />
      <Divider />
      <Box p={2} className="justify-content-center">
        <div className="d-flex flex-column bd-highlight  mb-3">
          <div className=" bd-highlight ">
            <TextField
              style={{ width: '450px' }}
              sx={{ mt: 6, mb: 1 }}
              id="outlined-email-input"
              label="Nom"
              type="text"
              value={nom}
              onChange={(e: any) => {
                setNom(e.target.value);
              }}
            />
          </div>
          <div className=" bd-highlight mt-3 ">
            <TextField
              style={{ width: '450px' }}
              sx={{ my: 1 }}
              id="outlined-password-input"
              label="Prenom"
              type="text"
              value={prenom}
              onChange={(e: any) => {
                setPrenom(e.target.value);
              }}
            />
          </div>

          <div className=" bd-highlight mt-3 ">
            <TextField
              style={{ width: '450px' }}
              sx={{ my: 1 }}
              id="outlined-password-input"
              label="Mot de passe"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e: any) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <div className=" bd-highlight mt-3 ">
            <Image setImage={setImageProfile} images={imageProfile} />
          </div>
          <div className=" bd-highlight  d-flex align-items-center justify-content-center mt-5">
            <Button className=" " variant="contained" onClick={Modifier}>
              Modifier
            </Button>
          </div>
        </div>
      </Box>
    </Card>
  );
}

export default Feed;

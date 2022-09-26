import { useState } from 'react';
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

type contacttype = {
  setpdate: Function;
};

function Feed({ setpdate }: contacttype) {
  const [imageProfile, setImageProfile] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem('image')))
  );
  // const [logoContact, setLogoContact] = useState(
  //   JSON.parse(JSON.stringify(localStorage.getItem('logo')))
  // );
  const [nom, setNom] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem('nomscte')))
  );
  const [add, setAdd] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem('addscte')))
  );

  const [siret, setSiret] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem('siret')))
  );
  const [tel, setTel] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem('tel')))
  );

  async function ModifierImageContact(image: any) {
    // if (nom && add && mail && tel && siret) {
    try {
      await fetch(`http://localhost:5003/updatesctedetails`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: nom,
          add: add,
          tel: tel,
          siret: siret,
          logo: image,
          user_id: localStorage.getItem('user_id'),
          mail: localStorage.getItem('user')
        })
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.removeItem('logoscte');
          localStorage.removeItem('addresse');
          localStorage.removeItem('nomscte');
          localStorage.removeItem('tel');
          localStorage.removeItem('siret');
          localStorage.setItem('logoscte', data.logoscte);
          localStorage.setItem('nom', data.nom);
          localStorage.setItem('addresse', data.addscte);
          localStorage.setItem('siret', data.siret);
          localStorage.setItem('tel', data.tel);
          

          setpdate(true);
          Swal.fire({
            title: 'Votre contact est modifié!',
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
    // } else {
    //   Swal.fire({
    //     title: 'Il faut modifier au moins un champ !',
    //     icon: 'error',
    //     confirmButtonText: 'Ok'
    //   });
    // }
  }

  async function Modifier() {
    try {
      if (
        imageProfile !=
        JSON.parse(JSON.stringify(localStorage.getItem('logscte')))
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
            ModifierImageContact(data);
          });
      } else {
        ModifierImageContact(imageProfile);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card style={{ width: '800px' }}>
      <CardHeader title="Modifier les coordonnées de votre société" />
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
              label="Addresse"
              type="text"
              value={add}
              onChange={(e: any) => {
                setAdd(e.target.value);
              }}
            />
          </div>
          <div className=" bd-highlight mt-3 ">
            <TextField
              style={{ width: '450px' }}
              sx={{ my: 1 }}
              id="outlined-password-input"
              label="Téléphone"
              type="text"
              value={tel}
              onChange={(e: any) => {
                setTel(e.target.value);
              }}
            />
          </div>

          <div className=" bd-highlight mt-3 ">
            <TextField
              style={{ width: '450px' }}
              sx={{ my: 1 }}
              id="outlined-password-input"
              label="N° de Siret"
              type="text"
              autoComplete="current-password"
              value={siret}
              onChange={(e: any) => {
                setSiret(e.target.value);
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

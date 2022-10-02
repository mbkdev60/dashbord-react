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
    JSON.parse(JSON.stringify(localStorage.getItem('logoscte')))
  );
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
  const [ajoute, setajoute] = useState(nom ? false : true);

  async function ModifierImageContact(logo: any) {
    //if (nom ) {
    try {
      if (nom) {
        await fetch(
          `${
            process.env.REACT_APP_API_URL
          }/updatesctedetails/${localStorage.getItem('user_id')}
        `,
          {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              nom: nom,
              add: add,
              tel: tel,
              siret: siret,
              logo: logo,
              user_id: localStorage.getItem('user_id'),
              mail: localStorage.getItem('user')
            })
          }
        )
          .then((response) => response.json())
          .then((data) => {
            localStorage.removeItem('logoscte');
            localStorage.removeItem('addscte');
            localStorage.removeItem('nomscte');
            localStorage.removeItem('tel');
            localStorage.removeItem('siret');
            localStorage.setItem('logoscte', logo);
            localStorage.setItem('nomscte', nom);
            localStorage.setItem('addscte', add);
            localStorage.setItem('siret', siret);
            localStorage.setItem('tel', tel);
            setpdate(true);
            Swal.fire({
              title: 'Votre contact a été modifié!',
              icon: 'success',
              confirmButtonText: 'Ok'
            });
          });
      } else {
        Swal.fire({
          title: 'Il est obligatoire de remplir tous les champs !',
          icon: 'warning',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function Modifier() {
    try {
      if (
        imageProfile !=
        JSON.parse(JSON.stringify(localStorage.getItem('logoscte')))
      ) {
        var formData = new FormData();
        let img = imageProfile;
        for (const i of Object.keys(img)) {
          formData.append('imgCollection', img[i as unknown as number]);
        }
        await fetch(`${process.env.REACT_APP_API_URL}/uploadImage`, {
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
  async function Ajouter() {
    try {
      if (nom && add && tel) {
        await fetch(`${process.env.REACT_APP_API_URL}/addsctedetails`, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nom: nom,
            add: add,
            tel: tel,
            siret: siret,
            logo: imageProfile,
            user_id: localStorage.getItem('user_id'),
            mail: localStorage.getItem('user')
          })
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.removeItem('logoscte');
            localStorage.removeItem('addscte');
            localStorage.removeItem('nomscte');
            localStorage.removeItem('tel');
            localStorage.removeItem('siret');
            localStorage.setItem('logoscte', imageProfile);
            localStorage.setItem('nomscte', nom);
            localStorage.setItem('addscte', add);
            localStorage.setItem('siret', siret);
            localStorage.setItem('tel', tel);
            setpdate(true);
            Swal.fire({
              title: 'Votre contact a été  ajouté!',
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            setajoute(false);
          });
      } else {
        Swal.fire({
          title: 'Il est obligatoire de remplir tous les champs !',
          icon: 'warning',
          confirmButtonText: 'Ok'
        });
      }
    } catch (error) {
      console.error(error);
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
              label="Nom *"
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
            <Button
              variant="contained"
              onClick={(e) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                ajoute ? Ajouter() : Modifier();
              }}
            >
              {ajoute ? 'Ajouter' : 'Modifier'}
            </Button>
          </div>
        </div>
      </Box>
    </Card>
  );
}

export default Feed;

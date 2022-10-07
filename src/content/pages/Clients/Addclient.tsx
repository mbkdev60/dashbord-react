import React from 'react';
import { useState } from 'react';

import { Button } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import Image from '../../overview/Login/Image';
import Swal from 'sweetalert2';

type clienttype = {
  show: boolean;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  setShow: Function;
};

function Addclient({ show, setIsUpdate, setShow }: clienttype) {
  const [imageclient, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [nom, setNom] = useState('');
  const [tel, setTel] = useState('');
  const [prenom, setPrenom] = useState('');
  const [add, setAdd] = useState('');

  const handleClose = () => {
    setNom('');
    setPrenom('');
    setAdd('');
    setEmail('');
    setTel('');
    setShow(false);
  };

  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  async function Addclient(image: string) {
    if (email && nom && prenom) {
      if (re.test(email)) {
        fetch(`${process.env.REACT_APP_API_URL}/addclient`, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            img: image,
            user_id: localStorage.getItem('user_id'),
            nom: nom,
            prenom: prenom,
            mail: email,
            add: add,
            tel: tel
          })
        })
          .then((response) => response.json())
          .then((data) => {
            Swal.fire({
              title: ' Un nouveau client a été ajouté ',
              icon: 'success',
              confirmButtonText: 'Ok'
            }).then(function () {
              setIsUpdate(true);
              handleClose();
            });
          });
      } else {
        Swal.fire({
          title: ' Cet email est invalide !',
          icon: 'warning',
          confirmButtonText: 'Ok'
        });
      }
    } else {
      Swal.fire({
        title: 'Il est obligatoire de remplir tous les champs !',
        icon: 'warning',
        confirmButtonText: 'OK'
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
        Addclient(imageclient);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter un client</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <div className="d-flex flex-column bd-highlight ">
          <div className=" bd-highlight ">
            <TextField
              style={{ width: '370px' }}
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
              style={{ width: '370px' }}
              sx={{ mb: 1 }}
              id="outlined-prenom-input"
              label="Prénom"
              type="text"
              value={prenom}
              onChange={(e: any) => {
                setPrenom(e.target.value);
              }}
            />
          </div>
          <div className=" bd-highlight ">
            <TextField
              style={{ width: '370px' }}
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
              style={{ width: '370px' }}
              sx={{ mb: 1 }}
              id="outlined-add-input"
              label="Adresse"
              type="text"
              value={add}
              onChange={(e: any) => {
                setAdd(e.target.value);
              }}
            />
          </div>
          <div className=" bd-highlight ">
            <TextField
              style={{ width: '370px' }}
              sx={{ mb: 1 }}
              id="outlined-tel-input"
              label="Téléphone"
              type="tel"
              value={tel}
              onChange={(e: any) => {
                setTel(e.target.value);
              }}
            />
          </div>
          <div className=" bd-highlight mt-3">
            <Image setImage={setImage} />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" variant="outlined" onClick={handleClose}>
          Annuler
        </Button>
        <Button type="button" variant="contained" onClick={RegisterClient}>
          Ajouter
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Addclient;

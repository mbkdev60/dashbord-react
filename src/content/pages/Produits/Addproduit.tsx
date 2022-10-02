import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, TextField } from '@mui/material';
import Swal from 'sweetalert2';
import Image from '../../overview/Login/Image';

type deleteproduit = {
  show: boolean;
  setShow: Function;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};

function Addproduit({ show, setShow, setIsUpdate }: deleteproduit) {
  const handleShow = () => setShow(true);
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');
  const [description, setDescription] = useState('');
  const [imageproduit, setImage] = useState('');

  let imageProfile = 'http://localhost:5003/product.png';

  const handleClose = () => {
    setNom('');
    setPrix('');
    setImage('');
    setDescription('');
    setShow(false);
  };

  function addproduit(image: string) {
    if (prix && nom && description && image) {
      fetch(`http://localhost:5003/addproduct`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: nom,
          description: description,
          image: image,
          user_id: localStorage.getItem('user_id'),
          prix: prix
        })
      })
        .then((response) => response.json())
        .then((data) => {
          setIsUpdate(true);
          Swal.fire({
            title: 'Un nouveau produit a été ajouté',
            icon: 'success',
            confirmButtonText: 'Ok'
          }).then(function () {
            handleClose();
          });
        });
    } else {
      Swal.fire({
        title: 'Il est obligatoire de remplir tous les champs !',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  }

  async function RegisterProduct() {
    try {
      if (imageproduit) {
        var formData = new FormData();
        let img = imageproduit;
        for (const i of Object.keys(img)) {
          formData.append('imgCollection', img[i as unknown as number]);
        }
        await fetch(`http://localhost:5003/uploadImage`, {
          body: formData,
          method: 'POST'
        })
          .then((response) => response.json())
          .then((data: any) => {
            addproduit(data);
          });
      } else {
        addproduit(imageProfile);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter un produit</Modal.Title>
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
              label="Prix"
              type="text"
              value={prix}
              onChange={(e: any) => {
                setPrix(e.target.value);
              }}
            />
          </div>

          <div className=" bd-highlight ">
            <TextField
              style={{ width: '370px' }}
              sx={{ mb: 1 }}
              id="outlined-description-input"
              label="Description"
              type="description"
              autoComplete="current-description"
              value={description}
              onChange={(e: any) => {
                setDescription(e.target.value);
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
        <Button type="button" variant="contained" onClick={RegisterProduct}>
          Ajouter
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Addproduit;

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';

type deleteproduit = {
  Produit: any;
  show: boolean;
  setShow: Function;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};

function Deleteproduit({ show, Produit, setShow, setIsUpdate }: deleteproduit) {
  const handleClose = () => setShow(false);

  async function deleteUser() {
    try {
      await fetch(`http://localhost:5003/deleteproduct/${Produit.product_id}`, {
        method: 'delete'
      })
        .then((response) => response.json())
        .then((data) => {
          Swal.fire({
            title: 'Le produit a été supprimé !',
            icon: 'success',
            confirmButtonText: 'Ok'
          }).then(function () {
            setIsUpdate(true);
            handleClose();
          });
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Supprimer un produit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Voulez-vous supprimer ce produit avec cet email : "{Produit?.nom}"
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outlined" type="button" onClick={handleClose}>
          Annuler
        </Button>
        <Button variant="contained" type="button" onClick={deleteUser}>
          Supprimer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Deleteproduit;

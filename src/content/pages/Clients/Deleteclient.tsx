import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Container, Button } from '@mui/material';
import Swal from 'sweetalert2';

type deleteClient = {
  client: any;
  show: boolean;
  setShow: Function;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};
function Deleteclient({ show, client, setShow, setIsUpdate }: deleteClient) {
  const handleClose = () => {
    setShow(false);
  };

  async function deleteClient() {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/deleteclient/${client.client_id}`, {
        method: 'delete'
      })
        .then((response) => response.json())
        .then((data) => {
          Swal.fire({
            title: 'Le client a été supprimé !',
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
        <Modal.Title>Supprimer un client</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Voulez-vous supprimer ce client avec cet email : "{client?.mail}"
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outlined" type="button" onClick={handleClose}>
          Annuler
        </Button>
        <Button variant="contained" type="button" onClick={deleteClient}>
          Supprimer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Deleteclient;

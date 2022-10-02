import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import Image from '../../overview/Login/Image';
import Swal from 'sweetalert2';
import { Button } from '@mui/material';

type clientcardType = {
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  selectedClient: any;
  setShow: Function;
  show: boolean;
};
export default function Modifierclient({
  selectedClient,
  setIsUpdate,
  show,
  setShow
}: clientcardType) {
  const handleClose = () => setShow(false);
  const [imageclient, setImage] = useState(selectedClient?.img);
  const [client, setClient] = useState(selectedClient);

  async function RegisterClient() {
    try {
      if (imageclient !== client.img) {
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
            setIsUpdate(true);
            EditClient(data);
          });
      } else {
        EditClient(imageclient);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function EditClient(imageProfile: any) {
    try {
      client.img = imageProfile;

      await fetch(
        `${process.env.REACT_APP_API_URL}/updateclient/${selectedClient.client_id}`,
        {
          method: 'put',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(client)
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setIsUpdate(true);

          Swal.fire({
            title: 'Le client a été mofifié !',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          handleClose();
        });
    } catch (error) {
      console.error(error);
    }
  }
  React.useEffect(() => {
    setClient(selectedClient);
  }, [selectedClient]);

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <div className="justify-content-center">
            <Modal.Title>Modifier un client</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="bd-highlight">
              <FormGroup>
                <Label
                  className="box1"
                  for="exampleNom"
                  style={{ color: '#070f1b' }}
                >
                  Nom
                </Label>
                <Input
                  className="box"
                  id="exampleNom"
                  name="Nom"
                  placeholder="Nom"
                  value={client?.nom}
                  onChange={(event: any) => {
                    setClient({
                      ...client,
                      nom: event.target.value
                    });
                  }}
                />
              </FormGroup>
            </div>
            <div className=" bd-highlight">
              <FormGroup>
                <Label
                  className="box1"
                  for="examplePrenom"
                  style={{ color: '#070f1b' }}
                >
                  Prenom
                </Label>
                <Input
                  className="box"
                  id="examplePrenom"
                  name="Prenom"
                  placeholder="Prenom"
                  value={client?.prenom}
                  onChange={(event: any) => {
                    setClient({
                      ...client,
                      prenom: event.target.value
                    });
                  }}
                />
              </FormGroup>
            </div>
            <div className=" bd-highlight">
              <FormGroup>
                <Label
                  className="box1"
                  for="exampleAdresse"
                  style={{ color: '#070f1b' }}
                >
                  Adresse
                </Label>
                <Input
                  className="box"
                  id="exampleAdresse"
                  name="Adresse"
                  placeholder="Adresse"
                  value={client?.add}
                  onChange={(event: any) => {
                    setClient({
                      ...client,
                      add: event.target.value
                    });
                  }}
                />
              </FormGroup>
            </div>
            <div className=" bd-highlight">
              <FormGroup>
                <Label
                  className="box1"
                  for="exampleTelephone"
                  style={{ color: '#070f1b' }}
                >
                  Téléphone
                </Label>
                <Input
                  className="box"
                  id="exampleTelephone"
                  name="Telephone"
                  placeholder="Telephone"
                  value={client?.tel}
                  onChange={(event: any) => {
                    setClient({
                      ...client,
                      tel: event.target.value
                    });
                  }}
                />
              </FormGroup>
            </div>
            <div className=" bd-highlight">
              <FormGroup>
                <Label
                  className="box1"
                  for="exampleEmail"
                  style={{ color: '#070f1b' }}
                >
                  Email
                </Label>
                <Input
                  className="box"
                  id="exampleEmail"
                  name="Email"
                  placeholder="Email"
                  value={client?.mail}
                  onChange={(event: any) => {
                    setClient({
                      ...client,
                      mail: event.target.value
                    });
                  }}
                />
              </FormGroup>
            </div>
            <div className=" bd-highlight mt-3">
              <Image setImage={setImage} images={selectedClient?.img} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outlined"
            type="button"
            onClick={() => {
              handleClose();
            }}
          >
            Annuler
          </Button>
          <Button type="button" variant="contained" onClick={RegisterClient}>
            Modifier
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

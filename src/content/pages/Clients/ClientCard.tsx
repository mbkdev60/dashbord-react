import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import Image from '../../overview/Login/Image';
import { Card, CardHeader, CardContent, Divider, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import Swal from 'sweetalert2';
type clientcardType = {
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  selectedClient: any;
};
export default function ClientCard({
  selectedClient,
  setIsUpdate
}: clientcardType) {
  const [imageclient, setImage] = useState(selectedClient.img);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [client, setClient] = useState<any>(selectedClient);
  var alphabetName = client.nom.slice(0, 1);
  var alphabetPrenom = client.prenom.slice(0, 1);

  async function deleteClient() {
    try {
      await fetch(`http://localhost:5003/deleteclient/${client.client_id}`, {
        method: 'delete'
      })
        .then((response) => response.json())
        .then((data) => {
          Swal.fire({
            title: 'Le client est supprimé !',
            icon: 'success',
            confirmButtonText: 'Ok'
          }).then(function () {
            window.location.reload();
          });
          // handleClose();
          // setIsUpdate(true);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function RegisterClient() {
    try {
      if (imageclient !== client.img) {
        var formData = new FormData();
        let img = imageclient;
        for (const i of Object.keys(img)) {
          formData.append('imgCollection', img[i as unknown as number]);
        }
        await fetch(`http://localhost:5003/uploadImage`, {
          body: formData,
          method: 'POST'
        })
          .then((response) => response.json())
          .then((data: any) => {
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
        `http://localhost:5003/updateclient/${selectedClient.client_id}`,
        {
          method: 'put',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(client)
        }
      )
        .then((response) => response.json())
        .then((data) => {
          Swal.fire({
            title: 'Le client est mofifié !',
            icon: 'success',
            confirmButtonText: 'Ok'
          }).then(function () {
            window.location.reload();
          });
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Card>
        <CardHeader title="Fiche Client" />
        <Divider />
        <CardContent>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  {alphabetName}
                  {alphabetPrenom}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={selectedClient.nom}
              subheader={selectedClient.prenom}
            />
            <CardMedia
              sx={{
                height: 0,
                paddingTop: '130%' // 16:9
              }}
              image={client.img}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Email {''}: {''}
                {selectedClient.mail}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <EditIcon
                  onClick={() => {
                    setClient(selectedClient);
                    setIsUpdate(true);
                    handleShow1();
                  }}
                  style={{ color: '#5f72ff' }}
                />
              </IconButton>
              <Modal
                show={show1}
                onHide={handleClose1}
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
                          value={client.nom}
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
                          value={client.prenom}
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
                          value={client.add}
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
                          value={client.tel}
                          onChange={(event: any) => {
                            console.log(event.target.value);
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
                          value={client.mail}
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
                      <Image setImage={setImage} images={imageclient} />
                    </div>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="contained"
                    type="button"
                    onClick={() => {
                      handleClose1();
                    }}
                  >
                    Annuler
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={RegisterClient}
                  >
                    Modifier
                  </Button>
                </Modal.Footer>
              </Modal>
              <IconButton aria-label="share">
                <DeleteIcon
                  onClick={() => {
                    setClient(client);
                    handleShow();
                  }}
                  style={{ color: '#5f72ff' }}
                />
              </IconButton>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Supprimer un client</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Voulez-vous supprimer ce client avec cet email : "
                  {client.mail}"
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="contained"
                    type="button"
                    onClick={handleClose}
                  >
                    Annuler
                  </Button>
                  <Button
                    variant="contained"
                    type="button"
                    onClick={deleteClient}
                  >
                    Supprimer
                  </Button>
                </Modal.Footer>
              </Modal>
            </CardActions>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}

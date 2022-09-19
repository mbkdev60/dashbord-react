import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

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
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [client, setClient] = useState(selectedClient);
  var alphabetName = client.nom.slice(0, 1);
  var alphabetPrenom = client.prenom.slice(0, 1);

  async function deleteClient() {
    try {
      await fetch(`http://localhost:5003/deleteclient/${client.client_id}`, {
        method: 'delete'
      })
        .then((response) => response.json())
        .then((data) => {
          handleClose();
          setIsUpdate(true);
        });
      Swal.fire({
        title: 'Vous avez supprimer cet utilisateur !',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function EditClient() {
    if (client) {
      try {
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
              title: "l'utilisateur est mofifié !",
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            handleClose1();
            setIsUpdate(true);
          });
      } catch (error) {
        console.error(error);
      }
    } else {
      Swal.fire({
        title: 'Il faut modifié un champ!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    }
  }

  return (
    <div>
      <Card>
        <CardHeader title="les informations d'utilisateur" />
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
              title={client.nom}
              subheader={client.prenom}
            />
            <CardMedia
              sx={{
                height: 0,
                paddingTop: '56.25%' // 16:9
              }}
              image={client.img}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Email {''}: {''}
                {client.mail}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <EditIcon
                  onClick={() => {
                    setClient(client);
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
                    <Modal.Title>Modifier un utilisateur</Modal.Title>
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
                              client: event.target.value
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
                    onClick={EditClient}
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
                  <Modal.Title>Supprimer un utilisateur</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Voulez-vous supprimer cet utilisateur avec cet email : "
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

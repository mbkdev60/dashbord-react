import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

import { Card, CardHeader, CardContent, Divider, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Swal from 'sweetalert2';
type usercardType = {
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProduit: any;
};

export default function ProduitCard({
  selectedProduit,
  setIsUpdate
}: usercardType) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [Produit, setProduit] = useState(selectedProduit);

  var alphabetName = Produit.nom.slice(0, 1);

  async function deleteUser() {
    try {
      await fetch(`http://localhost:5003/deleteproduct/${Produit.product_id}`, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' }
      })
        .then((response) => response.json())
        .then((data) => {
          handleClose();
          setIsUpdate(true);
        });
      Swal.fire({
        title: 'Vous avez supprimer cet employé!',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } catch (error) {
      console.log(error);
    }
  }
  console.log(Produit);

  async function EditUser() {
    if (Produit) {
      try {
        await fetch(
          `http://localhost:5003/updateproduct/${Produit.product_id}`,
          {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Produit)
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "l'employé est modifié !",
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
        title: 'Il faut modifier un champ!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    }
  }

  function setproduit(arg0: any) {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <Card>
        <CardHeader title="les informations de cet employé" />
        <Divider />
        <CardContent>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={<Avatar aria-label="recipe">{alphabetName}</Avatar>}
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={Produit.nom}
              subheader={Produit.prix + ' €'}
            />
            <CardMedia
              sx={{
                height: 0,
                paddingTop: '56.25%' // 16:9
              }}
              image={Produit.image}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Prix {''}: {''}
                {Produit.prix + ' €'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description {''}: {''}
                {Produit.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <EditIcon
                  onClick={() => {
                    setProduit(Produit);
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
                    <Modal.Title>Modifier un employé</Modal.Title>
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
                          value={Produit.nom}
                          onChange={(event: any) => {
                            setProduit({
                              ...Produit,
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
                          prix
                        </Label>
                        <Input
                          className="box"
                          id="prix"
                          name="prix"
                          placeholder="prix"
                          value={Produit.prix}
                          onChange={(event: any) => {
                            setProduit({
                              ...Produit,
                              prix: event.target.value
                            });
                          }}
                        />
                      </FormGroup>
                    </div>

                    <div className="bd-highlight">
                      <FormGroup>
                        <Label
                          className="box1"
                          for="exampledescription"
                          style={{ color: '#070f1b' }}
                        >
                          Description{' '}
                        </Label>
                        <Input
                          className="box"
                          id="exampleDescription"
                          name="Description"
                          placeholder="Description"
                          value={Produit.description}
                          onChange={(event: any) => {
                            setProduit({
                              ...Produit,
                              description: event.target.value
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
                  <Button type="button" variant="contained" onClick={EditUser}>
                    Modifier
                  </Button>
                </Modal.Footer>
              </Modal>
              <IconButton aria-label="share">
                <DeleteIcon
                  onClick={() => {
                    setProduit(Produit);
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
                  <Modal.Title>Supprimer un employé</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Voulez-vous supprimer cet employé avec cet email : "
                  {Produit.nom}"
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
                    onClick={deleteUser}
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

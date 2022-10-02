import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FormGroup, Input, Label } from 'reactstrap';
import Image from '../../overview/Login/Image';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';

type Modifierproduit = {
  selectedProduit: any;
  show: boolean;
  setShow: Function;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export default function Modifierproduit({
  selectedProduit,
  show,
  setShow,
  setIsUpdate
}: Modifierproduit) {
  const [imageproduit, setImage] = useState(selectedProduit?.img);
  const [Produit, setProduit] = useState(selectedProduit);

  const handleClose = () => setShow(false);

  async function modifierProduct() {
    try {
      if (imageproduit !== Produit.image) {
        var formData = new FormData();
        let img: any = imageproduit;
        for (const i of Object.keys(img)) {
          formData.append('imgCollection', img[i as unknown as number]);
        }
        await fetch(`${process.env.REACT_APP_API_URL}/uploadImage`, {
          body: formData,
          method: 'POST'
        })
          .then((response) => response.json())
          .then((data: any) => {
            updateProduct(data);
          });
      } else {
        updateProduct(imageproduit);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProduct(imageProfile: any) {
    try {
      Produit.image = imageProfile;

      await fetch(
        `${process.env.REACT_APP_API_URL}/updateproduct/${selectedProduit.product_id}`,
        {
          method: 'put',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(Produit)
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setIsUpdate(true);
          Swal.fire({
            title: 'Le produit a été modifié !',
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
    setProduit(selectedProduit);
  }, [selectedProduit]);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <div className="justify-content-center">
          <Modal.Title>Modifier un produit</Modal.Title>
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
                value={Produit?.nom}
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
                Prix
              </Label>
              <Input
                className="box"
                id="prix"
                name="prix"
                placeholder="prix"
                value={Produit?.prix}
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
                value={Produit?.description}
                onChange={(event: any) => {
                  setProduit({
                    ...Produit,
                    description: event.target.value
                  });
                }}
              />
            </FormGroup>
          </div>
          <div className=" bd-highlight mt-3">
            <Image setImage={setImage} images={selectedProduit?.image} />
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
        <Button type="button" variant="contained" onClick={modifierProduct}>
          Modifier
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

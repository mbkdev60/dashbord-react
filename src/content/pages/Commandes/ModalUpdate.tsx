import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '@mui/material/Button/Button';
import { Input } from 'reactstrap';

type Modaltype = {
  show: boolean;
  setShow: Function;
  product: any;
  tabCommand: any;
  setTabCommand: Function;
  setTotal: Function;
};

function ModalUpdate({
  show,
  setShow,
  product,
  tabCommand,
  setTabCommand,
  setTotal
}: Modaltype) {
  const handleClose = () => setShow(false);
  const [counter, setCounter] = useState(1);

  function totalOrder() {
    let Somme = 0;
    tabCommand.forEach((element: any) => {
      Somme += Number(element.Total);
    });

    setTotal(Somme.toFixed(2));
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Modifier votre panier</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="d-flex justify-content-center">
            <div>
              <Button
                // variant="container"
                onClick={() => {
                  if (counter > 0) setCounter(counter - 1);
                }}
              >
                {' '}
                -{' '}
              </Button>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ width: '60px' }}
            >
              <Input
                type="text"
                Value={counter}
                placeholder=""
                style={{
                  textAlign: 'center',
                  marginRight: '5px',
                  marginLeft: '5px'
                }}
              />
            </div>
            <div>
              <Button  onClick={() => setCounter(counter + 1)}>
                {' '}
                +{' '}
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>
          Fermer
        </Button>
        <Button
          // variant="container"
          onClick={() => {
            let value = product.nom;
            let add = false;

            /* pour modifier la quantité d'un produit déjà existant dans le panier */
            for (const element of tabCommand) {
              if (element.Nom === value) {
                element.Quantité += counter;
                let tot = element.Prix * element.Quantité;
                element.Total = tot.toFixed(2);
                setTabCommand(tabCommand);
                add = true;
              }
            }

            /* pour ajouter un produit qui n'existe pas dans le panier */
            if (!add) {
              let tot = product.prix * counter;
              let data = {
                Nom: product.nom,
                Prix: product.prix,
                Image: product.image,
                Quantité: counter,
                Total: tot.toFixed(2)
              };
              tabCommand.push(data);
              setTabCommand(tabCommand);
            }

            setCounter(1);
            totalOrder();
            setShow(false);
          }}
        >
          Sauvegarder
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUpdate;

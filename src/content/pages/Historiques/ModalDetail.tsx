import Button from '@mui/material/Button/Button';
import { useEffect, useRef, useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import ReactToPrint from 'react-to-print';

import Facture from './Facture';

type Modaltype = {
  show: boolean;
  setShow: Function;
  idcommande: any;
  idclient: any;
  sctedetail: any;
  datecommande: any;
  totcommande: any;
};

function ModalDetail({
  show,
  setShow,
  idcommande,
  idclient,
  sctedetail,
  datecommande,
  totcommande
}: Modaltype) {
  const [commande, setcommande] = useState<any>();
  const [client, setclient] = useState<any>([]);
  const componentRef = useRef<HTMLDivElement>(null);

  async function getDetailCommande() {
    await fetch(
      `${process.env.REACT_APP_API_URL}/getdetailorder/${idcommande}`,
      {
        method: 'GET'
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setcommande(result);
        },

        (error) => {
          console.log(error);
        }
      );
  }

  async function detailClient() {
    fetch(`${process.env.REACT_APP_API_URL}/getclient/${idclient}`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setclient(result);
        },

        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    getDetailCommande();
    detailClient();
  }, [idcommande, idclient]);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title className="d-flex justify-content-between">
          <div style={{ width: '250px' }}>
            <h6 style={{ color: 'blue' }}>
              Détail de la commande N° {idcommande}
            </h6>
            <h6>Nom : {client.nom}</h6>
            <h6>Prenom : {client.prenom}</h6>
            <h6>Addrese : {client.add}</h6>
            <h6>Tel : {client.tel}</h6>
            <h6>E-mail : {client.mail}</h6>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <table className="table mt-5 text-center">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prix Unitaire</th>
                <th>Quantité</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* ? => si detailCmd est vide ne la prend pas*/}
              {commande?.map((data: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{data.nom}</td>
                    <td>{data.prixunitaire} €</td>
                    <td>{data.quantite}</td>
                    <td>{data.prixtotal} €</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Fermer</Button>
        <ReactToPrint
          trigger={() => <Button>Imprimer </Button>}
          content={() => componentRef.current}
        />

        <Facture
          componentRef={componentRef}
          commande={commande}
          sctedetail={sctedetail}
          client={client}
          idcommande={idcommande}
          datecommande={datecommande}
          totcommande={totcommande}
        />
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDetail;

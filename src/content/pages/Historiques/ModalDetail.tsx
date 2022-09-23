import Button from '@mui/material/Button/Button';
import { useEffect, useRef, useState } from 'react';

import ReactToPrint from 'react-to-print';
import Modal from 'react-bootstrap/Modal';
import logo from '../../../images/logo.png';

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

  async function getDetailCommande() {
    await fetch(`http://localhost:5003/getdetailorder/${idcommande}`, {
      method: 'GET'
    })
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
    fetch(`http://localhost:5003/getclient/${idclient}`, {
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
  const componentRef = useRef<HTMLDivElement>(null);
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

        {/* style={{ display: 'none' }} */}
        <div>
          <div ref={componentRef}>
            <div>
              <div
                className="d-flex justify-content-center mt-5"
                style={{ height: '50px' }}
              >
                <div>
                  <h4>FACTURE </h4>
                </div>
              </div>

              <div
                className="d-flex justify-content-between d-flex align-items-center px-5"
                style={{ height: '224px' }}
              >
                {sctedetail && (
                  <div>
                    <h6>Nom : {sctedetail.nom}</h6>
                    <h6>Adresse : {sctedetail.add}</h6>
                    <h6>Tel : {sctedetail.tel}</h6>
                    <h6>E-mail : {sctedetail.mail}</h6>
                    <h6>N° de Siret : {sctedetail.siret}</h6>
                  </div>
                )}
                <div>
                  <img
                    src={logo}
                    alt="Typescript"
                    style={{
                      width: '7rem',
                      height: '4rem',
                      marginLeft: '100px',
                      color: '#1758e3'
                    }}
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between d-flex align-items-center px-5">
                <div>
                  <div>
                    <h6>Nom : {client.nom}</h6>
                    <h6>Prenom : {client.prenom}</h6>
                    <h6>Adresse : {client.add}</h6>
                    <h6>Tel : {client.tel}</h6>
                    <h6>E-mail : {client.mail}</h6>
                  </div>
                </div>
                <div>
                  <h6>Date : {datecommande}</h6>
                  <h6>N° : {idcommande}</h6>
                  <h6>TOTAL : {totcommande} €</h6>
                </div>
              </div>

              <div className="d-flex justify-content-between"></div>
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
            </div>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDetail;

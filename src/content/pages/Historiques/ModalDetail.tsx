import Button from '@mui/material/Button/Button';
import { useEffect, useRef, useState } from 'react';

//import ReactToPrint from 'react-to-print';
import Modal from 'react-bootstrap/Modal';

type Modaltype = {
  show: boolean;
  setShow: Function;
  idcommande: any;
  idclient: any;
};

function ModalDetail({ show, setShow, idcommande, idclient }: Modaltype) {
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
        <Modal.Title>
          <h4 style={{ color: 'blue' }}>
            Détail de la commande N° {idcommande}
          </h4>
          <h4>Nom : {client.nom}</h4>
          <h4>Prenom : {client.prenom}</h4>
          <h4>Addrese : {client.add}</h4>
          <h4>Tel : {client.tel}</h4>
          <h4>E-mail : {client.mail}</h4>
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

        {/* <ReactToPrint
          trigger={() => <Button>Imprimer </Button>}
          content={() => componentRef.current}
        />
        <div style={{ display: 'none' }}>
          <div ref={componentRef}>
            <div>
              <Modal.Header>
                <Modal.Title>
                  <h5>Détail de la commande N° : {idcommande}</h5>
                  <h5>Nom : {client.nom}</h5>
                  <h5>Prenom : {client.prenom}</h5>
                  <h5>Adresse : {client.add}</h5>
                  <h5>Tel : {client.tel}</h5>
                  <h5>E-mail : {client.mail}</h5>
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
        </div> */}
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDetail;

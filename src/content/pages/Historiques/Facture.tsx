import React, { useRef } from 'react';

import logo from '../../../images/logo.png';
type Facturetype = {
  commande: any;
  sctedetail: any;
  client: any;
  totcommande: any;
  datecommande: any;
  idcommande: any;
  componentRef: React.MutableRefObject<HTMLDivElement>;
};
function Facture({
  commande,
  sctedetail,
  client,
  idcommande,
  datecommande,
  totcommande,
  componentRef
}: Facturetype) {
  return (
    <div style={{ display: 'none' }}>
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
                src={sctedetail.logo}
                alt="Typescript"
                style={{
                  width: '10rem',
                  height: '10rem',
                  marginLeft: '100px',
                  // color: '#1758e3'
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
        </div>
      </div>
    </div>
  );
}

export default Facture;

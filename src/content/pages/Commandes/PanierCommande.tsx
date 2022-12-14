import React from 'react';
import { Button, Card } from 'reactstrap';
import Swal from 'sweetalert2';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

type PanierCommandetype = {
  tabCommand: any;
  setTotal: Function;
  selectedOption: any;
  total: any;
  setTabCommand: Function;
  idClient: any;
  nomClient: any;
  setshow: Function;
};
function PanierCommande({
  tabCommand,
  setTotal,
  selectedOption,
  total,
  setTabCommand,
  idClient,
  nomClient,
  setshow
}: PanierCommandetype) {
  function totalCommande() {
    let Somme = 0;
    tabCommand.forEach((element: any) => {
      Somme += Number(element.Total);
    });

    setTotal(Somme);
  }
 
  async function detailCommande(element: any, id: any) {
    await fetch(`${process.env.REACT_APP_API_URL}/adddetailorder`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: selectedOption,
        order_id: id,
        nom: element.Nom,
        prixunitaire: element.Prix,
        image: element.Image,
        quantite: element.Quantité,
        prixtotal: element.Total
      })
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },

        (error) => {
          console.log(error);
        }
      );
  }

  async function insertCommande() {
    var today = new Date();
    if (selectedOption !== 0 && total > 0) {
      await fetch(`${process.env.REACT_APP_API_URL}/addglobalorder`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: localStorage.getItem('user_id'),
          client_id: idClient,
          nomclient: nomClient,
          dateorder: today,
          montanttotal: total
        })
      })
        .then((res) => res.json())
        .then(
          (result) => {
            for (const element of tabCommand) {
              detailCommande(element, result.order_id);
              Swal.fire({
                title: 'Merci pour votre commande',
                icon: 'success',
                confirmButtonText: 'Ok'
              }).then(function () {
                //pour refresh la commande
                setTabCommand([]);
                setTotal(0);
                setshow(false);
              });
            }
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      Swal.fire({
        title: 'Veuillez sélectionner un client et au moins un produit',
        icon: 'info',
        confirmButtonText: 'Ok'
      });
    }
  }
  
  return (
    <Card className="modalposition">
      <div className="m-2 ">
        <h5
          style={{
            textAlign: 'center',
            backgroundColor: 'rgb(34, 53, 105)',
            color: '#fff',
            paddingBottom: '7px',
            paddingTop: '7px',
            borderRadius: '5px'
          }}
        >
          {' '}
          Votre Panier{' '}
        </h5>
      </div>

      {tabCommand.length > 0 ? (
        <div className="scroller">
          <table className="table mt-3 text-center">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {tabCommand.map((data: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{data.Nom}</td>
                    <td>{data.Prix}€</td>
                    <td>{data.Quantité}</td>
                    <td>{data.Total}€</td>
                    <td>
                      <IconButton aria-label="share" className="IconButtonst">
                        <DeleteIcon
                          onClick={() => {
                            tabCommand.splice(index, 1);
                            totalCommande();
                          }}
                          style={{
                            color: '#5f72ff',
                            padding: '0px  !important'
                          }}
                        />
                      </IconButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <h6 style={{ color: ' #abadad', margin: '10px' }}>
            Votre panier est malheureusement vide{' '}
          </h6>
        </div>
      )}

      <div className="d-flex justify-content-between px-2 ">
        <div className="fas fa-divide ">
          <h5>Total </h5>
        </div>
        <div>
          <h5>{total} €</h5>{' '}
        </div>
      </div>
      <div className="p-2 bd-highlight">
        <Button
          className="col-12"
          variant="contained"
          style={{ backgroundColor: '#5569ff' }}
          type="button"
          disabled={tabCommand.length > 0 ? false : true}
          onClick={() => {
            totalCommande();
            insertCommande();
          }}
        >
          Commander
        </Button>
      </div>
    </Card>
  );
}

export default PanierCommande;

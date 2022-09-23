import { Card } from '@mui/material';
import { CryptoOrder } from 'src/models/crypto_order';
import RecentOrdersTable from './RecentOrdersTable';
import { subDays } from 'date-fns';
import { useEffect, useState } from 'react';

function RecentOrders() {
  const [listCommandes, setlistCommandes] = useState<any>();
  const [listclients, setlisteClients] = useState<any>([]);
  const [sctedetail, setsctedetail] = useState<any>();

  async function listeproduits() {
    try {
      await fetch(
        `http://localhost:5003/getglobalOrder/${localStorage.getItem(
          'user_id'
        )}`,
        {
          method: 'get'
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setlistCommandes(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function getClients() {
    fetch(`http://localhost:5003/clients/${localStorage.getItem('user_id')}`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then(
        (result) => {
          let data: any = [];
          let dataall: any = {
            value: 'all',
            label: 'all'
          };
          data.push(dataall);
          result.forEach((element: any, index: any) => {
            data.push({ value: element.client_id, label: element.nom });
          });
          setlisteClients(data);
        },

        (error) => {
          console.log(error);
        }
      );
  }

  function getsctedetails() {
    fetch(
      `http://localhost:5003/getsctedetails/${localStorage.getItem('user_id')}`,
      {
        method: 'GET'
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setsctedetail(result);
        },

        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    listeproduits();
    getClients();
    getsctedetails();
  }, []);
  return (
    <Card>
      <RecentOrdersTable
        cryptoOrders={listCommandes}
        statusOptions={listclients}
        sctedetail={sctedetail}
      />
    </Card>
  );
}

export default RecentOrders;

import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import TextField from '@mui/material/TextField';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { styled } from '@mui/material/styles';

import { useEffect, useState } from 'react';
import { Container, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Input } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Footer from 'src/components/Footer';
import Image from '../../overview/Login/Image';
import Swal from 'sweetalert2';
import ProduitCard from './ProduitCard';
import './style.css';
import PanierCommande from './PanierCommande';
import SelectClient from './SelectClient';

export default function DashboardCrypto() {
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [tabCommand, setTabCommand] = useState<any>([]);
  const [listproduits, setlistproduits] = useState([]);
  //client
  const [selectedOption, setSelectedOption] = useState(0);
  const [NomClient, setNomClient] = useState<any>();
  const [idClient, setidClient] = useState<any>();
  const [listeClients, setlisteClients] = useState<any>();


  async function listeproduits() {
    try {
      await fetch(
        `http://localhost:5003/products/${localStorage.getItem('user_id')}`,
        {
          method: 'get'
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setlistproduits(data);
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

  const handleSearchterm = (e: any) => {
    let value = e.target.value;
    setSearch(value);
  };

  useEffect(() => {
    listeproduits();
    getClients();
  }, []);

  return (
    <>
      <Helmet>
        <title>Commandes</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>

      <div className=" Search d-flex justify-content-between  my-4">
        <SelectClient
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setidClient={setidClient}
          setNomClient={setNomClient}
          listeClients={listeClients}
        />
        <Input
          className="ml-4"
          style={{ width: '285px' }}
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher..."
          onChange={handleSearchterm}
        />
      </div>

      <Container maxWidth="lg">
        <div className="row ">
          <div className="col-8 ">
            <div className="row ">
              {listproduits
                // .filter((val: any) => {
                //   return val.nom.toLowerCase().includes(search.toLowerCase());
                // })
                .map((produit: any, index: number) => {
                  return (
                    <div
                      className="col-sm mt-3 col-lg-4 col-xl-4 col-md-6 ml-0 col-sm-12 col-xs-12 my-2"
                      key={index}
                    >
                      <ProduitCard
                        selectedProduit={produit}
                        setTotal={setTotal}
                        tabCommand={tabCommand}
                        setTabCommand={setTabCommand}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-4 mt-3 ">
            {' '}
            {/* le 1/3 qui restait col-4 */}
            <PanierCommande
              tabCommand={tabCommand}
              setTotal={setTotal}
              selectedOption={selectedOption}
              total={total}
              setTabCommand={setTabCommand}
              idClient={idClient}
              nomClient={NomClient}
            />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

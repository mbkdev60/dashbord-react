import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import IconButton from '@mui/material/IconButton';
import { Input } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Footer from 'src/components/Footer';
import {
  Card,
  CardHeader,
  CardContent,
  Container,
  Button
} from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './style.css';
import PanierCommande from './PanierCommande';
import SelectClient from './SelectClient';
import ModalUpdate from './ModalUpdate';

export default function DashboardCrypto() {
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState<any>('');
  const [tabCommand, setTabCommand] = useState<any>([]);
  const [listproduits, setlistproduits] = useState([]);
  //client
  const [selectedOption, setSelectedOption] = useState(0);
  const [NomClient, setNomClient] = useState<any>();
  const [idClient, setidClient] = useState<any>();
  const [listeClients, setlisteClients] = useState<any>();
  const [Produit, setProduit] = useState<any>();

  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const handleClose = () => setShow(false);

  async function listeproduits() {
    try {
      await fetch(
        `${process.env.REACT_APP_API_URL}/products/${localStorage.getItem(
          'user_id'
        )}`,
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
    fetch(
      `${process.env.REACT_APP_API_URL}/clients/${localStorage.getItem(
        'user_id'
      )}`,
      {
        method: 'GET'
      }
    )
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
      <div className=" d-flex flex-wrap  Search justify-content-between  ">
        <div className="mt-2 mb-2" style={{ width: '270px' }}>
          <SelectClient
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            setidClient={setidClient}
            setNomClient={setNomClient}
            listeClients={listeClients}
          />
        </div>
        <div>
          <Input
            className="mt-2"
            style={{ width: '280px' }}
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Rechercher..."
            onChange={(e) => {
              handleSearchterm(e);
            }}
          />
        </div>
      </div>

      <div className="d-block d-sm-none my-2">
        <IconButton aria-label="add to favorites">
          <PersonAddIcon
            onClick={() => {
              setShow(true);
            }}
            style={{ color: '#5f72ff' }}
          />
          total {total} €
        </IconButton>
      </div>

      <Container maxWidth="lg">
        <div className="row ">
          <div className="col-12 col-sm-8 ">
            <div className="row ">
              {listproduits
                .filter((val: any) => {
                  return val.nom.toLowerCase().includes(search.toLowerCase());
                })
                .map((Produit: any, index: number) => {
                  return (
                    <div
                      className="col-sm mt-3 col-lg-4 col-xl-4 col-md-6 ml-0 col-sm-12 col-xs-12 my-2"
                      key={index}
                    >
                      <div>
                        <Card sx={{ maxWidth: 345 }}>
                          <CardHeader
                            avatar={
                              <Avatar aria-label="recipe">
                                {Produit.nom.slice(0, 1)}
                              </Avatar>
                            }
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
                              paddingTop: '120.00%' // 16:9
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
                              <Button
                                type="button"
                                variant="outlined"
                                onClick={() => {
                                  setProduit(Produit);
                                  setShowUpdate(true);
                                }}
                              >
                                Ajouter
                              </Button>
                            </IconButton>
                          </CardActions>
                        </Card>
                      </div>
                    </div>
                  );
                })}
            </div>
            <ModalUpdate
              show={showUpdate}
              setShow={setShowUpdate}
              product={Produit}
              tabCommand={tabCommand}
              setTabCommand={setTabCommand}
              setTotal={setTotal}
            />
          </div>
          <div className="col-4 mt-3   d-none d-sm-block">
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
              setshow={setShow}
            />
          </div>
        </div>

        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <div>
                <PanierCommande
                  tabCommand={tabCommand}
                  setTotal={setTotal}
                  selectedOption={selectedOption}
                  total={total}
                  setTabCommand={setTabCommand}
                  idClient={idClient}
                  nomClient={NomClient}
                  setshow={setShow}
                />
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={handleClose} variant="outlined">
                Fermer
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
      <Footer />
    </>
  );
}

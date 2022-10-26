import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import TextField from '@mui/material/TextField';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardContent, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useEffect, useState } from 'react';
import { Container, Button } from '@mui/material';
import { Input } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Footer from 'src/components/Footer';
import Image from '../../overview/Login/Image';
import Swal from 'sweetalert2';
import SelectClient from '../Commandes/SelectClient';
import Addclient from './Addclient';
import './style.css';
import Deleteclient from './Deleteclient';
import Modifierclient from './Modifierclient';

export default function DashboardCrypto() {
  const [listClients, setListClients] = useState([]);

  const [selectedClient, setselectedClient] = useState<any>();

  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [Show, setShow] = useState<boolean>(false);
  const [Showdelete, setShowdelete] = useState<boolean>(false);

  const [showupdate, setShowupdate] = useState<boolean>(false);

  const [search, setSearch] = useState('');
  const [selectedOption, setSelectedOption] = useState(0);
  const [NomClient, setNomClient] = useState<any>();
  const [idClient, setidClient] = useState<any>();

  const [id, setId] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem('user_id')))
  );
  let imageProfile = '${process.env.REACT_APP_API_URL}/product.png';

  async function getlisteclients() {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/clients/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
        .then((response) => response.json())
        .then((data) => {
          setListClients(data);
        });
    } catch (error) {
      console.log('error');
    }
  }

  const handleSearchterm = (e: any) => {
    let value = e.target.value;
    setSearch(value);
  };

  const handleShow = () => setShow(true);

  useEffect(() => {
    getlisteclients();
    setIsUpdate(false);
  }, [isUpdate]);

  return (
    <>
      <Helmet>
        <title>Clients</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <div className=" Search d-flex justify-content-between  my-4">
        <Input
          className="ml-4"
          style={{ width: '285px' }}
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher..."
          onChange={(e) => {
            handleSearchterm(e);
          }}
        />
        <div className="d-flex justify-content-end px-4">
          <IconButton aria-label="add to favorites">
            <PersonAddIcon
              onClick={() => {
                handleShow();
              }}
              style={{ color: '#5f72ff' }}
            />
          </IconButton>
        </div>
      </div>

      <Container maxWidth="lg">
        <div className="row">
          {listClients
            .filter((val: any) => {
              return val.nom.toLowerCase().includes(search.toLowerCase());
            })
            .map((client: any, index: number) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-xl-4 col-md-6 ml-0 col-sm-12 col-xs-12 my-2"
                    key={index}
                  >
                    <Card style={{ backgroundColor: '#e9e9e9' }}>
                      <CardHeader title="Fiche Client" />
                      <Divider />
                      <CardContent>
                        <Card sx={{ maxWidth: 345 }}>
                          <CardHeader
                            avatar={
                              <Avatar aria-label="recipe">
                                {client.nom.slice(0, 1)}
                                {client.prenom.slice(0, 1)}
                              </Avatar>
                            }
                            action={
                              <IconButton aria-label="settings">
                                <MoreVertIcon />
                              </IconButton>
                            }
                            title={client.nom}
                            subheader={client.prenom}
                          />
                          <CardMedia
                            sx={{
                              height: 0,
                              paddingTop: '110%' // 16:9
                            }}
                            image={client.img}
                          />
                          <CardContent>
                            <Typography variant="body2" color="text.secondary">
                              Email {''}: {''}
                              {client.mail}
                            </Typography>
                          </CardContent>
                          <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                              <EditIcon
                                onClick={() => {
                                  setShowupdate(true);
                                  setselectedClient(client);
                                }}
                                style={{ color: '#5f72ff' }}
                              />
                            </IconButton>
                            <IconButton aria-label="share">
                              <DeleteIcon
                                onClick={() => {
                                  setShowdelete(true);
                                  setselectedClient(client);
                                }}
                                style={{ color: '#5f72ff' }}
                              />
                            </IconButton>
                          </CardActions>
                        </Card>
                      </CardContent>
                    </Card>
                  </div>
                </>
              );
            })}
        </div>

        <Modifierclient
          show={showupdate}
          setShow={setShowupdate}
          selectedClient={selectedClient}
          setIsUpdate={setIsUpdate}
        />

        <Deleteclient
          client={selectedClient}
          show={Showdelete}
          setShow={setShowdelete}
          setIsUpdate={setIsUpdate}
        />

        <Addclient show={Show} setIsUpdate={setIsUpdate} setShow={setShow} />
      </Container>
      <Footer />
    </>
  );
}

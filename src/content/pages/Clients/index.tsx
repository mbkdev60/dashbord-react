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
import ClientCard from './ClientCard';
import './style.css';

export default function DashboardCrypto() {
  
  const [imageclient, setImage] = useState('');
  const [listClients, setListClients] = useState([]);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setNom('');
    setPassword('');
    setPrenom('');
    setEmail('');
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [search, setSearch] = useState('');
  const [id, setId] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem('user_id')))
  );
  let imageProfile = 'http://localhost:5003/images/product.png';
  /// get liste client
  async function getlisteclients() {
    try {
      await fetch(`http://localhost:5003/clients/${id}`, {
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
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function Addclient(image: string) {
    if (password && email && nom && prenom) {
      if (re.test(email)) {
        fetch(`http://localhost:5003/addclient`, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            img: image,
            user_id: localStorage.getItem('user_id'),
            nom: nom,
            prenom: prenom,
            mail: email,
            add: '',
            tel: 1234563
          })
        })
          .then((response) => response.json())
          .then((data) => {
            Swal.fire({
              title: ' Un nouveau compte créé ',
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            setIsUpdate(true);
            handleClose();
          });
      } else {
        Swal.fire({
          title: ' Cet email est invalid !',
          icon: 'warning',
          confirmButtonText: 'Ok'
        });
      }
    } else {
      Swal.fire(
        'Il est obligatoire de remplir tous les champs !',
        "S'il vous plait les remplir !",
        'warning'
      );
    }
  }

  async function RegisterClient() {
    try {
      if (imageclient) {
        var formData = new FormData();
        let img = imageclient;
        for (const i of Object.keys(img)) {
          formData.append('imgCollection', img[i as unknown as number]);
        }
        await fetch(`http://localhost:5003/uploadImage`, {
          body: formData,
          method: 'POST'
        })
          .then((response) => response.json())
          .then((data: any) => {
            Addclient(data);
          });
      } else {
        Addclient(imageProfile);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearchterm = (e: any) => {
    let value = e.target.value;
    setSearch(value);
  };

  useEffect(() => {
    getlisteclients();
    setIsUpdate(false);
  }, [isUpdate]);

  return (
    <>
      <Helmet>
        <title>Utilisateurs</title>
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
          onChange={handleSearchterm}
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
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Ajouter un utilisateur</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
              <div className="d-flex flex-column bd-highlight ">
                <div className=" bd-highlight ">
                  <TextField
                    style={{ width: '370px' }}
                    sx={{ mt: 6, mb: 1 }}
                    id="outlined-nom-input"
                    label="Nom"
                    type="text"
                    value={nom}
                    onChange={(e: any) => {
                      setNom(e.target.value);
                    }}
                  />
                </div>
                <div className=" bd-highlight ">
                  <TextField
                    style={{ width: '370px' }}
                    sx={{ mb: 1 }}
                    id="outlined-prenom-input"
                    label="Prenom"
                    type="text"
                    value={prenom}
                    onChange={(e: any) => {
                      setPrenom(e.target.value);
                    }}
                  />
                </div>
                <div className=" bd-highlight ">
                  <TextField
                    style={{ width: '370px' }}
                    sx={{ mb: 1 }}
                    id="outlined-email-input"
                    label="Email"
                    type="text"
                    value={email}
                    onChange={(e: any) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className=" bd-highlight ">
                  <TextField
                    style={{ width: '370px' }}
                    sx={{ mb: 1 }}
                    id="outlined-password-input"
                    label="Mot de passe"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e: any) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className=" bd-highlight mt-3">
                  <Image setImage={setImage} />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button type="button" variant="contained" onClick={handleClose}>
                Annuler
              </Button>
              <Button
                type="button"
                variant="contained"
                onClick={RegisterClient}
              >
                Ajouter
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

      <Container maxWidth="lg">
        <div className="row">
          {listClients
            .filter((val: any) => {
              return val.prenom.toLowerCase().includes(search.toLowerCase());
            })
            .map((client: any, index: number) => {
              return (
                <>
                  <div className="col-lg-4 col-xl-4 col-md-6 ml-0 col-sm-12 col-xs-12 my-2">
                    <ClientCard
                      selectedClient={client}
                      setIsUpdate={setIsUpdate}
                    />
                  </div>
                </>
              );
            })}
        </div>
      </Container>
      <Footer />
    </>
  );
}

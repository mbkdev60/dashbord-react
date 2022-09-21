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
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import AddBoxIcon from '@mui/icons-material/AddBox';
import AddchartIcon from '@mui/icons-material/Addchart';
import Footer from 'src/components/Footer';
import Image from '../../overview/Login/Image';
import Swal from 'sweetalert2';
import ProduitCard from './ProduitCard';
import './style.css';
export default function DashboardCrypto() {
  const [imageproduit, setImage] = useState('');
  const [listproduit, setListproduit] = useState([]);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setNom('');
    setPrix('');
    setImage('');
    setDescription('');
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');
  const [description, setDescription] = useState('');
  const [search, setSearch] = useState('');
  
  let imageProfile = 'http://localhost:5003/images/product.png';

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
          console.log(data);
          setListproduit(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function addproduit(image: string) {
    if (prix && nom) {
      fetch(`http://localhost:5003/addproduct`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: nom,
          description: description,
          image: image,
          user_id: localStorage.getItem('user_id'),
          prix: prix
        })
      })
        .then((response) => response.json())
        .then((data) => {
          Swal.fire({
            title: ' Un nouveau produit ajouté',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          setIsUpdate(true);
          handleClose();
        });
    } else {
      Swal.fire(
        'Il est obligatoire de remplir tous les champs !',
        'warning'
      );
    }
  }

  async function RegisterProduit() {
    try {
      if (imageproduit) {
        var formData = new FormData();
        let img = imageproduit;
        for (const i of Object.keys(img)) {
          formData.append('imgCollection', img[i as unknown as number]);
        }
        await fetch(`http://localhost:5003/uploadImage`, {
          body: formData,
          method: 'POST'
        })
          .then((response) => response.json())
          .then((data: any) => {
            addproduit(data);
          });
      } else {
        addproduit(imageProfile);
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
    listeproduits();
    setIsUpdate(false);
  }, [isUpdate]);

  return (
    <>
      <Helmet>
        <title>Produits</title>
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
          <IconButton aria-label="add to favorites" >
            <AddchartIcon
              onClick={() => {
                handleShow();
              }}
              style={{ color: '#5f72ff'}}
            />
          </IconButton>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Ajouter un produit</Modal.Title>
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
                    label="prix"
                    type="text"
                    value={prix}
                    onChange={(e: any) => {
                      setPrix(e.target.value);
                    }}
                  />
                </div>

                <div className=" bd-highlight ">
                  <TextField
                    style={{ width: '370px' }}
                    sx={{ mb: 1 }}
                    id="outlined-description-input"
                    label="Description"
                    type="description"
                    autoComplete="current-description"
                    value={description}
                    onChange={(e: any) => {
                      setDescription(e.target.value);
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
                onClick={RegisterProduit}
              >
                Ajouter
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

      <Container maxWidth="lg">
        <div className="row">
          {listproduit
            .filter((val: any) => {
              return val.nom.toLowerCase().includes(search.toLowerCase());
            })
            .map((produit: any, index: number) => {
              return (
                <>
                  <div className="col-lg-4 col-xl-4 col-md-6 ml-0 col-sm-12 col-xs-12 my-2">
                    <ProduitCard
                      selectedProduit={produit}
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

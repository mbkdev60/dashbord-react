import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Container, Input } from 'reactstrap';
import AddchartIcon from '@mui/icons-material/Addchart';
import Footer from 'src/components/Footer';
import { Card, CardHeader, CardContent, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './style.css';
import Modifierproduit from './Modifierproduit';
import Addproduit from './Addproduit';
import Deleteproduit from './Deleteproduit';

export default function DashboardCrypto() {
  const [listproduit, setListproduit] = useState([]);
  const [selectedProduit, setselectedProduit] = useState<any>();

  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [search, setSearch] = useState<any>('');

  const [showadd, setShowadd] = useState(false);
  const [showdelete, setShowdelete] = useState(false);
  const [showupdate, setShowupdate] = useState(false);

  let imageProfile = 'http://localhost:5003/product.png';

  async function listeproduits() {
    try {
      await fetch(
        `http://localhost:5003/products/${localStorage.getItem('user_id')}`,
        {
          method: 'get',
          headers: { 'Content-Type': 'application/json' }
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setListproduit(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearchterm = (e: any) => {
    setSearch(e.target.value);
    console.log(search);
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
          onChange={(e) => {
            handleSearchterm(e);
          }}
        />
        <div className="d-flex justify-content-end px-4">
          <IconButton aria-label="add to favorites">
            <AddchartIcon
              onClick={() => {
                setShowadd(true);
              }}
              style={{ color: '#5f72ff' }}
            />
          </IconButton>
        </div>
      </div>

      <Container maxWidth="lg">
        <div className="row">
          {listproduit
            .filter((val: any) => {
              return val.nom.toLowerCase().includes(search.toLowerCase());
            })
            .map((Produit: any, index: number) => {
              return (
                <>
                  <div className="col-lg-4 col-xl-4 col-md-6 ml-0 col-sm-12 col-xs-12 my-2">
                    <Card key={index}>
                      <CardHeader title="Fiche Produit" />
                      <Divider />
                      <CardContent>
                        <Card sx={{ maxWidth: 345 }}>
                          <CardHeader
                            avatar={
                              <Avatar aria-label="recipe">
                                {' '}
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
                              paddingTop: '100%' // 16:9
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
                              <EditIcon
                                onClick={() => {
                                  setShowupdate(true);
                                  setselectedProduit(Produit);
                                }}
                                style={{ color: '#5f72ff' }}
                              />
                            </IconButton>

                            <IconButton aria-label="share">
                              <DeleteIcon
                                onClick={() => {
                                  setShowdelete(true);
                                  setselectedProduit(Produit);
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
        <Modifierproduit
          selectedProduit={selectedProduit}
          show={showupdate}
          setShow={setShowupdate}
          setIsUpdate={setIsUpdate}
        />
        <Addproduit
          show={showadd}
          setShow={setShowadd}
          setIsUpdate={setIsUpdate}
        />
        <Deleteproduit
          Produit={selectedProduit}
          show={showdelete}
          setShow={setShowdelete}
          setIsUpdate={setIsUpdate}
        />
      </Container>
      <Footer />
    </>
  );
}

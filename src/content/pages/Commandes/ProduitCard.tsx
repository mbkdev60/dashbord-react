import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

import { Card, CardHeader, CardContent, Divider, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Swal from 'sweetalert2';
import ModalUpdate from './ModalUpdate';
type usercardType = {
  selectedProduit: any;
  tabCommand: any;
  setTabCommand: Function;
  setTotal: any;
};

export default function ProduitCard({
  selectedProduit,
  setTotal,
  tabCommand,
  setTabCommand
}: usercardType) {
  const [show, setShow] = useState(false);
  const [Produit, setProduit] = useState(selectedProduit);

  var alphabetName = Produit.nom.slice(0, 1);

  function setproduit(arg0: any) {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar aria-label="recipe">{alphabetName}</Avatar>}
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
            paddingTop: '56.25%' // 16:9
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
                setShow(true);
              }}
            >
              Ajouter
            </Button>
          </IconButton>
        </CardActions>
      </Card>

      <ModalUpdate
        show={show}
        setShow={setShow}
        product={Produit}
        tabCommand={tabCommand}
        setTabCommand={setTabCommand}
        setTotal={setTotal}
      />
    </div>
  );
}

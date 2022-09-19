import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeaderView6 from './PageHeaderView6';

import {
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Modal from 'react-bootstrap/Modal';

function View6() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  async function StartCam1() {
    try {
      await fetch(`http://localhost:5001/start1`, {})
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function StopCam1() {
    try {
      await fetch(`http://localhost:5001/stop1`, {})
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function StartCam2() {
    try {
      await fetch(`http://localhost:5001/start2`, {})
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function StopCam2() {
    try {
      await fetch(`http://localhost:5001/stop2`, {})
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function StartCam3() {
    try {
      await fetch(`http://localhost:5001/start3`, {})
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function StopCam3() {
    try {
      await fetch(`http://localhost:5001/stop3`, {})
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function StartCam4() {
    try {
      await fetch(`http://localhost:5001/start4`, {})
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function StopCam4() {
    try {
      await fetch(`http://localhost:5001/stop4`, {})
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function StartCam5() {
    try {
      await fetch(`http://localhost:5001/start5`, {})
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function StopCam5() {
    try {
      await fetch(`http://localhost:5001/stop5`, {})
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function StartCam6() {
    try {
      await fetch(`http://localhost:5001/start6`, {})
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function StopCam6() {
    try {
      await fetch(`http://localhost:5001/stop6`, {})
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Helmet>
        <title>Vue par 4</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeaderView6 />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Card>
          <CardHeader
            titleTypographyProps={{ variant: 'h4' }}
            subheaderTypographyProps={{ variant: 'subtitle2' }}
            title="Cameras"
          />
          <CardContent style={{ height: '575px' }}>
            <iframe
              style={{ width: '100%', height: '563px' }}
              src="http://192.168.2.31:8080/camera1+2+3+4+5+6.html"
            ></iframe>
          </CardContent>
          <CardActions
            disableSpacing
            className="d-flex justify-content-center"
          ></CardActions>
        </Card>
      </Container>
    </>
  );
}

export default View6;

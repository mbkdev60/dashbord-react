import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeaderView2 from './PageHeaderView2';
import {
  Container,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Modal from 'react-bootstrap/Modal';
import './style.css';
function View2() {
  const [view, setView] = useState<Number>(1);
  const [showCam2, setShowCam2] = useState(false);
  const handleCloseCam2 = () => setShowCam2(false);
  const handleShowCam2 = () => setShowCam2(true);
  const [showCam3, setShowCam3] = useState(false);
  const handleCloseCam3 = () => setShowCam3(false);
  const handleShowCam3 = () => setShowCam3(true);
  const [showCam4, setShowCam4] = useState(false);
  const handleCloseCam4 = () => setShowCam4(false);
  const handleShowCam4 = () => setShowCam4(true);
  const [showCam5, setShowCam5] = useState(false);
  const handleCloseCam5 = () => setShowCam5(false);
  const handleShowCam5 = () => setShowCam5(true);
  const [showCam6, setShowCam6] = useState(false);
  const handleCloseCam6 = () => setShowCam6(false);
  const handleShowCam6 = () => setShowCam6(true);
  const [showCam, setShowCam] = useState(false);
  const handleCloseCam = () => setShowCam(false);
  const handleShowCam = () => setShowCam(true);

  return (
    <>
      <Helmet>
        <title>Vue par 2</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeaderView2 />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Card>
          <CardHeader
            titleTypographyProps={{ variant: 'h4' }}
            subheaderTypographyProps={{ variant: 'subtitle2' }}
            title="Cameras"
          />
          <CardContent style={{ height: '575px' }}>
            {view === 1 && (
              <div>
                <div className="d-flex  align-item justify-content-start">
                  <div className="row col-12">
                    <div className="col">
                      <div>
                        <IconButton
                          aria-label="add to favorites"
                          style={{ position: 'absolute' }}
                        >
                          <ZoomInIcon
                            onClick={() => {
                              handleShowCam();
                            }}
                          />
                        </IconButton>
                        <iframe
                          style={{ width: '100%', height: '563px' }}
                          src="http://192.168.2.31:8080/camera1.html"
                        ></iframe>
                      </div>
                    </div>
                    <div className="col">
                      <div>
                        <IconButton
                          aria-label="add to favorites"
                          style={{ position: 'absolute' }}
                        >
                          <ZoomInIcon
                            onClick={() => {
                              handleShowCam2();
                            }}
                          />
                        </IconButton>
                        <iframe
                          style={{ width: '100%', height: '563px' }}
                          src="http://192.168.2.31:8080/camera2.html"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {view === 2 && (
              <div>
                <div className="d-flex  align-item justify-content-start">
                  <div className="row col-12">
                    <div className="col">
                      <div>
                        <IconButton
                          aria-label="add to favorites"
                          style={{ position: 'absolute' }}
                        >
                          <ZoomInIcon
                            onClick={() => {
                              handleShowCam3();
                            }}
                          />
                        </IconButton>
                        <iframe
                          style={{ width: '100%', height: '563px' }}
                          src="http://192.168.2.31:8080/camera3.html"
                        ></iframe>
                      </div>
                    </div>
                    <div className="col">
                      <div>
                        <IconButton
                          aria-label="add to favorites"
                          style={{ position: 'absolute' }}
                        >
                          <ZoomInIcon
                            onClick={() => {
                              handleShowCam4();
                            }}
                          />
                        </IconButton>
                        <iframe
                          style={{ width: '100%', height: '563px' }}
                          src="http://192.168.2.31:8080/camera4.html"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {view === 3 && (
              <div>
                <div className="d-flex  align-item justify-content-start">
                  <div className="row col-12">
                    <div className="col">
                      <div>
                        <IconButton
                          aria-label="add to favorites"
                          style={{ position: 'absolute' }}
                        >
                          <ZoomInIcon
                            onClick={() => {
                              handleShowCam5();
                            }}
                          />
                        </IconButton>
                        <iframe
                          style={{ width: '100%', height: '563px' }}
                          src="http://192.168.2.31:8080/camera5.html"
                        ></iframe>
                      </div>
                    </div>
                    <div className="col">
                      <div>
                        <IconButton
                          aria-label="add to favorites"
                          style={{ position: 'absolute' }}
                        >
                          <ZoomInIcon
                            onClick={() => {
                              handleShowCam6();
                            }}
                          />
                        </IconButton>
                        <iframe
                          style={{ width: '100%', height: '563px' }}
                          src="http://192.168.2.31:8080/camera6.html"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Modal
              show={showCam}
              onHide={handleCloseCam}
              backdrop="static"
              keyboard={false}
              size="lg"
              style={{ width: '100%' }}
              className=" d-flex justify-content-center"
            >
              <Modal.Header closeButton>
                <Modal.Title>Camera</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex justify-content-center">
                <iframe
                  src="http://192.168.2.31:8080/camera1Big.html"
                  style={{
                    width: '900px',
                    height: '730px'
                  }}
                ></iframe>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleCloseCam}
                >
                  Annuler
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal
              show={showCam2}
              onHide={handleCloseCam2}
              backdrop="static"
              keyboard={false}
              size="lg"
              style={{ width: '100%' }}
              className=" d-flex justify-content-center"
            >
              <Modal.Header closeButton>
                <Modal.Title>Camera</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex justify-content-center">
                <iframe
                  src="http://192.168.2.31:8080/camera2Big.html"
                  style={{
                    width: '900px',
                    height: '730px'
                  }}
                ></iframe>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleCloseCam2}
                >
                  Annuler
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal
              show={showCam3}
              onHide={handleCloseCam3}
              backdrop="static"
              keyboard={false}
              size="lg"
              style={{ width: '100%' }}
              className=" d-flex justify-content-center"
            >
              <Modal.Header closeButton>
                <Modal.Title>Camera</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex justify-content-center">
                <iframe
                  src="http://192.168.2.31:8080/camera3Big.html"
                  style={{
                    width: '900px',
                    height: '730px'
                  }}
                ></iframe>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleCloseCam3}
                >
                  Annuler
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal
              show={showCam4}
              onHide={handleCloseCam4}
              backdrop="static"
              keyboard={false}
              size="lg"
              style={{ width: '100%' }}
              className=" d-flex justify-content-center"
            >
              <Modal.Header closeButton>
                <Modal.Title>Camera</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex justify-content-center">
                <iframe
                  src="http://192.168.2.31:8080/camera4Big.html"
                  style={{
                    width: '900px',
                    height: '730px'
                  }}
                ></iframe>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleCloseCam4}
                >
                  Annuler
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal
              show={showCam5}
              onHide={handleCloseCam5}
              backdrop="static"
              keyboard={false}
              size="lg"
              style={{ width: '100%' }}
              className=" d-flex justify-content-center"
            >
              <Modal.Header closeButton>
                <Modal.Title>Camera</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex justify-content-center">
                <iframe
                  src="http://192.168.2.31:8080/camera5Big.html"
                  style={{
                    width: '900px',
                    height: '730px'
                  }}
                ></iframe>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleCloseCam5}
                >
                  Annuler
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal
              show={showCam6}
              onHide={handleCloseCam6}
              backdrop="static"
              keyboard={false}
              size="lg"
              style={{ width: '100%' }}
              className=" d-flex justify-content-center"
            >
              <Modal.Header closeButton>
                <Modal.Title>Camera</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex justify-content-center">
                <iframe
                  src="http://192.168.2.31:8080/camera6Big.html"
                  style={{
                    width: '900px',
                    height: '730px'
                  }}
                ></iframe>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleCloseCam6}
                >
                  Annuler
                </Button>
              </Modal.Footer>
            </Modal>
          </CardContent>
          <CardActions disableSpacing className="d-flex justify-content-center">
            <div>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => {
                        setView(1);
                      }}
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => {
                        setView(2);
                      }}
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => {
                        setView(3);
                      }}
                    >
                      3
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}

export default View2;

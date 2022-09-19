import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeaderView4 from './PageHeaderView4';

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

function View4() {
  const [view, setView] = useState<Number>(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Helmet>
        <title>Vue par 4</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeaderView4 />
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
                <iframe
                  style={{ width: '100%', height: '563px' }}
                  src="http://192.168.2.31:8080/camera1+2+3+4.html"
                ></iframe>
              </div>
            )}
            {view === 2 && (
              <div>
                <iframe
                  style={{ width: '100%', height: '563px' }}
                  src="http://192.168.2.31:8080/camera5+6.html"
                ></iframe>
              </div>
            )}
          </CardContent>
          <CardActions disableSpacing className="d-flex justify-content-center">
            <div className="d-flex align-items-center justify-content-between">
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
                </ul>
              </nav>
            </div>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}

export default View4;

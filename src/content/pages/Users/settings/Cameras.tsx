import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeaderCamera from './PageHeaderCamera';

import {
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActions
} from '@mui/material';

function View4() {
  const [view, setView] = useState<Number>(1);
  return (
    <>
      <Helmet>
        <title>Cameras</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeaderCamera />
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
              <iframe
                style={{ width: '100%', height: '100%' }}
                src="http://192.168.2.31:8080/camera1.html"
              ></iframe>
            )}
            {view === 2 && (
              <iframe
                style={{ width: '100%', height: '100%' }}
                src="http://192.168.2.31:8080/camera2.html"
              ></iframe>
            )}
            {view === 3 && (
              <iframe
                style={{ width: '100%', height: '100%' }}
                src="http://192.168.2.31:8080/camera3.html"
              ></iframe>
            )}
            {view === 4 && (
              <iframe
                style={{ width: '100%', height: '100%' }}
                src="http://192.168.2.31:8080/camera4.html"
              ></iframe>
            )}
            {view === 5 && (
              <iframe
                style={{ width: '100%', height: '100%' }}
                src="http://192.168.2.31:8080/camera5.html"
              ></iframe>
            )}
            {view === 6 && (
              <iframe
                style={{ width: '100%', height: '100%' }}
                src="http://192.168.2.31:8080/camera6.html"
              ></iframe>
            )}
          </CardContent>
          <CardActions disableSpacing className="d-flex justify-content-center">
            <div className="d-flex align-items-center justify-content-center">
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
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => {
                        setView(4);
                      }}
                    >
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => {
                        setView(5);
                      }}
                    >
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => {
                        setView(6);
                      }}
                    >
                      6
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

import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from 'src/components/Footer';
import View2Cam from '../../../../images/View2Cam.png';
import View4Cam from '../../../../images/View4Cam.png';
import view6Cam from '../../../../images/view6Cam.png';

function ManagementUserSettings() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Différent vues de cameras</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg" >
        {/* <div className="col-lg-4 col-xl-4 col-md-6 ml-0 col-sm-12 col-xs-12 my-2"> */}
        <Card style={{ overflow: 'auto' }}>
          <CardHeader
            titleTypographyProps={{ variant: 'h4' }}
            subheaderTypographyProps={{ variant: 'subtitle2' }}
            title="Cameras"
          />
          <CardContent style={{ height: '575px' }}>
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <Card>
                    <CardHeader
                      titleTypographyProps={{ variant: 'h4' }}
                      subheaderTypographyProps={{ variant: 'subtitle2' }}
                      title="Vue par 2"
                    />
                    <CardContent style={{ height: '360px' }}>
                      <img
                        src={View2Cam}
                        style={{ width: '320px' }}
                        onClick={() => {
                          navigate('/management/View2');
                        }}
                      />
                    </CardContent>
                    <CardActions disableSpacing></CardActions>
                  </Card>
                </div>
                <div className="col-sm">
                  <Card>
                    <CardHeader
                      titleTypographyProps={{ variant: 'h4' }}
                      subheaderTypographyProps={{ variant: 'subtitle2' }}
                      title="Vue par 4"
                    />
                    <CardContent style={{ height: '360px' }}>
                      <img
                        src={View4Cam}
                        style={{ width: '320px' }}
                        onClick={() => {
                          navigate('/management/View4');
                        }}
                      />
                    </CardContent>
                    <CardActions disableSpacing></CardActions>
                  </Card>
                </div>
                <div className="col-sm">
                  {' '}
                  <Card>
                    <CardHeader
                      titleTypographyProps={{ variant: 'h4' }}
                      subheaderTypographyProps={{ variant: 'subtitle2' }}
                      title="Vue par 6"
                    />
                    <CardContent style={{ height: '360px' }}>
                      <img
                        src={view6Cam}
                        style={{ width: '320px' }}
                        onClick={() => {
                          navigate('/management/View6');
                        }}
                      />
                    </CardContent>
                    <CardActions disableSpacing></CardActions>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
          <CardActions disableSpacing></CardActions>
        </Card>
        {/* </div> */}
      </Container>
      <Footer />
    </>
  );
}

export default ManagementUserSettings;

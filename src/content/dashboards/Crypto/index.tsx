import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Card, Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import Somme from './Somme';
import TopClient from './TopClient';

function DashboardCrypto() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Card>
          <Somme />
          <TopClient />
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardCrypto;

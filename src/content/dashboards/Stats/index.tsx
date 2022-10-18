import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Card, Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import ChiffreAffaires from './ChiffreAffaires';
import TopClient from './TopClient';
import BarChart from './BarChart';
import { blue } from '@mui/material/colors';

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
        <Card style={{ backgroundColor: '#f5f5f6' }}>
          <ChiffreAffaires />
          <TopClient />
          <BarChart />
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardCrypto;

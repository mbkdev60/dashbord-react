import { Box, Container, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import Login from './Login';
import { useState, useEffect } from 'react';
import Register from './Login/Register';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {
  const [register, setRegister] = useState('');
  useEffect(() => {
    let userRegister: any = localStorage.getItem('register');
    setRegister(userRegister);
  }, [register]);
  return (
    <OverviewWrapper>
      {!register ? (
        <Container maxWidth="lg">
          <Card sx={{ p: 10, mb: 10, borderRadius: 12, m: 10 }}>
            <Login />
          </Card>
        </Container>
      ) : (
        <Register />
      )}
    </OverviewWrapper>
  );
}

export default Overview;

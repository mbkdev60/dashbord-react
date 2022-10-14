import { Box, Container, Link, Typography, styled } from '@mui/material';

const FooterWrapper = styled(Container)(
  ({ theme }) => `
        margin-top: ${theme.spacing(4)};
`
);

function Footer() {
  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        pb={4}
        display={{ xs: 'block'}}
        alignItems="center"
        textAlign="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle1">
            &copy; 2022- Application / All Rights Reserved.   Designed by Moez BEN
            KHALED 
          </Typography>
        </Box>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;

import {
  Typography,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListSubheader,
  Avatar,
  styled
} from '@mui/material';
import facebook from './Images/facebook.png';
import instagram from './Images/instagram.jpg';
import linkedIn from './Images/linkenIn.png';
import Twitter from './Images/Twitter.png';
const ListWrapper = styled(List)(
  () => `
      .MuiListItem-root {
        border-radius: 0;
        margin: 0;
      }
`
);

function PopularTags() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader title="CONTACTEZ-NOUS " />
      <Divider />
      <ListWrapper disablePadding>
        <Divider />
        <div className="px-4 py-4  d-flex justify-content-center">
          {' '}
          Avenue Habib Bourguiba 04234,
          <span style={{ fontSize: '17px', color: '#0077b7' }}>
            {' '}
            EL Golaa
          </span>{' '}
        </div>
        <Divider />
        <div className="px-4 py-2  d-flex justify-content-center">
          {' '}
          Douz, Kebelli
        </div>
        <Divider />
        <></>
        <Divider />
        <ListSubheader>
          <Typography sx={{ py: 1.5 }} variant="h4" color="text.primary">
            SUIVEZ-NOUS
          </Typography>
        </ListSubheader>
        <Divider />
        <ListItem button>
          <ListItemAvatar>
            <Avatar
              sx={{
                width: 38,
                height: 38
              }}
              src={linkedIn}
            ></Avatar>
          </ListItemAvatar>
          <a
            href="https://www.linkedin.com/company/aures-group/"
            style={{ color: 'black', textDecoration: 'none', fontSize: '15px' }}
          >
            {' '}
            LinkedIn
          </a>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemAvatar>
            <Avatar
              sx={{
                width: 38,
                height: 38
              }}
              src={Twitter}
            >
              D
            </Avatar>
          </ListItemAvatar>
          <a
            href="https://www.twitter.com/company/aures-group/"
            style={{ color: 'black', textDecoration: 'none', fontSize: '15px' }}
          >
            {' '}
            Twitter
          </a>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemAvatar>
            <Avatar sx={{ width: 38, height: 38 }} src={facebook} />
          </ListItemAvatar>
          <a
            href="https://www.facebook.com/company/aures-group/"
            style={{ color: 'black', textDecoration: 'none', fontSize: '15px' }}
          >
            {' '}
            Facebook
          </a>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemAvatar>
            <Avatar sx={{ width: 38, height: 38 }} src={instagram} />
          </ListItemAvatar>
          <a
            href="https://www.instagram.com/company/aures-group/"
            style={{ color: 'black', textDecoration: 'none', fontSize: '15px' }}
          >
            {' '}
            Instagram
          </a>
        </ListItem>
      </ListWrapper>
    </Card>
  );
}

export default PopularTags;

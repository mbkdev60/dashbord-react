import { Box } from '@mui/material';
import HeaderSearch from './Search';
import HeaderNotifications from './Notifications';
import { useNavigate } from 'react-router-dom';
function HeaderButtons() {
  const navigate = useNavigate();
  function GoNotifications() {
    navigate('');
  }
  return (
    <Box sx={{ mr: 1 }}>
      {/* <HeaderSearch /> */}
      <Box sx={{ mx: 0.5 }} component="span">
        <HeaderNotifications />
      </Box>
    </Box>
  );
}

export default HeaderButtons;

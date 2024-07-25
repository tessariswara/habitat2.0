// material-ui
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="https://projectmast.id" target="_blank" underline="hover">
      Project collaboration of Mast and WIT.ID ©️ 2024 All rights reserved
    </Typography>
  </Stack>
);

export default AuthFooter;

// material-ui
import { useTheme } from '@mui/material/styles';

// project import
import { ThemeMode } from 'config';

// import PNG images
import logoDark from '../../../public/assets/images/logo2.png';
import logo from '../../../public/assets/images/logo.png';
import Image from '../../../node_modules/next/image';

// ==============================|| LOGO PNG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return <Image src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="Berry" width="127" />;
};

export default Logo;

'use client';

import Link from 'next/link';
import Image from 'next/image';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
import AuthLogin from 'components/authentication/auth-forms/AuthLogin';
import AuthFooter from 'components/ui-component/cards/AuthFooter';
import AuthWrapper2 from 'components/authentication/AuthWrapper2';
import AuthCardWrapper from 'components/authentication/AuthCardWrapper';
import Logo2 from 'components/ui-component/Logo2';

// assets
const habitatLogin = '/assets/images/auth/habitatLogin.png';

// ================================|| AUTH - LOGIN ||================================ //

const Login = () => {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <AuthWrapper2>
      <Grid container justifyContent={{ xs: 'center', md: 'space-between' }} alignItems="center">
        <Grid item md={6} lg={7} sx={{ position: 'relative', alignSelf: 'stretch', display: { xs: 'none', md: 'block' } }}>
          <Grid item xs={12}>
            <div style={{ height: '100vh', width: 'auto', overflow: 'hidden' }}>
              <Image alt="Auth method" src={habitatLogin} layout="fill" objectFit="cover" />
            </div>
          </Grid>
        </Grid>
        <Grid container md={6} lg={5} xs={12} sx={{ minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>
          <AuthCardWrapper border={downLG} rowSpacing={5}>
            <Grid container alignItems="center" justifyContent="center" mb={5}>
              <Link href="#" aria-label="theme logo">
                <Logo2 />
              </Link>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item>
                <Stack alignItems="center" justifyContent="center" spacing={4} mb={3}>
                  <Typography variant="caption" fontSize="14px" textAlign={downMD ? 'center' : 'inherit'}>
                    Welcome to Habitat. Please sign in to your account
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <AuthLogin loginProp={1} />
              </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent="center" mt={12}>
              <AuthFooter />
            </Grid>
          </AuthCardWrapper>
        </Grid>
      </Grid>
    </AuthWrapper2>
  );
};

export default Login;

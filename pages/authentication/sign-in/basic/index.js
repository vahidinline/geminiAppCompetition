import { useState } from 'react';

import Link from 'next/link';

// @mui material components
import Card from '@mui/material/Card';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import Logo from '../../../../assets/images/logo.jpg';
console.log('Logo', Logo);
// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from 'next/router';

// NextJS Material Dashboard 2 PRO components
import MDBox from '/components/MDBox';
import MDTypography from '/components/MDTypography';
import MDInput from '/components/MDInput';
import MDButton from '/components/MDButton';

// Authentication layout components
import BasicLayout from '/pagesComponents/authentication/components/BasicLayout';

// Images
import bgImage from '/assets/images/bg-sign-in-basic.jpeg';

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="#fff"
          borderRadius="lg"
          coloredShadow="dark"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center">
          <img src={Logo.src} alt="logo" width={100} height={30} />

          <MDTypography variant="h4" fontWeight="medium" color="#3f3b6c" mt={1}>
            Sign in to Smart Recovery
          </MDTypography>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: 1, mb: 2 }}></Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}>
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton
                onClick={(e) =>
                  //navigate to the dashboard

                  router.push('/dashboard/patient')
                }
                variant="gradient"
                color="dark"
                fullWidth>
                sign in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;

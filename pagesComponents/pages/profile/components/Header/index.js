import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import MDBox from '/components/MDBox';
import MDTypography from '/components/MDTypography';
import breakpoints from '/assets/theme/base/breakpoints';

function Header({
  children,
  name,
  limitations,
  weight,
  height,
  age,
  sex,
  occupation,
  activityLevel,
  previousDiagnoses,
  surgeryDetails,
  healthConditions,
}) {
  // Extract diagnoses names and surgery details
  const diagnoses = previousDiagnoses
    .map((diagnosis) => diagnosis.diagnosis)
    .join(', ');
  const surgeries = `${surgeryDetails.surgeryType} on ${surgeryDetails.dateOfSurgery}`;

  // Create the bio
  const bio = `
    ${name} is a ${age}-year-old ${sex} who works as a ${occupation}.
    With a height of ${height} cm and a weight of ${weight} kg, ${name} has a(n) ${activityLevel} activity level.
    They have been diagnosed with ${diagnoses}, and have undergone the following surgery: ${surgeries}.
    Currently, ${name} is managing the following health conditions: ${healthConditions.join(
    ', '
  )}.
    Due to these conditions, they face the following limitations: ${limitations}.
  `;

  const [tabsOrientation, setTabsOrientation] = useState('horizontal');
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation('vertical')
        : setTabsOrientation('horizontal');
    }

    window.addEventListener('resize', handleTabsOrientation);
    handleTabsOrientation();

    return () => window.removeEventListener('resize', handleTabsOrientation);
  }, []);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="2.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({
            functions: { rgba, linearGradient },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}`,
          backgroundSize: 'cover',
          backgroundPosition: '50%',
          overflow: 'hidden',
        }}
      />
      <Card
        sx={{
          position: 'relative',
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                {name}'s Medical history
              </MDTypography>
            </MDBox>
            <MDBox height="100%" mt={5.5} lineHeight={1}>
              <MDTypography variant="button" color="text" fontWeight="light">
                {bio}
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
        {children}
      </Card>
    </MDBox>
  );
}

// Setting default props for the Header
Header.defaultProps = {
  children: '',
};

// Typechecking props for the Header
Header.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  limitations: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  activityLevel: PropTypes.string.isRequired,
  previousDiagnoses: PropTypes.arrayOf(
    PropTypes.shape({
      diagnosis: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      treatment: PropTypes.string.isRequired,
    })
  ).isRequired,
  surgeryDetails: PropTypes.shape({
    surgeryType: PropTypes.string.isRequired,
    dateOfSurgery: PropTypes.string.isRequired,
    recoveryStage: PropTypes.string,
  }).isRequired,
  healthConditions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;

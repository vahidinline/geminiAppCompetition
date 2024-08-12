import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import MDBox from '/components/MDBox';
import MDTypography from '/components/MDTypography';
import breakpoints from '/assets/theme/base/breakpoints';

function Header({
  name,
  age,
  sex,
  occupation,
  weight,
  height,
  activityLevel,
  previousDiagnoses,
  pastSurgeries,
  phone,
  insuranceInformation,
  currentMedications,
  allergies,
  medicalNotes,
  diet,
  exerciseRoutine,
  smokingHabits,
  alcoholConsumption,
  otherLifestyleFactors,
}) {
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

  const bio = `
    ${name} is a ${age}-year-old ${sex} who works as a ${occupation}.
    With a height of ${height} cm and a weight of ${weight} kg, ${name} maintains a ${activityLevel} activity level.
    They have been diagnosed with ${previousDiagnoses} and have undergone the following surgery: ${pastSurgeries}.
    Currently, ${name} is managing health conditions such as ${medicalNotes}.

    Additional details include:
    - Phone: ${phone}

    - Insurance: ${insuranceInformation}
    - Current Medications: ${currentMedications}
    - Allergies: ${allergies}


    - Diet: ${diet}
    - Exercise Routine: ${exerciseRoutine}
    - Smoking Habits: ${smokingHabits}
    - Alcohol Consumption: ${alcoholConsumption}
    - Other Lifestyle Factors: ${otherLifestyleFactors}
  `;

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
                {name}'s Medical History
              </MDTypography>
            </MDBox>
            <MDBox height="100%" mt={5.5} lineHeight={1}>
              <MDTypography variant="button" color="text" fontWeight="light">
                {bio}
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
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
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  activityLevel: PropTypes.string.isRequired,
  previousDiagnoses: PropTypes.string.isRequired,
  pastSurgeries: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  emergencyContact: PropTypes.string.isRequired,
  emergencyPhone: PropTypes.string.isRequired,
  insuranceInformation: PropTypes.string.isRequired,
  currentMedications: PropTypes.string.isRequired,
  allergies: PropTypes.string.isRequired,
  medicalNotes: PropTypes.string.isRequired,
  reasonOfHospitalization: PropTypes.string.isRequired,
  dateOfAdmission: PropTypes.string.isRequired,
  dateOfDischarge: PropTypes.string.isRequired,
  lengthOfStay: PropTypes.number.isRequired,
  procedurePerformed: PropTypes.string.isRequired,
  hospitalDischargeSummary: PropTypes.string.isRequired,
  followUpInstructions: PropTypes.string.isRequired,
  diet: PropTypes.string.isRequired,
  exerciseRoutine: PropTypes.string.isRequired,
  smokingHabits: PropTypes.string.isRequired,
  alcoholConsumption: PropTypes.string.isRequired,
  otherLifestyleFactors: PropTypes.string.isRequired,
  limitations: PropTypes.string.isRequired,
};

export default Header;

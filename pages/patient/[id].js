import React, { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';

// NextJS Material Dashboard 2 PRO components
import MDBox from '/components/MDBox';
import MDTypography from '/components/MDTypography';
import MDButton from '/components/MDButton';

// NextJS Material Dashboard 2 PRO examples
import DashboardLayout from '/examples/LayoutContainers/DashboardLayout';
import Footer from '/examples/Footer';
import DefaultInfoCard from '/examples/Cards/InfoCards/DefaultInfoCard';
import MixedChart from '/examples/Charts/MixedChart';
import DefaultProjectCard from '/examples/Cards/ProjectCards/DefaultProjectCard';
// Overview page components
import Header from '/pagesComponents/pages/profile/components/Header';
import Grid from '@mui/material/Grid';
import CategoriesList from '../../examples/Lists/CategoriesList';
import RadarChart from '../../examples/Charts/RadarChart';
import { useRouter } from 'next/router';
import { Card, CircularProgress } from '@mui/material';
import MDSnackbar from '/components/MDSnackbar';

const DisplayPatientData = () => {
  //get patient id from url
  const router = useRouter();
  const { id } = router.query;
  const [patientData, setPatientData] = useState(null);
  const [status, setStatus] = useState('idle');
  const [show, setShow] = useState(false);
  console.log('status', status);
  console.log(patientData);
  const handleGetPatientDataById = () => {
    try {
      fetch(`https://aibackendfitlinez.azurewebsites.net/patient/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setPatientData(data);
        });
    } catch (error) {
      console.error('Error fetching patient data:', error);
      return null;
    }
  };

  useEffect(() => {
    handleGetPatientDataById();
  }, [id]);

  const age =
    new Date().getFullYear() - new Date(patientData?.dateOfBirth).getFullYear();
  const bio = `
    ${patientData?.firstName} is a ${age}-year-old ${patientData?.sex}..
    With a height of ${patientData?.height} cm and a weight of ${patientData?.weight} kg, ${patientData?.firstName} maintains a ${patientData?.activityLevel} activity level.
    They have been diagnosed with ${patientData?.previousDiagnoses} and have undergone the following surgery: ${patientData?.pastSurgeries}.
    Currently, ${patientData?.firstName} is managing health conditions such as ${patientData?.medicalNotes}.

    Additional details include:
    - Phone: ${patientData?.phone}

    - Insurance: ${patientData?.insuranceInformation}
    - Current Medications: ${patientData?.currentMedications}
    - Allergies: ${patientData?.allergies}


    - Diet: ${patientData?.diet}
    - Exercise Routine: ${patientData?.exerciseRoutine}
    - Smoking Habits: ${patientData?.smokingHabits}
    - Alcohol Consumption: ${patientData?.alcoholConsumption}
    - Other Lifestyle Factors: ${patientData?.otherLifestyleFactors}
  `;

  const handleGetActivityPlan = () => {
    setStatus('loading');
    setShow(true);
    try {
      fetch(
        `https://aibackendfitlinez.azurewebsites.net/patient/generateActivityPlan/${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setStatus('success');
          setShow(false);
        });
    } catch (error) {
      console.error('Error fetching activity plan:', error);
      setStatus('error');
      setShow(false);
      return null;
    }
  };

  const handleGetDietPlan = () => {
    setStatus('loading');
    setShow(true);
    try {
      fetch(
        `https://aibackendfitlinez.azurewebsites.net/patient/generateDietPlan/${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setStatus('success');
          setShow(false);
        });
    } catch (error) {
      console.error('Error fetching activity plan:', error);
      setStatus('error');
      setShow(false);
      return null;
    }
  };

  return (
    <DashboardLayout>
      <Divider />
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
                  {patientData?.firstName}'s Medical History
                </MDTypography>
              </MDBox>
              <MDBox height="100%" mt={5.5} lineHeight={1}>
                <MDTypography variant="button" color="text" fontWeight="light">
                  {bio}
                </MDTypography>
              </MDBox>
              {status !== 'success' && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '20px',
                  }}>
                  <MDButton
                    onClick={() => handleGetActivityPlan()}
                    variant="contained"
                    color="dark">
                    Get Activity Plan
                  </MDButton>
                  <MDButton
                    onClick={() => handleGetDietPlan()}
                    variant="contained"
                    color="secondary">
                    Get Diet Plan
                  </MDButton>
                </div>
              )}
              <MDSnackbar
                icon="notifications"
                title="Loading Activity Plan"
                content="Activity Plan is being generated. Please wait."
                dateTime="1 mins ago"
                open={show}
                close={() => console.log('close')}
              />
            </Grid>
          </Grid>
        </Card>
      </MDBox>

      {status === 'loading' && <CircularProgress />}
      {status === 'idle' && (
        <>
          <RadarChart
            icon={{ color: 'dark', component: 'leaderboard' }}
            title="Radar Chart"
            description="Patient Performance"
            chart={{
              labels: [
                'Exercise Adherence',
                'Dietary Adherence',
                'Pain Level',
                'Mobility Score',
                'Weight Loss',
              ],
              datasets: [
                {
                  label: 'Patient Performance',
                  color: 'dark', // Or use a color scheme relevant to your app
                  data: [0, 0, 0, 0, 0 - 2], // Example data points
                  borderDash: [0, 0], // Optional:  Add a dashed border for visual distinction
                },
              ],
            }}
          />
          <MixedChart
            icon={{ color: 'dark', component: 'leaderboard' }}
            title="Patient Diet Adherence"
            description="Daily, Weekly, and Custom Range Performance"
            chart={{
              labels: [
                'Day 1',
                'Day 2',
                'Day 3',
                'Day 4',
                'Day 5',
                'Day 6',
                'Day 7',
              ], // Example: Weekly data
              datasets: [
                {
                  chartType: 'thin-bar', // Or "gradient-line" if you prefer a line chart
                  label: 'Calorie Intake',
                  color: 'dark',
                  data: [0, 0, 0, 0, 0, 0, 0],
                },
                {
                  chartType: 'gradient-line', // Or "thin-bar" if you prefer a bar chart
                  label: 'Target Calorie Range',
                  color: 'info',
                  data: [0, 0, 0, 0, 0, 0, 0], // Example: Constant target range
                },
              ],
            }}
          />
        </>
      )}
      {status === 'success' && (
        <RadarChart
          icon={{ color: 'dark', component: 'leaderboard' }}
          title="Radar Chart"
          description="Patient Performance"
          chart={{
            labels: [
              'Exercise Adherence',
              'Dietary Adherence',
              'Pain Level',
              'Mobility Score',
              'Weight Loss',
            ],
            datasets: [
              {
                label: 'Patient Performance',
                color: 'dark', // Or use a color scheme relevant to your app
                data: [75, 90, 4, 8, -2], // Example data points
                borderDash: [5, 5], // Optional:  Add a dashed border for visual distinction
              },
            ],
          }}
        />
      )}

      {status === 'success' && (
        <MixedChart
          icon={{ color: 'dark', component: 'leaderboard' }}
          title="Patient Diet Adherence"
          description="Daily, Weekly, and Custom Range Performance"
          chart={{
            labels: [
              'Day 1',
              'Day 2',
              'Day 3',
              'Day 4',
              'Day 5',
              'Day 6',
              'Day 7',
            ], // Example: Weekly data
            datasets: [
              {
                chartType: 'thin-bar', // Or "gradient-line" if you prefer a line chart
                label: 'Calorie Intake',
                color: 'dark',
                data: [1700, 1850, 1600, 1900, 1750, 1800, 1650],
              },
              {
                chartType: 'gradient-line', // Or "thin-bar" if you prefer a bar chart
                label: 'Target Calorie Range',
                color: 'info',
                data: [1700, 1700, 1700, 1700, 1700, 1700, 1700], // Example: Constant target range
              },
            ],
          }}
        />
      )}

      {status === 'success' && (
        <CategoriesList title="Activity Plan" patientId={id} shadow={false} />
      )}

      <Footer />
    </DashboardLayout>
  );
};

export default DisplayPatientData;

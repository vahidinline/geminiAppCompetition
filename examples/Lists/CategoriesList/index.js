import Link from 'next/link';
import MDButton from '/components/MDButton';

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

// @mui material components
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import BookingCard from '/examples/Cards/BookingCard';

// NextJS Material Dashboard 2 PRO components
import MDBox from '/components/MDBox';
import MDTypography from '/components/MDTypography';
import { Image } from '@mui/icons-material';
import { useEffect, useState } from 'react';

function CategoriesList({ patientId }) {
  console.log('patientId in list', patientId);
  const [activityPlan, setActivityPlan] = useState([]);
  const [notes, setNotes] = useState([]);
  console.log('activityPlan', activityPlan);
  console.log('notes', notes);
  const renderActivityPlan = activityPlan.map(({ day, exercises, i }) => (
    <MDBox
      key={i}
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="lg"
      mb={2}
      py={0}
      pr={2}>
      <MDBox display="flex" flexDirection="column">
        {exercises.map((exercise, i) => (
          <div
            style={{
              margin: '10px',
            }}
            key={i}>
            <BookingCard
              day={day}
              image={exercise.exerciseImage}
              title={exercise.name}
              description={exercise.description}
              sets={exercise.set}
              reps={exercise.reps}
              duration={exercise.duration}
              rest={exercise.rest}
              notes={notes}
              children={
                <MDBox
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  pb={3}>
                  <MDButton size="small" variant="contained" color="success">
                    Accept
                  </MDButton>
                  <MDButton size="small" variant="contained" color="warning">
                    Reject
                  </MDButton>
                </MDBox>
              }
            />
          </div>
        ))}
      </MDBox>

      <MDBox display="flex">
        <MDTypography
          //  component={Link}
          variant="button"
          // color={color}
          // href={route}
          sx={{
            lineHeight: 0,
            transition: 'all 0.2s cubic-bezier(.34,1.61,.7,1.3)',
            p: 0.5,

            '&:hover, &:focus': {
              transform: 'translateX(5px)',
            },
          }}>
          {/* notes: {exercise.notes} */}
        </MDTypography>
      </MDBox>
    </MDBox>
  ));

  const getPatientActivityPlan = async () => {
    try {
      const response = await fetch(
        `https://aibackendfitlinez.azurewebsites.net/patient/getActivityPlan/${patientId}`
      );
      const data = await response.json();
      setActivityPlan(data.activityPlan?.activityPlan);
      setNotes(data.activityPlan?.generalNotes);
    } catch (error) {
      console.error('Error fetching patient activity plan', error);
    }
  };

  useEffect(() => {
    getPatientActivityPlan();
  }, [patientId]);

  return (
    <Card>
      <MDBox pt={2} px={2}>
        <MDTypography
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize">
          {/* {title} */}
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderActivityPlan}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Typechecking props for the CategoriesList
CategoriesList.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoriesList;

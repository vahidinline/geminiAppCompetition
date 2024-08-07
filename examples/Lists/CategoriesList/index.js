/**
=========================================================
* NextJS Material Dashboard 2 PRO - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

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

function CategoriesList({ title, activityPlan, shadow }) {
  console.log('activityPlan', activityPlan);
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
              image={exercise.image}
              title={exercise.name}
              description={exercise.description}
              sets={exercise.set}
              reps={exercise.reps}
              duration={exercise.duration}
              rest={exercise.rest}
              notes={exercise.notes}
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

  return (
    <Card>
      <MDBox pt={2} px={2}>
        <MDTypography
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize">
          {title}
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

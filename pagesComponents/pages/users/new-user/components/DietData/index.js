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

// prop-type is a library for typechecking of props
import PropTypes from 'prop-types';

// @mui material components
import Grid from '@mui/material/Grid';

// NextJS Material Dashboard 2 PRO components
import MDBox from '/components/MDBox';
import MDTypography from '/components/MDTypography';

// NewUser page components
import FormField from '/pagesComponents/pages/users/new-user/components/FormField';

function DietData({ formData }) {
  const { formField, values, errors, touched } = formData;
  const {
    diet,
    activityLevel,
    exerciseRoutine,
    smokingHabits,
    alcoholConsumption,
    otherLifestyleFactors,
  } = formField;
  const {
    diet: dietV,
    activityLevel: activityLevelV,
    exerciseRoutine: exerciseRoutineV,
    smokingHabits: smokingHabitsV,
    alcoholConsumption: alcoholConsumptionV,
    otherLifestyleFactors: otherLifestyleFactorsV,
  } = values;

  return (
    <MDBox>
      <MDTypography variant="h5" fontWeight="bold">
        Life Style Factors
      </MDTypography>
      <MDBox mt={1.625}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormField
              type={diet.type}
              label={diet.label}
              name={diet.name}
              value={dietV}
              placeholder={diet.placeholder}
              error={errors.diet && touched.diet}
              success={dietV.length > 0 && !errors.diet}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={activityLevel.type}
              label={activityLevel.label}
              name={activityLevel.name}
              value={activityLevelV}
              placeholder={activityLevel.placeholder}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={exerciseRoutine.type}
              label={exerciseRoutine.label}
              name={exerciseRoutine.name}
              value={exerciseRoutineV}
              placeholder={exerciseRoutine.placeholder}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={smokingHabits.type}
              label={smokingHabits.label}
              name={smokingHabits.name}
              value={smokingHabitsV}
              placeholder={smokingHabits.placeholder}
              error={errors.smokingHabits && touched.smokingHabits}
              success={smokingHabitsV.length > 0 && !errors.smokingHabits}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormField
              type={alcoholConsumption.type}
              label={alcoholConsumption.label}
              name={alcoholConsumption.name}
              value={alcoholConsumptionV}
              placeholder={alcoholConsumption.placeholder}
              error={errors.alcoholConsumption && touched.alcoholConsumption}
              success={
                alcoholConsumptionV.length > 0 && !errors.alcoholConsumption
              }
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormField
              type={otherLifestyleFactors.type}
              label={otherLifestyleFactors.label}
              name={otherLifestyleFactors.name}
              value={otherLifestyleFactorsV}
              placeholder={otherLifestyleFactors.placeholder}
              error={
                errors.otherLifestyleFactors && touched.otherLifestyleFactors
              }
              success={
                otherLifestyleFactorsV.length > 0 &&
                !errors.otherLifestyleFactors
              }
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for Socials
DietData.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default DietData;

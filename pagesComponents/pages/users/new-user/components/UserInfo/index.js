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

function UserInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const {
    patientID,
    firstName,
    lastName,
    dateOfBirth,
    weight,
    height,
    email,
    sex,
    phone,
    emergencyContact,
    emergencyPhone,
    insuranceInformation,
  } = formField;
  console.log('formField valuess', values);
  const {
    patientID: patientIDV,
    firstName: firstNameV,
    lastName: lastNameV,
    dateOfBirth: dateOfBirthV,
    weight: weightV,
    height: heightV,
    email: emailV,
    sex: sexV,
    phone: phoneV,
    emergencyContact: emergencyContactV,
    emergencyPhone: emergencyPhoneV,
    insuranceInformation: insuranceInformationV,
  } = values;

  return (
    <MDBox>
      <MDBox lineHeight={0}>
        <MDTypography variant="h5">Add new Patient</MDTypography>
        <MDTypography variant="button" color="text">
          Mandatory informations
        </MDTypography>
      </MDBox>
      <MDBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormField
              type={patientID.type}
              label={patientID.label}
              name={patientID.name}
              value={patientIDV}
              placeholder={patientID.placeholder}
              error={errors.patientID && touched.patientID}
              success={patientIDV.length > 0 && !errors.patientID}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={firstName.type}
              label={firstName.label}
              name={firstName.name}
              value={firstNameV}
              placeholder={firstName.placeholder}
              error={errors.firstName && touched.firstName}
              success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={lastName.type}
              label={lastName.label}
              name={lastName.name}
              value={lastNameV}
              placeholder={lastName.placeholder}
              error={errors.lastName && touched.lastName}
              success={lastNameV.length > 0 && !errors.lastName}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={weight.type}
              label={weight.label}
              name={weight.name}
              value={weightV}
              placeholder={weight.placeholder}
              error={errors.weight && touched.weight}
              success={weightV.length > 0 && !errors.weight}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={height.type}
              label={height.label}
              name={height.name}
              value={heightV}
              placeholder={height.placeholder}
              error={errors.height && touched.height}
              success={heightV.length > 0 && !errors.height}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormField
              type={sex.type}
              label={sex.label}
              name={sex.name}
              value={sexV}
              placeholder={sex.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={email.type}
              label={email.label}
              name={email.name}
              value={emailV}
              placeholder={email.placeholder}
              error={errors.email && touched.email}
              success={emailV.length > 0 && !errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={dateOfBirth.type}
              label={dateOfBirth.label}
              name={dateOfBirth.name}
              value={dateOfBirthV}
              placeholder={dateOfBirth.placeholder}
              error={errors.dateOfBirth && touched.dateOfBirth}
              success={dateOfBirthV.length > 0 && !errors.dateOfBirth}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={phone.type}
              label={phone.label}
              name={phone.name}
              value={phoneV}
              placeholder={phone.placeholder}
              error={errors.phone && touched.phone}
              success={phoneV.length > 0 && !errors.phone}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={emergencyContact.type}
              label={emergencyContact.label}
              name={emergencyContact.name}
              value={emergencyContactV}
              placeholder={emergencyContact.placeholder}
              error={errors.emergencyContact && touched.emergencyContact}
              success={emergencyContactV.length > 0 && !errors.emergencyContact}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={emergencyPhone.type}
              label={emergencyPhone.label}
              name={emergencyPhone.name}
              value={emergencyPhoneV}
              placeholder={emergencyPhone.placeholder}
              error={errors.emergencyPhone && touched.emergencyPhone}
              success={emergencyPhoneV.length > 0 && !errors.emergencyPhone}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={insuranceInformation.type}
              label={insuranceInformation.label}
              name={insuranceInformation.name}
              value={insuranceInformationV}
              placeholder={insuranceInformation.placeholder}
              error={
                errors.insuranceInformation && touched.insuranceInformation
              }
              success={
                insuranceInformationV.length > 0 && !errors.insuranceInformation
              }
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;

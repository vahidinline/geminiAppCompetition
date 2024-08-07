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
import Autocomplete from '@mui/material/Autocomplete';

// NextJS Material Dashboard 2 PRO components
import MDBox from '/components/MDBox';
import MDTypography from '/components/MDTypography';
import MDInput from '/components/MDInput';

// NewUser page components
import FormField from '/pagesComponents/pages/users/new-user/components/FormField';

function MedicalHistory({ formData }) {
  const { formField, values, errors, touched } = formData;
  const {
    previousDiagnoses,
    pastSurgeries,
    currentMedications,
    allergies,
    medicalNotes,
    reasonOfHospitalization,
    dateOfAdmission,
    dateOfDischarge,
    lengthOfStay,
    prcedurePerformed,
    hospitalDischargeSummary,
    followUpInstructions,
  } = formField;
  const {
    previousDiagnoses: previousDiagnosesV,
    pastSurgeries: pastSurgeriesV,
    currentMedications: currentMedicationsV,
    allergies: allergiesV,
    medicalNotes: medicalNotesV,
    reasonOfHospitalization: reasonOfHospitalizationV,
    dateOfAdmission: dateOfAdmissionV,
    dateOfDischarge: dateOfDischargeV,
    lengthOfStay: lengthOfStayV,
    prcedurePerformed: prcedurePerformedV,
    hospitalDischargeSummary: hospitalDischargeSummaryV,
    followUpInstructions: followUpInstructionsV,
  } = values;

  return (
    <MDBox>
      <MDTypography variant="h5" fontWeight="bold">
        Medical History
      </MDTypography>
      <MDBox>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormField
              type={previousDiagnoses.type}
              label={previousDiagnoses.label}
              name={previousDiagnoses.name}
              value={previousDiagnosesV}
              placeholder={previousDiagnoses.placeholder}
              error={errors.previousDiagnoses && touched.previousDiagnoses}
              success={
                previousDiagnosesV.length > 0 && !errors.previousDiagnoses
              }
            />
          </Grid>
          <Grid item xs={6}>
            <MDBox>
              <FormField
                type={pastSurgeries.type}
                label={pastSurgeries.label}
                name={pastSurgeries.name}
                value={pastSurgeriesV}
                placeholder={pastSurgeries.placeholder}
                error={errors.pastSurgeries && touched.pastSurgeries}
                success={pastSurgeriesV.length > 0 && !errors.pastSurgeries}
              />
            </MDBox>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormField
              type={currentMedications.type}
              label={currentMedications.label}
              name={currentMedications.name}
              value={currentMedicationsV}
              placeholder={currentMedications.placeholder}
              error={errors.currentMedications && touched.currentMedications}
              success={
                currentMedicationsV.length > 0 && !errors.currentMedications
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <FormField
              type={allergies.type}
              label={allergies.label}
              name={allergies.name}
              value={allergiesV}
              placeholder={allergies.placeholder}
              error={errors.allergies && touched.allergies}
              success={allergiesV.length > 0 && !errors.allergies}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormField
              type={lengthOfStay.type}
              label={lengthOfStay.label}
              name={lengthOfStay.name}
              value={lengthOfStayV}
              placeholder={lengthOfStay.placeholder}
              error={errors.lengthOfStay && touched.lengthOfStay}
              success={lengthOfStayV.length > 0 && !errors.lengthOfStay}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormField
              type={dateOfAdmission.type}
              label={dateOfAdmission.label}
              name={dateOfAdmission.name}
              value={dateOfAdmissionV}
              placeholder={allergies.placeholder}
              error={errors.dateOfAdmission && touched.dateOfAdmission}
              success={dateOfAdmissionV.length > 0 && !errors.dateOfAdmission}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormField
              type={dateOfDischarge.type}
              label={dateOfDischarge.label}
              name={dateOfDischarge.name}
              value={dateOfDischargeV}
              placeholder={dateOfDischarge.placeholder}
              error={errors.dateOfDischarge && touched.dateOfDischarge}
              success={dateOfDischargeV.length > 0 && !errors.dateOfDischarge}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormField
              type={reasonOfHospitalization.type}
              label={reasonOfHospitalization.label}
              name={reasonOfHospitalization.name}
              value={reasonOfHospitalizationV}
              placeholder={reasonOfHospitalization.placeholder}
              error={
                errors.reasonOfHospitalization &&
                touched.reasonOfHospitalization
              }
              success={
                reasonOfHospitalizationV.length > 0 &&
                !errors.reasonOfHospitalization
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={prcedurePerformed.type}
              label={prcedurePerformed.label}
              name={prcedurePerformed.name}
              value={prcedurePerformedV}
              placeholder={prcedurePerformed.placeholder}
              error={errors.prcedurePerformed && touched.prcedurePerformed}
              success={
                prcedurePerformedV.length > 0 && !errors.reasonOfHospitalization
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={hospitalDischargeSummary.type}
              label={hospitalDischargeSummary.label}
              name={hospitalDischargeSummary.name}
              value={hospitalDischargeSummaryV}
              placeholder={hospitalDischargeSummary.placeholder}
              error={
                errors.hospitalDischargeSummary &&
                touched.hospitalDischargeSummary
              }
              success={
                hospitalDischargeSummaryV.length > 0 &&
                !errors.reasonOfHospitalization
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={followUpInstructions.type}
              label={followUpInstructions.label}
              name={followUpInstructions.name}
              value={followUpInstructionsV}
              placeholder={followUpInstructions.placeholder}
              error={
                errors.followUpInstructions && touched.followUpInstructions
              }
              success={
                followUpInstructionsV.length > 0 &&
                !errors.reasonOfHospitalization
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={medicalNotes.type}
              label={medicalNotes.label}
              name={medicalNotes.name}
              value={medicalNotesV}
              placeholder={medicalNotes.placeholder}
              error={errors.medicalNotes && touched.medicalNotes}
              success={
                medicalNotesV.length > 0 && !errors.reasonOfHospitalization
              }
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

MedicalHistory.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default MedicalHistory;

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

import checkout from '/pagesComponents/pages/users/new-user/schemas/form';

const {
  formField: {
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
    diet,
    activityLevel,
    exerciseRoutine,
    smokingHabits,
    alcoholConsumption,
    otherLifestyleFactors,
  },
} = checkout;

const initialValues = {
  [patientID.name]: '',
  [firstName.name]: '',
  [lastName.name]: '',
  [dateOfBirth.name]: '',
  [weight.name]: '',
  [height.name]: '',
  [email.name]: '',
  [phone.name]: '',
  [sex.name]: '',
  [emergencyContact.name]: '',
  [emergencyPhone.name]: '',
  [insuranceInformation.name]: '',
  [previousDiagnoses.name]: '',
  [pastSurgeries.name]: '',
  [currentMedications.name]: '',
  [allergies.name]: '',
  [medicalNotes.name]: '',
  [reasonOfHospitalization.name]: '',
  [dateOfAdmission.name]: '',
  [dateOfDischarge.name]: '',
  [lengthOfStay.name]: '',
  [prcedurePerformed.name]: '',
  [hospitalDischargeSummary.name]: '',
  [followUpInstructions.name]: '',
  [diet.name]: '',
  [activityLevel.name]: '',
  [exerciseRoutine.name]: '',
  [smokingHabits.name]: '',
  [alcoholConsumption.name]: '',
  [otherLifestyleFactors.name]: '',
};

export default initialValues;

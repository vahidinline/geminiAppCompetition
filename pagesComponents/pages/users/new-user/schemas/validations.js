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

import * as Yup from 'yup';
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

const validations = [
  Yup.object().shape({
    [patientID.name]: Yup.string()
      .required(patientID.errorMsg)
      .default('123456'),
    [firstName.name]: Yup.string().required(firstName.errorMsg).default('John'),
    [lastName.name]: Yup.string().required(lastName.errorMsg).default('Doe'),
    [email.name]: Yup.string()
      .required(email.errorMsg)
      .email(email.invalidMsg)
      .default('johndoe@example.com'),
    [weight.name]: Yup.string().required(weight.errorMsg).default('80 kg'),
    [height.name]: Yup.string().required(height.errorMsg).default('180 cm'),
    [phone.name]: Yup.string().required(phone.errorMsg).default('123-456-7890'),
    [sex.name]: Yup.string().required(sex.errorMsg).default('Male'),
    [emergencyContact.name]: Yup.string()
      .required(emergencyContact.errorMsg)
      .default('Jane Doe'),
    [emergencyPhone.name]: Yup.string()
      .required(emergencyPhone.errorMsg)
      .default('098-765-4321'),
    [insuranceInformation.name]: Yup.string()
      .required(insuranceInformation.errorMsg)
      .default('Provider X - Policy 1234'),
    [dateOfBirth.name]: Yup.string()
      .required(dateOfBirth.errorMsg)
      .default('1990-01-01'),
  }),

  Yup.object().shape({
    [previousDiagnoses.name]: Yup.string()
      .required(previousDiagnoses.errorMsg)
      .default('None'),
    [pastSurgeries.name]: Yup.string()
      .required(pastSurgeries.errorMsg)
      .default('Appendectomy'),
    [currentMedications.name]: Yup.string()
      .required(currentMedications.errorMsg)
      .default('Ibuprofen'),
    [allergies.name]: Yup.string().required(allergies.errorMsg).default('None'),
    [medicalNotes.name]: Yup.string()
      .required(medicalNotes.errorMsg)
      .default('N/A'),
    [reasonOfHospitalization.name]: Yup.string()
      .required(reasonOfHospitalization.errorMsg)
      .default('Routine Checkup'),
    [dateOfAdmission.name]: Yup.string()
      .required(dateOfAdmission.errorMsg)
      .default('2024-07-01'),
    [dateOfDischarge.name]: Yup.string()
      .required(dateOfDischarge.errorMsg)
      .default('2024-07-10'),
    [lengthOfStay.name]: Yup.string()
      .required(lengthOfStay.errorMsg)
      .default('10 days'),
    [prcedurePerformed.name]: Yup.string()
      .required(prcedurePerformed.errorMsg)
      .default('None'),
    [hospitalDischargeSummary.name]: Yup.string()
      .required(hospitalDischargeSummary.errorMsg)
      .default('Patient stable'),
    [followUpInstructions.name]: Yup.string()
      .required(followUpInstructions.errorMsg)
      .default('Follow up in 6 months'),
  }),

  Yup.object().shape({
    [diet.name]: Yup.string().required(diet.errorMsg).default('Balanced diet'),
    [activityLevel.name]: Yup.string()
      .required(activityLevel.errorMsg)
      .default('Moderate'),
    [exerciseRoutine.name]: Yup.string()
      .required(exerciseRoutine.errorMsg)
      .default('Jogging 3 times a week'),
    [smokingHabits.name]: Yup.string()
      .required(smokingHabits.errorMsg)
      .default('Non-smoker'),
    [alcoholConsumption.name]: Yup.string()
      .required(alcoholConsumption.errorMsg)
      .default('Occasional'),
    [otherLifestyleFactors.name]: Yup.string()
      .required(otherLifestyleFactors.errorMsg)
      .default('None'),
  }),
];

export default validations;

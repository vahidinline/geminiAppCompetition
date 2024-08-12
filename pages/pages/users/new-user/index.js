import { useState } from 'react';
import { Formik, Form } from 'formik';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import MDBox from '/components/MDBox';
import MDButton from '/components/MDButton';
import DashboardLayout from '/examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from '/examples/Navbars/DashboardNavbar';
import Footer from '/examples/Footer';
import UserInfo from '/pagesComponents/pages/users/new-user/components/UserInfo';
import MedicalHistory from '/pagesComponents/pages/users/new-user/components/MedicalHistory';
import DietData from '/pagesComponents/pages/users/new-user/components/DietData';
import validations from '/pagesComponents/pages/users/new-user/schemas/validations';
import form from '/pagesComponents/pages/users/new-user/schemas/form';
import initialValues from '/pagesComponents/pages/users/new-user/schemas/initialValues';

function getSteps() {
  return ['Patient Info', 'Medical History', 'Lifestyle Factors'];
}

function getStepContent(stepIndex, formData) {
  switch (stepIndex) {
    case 0:
      return <UserInfo formData={formData} />;
    case 1:
      return <MedicalHistory formData={formData} />;
    case 2:
      return <DietData formData={formData} />;
    default:
      return null;
  }
}

function NewUser() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  const handleBack = () => setActiveStep(activeStep - 1);

  const submitForm = async (values, actions) => {
    await sleep(1000);

    try {
      // Send the form data to the backend
      const response = await fetch(
        `https://aibackendfitlinez.azurewebsites.net/patient`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Patient created successfully:', data);

      // Optionally, you can show a success message or redirect the user
    } catch (error) {
      console.error('Error creating patient:', error);
      // Optionally, show an error message to the user
    }

    actions.setSubmitting(false);
    actions.resetForm();
    setActiveStep(0);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3} mb={20} height="65vh">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: '100%', mt: 8 }}>
          <Grid item xs={12} lg={8}>
            <Formik
              initialValues={initialValues}
              validationSchema={currentValidation}
              onSubmit={handleSubmit}>
              {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                  <Card sx={{ height: '100%' }}>
                    <MDBox mx={2} mt={-3}>
                      <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                          <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                          </Step>
                        ))}
                      </Stepper>
                    </MDBox>
                    <MDBox p={3}>
                      <MDBox>
                        {getStepContent(activeStep, {
                          values,
                          touched,
                          formField,
                          errors,
                        })}
                        <MDBox
                          mt={2}
                          width="100%"
                          display="flex"
                          justifyContent="space-between">
                          {activeStep === 0 ? (
                            <MDBox />
                          ) : (
                            <MDButton
                              variant="gradient"
                              color="light"
                              onClick={handleBack}>
                              back
                            </MDButton>
                          )}
                          <MDButton
                            // disabled={isSubmitting}
                            type="submit"
                            variant="gradient"
                            color="dark">
                            {isLastStep ? 'send' : 'next'}
                          </MDButton>
                        </MDBox>
                      </MDBox>
                    </MDBox>
                  </Card>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default NewUser;

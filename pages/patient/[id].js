import React from 'react';
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

const patientData = {
  patient: {
    firstName: 'John',
    lastName: 'Doe',
    age: 58,
    sex: 'Male',
    height: 180,
    weight: 95,
    occupation: 'Retired',
    activityLevel: 'Moderate',
    insuranceInformation: [
      {
        provider: 'Blue Cross Blue Shield',
        policyNumber: '123456789',
        groupNumber: '987654321',
      },
    ],
    previousDiagnoses: [
      {
        diagnosis: 'Hypertension',
        date: '2021-05-15',
        treatment: 'Medication, lifestyle changes',
      },
      {
        diagnosis: 'Diabetes',
        date: '2020-08-10',
        treatment: 'Insulin, diet control',
      },
    ],
    surgeryDetails: {
      surgeryType: 'Total Knee Replacement',
      dateOfSurgery: '2023-10-20',
      recoveryStage: 'Early Recovery',
    },

    healthConditions: ['Hypertension', 'Diabetes'],
    limitations: 'Limited knee range of motion, some swelling',
    goals: ['Regain full knee mobility', 'Reduce pain', 'Increase strength'],
    preferences: ['Walking', 'Cycling (stationary)', 'Swimming'],
  },
  activityPlan: [
    {
      day: 1,
      exercises: [
        {
          name: 'Knee Extension Exercises',
          image:
            'https://storage.googleapis.com/backend.fitlinez.com/knee-extension.gif',
          description:
            'Lie on your back with your legs extended. Tighten your thigh muscles and slowly straighten your operated leg, keeping it in line with your other leg. Hold for 5 seconds, then slowly lower it back down.',
          sets: 3,
          reps: 10,
          duration: 'Hold for 5 seconds each rep',
          rest: '30 seconds between sets',
          notes:
            'Start with a smaller range of motion and gradually increase as your knee flexibility improves.',
        },
        {
          name: 'Heel Slides',
          image:
            'https://backend.fitlinez.com/appgifs/alternate-heel-touchers.gif',
          description:
            'Lie on your back with your legs straight. Bend your operated knee and slide your heel towards your buttocks. Hold for 5 seconds, then slowly slide your heel back down.',
          sets: 3,
          reps: 10,
          duration: 'Hold for 5 seconds each rep',
          rest: '30 seconds between sets',
          notes: 'Avoid pushing your knee past your comfort level.',
        },
      ],
    },
    {
      day: 2,
      exercises: [
        {
          name: 'Ankle Pumps',
          image:
            'https://www.inspireusafoundation.org/wp-content/uploads/2022/10/band-calf-flexion.gif',
          description:
            'Sit with your feet flat on the floor. Point your toes up, then point them down.',
          sets: 3,
          reps: 15,
          duration: 'Hold each position for 2 seconds',
          rest: '30 seconds between sets',
          notes: 'This helps improve blood circulation and ankle flexibility.',
        },
        {
          name: 'Quadriceps Strengthening',
          image:
            'https://backend.fitlinez.com/appgifs/quadriceps-stretch.gif?alt=media&token=3e0cc996-e87b-4591-b9ac-609e57fbadcc',
          description:
            'Stand with your feet shoulder-width apart and hold onto a chair for support. Slowly bend your operated knee, bringing your heel towards your buttocks. Hold for 5 seconds, then slowly straighten your leg.',
          sets: 3,
          reps: 10,
          duration: 'Hold for 5 seconds each rep',
          rest: '30 seconds between sets',
          notes: 'Avoid bending your knee past your comfort level.',
        },
      ],
    },
    {
      day: 3,
      exercises: [
        {
          name: 'Straight Leg Raises',
          image:
            'https://www.inspireusafoundation.org/wp-content/uploads/2022/06/lying-leg-raise.gif',
          description:
            'Lie on your back with your legs extended. Tighten your thigh muscles and lift your operated leg about 12 inches off the floor. Hold for 5 seconds, then slowly lower it back down.',
          sets: 3,
          reps: 10,
          duration: 'Hold for 5 seconds each rep',
          rest: '30 seconds between sets',
          notes:
            'Use a towel under your knee for support if needed. Avoid lifting your leg too high.',
        },
        {
          name: 'Calf Raises',
          image:
            'https://www.inspireusafoundation.org/wp-content/uploads/2023/03/donkey-calf-raise.gif',
          description:
            'Stand with your feet shoulder-width apart and hold onto a chair for support. Slowly raise up onto your toes, lifting your heels off the ground. Hold for 5 seconds, then slowly lower back down.',
          sets: 3,
          reps: 10,
          duration: 'Hold for 5 seconds each rep',
          rest: '30 seconds between sets',
          notes: 'Avoid locking your knees at the top of the movement.',
        },
      ],
      notes:
        'Rest Day / Light Activity: Gentle walking for 15-20 minutes, light stretching, or a relaxing swim.',
    },
    {
      day: 4,
      exercises: [
        {
          name: 'Hamstring Strengthening',
          image:
            'https://www.inspireusafoundation.org/wp-content/uploads/2021/08/sliding-leg-curl-with-towel.gif',
          description:
            'Sit on a chair with your feet flat on the floor. Extend your operated leg straight out in front of you. Tighten your hamstring muscles and slowly bend your knee, bringing your heel towards your buttocks. Hold for 5 seconds, then slowly straighten your leg.',
          sets: 3,
          reps: 10,
          duration: 'Hold for 5 seconds each rep',
          rest: '30 seconds between sets',
          notes: 'Avoid pushing your knee past your comfort level.',
        },
        {
          name: 'Calf Raises',
          image:
            'https://www.inspireusafoundation.org/wp-content/uploads/2023/03/donkey-calf-raise.gif',
          description:
            'Stand with your feet shoulder-width apart and hold onto a chair for support. Slowly raise up onto your toes, focusing on your calf muscles. Hold for 2 seconds, then slowly lower back down.',
          sets: 3,
          reps: 15,
          duration: 'Hold for 2 seconds each rep',
          rest: '30 seconds between sets',
          notes:
            'If this feels too challenging, perform calf raises while sitting on a chair.',
        },
      ],
    },
    {
      day: 5,
      exercises: [
        {
          name: 'Stationary Cycling',
          image:
            'https://www.inspireusafoundation.org/wp-content/uploads/2022/07/exercise-bike.gif',
          description:
            'Use a stationary bike and adjust the resistance to a comfortable level. Start with 10 minutes and gradually increase the duration as you feel stronger.',
        },
        {
          name: 'Swimming',
          description:
            'Focus on swimming laps or using water resistance exercises for a gentle workout.',
        },
      ],
    },
    {
      day: 6,
      exercises: [
        {
          name: 'Stretching Routine',
          description:
            'Focus on stretching exercises for your hips, hamstrings, and quadriceps, paying attention to your knee range of motion.',
        },
      ],
      notes:
        'Rest Day / Light Activity: Gentle walking for 15-20 minutes, light stretching, or a relaxing swim.',
    },
    {
      day: 7,
      exercises: [
        {
          name: 'Stretching Routine',
          description:
            "Focus on stretching exercises for your hips, hamstrings, and quadriceps, paying attention to your knee's range of motion.",
        },
      ],
    },
  ],
  generalNotes: [
    'Always consult with your doctor or physical therapist before starting any new exercise program, especially after surgery.',
    'Listen to your body and stop if you feel any pain. If you experience pain, swelling, or any other unusual symptoms, consult with your doctor.',
    'Stay hydrated by drinking plenty of water throughout the day.',
    'Gradually increase the intensity and duration of your exercises as your knee strength and flexibility improve.',
    'Be patient with your recovery. It takes time to regain full mobility and strength after surgery.',
  ],
};

const DisplayPatientData = () => {
  const { patient, activityPlan, generalNotes } = patientData;

  return (
    <DashboardLayout>
      <Header
        name={patient.firstName + ' ' + patient.lastName}
        limitations={patient.limitations}
        height={patient.height}
        weight={patient.weight}
        age={patient.age}
        sex={patient.sex}
        occupation={patient.occupation}
        activityLevel={patient.activityLevel}
        previousDiagnoses={patient.previousDiagnoses}
        surgeryDetails={patient.surgeryDetails}
        goals={patient.goals}
        preferences={patient.preferences}
        healthConditions={patient.healthConditions}>
        <Divider />
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
        {/* <DefaultInfoCard
          // icon="account_balance"
          title="Insurance Information"
          description={patient.insuranceInformation[0].provider}
          //value={patient.insuranceInformation[0].policyNumber}
        /> */}
        <CategoriesList
          title="Activity Plan"
          activityPlan={activityPlan}
          shadow={false}
        />
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
      </Header>
      <Footer />
    </DashboardLayout>
  );
};

export default DisplayPatientData;

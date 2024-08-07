const radarChartData = {
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
};

export default radarChartData;

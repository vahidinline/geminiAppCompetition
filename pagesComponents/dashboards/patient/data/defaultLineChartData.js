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

const defaultLineChartData = {
  labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Medication Compliance',
      color: 'error',
      data: [59, 78, 45, 49, 40, 35, 20, 14, 15],
    },
    {
      label: 'Mobility Score',
      color: 'success',
      data: [10, 30, 40, 120, 150, 220, 280, 250, 280],
    },
  ],
};

export default defaultLineChartData;

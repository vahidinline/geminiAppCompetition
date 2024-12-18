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

// Countries flags
import US from '/assets/images/icons/flags/US.png';
import DE from '/assets/images/icons/flags/DE.png';
import GB from '/assets/images/icons/flags/GB.png';
import BR from '/assets/images/icons/flags/BR.png';
import AU from '/assets/images/icons/flags/AU.png';

const patientTableData = [
  {
    country: [US, 'united state'],
    patient: 2500,
    bounce: '29.9%',
  },
  {
    country: [DE, 'germany'],
    patient: '3.900',
    bounce: '40.22%',
  },
  {
    country: [GB, 'great britain'],
    patient: '1.400',
    bounce: '23.44%',
  },
  { country: [BR, 'brasil'], patient: 562, bounce: '32.14%' },
  { country: [AU, 'australia'], patient: 400, bounce: '56.83%' },
];

export default patientTableData;

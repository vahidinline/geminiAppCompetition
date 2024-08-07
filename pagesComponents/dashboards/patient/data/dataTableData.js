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

// patient dashboard components
import ProductCell from '/pagesComponents/dashboards/patient/components/ProductCell';
import RefundsCell from '/pagesComponents/dashboards/patient/components/RefundsCell';
import DefaultCell from '/pagesComponents/dashboards/patient/components/DefaultCell';

// Images
import nikeV22 from '/assets/images/ecommerce/blue-shoe.jpeg';
import businessKit from '/assets/images/ecommerce/black-mug.jpeg';
import blackChair from '/assets/images/ecommerce/black-chair.jpeg';
import wirelessCharger from '/assets/images/ecommerce/bang-sound.jpeg';
import tripKit from '/assets/images/ecommerce/photo-tools.jpeg';
import { Link } from '@mui/material';

const dataTableData = {
  columns: [
    { Header: 'name', accessor: 'name', width: '15%' },
    { Header: 'diagnosis', accessor: 'diagnosis', width: '35%' },
    { Header: 'Discharge date', accessor: 'dischargeDate', align: 'center' },
    { Header: 'gender', accessor: 'gender', align: 'center' },
    { Header: 'age', accessor: 'age', align: 'center' },
    { Header: 'actions', accessor: 'actions', align: 'center' },
  ],

  rows: [
    {
      name: <DefaultCell>John Dou</DefaultCell>,
      diagnosis: <DefaultCell>Total Knee Replacement</DefaultCell>,
      dischargeDate: <DefaultCell>11 - Aug - 2024</DefaultCell>,
      gender: <DefaultCell>Male</DefaultCell>,
      age: <DefaultCell>45</DefaultCell>,
      actions: (
        <DefaultCell>
          <Link href="/patient">View</Link>
        </DefaultCell>
      ),
    },
    {
      product: (
        <ProductCell
          image={businessKit}
          name="Business Kit (Mug + Notebook)"
          orders={12.821}
        />
      ),
      value: <DefaultCell>$80.250</DefaultCell>,
      adsSpent: <DefaultCell>$4.200</DefaultCell>,
      refunds: (
        <RefundsCell
          value={40}
          icon={{ color: 'error', name: 'keyboard_arrow_down' }}
        />
      ),
    },
    {
      product: (
        <ProductCell image={blackChair} name="Black Chair" orders={2.421} />
      ),
      value: <DefaultCell>$40.600</DefaultCell>,
      adsSpent: <DefaultCell>$9.430</DefaultCell>,
      refunds: (
        <RefundsCell
          value={54}
          icon={{ color: 'success', name: 'keyboard_arrow_up' }}
        />
      ),
    },
    {
      product: (
        <ProductCell
          image={wirelessCharger}
          name="Wireless Charger"
          orders={5.921}
        />
      ),
      value: <DefaultCell>$91.300</DefaultCell>,
      adsSpent: <DefaultCell>$7.364</DefaultCell>,
      refunds: (
        <RefundsCell
          value={5}
          icon={{ color: 'error', name: 'keyboard_arrow_down' }}
        />
      ),
    },
    {
      product: (
        <ProductCell
          image={tripKit}
          name="Mountain Trip Kit (Camera + Backpack)"
          orders={921}
        />
      ),
      value: <DefaultCell>$140.925</DefaultCell>,
      adsSpent: <DefaultCell>$20.531</DefaultCell>,
      refunds: (
        <RefundsCell
          value={121}
          icon={{ color: 'success', name: 'keyboard_arrow_up' }}
        />
      ),
    },
  ],
};

export default dataTableData;

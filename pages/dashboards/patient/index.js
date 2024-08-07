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

import { useEffect, useState } from 'react';

// @mui material components
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Icon from '@mui/material/Icon';
import Card from '@mui/material/Card';

// NextJS Material Dashboard 2 PRO components
import MDBox from '/components/MDBox';
import MDBadgeDot from '/components/MDBadgeDot';
import MDButton from '/components/MDButton';
import MDTypography from '/components/MDTypography';

// NextJS Material Dashboard 2 PRO examples
import DashboardLayout from '/examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from '/examples/Navbars/DashboardNavbar';
import Footer from '/examples/Footer';
import DefaultStatisticsCard from '/examples/Cards/StatisticsCards/DefaultStatisticsCard';
import DefaultLineChart from '/examples/Charts/LineCharts/DefaultLineChart';
import HorizontalBarChart from '/examples/Charts/BarCharts/HorizontalBarChart';
import PatientTable from '/examples/Tables/PatientTable';
import DataTable from '/examples/Tables/DataTable';

// patient dashboard components
import ChannelsChart from '/pagesComponents/dashboards/patient/components/ChannelsChart';

// Data
import defaultLineChartData from '/pagesComponents/dashboards/patient/data/defaultLineChartData';
import horizontalBarChartData from '/pagesComponents/dashboards/patient/data/horizontalBarChartData';
import patientTableData from '/pagesComponents/dashboards/patient/data/patientTableData';
import dataTableData from '/pagesComponents/dashboards/patient/data/dataTableData';

function patient() {
  // DefaultStatisticsCard state for the dropdown value
  const [patientDropdownValue, setpatientDropdownValue] =
    useState('6 May - 7 May');
  const [customersDropdownValue, setCustomersDropdownValue] =
    useState('6 May - 7 May');
  const [revenueDropdownValue, setRevenueDropdownValue] =
    useState('6 May - 7 May');

  // DefaultStatisticsCard state for the dropdown action
  const [patientDropdown, setpatientDropdown] = useState(null);
  const [customersDropdown, setCustomersDropdown] = useState(null);
  const [revenueDropdown, setRevenueDropdown] = useState(null);
  const [patientList, setPatientList] = useState([]);

  // DefaultStatisticsCard handler for the dropdown action
  const openpatientDropdown = ({ currentTarget }) =>
    setpatientDropdown(currentTarget);
  const closepatientDropdown = ({ currentTarget }) => {
    setpatientDropdown(null);
    setpatientDropdownValue(currentTarget.innerText || patientDropdownValue);
  };
  const openCustomersDropdown = ({ currentTarget }) =>
    setCustomersDropdown(currentTarget);
  const closeCustomersDropdown = ({ currentTarget }) => {
    setCustomersDropdown(null);
    setCustomersDropdownValue(currentTarget.innerText || patientDropdownValue);
  };
  const openRevenueDropdown = ({ currentTarget }) =>
    setRevenueDropdown(currentTarget);
  const closeRevenueDropdown = ({ currentTarget }) => {
    setRevenueDropdown(null);
    setRevenueDropdownValue(currentTarget.innerText || patientDropdownValue);
  };

  const handleGetAllPatients = () => {
    console.log('Get all patients');
    try {
      fetch('http://localhost:8090/patient')
        .then((response) => response.json())
        .then((data) => {
          console.log('data', data);
          setPatientList(data);
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    handleGetAllPatients();
  }, []);
  // Dropdown menu template for the DefaultStatisticsCard
  const renderMenu = (state, close) => (
    <Menu
      anchorEl={state}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={Boolean(state)}
      onClose={close}
      keepMounted
      disableAutoFocusItem>
      <MenuItem onClick={close}>Last 7 days</MenuItem>
      <MenuItem onClick={close}>Last week</MenuItem>
      <MenuItem onClick={close}>Last 30 days</MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <DefaultStatisticsCard
                title="patients"
                count="73"
                percentage={{
                  color: 'success',
                  value: '+55%',
                  label: 'since last month',
                }}
                dropdown={{
                  action: openpatientDropdown,
                  menu: renderMenu(patientDropdown, closepatientDropdown),
                  value: patientDropdownValue,
                }}
              />
            </Grid>
            {/* <Grid item xs={12} sm={4}>
              <DefaultStatisticsCard
                title="customers"
                count="3.200"
                percentage={{
                  color: 'success',
                  value: '+12%',
                  label: 'since last month',
                }}
                dropdown={{
                  action: openCustomersDropdown,
                  menu: renderMenu(customersDropdown, closeCustomersDropdown),
                  value: customersDropdownValue,
                }}
              />
            </Grid> */}
            {/* <Grid item xs={12} sm={4}>
              <DefaultStatisticsCard
                title="avg. revenue"
                count="$1.200"
                percentage={{
                  color: 'secondary',
                  value: '200',
                  label: 'since last month',
                }}
                dropdown={{
                  action: openRevenueDropdown,
                  menu: renderMenu(revenueDropdown, closeRevenueDropdown),
                  value: revenueDropdownValue,
                }}
              />
            </Grid> */}
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} sm={6} lg={4}>
              <DefaultLineChart
                title="Treatment Adherence Chart"
                description={
                  <MDBox display="flex" justifyContent="space-between">
                    <MDBox display="flex" ml={-1}>
                      <MDBadgeDot
                        color="info"
                        size="sm"
                        badgeContent="Medication Compliance"
                      />
                    </MDBox>
                    <MDBox mt={-4} mr={-1} position="absolute" right="1.5rem">
                      <Tooltip
                        title="See which ads perform better"
                        placement="left"
                        arrow>
                        <MDButton
                          variant="outlined"
                          color="secondary"
                          size="small"
                          circular
                          iconOnly>
                          <Icon>priority_high</Icon>
                        </MDButton>
                      </Tooltip>
                    </MDBox>
                  </MDBox>
                }
                chart={defaultLineChartData}
              />
            </Grid> */}
            <Grid item xs={12} sm={12} lg={12}>
              <DefaultLineChart
                title="Patient Progress Chart"
                description={
                  <MDBox display="flex" justifyContent="space-between">
                    <MDBox display="flex" ml={-1}>
                      <MDBadgeDot
                        color="info"
                        size="sm"
                        badgeContent="Medication Compliance"
                      />
                    </MDBox>
                    <MDBox display="flex" ml={-1}>
                      <MDBadgeDot
                        color="dark"
                        size="sm"
                        badgeContent="Mobility Score"
                      />
                    </MDBox>
                    <MDBox mt={-4} mr={-1} position="absolute" right="1.5rem">
                      <Tooltip
                        title="See which ads perform better"
                        placement="left"
                        arrow>
                        <MDButton
                          variant="outlined"
                          color="secondary"
                          size="small"
                          circular
                          iconOnly>
                          <Icon>priority_high</Icon>
                        </MDButton>
                      </Tooltip>
                    </MDBox>
                  </MDBox>
                }
                chart={defaultLineChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <HorizontalBarChart
                title="Patient by age"
                chart={horizontalBarChartData}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <PatientTable title="Patient by Gender" rows={patientTableData} />
            </Grid>
          </Grid>
        </MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox pt={3} px={3}>
                <MDTypography variant="h6" fontWeight="medium">
                  Patient list
                </MDTypography>
              </MDBox>
              <MDBox py={1}>
                <DataTable
                  patientList={patientList}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  isSorted={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default patient;

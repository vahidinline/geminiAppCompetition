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

import Link from 'next/link';

// prop-types is library for typechecking of props
import PropTypes from 'prop-types';

// @mui material components
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Icon from '@mui/material/Icon';

// NextJS Material Dashboard 2 PRO components
import MDBox from '/components/MDBox';
import MDTypography from '/components/MDTypography';

// NextJS Material Dashboard 2 PRO base styles
import colors from '/assets/theme/base/colors';
import typography from '/assets/theme/base/typography';

function ProfileInfoCard({
  title,
  description,
  info,
  previousDiagnoses,
  insuranceInformation,
  shadow,
}) {
  const labels = [];
  const values = [];
  const { socialMediaColors } = colors;
  const { size } = typography;

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(
        uppercaseLetter,
        ` ${uppercaseLetter.toLowerCase()}`
      );

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <MDBox key={label} display="flex" py={1} pr={2}>
      <MDTypography
        variant="button"
        fontWeight="bold"
        textTransform="capitalize">
        {label}: &nbsp;
      </MDTypography>
      <MDTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </MDTypography>
    </MDBox>
  ));

  // Render the card social media icons
  const renderPreviousDiagnoses = previousDiagnoses.map(
    ({ diagnosis, date, treatment, i }) => (
      <MDBox
        key={i}
        component="a"
        //href={link}
        target="_blank"
        rel="noreferrer"
        fontSize={size.lg}
        // color={socialMediaColors[color].main}
        pr={1}
        pl={0.5}
        lineHeight={1}>
        <MDTypography
          variant="button"
          fontWeight="bold"
          textTransform="capitalize">
          {diagnosis}
        </MDTypography>
      </MDBox>
    )
  );

  const renderInsuranceInformation = insuranceInformation.map(
    ({ provider, policyNumber, groupNumber, i }) => (
      <MDBox
        key={i}
        component="a"
        //href={link}
        target="_blank"
        rel="noreferrer"
        fontSize={size.lg}
        // color={socialMediaColors[color].main}
        pr={1}
        pl={0.5}
        lineHeight={1}>
        <MDTypography
          variant="button"
          fontWeight="bold"
          textTransform="capitalize">
          {provider}
        </MDTypography>
      </MDBox>
    )
  );

  return (
    <Card sx={{ height: '100%', boxShadow: !shadow && 'none' }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
        px={2}>
        <MDTypography
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize">
          {title}
        </MDTypography>
        {/* <Link href={action.route}>
          <MDTypography variant="body2" color="secondary">
            <Tooltip title={action.tooltip} placement="top">
              <Icon>edit</Icon>
            </Tooltip>
          </MDTypography>
        </Link> */}
      </MDBox>
      <MDBox p={2}>
        <MDBox mb={2} lineHeight={1}>
          <MDTypography
            variant="button"
            color="text"
            fontWeight="light"></MDTypography>
        </MDBox>
        <MDBox opacity={0.3}>
          <Divider />
        </MDBox>
        <MDBox>
          {renderItems}
          <MDBox display="flex" py={1} pr={2}>
            <MDTypography
              variant="button"
              fontWeight="bold"
              textTransform="capitalize">
              Insurance information : &nbsp;
            </MDTypography>
            {renderInsuranceInformation}{' '}
          </MDBox>
        </MDBox>
        <MDBox>
          {renderItems}
          <MDBox display="flex" py={1} pr={2}>
            <MDTypography
              variant="button"
              fontWeight="bold"
              textTransform="capitalize">
              Previous Diagnoses : &nbsp;
            </MDTypography>

            {renderPreviousDiagnoses}
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the ProfileInfoCard
ProfileInfoCard.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
  shadow: PropTypes.bool,
};

export default ProfileInfoCard;

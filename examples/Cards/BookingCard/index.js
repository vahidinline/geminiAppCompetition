import PropTypes from 'prop-types';

// @mui material components
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import MDButton from '/components/MDButton';
// NextJS Material Dashboard 2 PRO components
import MDBox from '/components/MDBox';
import MDTypography from '/components/MDTypography';
import MDAlert from '/components/MDAlert';
function BookingCard({
  day,
  image,
  title,
  description,
  sets,
  reps,
  rest,
  duration,
  notes,
  action,
}) {
  const instructions = `
  For this exercise, you should complete ${sets} sets.
  Each set should consist of ${reps} repetitions.
  You should rest for ${rest} between each set.
  After completing all sets of this exercise, rest for a total of ${duration} before moving on to the next exercise.
`;
  return (
    <Card>
      <MDBox
        position="relative"
        //  borderRadius="lg"
        mt={10}
        mx={2}
        className="card-header"
        sx={{ transition: 'transform 300ms cubic-bezier(0.34, 1.61, 0.7, 1)' }}>
        <MDBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="relative"
          zIndex={1}
          overflow="hidden">
          {/* <img
            src={image}
            alt={title}
            style={{ width: '20%', height: '20%' }}
          /> */}
        </MDBox>
      </MDBox>
      <MDBox textAlign="center" pt={3} px={3}>
        <MDBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={action ? -8 : -4.25}>
          {action}
        </MDBox>
        <img src={image} alt={title} style={{ width: '20%', height: '20%' }} />
        <MDTypography variant="h5" fontWeight="regular" sx={{ mt: 4 }}>
          day {day} - {title}
        </MDTypography>
        <MDTypography variant="body2" color="text" sx={{ mt: 1.5, mb: 1 }}>
          {description}
        </MDTypography>
      </MDBox>
      <Divider />
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={0.5}
        pb={3}
        px={3}
        lineHeight={1}>
        <MDTypography variant="body2" fontWeight="regular" color="text">
          {instructions}
        </MDTypography>
      </MDBox>
      <MDBox color="text" alignItems="center">
        <MDAlert color="warning">
          <Icon fontSize="small">info</Icon>&nbsp;
          <MDTypography variant="body2" fontWeight="regular" color="white">
            {notes}
          </MDTypography>
        </MDAlert>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of BookingCard
BookingCard.defaultProps = {
  action: false,
};

// Typechecking props for the BookingCard
BookingCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sets: PropTypes.string.isRequired,
  reps: PropTypes.node.isRequired,
  rest: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default BookingCard;

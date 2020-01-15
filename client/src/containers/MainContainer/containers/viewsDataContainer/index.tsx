import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LineChart from './components/LineChart';
import { StyledChartContainer } from './styled';
import getActivityByWeekSelector from './redux/selectors';


const ViewsDataContainer = (props) => {
  const {
    activityByWeek,
  } = props;

  return (
    <StyledChartContainer>
      <LineChart chartData={activityByWeek} />
    </StyledChartContainer>
  );
};

const mapStateToProps = (state) => ({
  activityByWeek: getActivityByWeekSelector(state),
});

ViewsDataContainer.propTypes = {
  activityByWeek: PropTypes.shape({
    series: PropTypes.arrayOf(PropTypes.object),
    categories: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

export default connect(mapStateToProps)(ViewsDataContainer);

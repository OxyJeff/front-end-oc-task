import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import dayjs from 'dayjs';

class Day extends Component {
  static propTypes = {
    value: PropTypes.instanceOf(dayjs)
  };

  isToday(day) {
    const now = dayjs();
    return now.isSame(day, 'day');
  }

  render() {
    const { value } = this.props;
    const isToday = this.isToday(value);
    const classname = classnames('day', { today: isToday });
    const day = value.date();
    if (day === 1) {
      return <div className={classname}>{value.format('MMM DD日')}</div>;
    }
    return <div className={classname}>{day}</div>;
  }
}

export default Day;

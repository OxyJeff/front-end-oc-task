import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Day from './Day';
import dayjs from 'dayjs';
import './index.css';

const DATE_ROW_COUNT = 6;
const DATE_COL_COUNT = 7;
const weeks = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

class Calendar extends PureComponent {
  static defaultProps = {
    date: new Date()
  };

  static propTypes = {
    date: PropTypes.object
  };

  renderWeekNumber() {
    return (
      <div className="week-row">
        {weeks.map(week => (
          <div key={week} className="week">
            {week}
          </div>
        ))}
      </div>
    );
  }

  render() {
    const date = dayjs(this.props.date);
    const start = date.date(1).startOf('week');
    let rows = [...Array(DATE_ROW_COUNT).keys()];
    const generateRow = rowNum => {
      const offset = rowNum * DATE_COL_COUNT;
      const rowStart = start.add(offset, 'day');
      const days = [];
      for (let i = 0; i < DATE_COL_COUNT; i++) {
        const temp = rowStart.add(i, 'day');
        const day = <Day key={temp.valueOf()} value={temp} />;
        days.push(day);
      }
      return days;
    };
    rows = rows.map(rowNum => {
      return (
        <div key={rowNum} className="day-row">
          {generateRow(rowNum)}
        </div>
      );
    });
    const weekRows = this.renderWeekNumber();
    return (
      <div className="oc-calendar">
        {weekRows}
        {rows}
      </div>
    );
  }
}

export default Calendar;

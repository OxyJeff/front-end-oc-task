import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import dayjs from 'dayjs';

class Day extends Component {
  static defaultProps = {
    onClick: () => {},
    events: []
  };

  static propTypes = {
    value: PropTypes.instanceOf(dayjs),
    onClick: PropTypes.func,
    events: PropTypes.array
  };

  isToday(day) {
    const now = dayjs();
    return now.isSame(day, 'day');
  }

  render() {
    const { value, events } = this.props;
    const isToday = this.isToday(value);
    const classname = classnames('day', { today: isToday });
    const day = value.date();
    const onClick = () => {
      const date = value.toDate();
      this.props.onClick(date);
    };
    const eventsList = events.slice(0, 3).map(event => (
      <div id={event.id} className="day-event">
        {event.name}
      </div>
    ));
    if (events.length > 3) {
      eventsList.push(<div className="more-event">更多</div>);
    }
    if (day === 1) {
      return (
        <div onClick={onClick} className={classname}>
          <span>{value.format('MMM DD日')}</span>
          <div className="day-events">{eventsList}</div>
        </div>
      );
    }
    return (
      <div onClick={onClick} className={classname}>
        <span>{day}</span>
        <div className="day-events">{eventsList}</div>
      </div>
    );
  }
}

export default Day;

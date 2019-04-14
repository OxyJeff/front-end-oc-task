import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import sortBy from 'lodash/sortBy';
import dayjs from 'dayjs';
import './index.scss';

class EventList extends Component {
  render() {
    const { events, date } = this.props;
    return (
      <div className="event-list">
        <List
          header={
            <div className="title">{dayjs(date).format('YYYY年MMM')}</div>
          }
          bordered
          dataSource={events}
          renderItem={event => (
            <List.Item>
              {dayjs(event.date).format('DD MMM YYYY HH:mm')} {event.name}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ events, date }) => {
  const isSameMonth = (d1, d2) => {
    return d1.getMonth() === d2.getMonth();
  };
  const filtered = events.filter(event => isSameMonth(event.date, date));
  const sorted = sortBy(filtered, 'date');
  return {
    events: sorted,
    date
  };
};
export default connect(mapStateToProps)(EventList);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Select, { Option } from 'rc-select';
import './index.css';
import 'rc-select/assets/index.css';

class Header extends Component {
  static defaultProps = {
    date: new Date(),
    onDateChange: () => {}
  };

  static propTypes = {
    date: PropTypes.instanceOf(Date),
    onDateChange: PropTypes.func
  };

  renderYearSelector() {
    const { date, onDateChange } = this.props;
    const year = dayjs(date).year();
    const nowYear = dayjs().year();
    const options = [...Array(100).keys()].map(i => {
      const year = nowYear - i;
      return (
        <Option key={year} value={year}>
          {year}年
        </Option>
      );
    });
    return (
      <Select
        style={{ width: 100 }}
        dropdownMenuStyle={{ height: 200 }}
        value={year}
        optionLabelProp="children"
        onChange={year => {
          const newDate = dayjs(date)
            .year(year)
            .toDate();
          onDateChange(newDate);
        }}
      >
        {options}
      </Select>
    );
  }

  renderMonthSelector() {
    const { date, onDateChange } = this.props;
    const month = dayjs(date).month() + 1;
    const options = [...Array(12).keys()].map(i => {
      return (
        <Option key={i + 1} value={i + 1}>
          {i + 1}月
        </Option>
      );
    });
    return (
      <Select
        style={{ width: 80 }}
        dropdownMenuStyle={{ height: 200 }}
        value={month}
        optionLabelProp="children"
        onChange={month => {
          const newDate = dayjs(date)
            .month(month)
            .toDate();
          onDateChange(newDate);
        }}
      >
        {options}
      </Select>
    );
  }

  render() {
    const { onDateChange } = this.props;
    return (
      <header className="navigation">
        <div className="logo">日历</div>
        <div className="today-btn">
          <button
            onClick={() => {
              onDateChange(new Date());
            }}
          >
            今天
          </button>
        </div>
        <div className="year-selector"> {this.renderYearSelector()}</div>
        <div className="month-selector">{this.renderMonthSelector()}</div>
      </header>
    );
  }
}

export default Header;

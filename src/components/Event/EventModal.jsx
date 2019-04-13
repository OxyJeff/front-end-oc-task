import React, { Component } from 'react';
import Dialog from 'rc-dialog';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import 'rc-dialog/assets/index.css';

class EventModal extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    onOk: PropTypes.func,
    date: PropTypes.instanceOf(Date)
  };

  render() {
    const { visible, onClose, date } = this.props;
    return (
      <Dialog title="添加事件" visible={visible} onClose={onClose}>
        <div>{dayjs(date).format('YYYY年MMMDD日')}</div>
        <div>
          事件标题: <input />
        </div>
      </Dialog>
    );
  }
}

export default EventModal;

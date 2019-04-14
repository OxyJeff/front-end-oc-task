import React, { Component } from 'react';
import { Icon, Input, Form, Modal, Select } from 'antd';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Event from 'model/Event';
import { connect } from 'react-redux';
import { requestAddEvent } from 'redux/action';
import './index.scss';

class EventModal extends Component {
  static defaultProps = {
    onClose: () => {},
    onSave: () => {}
  };

  static propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    date: PropTypes.instanceOf(Date)
  };

  onSave = () => {
    const { form, onSave, date, dispatch } = this.props;
    form.validateFields((errors, value) => {
      if (errors) {
        return;
      }
      const event = new Event({ ...value, date });
      dispatch(requestAddEvent(event));
      onSave(event);
    });
  };

  onClose = () => {
    const { onClose } = this.props;
    onClose();
  };

  renderHourSelect() {
    const options = [...Array(24).keys()].map(i => (
      <Select.Option key={i} value={i}>
        {i}
      </Select.Option>
    ));
    return <Select>{options}</Select>;
  }

  renderMinutesSelect() {
    const options = [...Array(60).keys()].map(i => (
      <Select.Option key={i} value={i}>
        {i}
      </Select.Option>
    ));
    return <Select>{options}</Select>;
  }

  render() {
    const { visible, date } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        title="添加事件"
        visible={visible}
        onCancel={this.onClose}
        onOk={this.onSave}
        okText="保存"
        cancelText="取消"
      >
        <div className="event-date">
          <Icon type="clock-circle" /> {dayjs(date).format('YYYY年MMMDD日')}
        </div>
        <Form
          className="event-form"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 12 }}
        >
          <Form.Item label="事件标题">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入标题' }]
            })(<Input placeholder="请输入标题" />)}
          </Form.Item>
          <Form.Item required label="时间">
            <Form.Item style={{ display: 'inline-block', width: 60 }}>
              {getFieldDecorator('hours', { initialValue: 0 })(
                this.renderHourSelect()
              )}
            </Form.Item>
            <span
              style={{
                display: 'inline-block',
                width: '10px',
                textAlign: 'center'
              }}
            >
              :
            </span>
            <Form.Item style={{ display: 'inline-block', width: 60 }}>
              {getFieldDecorator('minutes', { initialValue: 0 })(
                this.renderMinutesSelect()
              )}
            </Form.Item>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default connect()(Form.create()(EventModal));

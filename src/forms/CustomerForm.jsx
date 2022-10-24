import React from 'react';
import { Button, Form, Input } from 'antd';
// import { Form, Input, InputNumber, Button, Select, Divider, Row, Col } from 'antd';

// import { PlusOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import { DatePicker } from '@/components/CustomAntd';
export default function CustomerForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="company Name"
        name="company"
        rules={[
          {
            required: true,
            message: 'Please input your company name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Sur Name"
        name="managerSurname"
        rules={[
          {
            required: true,
            message: 'Please input your surname!',
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingRight: '5px',
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Name"
        name="managerName"
        rules={[
          {
            required: true,
            message: 'Please input your manager name!',
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>
      {/* 
      <Form.Item
        name="date"
        label="Date"
        rules={[
          {
            required: true,
            type: 'object',
          },
        ]}
        initialValue={dayjs()}
      >
        <DatePicker style={{ width: '100%' }} format={'DD/MM/YYYY'} />
      </Form.Item> */}
      <Form.Item
        name="phone"
        label="Phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}

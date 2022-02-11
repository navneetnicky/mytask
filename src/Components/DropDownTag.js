import React from "react";
import { Form, Select } from "antd";

const DropDownTag = () => {
  const { Option } = Select;
  return (
    <div>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default DropDownTag;

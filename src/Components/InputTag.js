import React from "react";
import { Input, Form } from "antd";
const InputTag = ({ name, lable, required, placeHolder, type, message }) => {
  return (
    <div>
      <Form.Item
        name={name}
        label={lable}
        rules={[
          {
            required: required,
            message: message,
          },
        ]}
      >
        <Input placeholder={placeHolder} type={type} />
      </Form.Item>
    </div>
  );
};

export default InputTag;

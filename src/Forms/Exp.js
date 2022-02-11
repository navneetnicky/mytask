import React from "react";
import { Form, Input, Button, Space, DatePicker } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const Exp = ({ form }) => {
  const { RangePicker } = DatePicker;
  return (
    <div>
      <Form.List name="experience" initialValue={[undefined]}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
                style={{ marginLeft: "20px" }}
              >
                <Form.Item
                  {...restField}
                  name={[name, "company"]}
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Company",
                    },
                  ]}
                >
                  <Input placeholder="Please Enter Company" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "project"]}
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Project",
                    },
                  ]}
                >
                  <Input placeholder="Please Enter Project" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "role"]}
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Role",
                    },
                  ]}
                >
                  <Input placeholder="Please Enter Role" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "duration_from"]}
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Duration Range in Months",
                    },
                  ]}
                >
                  {/* <RangePicker picker="date" /> */}
                  <Input placeholder="Please Enter Duration Range in Months" />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => (fields.length < 10 ? add() : "")}
                icon={<PlusOutlined />}
              >
                Add Experience
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item></Form.Item>
    </div>
  );
};

export default Exp;

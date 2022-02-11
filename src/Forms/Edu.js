import React from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const Edu = ({ form }) => {
  return (
    <div>
      <Form.List name="education" initialValue={[undefined]} className="mt-4">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "institute"]}
                  rules={[
                    {
                      required: true,
                      message: "Please Enter School/Collage/Institute",
                    },
                  ]}
                  style={{ marginLeft: "250px" }}
                >
                  <Input placeholder="School/Collage/Institute" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "pass_out_year"]}
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Pass Out Year",
                    },
                  ]}
                >
                  <Input placeholder="Year of graduation" />
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
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item></Form.Item>
    </div>
  );
};

export default Edu;

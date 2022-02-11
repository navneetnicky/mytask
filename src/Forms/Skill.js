import React from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const Skill = ({ form }) => {
  return (
    <>
      <Form.List name="skills" initialValue={[undefined]}>
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
                  name={[name, "name"]}
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Skill Name",
                    },
                  ]}
                  style={{ marginLeft: "250px" }}
                >
                  <Input placeholder="Skill Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "experience"]}
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Pass Out Experience",
                    },
                  ]}
                >
                  <Input placeholder=" Experience" />
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
                Add Skill
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item></Form.Item>
    </>
  );
};

export default Skill;

import React from "react";
import { Form, Input, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const MultiSelectDropdown = (props) => {
  return (
    <>
      <Form.List name="hobbies" initialValue={[undefined]}>
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                style={{ marginLeft: "190px" }}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={["onChange", "onBlur"]}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please Enter Hobby",
                    },
                  ]}
                  noStyle
                  className="p-0"
                >
                  <Input
                    placeholder="Please Enter Hobby"
                    style={{ width: "60%" }}
                  />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => (fields.length < 10 ? add() : "")}
                style={{
                  width: "30%",
                  marginLeft: "250px",
                }}
                icon={<PlusOutlined />}
                block
              >
                Add Hobbies
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item></Form.Item>
    </>
  );
};

export default MultiSelectDropdown;

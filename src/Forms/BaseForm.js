import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { message, Form } from "antd";
import { addCandidate, updateCandidate } from "../Apis/ApisCall";
import StepComponent from "../Components/StepComponent";
import { useNavigate } from "react-router-dom";
const BaseForm = ({ activeUser }) => {
  let navigate = useNavigate();
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };

  const onFinish = (value) => {
    if (activeUser && activeUser.id) {
      updateCandidate(activeUser.id, value)
        .then((response) => {
          if (response && response.status === 200 && response.ok === true) {
            message.success("Candidate Profile Update SuccessFully!");
            navigate("/main");
          }
        })
        .catch((e) => {
          message.error(e);
        });
    } else {
      addCandidate(value)
        .then((response) => {
          if (response && response.status === 201 && response.ok === true) {
            message.success("Candidate Profile Add SuccessFully!");
            navigate("/main");
          }
        })
        .catch((e) => {
          message.error(e);
        });
    }
  };

  return (
    <Row className="mt-3">
      <Col>
        <Form
          {...formItemLayout}
          layout={formLayout}
          form={form}
          initialValues={activeUser}
          onValuesChange={onFormLayoutChange}
          onFinish={onFinish}
          name="user"
        >
          <StepComponent form={form} id={activeUser && activeUser.id} />
        </Form>
      </Col>
    </Row>
  );
};

export default BaseForm;

import React from "react";
import PersonalDetail from "../Forms/PersonalDetail";
import Edu from "../Forms/Edu";
import Skill from "../Forms/Skill";
import Exp from "../Forms/Exp";
import "./my.css";
import { Steps, Button, message } from "antd";

const { Step } = Steps;

const StepComponent = ({ form, id }) => {
  const steps = [
    {
      step: 1,
      title: "Personal Deatils",
      content: <PersonalDetail form={form} />,
    },
    {
      step: 2,
      title: "Education",
      content: <Edu form={form} />,
    },
    {
      step: 3,
      title: "Skills",
      content: <Skill form={form} />,
    },
    {
      step: 4,
      title: "Experience",
      content: <Exp form={form} />,
    },
  ];

  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div>
      <Steps current={current} className="mb-4">
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      {steps.map((item) => (
        <div
          className={`steps-content ${item.step !== current + 1 && "hidden"}`}
        >
          {item.content}
        </div>
      ))}
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && id === undefined ? (
          <Button key="submit" htmlType="submit">
            Submit
          </Button>
        ) : current === steps.length - 1 && id > 0 ? (
          <Button key="submit" htmlType="submit">
            Update
          </Button>
        ) : (
          ""
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepComponent;

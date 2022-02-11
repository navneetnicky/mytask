import React, { useState } from "react";
import { Form, Select } from "antd";
import InputTag from "../Components/InputTag";
import DropDownTag from "../Components/DropDownTag";
import MultiSelectDropdown from "../Components/MultiSelectDropdown";
import FileUpload from "../Components/FileUpload";

const PersonalDetail = ({ form }) => {
  return (
    <div>
      <FileUpload />
      <InputTag
        name="name"
        lable="Name"
        placeHolder="Enter name"
        required={true}
        message={"Please Enter Name"}
        type="text"
      />
      <InputTag
        name="email"
        lable="Email"
        placeHolder="Enter Email"
        required={true}
        message={"Please Enter Email"}
        type="email"
      />
      <DropDownTag />
      <MultiSelectDropdown />
    </div>
  );
};

export default PersonalDetail;

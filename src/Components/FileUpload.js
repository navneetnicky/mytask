import React from "react";
import { Upload, message, Button, Icon } from "antd";

const FileUpload = () => {
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const onChange = (info) => {
    const nextState = {};
    switch (info.file.status) {
      case "uploading":
        nextState.selectedFileList = [info.file];
        break;
      case "done":
        nextState.selectedFile = info.file;
        nextState.selectedFileList = [info.file];
        break;

      default:
        // error or removed
        nextState.selectedFile = null;
        nextState.selectedFileList = [];
    }
  };

  return (
    <>
      <Upload name="profile" customRequest={dummyRequest} onChange={onChange}>
        <Button className="mb-3">Choose Profile photo</Button>
      </Upload>
    </>
  );
};
export default FileUpload;

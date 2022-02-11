import React from "react";
import { List, Avatar } from "antd";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const ListData = ({ data }) => {
  const navigate = useNavigate();

  const sendToCandidateDetails = (id) => {
    navigate(`/main/candidate/${id}`);
  };

  return (
    <Row>
      <Col xs={12}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item onClick={(e) => sendToCandidateDetails(item.id)}>
              <List.Item.Meta
                avatar={<Avatar src={item.profile_picture} />}
                title={<a>{item.name}</a>}
                description={`+91${item.phone}`}
                style={{ cursor: "pointer" }}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default ListData;

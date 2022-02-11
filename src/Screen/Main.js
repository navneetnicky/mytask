import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Button,
} from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { getUser, deleteCandidate } from "../Apis/ApisCall.js";
import ListData from "../Components/ListData.js";
import { useParams, useNavigate } from "react-router-dom";
import "./main.css";

const UsersDeatils = () => {
  const navigate = useNavigate();

  const [userDeatis, setUserDeatils] = useState([]);
  const [userListID, setUserListId] = useState(1);

  const loadAllUsers = () => {
    getUser().then((data) => {
      if (data.error) {
      } else {
        setUserDeatils(data);
      }
    });
  };
  useEffect(() => {
    loadAllUsers();
  }, []);
  const getUserId = (id) => {
    setUserListId(id);
  };
  const onCandidateAdd = () => {
    navigate(`/main/candidate/new`);
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={3} className="border cus-list">
            <Col xs={12}>
              <Button
                className="w-100 bg-dark fw-bolder"
                onClick={onCandidateAdd}
              >
                Add New Candidate
              </Button>
            </Col>
            <Col xs={12}>
              <ListData data={userDeatis} getUserId={getUserId} />
            </Col>
          </Col>
          <Col xs={9} lg={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UsersDeatils;

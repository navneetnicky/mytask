import React from "react";
import GoogleLoginButton from "./Components/GoogleLoginButton";
import { Container, Row, Col } from "react-bootstrap";

const Login = () => {
  return (
    <Container>
      <Row className="h-100 mt-5">
        <Col className="mx-auto">
          <div className="d-flex justify-content-center">
            <div className="p-1">
              <GoogleLoginButton />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

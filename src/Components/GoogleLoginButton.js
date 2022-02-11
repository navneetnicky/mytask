import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  //get response onClick Google Button
  const responseGoogle = (res) => {
    if (res.profileObj) {
      navigate("/main");
    }
  };

  return (
    <GoogleLogin
      clientId="1073116676152-51m7cu02s4m6dt2fcrmm2hdl3ifm1f4s.apps.googleusercontent.com"
      onSuccess={responseGoogle}
      cookiePolicy={"single_host_origin"}
      theme="dark"
    >
      <span style={{ fontWeight: "bolder" }}>LogIn with Google</span>
    </GoogleLogin>
  );
};

export default GoogleLoginButton;

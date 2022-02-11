import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { message, Form } from "antd";
import { getUser, deleteCandidate } from "../Apis/ApisCall";
import { useParams, useNavigate } from "react-router-dom";
import BaseForm from "../Forms/BaseForm";
import { useDispatch } from "react-redux";

const CandidateDetail = () => {
  //states
  const [allUserDetail, setAllUserDeatils] = useState([]);
  const [activeUser, setActiveUser] = useState({});
  const [updateMode, isUpdateMode] = useState(false);

  let navigate = useNavigate();

  let userListID = useParams().id;

  // function for get all candidate data
  const loadAllUsers = () => {
    getUser().then((data) => {
      if (data.error) {
        message.error(data.error);
      } else {
        setAllUserDeatils(data);
      }
    });
  };

  //call function loadAllUser
  useEffect(() => {
    loadAllUsers();
  }, []);

  //find index of selected data then set in state(setActiveUser)
  useEffect(() => {
    let clickedUser = allUserDetail.findIndex(
      (element) => element.id == userListID
    );
    let temp = [...allUserDetail];
    setActiveUser(temp[clickedUser]);
  }, [userListID, allUserDetail]);

  // delete Candidate profile data
  const deleteProfile = (id) => {
    deleteCandidate(id)
      .then((response) => {
        if (response && response.status === 200 && response.ok === true) {
          message.success("Candidate Profile Deleted !");
          navigate("/main");
        }
      })
      .catch((e) => {
        message.error(e);
      });
  };

  return (
    <div className="container-fluid pt-2">
      {!updateMode ? (
        <>
          <Row>
            <Col xs={12} className="d-flex flex-row-reverse pt-2">
              <Button
                className="bg-dark m-1"
                onClick={(e) => deleteProfile(userListID)}
              >
                Delete Candidate
              </Button>
              <Button
                className="bg-dark m-1"
                onClick={(e) => isUpdateMode(true)}
              >
                Update Candidate
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="mx-auto">
              <Row>
                <Col md={7} className="justify-content-center mx-auto mb-3">
                  <img
                    src={activeUser && activeUser.profile_picture}
                    className="img-fluid rounded-circle img-thumbnail"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h6>Basic Information</h6>
              <table
                className="table border table-borderless table-bordered table-md"
                style={{ textAlign: "left" }}
              >
                <thead>
                  <th>Full Name</th>
                  <th>Email Address</th>
                  <th>Mobile No.</th>
                  <th>Gender</th>
                </thead>
                <tr>
                  <td>
                    <p className="my-0">{activeUser && activeUser.name}</p>
                  </td>

                  <td>
                    <p className="my-0">{activeUser && activeUser.email}</p>
                  </td>

                  <td>
                    <p className="my-0">{activeUser && activeUser.phone}</p>
                  </td>

                  <td>
                    <p className="my-0">{activeUser && activeUser.gender}</p>
                  </td>
                </tr>
              </table>
            </Col>

            <Col md={12}>
              <h6>Experience</h6>
              <table
                className="table border table-borderless table-bordered table-md"
                style={{ textAlign: "left" }}
              >
                <thead>
                  <th>Company</th>
                  <th>Project</th>
                  <th>Duration From</th>
                  <th>Duration To</th>
                  <th>Role</th>
                </thead>
                {activeUser &&
                activeUser.experience &&
                activeUser.experience.constructor === Array &&
                activeUser.experience.length > 0
                  ? activeUser.experience.map((element, index) => {
                      return (
                        <tr>
                          <td>
                            <h6 className="my-0">{element.company}</h6>
                          </td>
                          <td>
                            <p className="my-0">{element.project}</p>
                          </td>
                          <td>
                            <p className="my-0">{element.duration_from}</p>
                          </td>
                          <td>
                            <p className="my-0">{element.duration_to}</p>
                          </td>
                          <td>
                            <p className="my-0">{element.role}</p>
                          </td>
                        </tr>
                      );
                    })
                  : ""}
              </table>
            </Col>
            <Col md={6}>
              <h6>Education</h6>
              <table
                className="table border table-borderless table-bordered table-md"
                style={{ textAlign: "left" }}
              >
                <thead>
                  <th>Institute</th>
                  <th>Degree</th>
                  <th>Pass Out Year</th>
                  <th>Percentage</th>
                </thead>
                {activeUser &&
                activeUser.education &&
                activeUser.education.constructor === Array &&
                activeUser.education.length > 0
                  ? activeUser.education.map((element, index) => {
                      return (
                        <tr>
                          <td>
                            <h6 className="my-0">{element.institute}</h6>
                          </td>
                          <td>
                            <p className="my-0">{element.degree}</p>
                          </td>
                          <td>
                            <p className="my-0">{element.percentage}</p>
                          </td>
                          <td>
                            <p className="my-0">{element.pass_out_year}</p>
                          </td>
                        </tr>
                      );
                    })
                  : ""}
              </table>
            </Col>
            <Col md={4}>
              <h6>Skills</h6>
              <table
                className="table border table-borderless table-bordered table-md"
                style={{ textAlign: "left" }}
              >
                <thead>
                  <th>Name</th>
                  <th>experience</th>
                </thead>
                {activeUser &&
                activeUser.skills &&
                activeUser.skills.constructor === Array &&
                activeUser.skills.length > 0
                  ? activeUser.skills.map((element, index) => {
                      return (
                        <tr>
                          <td>
                            <h6 className="my-0">{element.name}</h6>
                          </td>
                          <td>
                            <p className="my-0">{element.experience}</p>
                          </td>
                        </tr>
                      );
                    })
                  : ""}
              </table>
            </Col>
            <Col md={2}>
              <h6>hobbies</h6>
              <table
                className="table border table-borderless table-bordered table-md"
                style={{ textAlign: "left" }}
              >
                <thead>
                  <th>Hobby</th>
                </thead>
                {activeUser &&
                activeUser.hobbies &&
                activeUser.hobbies.constructor === Array &&
                activeUser.hobbies.length > 0
                  ? activeUser.hobbies.map((element, index) => {
                      return (
                        <tr>
                          <td>
                            <p className="my-0">{element}</p>
                          </td>
                        </tr>
                      );
                    })
                  : ""}
              </table>
            </Col>
          </Row>
        </>
      ) : (
        <BaseForm activeUser={activeUser} />
      )}
    </div>
  );
};

export default CandidateDetail;

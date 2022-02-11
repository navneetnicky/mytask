import axios from "axios";

// get all canddidate function
const getUser = () => {
  return fetch(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// candidate delete  function
const deleteCandidate = (id) => {
  return fetch(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.status === 200) {
        console.log(response);
        return response;
      }
    })
    .catch((err) => console.log(err));
};

// add new candidate function
const addCandidate = (data) => {
  console.log("data", data);
  return fetch(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  })
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));
};

// add new candidate function
const updateCandidate = (id, data) => {
  console.log("data", data);
  return fetch(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  })
    .then((response) => {
      console.log(response, response);
      return response;
    })
    .catch((err) => console.log(err));
};

export { getUser, deleteCandidate, addCandidate, updateCandidate };

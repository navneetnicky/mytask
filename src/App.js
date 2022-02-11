import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Main from "./Screen/Main";
import CandidateDetail from "./Components/CandidateDetail";
import BaseForm from "./Forms/BaseForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} exact></Route>
          <Route path="/main" element={<Main />} exact>
            <Route
              path="/main/candidate/:id"
              element={<CandidateDetail />}
              exact
            ></Route>
            <Route
              path="/main/candidate/new"
              element={<BaseForm />}
              exact
            ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

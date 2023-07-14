import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import CLogin from "./components/CLogin";
import SLogin from "./components/SLogin";
import ALogin from "./components/ALogin";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cregistration from "./components/Cregistration";
import Sregistration from "./components/Sregistration";
import SDashboard from "./components/SDashboard";
import SJobapplied from "./components/SJobapplied";
import CDashboard from "./components/CDashboard";
import Cjobpost from "./components/Cjobpost";
import ADashboard from "./components/ADashboard";
import AStudentdetails from "./components/AStudentdetails";
import ACompanydetails from "./components/ACompanydetails";
import Sjobapply from "./components/Sjobapply";
import Sapplied from "./components/Sapplied";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route
            exact
            path="/alogin"
            element={
              <>
                <ALogin />
              </>
            }
          />
          <Route
            exact
            path="/clogin"
            element={
              <>
                <CLogin />
              </>
            }
          />

          <Route
            exact
            path="/slogin"
            element={
              <>
                <SLogin />
              </>
            }
          />

          <Route
            exact
            path="/cregistration"
            element={
              <>
                <Cregistration />
              </>
            }
          />

          <Route
            exact
            path="/sregistration"
            element={
              <>
                <Sregistration />
              </>
            }
          />

          <Route
            exact
            path="/sdashboard"
            element={
              <>
                <SDashboard />
              </>
            }
          />

          <Route
            exact
            path="/sjobapplied"
            element={
              <>
                <SJobapplied />
              </>
            }
          />

          <Route
            exact
            path="/cdashboard"
            element={
              <>
                <CDashboard />
              </>
            }
          />
          <Route
            exact
            path="/cjobpost"
            element={
              <>
                <Cjobpost />
              </>
            }
          />

          <Route
            exact
            path="/adashboard"
            element={
              <>
                <ADashboard />
              </>
            }
          />
          <Route
            exact
            path="/astudentdetails"
            element={
              <>
                <AStudentdetails />
              </>
            }
          />

          <Route
            exact
            path="/acompanydetails"
            element={
              <>
                <ACompanydetails />
              </>
            }
          />
          <Route
            exact
            path="/sjobapply"
            element={
              <>
                <Sjobapply />
              </>
            }
          />
          <Route
            exact
            path="/sapplied"
            element={
              <>
                <Sapplied />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

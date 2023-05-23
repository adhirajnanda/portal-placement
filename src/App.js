import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import SLogin from "./components/SLogin";
import ALogin from "./components/ALogin";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Sregistration from "./components/Sregistration";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/alogin"
          element={
            <>
              <Navbar />
              <ALogin />
              <Footer />
            </>
          }
        />

        <Route
          exact
          path="/slogin"
          element={
            <>
              <Navbar />
              <SLogin />
              <Footer />
            </>
          }
        />

        <Route
          exact
          path="/sregistration"
          element={
            <>
              <Navbar />
              <Sregistration />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

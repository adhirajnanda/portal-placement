import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
<<<<<<< HEAD
import CLogin from "./components/CLogin";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cregistration from "./components/Cregistration";
=======
import SLogin from "./components/SLogin";
import ALogin from "./components/ALogin";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Sregistration from "./components/Sregistration";
>>>>>>> 6096f3c77a9b2b9526c6eb6dfc3e1726ef64f7a0

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
<<<<<<< HEAD
          path="/clogin"
          element={
            <>
              <Navbar />
              <CLogin />
=======
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
>>>>>>> 6096f3c77a9b2b9526c6eb6dfc3e1726ef64f7a0
              <Footer />
              
              
            </>
          }
        />

<Route
          exact
          path="/cregistration"
          element={
            <>
              <Navbar />
              <Cregistration/>
              <Footer />
              
              
            </>
          }
        />
      </Routes>
    </Router>
    
  );
}

export default App;

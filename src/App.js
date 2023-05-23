import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import CLogin from "./components/CLogin";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cregistration from "./components/Cregistration";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/clogin"
          element={
            <>
              <Navbar />
              <CLogin />
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

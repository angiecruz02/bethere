import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/bethere.png";

// ----------------------------8<----------------------------

const Home = () => {
  return (
    <div>
      <img src={Logo} alt="BeThere Logo" style={{ width: "300px" }} />
      <h1>Welcome to our RSVP Application</h1>
      <p>
        <Link to="/signup">Sign Up</Link>
      </p>
      <p>
        <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default Home;

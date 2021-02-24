import React from "react";
import { FaCode } from "react-icons/fa";
import { useSelector } from "react-redux";


function LandingPage(props) {

  const data = useSelector((state) => state.user.userData);
  console.log(data?.email);
  
  
  
  return (
    <> 
      <div className="app">
        <FaCode style={{ fontSize: "4rem" }} />
        <br />
        <span style={{ fontSize: "2rem" }}>Let's Start Coding!</span>
      </div>
      
    </>
  );
}

export default LandingPage;

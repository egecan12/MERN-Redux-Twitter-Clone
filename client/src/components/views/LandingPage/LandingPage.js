import React from "react";
import { FaCode } from "react-icons/fa";
import { useSelector } from "react-redux";
import Gravatar from "react-gravatar";

function LandingPage(props) {
  const data = useSelector((state) => state.user.userData);
  console.log(data?.email);
  console.log(data);

  return (
    <>
      <div className="app">
        <div id="profileInfo" className="d-flex justify-content-around">
          <div className="d-flex ">
            <Gravatar
              email={data?.image}
              style={{ border: "1px solid black", borderRadius: "50%" }}
              size={150}
            />
            <div id="profileTextInfo" className="p-4">
              <div className="d-flex ">
                <b>
                  <p className="d-flex " style={{ fontSize: "1.5em" }}>
                    {" "}
                    {data?.email}
                  </p>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;



//That could be an alternative way to render the data after waiting to fetch the data compeletly
// {data ? (
//   <div>
//     <p>Welcome to landing page ->{data.email}</p>
//     <h1>{data.image}</h1>
//   </div>
// ) : null}
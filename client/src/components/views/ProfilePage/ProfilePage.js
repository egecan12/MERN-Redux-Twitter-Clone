import React from "react";
import Gravatar from "react-gravatar";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";


export default function ProfilePage() {
  const data = useSelector((state) => state.user.userData);
  console.log(data?.email);
  console.log(data);

  return (
    <div>
      <Card body>
        <div id="profileInfo" className="d-flex justify-content-around">
          <div className="d-flex ">
            <Gravatar
              email={data?.email}
              style={{ border: "1px solid black", borderRadius: "50%" }}
              size={50}
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
              <p>This is some text within a card body.</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

//That could be an alternative way to render the data after waiting to fetch the data compeletly
// {data ? (
//   <div>
//     <p>Welcome to landing page ->{data.email}</p>
//     <h1>{data.image}</h1>
//   </div>
// ) : null}


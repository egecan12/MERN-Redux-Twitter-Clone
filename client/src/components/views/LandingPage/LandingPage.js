import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Gravatar from "react-gravatar";
import Form from "react-bootstrap/Form";
import { bringAllTwits } from "../../../_actions/user_actions";

function LandingPage(props) {
  const data = useSelector((state) => state.user.allTwits);
  console.log(data?.[0].email);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      //To know my current status, send Auth request
      dispatch(bringAllTwits()).then((response) => {
        //Not Loggined in Status
        if (!response.payload) {
          console.log("payload failed");
          console.log(response);
          //Loggined in Status
        } else {
          console.log("payload succesful");
        }
      });
    }, 500);
  }, []);
  // const data = useSelector((state) => state.user.userData);
  // console.log(data?.email);
  // console.log(data);

  return (
    <>
      <div className="app">
        {/* <Form >
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Lets write something..</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
        </Form> */}

        <Card style={{ width: "100%", height: "100%" }}>
          {data?.map((twit, index) => (
            <Card
              body
              className="d-flex justify-content-around"
              style={{ marginTop: "5%", padding: "50px" }}
            >
              <div id="profileInfo" className="d-flex justify-content-around">
                <div className="d-flex ">
                  <Gravatar
                    email={data?.[index]?.email}
                    style={{ border: "2px solid black", borderRadius: "50%" }}
                    size={50}
                  />
                  <div id="profileTextInfo" className="p-4">
                    <div className="d-flex">
                      <b>
                        <p className="d-flex " style={{ fontSize: "1.5em" }}>
                          {" "}
                          {data?.[index]?.username}
                        </p>
                      </b>
                    </div>
                    <div >
                      <p style={{ width: "200px" }}>{data?.[index]?.twit}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            // <div>
            //   <Gravatar
            //     email={data?.[0].email}
            //     style={{ border: "1px solid black", borderRadius: "50%" }}
            //     size={50}
            //   />
            //   <p key={index}>
            //     {data?.[index]?.username}:{data?.[index]?.twit}
            //   </p>
            // </div>
          ))}
        </Card>
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

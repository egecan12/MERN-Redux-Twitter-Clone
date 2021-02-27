import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";

import Form from "react-bootstrap/Form";


function LandingPage(props) {
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

        

        <Card body style={{  width: 800, height:500, marginBottom: "-200px" }}>
        
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

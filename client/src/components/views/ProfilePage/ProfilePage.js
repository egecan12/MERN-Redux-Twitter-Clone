import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Gravatar from "react-gravatar";
import Form from "react-bootstrap/Form";
import { bringAllPersonalTwits, auth } from "../../../_actions/user_actions";
import { Link } from "react-router-dom";
import ProfilePageContainer from "./ProfilePage.style";

function ProfilePage(props) {
  const dataTwit = useSelector((state) => state.user.allPersonalTwits);
  const dataAuth = useSelector((state) => state.user.userData);
  console.log(dataAuth?.username);
  const username = dataAuth?.username;

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      let dataToSubmit = {
        username: dataAuth?.username,
      };
      //To know my current status, send Auth request
      dispatch(bringAllPersonalTwits(dataToSubmit)).then((response) => {
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
    setTimeout(() => {
      //To know my current status, send Auth request
      dispatch(auth()).then((response) => {
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
      <ProfilePageContainer>
        <Card
          body
          className="d-flex justify-content-around"
          style={{ marginTop: "5%", padding: "50px" }}
        >
          <div id="profileInfo" className="d-flex justify-content-around">
            <div className="d-flex ">
              <Gravatar
                style={{ border: "2px solid black", borderRadius: "50%" }}
                size={50}
                email={dataAuth?.email}
              />
              <div id="profileTextInfo" className="p-4">
                <div className="d-flex">
                  <b>
                    <p className="d-flex " style={{ fontSize: "1.5em" }}>
                      {dataAuth?.username}
                    </p>
                  </b>
                </div>
                <div>
                  <p style={{ width: "200px" }}>Bio: {dataAuth?.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <div className="wrapper">
          <div className="wrapper2">
            <div className="main-form"></div>

            <div className="all-posts">
              {dataTwit?.map((twit, index) => (
                <div className="main-post" key={index}>
                  <div className="header-post">
                    <div className="profile-post">
                      <Gravatar
                        email={dataTwit?.[index]?.email}
                        style={{
                          border: "2px solid black",
                          borderRadius: "50%",
                        }}
                        size={50}
                      />

                      <div className="name-date-post">
                        <Link to="/" className="name-post" />
                        <div className="date-post">
                          {dataTwit?.[index]?.username}
                        </div>
                      </div>
                      <i className="material-icons">more_vert</i>
                    </div>
                  </div>
                  <div className="content-post">{dataTwit?.[index]?.twit}</div>
                  <div className="bottom-post">
                    <div className="like-post">
                      <i className="material-icons">thumb_up</i>
                    </div>
                    <div className="comment-post">
                      <i className="material-icons">comment</i>
                    </div>
                    <div className="share-post">
                      <i className="material-icons">share</i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ProfilePageContainer>
    </>
  );
}

export default ProfilePage;

//That could be an alternative way to render the data after waiting to fetch the data compeletly
// {data ? (
//   <div>
//     <p>Welcome to landing page ->{data.email}</p>
//     <h1>{data.image}</h1>
//   </div>
// ) : null}

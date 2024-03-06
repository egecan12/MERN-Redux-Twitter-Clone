import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Gravatar from "react-gravatar";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import LandingPage2Container from "./LandingPage2.style";
import { bringAllTwits } from "../../../_actions/user_actions";

export default function LandingPage2(props) {
  const data = useSelector((state) => state.user.allTwits);
  // console.log(data?.[0].email);
  let myUsername = props?.user?.userData?.username;

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
  return (
    <LandingPage2Container>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <div className="wrapper">
        <div className="wrapper2">
          <div className="main-form">
            {/* <Form className="form-wrapper" action="/post">
              <input
                className="form-control-name"
                type="text"
                name="name"
                placeholder={myUsername}
                value={myUsername}
                maxlength="25"
                pattern="[\S]{4,25}"
                required
              />
              <br />
              <textarea
                className="form-control"
                placeholder="What's in your mind?"
                maxlength="280"
                minlength="4"
                name="post"
                required
              ></textarea>
              <i className="material-icons right">send</i>
              <input className="submit-button" type="submit" value="Post" />
            </Form> */}
          </div>

          <div className="main-form">
            <Form className="form-wrapper" action="/search">
              <input
                className="form-control-name"
                type="text"
                name="query"
                maxLength="25"
                placeholder="What are you looking for?"
                required
              />
              <i className="material-icons right">search</i>
              <input className="submit-button" type="submit" value="Search" />
            </Form>
          </div>

          <div className="all-posts">
            {data?.map((twit, index) => (
              <div className="main-post" key={index}>
                <div className="header-post">
                  <div className="profile-post">
                    <Gravatar
                      email={data?.[index]?.email}
                      style={{ border: "2px solid black", borderRadius: "50%" }}
                      size={50}
                    />

                    <div className="name-date-post">
                      <Link to="/" className="name-post" />
                      <div className="date-post">{data?.[index]?.username}</div>
                    </div>
                    <i className="material-icons">more_vert</i>
                  </div>
                </div>
                <div className="content-post">{data?.[index]?.twit}</div>
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
    </LandingPage2Container>
  );
}

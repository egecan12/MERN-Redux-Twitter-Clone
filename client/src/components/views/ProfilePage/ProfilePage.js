import React, { useEffect } from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { bringAllPersonalTwits } from "../../../_actions/user_actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfilePageContainer from "./ProfilePage.style";
import Card from "react-bootstrap/Card";
import Gravatar from "react-gravatar";
import { Form, Input, Button } from "antd";

function ProfilePage(props) {
  const dataTwit = useSelector((state) => state.user.allPersonalTwits);
  const dataAuth = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    var egeForm = document.getElementById("egeForm"); // Get the element with id="demo"
  }, 500);
  return (
    <Formik
      id="formik"
      initialValues={{
        username: props?.user?.userData?.username,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            username: props.user.userData.username,
          };

          dispatch(bringAllPersonalTwits(dataToSubmit)).then((response) => {
            if (response.payload.success) {
              console.log("succesful payload");
            } else {
              // alert(response.payload.err.errmsg)
              console.log("failed payload");
            }
          });

          setSubmitting(true);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="mainDiv">
            <Form
              style={{ minWidth: "375px", marginTop: "10%", marginLeft: "30%", }}
              id="egeForm"
              onSubmit={handleSubmit}
            >
              <Form.Item>
                <Button
                  onClick={handleSubmit}
                  type="primary"
                  disabled={isSubmitting}
                >
                  Bring my Words
                </Button>
              </Form.Item>
            </Form>

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
                      size={100}
                      email={dataAuth?.email}
                    />
                    <div id="profileTextInfo" className="p-4">
                      <div className="d-flex">
                        <p className="d-flex " style={{ fontSize: "1.1em" }}>
                          Username: <b>{dataAuth?.username}</b>
                        </p>
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
                        <div className="content-post">
                          {dataTwit?.[index]?.twit}
                        </div>
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
          </div>
        );
      }}
    </Formik>
  );
}

export default ProfilePage;

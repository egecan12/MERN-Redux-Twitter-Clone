import React from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { addTwit, updateProfileSettings } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";
import Gravatar from "react-gravatar";

import { Form, Input, Button } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function ProfileSettingsPage(props) {
  let myEmail = props.user?.userData?.email;
  let myBio = props.user?.userData?.bio;
  let myBirthday = props.user?.userData?.birthday;


  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        bio: "",
        email: "",
        birthday: "",
      }}
      validationSchema={Yup.object().shape({
        bio: Yup.string().required("bio is required"),
        birthday: Yup.string().required("birthday is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            bio: values.bio,
            email: props.user.userData.email,
            birthday: values.birthday,
          };

          console.log(props.user?.userData?.email);
          dispatch(updateProfileSettings(dataToSubmit)).then((response) => {
            if (response.payload.success) {
              props.history.push("/");
            } else {
              alert(response.payload.err.errmsg);
            }
          });

          setSubmitting(false);
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
          <div className="app">
            <h2>Profile Settings</h2>
            <Form
              style={{ minWidth: "375px" }}
              onSubmit={handleSubmit}
            >
              <Gravatar
                email={myEmail}
                style={{ border: "1px solid black", borderRadius: "50%" }}
                size={150}
              />
              <Form.Item required label="Biography">
                <Input
                  id="bio"
                  placeholder={myBio}
                  type="text"
                  value={values.bio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
              </Form.Item>

              <Form.Item>
                <label htmlFor="birthday" className="text-secondary">
                  What is your Birthdate:
                </label>
                <input
                  className="form-control"
                  type="date"
                  id="birthday"
                  name="birthday"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.birthday}
                />
              </Form.Item>
              <Form.Item >
                <label htmlFor="forgetPassword">
                  Send us an email to change your password
                </label>
                <Button type="primary">Reset Password</Button>
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={handleSubmit}
                  type="primary"
                  disabled={isSubmitting}
                >
                  Save and Countinue
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default ProfileSettingsPage;

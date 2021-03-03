import React from "react";
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { addTwit, updateProfileSettings } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";

import {
  Form,
  Input,
  Button,
} from 'antd';

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

function ProfilePage(props) {
  const dispatch = useDispatch();
  return (

    <Formik
      initialValues={{
        bio: '',
        email: '',
     
      }}
      validationSchema={Yup.object().shape({
        bio: Yup.string()
          .required('bio is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            bio: values.bio,
            email: props.user.userData.email,
          };

          dispatch(updateProfileSettings(dataToSubmit)).then(response => {
            if (response.payload.success) {
              props.history.push("/");
            } else {
              alert(response.payload.err.errmsg)
            }
          })

          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
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
            <h2>Add bio</h2>
            <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >

              <Form.Item required label="bio">
                <Input
                  id="bio"
                  placeholder="Enter your bio"
                  type="text"
                  value={values.bio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};


export default ProfilePage

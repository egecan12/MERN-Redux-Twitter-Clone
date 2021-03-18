import React from "react";
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { addTwit } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";
import AddTwitContainer from "./addTwit.style";

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

function AddTwit(props) {
  const dispatch = useDispatch();
  return (

    <Formik
      initialValues={{
        twit: '',
        username: '',
        email: '',
     
      }}
      validationSchema={Yup.object().shape({
        twit: Yup.string()
          .required('twit is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            email: props.user.userData.email,
            twit: values.twit,
            username: props.user.userData.username,
          };

          dispatch(addTwit(dataToSubmit)).then(response => {
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
          <AddTwitContainer>
          <div className="mainDiv">
            <h2 style={{ color: 'white' }}>Say something !</h2>
            <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >

              <Form.Item required label="Twit is required">
                <Input
                  id="twit"
                  placeholder="Enter your twit"
                  type="text"
                  value={values.twit}
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
          </AddTwitContainer>
        );
      }}
    </Formik>
  );
};


export default AddTwit

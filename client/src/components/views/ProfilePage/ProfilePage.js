import React from "react";
import Gravatar from "react-gravatar";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

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
              style={{ border: "2px solid black", borderRadius: "50%" }}
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
              <h6>Hey you ! This page UI is not working yet... still in development process </h6>
            </div>
          </div>
        </div>
      </Card>
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <div
              className="d-flex"
              id="anaDiv"
              style={{
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Gravatar
                email={data?.email}
                style={{ border: "1px solid black", borderRadius: "50%" }}
                size={150}
              />
              <p className="text-secondary"> Push Notifications: </p>
              <BootstrapSwitchButton
                width={100}
                onstyle="outline-success"
                offstyle="outline-danger"
                // checked={settings.pushNotifications}
              />
              <br />
              <p className="text-secondary">Public Profile:</p>
              <BootstrapSwitchButton
                width={100}
                onstyle="outline-success"
                offstyle="outline-danger"
                // checked={settings.publicProfile}
              />
              <br />
              <p className="text-secondary">*Get an Unique Username</p>
              <input
                className="form-control"
                type="text"
                maxLength={20}
                value={data?.username}
              />
              <br />
              <p className="text-secondary">Bio</p>
              <input
                className="form-control"
                type="text"
                maxLength={60}
                // value={settings.bio}
              />
              <br />
              <label htmlFor="birthday" className="text-secondary">
                What is your Birthdate:
              </label>
              <input
                className="form-control"
                type="date"
                id="birthday"
                name="birthday"
                // value={settings.birthday}
              />
              <br />
              <label htmlFor="text" className="text-secondary">
                Where are you from:
              </label>{" "}
              <select
                className="form-control"
                name="country"
                id="cars"
                // value={settings.country}
              >
                <option value="england">England</option>
                <option value="canada">Canada</option>
                <option value="u.s.a">U.S.A</option>
                <option value="turkey">Turkey</option>
                <option value="other">Other</option>
              </select>
              <br />
              <form
                action="mailto:someone@example.com"
                method="post"
                encType="text/plain"
              >
                <p className="text-secondary">
                  To change the email address, send us an email
                </p>
                <button type="submit" className="btn btn-warning">
                  Send a request mail
                </button>
              </form>
              <br />
              <div className="d-flex flex-row-reverse">
                <a href="/userProfilePage">
                  <button
                    // onClick={this.save}
                    type="submit"
                    className="btn btn-success"
                  >
                    Save Settings & Continue
                  </button>
                </a>
                <a href="/userProfilePage">
                  <button type="submit" className="btn btn-danger">
                    Cancel Changes
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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

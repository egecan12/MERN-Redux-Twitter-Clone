import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Gravatar from "react-gravatar";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import LandingPage2Container from "./LandingPage2.style";

export default function LandingPage2() {
  return (
    <LandingPage2Container>
      <nav id="navbar">
        <ul>
          <Link href="/post"></Link>
          <li>
            <i class="material-icons menu">send</i>Post
          </li>
          <Link href="/hashtag">
            <li>
              <i class="material-icons menu">trending_up</i>Hashtag
            </li>
          </Link>
          <Link href="/person">
            <li>
              <i class="material-icons menu">person</i>Person
            </li>
          </Link>
          <Link href="/">
            <li>
              <i class="material-icons menu">home</i>Home
            </li>
          </Link>
        </ul>
      </nav>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <div className="wrapper">
        <div className="wrapper2">
          <div className="main-form">
            <Form className="form-wrapper" action="/post">
              <input
                className="form-control-name"
                type="text"
                name="name"
                placeholder="Your name..."
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
            </Form>
          </div>

          <div className="main-form">
            <Form className="form-wrapper" action="/search">
              <input
                className="form-control-name"
                type="text"
                name="query"
                maxlength="25"
                placeholder="What are you looking for?"
                value="{{this.search_query}}"
                required
              />
              <i className="material-icons right">search</i>
              <input className="submit-button" type="submit" value="Search" />
            </Form>
          </div>

          <div className="all-posts">
            <div className="main-post">
              <div className="header-post">
                <div className="profile-post">
                  <Link
                    className="picture-post"
                    href="/search?query=%40{{this.name}}"
                  />
                  <div className="name-date-post">
                    <Link
                      hrclassNameef="/search?query=%40{{this.name}}"
                      class="name-post"
                    />
                    <div className="date-post">"this.relative_time"</div>
                  </div>
                  <i className="material-icons">more_vert</i>
                </div>
              </div>
              <div className="content-post">
                this.post <Link className="hashtag" href="#" />
                test <Link class="hashtag" href="#" />
                wohoooOOO aha <Link className="person" href="#" />
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
          </div>
        </div>
      </div>
    </LandingPage2Container>
  );
}

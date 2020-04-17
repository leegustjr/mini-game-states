import React from 'react';
import './Main.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function Info(props) {
  const { nickname } = props;

  return (
    <nav className="navbar navbar-light navbar-expand-md" id="nav">
      <div className="container-fluid">
        <div
          className="navbar-brand"
          id="TeamName"
          onClick={() => {
            props.history.push('/');
          }}
        >
          Black Tardis
        </div>
        <button
          type="button"
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse d-md-flex d-lg-flex d-xl-flex justify-content-md-end justify-content-lg-end justify-content-xl-end"
          id="navcol-1"
        >
          <ul className="nav navbar-nav">
            <li className="nav-item" role="presentation">
              <div className="nav-link active" id="welcomePrint">
                {nickname}
                님, 반갑습니다.
              </div>
            </li>
            <li className="nav-item" role="presentation">
              {props.isLogined === false ? (
                <button
                  className="btn btn-primary"
                  id="signUp"
                  type="button"
                  onClick={() => {
                    props.history.push('/signup');
                  }}
                >
                  Sign Up
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  id="logoutButton"
                  type="button"
                  onClick={() => {
                    props.logOut();
                    props.changeNickname('guest');
                    axios.post('http://13.209.41.64:4100/users/signout', {
                      refreshToken: props.token.refreshToken,
                    });
                    alert('다시 로그인해 주세요');
                    props.history.push('/');
                  }}
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Info);

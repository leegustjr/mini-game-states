import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Welcome.css';
import axios from 'axios';

function Welcome(props) {
  // 로그인 요청시 처리하는 함수
  function login() {
    const obj = { user: {} };
    obj.user.username = document.querySelector('#IDbox').value;
    obj.user.password = document.querySelector('#PWbox').value;

    axios
      .post('http://13.209.41.64:4100/users/signin', obj)
      .then((res) => {
        props.changeNickname(res.data.user.nickname);
        props.changeToken(res.data.accessToken, res.data.refreshToken);

        // 아래 함수를 통해 store의 닉네임 변경 후 입장.
        props.login();
        // main페이지로 이동

        props.history.push('main');
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert('Password를 확인해주세요');
        }
        if (error.response.status === 404) {
          alert('회원가입 해주세요');
        }
      });
  }

  return (
    <section>
      <div>
        <div>
          <section id="leftCon">
            <div id="BT" />
            <Link
              to="main"
              id="withoutLogin"
              type="button"
              onClick={() => {
                props.changeNickname('guest');
              }}
            >
              Let's Play!!
              <br />
              (without Login)
            </Link>
          </section>
        </div>
        <div>
          <section id="rightCon">
            <div id="welTeamName">Black Tardis</div>
            <input
              type="text"
              id="IDbox"
              placeholder="ID 를 입력하세요"
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  login();
                }
              }}
            />
            <input
              type="password"
              id="PWbox"
              placeholder="PW 를 입력하세요"
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  login();
                }
              }}
            />
            <div id="loginButton" type="button" onClick={login}>
              Let's Play!!
              <br />
              (Login)
            </div>
            <Link to="signup" id="signupbutton" type="button">
              Sign Up :)
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}

export default withRouter(Welcome);

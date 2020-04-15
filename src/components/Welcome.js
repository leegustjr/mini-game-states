import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Welcome.css';
import axios from 'axios';

function Welcome(props) {
  return (
    <section id="BG">
      <div>
        <div>
          <section id="leftCon">
            <div id="BT"></div>
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
            <input type="text" id="IDbox" placeholder="ID 를 입력하세요" />
            <input type="password" id="PWbox" placeholder="PW 를 입력하세요" />
            <div
              id="loginButton"
              type="button"
              onClick={() => {
                // store의 isLogined 상태 변경
                props.login();
                // 아래 함수를 통해 store의 닉네임 변경 후 입장.
                let obj = { user: {} };
                obj.user.username = document.querySelector('#IDbox').value;
                obj.user.password = document.querySelector('#PWbox').value;

                axios.defaults.withCredentials = true;
                axios
                  .post('http://13.209.41.64:4100/users/signin', obj)
                  .then((res) => {
                    props.changeNickname(res.data.user.nickname);
                    props.changeToken(
                      res.data.accessToken,
                      res.data.refreshToken,
                    );
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
              }}
            >
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

    // <div>
    //   this is Welcome component
    //   {/* 아래 Link Component를 이용하여 회원가입 창으로 이동하세요 */}
    //   <Link to="/signup">회원 가입을 하러 가즈아!!</Link>
    //   {/* 로그인 성공 시 history.push를 이용하여 main 창으로 이동하세요 */}
    //   <button
    //     type="button"
    //     onClick={() => {
    //       // store의 isLogined 상태 변경
    //       props.login();
    //       // 아래 함수를 통해 store의 닉네임 변경 후 입장.
    //       props.changeNickname('ㅆㅂ..');
    //       // main페이지로 이동
    //       props.history.push('main');
    //     }}
    //   >
    //     로그인 성공시 setState변경
    //   </button>
    //   {/* guest로 입장 시 아래 링크를 이용하여 main 창으로 이동하세요 */}
    //   <Link to="/main">guest 로그인 하러 가즈아!!</Link>
    // </div>
  );
}

export default withRouter(Welcome);

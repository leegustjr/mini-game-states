import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Redirect } from 'react-router-dom';
import './Signup.css';
import styled from 'styled-components';
import background from './images/background.png';

axios.defaults.withCredentials = true;
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: '',
        passwordCheck: '',
        nickname: '',
        email: '',
      },
      redirect: false,
      isIdChecked: false,
      isNicknameChecked: false,
    };
  }

  // 들어오는 Input값에 따라 state의 user정보가 변하는 함수
  handleInputValue = (key) => (e) => {
    let result = this.state;
    result.user[key] = e.target.value;
    this.setState(result);
  };

  // 입력된 패스워드가 서로 맞는지 확인하는 함수
  passwordCheck = (state) => {
    if (state.user.password === state.user.passwordCheck) {
      return true;
    }
    return false;
  };

  // submit버튼 클릭 시 서버에 singup post요청을 보내는 함수
  signUp = (e) => {
    e.preventDefault();
    let body = this.state;
    let passwordCheck = this.passwordCheck(this.state);

    if (!this.state.isIdChecked) {
      alert('ID 중복여부를 확인해 해주세요');
    }

    if (!this.state.isNicknameChecked) {
      alert('닉네임 중복여부를 확인해 해주세요');
    }

    if (!passwordCheck) {
      alert('비밀번호가 서로 맞지 않습니다');
    }

    if (
      this.state.isIdChecked &&
      this.state.isNicknameChecked &&
      passwordCheck
    ) {
      axios
        .post('http://13.209.41.64:4100/users/signup', body)
        .then((res) => {
          alert('다시 로그인해 주세요');
          this.setState({ redirect: true });
        })
        .catch((err) => alert(err));
    }
  };

  // 중복ID가 존재하는지 확인하는 함수
  checkDuplicate = (url) => {
    let body = this.state;

    axios
      .post(`http://13.209.41.64:4100/users/${url}`, body)
      .then((res) => {
        if (url === 'checkID' && res.data === 'Username available') {
          let curState = this.state;
          curState.isIdChecked = true;
          this.setState(curState);
          alert('사용 가능합니다.');
        } else if (
          url === 'checknickname' &&
          res.data === 'Nickname Available'
        ) {
          let curState = this.state;
          curState.isNicknameChecked = true;
          this.setState(curState);
          alert('사용 가능합니다.');
        } else {
          alert('이미 사용중입니다.');
        }
      })
      .catch((err) => alert(err));
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <Container>
          <div id="top">
            <div>
              <nav className="navbar navbar-light navbar-expand-md" id="nav">
                <div className="container-fluid">
                  <div className="navbar-brand" id="TeamName">
                    Black Tardis
                  </div>
                </div>
              </nav>
            </div>

            <div className="signUpContainer">
              <div className="row">
                <div id="title" className="col-7">
                  Sign up
                </div>
              </div>
              <div className="row">
                {/* id 입력 폼 */}
                <div id="sub" className="col-7">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                      >
                        ID
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                      onChange={this.handleInputValue('username')}
                    />
                    <span>
                      <button
                        type="button"
                        className="btn btn-primary button"
                        onClick={(e) => {
                          e.preventDefault();
                          this.checkDuplicate('checkID');
                        }}
                      >
                        ID CHECK
                      </button>
                    </span>
                  </div>
                </div>

                {/* 패스워드 form */}
                <div id="sub" className="col-7">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                      >
                        PASSWORD
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                      onChange={this.handleInputValue('password')}
                    />
                  </div>
                </div>

                {/* 패스워드 확인 form */}
                <div id="sub" className="col-7">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                      >
                        PASSWORD CHECK
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                      onChange={this.handleInputValue('passwordCheck')}
                    />
                  </div>
                </div>

                {/* 닉네임 form */}
                <div id="sub" className="col-7">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                      >
                        NICKNAME
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                      onChange={this.handleInputValue('nickname')}
                    />
                    <span>
                      <button
                        type="button"
                        className="btn btn-primary button"
                        onClick={(e) => {
                          e.preventDefault();
                          this.checkDuplicate('checknickname');
                        }}
                      >
                        NICKNAME CHECK
                      </button>
                    </span>
                  </div>
                </div>

                {/* email 주석 */}
                <div id="desc" className="col-7">
                  * e-mail은 선택사항입니다
                </div>

                {/* email form */}
                <div id="sub" className="col-7">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                      >
                        E-MAIL
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                      onChange={this.handleInputValue('email')}
                    />
                  </div>
                </div>

                <div id="sub" className="col-7">
                  <div className="row">
                    <div id="sub" className="col-2">
                      <button
                        type="button"
                        className="btn btn-primary button"
                        onClick={this.signUp}
                      >
                        submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      );
    }
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${background});
`;

export default withRouter(Signup);

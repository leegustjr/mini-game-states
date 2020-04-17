import React from 'react';
import Tetris from './Tetris/components/Tetris';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';
// import './Tetris.css';

const postScore = (score, props) => {
  const { nickname, token } = props.user;
  alert(`${props.user.nickname}의 점수는 ${score}점 입니다.`);

  if (nickname === 'guest' || token.accessToken === '') {
    return;
  }
  const config = {
    // eslint-disable-next-line react/destructuring-assignment
    headers: { Authorization: token.accessToken },
  };

  const body = { gameTitle: 'Tetris', score };
  axios
    .post('http://13.209.41.64:4100/scores/scores', body, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => alert(err));
};
const Tetris1 = (props) => {
  return (
    <div>
      <TetrisWrap>
        <Tetris postScore={postScore} user={props} />
      </TetrisWrap>
    </div>
  );
};

const TetrisWrap = styled.div`
  padding-top: 30px;
  overflow: hidden;
  line-height: normal;
  height: 780px;
`;

function mapReduxStateToReactProps(state) {
  return {
    nickname: state.nickname,
    token: state.token,
  };
}

export default connect(mapReduxStateToReactProps)(Tetris1);
// export default Tetris1;

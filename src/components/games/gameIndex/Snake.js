import React from 'react';
import { Context, SnakeGame } from 'react-game-snake';
import { connect } from 'react-redux';
import axios from 'axios';
import '../../Main.css';

const sendScore = (props) => {
  const { nickname, token } = props.options.user;

  if (nickname === 'guest' || token.accessToken === '') {
    return;
  }

  const config = {
    headers: { Authorization: token.accessToken },
  };
  axios
    .post(
      'http://13.209.41.64:4100/scores/scores',
      { gameTitle: 'Snake', score: props.game.points },
      config,
    )
    .then(alert(`${nickname} 님의 점수는 ${props.game.points} 점 입니다.`))
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const Snake = (props) => {
  return (
    <div className="container" id="snakeGameTag">
      <SnakeGame
        user={props}
        colors={{
          field: '#bdc3c7',
          food: '#9b59b6',
          snake: '#3498db',
        }}
        countOfHorizontalFields={25}
        countOfVerticalFields={25}
        fieldSize={20}
        loopTime={150}
        pauseAllowed={true}
        restartAllowed={true}
        onLoose={sendScore}
        onPause={(context: Context) => alert('paused')}
        onRestart={(context: Context) => alert('restarted')}
        onResume={(context: Context) => alert('onResume')}
        onWin={(context: Context) =>
          alert(`You won with ${context.game.points} points.`)
        }
      />
      <div id="textInSnake">Press 'P' for stop game</div>
      <div id="textInSnake">Press 'R' for restart game</div>
    </div>
  );
};

function mapReduxStateToReactProps(state) {
  return {
    nickname: state.nickname,
    token: state.token,
  };
}

export default connect(mapReduxStateToReactProps)(Snake);

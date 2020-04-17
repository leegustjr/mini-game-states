import { connect } from 'react-redux';
import LeaderBoard from '../components/LeaderBoard';

function mapReduxStateToReactProps(state) {
  return {
    nickname: state.nickname,
    leaderBoard: state.leaderBoard,
    token: state.token,
    myScore: state.myScore,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLeaderBoard: (leaderBoard) => {
      dispatch({ type: 'LEADER_BOARD', leaderBoard });
    },
    changeMyScore: (gameType, myScore, nickname) => {
      switch (gameType) {
        case 'SNAKE': {
          dispatch({ type: 'CHANGE_MY_SNAKE_SCORE', myScore, nickname });
          break;
        }
        case 'TETRIS': {
          dispatch({ type: 'CHANGE_MY_TETRIS_SCORE', myScore, nickname });
          break;
        }
        case 'SUDOKU': {
          dispatch({ type: 'CHANGE_MY_SUDOKU_SCORE', myScore, nickname });
          break;
        }
        default:
      }
    },
  };
}

export default connect(
  mapReduxStateToReactProps,
  mapDispatchToProps,
)(LeaderBoard);

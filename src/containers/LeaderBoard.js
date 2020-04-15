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
    changeMyScore: (myScore) => {
      dispatch({ type: 'MY_SCORE', myScore });
    },
  };
}

export default connect(
  mapReduxStateToReactProps,
  mapDispatchToProps,
)(LeaderBoard);

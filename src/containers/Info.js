import { connect } from 'react-redux';
import Info from '../components/Info';

function mapReduxStateToReactProps(state) {
  return {
    isLogined: state.isLogined,
    nickname: state.nickname,
    token: state.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => {
      dispatch({ type: 'IS_LOGINED' });
    },
    changeNickname: (nickname) => {
      dispatch({ type: 'NICKNAME', nickname });
    },
  };
}

export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Info);

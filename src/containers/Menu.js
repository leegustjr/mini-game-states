import { connect } from 'react-redux';
import Menu from '../components/Menu';

function mapReduxStateToReactProps(state) {
  return {
    isLogined: state.isLogined,
    displayMode: state.displayMode,
  };
}

// 이건 액션 함수 미사용
function mapDispatchToProps(dispatch) {
  return {
    changeDisplayMode: (displayMode) => {
      dispatch({ type: 'CHANGE_DISPLAYMODE', displayMode });
    },
    setGame: (game) => {
      dispatch({
        type: 'SET_GAME',
        game,
      });
    },
  };
}

export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Menu);

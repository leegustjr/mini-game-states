import React from 'react';
import { connect } from 'react-redux';
import GameContainer from './GameContainer';
import gameIndex from '../gameIndex';
import './main.css';

const shortid = require('shortid');

const GameDisplay = (props) => {
  const { token } = props;
  console.log('token?', token);
  const { currentGame, gameList } = props;
  const isGameSelected = () => {
    if (currentGame) {
      const Game = gameIndex[currentGame.gameTitle];
      return (
        <div>
          <Game token={token} />
        </div>
      );
    }

    return gameList.map((game) => {
      return (
        <GameContainer
          dispatch={props.dispatch}
          key={shortid.generate()}
          game={game}
        />
      );
    });
  };
  return <div id="mainDisplay">{isGameSelected()}</div>;
};

const mapReduxStateToReactProps = (state) => ({
  displayMode: state.displayMode,
  gameList: state.gameList,
  currentGame: state.currentGame,
  setGame: state.setGame,
});

export default connect(mapReduxStateToReactProps)(GameDisplay);

import React from 'react';
import { setGame } from '../../../actions';

const GameContainer = (props) => {
  const { dispatch, game } = props;
  const { gameTitle, thumbnail } = props.game;

  return (
    <span className="gameContainer">
      <div className="gameThumbnail">
        {/* contains image */}
        <img src={require(`../resources/imgs/${thumbnail}`)} />
      </div>
      <div className="gameTitle" onClick={() => dispatch(setGame(game))}>
        {gameTitle}
      </div>
    </span>
  );
};

export default GameContainer;

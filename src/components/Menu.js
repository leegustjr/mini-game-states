import React from 'react';
import './Main.css';
import { withRouter, Link } from 'react-router-dom';

function Menu(props) {
  const { changeDisplayMode, setGame } = props;
  return (
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
        <li
          className="d-xl-flex sidebar-brand"
          id="BTImg"
          onClick={() => {
            props.history.push('/');
          }}
        />
        <li
          onClick={() => {
            setGame(null);
            changeDisplayMode('GAMES');
          }}
        >
          Games
        </li>
        <li onClick={() => changeDisplayMode('LEADERBOARD')}>Leaderboard</li>
        <li onClick={() => changeDisplayMode('NOTICEBOARD')}>Noticeboard</li>
      </ul>
    </div>
  );
}

export default withRouter(Menu);
